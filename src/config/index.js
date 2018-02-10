/* @flow */

if (__DEV__) {
  module.exports = require('./default');
} else {
  module.exports = require('./prod');
}
