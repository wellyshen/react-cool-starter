const _ = require('lodash/fp');

const defaultConfig = require('./default');

module.exports = _.merge(defaultConfig, {
  // Over write default settings here...
});
