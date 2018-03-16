import path from 'path';
import webpack from 'webpack';
import AssetsPlugin from 'assets-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
// TODO: Waiting for it support webpack 4
// import StyleLintPlugin from 'stylelint-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv === 'development';

// Disable CSSModules here
const CSSModules = true;
// Enable build process terminated while there's an eslint error
const eslint = false;
// Enable build process terminated while there's a stylelint error
// TODO: Waiting for it support webpack 4
// const stylelint = false;
// Register vendors here
const vendor = [
  // Allows you to use the full set of ES6 features on client-side
  // place it before anything else
  '@babel/polyfill',
  'react',
  'react-dom',
  'redux',
  'react-redux',
  'redux-thunk',
  'react-router-dom',
  'react-router-config',
  'history',
  'react-router-redux',
  'react-helmet',
  'loadable-components',
  'axios'
];

// Setup the plugins for development/prodcution
const getPlugins = () => {
  // Common
  const plugins = [
    new AssetsPlugin({ path: path.resolve(process.cwd(), 'public') }),
    new ExtractTextPlugin({
      // Don't use hash in development, we need the persistent for "renderHtml.js"
      filename: isDev ? '[name].css' : '[name].[contenthash:8].css',
      allChunks: true,
      ignoreOrder: CSSModules
    }),
    new webpack.LoaderOptionsPlugin({
      // Must set the context for css-loader or style will mis-match in SSR
      rootContext: path.resolve(process.cwd(), 'src'),
      options: {
        debug: isDev,
        minimize: !isDev
      }
    }),
    // Style lint
    // TODO: Waiting for it support webpack 4
    // new StyleLintPlugin({ failOnError: stylelint }),
    // Setup enviorment variables for client
    new webpack.EnvironmentPlugin({ NODE_ENV: JSON.stringify(nodeEnv) }),
    // Setup global variables for client
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEV__: isDev
    }),
    new FriendlyErrorsWebpackPlugin()
  ];

  if (isDev) {
    // Development
    plugins.push(new webpack.HotModuleReplacementPlugin());
  } else {
    plugins.push(
      // Production
      new webpack.HashedModuleIdsPlugin(),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.jsx?$|\.css$|\.(scss|sass)$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      }),
      // Visualize all of the webpack bundles
      // Check "https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin"
      // for more configurations
      new BundleAnalyzerPlugin({
        analyzerMode: process.env.NODE_ENV === 'analyze' ? 'server' : 'disabled'
      })
    );
  }

  return plugins;
};

// Setup the entry for development/prodcution
const getEntry = () => {
  // Development
  let entry = [
    // Allows you to use the full set of ES6 features on client-side (place it before anything else)
    '@babel/polyfill',
    'webpack-hot-middleware/client?reload=true',
    './src/client.js'
  ];

  // Prodcution
  if (!isDev) {
    entry = {
      main: './src/client.js',
      // Register vendors here
      vendor
    };
  }

  return entry;
};

// Webpack configuration
module.exports = {
  mode: isDev ? 'development' : 'production',
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
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint',
        options: { failOnError: eslint }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        options: { cacheDirectory: isDev }
      },
      {
        test: /\.css$/,
        loader: ['extracted-loader'].concat(
          ExtractTextPlugin.extract({
            fallback: 'style',
            use: [
              {
                loader: 'css',
                options: {
                  importLoaders: 1,
                  sourceMap: true,
                  modules: CSSModules,
                  localIdentName: '[name]__[local]__[hash:base64:5]',
                  minimize: !isDev
                }
              },
              { loader: 'postcss', options: { sourceMap: true } }
            ]
          })
        )
      },
      {
        test: /\.(scss|sass)$/,
        loader: ['extracted-loader'].concat(
          ExtractTextPlugin.extract({
            fallback: 'style',
            use: [
              {
                loader: 'css',
                options: {
                  importLoaders: 2,
                  sourceMap: true,
                  modules: CSSModules,
                  localIdentName: '[name]__[local]__[hash:base64:5]',
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
        )
      },
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        loader: 'url',
        options: { limit: 10240 }
      },
      {
        test: /\.(gif|png|jpe?g|webp)$/,
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
  /* Advanced configuration */
  resolveLoader: {
    // Use loaders without the -loader suffix
    moduleExtensions: ['-loader']
  },
  resolve: {
    modules: ['src', 'node_modules'],
    descriptionFiles: ['package.json'],
    extensions: ['.js', '.jsx', '.json']
  },
  cache: isDev,
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
