/* @flow */
import React from 'react';
import { Route } from 'react-router-dom';
import _ from 'lodash/fp';
import root from './root';

const routerConf = {
  root,
};

const routeWithSubRoutes = (route): Element<typeof Route> => (
  <Route
    key={_.uniqueId()}
    exact={route.exact || false}
    path={route.path}
    render={props => (
      // Pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes || null} />
    )}
  />
);

const routeConfig = (rootUrl = 'root') => {
  const tmp = routerConf[rootUrl] || [];
  return tmp.map(route => routeWithSubRoutes(route));
};

export const appRouters = root;
/* https://reacttraining.com/react-router/web/example/route-config */
export default routeConfig;
