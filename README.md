<img src="https://raw.githubusercontent.com/WellyShen/react-cool-starter/master/src/assets/banner.png" alt="React Cool Starter" />

A simple but feature rich starter boilerplate for you to build an [universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9#.mtjf14xy5) web application with the best development experience and best practices.

Built on the top of [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/), [React](https://facebook.github.io/react/), [Redux](https://github.com/reactjs/redux) and [React Router](https://github.com/reactjs/react-router). Includes all the hot stuff and modern web development tools such as Webpack 2, [Babel](https://babeljs.io/), [Immutable.js](https://facebook.github.io/immutable-js/), React Hot Loader 3 and [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension). See section [**“Features”**](#features) for more other awesome features you can expect.

I will improve this starter boilerplate continuously and keep all of the technologies on trend. Welcome to join me if you want. Hope you guys love it :)

[![build status](https://travis-ci.org/WellyShen/react-cool-starter.svg?branch=master)](https://travis-ci.org/WellyShen/react-cool-starter?branch=master)
[![dependencies Status](https://david-dm.org/WellyShen/react-cool-starter.svg)](https://david-dm.org/WellyShen/react-cool-starter)
[![devDependencies Status](https://david-dm.org/WellyShen/react-cool-starter.svg)](https://david-dm.org/WellyShen/react-cool-starter?type=dev)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/WellyShen/react-cool-starter/master/LICENSE)


## Features

Coming soon...


## Quick Start

**1. You can start by clone this repository on your local machine by running:**

```sh
git clone https://github.com/wellyshen/react-cool-starter.git
cd react-cool-starter
``` 

**2. Install all of the npm packages:**

```sh
npm install
```

**3. Start to run it:**

```sh
npm run start:production  # Building bundle and running production server
```

Now the app should be running at [http://localhost:8080/](http://localhost:8080/)


## NPM Scripts

I use [Better NPM Run](https://github.com/benoror/better-npm-run) to manage the scripts in a better way, which also provides the compatibility of corss-platform. Listing all the scripts as following:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Run your app on the development server at `localhost:3000`. HMR will be enabled.|
|`start:production`|Compiles the app to `./public/dist/` and run it on the production server at `localhost:8080`.|
|`start:prod`|Run your app on the production server only at `localhost:8080`.|
|`clean`|Remove the `dist` folder from `./public/` to clean the compiled stuff.|
|`build`|Clean the compiled stuff and compile your app to `./public/dist`.|
|`eslint`|Lint all `.js` files.|
|`stylelint`|Lint all `.scss` files.|
|`lint`|Lint all `.js` and `.scss` files.|

Note: If you encounter the error of `webpack-isomorphic-tools (waiting for the first webpack build to finish)`, try to run `npm run build` to fix it.


## App Structure

Coming soon...


## Overview

### Stateless Functional Components

[React 0.14](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html) introduced a simpler way to define components called [stateless functional components](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions). These components are written in plain JavaScript functions. In this starter boilerplate we use it wherever possible.


## To Do

There're some features I'd like to include into this starter boilerplate in the near future. If you have any great ideas or suggestion, feel free to fork this repository and share it to me.

* [ ] Unit Test
* [ ] Dynamic Routing
* [ ] Internationalization
