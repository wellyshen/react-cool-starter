import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

export default function createReducer(asyncReducers) {
  return combineReducers({
    routing,
    // Register the inital async reducers, otherwise you will get the warning of Redux
    home: (state = {}) => state,
    userInfo: (state = {}) => state,
    ...asyncReducers,
  });
}

/* eslint-disable */
// Using for injecting the async reducers
export const injectReducer = (store, name, reducer) => {
  store.asyncReducers[name] = reducer
  store.replaceReducer(createReducer(store.asyncReducers))
}
/* eslint-enable */
