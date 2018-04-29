/* Set your postcss-loader configuration here */

module.exports = {
  plugins: [
    // Add "-ms-" prefixes for Grid Layout
    require('autoprefixer')({ grid: true })
  ]
};
