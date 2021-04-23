/* Require hooks for server-side */

const sass = require("node-sass");

const postcssConfig = require("../../postcss.config");

module.exports = () => {
  // CSS modules
  require("@dr.pogodin/css-modules-require-hook")({
    // Must use the same pattern with your webpack config
    generateScopedName: __DEV__ ? "[path][name]__[local]" : "[hash:base64]",
    extensions: [".css", ".scss", ".sass"],
    prepend: [...postcssConfig.plugins],
    preprocessCss: (data, filename) =>
      sass.renderSync({ data, file: filename }).css,
    devMode: __DEV__,
  });

  // Images
  require("asset-require-hook")({
    // Must use the same option with webpack's configuration
    extensions: ["gif", "jpg", "jpeg", "png", "webp", "svg"],
    publicPath: "/assets/",
    limit: 8 * 1024, // Sync with wepack's asset modules
  });

  // Fonts
  require("asset-require-hook")({
    // Must use the same option with webpack's configuration
    extensions: ["woff", "woff2", "ttf", "otf", "eot"],
    publicPath: "/assets/",
  });
};
