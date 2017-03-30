/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import home from '../containers/Home/reducer';
import userInfo from '../containers/UserInfo/reducer';

export default combineReducers({
  home,
  userInfo,
  routing,
});
