/* No flow in this file, waiting for dynamic import support */

import { asyncComponent } from './utils/helpers';
import type { Dispatch } from './types';
import { fetchDataIfNeeded as fetchDataIfNeededHome } from './containers/Home/action';
import { fetchDataIfNeeded as fetchDataIfNeededUserInfo } from './containers/UserInfo/action';

export default [
  {
    path: '/',
    exact: true,
    component: asyncComponent(() => Promise.all([
      import('./containers/Home'),
    ]).then(([Component]) => Component.default)),
    loadData: (dispatch: Dispatch) => Promise.all([
      dispatch(fetchDataIfNeededHome()),
    ]),
  },
  {
    path: '/UserInfo/:id',
    exact: false,
    component: asyncComponent(() => Promise.all([
      import('./containers/UserInfo'),
    ]).then(([Component]) => Component.default)),
    loadData: (dispatch: Dispatch, params: Object) => Promise.all([
      dispatch(fetchDataIfNeededUserInfo(params.id)),
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
