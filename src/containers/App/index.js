/* @flow */

import React from 'react';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';

import config from '../../config';
import routes from '../../routes';
// Import your global styles here
import '../../../node_modules/normalize.css/normalize.css';
import styles from './styles.scss';

const App = () => (
  <div className={styles.App}>
    <Helmet {...config.app} />
    <div className={styles.header}>
      <img src={require('./assets/logo.svg')} alt="Logo" role="presentation" />
      <h1>{config.app.title}</h1>
    </div>
    <hr />
    {renderRoutes(routes)}
  </div>
);

export default hot(module)(App);
