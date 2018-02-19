/* @flow */

// Allows you to use the full set of ES6 features on server-side (place it before anything else)
require('babel-polyfill');
// Allows you to precompile ES6 syntax
require('babel-register');

// Setup global variables for server
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEV__ = process.env.NODE_ENV === 'development';

// Styles hook for server-side
const sass = require('node-sass');
const path = require('path');

require('css-modules-require-hook')({
  generateScopedName: '[name]__[local]__[hash:base64:5]',
  extensions: ['.css', '.scss', '.sass'],
  preprocessCss: (data, filename) =>
    sass.renderSync({
      data,
      file: filename
    }).css,
  // Must the same with the "context" of webpack LoaderOptionsPlugin
  // see here: https://github.com/css-modules/css-modules-require-hook/issues/86
  rootDir: path.resolve(process.cwd(), 'src'),
  devMode: __DEV__
});

// Images hook for server-side
require('asset-require-hook')({
  extensions: ['gif', 'jpg', 'jpeg', 'png', 'webp'],
  limit: 10240
});

// Fonts hook for server-side
require('asset-require-hook')({
  extensions: ['woff', 'woff2', 'ttf', 'eot', 'svg'],
  limit: 10240
});

require('./src/server');
