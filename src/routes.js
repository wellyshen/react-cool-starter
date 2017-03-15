import { asyncComponent } from './utils/helpers';
import type { Dispatch } from './types';
import Home from './containers/Home';
import UserInfo from './containers/UserInfo';
// import NotFound from './containers/NotFound';

export default [
  {
    path: '/',
    exact: true,
    component: asyncComponent(() => Promise.all([
      import('./containers/Home'),
    ]).then(([Component]) => Component.default)),
    loadData: (dispatch: Dispatch) => Home.fetchData(dispatch),
  },
  {
    path: '/UserInfo/:id',
    exact: false,
    component: asyncComponent(() => Promise.all([
      import('./containers/UserInfo'),
    ]).then(([Component]) => Component.default)),
    loadData: (dispatch: Dispatch, params: Object) => UserInfo.fetchData(dispatch, params),
  },
  {
    path: '*',
    exact: false,
    component: asyncComponent(() => Promise.all([
      import('./containers/NotFound'),
    ]).then(([Component]) => Component.default)),
  },
];
