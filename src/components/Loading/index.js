/* @flow */

import React from 'react';

import ErrorDisplay from '../ErrorDisplay';
import styles from './styles.scss';

const loading = ({ pastDelay, error }: Object) => {
  if (error) {
    return <ErrorDisplay error={new Error('Failed to load component')} />;
  }
  if (pastDelay) {
    return (
      <div className={styles.Loading}>
        <p>Loading...</p>
      </div>
    );
  }
  return null;
};

export default loading;
