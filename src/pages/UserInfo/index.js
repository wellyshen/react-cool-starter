/*
 * Due to this known issue: https://github.com/smooth-code/loadable-components/issues/173
 * Use .js extension for code-splitting file
 */

import React from 'react';
import loadable from '@loadable/component';

import { Loading, ErrorBoundary } from '../../components';

const UserInfo = loadable(() => import('./UserInfo'), {
  fallback: <Loading />
});

export default props => (
  <ErrorBoundary>
    <UserInfo {...props} />
  </ErrorBoundary>
);
