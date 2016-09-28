/* eslint new-cap:0 */

import { Map, fromJS } from 'immutable';
import {
  AN_USER_REQUESTING,
  AN_USER_FAILURE,
  AN_USER_SUCCESS,
} from './action';

export default (state = Map({}), action) => {
  switch (action.type) {
    case AN_USER_REQUESTING:
      return state.merge({
        [action.userId]: Map({
          readyState: AN_USER_REQUESTING,
        }),
      });
    case AN_USER_FAILURE:
      return state.merge({
        [action.userId]: Map({
          readyState: AN_USER_FAILURE,
          err: fromJS(action.err),
        }),
      });
    case AN_USER_SUCCESS:
      return state.merge({
        [action.userId]: Map({
          readyState: AN_USER_SUCCESS,
          info: fromJS(action.data),
        }),
      });
    default:
      return state
  }
};
