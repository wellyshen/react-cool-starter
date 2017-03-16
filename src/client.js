/* @flow */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './redux/store';
import createRoutes from './routes';

const initialState = window.__INITIAL_STATE__;
const history = createHistory();
const store = configureStore(history, initialState);
const routes = createRoutes(store);
const mountNode = document.getElementById('react-view');

const renderApp = () => {
  const App = require('./containers/App').default;

  render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <BrowserRouter>
            <App routes={routes} />
          </BrowserRouter>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    mountNode,
  );
};

// Enable hot reload by react-hot-loader
if (module.hot) {
  const reRenderApp = () => {
    try {
      renderApp();
    } catch (error) {
      const RedBox = require('redbox-react').default;

      render(<RedBox error={error} />, mountNode);
    }
  };

  module.hot.accept('./containers/App', () => {
    setImmediate(() => {
      // Preventing the hot reloading error from react-router
      unmountComponentAtNode(mountNode);
      reRenderApp();
    });
  });
}

renderApp();
