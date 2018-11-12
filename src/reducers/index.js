/* @flow */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import home from './home';
import userInfo from './userInfo';

const reducers = {
  home,
  userInfo
};

export type Reducers = typeof reducers;
export default (history: Object) =>
  combineReducers({ router: connectRouter(history), ...reducers });
