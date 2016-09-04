/* eslint func-names:0 */

const webpackConfig = require('../webpack');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './testBundler.js',
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha'],
    webpack: webpackConfig,
    // Make Webpack bundle generation quiet
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only',
    },
  });
};
