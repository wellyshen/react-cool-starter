/* @flow */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import _ from 'lodash';

import config from '../../config';
import routes from '../../routes';
import '../../theme/normalize.css';
import styles from './styles.scss';

export default () => {
  // When sub routes are added to any route it'll work
  const RouteWithSubRoutes = (route, index) => (
    <Route
      key={_.uniqueId()}
      path={route.path}
      exact={index === 0 || false}
      render={props => (
        // Pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );

  return (
    <div className={styles.App}>
      <Helmet {...config.app} />
      <div className={styles.header}>
        <img src={require('./assets/logo.svg')} alt="Logo" role="presentation" />
        <h1>{config.app.title}</h1>
      </div>
      <hr />
      <Switch>
        {routes.map((route, index) => RouteWithSubRoutes(route, index))}
      </Switch>
    </div>
  );
};
