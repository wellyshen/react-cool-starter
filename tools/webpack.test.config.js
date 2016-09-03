/* eslint max-len:0 prefer-template:0 */

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = function (CSSModules) {  // eslint-disable-line func-names
  return {
    devtool: 'inline-source-map',
    module: {
      loaders: [
        { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel?cacheDirectory' },
        { test: /\.(jpe?g|png|gif|svg)$/, loader: 'url?limit=10240' },
        {
          test: /\.scss$/,
          loader: 'style!css?localIdentName=[name]__[local].[hash:base64:5]&' + (CSSModules ? 'modules' : '') + '&sourceMap&-minimize&importLoaders=2!postcss!sass?outputStyle=expanded&sourceMap',
        },
      ],
    },
    postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
  };
};
