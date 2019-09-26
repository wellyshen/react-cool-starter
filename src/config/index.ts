import defaultConfig from './default';
import prodConfig from './prod';

export default __DEV__
  ? { ...defaultConfig }
  : { ...defaultConfig, ...prodConfig };
