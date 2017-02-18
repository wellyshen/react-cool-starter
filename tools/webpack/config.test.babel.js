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
        loader: 'babel-loader',
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
      // sinon.js--aliased for enzyme--expects/requires global vars.
      // imports-loader allows for global vars to be injected into the module.
      // See https://github.com/webpack/webpack/issues/304
      {
        test: /sinon\/pkg\/sinon\.js/,
        loader: 'imports-loader?define=>false&require=>false',
      },
      { test: /\.(css|scss|png|jpe?g|gif|woff2?|ttf|eot|svg)$/, loader: 'null-loader' },
    ],
  },
  // Required for enzyme to work properly
  externals: {
    cheerio: 'window',
    'react/addons': 'react/addons',
    'react/lib/ExecutionEnvironment': 'react/lib/ExecutionEnvironment',
    'react/lib/ReactContext': 'react/lib/ReactContext',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['src', 'node_modules'],
    alias: {
      // Required for enzyme to work properly
      sinon: 'sinon/pkg/sinon',
    },
  },
  plugins: [
    // Setup global variables for app
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('development') },
      __CLIENT__: JSON.stringify(true),
      __SERVER__: JSON.stringify(false),
      __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
    }),
    new webpack.IgnorePlugin(/\.json$/),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
