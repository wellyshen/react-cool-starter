/* @flow */

import { combineReducers } from 'redux';

import home from '../containers/Home/reducer';
import userInfo from '../containers/UserInfo/reducer';

export default combineReducers({
  // Register the inital async reducers, otherwise you will get the warning of Redux
  home,
  userInfo,
});
