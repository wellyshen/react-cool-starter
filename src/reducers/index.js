import { combineReducers } from 'redux-immutable';
import users from './reducer_users';
import anUser from './reducer_anUser';
import routing from './reducer_routing';

export default combineReducers({
  users,
  anUser,
  routing,
});
