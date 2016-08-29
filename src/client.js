import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { fromJS } from 'immutable';
import configureStore from './configureStore';
import routes from './routes';

const initialState = fromJS(window.__INITIAL_STATE__);  // redux-immutable need immutable object
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: state => state.get('routing').toJS(),
});

const renderApp = () => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    </AppContainer>,
    document.getElementById('react-view')
  );
};

renderApp();

// Enable hot reload by react-hot-loader
if (module.hot) {
  module.hot.accept('./client.js');
  module.hot.accept('./routes', renderApp);
}
