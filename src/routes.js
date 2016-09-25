import chalk from 'chalk';
import { injectReducer } from './reducers';
import App from './containers/App';

const errorLoading = (err) => {
  console.error(chalk.red(`==> 😭  Dynamic page loading failed ${err}`));
};

const loadModule = cb => (Component) => {
  cb(null, Component.default);
};

export default function createRoutes(store) {
  return {
    path: '/',
    component: App,
    indexRoute: {
      getComponent(location, cb) {
        const importModules = Promise.all([
          System.import('./reducers/users'),
          System.import('./containers/Home'),
        ]);

        const renderRoute = loadModule(cb);

        importModules
          .then(([reducer, Component]) => {
            injectReducer(store, 'users', reducer.default);

            renderRoute(Component);
          })
          .catch(errorLoading);
      },
    },
    childRoutes: [
      {
        path: 'UserInfo/:id',
        getComponent(location, cb) {
          const importModules = Promise.all([
            System.import('./reducers/anUser'),
            System.import('./containers/UserInfo'),
          ]);

          const renderRoute = loadModule(cb);

          importModules
            .then(([reducer, Component]) => {
              injectReducer(store, 'anUser', reducer.default);

              renderRoute(Component);
            })
            .catch(errorLoading);
        },
      },
      {
        path: '*',
        getComponent(location, cb) {
          System.import('./containers/NotFound')
            .then(loadModule(cb))
            .catch(errorLoading);
        },
      },
    ],
  };
}
