/* @flow */

import React, { Element } from 'react';
import { Route } from 'react-router-dom';
import _ from 'lodash';

// When sub routes are added to any route it'll work
export const routeWithSubRoutes = (route: Object): Element<any> => (
  <Route
    key={_.uniqueId()}
    exact={route.exact}
    path={route.path}
    render={props => (
      // Pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

// The fake store creator for testing Components
export function storeFake(state: Object): Object {
  return {
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => ({ ...state }),
  };
}
