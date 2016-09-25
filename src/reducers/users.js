/* eslint new-cap:0 */

import { Map, fromJS } from 'immutable';
import {
  USERS_INVALID,
  USERS_FETCHING,
  USERS_FETCH_FAILED,
  USERS_FETCHED,
} from '../actions/fetchUsers';

const initialState = Map({
  readyState: USERS_INVALID,
  list: null,
});

// HMR not working here...
const mockData = [
  { id: 1, name: 'Welly' },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCHING:
      return state.merge({
        readyState: USERS_FETCHING,
      });
    case USERS_FETCH_FAILED:
      return state.merge({
        readyState: USERS_FETCH_FAILED,
        err: fromJS(action.err),
      });
    case USERS_FETCHED:
      return state.merge({
        readyState: USERS_FETCHED,
        list: fromJS(mockData),
        // list: fromJS(action.data),
      });
    default:
      return state;
  }
};
