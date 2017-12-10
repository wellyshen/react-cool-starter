/* @flow */

import React from 'react';
import type { Element } from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import _ from 'lodash/fp';

import config from '../../config';
import routes from '../../routes';
// Import your global styles here
import '../../theme/normalize.css';
import styles from './styles.scss';

const App = (): Element<'div'> => {
  // wrap <Route> and use this everywhere instead, then when
  // sub routes are added to any route it'll work
  const RouteWithSubRoutes = (route): Element<typeof Route> => (
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

  return (
    <div className={styles.App}>
      <Helmet {...config.app} />
      <div className={styles.header}>
        <img
          src={require('./assets/logo.svg')}
          alt="Logo"
          role="presentation"
        />
        <h1>{config.app.title}</h1>
      </div>
      <hr />
      <Switch>{routes.map(route => RouteWithSubRoutes(route))}</Switch>
    </div>
  );
};

export default App;
