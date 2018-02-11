/* @flow */

import loadable from 'loadable-components';

import { ErrorDisplay, Loading } from '../../components';

export default loadable(() => import('./NotFound'), {
  ErrorComponent: ErrorDisplay,
  LoadingComponent: Loading
});
