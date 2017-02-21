/* No flow in this file, waiting for dynamic import support */

import chalk from 'chalk';
import { injectReducer } from './redux/reducers';
import App from './containers/App';

const errorLoading = (err) => {
  console.error(chalk.red(`==> 😭  Dynamic page loading failed ${err}`));
};

const loadModule = cb => (Component) => {
  cb(null, Component.default);
};

export default function createRoutes(store) {
  return {
    component: App,
    childRoutes: [
      {
        path: '/',
        getComponent(nextState, cb) {
          const importModules = Promise.all([
            import('./containers/Home'),
            import('./containers/Home/reducer'),
          ]);

          const renderRoute = loadModule(cb);

          importModules
            .then(([Component, reducer]) => {
              injectReducer(store, 'home', reducer.default);

              renderRoute(Component);
            })
            .catch(errorLoading);
        },
      },
      {
        path: '/UserInfo/:id',
        getComponent(nextState, cb) {
          const importModules = Promise.all([
            import('./containers/UserInfo'),
            import('./containers/UserInfo/reducer'),
          ]);

          const renderRoute = loadModule(cb);

          importModules
            .then(([Component, reducer]) => {
              injectReducer(store, 'userInfo', reducer.default);

              renderRoute(Component);
            })
            .catch(errorLoading);
        },
      },
      {
        path: '*',
        getComponent(location, cb) {
          import('./containers/NotFound')
            .then(loadModule(cb))
            .catch(errorLoading);
        },
      },
    ],
  };
}
