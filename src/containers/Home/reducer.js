/* @flow */

import _ from 'lodash';

import {
  USERS_INVALID,
  USERS_REQUESTING,
  USERS_FAILURE,
  USERS_SUCCESS,
} from './action';
import type { Home, Action } from '../../types';

type State = Home;

const initialState = {
  readyState: USERS_INVALID,
  err: null,
  list: [],
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case USERS_REQUESTING:
      return _.assign({}, state, { readyState: USERS_REQUESTING });
    case USERS_FAILURE:
      return _.assign({}, state, {
        readyState: USERS_FAILURE,
        err: action.err,
      });
    case USERS_SUCCESS:
      return _.assign({}, state, {
        readyState: USERS_SUCCESS,
        list: action.data,
      });
    default:
      return state;
  }
};
