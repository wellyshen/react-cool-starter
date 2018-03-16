/* @flow */

import React from 'react';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import LoadingBar from 'react-redux-loading-bar';

import config from '../../config';
// Import your global styles here
// import '../../../node_modules/normalize.css/normalize.css';
import styles from './styles.scss';
import HeaderItem from '../Header';

type Props = { route: Object };

export default ({ route }: Props) => (
  <div className={styles.App}>
    <Helmet {...config.app} />
    <LoadingBar />
    <HeaderItem />
    {renderRoutes(route.routes)}
  </div>
);
