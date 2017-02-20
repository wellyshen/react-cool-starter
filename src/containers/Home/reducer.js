/* @flow */

import {
  USERS_INVALID,
  USERS_REQUESTING,
  USERS_FAILURE,
  USERS_SUCCESS,
} from './action';
import type { Home, Action } from '../../types';

type State = Home;

const initialState = { readyState: USERS_INVALID };

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case USERS_REQUESTING:
      return { readyState: USERS_REQUESTING };
    case USERS_FAILURE:
      return {
        readyState: USERS_FAILURE,
        err: action.err,
      };
    case USERS_SUCCESS:
      return {
        readyState: USERS_SUCCESS,
        list: action.data,
      };
    default:
      return state;
  }
};
