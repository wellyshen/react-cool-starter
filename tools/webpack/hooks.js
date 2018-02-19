/* @flow */

/* Require hooks for server-side */

const sass = require('node-sass');
const path = require('path');

module.exports = () => {
  // CSS modules
  require('css-modules-require-hook')({
    // Must use the same pattern with your webpack config
    generateScopedName: '[name]__[local]__[hash:base64:5]',
    extensions: ['.css', '.scss', '.sass'],
    prepend: [require('autoprefixer')],
    preprocessCss: (data, filename) =>
      sass.renderSync({
        data,
        file: filename
      }).css,
    // Must be the same with the "context" of webpack LoaderOptionsPlugin
    // see here: https://github.com/css-modules/css-modules-require-hook/issues/86
    rootDir: path.resolve(process.cwd(), 'src'),
    devMode: __DEV__
  });

  // Images
  require('asset-require-hook')({
    extensions: ['gif', 'jpg', 'jpeg', 'png', 'webp'],
    limit: 10240
  });

  // Fonts
  require('asset-require-hook')({
    extensions: ['woff', 'woff2', 'ttf', 'eot', 'svg'],
    limit: 10240
  });
};
