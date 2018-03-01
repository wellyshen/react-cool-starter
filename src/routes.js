/* @flow */

import { App, asyncHome, asyncUserInfo, NotFound } from './containers';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: asyncHome // Add your route here
      },
      {
        path: '/UserInfo/:id',
        component: asyncUserInfo
      },
      {
        component: NotFound
      }
    ]
  }
];
