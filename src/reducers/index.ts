import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import home from './home';
import userInfo from './userInfo';

export default (history: History) =>
  combineReducers({
    // Register reducers here
    home,
    userInfo,
    router: connectRouter(history)
  });
