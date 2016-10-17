'use strict'; // eslint-disable-line

const path = require('path');
const webpack = require('webpack');
// eslint-disable-next-line import/no-extraneous-dependencies
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals({
    // Load non-javascript files with extensions, presumably via loaders
    whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
  })],
  devtool: 'hidden-source-map',
  context: path.join(process.cwd()),
  entry: { server: ['./src/server.js'] },
  output: {
    path: path.join(process.cwd(), './build'),
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          babelrc: false,
          presets: [['es2015', { modules: false }], 'react', 'stage-0'],
        },
      },
      { test: /\.json$/, loader: 'json' },
      { test: /\.css$/, loaders: ['css-loader/locals', 'postcss'] },
      { test: /\.scss$/, loaders: ['css-loader/locals', 'postcss', 'sass'] },
    ],
  },
  plugins: [
    // Setup global variables for server
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
      __CLIENT__: false,
      __SERVER__: true,
      __DEV__: process.env.NODE_ENV !== 'production',
    }),
    new webpack.IgnorePlugin(/\.(eot|woff|woff2|ttf|otf|svg|png|jpe?g|gif|webp|mp4|mp3|ogg|pdf)$/),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: false,
    }),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['src', 'node_modules'],
  },
  node: {
    __filename: true,
    __dirname: true,
    global: true,
  },
};
