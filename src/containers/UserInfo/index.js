/* @flow */

import loadable from 'loadable-components';

import reducerInjector from '../../utils/reducerInjector';
import userInfo from '../../reducers/userInfo';
import { Error, Loading } from '../../components';

// Inject the reuder which belongs to the component
reducerInjector.inject('userInfo', userInfo);

export default loadable(() => import('./UserInfo'), {
  ErrorComponent: Error,
  LoadingComponent: Loading
});
