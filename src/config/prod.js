/* @flow */

const defaultConfig = require('./default');

const prodConfig = {
  // Over write default settings here...
};

module.exports = { ...defaultConfig, ...prodConfig };
