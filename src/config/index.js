if (process.env.NODE_ENV !== 'production') {
  module.exports = require('./default');
} else {
  module.exports = require('./prod');
}
