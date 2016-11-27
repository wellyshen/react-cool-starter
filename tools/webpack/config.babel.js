/* eslint-disable comma-dangle */

'use strict'; // eslint-disable-line

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv !== 'production';

const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./WIT.config')).development(isDev);

// Disable CSSModules here
const CSSModules = true;
// Register vendors here
const vendor = [
  'react', 'react-dom', 'react-addons-shallow-compare',
  'redux', 'react-redux',
  'redux-thunk',
  'immutable',
  'react-hot-loader',
  'react-immutable-proptypes',
  'redux-immutable',
  'react-router',
  'react-router-redux',
  'react-helmet',
  'axios',
  'redbox-react',
  'chalk',
];

// Setting the plugins for development/prodcution
const getPlugins = () => {
  const plugins = [];

  plugins.push(
    new webpack.LoaderOptionsPlugin({
      options: {
        // Javascript lint
        eslint: {
          failOnError: true,  // Disable js lint error terminating here
        },
        context: '/',         // Required for the sourceMap of css/sass loader
        debug: isDev,
        minimize: !isDev,
      },
    }),
    // Style lint
    new StyleLintPlugin({
      syntax: 'scss',
      failOnError: true,      // Disable style lint error terminating here
    }),
    // Setup global variables for app
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
      __CLIENT__: true,
      __SERVER__: false,
      __DEV__: isDev,
    }),
    new webpack.NoErrorsPlugin(),
    webpackIsomorphicToolsPlugin
  );

  if (isDev) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.IgnorePlugin(/webpack-stats\.json$/)
    );
  } else {
    plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: '[name].[chunkhash].js',
        minChunks: Infinity,
      }),
      new ExtractTextPlugin({ filename: '[name].[contenthash].css', allChunks: true }),
      new webpack.optimize.UglifyJsPlugin({
        compress: { screw_ie8: true, warnings: false },
        output: { comments: false },
        sourceMap: false,
      })
    );
  }

  return plugins;
};

// Setting  the entry for development/prodcution
const getEntry = () => {
  let entry;

  if (isDev) {
    entry = [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?reload=true',
      './src/client.js',
    ];
  } else {
    entry = {
      main: './src/client.js',
      // Register vendors here
      vendor,
    };
  }

  return entry;
};

// Setting webpack config
module.exports = {
  target: 'web',
  cache: isDev,
  devtool: isDev ? 'cheap-module-eval-source-map' : 'hidden-source-map',
  context: path.join(process.cwd()),
  entry: getEntry(),
  output: {
    path: path.join(process.cwd(), './public/assets'),
    publicPath: '/assets/',
    // Don't use hashes in dev mode for better performance
    filename: isDev ? '[name].js' : '[name].[chunkhash].js',
    chunkFilename: isDev ? '[name].chunk.js' : '[name].[chunkhash].chunk.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: isDev,
          babelrc: false,
          presets: [['es2015', { modules: false }], 'react', 'stage-0'],
          plugins: ['transform-runtime', 'react-hot-loader/babel'],
        },
      },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.css$/,
        loader: isDev ?
          `style-loader!css-loader?localIdentName=[name]__[local].[hash:base64:5]&${CSSModules ? 'modules' : ''}&sourceMap&-minimize&importLoaders=1!postcss-loader`
          : ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: `css-loader?${CSSModules ? 'modules' : ''}&sourceMap&importLoaders=1!postcss-loader` }),
      },
      {
        test: /\.scss$/,
        loader: isDev ?
          `style-loader!css-loader?localIdentName=[name]__[local].[hash:base64:5]&${CSSModules ? 'modules' : ''}&sourceMap&-minimize&importLoaders=2!postcss-loader!sass-loader?outputStyle=expanded&sourceMap`
          : ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: `css-loader?${CSSModules ? 'modules' : ''}&sourceMap&importLoaders=2!postcss-loader!sass-loader?outputStyle=expanded&sourceMap&sourceMapContents` }),
      },
      { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url-loader?limit=10000' },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        // Any image below or equal to 10K will be converted to inline base64 instead
        loaders: [
          'url-loader?limit=10240',
          'image-webpack-loader?bypassOnDebug',  // Using for image optimization
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      'src',
      'node_modules',
    ],
  },
  plugins: getPlugins(),
};
