/* eslint max-len:0 prefer-template:0 */

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = function (CSSModules) {  // eslint-disable-line func-names
  return {
    module: {
      loaders: [
        { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel?cacheDirectory' },
        { test: /\.json$/, loader: 'json-loader' },
        { test: /\.(jpe?g|png|gif|svg)$/, loader: 'url?limit=10240' },
        {
          test: /\.css$/,
          loader: 'style!css?localIdentName=[name]__[local].[hash:base64:5]&' + (CSSModules ? 'modules' : '') + '&sourceMap&-minimize&importLoaders=1!postcss',
        },
        {
          test: /\.scss$/,
          loader: 'style!css?localIdentName=[name]__[local].[hash:base64:5]&' + (CSSModules ? 'modules' : '') + '&sourceMap&-minimize&importLoaders=2!postcss!sass?outputStyle=expanded&sourceMap',
        },
      ],
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.json'],
      modules: [
        path.join(__dirname, '../../src'),
        'node_modules',
      ],
    },
    plugins: [
      new webpack.DefinePlugin({  // Setup global variables for app
        'process.env': { NODE_ENV: JSON.stringify('development') },
        __CLIENT__: JSON.stringify(true),
        __SERVER__: JSON.stringify(false),
        __DEV__: JSON.stringify(true),
      }),
      new webpack.IgnorePlugin(/\.json$/),
      new webpack.NoErrorsPlugin(),
    ],
    postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
  };
};
