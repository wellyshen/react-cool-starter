/* @flow */

import path from 'path';
import morgan from 'morgan';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import hpp from 'hpp';
import favicon from 'serve-favicon';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import chalk from 'chalk';

import configureStore from './redux/store';
import renderHtmlPage from './utils/renderHtmlPage';
import App from './containers/App';
import routes from './routes';
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

  const store = configureStore();

  // If __DISABLE_SSR__ = true, disable server side rendering
  if (__DISABLE_SSR__) {
    res.send(renderHtmlPage(store));
    return;
  }

  const routerContext = {};
  const htmlApp = renderToStaticMarkup(
    <Provider store={store}>
      <StaticRouter location={req.url} context={routerContext}>
        <App />
      </StaticRouter>
    </Provider>,
  );

  const promises = [];

  routes.some((route) => {
    const match = matchPath(req.url, route);

    if (match) promises.push(route.loadData(store.dispatch, match.params));

    return match;
  });

  Promise.all(promises)
    .then(() => {
      // Checking is page is 404
      const status = routerContext.status === '404' ? 404 : 200;

      res.status(status).send(renderHtmlPage(store, htmlApp));
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
