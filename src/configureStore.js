import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import chalk from 'chalk';
import createReducer from './reducers';

export default (initialState) => {
  const middlewares = [
    thunk.withExtraArgument(axios),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    __DEV__ && typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
      window.devToolsExtension() : f => f,
  ];

  const store = createStore(createReducer(), initialState, compose(...enhancers));

  store.asyncReducers = {
    // users: {},
    // anUser: {},
  };

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      try {
        store.replaceReducer(require('./reducers').default);
      } catch (error) {
        console.error(chalk.red(`==> 😭  Reducer hot reloading error ${error}`));
      }
    });
  }

  return store;
};

/* eslint-disable */
export function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
}
/* eslint-enable */
