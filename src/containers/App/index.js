/* @flow */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import _ from 'lodash';

import config from '../../config';
import routes from '../../routes';
// import Home from '../Home';
// import UserInfo from '../UserInfo';
// import NotFound from '../NotFound';
import '../../theme/normalize.css';
import styles from './styles.scss';

export default () => (
  <div className={styles.App}>
    <Helmet {...config.app} />
    <div className={styles.header}>
      <img src={require('./assets/logo.svg')} alt="Logo" role="presentation" />
      <h1>{config.app.title}</h1>
    </div>
    <hr />
    <Switch>
      {
        routes.map(route => (
          <Route
            key={_.uniqueId()}
            path={route.path}
            render={props => (
              // pass the sub-routes down to keep nesting
              <route.component {...props} routes={route.routes} />
            )}
          />
        ))
      }
    </Switch>
  </div>
);
