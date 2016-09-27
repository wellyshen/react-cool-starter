if (process.env.NODE_ENV !== 'production') {
  /* istanbul ignore next */
  module.exports = require('./default');
} else {
  /* istanbul ignore next */
  module.exports = require('./prod');
}
