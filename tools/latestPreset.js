/* Configure for webpack 2 tree shake, we need to disable commonjs while building */

// eslint-disable-next-line import/no-extraneous-dependencies
const latest = require('babel-preset-latest');

const BABEL_ENV = process.env.BABEL_ENV;

module.exports = {
  presets: [
    [latest, {
      es2015: {
        loose: true,
        modules: BABEL_ENV === 'es' ? false : 'commonjs',
      },
    }],
  ],
};
