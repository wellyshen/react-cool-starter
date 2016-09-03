module.exports = {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel?cacheDirectory' },
      { test: /\.(jpe?g|png|gif|svg|ico)$/, loader: 'url?limit=10240' },
    ],
  },
};
