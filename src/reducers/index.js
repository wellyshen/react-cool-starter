/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import home from './home';
import userInfo from './userInfo';

const reducers = {
  home,
  userInfo,
  router,
  loadingBar: loadingBarReducer
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
