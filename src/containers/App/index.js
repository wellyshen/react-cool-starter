/* @flow */

import React from 'react';
import { Switch } from 'react-router-dom';
import Helmet from 'react-helmet';

import config from '../../config';
import { routeWithSubRoutes } from '../../utils/helpers';
import routes from '../../routes';
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
      {routes.map(route => routeWithSubRoutes(route))}
    </Switch>
  </div>
);
