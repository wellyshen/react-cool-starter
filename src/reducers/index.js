/* eslint new-cap:0 */

import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import routing from './routing';

export default function createReducer(asyncReducers) {
  return combineReducers({
    routing,
    // Define the inital state for the async reducers
    // otherwise you will get the warning of Redux
    users: (state = Map({})) => state,
    anUser: (state = Map({})) => state,
    ...asyncReducers,
  });
}

/* eslint-disable */
// Using for injecting the async reducers
export const injectReducer = (store, key, reducer) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(createReducer(store.asyncReducers))
}
/* eslint-enable */
