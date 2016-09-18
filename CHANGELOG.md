# Changelog


### 1.2.0

> 2016-09-18

* Using [helmet](https://github.com/helmetjs/helmet) helps secure Express server with various HTTP headers.
* Using [compression](https://github.com/expressjs/compression) to increase the speed of Express server response.


### 1.1.2

> 2016-09-17

* Refine NPM scripts.


### 1.1.1

> 2016-09-15

* Fix the bug of static functions from `./src/contaners/Home.js` and `./src/contaners/UserInfo.js`.
* Fix the error of react-router while hot reloading triggered.


### 1.1.0

> 2016-09-12

* Adding testing code coverage. 🎉
* Installing [karma-coverage](https://github.com/karma-runner/karma-coverage) and [babel-plugin-istanbul](https://github.com/istanbuljs/babel-plugin-istanbul) packages.
* Configuring `./tools/testing/karma.conf.js` and `.babelrc` to support code coverage.
* Configuring npm scripts to support code coverage.
* Configuring [Travis CI](https://travis-ci.org/) to run `coveralls` script.
* Adding [Coverall.io](https://coveralls.io/) badge.
* Adding `.coverage` folder to .gitignore.
