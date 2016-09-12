import path from 'path';
import morgan from 'morgan';
import express from 'express';
import favicon from 'serve-favicon';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import configureStore from './configureStore';
import renderHtmlPage from './renderHtmlPage';
import config from './config';

const app = express();

// Use morgan for http request debug (only show error)
app.use(morgan('dev', { skip: (req, res) => res.statusCode < 400 }));
app.use(favicon(path.join(__dirname, '../public/favicon.ico')));
app.use(express.static(path.join(__dirname, '../public')));

// Run express as webpack dev server
if (__DEV__) {
  const webpack = require('webpack');
  const webpackConfig = require('../tools/webpack');

  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    hot: true,
    stats: { colors: true },
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

// Render content
app.get('*', (req, res) => {
  if (__DEV__) {
    webpackIsomorphicTools.refresh();
  }

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (!renderProps) {
      res.sendStatus(404);
    } else {
      const store = configureStore();

      const promises = renderProps.components
        .filter(component => component.fetchData)
        .map(component => component.fetchData(store.dispatch, renderProps.params));

      Promise.all(promises)
        .then(() => {
          const content = renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          );
          const initialState = store.getState();

          res.status(200).send(renderHtmlPage(content, initialState));
        });
    }
  });
});

if (config.port) {
  app.listen(config.port, config.host, (err) => {
    if (err) console.error(`==> 😭  OMG!!! ${err}`);

    console.info(`==> 🌎  Listening at http://${config.host}:${config.port}`);
  });
} else {
  console.error('==> 😭  OMG!!! No PORT environment variable has been specified');
}
