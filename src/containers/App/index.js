/* @flow */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import config from '../../config';
import Home from '../Home';
import UserInfo from '../UserInfo';
import NotFound from '../NotFound';
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
      <Route exact path="/" component={Home} />
      <Route path="UserInfo/:id" component={UserInfo} />
      <Route component={NotFound} />
    </Switch>
  </div>
);
