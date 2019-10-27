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
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import { Helmet } from 'react-helmet';
import chalk from 'chalk';

import configureStore from './utils/configureStore';
import renderHtml from './utils/renderHtml';
import routes from './routes';
import config from './config';
import { MyAction } from './types';

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
      writeToDisk: true,
      stats: 'minimal',
      serverSideRender: true,
    })
  );

  app.use(
    require('webpack-hot-middleware')(compiler, {
      log: false, // Turn it off for friendly-errors-webpack-plugin
    })
  );
}

// Register server-side rendering middleware
app.get('*', (req, res) => {
  const { store } = configureStore({ url: req.url });

  // The method for loading data from server-side
  const loadBranchData = (): Promise<any> => {
    // @ts-ignore
    const branch = matchRoutes(routes, req.path);
    const promises = branch.map(({ route, match }: any) => {
      if (route.loadData) {
        return Promise.all(
          route
            .loadData({ params: match.params, getState: store.getState })
            .map((item: MyAction) => store.dispatch(item))
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

      const statsFile = path.resolve(
        process.cwd(),
        'public/loadable-stats.json'
      );
      const extractor = new ChunkExtractor({ statsFile });

      const staticContext: any = {};
      const App = (
        <ChunkExtractorManager extractor={extractor}>
          <Provider store={store}>
            {/* Setup React-Router server-side rendering */}
            <StaticRouter location={req.path} context={staticContext}>
              {/*
                // @ts-ignore */}
              {renderRoutes(routes)}
            </StaticRouter>
          </Provider>
        </ChunkExtractorManager>
      );

      const initialState = store.getState();
      const htmlContent = renderToString(App);
      // head must be placed after "renderToString"
      // see: https://github.com/nfl/react-helmet#server-usage
      const head = Helmet.renderStatic();

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
        .send(renderHtml(head, extractor, htmlContent, initialState));
    } catch (err) {
      res.status(404).send('Not Found :(');

      console.error(chalk.red(`==> 😭  Rendering routes error: ${err}`));
    }
  })();
});

// @ts-ignore
app.listen(config.port, config.host, err => {
  const url = `http://${config.host}:${config.port}`;

  if (err) console.error(chalk.red(`==> 😭  OMG!!! ${err}`));

  console.info(chalk.green(`==> 🌎  Listening at ${url}`));
});
