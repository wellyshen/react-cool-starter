/* No flow in this file, waiting for dynamic import support */

import { asyncComponent } from './utils/helpers';
import type { Dispatch } from './types';
import { fetchUsersIfNeeded } from './containers/Home/action';
import { fetchUserIfNeeded } from './containers/UserInfo/action';

export default [
  {
    path: '/',
    exact: true,
    component: asyncComponent(() => Promise.all([
      import('./containers/Home'),
    ]).then(([Component]) => Component.default)),
    loadData: (dispatch: Dispatch) => Promise.all([
      dispatch(fetchUsersIfNeeded()),
    ]),
  },
  {
    path: '/UserInfo/:id',
    exact: false,
    component: asyncComponent(() => Promise.all([
      import('./containers/UserInfo'),
    ]).then(([Component]) => Component.default)),
    loadData: (dispatch: Dispatch, params: Object) => Promise.all([
      dispatch(fetchUserIfNeeded(params.id)),
    ]),
  },
  {
    path: '*',
    exact: false,
    component: asyncComponent(() => Promise.all([
      import('./containers/NotFound'),
    ]).then(([Component]) => Component.default)),
  },
];
