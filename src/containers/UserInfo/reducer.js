/* eslint new-cap:0 */

import { Map, fromJS } from 'immutable';
import {
  DATA_REQUESTING,
  DATA_FAILED,
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
    case DATA_FAILED:
      return state.merge({
        [action.userId]: Map({
          readyState: DATA_FAILED,
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
