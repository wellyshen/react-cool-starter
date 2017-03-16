/* @flow */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import configureStore from './redux/store';
import createRoutes from './routes';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const routes = createRoutes(store);
const mountNode = document.getElementById('react-view');

const renderApp = () => {
  const App = require('./containers/App').default;

  render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <App routes={routes} />
        </BrowserRouter>
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
