/* @flow */

import fp from 'lodash/fp';

import type { Home, Action } from '../types';

type State = Home;

const initialState = {
  requesting: false
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'REQUESTING_SERVER':
      return fp.assign(state, {
        requesting: action.data
      });
    default:
      return state;
  }
};
