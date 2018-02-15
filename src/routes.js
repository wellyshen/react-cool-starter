/* @flow */

import type { Dispatch } from './types';
import { fetchUsersIfNeeded } from './actions/users';
import { fetchUserIfNeeded } from './actions/user';
import { Home, UserInfo, NotFound } from './containers';

export default [
  {
    path: '/',
    exact: true,
    component: Home, // Add your route here
    loadData: (dispatch: Dispatch) =>
      Promise.all([
        dispatch(fetchUsersIfNeeded()) // Register your server-side call action(s) here
      ])
  },
  {
    path: '/UserInfo/:id',
    component: UserInfo,
    loadData: (dispatch: Dispatch, params: Object) =>
      Promise.all([dispatch(fetchUserIfNeeded(params.id))])
  },
  {
    component: NotFound
  }
];
