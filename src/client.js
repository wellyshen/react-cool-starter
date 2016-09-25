import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { match, Router, browserHistory } from 'react-router/es6';
import { syncHistoryWithStore } from 'react-router-redux';
import { fromJS } from 'immutable';
import { AppContainer } from 'react-hot-loader';
import configureStore from './configureStore';

const initialState = fromJS(window.__INITIAL_STATE__);  // redux-immutable only allow immutable obj
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: state => state.get('routing').toJS(),
});
const mountNode = document.getElementById('react-view');

const renderApp = () => {
  // eslint-disable-next-line import/newline-after-import
  const createRoutes = require('./routes').default;
  const routes = createRoutes(store);

  // Sync routes both on client and server
  match({ routes, history: browserHistory }, (error, redirectLocation, renderProps) => {
    // Using the enhanced history (react-redux-router) instead of the 'browserHistory'
    const props = Object.assign({}, renderProps, { history });

    render(
      <AppContainer>
        <Provider store={store}>
          <Router {...props} />
        </Provider>
      </AppContainer>,
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
    // Prevent the hot reloading error from react-router
    unmountComponentAtNode(mountNode);
    reRenderApp();
  });
}

renderApp();
