/* eslint func-names:0 */

const webpackConfig = require('./tools/webpack.test.config');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests.webpack.js',
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha'],
    webpack: webpackConfig,
    webpackMiddleware: { stats: 'errors-only' },
    webpackServer: { noInfo: true },
  });
};
