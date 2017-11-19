/* @flow */

import type { Element } from 'react';
import React from 'react';
import { Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
// Import your global styles here
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import styles from './styles.scss';

import config from '../../config';
import routes from '../../routers/index';


const App = (): Element<'div'> => (
  <div className={styles.App}>
    <Helmet {...config.app} />
    <div className={styles.header}>
      <img src={require('./assets/logo.svg')} alt="Logo" role="presentation" />
      <h1>{config.app.title}</h1>
    </div>
    <hr />
    <Switch>{routes()}</Switch>
  </div>
);
export default App;
