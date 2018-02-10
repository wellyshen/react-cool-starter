/* @flow */

import loadable from 'loadable-components';

import { Error, Loading } from '../../components';

export default loadable(() => import('./Home'), {
  ErrorComponent: Error,
  LoadingComponent: Loading
});
