/* @flow */

// import type { Dispatch } from './types';
import { fetchUsersIfNeeded } from './actions/users';
import { fetchUserIfNeeded } from './actions/user';
import { App, asyncHome, asyncUserInfo, Login, NotFound } from './containers';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: asyncHome, // Add your route here
        loadData: () => [
          fetchUsersIfNeeded()
          // Add other pre-fetched actions here
        ]
      },
      {
        path: '/login',
        component: Login
      },
      {
        path: '/UserInfo/:id',
        component: asyncUserInfo,
        loadData: ({ params }: Object) => [fetchUserIfNeeded(params.id)]
      },
      {
        component: NotFound
      }
    ]
  }
];
