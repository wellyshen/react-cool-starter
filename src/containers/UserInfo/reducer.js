/* eslint new-cap:0 */

import { Map, fromJS } from 'immutable';
import {
  DATA_REQUESTING,
  DATA_FAILURE,
  DATA_SUCCESS,
} from './action';

export default (state = Map({}), action) => {
  switch (action.type) {
    case DATA_REQUESTING:
      return state.merge({
        [action.userId]: Map({
          readyState: DATA_REQUESTING,
        }),
      });
    case DATA_FAILURE:
      return state.merge({
        [action.userId]: Map({
          readyState: DATA_FAILURE,
          err: fromJS(action.err),
        }),
      });
    case DATA_SUCCESS:
      return state.merge({
        [action.userId]: Map({
          readyState: DATA_SUCCESS,
          info: fromJS(action.data),
        }),
      });
    default:
      return state;
  }
};
