'use strict'; // eslint-disable-line

import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import MinifyPlugin from 'babel-minify-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import WebpackIsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin';

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv === 'development';
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(
  require('./WIT.config')
).development(isDev);

// Disable CSSModules here
const CSSModules = true;
// Enable build process terminated while there's an eslint error
const eslint = false;
// Enable build process terminated while there's an stylelint error
const stylelint = false;
// Register vendors here
const vendor = [
  // Allows you to use the full set of ES6 features on client-side (place it before anything else)
  'babel-polyfill',
  'react',
  'react-dom',
  'redux',
  'react-redux',
  'redux-thunk',
  'react-router-dom',
  'history',
  'react-router-redux',
  'react-helmet',
  'loadable-components',
  'axios'
];

// Setting the plugins for development/prodcution
const getPlugins = () => {
  // Common
  const plugins = [
    new ExtractTextPlugin({
      filename: '[name].[contenthash:8].css',
      allChunks: true,
      disable: isDev, // Disable css extracting on development
      ignoreOrder: CSSModules
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        // Javascript lint
        eslint: { failOnError: eslint },
        debug: isDev,
        minimize: !isDev
      }
    }),
    // Style lint
    new StyleLintPlugin({ failOnError: stylelint }),
    // Setup enviorment variables for client
    new webpack.EnvironmentPlugin({ NODE_ENV: JSON.stringify(nodeEnv) }),
    // Setup global variables for client
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEV__: isDev
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    webpackIsomorphicToolsPlugin
  ];

  if (isDev) {
    // Development
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      // Prints more readable module names in the browser console on HMR updates
      new webpack.NamedModulesPlugin(),
      new webpack.IgnorePlugin(/webpack-stats\.json$/)
    );
  } else {
    plugins.push(
      // Production
      new MinifyPlugin({}, { test: /\.jsx?$/, comments: false }),
      new webpack.HashedModuleIdsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.jsx?$|\.css$|\.(scss|sass)$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      }),
      // Visualizing all of the webpack bundles
      // Check "https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin"
      // for more configurations
      new BundleAnalyzerPlugin({
        analyzerMode: process.env.NODE_ENV === 'stats' ? 'server' : 'disabled'
      })
    );
  }

  return plugins;
};

// Setting the entry for development/prodcution
const getEntry = () => {
  // For development
  let entry = [
    // Allows you to use the full set of ES6 features on client-side (place it before anything else)
    'babel-polyfill',
    'webpack-hot-middleware/client?reload=true',
    './src/client.js'
  ];

  // For prodcution
  if (!isDev) {
    entry = {
      main: './src/client.js',
      // Register vendors here
      vendor
    };
  }

  return entry;
};

// Setting webpack config
module.exports = {
  name: 'client',
  target: 'web',
  cache: isDev,
  devtool: isDev ? 'cheap-module-source-map' : 'hidden-source-map',
  context: path.resolve(process.cwd()),
  entry: getEntry(),
  output: {
    path: path.resolve(process.cwd(), 'public/assets'),
    publicPath: '/assets/',
    // Don't use chunkhash in development it will increase compilation time
    filename: isDev ? '[name].js' : '[name].[chunkhash:8].js',
    chunkFilename: isDev ? '[name].chunk.js' : '[name].[chunkhash:8].chunk.js',
    pathinfo: isDev
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        options: {
          cacheDirectory: isDev,
          babelrc: false,
          presets: [
            ['env', { modules: false, useBuiltIns: true }],
            'react',
            'stage-0',
            'flow'
          ],
          plugins: [
            'react-hot-loader/babel',
            'loadable-components/babel',
            'lodash'
          ],
          env: { production: { plugins: ['transform-remove-console'] } }
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style',
          use: [
            {
              loader: 'css',
              options: {
                importLoaders: 1,
                sourceMap: true,
                modules: CSSModules,
                context: path.resolve(process.cwd(), 'src'),
                localIdentName: '[name]__[local]--[hash:base64:5]',
                minimize: !isDev
              }
            },
            { loader: 'postcss', options: { sourceMap: true } }
          ]
        })
      },
      {
        test: /\.(scss|sass)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style',
          use: [
            {
              loader: 'css',
              options: {
                importLoaders: 2,
                sourceMap: true,
                modules: CSSModules,
                context: path.resolve(process.cwd(), 'src'),
                localIdentName: '[name]__[local]--[hash:base64:5]',
                minimize: !isDev
              }
            },
            { loader: 'postcss', options: { sourceMap: true } },
            {
              loader: 'sass',
              options: {
                outputStyle: 'expanded',
                sourceMap: true,
                sourceMapContents: !isDev
              }
            }
          ]
        })
      },
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        loader: 'url',
        options: { limit: 10000 }
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        // Any image below or equal to 10K will be converted to inline base64 instead
        use: [
          {
            loader: 'url',
            options: { limit: 10240 }
          },
          // Using for image optimization
          {
            loader: 'image-webpack',
            options: { bypassOnDebug: true }
          }
        ]
      }
    ]
  },
  plugins: getPlugins(),
  resolveLoader: {
    // Using loaders without the -loader suffix
    moduleExtensions: ['-loader']
  },
  resolve: {
    modules: ['src', 'node_modules'],
    descriptionFiles: ['package.json'],
    extensions: ['.js', '.jsx', '.json']
  },
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  // https://webpack.github.io/docs/configuration.html#node
  // https://github.com/webpack/node-libs-browser/tree/master/mock
  node: {
    fs: 'empty',
    vm: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
