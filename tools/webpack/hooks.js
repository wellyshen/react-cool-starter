/* Require hooks for server-side */

const sass = require("node-sass");
const path = require("path");
const postcssConfig = require("../../postcss.config");

const nodeEnv = process.env.NODE_ENV || "development";
const isDev = nodeEnv === "development";

module.exports = () => {
  // CSS modules
  require("@dr.pogodin/css-modules-require-hook")({
    // Must use the same pattern with your webpack config
    generateScopedName: isDev ? "[name]__[local]" : "[contenthash:base64:5]",
    extensions: [".css", ".scss", ".sass"],
    prepend: [...postcssConfig.plugins],
    preprocessCss: (data, filename) =>
      sass.renderSync({ data, file: filename }).css,
    rootDir: path.resolve(process.cwd(), "src"),
    devMode: __DEV__,
  });

  // Images
  require("asset-require-hook")({
    // Must use the same option with webpack's configuration
    extensions: ["gif", "jpg", "jpeg", "png", "webp", "svg"],
    publicPath: "/assets/",
    limit: 10 * 1024,
    name: "[name].[contenthash:8].[ext]",
  });

  // Fonts
  require("asset-require-hook")({
    // Must use the same option with webpack's configuration
    extensions: ["woff", "woff2", "ttf", "otf", "eot"],
    publicPath: "/assets/",
  });
};
