import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import home from './home';
import userInfo from './userInfo';

const reducers = {
  home,
  userInfo
};

export default history =>
  combineReducers({ router: connectRouter(history), ...reducers });
