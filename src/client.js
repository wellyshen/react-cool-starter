import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { fromJS } from 'immutable';
import configureStore from './configureStore';

const initialState = fromJS(window.__INITIAL_STATE__);  // redux-immutable only allow immutable obj
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: state => state.get('routing').toJS(),
});
const mountNode = document.getElementById('react-view');

const renderApp = () => {
  const routes = require('./routes').default;

  render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    </AppContainer>,
    mountNode
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

  module.hot.accept('./routes', () => {
    // Prevent the hot reloading error from react-router
    unmountComponentAtNode(mountNode);
    reRenderApp();
  });
}

renderApp();
