/* @flow */
import loadable from '@loadable/component';
import { Loading } from '../../components';

export default loadable(() => import('./UserInfo'), {
  fallback: Loading
});
