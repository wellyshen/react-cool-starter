/* @flow */

import path from 'path';
import morgan from 'morgan';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import hpp from 'hpp';
import favicon from 'serve-favicon';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getLoadableState } from 'loadable-components/server';
import Helmet from 'react-helmet';
import chalk from 'chalk';

import createHistory from 'history/createMemoryHistory';
import configureStore from './configureStore';
import renderHtml from './utils/renderHtml';
import App from './containers/App';
import routes from './routes';
import { port, host } from './config';

const app = express();

// Use morgan for http request debug (only show error)
app.use(morgan('dev', { skip: (req, res) => res.statusCode < 400 }));
app.use(favicon(path.join(process.cwd(), './public/favicon.ico')));
app.use(express.static(path.join(process.cwd(), './public')));

if (!__DEV__) {
  // Use helmet to secure Express with various HTTP headers
  app.use(helmet());
  // Prevent HTTP parameter pollution.
  app.use(hpp());
  // Compress all requests
  app.use(compression());
} else {
  /* Run express as webpack dev server */

  const webpack = require('webpack');
  const webpackConfig = require('../tools/webpack/config.babel');

  const compiler = webpack(webpackConfig);

  app.use(
    require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath,
      hot: true,
      noInfo: true,
      stats: 'minimal',
      serverSideRender: true
    })
  );

  app.use(require('webpack-hot-middleware')(compiler));
}

// Register server-side rendering middleware
app.get('*', (req, res) => {
  if (__DEV__) webpackIsomorphicTools.refresh();

  const history = createHistory();
  const store = configureStore(history);

  // The method for loading data from server-side
  const loadBranchData = (): Promise<any> | Object => {
    const promises = [];

    routes.some(route => {
      const match = matchPath(req.path, route);

      if (match && route.loadData)
        // $FlowFixMe: the params of pre-load actions are dynamic
        promises.push(route.loadData(store.dispatch, match.params));

      return match;
    });

    return Promise.all(promises);
  };

  (async () => {
    try {
      // Load data from server-side first
      await loadBranchData();

      const routerContext = {};
      const AppComponent = (
        <Provider store={store}>
          {/* Setup React-Router server-side rendering */}
          <StaticRouter location={req.url} context={routerContext}>
            <App />
          </StaticRouter>
        </Provider>
      );

      // Check if the render result contains a redirect, if so we need to set
      // the specific status and redirect header and end the response
      if (routerContext.url) {
        res.status(301).setHeader('Location', routerContext.url);
        res.end();

        return;
      }

      // Extract loadable state from application tree (loadable-components setup)
      getLoadableState(AppComponent).then(loadableState => {
        const head = Helmet.renderStatic();
        const assets = webpackIsomorphicTools.assets();
        const htmlContent = renderToString(AppComponent);
        const initialState = store.getState();
        const loadableStateTag = loadableState.getScriptTag();

        // Check page status
        const status = routerContext.status === '404' ? 404 : 200;

        // Pass the route and initial state into html template
        res
          .status(status)
          .send(
            renderHtml(
              head,
              assets,
              htmlContent,
              initialState,
              loadableStateTag
            )
          );
      });
    } catch (err) {
      res.status(404).send('Not Found :(');

      console.error(chalk.red(`==> 😭  Rendering routes error: ${err}`));
    }
  })();
});

if (port) {
  app.listen(port, host, err => {
    const url = `http://${host}:${port}`;

    if (err) console.error(chalk.red(`==> 😭  OMG!!! ${err}`));

    console.info(chalk.green(`==> 🌎  Listening at ${url}`));

    // Open Chrome
    require('../tools/openBrowser')(url);
  });
} else {
  console.error(
    chalk.red('==> 😭  OMG!!! No PORT environment variable has been specified')
  );
}
