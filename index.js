require('babel-core/register'); // Enable runtime transpilation to use ES6/7 in node

const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
// This should be the same with webpack context
const dirRoot = require('path').join(__dirname, '.');

// Setup global variables for use
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEV__ = process.env.NODE_ENV !== 'production';

// Settings of webpack-isomorphic-tools
// eslint-disable-next-line max-len
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('./tools/webpackIsomorphicTools.config'))
  .development(__DEV__)
  .server(dirRoot, () => {
    require('./src/server');
  });
