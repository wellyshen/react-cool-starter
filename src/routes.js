/* No flow in this file, waiting for dynamic import support */

import chalk from 'chalk';

import { asyncComponent } from './utils/helpers';
import type { Store, Dispatch } from './types';
import { fetchUsersIfNeeded } from './containers/Home/action';
import { fetchUserIfNeeded } from './containers/UserInfo/action';
import { injectReducer } from './redux/reducers';

const errorLoading = (err) => {
  console.error(chalk.red(`==> 😭  Dynamic page loading failed ${err}`));
};

export default (store: Store): Array<Object> => [
  {
    path: '/',
    exact: true,
    component: asyncComponent(
      () => Promise.all([
        import('./containers/Home'),
        import('./containers/Home/reducer'),
      ])
      .then(([Component, reducer]) => {
        injectReducer(store, 'home', reducer.default);

        return Component.default;
      })
      .catch(errorLoading),
    ),
    loadData: (dispatch: Dispatch) => Promise.all([
      dispatch(fetchUsersIfNeeded()),
    ]),
  },
  {
    path: '/UserInfo/:id',
    exact: false,
    component: asyncComponent(
      () => Promise.all([
        import('./containers/UserInfo'),
        import('./containers/UserInfo/reducer'),
      ])
      .then(([Component, reducer]) => {
        injectReducer(store, 'userInfo', reducer.default);

        return Component.default;
      })
      .catch(errorLoading),
    ),
    loadData: (dispatch: Dispatch, params: Object) => Promise.all([
      dispatch(fetchUserIfNeeded(params.id)),
    ]),
  },
  {
    path: '*',
    exact: false,
    component: asyncComponent(
      () => Promise.all([
        import('./containers/NotFound'),
      ])
      .then(([Component]) => Component.default),
    ),
  },
];
