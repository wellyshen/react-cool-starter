/* eslint new-cap:0 */

import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import routing from './routing';

export default function createReducer(asyncReducers) {
  return combineReducers({
    routing,
    users: (state = Map({})) => state,
    anUser: (state = Map({})) => state,
    ...asyncReducers,
  });
}
