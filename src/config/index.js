import defaultConfig from './default';
import prodConfig from './prod';

const config = __DEV__
  ? { ...defaultConfig }
  : { ...defaultConfig, ...prodConfig };

export default config;
