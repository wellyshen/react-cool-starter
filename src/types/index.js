/* @flow */

import type { Store as ReduxStore } from 'redux';

export type Home = {
  readyStatus: string,
  err: any,
  list: Array<Object>,
};

export type UserInfo = {
  [userId: string]: {
    readyStatus: string,
    err: any,
    info: Object,
  },
};

export type Reducer = {
  routing: any,
  home: Home,
  userInfo: UserInfo,
  asyncReducers: Object,
};

export type Action =
  { type: 'USERS_REQUESTING' } |
  { type: 'USERS_SUCCESS', data: Array<Object> } |
  { type: 'USERS_FAILURE', err: any } |
  { type: 'USER_REQUESTING', userId: string } |
  { type: 'USER_SUCCESS', userId: string, data: Object } |
  { type: 'USER_FAILURE', userId: string, err: any };

export type Store = ReduxStore<Reducer, Action>;
// eslint-disable-next-line no-use-before-define
export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
