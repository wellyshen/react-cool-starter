/* @flow */

import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import _ from 'lodash';

import type { Store } from './types';
import reducerInjector from './utils/reducerInjector';
import createReducer from './reducers';

export default (history: Object, initialState: Object = {}): Store => {
  const middlewares = [
    thunk.withExtraArgument(axios),
    routerMiddleware(history)
  ];
  const composeEnhancers =
    (typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  const enhancers = composeEnhancers(applyMiddleware(...middlewares));
  // Preserve initial state for not-yet-loaded reducers
  const combine = (reducers: Object): Object => {
    const reducerNames = _.keys(reducers);

    _.keys(initialState).forEach(item => {
      if (reducerNames.indexOf(item) === -1) {
        reducers[item] = (state = null) => state; // eslint-disable-line no-param-reassign
      }
    });

    return reducers;
  };
  const asyncReducers = combine(reducerInjector.getReducers());
  const rootReducer = createReducer(asyncReducers);
  const store = createStore(rootReducer, initialState, enhancers);

  // Replace the store's reducer whenever a new reducer is injected
  // eslint-disable-next-line no-shadow
  reducerInjector.setChangeListener(reducers => {
    store.replaceReducer(combineReducers(combine(reducers)));
  });

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      try {
        store.replaceReducer(require('./reducers').default);
      } catch (error) {
        console.error(`==> 😭  ReduxState hot reloading error ${error}`);
      }
    });
  }

  return store;
};
