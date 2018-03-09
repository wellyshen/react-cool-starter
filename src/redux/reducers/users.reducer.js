/* @flow */

import fp from 'lodash/fp';

import type { Users, Action } from '../../types';

type State = Users;

const initialState = {
  readyStatus: 'USERS_INVALID',
  err: null,
  list: [],
  userInfo: {}
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'USERS_REQUESTING':
      return fp.assign(state, {
        readyStatus: 'USERS_REQUESTING'
      });
    case 'USERS_FAILURE':
      return fp.assign(state, {
        readyStatus: 'USERS_FAILURE',
        err: action.err
      });
    case 'USERS_SUCCESS':
      return fp.assign(state, {
        readyStatus: 'USERS_SUCCESS',
        list: action.data
      });

    case 'USER_REQUESTING':
      return fp.assign(state, {
        userInfo: {
          ...state.userInfo,
          [action.userId]: {
            readyStatus: 'USER_REQUESTING'
          }
        }
      });
    case 'USER_FAILURE':
      return fp.assign(state, {
        userInfo: {
          ...state.userInfo,
          [action.userId]: {
            readyStatus: 'USER_FAILURE',
            err: action.err
          }
        }
      });
    case 'USER_SUCCESS':
      return fp.assign(state, {
        userInfo: {
          ...state.userInfo,
          [action.userId]: {
            readyStatus: 'USER_SUCCESS',
            info: action.data
          }
        }
      });
    default:
      return state;
  }
};
