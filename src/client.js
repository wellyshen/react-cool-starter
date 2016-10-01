import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { match, Router, browserHistory } from 'react-router/es6';
import { syncHistoryWithStore } from 'react-router-redux';
import { fromJS } from 'immutable';
import configureStore from './redux/store';

// redux-immutable only allow immutable obj
const initialState = fromJS(window.__INITIAL_STATE__);
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: state => state.get('routing').toJS(),
});
const mountNode = document.getElementById('react-view');

const renderApp = () => {
  const routes = require('./routes').default(store);

  // Sync routes both on client and server
  match({ history: browserHistory, routes }, (error, redirectLocation, renderProps) => {
    // Using the enhanced history of react-redux-router to instead of the 'browserHistory'
    const props = Object.assign({}, renderProps, { history });

    render(
      <Provider store={store}>
        <Router {...props} />
      </Provider>,
      mountNode
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
