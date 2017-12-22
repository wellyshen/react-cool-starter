/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import home from './home';
import userInfo from './userInfo';

export default combineReducers({
  home,
  userInfo,
  router
});
