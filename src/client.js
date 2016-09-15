import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { fromJS } from 'immutable';
import configureStore from './configureStore';
import routes from './routes';

const initialState = fromJS(window.__INITIAL_STATE__);  // redux-immutable only allow immutable obj
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: state => state.get('routing').toJS(),
});
const mountNode = document.getElementById('react-view');

const renderApp = (CurrentRoutes) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history} routes={CurrentRoutes} />
      </Provider>
    </AppContainer>,
    mountNode
  );
};

renderApp(routes);

// Enable hot reload by react-hot-loader
if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextRoutes = require('./routes').default;

    // Prevent the error of "[react-router] You cannot change ; it will be ignored"
    // from react-router
    unmountComponentAtNode(mountNode);
    renderApp(NextRoutes);
  });
}
