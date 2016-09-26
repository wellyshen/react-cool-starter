/* eslint new-cap:0 */

import { Map, fromJS } from 'immutable';
import {
  DATA_INVALID,
  DATA_REQUESTING,
  DATA_FAILURE,
  DATA_SUCCESS,
} from './action';

const initialState = Map({
  readyState: DATA_INVALID,
  list: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUESTING:
      return state.merge({
        readyState: DATA_REQUESTING,
      });
    case DATA_FAILURE:
      return state.merge({
        readyState: DATA_FAILURE,
        err: fromJS(action.err),
      });
    case DATA_SUCCESS:
      return state.merge({
        readyState: DATA_SUCCESS,
        list: fromJS(action.data),
      });
    default:
      return state;
  }
};
