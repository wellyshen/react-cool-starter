'use strict'; // eslint-disable-line

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { CSSModules, eslint, stylelint, vendor } = require('./config');

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv !== 'production';

const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./WIT.config')).development(isDev);

// Setting the plugins for development/prodcution
const getPlugins = () => {
  // Common
  const plugins = [
    new ExtractTextPlugin({
      filename: '[name].[contenthash:8].css',
      allChunks: true,
      disable: isDev,   // Disable css extracting on development
      ignoreOrder: CSSModules,
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        // Javascript lint
        eslint: { failOnError: eslint },
        context: '/',   // Required for the sourceMap of css/sass loader
        debug: isDev,
        minimize: !isDev,
      },
    }),
    // Style lint
    new StyleLintPlugin({ syntax: 'scss', failOnError: stylelint }),
    // Setup enviorment variables for client
    new webpack.EnvironmentPlugin({ NODE_ENV: JSON.stringify(nodeEnv) }),
    // Setup global variables for client
    new webpack.DefinePlugin({
      __CLIENT__: JSON.stringify(true),
      __SERVER__: JSON.stringify(false),
      __DEV__: JSON.stringify(isDev),
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    webpackIsomorphicToolsPlugin,
  ];

  if (isDev) {  // For development
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      // Prints more readable module names in the browser console on HMR updates
      new webpack.NamedModulesPlugin(),
      new webpack.IgnorePlugin(/webpack-stats\.json$/)  // eslint-disable-line comma-dangle
    );
  } else {
    plugins.push( // For production
      new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', minChunks: Infinity }),
      new webpack.HashedModuleIdsPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        beautify: false,
        mangle: { screw_ie8: true },
        compress: {
          screw_ie8: true,  // React doesn't support IE8
          warnings: false,
          unused: true,
          dead_code: true,
        },
        output: { screw_ie8: true, comments: false },
      })  // eslint-disable-line comma-dangle
    );
  }

  return plugins;
};

// Setting the entry for development/prodcution
const getEntry = () => {
  // For development
  let entry = [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    './src/client.js',
  ];

  // For prodcution
  if (!isDev) {
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
  name: 'client',
  target: 'web',
  cache: isDev,
  devtool: isDev ? 'cheap-module-eval-source-map' : 'hidden-source-map',
  context: path.join(process.cwd()),
  entry: getEntry(),
  output: {
    path: path.join(process.cwd(), './build/public/assets'),
    publicPath: '/assets/',
    // Don't use chunkhash in development it will increase compilation time
    filename: isDev ? '[name].js' : '[name].[chunkhash:8].js',
    chunkFilename: isDev ? '[name].chunk.js' : '[name].[chunkhash:8].chunk.js',
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
          cacheDirectory: isDev,
          babelrc: false,
          presets: [['es2015', { modules: false }], 'react', 'stage-0'],
          plugins: ['transform-runtime', 'react-hot-loader/babel'],
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true,
                modules: CSSModules,
                // "context" and "localIdentName" need to be the same with server config,
                // or the style will flick when page first loaded
                context: path.join(process.cwd(), './src'),
                localIdentName: isDev ? '[name]__[local].[hash:base64:5]' : '[hash:base64:5]',
                minimize: !isDev,
              },
            },
            'postcss-loader',
          ],
        }),
      },
      {
        test: /\.(scss|sass)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: true,
                modules: CSSModules,
                context: path.join(process.cwd(), './src'),
                localIdentName: isDev ? '[name]__[local].[hash:base64:5]' : '[hash:base64:5]',
                minimize: !isDev,
              },
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'expanded',
                sourceMap: true,
                sourceMapContents: !isDev,
              },
            },
          ],
        }),
      },
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        loader: 'url-loader',
        options: { limit: 10000 },
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        // Any image below or equal to 10K will be converted to inline base64 instead
        use: [
          {
            loader: 'url-loader',
            options: { limit: 10240 },
          },
          // Using for image optimization
          {
            loader: 'image-webpack-loader',
            options: { bypassOnDebug: true },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['src', 'node_modules'],
  },
  plugins: getPlugins(),
};
