import _ from 'lodash';

const defaultConfig = require('./default');

const config = _.assign({}, defaultConfig, {
  // Over write default settings here...
});

export default config;
