/* @flow */

import { combineReducers } from 'redux';
import type { Store } from '../types';

export default function createReducer(asyncReducers: Object = {}) {
  return combineReducers({
    // Register the inital async reducers, otherwise you will get the warning of Redux
    home: (state = {}) => state,
    userInfo: (state = {}) => state,
    ...asyncReducers,
  });
}

/* eslint-disable */
// Using for injecting the async reducers
export const injectReducer = (store: Store, name: string, reducer: Object) => {
  store.asyncReducers[name] = reducer
  store.replaceReducer(createReducer(store.asyncReducers))
}
/* eslint-enable */
