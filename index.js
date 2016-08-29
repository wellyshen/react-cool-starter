/* eslint max-len:0 */

require('babel-core/register');

const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
const dirRoot = require('path').join(__dirname, '.'); // This should be the same with webpack context

// Setup global variables for use
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEV__ = process.env.NODE_ENV !== 'production';

// Settings of webpack-isomorphic-tools
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('./webpack/webpackIsomorphicTools.config'))
  .development(__DEV__)
  .server(dirRoot, () => {
    require('./src/server');
  });
