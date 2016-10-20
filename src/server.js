import path from 'path';
import morgan from 'morgan';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import hpp from 'hpp';
import favicon from 'serve-favicon';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import chalk from 'chalk';
import createRoutes from './routes';
import configureStore from './redux/store';
import { createSelectLocationState } from './util/helpers';
import renderHtmlPage from './util/renderHtmlPage';
import config from './config';

const app = express();

// Using helmet to secure Express with various HTTP headers
app.use(helmet());
// Prevent HTTP parameter pollution.
app.use(hpp());
// Compress all requests
app.use(compression());

// Use morgan for http request debug (only show error)
app.use(morgan('dev', { skip: (req, res) => res.statusCode < 400 }));
app.use(favicon(path.join(__dirname, '../public/favicon.ico')));
app.use(express.static(path.join(__dirname, '../public')));

// Run express as webpack dev server
if (__DEV__) {
  const webpack = require('webpack');
  const webpackConfig = require('../tools/webpack/config.babel');

  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    stats: { colors: true },
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

  const memoryHistory = createMemoryHistory(req.url);
  const routes = createRoutes(store);
  const history = syncHistoryWithStore(memoryHistory, store, {
    selectLocationState: createSelectLocationState('routing'),
  });

  // eslint-disable-next-line max-len
  match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (!renderProps) {
      res.sendStatus(404);
    } else {
      // Dispatch the initial action of each container first
      const promises = renderProps.components
        .filter(component => component.fetchData)
        .map(component => component.fetchData(store.dispatch, renderProps.params));

      // Then render the routes
      Promise.all(promises)
        .then(() => {
          const content = renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          );

          res.status(200).send(renderHtmlPage(store, content));
        })
        .catch((err) => {
          console.error(`==> 😭  Rendering routes error: ${err}`);
        })
        .catch((err) => {
          console.error(`==> 😭  Rendering routes error: ${err}`);
        });
    }
  });
});

if (config.port) {
  app.listen(config.port, config.host, (err) => {
    if (err) console.error(`==> 😭  OMG!!! ${err}`);

    console.info(chalk.green(`==> 🌎  Listening at http://${config.host}:${config.port}`));
    // Open Chrome
    require('../tools/openBrowser').default(config.port);
  });
} else {
  console.error(chalk.red('==> 😭  OMG!!! No PORT environment variable has been specified'));
}
