/* @flow */

import React from 'react';

import ErrorDisplay from '../ErrorDisplay';
import styles from './styles.scss';

import type { LoadingProps } from '../../types';

export default ({ pastDelay, error }: LoadingProps) => {
  if (error)
    return <ErrorDisplay error={new Error('Failed to load component')} />;

  if (pastDelay)
    return (
      <div className={styles.Loading}>
        <p>Loading...</p>
      </div>
    );

  return null;
};
