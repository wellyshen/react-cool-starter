/* @flow */

import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import chalk from 'chalk';

import createReducer from './reducers';
import type { Store } from '../types';

export default (history: Object, initialState: Object = {}) => {
  const middlewares = [
    thunk.withExtraArgument(axios),
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    __DEV__ && typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
      window.devToolsExtension() : f => f,
  ];

  const store: Store = createStore(createReducer(), initialState, compose(...enhancers));

  store.asyncReducers = {}; // Async reducer registry

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      try {
        const reducers = require('./reducers').default;

        store.replaceReducer(reducers(store.asyncReducers));
      } catch (error) {
        console.error(chalk.red(`==> 😭  Reducer hot reloading error ${error}`));
      }
    });
  }

  return store;
};
