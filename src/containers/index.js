/* @flow */

if (__DEV__) {
  module.exports = require('./dev');
} else {
  module.exports = require('./prod');
}
