'use strict'; // eslint-disable-line

const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { CSSModules, stylelint } = require('./config');

module.exports = {
  name: 'server',
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
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [['es2015', { modules: false }], 'react', 'stage-0'],
          plugins: ['transform-runtime'],
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'css-loader/locals',
            options: {
              modules: CSSModules,
              // "context" and "localIdentName" need to be the same with client config,
              // or the style will flick when page first loaded
              context: path.join(process.cwd(), './src'),
              localIdentName: '[hash:base64:5]',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot)$/,
        loader: 'url-loader',
        options: { limit: 10000 },
      },
    ],
  },
  plugins: [
    // Setup global variables for server
    new webpack.LoaderOptionsPlugin({
      options: {
        // Javascript lint
        eslint: { failOnError: stylelint },
      },
    }),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['src', 'node_modules'],
  },
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: true,
    __dirname: true,
  },
};
