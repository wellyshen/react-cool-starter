/* @flow */

import type { Dispatch } from './types';
import { fetchUsersIfNeeded } from './actions/users';
import { fetchUserIfNeeded } from './actions/user';
import { HomePage, UserInfoPage, NotFoundPage } from './containers';

export default [
  {
    path: '/',
    exact: true,
    component: HomePage, // Add your route here
    loadData: (dispatch: Dispatch) =>
      Promise.all([
        dispatch(fetchUsersIfNeeded()) // Register your server-side call action(s) here
      ])
  },
  {
    path: '/UserInfo/:id',
    component: UserInfoPage,
    loadData: (dispatch: Dispatch, params: Object) =>
      Promise.all([dispatch(fetchUserIfNeeded(params.id))])
  },
  {
    path: '*',
    component: NotFoundPage
  }
];
