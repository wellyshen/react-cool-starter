/* @flow */

const fp = require('lodash/fp');

const defaultConfig = require('./default');

module.exports = fp.merge(defaultConfig, {
  // Over write default settings here...
});
