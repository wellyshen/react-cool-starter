/* @flow */

import loadable from 'loadable-components';

import reducerInjector from '../../utils/reducerInjector';
import home from '../../reducers/home';
import { Error, Loading } from '../../components';

// Inject the reuder which belongs to the component
reducerInjector.inject('home', home);

export default loadable(() => import('./Home'), {
  ErrorComponent: Error,
  LoadingComponent: Loading
});
