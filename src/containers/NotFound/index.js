/* @flow */

import React from 'react';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import styles from './styles.scss';

const NotFound = () => (
  <Route
    render={(props: Object) => {
      const { staticContext } = props;
      if (staticContext) {
        staticContext.status = '404';
      }
      return (
        <div className={styles.NotFound}>
          <Helmet title="Oops" />
          <p>Oops, Page was not found!</p>
        </div>
      );
    }}
  />
);

export default NotFound;
