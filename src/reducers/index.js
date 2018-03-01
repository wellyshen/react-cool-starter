/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import home from './home';
import userInfo from './userInfo';
import server from './server.reducer';

const reducers = {
  home,
  userInfo,
  server,
  router
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
