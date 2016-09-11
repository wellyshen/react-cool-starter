/* eslint func-names:0 */

const webpackConfig = require('../webpack');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],

    autoWatch: false,

    singleRun: true,

    frameworks: ['mocha'],

    files: ['./test-bundler.js'],

    preprocessors: {
      './test-bundler.js': ['webpack', 'sourcemap'],
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
