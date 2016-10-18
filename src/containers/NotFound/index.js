import React from 'react';
import Helmet from 'react-helmet';

import styles from './styles.scss';

export default () => (
  <div className={styles.NotFound}>
    <Helmet title="Oops" />
    <p>Oops, Page was not found!</p>
  </div>
);
