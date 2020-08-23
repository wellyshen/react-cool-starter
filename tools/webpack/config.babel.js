import path from "path";
import webpack from "webpack";
import ManifestPlugin from "webpack-manifest-plugin";
import TerserJSPlugin from "terser-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CompressionPlugin from "compression-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import LoadablePlugin from "@loadable/webpack-plugin";
import PnpWebpackPlugin from "pnp-webpack-plugin";

const nodeEnv = process.env.NODE_ENV || "development";
const isDev = nodeEnv === "development";

// Setup the plugins for development/production
const getPlugins = () => {
  // Common
  const plugins = [
    new ManifestPlugin({
      fileName: path.resolve(process.cwd(), "public/webpack-assets.json"),
      filter: (file) => file.isInitial,
    }),
    new LoadablePlugin({
      writeToDisk: true,
      filename: "../loadable-stats.json",
    }),
    new MiniCssExtractPlugin({
      // Don't use hash in development, we need the persistent for "renderHtml.ts"
      filename: isDev ? "[name].css" : "[name].[contenthash:8].css",
      chunkFilename: isDev ? "[id].css" : "[id].[contenthash:8].css",
    }),
    // Setup environment variables for client
    new webpack.EnvironmentPlugin({ NODE_ENV: JSON.stringify(nodeEnv) }),
    // Setup global variables for client
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEV__: isDev,
    }),
    new webpack.ProgressPlugin(),
    PnpWebpackPlugin,
  ];

  if (isDev) {
    // Development
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      // Runs typescript type checker on a separate process
      new ForkTsCheckerWebpackPlugin()
    );
  } else {
    plugins.push(
      // Production
      new webpack.HashedModuleIdsPlugin(),
      new CompressionPlugin({
        test: /\.(js|css|html)$/,
        threshold: 10240,
      }),
      // Visualize all of the webpack bundles
      // Check "https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin"
      // for more configurations
      new BundleAnalyzerPlugin({
        analyzerMode:
          process.env.NODE_ENV === "analyze" ? "server" : "disabled",
      })
    );
  }

  return plugins;
};

// Setup the entry for development/production
const getEntry = () => {
  // Development
  let entry = ["webpack-hot-middleware/client?reload=true", "./src/client"];

  // production
  if (!isDev) entry = ["./src/client"];

  return entry;
};

// Loaders for CSS and SASS
const getStyleLoaders = (sass = false) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        // If hmr does not work, this is a forceful method
        reloadAll: true,
      },
    },
    {
      loader: "css",
      options: {
        importLoaders: sass ? 2 : 1,
        modules: {
          auto: true,
          localIdentName: isDev ? "[name]__[local]" : "[hash:base64:5]",
          localIdentContext: path.resolve(process.cwd(), "src"),
        },
      },
    },
    { loader: "postcss", options: { sourceMap: isDev } },
  ];
  if (sass) loaders.push({ loader: "sass", options: { sourceMap: isDev } });

  return loaders;
};

// Webpack configuration
module.exports = {
  mode: isDev ? "development" : "production",
  devtool: isDev ? "eval-source-map" : false,
  context: path.resolve(process.cwd()),
  entry: getEntry(),
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      // Auto split vendor modules in production only
      chunks: isDev ? "async" : "all",
    },
  },
  output: {
    path: path.resolve(process.cwd(), "public/assets"),
    publicPath: "/assets/",
    // Don't use chunkhash in development it will increase compilation time
    filename: isDev ? "[name].js" : "[name].[chunkhash:8].js",
    chunkFilename: isDev ? "[id].js" : "[id].[chunkhash:8].js",
    pathinfo: isDev,
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        loader: "babel",
        options: { cacheDirectory: isDev },
      },
      // All output '.js' files will have any sourcemaps re-processed by source-map-loader.
      // So you can debug your output code as if it was Typescript.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map",
      },
      {
        test: /\.css$/,
        use: getStyleLoaders(),
      },
      {
        test: /\.(scss|sass)$/,
        use: getStyleLoaders(true),
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/,
        loader: "file",
      },
      {
        test: /\.(gif|png|jpe?g|webp|svg)$/,
        use: [
          {
            // Any image below or equal to 10K will be converted to inline base64 instead
            loader: "url",
            options: { limit: 10 * 1024, name: "[name].[hash:8].[ext]" },
          },
          {
            loader: "image-webpack",
            // For each optimizer you wish to configure
            // Plz check https://github.com/tcoopman/image-webpack-loader#usage
            options: { disable: true },
          },
        ],
      },
    ],
  },
  plugins: getPlugins(),
  /* Advanced configuration */
  resolveLoader: {
    // Use loaders without the -loader suffix
    moduleExtensions: ["-loader"],
    plugins: [PnpWebpackPlugin.moduleLoader(module)],
  },
  resolve: {
    modules: ["src", "node_modules"],
    descriptionFiles: ["package.json"],
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: { "react-dom": "@hot-loader/react-dom" },
  },
  cache: isDev,
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  // https://webpack.js.org/configuration/node/
  // https://github.com/webpack/node-libs-browser/tree/master/mock
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty",
  },
};
