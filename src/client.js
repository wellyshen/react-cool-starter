import React from 'react';
import { render } from 'react-dom';
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

const renderApp = (CurrentRoutes) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history} routes={CurrentRoutes} />
      </Provider>
    </AppContainer>,
    document.getElementById('react-view')
  );
};

renderApp(routes);

// Enable hot reload by react-hot-loader
if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextRoutes = require('./routes');

    renderApp(NextRoutes);
  });
}
