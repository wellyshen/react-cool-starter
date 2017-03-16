/* @flow */

import React, { Element } from 'react';
import { Route } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import _ from 'lodash';

import type { Store } from '../types';

export const loadBranchData = (
  routes: Array<Object>,
  location: Object,
  store: Store): Promise<any> => {
  const branch = matchRoutes(routes, location.pathname);

  const promises = branch.map(({ route, match }) => {
    if (route.loadData) return route.loadData(store.dispath, match.parameter);

    return Promise.resolve(null);
  });

  return Promise.all(promises);
};

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

// getComponent is a function that returns a promise for a component
// It will not be called until the first mount
export const asyncComponent = (getComponent: () => Promise<any>) =>
  class AsyncComponent extends React.Component {
    static Component = null;

    state = { Component: AsyncComponent.Component };

    componentDidMount() {
      if (this.state.Component) return;

      getComponent().then((Component) => {
        AsyncComponent.Component = Component;

        this.setState({ Component });
      });
    }

    render() {
      const { Component } = this.state;

      if (Component) return <Component {...this.props} />;

      return null;
    }
  };

// The fake store creator for testing Components
export const storeFake = (state: Object): Object => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});
