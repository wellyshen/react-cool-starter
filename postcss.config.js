/* Set your postcss-loader configuration here */

const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    // add "-ms-" prefixes for Grid Layout
    autoprefixer({ grid: true })
  ]
};
