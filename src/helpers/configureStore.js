/* @flow */

import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import axios from 'axios';
import config from 'config';

import type { Store } from '../types';
import rootReducer from '../reducers';

export default (history: Object, initialState: Object = {}): Store => {
  const middlewares = [
    routerMiddleware(history),
    ({ dispatch, getState }) => next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      if (!action.types) {
        return next(action);
      }

      const headers = {};
      const { method, url } = action;
      next({
        ...action,
        type: `${action.types}_REQUESTING`
      });
      return axios({
        baseURL: config.baseURL,
        method,
        url,
        headers
      })
        .then(res => {
          next({
            type: `${action.types}_SUCCESS`,
            data: res.data
          });
          return Promise.resolve(res);
        })
        .catch(error => {
          next({ type: `${action.types}_FAILURE`, data: error.message });
          return Promise.reject(error);
        });
    }
    // Add other middlewares here
  ];
  const composeEnhancers =
    (typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  const enhancers = composeEnhancers(
    applyMiddleware(...middlewares)
    // Add other enhancers here
  );
  const store = createStore(rootReducer, initialState, enhancers);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      try {
        const nextReducer = require('../reducers').default;

        store.replaceReducer(nextReducer);
      } catch (error) {
        console.error(`==> 😭  ReduxState hot reloading error ${error}`);
      }
    });
  }

  return store;
};
