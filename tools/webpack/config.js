// Disable CSSModules here
const CSSModules = true;

// Disable js lint error terminating here
const eslint = true;
// Disable style lint error terminating here
const stylelint = true;

// Register vendors here
const vendor = [
  'react',
  'react-dom',
  'redux',
  'react-redux',
  'redux-thunk',
  'react-hot-loader',
  'react-router-dom',
  'history',
  'react-router-redux',
  'react-helmet',
  'axios',
  'redbox-react',
  'chalk',
  'lodash',
  'babel-polyfill', // Support promise for IE browser (for prod)
];

module.exports = {
  CSSModules,
  eslint,
  stylelint,
  vendor,
};
