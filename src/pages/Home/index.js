/*
 * Due to this known issue: https://github.com/smooth-code/loadable-components/issues/173
 * Use .js extension for code-splitting file
 */

import React from 'react';
import loadable from '@loadable/component';

import { Loading, ErrorBoundary } from '../../components';

const Home = loadable(() => import('./Home'), {
  fallback: <Loading />
});

export default props => (
  <ErrorBoundary>
    <Home {...props} />
  </ErrorBoundary>
);
