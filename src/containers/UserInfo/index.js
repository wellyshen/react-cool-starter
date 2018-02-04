/* @flow */

import loadable from 'loadable-components';

import { Error, Loading } from '../../components';

export default loadable(() => import('./UserInfo'), {
  ErrorComponent: Error,
  LoadingComponent: Loading
});
