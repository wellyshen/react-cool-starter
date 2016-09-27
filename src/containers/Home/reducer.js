/* eslint new-cap:0 */

import { Map, fromJS } from 'immutable';
import {
  USERS_INVALID,
  USERS_REQUESTING,
  USERS_FAILURE,
  USERS_SUCCESS,
} from './action';

const initialState = Map({
  readyState: USERS_INVALID,
  list: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_REQUESTING:
      return state.merge({
        readyState: USERS_REQUESTING,
      });
    case USERS_FAILURE:
      return state.merge({
        readyState: USERS_FAILURE,
        err: fromJS(action.err),
      });
    case USERS_SUCCESS:
      return state.merge({
        readyState: USERS_SUCCESS,
        list: fromJS(action.data),
      });
    default:
      return state;
  }
};
