/* @flow */

import { fetchUsers } from './actions/users';
import { fetchUser } from './actions/user';
import { App, asyncHome, asyncUserInfo, NotFound } from './containers';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: asyncHome, // Add your route here
        loadData: () => [
          fetchUsers()
          // Add other pre-fetched actions here
        ]
      },
      {
        path: '/UserInfo/:id',
        component: asyncUserInfo,
        loadData: ({ params }: Object) => [fetchUser(params.id)]
      },
      {
        component: NotFound
      }
    ]
  }
];
