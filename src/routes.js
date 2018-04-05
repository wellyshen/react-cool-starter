/* @flow */

// import type { Dispatch } from './types';
import { fetchUsersIfNeeded } from './actions/users';
import { fetchUserIfNeeded } from './actions/user';
import App from './app';
import { asyncHome, asyncUserInfo, NotFound } from './pages';

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
