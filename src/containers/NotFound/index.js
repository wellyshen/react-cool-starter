/* @flow */

import loadable from 'loadable-components';

import { Error, Loading } from '../../components';

export default loadable(() => import('./NotFound'), {
  ErrorComponent: Error,
  LoadingComponent: Loading
});
