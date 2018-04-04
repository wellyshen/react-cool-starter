/* Set your postcss-loader configuration here */

const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    // Add "-ms-" prefixes for Grid Layout
    autoprefixer({ grid: true })
  ]
};
