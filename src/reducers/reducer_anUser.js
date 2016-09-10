/* eslint new-cap:0 */

import { Map, fromJS } from 'immutable';
import {
  AN_USER_FETCHING,
  AN_USER_FETCH_FAILED,
  AN_USER_FETCHED,
} from '../actions/fetchAnUser';

export default (state = Map({}), action) => {
  switch (action.type) {
    case AN_USER_FETCHING:
      return state.merge({
        [action.userId]: Map({
          readyState: AN_USER_FETCHING,
        }),
      });
    case AN_USER_FETCH_FAILED:
      return state.merge({
        [action.userId]: Map({
          readyState: AN_USER_FETCH_FAILED,
          err: fromJS(action.err),
        }),
      });
    case AN_USER_FETCHED:
      return state.merge({
        [action.userId]: Map({
          readyState: AN_USER_FETCHED,
          info: fromJS(action.data),
        }),
      });
    default:
      return state;
  }
};
