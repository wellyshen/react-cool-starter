/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';

import configureStore from './utils/configureStore';
import routes from './routes';

// Get the initial state from server-side rendering
const initialState = window.__INITIAL_STATE__;
const { store, history } = configureStore({ initialState });

const render = (Routes: Array<Object>) => {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

  renderMethod(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    // $FlowFixMe: isn't an issue
    document.getElementById('react-view')
  );
};

// react-loadable setup
Loadable.preloadReady().then(() => render(routes));

if (module.hot) {
  // Enable webpack hot module replacement for routes
  module.hot.accept('./routes', () => {
    try {
      const nextRoutes = require('./routes').default;

      render(nextRoutes);
    } catch (error) {
      console.error(`==> 😭  Routes hot reloading error ${error}`);
    }
  });
}
