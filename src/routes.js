import App from './containers/App';

const errorLoading = (err) => {
  console.error(`==> 😭  Dynamic page loading failed ${err}`);
};

const loadRoute = cb => module => cb(null, module.default);

export default {
  path: '/',
  component: App,
  indexRoute: {
    getComponent(location, cb) {
      System.import('./containers/Home')
        .then(loadRoute(cb))
        .catch(errorLoading);
    },
  },
  childRoutes: [
    {
      path: 'UserInfo/:id',
      getComponent(location, cb) {
        System.import('./containers/UserInfo')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '*',
      getComponent(location, cb) {
        System.import('./containers/NotFound')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
  ],
};
