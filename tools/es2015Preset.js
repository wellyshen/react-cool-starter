/* For webpack 2 tree shake, we need to disable commonjs while building */

const buildPreset = require('babel-preset-es2015').buildPreset;

const BABEL_ENV = process.env.BABEL_ENV;

module.exports = {
  presets: [
    [buildPreset, {
      loose: true,
      modules: BABEL_ENV === 'es' ? false : 'commonjs',
    }],
  ],
};
