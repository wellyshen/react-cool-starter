module.exports = {
  plugins: ["stylelint-scss"],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss",
    "stylelint-config-prettier",
  ],
  ignoreFiles: ["public/assets/**/*.css", "coverage/**/*.css"],
};
