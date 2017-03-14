/* @flow */

import Home from './containers/Home';
import UserInfo from './containers/UserInfo';
import NotFound from './containers/NotFound';

export default [
  {
    path: '/',
    component: Home,
    // loadData: () => getSomeData(),
  },
  {
    path: '/UserInfo/:id',
    component: UserInfo,
    // loadData: () => getSomeData(),
  },
  {
    component: NotFound,
    // loadData: () => getSomeData(),
  },
];
