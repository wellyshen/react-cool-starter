import path from "path";
import webpack from "webpack";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";
import TerserPlugin from "terser-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import CompressionPlugin from "compression-webpack-plugin";
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import LoadablePlugin from "@loadable/webpack-plugin";

const isDev = process.env.NODE_ENV !== "production";

// Loaders for CSS and SASS
const getStyleLoaders = (sass) =>
  [
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        importLoaders: sass ? 2 : 1,
        modules: {
          auto: true,
          localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64]",
        },
      },
    },
    { loader: "postcss-loader", options: { sourceMap: isDev } },
    sass && { loader: "sass-loader", options: { sourceMap: isDev } },
  ].filter(Boolean);

// Webpack configuration
module.exports = {
  mode: isDev ? "development" : "production",
  devtool: isDev && "eval-source-map",
  stats: "minimal",
  context: path.resolve(process.cwd()),
  entry: [
    isDev && "webpack-hot-middleware/client?reload=true",
    "./src/client",
  ].filter(Boolean),
  optimization: { minimizer: [new TerserPlugin(), new CssMinimizerPlugin()] },
  output: {
    path: path.resolve(process.cwd(), "public/assets"),
    publicPath: "/assets/",
    filename: isDev ? "[name].js" : "[name].[contenthash].js",
    chunkFilename: isDev ? "[id].js" : "[id].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { cacheDirectory: isDev },
      },
      // All output '.js' files will have any sourcemaps re-processed by source-map-loader.
      // So you can debug your output code as if it was TypeScript.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
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
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset",
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new WebpackManifestPlugin({
      fileName: path.resolve(process.cwd(), "public/webpack-assets.json"),
      filter: (file) => file.isInitial,
    }),
    new LoadablePlugin({
      writeToDisk: true,
      filename: "../loadable-stats.json",
    }),
    new MiniCssExtractPlugin({
      // Don't use hash in development, we need the persistent for "renderHtml.ts"
      filename: isDev ? "[name].css" : "[name].[contenthash].css",
      chunkFilename: isDev ? "[id].css" : "[id].[contenthash].css",
    }),
    // Setup global variables for client
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEV__: isDev,
    }),
    new webpack.ProgressPlugin(),
    isDev && new webpack.HotModuleReplacementPlugin(),
    isDev &&
      new ReactRefreshWebpackPlugin({ overlay: { sockIntegration: "whm" } }),
    // Runs typescript type checker on a separate process
    isDev &&
      new ForkTsCheckerWebpackPlugin({
        // (Required) Same as eslint command
        eslint: { files: "./src/**/*.{js,jsx,ts,tsx}" },
      }),
    // Prepare compressed versions of assets to serve them with Content-Encoding
    !isDev && new CompressionPlugin(),
    !isDev &&
      new ImageMinimizerPlugin({
        // Lossless optimization with default option, feel free to experiment with options for better result for you
        // See https://github.com/webpack-contrib/image-minimizer-webpack-plugin#getting-started
        minimizerOptions: {
          plugins: [["gifsicle"], ["jpegtran"], ["optipng"], ["svgo"]],
        },
      }),
    // Visualize all of the webpack bundles
    // Check "https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin" for more configurations
    !isDev &&
      new BundleAnalyzerPlugin({
        analyzerMode:
          process.env.NODE_ENV === "analyze" ? "server" : "disabled",
      }),
  ].filter(Boolean),
  resolve: {
    modules: ["src", "node_modules"],
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
};
