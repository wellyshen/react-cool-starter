/* @flow */

import type { Dispatch } from './types';
import { fetchUsersIfNeeded } from './actions/users';
import { fetchUserIfNeeded } from './actions/user';
import { App, Home, UserInfo, NotFound } from './containers';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home, // Add your route here
        loadData: (dispatch: Dispatch) =>
          Promise.all([
            dispatch(fetchUsersIfNeeded())
            // Register other server-side pre-fetched action here
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
    ]
  }
];
