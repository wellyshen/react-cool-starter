/* @flow */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { withRouter, BrowserRouter } from 'react-router-dom';

import configureStore from './redux/store';

// Get initial state from server-side rendering
const initialState = window.__INITIAL_STATE__;
const history = createHistory();
const store = configureStore(history, initialState);
const mountNode = document.getElementById('react-view');

const renderApp = () => {
  const App = require('./containers/App').default;
  // For the .push() method of react-router-redux works fine
  // See https://github.com/ReactTraining/react-router/issues/4924 for more detail
  const nonBlockingRouter = withRouter(BrowserRouter);

  render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <nonBlockingRouter>
            <App />
          </nonBlockingRouter>
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
