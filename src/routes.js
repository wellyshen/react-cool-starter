/* @flow */

import type { Dispatch } from './types';
import Home from './containers/Home';
import UserInfo from './containers/UserInfo';
import NotFound from './containers/NotFound';

export default [
  {
    path: '/',
    exact: true,
    component: Home,
    loadData: (dispatch: Dispatch) => Home.fetchData(dispatch),
  },
  {
    path: '/UserInfo/:id',
    exact: false,
    component: UserInfo,
    loadData: (dispatch: Dispatch, params: Object) => UserInfo.fetchData(dispatch, params),
  },
  {
    path: '*',
    exact: false,
    component: NotFound,
  },
];
