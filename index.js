/* @flow */
/* eslint-disable */

// Allows you to use the full set of ES6 features on server-side (place it before anything else)
require('babel-polyfill');
// Allows you to precompile ES6 syntax
require('babel-register');

const WebpackIsomorphicTools = require('webpack-isomorphic-tools');

// Setup global variables for server
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEV__ = process.env.NODE_ENV === 'development';

// This should be the same with webpack context
const dirRoot = require('path').resolve(process.cwd());

// Setup webpack-isomorphic-tools
global.webpackIsomorphicTools = new WebpackIsomorphicTools(
  require('./tools/webpack/WIT.config')
).server(dirRoot, () => require('./src/server'));
