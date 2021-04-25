import path from "path";
import webpack, { Configuration } from "webpack";
import nodeExternals from "webpack-node-externals";
import merge from "webpack-merge";

import baseConfig, { isDev } from "./base.config";

const getPlugins = () =>
  isDev
    ? [
        // Adding source map support to node.js (for stack traces)
        new webpack.BannerPlugin({
          banner: 'require("source-map-support").install();',
          raw: true,
        }),
      ]
    : [];

const config: Configuration = {
  target: "node",
  devtool: isDev ? "inline-source-map" : "source-map",
  entry: "./src/server",
  output: {
    filename: "index.js",
    chunkFilename: "[id].js",
    path: path.resolve(process.cwd(), "public/server"),
    libraryTarget: "commonjs2",
  },
  node: { __dirname: true, __filename: true },
  externals: [
    "@loadable/component",
    nodeExternals({
      // Load non-javascript files with extensions, presumably via loaders
      allowlist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
    }),
  ],
  plugins: getPlugins(),
};

export default merge(baseConfig(false), config);
