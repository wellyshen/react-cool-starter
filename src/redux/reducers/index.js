/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import server from './server.reducer';
import users from './users.reducer';

const reducers = {
  users,
  server,
  router
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
