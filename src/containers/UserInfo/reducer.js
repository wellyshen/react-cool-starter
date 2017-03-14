/* @flow */

import _ from 'lodash';

import {
  AN_USER_REQUESTING,
  AN_USER_FAILURE,
  AN_USER_SUCCESS,
} from './action';
import type { UserInfo, Action } from '../../types';

type State = UserInfo;

export default (state: State = {}, action: Action): State => {
  switch (action.type) {
    case AN_USER_REQUESTING:
      return _.assign({}, state, {
        [action.userId]: {
          readyStatus: AN_USER_REQUESTING,
        },
      });
    case AN_USER_FAILURE:
      return _.assign({}, state, {
        [action.userId]: {
          readyStatus: AN_USER_FAILURE,
          err: action.err,
        },
      });
    case AN_USER_SUCCESS:
      return _.assign({}, state, {
        [action.userId]: {
          readyStatus: AN_USER_SUCCESS,
          info: action.data,
        },
      });
    default:
      return state;
  }
};
