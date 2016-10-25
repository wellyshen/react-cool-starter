'use strict'; // eslint-disable-line

const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    // The sinon library doesn't like being run through babel
    noParse: [/node_modules\/sinon/],
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [['es2015', { modules: false }], 'react', 'stage-0'],
          plugins: [
            'transform-runtime',
            ['istanbul', {
              exclude: [
                '**/*-test.js',
              ],
            }],
          ],
        },
      },
      { test: /\.json$/, loader: 'json' },
      // sinon.js--aliased for enzyme--expects/requires global vars.
      // imports-loader allows for global vars to be injected into the module.
      // See https://github.com/webpack/webpack/issues/304
      {
        test: /sinon\/pkg\/sinon\.js/,
        loader: 'imports?define=>false,require=>false',
      },
      { test: /\.(css|scss|png|jpe?g|gif|svg|woff2?|ttf|eot)$/, loader: 'null' },
    ],
  },
  // Required for enzyme to work properly
  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      'src',
      'node_modules',
    ],
    alias: {
      // Required for enzyme to work properly
      sinon: 'sinon/pkg/sinon',
    },
  },
  plugins: [
    // Setup global variables for app
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('development') },
      __CLIENT__: true,
      __SERVER__: false,
      __DEV__: process.env.NODE_ENV !== 'production',
    }),
    new webpack.IgnorePlugin(/\.json$/),
    new webpack.NoErrorsPlugin(),
  ],
};
