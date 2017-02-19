const WebpackIsomorphicTools = require('webpack-isomorphic-tools');

// Setup global variables for server
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;   // Disable server side render here
global.__DEV__ = process.env.NODE_ENV !== 'production';

// This should be the same with webpack context
// eslint-disable-next-line import/newline-after-import
const dirRoot = require('path').join(process.cwd());
const serverPath = __DEV__ ? './src/server' : './build/server';

// Settings of webpack-isomorphic-tools
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('./tools/webpack/WIT.config'))
  .server(dirRoot, () => {
    require(serverPath);  // eslint-disable-line import/no-dynamic-require
  });
