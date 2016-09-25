import chalk from 'chalk';
import App from '../containers/App';

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
        System.import('./Home')(store)
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    childRoutes: [
      {
        getComponent(location, cb) {
          const importModules = Promise.all([
            System.import('./UserInfo')(store),
            System.import('./NotFound'),
          ]);

          importModules
            .then(loadModule(cb))
            .catch(errorLoading);
        },
      },
    ],
  };
}
