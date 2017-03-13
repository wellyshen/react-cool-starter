/* @flow */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import chalk from 'chalk';

import type { Store } from '../types';
import rootReducer from './reducers';

export default (initialState: Object = {}) => {
  const middlewares = [
    thunk.withExtraArgument(axios),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    __DEV__ && typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
      window.devToolsExtension() : f => f,
  ];

  const store: Store = createStore(rootReducer, initialState, compose(...enhancers));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      try {
        const nextRootReducer = require('./reducers').default;

        store.replaceReducer(nextRootReducer);
      } catch (error) {
        console.error(chalk.red(`==> 😭  Reducer hot reloading error ${error}`));
      }
    });
  }

  return store;
};
