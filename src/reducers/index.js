/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import home from './home';
import userInfo from './userInfo';

const allReducers = {
  home,
  userInfo,
  router
};
const syncReducers = {
  // If you don't need async reducer you can place your reducers here
  router
};
// Async reducer will be used on production only
const reducers = __DEV__ ? allReducers : syncReducers;

const createReducer = (asyncReducers: Object): Object =>
  combineReducers({
    ...asyncReducers,
    ...reducers
  });

export type Reducers = typeof allReducers; // Declaring reducers type for flow
export default createReducer;
