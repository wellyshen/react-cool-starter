/* @flow */

import path from 'path';
import morgan from 'morgan';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import hpp from 'hpp';
import favicon from 'serve-favicon';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import chalk from 'chalk';

import createHistory from 'history/createMemoryHistory';
import configureStore from './redux/store';
import Html from './utils/Html';
import App from './containers/App';
import createRoutes from './routes';
import { port, host } from './config';

const app = express();

// Using helmet to secure Express with various HTTP headers
app.use(helmet());
// Prevent HTTP parameter pollution.
app.use(hpp());
// Compress all requests
app.use(compression());

// Use morgan for http request debug (only show error)
app.use(morgan('dev', { skip: (req, res) => res.statusCode < 400 }));
app.use(favicon(path.join(process.cwd(), './build/public/favicon.ico')));
app.use(express.static(path.join(process.cwd(), './build/public')));

// Run express as webpack dev server
if (__DEV__) {
  const webpack = require('webpack');
  const webpackConfig = require('../tools/webpack/webpack.client.babel');

  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    noInfo: true,
    stats: 'minimal',
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

// Register server-side rendering middleware
app.get('*', (req, res) => {
  if (__DEV__) webpackIsomorphicTools.refresh();

  const renderHtml = (store, htmlApp) => {
    const html = renderToStaticMarkup(<Html store={store} htmlApp={htmlApp} />);

    return `<!doctype html>${html}`;
  };
  const history = createHistory();
  const store = configureStore(history);

  // If __DISABLE_SSR__ = true, disable server side rendering
  if (__DISABLE_SSR__) {
    res.send(renderHtml(store));
    return;
  }

  // Setup React-Router server-side rendering
  const routes = createRoutes(store);
  const routerContext = {};
  const htmlContent = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={routerContext}>
        <App routes={routes} />
      </StaticRouter>
    </Provider>,
  );

  // Check if the render result contains a redirect, if so we need to set
  // the specific status and redirect header and end the response
  if (routerContext.url) {
    res.status(301).setHeader('Location', routerContext.url);
    res.end();

    return;
  }

  // Load data on server-side
  const loadBranchData = () => {
    const branch = matchRoutes(routes, req.url);

    const promises = branch.map(({ route, match }) => {
      // Dispatch the action(s) through the loadData method of "./routes.js"
      if (route.loadData) return route.loadData(store.dispatch, match.parameter);

      return Promise.resolve(null);
    });

    return Promise.all(promises);
  };

  // Send response after all the action(s) are dispathed
  loadBranchData()
    .then(() => {
      // Checking is page is 404
      const status = routerContext.status === '404' ? 404 : 200;

      // Pass the route and initial state into html template
      res.status(status).send(renderHtml(store, htmlContent));
    })
    .catch((err) => {
      console.error(`==> 😭  Rendering routes error: ${err}`);
    });
});

if (port) {
  app.listen(port, host, (err) => {
    if (err) console.error(`==> 😭  OMG!!! ${err}`);

    console.info(chalk.green(`==> 🌎  Listening at http://${host}:${port}`));
    // Open Chrome
    require('../tools/openBrowser').default(port);
  });
} else {
  console.error(chalk.red('==> 😭  OMG!!! No PORT environment variable has been specified'));
}
