/* @flow */

import fp from 'lodash/fp';

import type { UserInfo, Action } from '../../types';

type State = UserInfo;

export default (state: State = {}, action: Action): State => {
  switch (action.type) {
    case 'USER_REQUESTING':
      return fp.assign(state, {
        [action.userId]: {
          readyStatus: 'USER_REQUESTING',
        },
      });
    case 'USER_FAILURE':
      return fp.assign(state, {
        [action.userId]: {
          readyStatus: 'USER_FAILURE',
          err: action.err,
        },
      });
    case 'USER_SUCCESS':
      return fp.assign(state, {
        [action.userId]: {
          readyStatus: 'USER_SUCCESS',
          info: action.data,
        },
      });
    default:
      return state;
  }
};
