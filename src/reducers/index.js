import { combineReducers } from 'redux-immutable';
// import users from './users';
// import anUser from './anUser';
import routing from './routing';

export default function createReducer(asyncReducers) {
  return combineReducers({
    routing,
    // users: () => {},
    // anUser: () => {},
    ...asyncReducers,
  });
}
