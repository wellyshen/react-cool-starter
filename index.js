require('babel-core/register'); // Enable runtime transpilation to use ES6/7 in node

// Setup global variables for node
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;   // Disable server side render here
global.__DEV__ = process.env.NODE_ENV !== 'production';

const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
// This should be the same with webpack context
const dirRoot = require('path').join(process.cwd());

// Settings of webpack-isomorphic-tools
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('./tools/webpack/WIT.config'))
  .server(dirRoot, () => {
    require('./src/server');
  });
