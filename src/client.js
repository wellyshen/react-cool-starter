/* @flow */

import React from 'react';
// $FlowFixMe: isn't an issue
import { hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import { loadComponents } from 'loadable-components';
import { MuiThemeProvider } from 'material-ui/styles';

import configureStore from './helpers/configureStore';
import routes from './routes';
import materialTheme from './theme/materialTheme';

// Get the initial state from server-side rendering
const initialState = window.__INITIAL_STATE__;
const history = createHistory();
const store = configureStore(history, initialState);

const render = (Routes: Array<Object>) => {
  hydrate(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider theme={materialTheme}>
            {renderRoutes(Routes)}
          </MuiThemeProvider>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('react-view')
  );
};

// Load all components needed before starting rendering (loadable-components setup)
loadComponents().then(() => {
  render(routes);
});

if (module.hot) {
  // Enable webpack hot module replacement for routes
  module.hot.accept('./routes', () => {
    try {
      const nextRoutes = require('./routes').default;

      render(nextRoutes);
    } catch (error) {
      console.error(`==> 😭  Routes hot reloading error ${error}`);
    }
  });
}
