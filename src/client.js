/* @flow */

import React from 'react';
import { render, hydrate } from 'react-dom';
import { createBrowserHistory } from 'history';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';

import configureStore from './utils/configureStore';
import routes from './routes';

const history = createBrowserHistory();
// Get the initial state from server-side rendering
const initialState = window.__INITIAL_STATE__;
const store = configureStore(history, initialState);

const renderApp = (Routes: Array<Object>, History: Object, Store: Object) => {
  const renderMethod = module.hot ? render : hydrate;
  renderMethod(
    <AppContainer>
      <Provider store={Store}>
        <ConnectedRouter history={History}>
          <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    // $FlowFixMe: isn't an issue
    document.getElementById('react-view')
  );
};

// react-loadable setup
Loadable.preloadReady().then(() => renderApp(routes, history, store));

if (module.hot) {
  // Enable webpack hot module replacement for routes
  module.hot.accept('./routes', () => {
    try {
      const nextRoutes = require('./routes').default;

      render(nextRoutes, history, store);
    } catch (error) {
      console.error(`==> 😭  Routes hot reloading error ${error}`);
    }
  });
}
