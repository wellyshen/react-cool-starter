if (process.env.NODE_ENV === 'development') {
  module.exports = require('./default');
} else {
  module.exports = require('./prod');
}
