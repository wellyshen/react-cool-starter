/* istanbul ignore if */
if (process.env.NODE_ENV !== 'production') {
  module.exports = require('./default');
/* istanbul ignore else */
} else {
  module.exports = require('./prod');
}
