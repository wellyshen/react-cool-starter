const _merge = require('lodash/fp/merge');

const defaultConfig = require('./default');

module.exports = _merge(defaultConfig, {
  // Over write default settings here...
});
