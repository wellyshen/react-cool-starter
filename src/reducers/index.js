/* @flow */

import { combineReducers } from 'redux';

import home from './home';
import userInfo from './userInfo';

const reducers = {
  home,
  userInfo
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
