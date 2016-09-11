import { combineReducers } from 'redux-immutable';
import users from './users';
import anUser from './anUser';
import routing from './routing';

export default combineReducers({
  users,
  anUser,
  routing,
});
