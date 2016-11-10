import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { match, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { fromJS } from 'immutable';
import { AppContainer } from 'react-hot-loader';
import configureStore from './redux/store';
import { createSelectLocationState } from './util/helpers';

// redux-immutable only allow immutable obj
const initialState = fromJS(window.__INITIAL_STATE__);
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: createSelectLocationState('routing'),
});
const mountNode = document.getElementById('react-view');

const renderApp = () => {
  const routes = require('./routes').default(store);

  // Sync routes both on client and server
  match({ history, routes }, (error, redirectLocation, renderProps) => {
    render(
      <AppContainer>
        <Provider store={store}>
          <Router {...renderProps} />
        </Provider>
      </AppContainer>,
      mountNode,
    );
  });
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

  module.hot.accept('./routes', () => {
    setImmediate(() => {
      // Preventing the hot reloading error from react-router
      unmountComponentAtNode(mountNode);
      reRenderApp();
    });
  });
}

renderApp();
