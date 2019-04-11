/* @flow */

import path from 'path';
import logger from 'morgan';
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
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

import Helmet from 'react-helmet';
import chalk from 'chalk';
import openBrowser from 'react-dev-utils/openBrowser';

import configureStore from './utils/configureStore';
import renderHtml from './utils/renderHtml';
import routes from './routes';
import { port, host } from './config';

const app = express();

// Use helmet to secure Express with various HTTP headers
app.use(helmet());
// Prevent HTTP parameter pollution
app.use(hpp());
// Compress all requests
app.use(compression());

// Use for http request debug (show errors only)
app.use(logger('dev', { skip: (req, res) => res.statusCode < 400 }));
app.use(favicon(path.resolve(process.cwd(), 'public/favicon.ico')));

if (!__DEV__) {
  app.use(express.static(path.resolve(process.cwd(), 'public')));
} else {
  /* Run express as webpack dev server */

  const webpack = require('webpack');
  const webpackConfig = require('../tools/webpack/config.babel');
  const compiler = webpack(webpackConfig);

  compiler.apply(new webpack.ProgressPlugin());

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
  const { store } = configureStore({ url: req.url });

  // The method for loading data from server-side
  const loadBranchData = (): Promise<any> => {
    const branch = matchRoutes(routes, req.path);

    const promises = branch.map(({ route, match }) => {
      if (route.loadData) {
        return Promise.all(
          route
            .loadData({ params: match.params, getState: store.getState })
            .map(item => store.dispatch(item))
        );
      }

      return Promise.resolve(null);
    });

    return Promise.all(promises);
  };

  (async () => {
    try {
      // Load data from server-side first
      await loadBranchData();

      const modules = [];
      const staticContext = {};
      const AppComponent = (
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
          <Provider store={store}>
            {/* Setup React-Router server-side rendering */}
            <StaticRouter location={req.path} context={staticContext}>
              {renderRoutes(routes)}
            </StaticRouter>
          </Provider>
        </Loadable.Capture>
      );

      const initialState = store.getState();
      const htmlContent = renderToString(AppComponent);
      // head must be placed after "renderToString"
      // see: https://github.com/nfl/react-helmet#server-usage
      const head = Helmet.renderStatic();
      // $FlowFixMe: isn't an issue
      const loadableManifest = require('../public/loadable-assets.json');
      const bundles = getBundles(loadableManifest, modules);
      let assets = bundles
        .map(({ publicPath }) =>
          !publicPath.includes('main') ? publicPath : ''
        )
        // In development, main.css and main.js are webpack default file bundling name
        // we put these files into assets with publicPath
        .concat(['/assets/main.css', '/assets/main.js']);

      if (!__DEV__) {
        // $FlowFixMe: isn't an issue
        const webpackManifest = require('../public/webpack-assets.json');
        assets = bundles
          .map(({ publicPath }) =>
            !publicPath.includes('main') ? publicPath : ''
          )
          .concat(
            Object.keys(webpackManifest)
              .map(key => webpackManifest[key])
              .reverse()
          );
      }

      // Check if the render result contains a redirect, if so we need to set
      // the specific status and redirect header and end the response
      if (staticContext.url) {
        res.status(301).setHeader('Location', staticContext.url);
        res.end();

        return;
      }

      // Check page status
      const status = staticContext.status === '404' ? 404 : 200;

      // Pass the route and initial state into html template
      res
        .status(status)
        .send(renderHtml(head, assets, htmlContent, initialState));
    } catch (err) {
      res.status(404).send('Not Found :(');

      console.error(chalk.red(`==> 😭  Rendering routes error: ${err}`));
    }
  })();
});

if (port) {
  Loadable.preloadAll().then(() => {
    app.listen(port, host, err => {
      const url = `http://${host}:${port}`;

      if (err) console.error(chalk.red(`==> 😭  OMG!!! ${err}`));

      console.info(chalk.green(`==> 🌎  Listening at ${url}`));

      // Open browser
      if (openBrowser(url))
        console.info(chalk.green("==> 🖥️  Opened on your browser's tab!"));
    });
  });
} else {
  console.error(
    chalk.red('==> 😭  OMG!!! No PORT environment variable has been specified')
  );
}
