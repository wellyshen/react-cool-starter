require('babel-core/register'); // Enable runtime transpilation to use ES6/7 in node

// Setup global variables for node
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEV__ = process.env.NODE_ENV !== 'production';

const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
// This should be the same with webpack context
const dirRoot = require('path').join(__dirname, '.');

// Settings of webpack-isomorphic-tools
// eslint-disable-next-line max-len
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('./tools/webpack/webpack-isomorphic-tools.config'))
  .development(__DEV__)
  .server(dirRoot, () => {
    require('./src/server');
  });
