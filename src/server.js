/* eslint-disable */
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
import { StaticRouter } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { getLoadableState } from 'loadable-components/server';
import Helmet from 'react-helmet';
import chalk from 'chalk';

import createHistory from 'history/createMemoryHistory';
import configureStore from './helpers/configureStore';
import renderHtml from './helpers/renderHtml';
import routes from './routes';
// $FlowFixMe: isn't an issue
import assets from '../public/webpack-assets.json';
import { port, host } from './config';

const app = express();

// Use helmet to secure Express with various HTTP headers
app.use(helmet());
// Prevent HTTP parameter pollution.
app.use(hpp());
// Compress all requests
app.use(compression());

// Use for http request debug (show errors only)
app.use(morgan('dev', { skip: (req, res) => res.statusCode < 400 }));
app.use(favicon(path.resolve(process.cwd(), 'public/favicon.ico')));

if (!__DEV__) {
  app.use(express.static(path.resolve(process.cwd(), 'public')));
} else {
  /* Run express as webpack dev server */

  const webpack = require('webpack');
  const webpackConfig = require('../tools/webpack/config.babel');
  const DashboardPlugin = require('webpack-dashboard/plugin');
  const compiler = webpack(webpackConfig);

  compiler.apply(new webpack.ProgressPlugin());
  compiler.apply(new DashboardPlugin());

  app.use(
    require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath,
      headers: { 'Access-Control-Allow-Origin': '*' },
      hot: true,
      quiet: true, // Turn it on for friendly-errors-webpack-plugin
      noInfo: true,
      stats: 'minimal',
      serverSideRender: true
    })
  );

  app.use(
    require('webpack-hot-middleware')(compiler, {
      log: false // Turn it off for friendly-errors-webpack-plugin
    })
  );
}

// Register server-side rendering middleware
app.get('*', (req, res) => {
  const history = createHistory();
  const store = configureStore(history);
  try {

    const staticContext = {};
    const AppComponent = (
      <Provider store={store}>
        {/* Setup React-Router server-side rendering */}
        <StaticRouter location={req.path} context={staticContext}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    );

    // Check if the render result contains a redirect, if so we need to set
    // the specific status and redirect header and end the response
    if (staticContext.url) {
      res.status(301).setHeader('Location', staticContext.url);
      res.end();

      return;
    }

    // Extract loadable state from application tree (loadable-components setup)
    getLoadableState(AppComponent).then(loadableState => {

      // Check page status
      const status = staticContext.status === '404' ? 404 : 200;
      // Subscribe store for load all datas in componentWillMount and then renderHtml
      let currentValue;
      const unsubscribe = store.subscribe(() => {
        const state = store.getState();
        let previousValue = currentValue;
        currentValue = state.server.requesting;
        if ((previousValue !== currentValue) && (previousValue && currentValue === false)) {
          unsubscribe();
          const head = Helmet.renderStatic();
          const htmlContent = renderToString(AppComponent);
          const loadableStateTag = loadableState.getScriptTag();
          // Pass the route and initial state into html template
          return res
          .status(status)
          .send(
            renderHtml(
              head,
              assets,
              htmlContent,
              state,
              loadableStateTag
            )
          );
        }
      });

    });
  } catch (err) {
    res.status(404).send('Not Found :(');

    console.error(chalk.red(`==> 😭  Rendering routes error: ${err}`));
  }
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
