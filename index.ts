// Allows you to precompile ES6 syntax
require('@babel/register')({
  plugins: ['dynamic-import-node'],
});

declare namespace NodeJS { // eslint-disable-line
  interface Global {
    __CLIENT__: boolean;
    __SERVER__: boolean;
    __DEV__: boolean;
  }
}

// Setup global variables for server-side
global.__CLIENT__ = false; // eslint-disable-line
global.__SERVER__ = true; // eslint-disable-line
global.__DEV__ = process.env.NODE_ENV === 'development'; // eslint-disable-line

// Run assets require hooks
require('./tools/webpack/hooks')();
// Run server
require('./src/server');
