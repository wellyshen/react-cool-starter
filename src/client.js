/* @flow */

import React from 'react';
import { hydrate } from 'react-dom';
import { createBrowserHistory } from 'history';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { loadComponents } from 'loadable-components';

import configureStore from './utils/configureStore';
import routes from './routes';

const history = createBrowserHistory();
// Get the initial state from server-side rendering
const initialState = window.__INITIAL_STATE__;
const store = configureStore(history, initialState);

const render = (Routes: Array<Object>) => {
  hydrate(
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

// Load all components needed before starting rendering (loadable-components setup)
loadComponents().then(() => {
  render(routes);
});

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
