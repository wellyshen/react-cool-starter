/* @flow */

import { createBrowserHistory, createMemoryHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import type { Store } from '../types';
import createRootReducer from '../reducers';

type argv = {
  initialState?: Object,
  url?: string
};

export default ({ initialState, url }: argv): Store => {
  const isServer = typeof window === 'undefined';
  // Create a history depending on the environment
  const history = isServer
    ? createMemoryHistory({
        initialEntries: [url || '/']
      })
    : createBrowserHistory();
  const middlewares = [
    routerMiddleware(history),
    thunk
    // Add other middlewares here
  ];
  // Use Redux DevTools Extension in development
  const composeEnhancers =
    (__DEV__ && !isServer && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  const enhancers = composeEnhancers(
    applyMiddleware(...middlewares)
    // Add other enhancers here
  );
  const store = createStore(
    createRootReducer(history),
    initialState || {},
    enhancers
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      try {
        const createNextReducer = require('../reducers').default;

        store.replaceReducer(createNextReducer(history));
      } catch (error) {
        console.error(`==> 😭  Reducer hot reloading error ${error}`);
      }
    });
  }

  return { store, history };
};
