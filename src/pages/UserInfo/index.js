/* @flow */

import loadable from 'react-loadable';

import { Loading } from '../../components';

export default loadable({
  loader: () => import('./UserInfo'),
  loading: Loading
});
