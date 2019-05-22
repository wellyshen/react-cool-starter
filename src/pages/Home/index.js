/* @flow */
import loadable from '@loadable/component';
import { Loading } from '../../components';

export default loadable(() => import('./Home'), {
  fallback: Loading
});
