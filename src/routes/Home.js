import chalk from 'chalk';
import { injectAsyncReducer } from '../configureStore';

const errorLoading = (err) => {
  console.error(chalk.red(`==> 😭  Dynamic page loading failed ${err}`));
};

const loadModule = cb => (Component) => {
  cb(null, Component.default);
};

export default (store) => { // eslint-disable-line
  return {
    getComponent(location, cb) {
      const importModules = Promise.all([
        System.import('../reducers/users'),
        System.import('../containers/Home'),
      ]);

      const renderRoute = loadModule(cb);

      importModules
        .then(([reducer, Component]) => {
          injectAsyncReducer(store, 'users', reducer.default);

          renderRoute(Component);
        })
        .catch(errorLoading);
    },
  };
};
