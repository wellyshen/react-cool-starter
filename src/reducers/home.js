/* @flow */

import fp from 'lodash/fp';

import type { Home, Action } from '../types';

type State = Home;

const initialState = {
  readyStatus: 'USERS_INVALID',
  err: null,
  list: []
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
    default:
      return state;
  }
};
