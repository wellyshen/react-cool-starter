/* @flow */

import Loadable from 'react-loadable';

import { Loading } from '../../components';

export default Loadable({
  loader: () => import('./Home'),
  loading: Loading
});
