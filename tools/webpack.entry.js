let webpackConfig;
const CSSModules = true;  // Disable css modules here

if (process.env.NODE_ENV !== 'test') {
  webpackConfig = require('./webpack.config')(CSSModules);
} else {
  webpackConfig = require('./webpack.test.config')(CSSModules);
}

module.exports = webpackConfig;
