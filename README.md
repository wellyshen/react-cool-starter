# <div align="center"><img src="https://cloud.githubusercontent.com/assets/21308003/18472722/9fae90f6-79eb-11e6-8e42-ebca5e9b5cc9.png" height="250px" alt="Banner" /></div>

A simple but feature rich starter boilerplate with [universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9#.mtjf14xy5), [React Router](https://github.com/reactjs/react-router) dynamic routing, async [Redux](https://github.com/reactjs/redux) reducers, async data fetching and code-splitting.

The project built on the top of [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/), [React](https://facebook.github.io/react/), [Redux](https://github.com/reactjs/redux) and [React Router](https://github.com/reactjs/react-router). Includes all the hot stuff and modern web development tools such as [Webpack 2](https://webpack.js.org/), [Babel](https://babeljs.io/), [PostCSS](https://github.com/postcss/postcss-loader), [React Hot Loader 3](https://github.com/gaearon/react-hot-loader) and [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension). See section [**“Features”**](#features) for more other awesome features you can expect.

I will improve the starter boilerplate continuously and keep all of the technologies on trend. Welcome to join me if you want. Hope you guys love it 😉

> 👻 I'm curious what this starter boilerplate helps you guys do anything? Please feel free to [tell me](https://github.com/wellyshen/react-cool-starter/issues/6), let's make some sharing between us.

[![Build Status](https://travis-ci.org/wellyshen/react-cool-starter.svg?branch=master)](https://travis-ci.org/wellyshen/react-cool-starter)
[![dependencies Status](https://david-dm.org/wellyshen/react-cool-starter/status.svg)](https://david-dm.org/wellyshen/react-cool-starter)
[![devDependencies Status](https://david-dm.org/wellyshen/react-cool-starter/dev-status.svg)](https://david-dm.org/wellyshen/react-cool-starter?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/wellyshen/react-cool-starter/badge.svg?branch=master)](https://coveralls.io/github/wellyshen/react-cool-starter?branch=master)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/wellyshen/react-cool-starter/master/LICENSE)


## Features

Really cool starter boilerplate with the most popular technologies:

* [Universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9#.aug1ngj77) rendering, dynamic routing, async redux reducers, async data fetching and code-splitting.
* [React](https://facebook.github.io/react/) as the view.
* [React Router](https://github.com/reactjs/react-router) as the router.
* [Redux](https://github.com/reactjs/redux)'s futuristic [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html) implementation.
* [Express](https://expressjs.com/) server.
* [Webpack 2](https://webpack.js.org/) for bundling and [**"Tree-Shaking"**](http://www.2ality.com/2015/12/webpack-tree-shaking.html) support.
* [Babel](https://babeljs.io/) for ES6 and ES7 transpiling.
* [React Hot Loader 3](https://github.com/gaearon/react-hot-loader) to tweak React components in real time.
* [nodemon](https://nodemon.io/) to monitor for any changes in your node.js application and automatically restart the server.
* [axios](https://github.com/mzabriskie/axios) for universal data fetching/rehydration on the client.
* [redux-thunk](https://github.com/gaearon/redux-thunk) as the middleware to deal with asynchronous action.
* [react-router-redux](https://github.com/reactjs/react-router-redux) to keep your router in sync with Redux state.
* [react-helmet](https://github.com/nfl/react-helmet) to manage title, meta, styles and scripts tags on both server and client.
* [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools) to allow require() work for statics both on client and server.
* [Webpack Dev Middleware](http://webpack.github.io/docs/webpack-dev-middleware.html) serves the files emitted from webpack over the Express server.
* [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware) allows you to add hot reloading into the Express server.
* [morgan](https://github.com/expressjs/morgan) the HTTP request logger for server side debugging.
* [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension) for next generation developer experience.
* [Flow](https://flowtype.org/) as the static type checker for javascript.
* [ESLint](http://eslint.org/) to maintain a consistent javascript code style (Airbnb's code style).
* [StyleLint](http://stylelint.io/) to maintain a consistent css/scss code style.
* CSS and SASS support with [PostCSS](https://github.com/postcss/postcss-loader) for advanced transformations (e.g. autoprefixer). [CSS Modules](https://github.com/css-Modules/css-Modules) enabled.
* Image (with [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) for optimizing) and Font support.
* Split vendor's libraries from client bundle.
* No other view engines, just javascript based HTML rendering template.
* Shared app config between development and production.
* 404 error page and redirect handling.
* [karma](https://karma-runner.github.io/1.0/index.html), [mocha](https://mochajs.org/), [enzyme](https://github.com/airbnb/enzyme), [chai](http://chaijs.com/) and [sinon](https://github.com/sinonjs/sinon) as the integrated solution for wrting unit tests.
* Testing code coverage support.
* [Yarn](https://yarnpkg.com/lang/en/) as the package manager.


## Requirements

* [node](https://nodejs.org/en/) >= 5.0
* [npm](https://www.npmjs.com/) >= 3.0


## Getting Started

**1. You can start by clone the repository on your local machine by running:**

```bash
git clone https://github.com/wellyshen/react-cool-starter.git
cd react-cool-starter
```

**2. Install all of the dependencies:**

```bash
yarn install
```

**3. Start to run it:**

```bash
yarn start:production    # Building bundle and running production server
```

Now the app should be running at [http://localhost:8080/](http://localhost:8080/)


## NPM Script Commands

I use [better-npm-run](https://github.com/benoror/better-npm-run) to manage the scripts in a better way, which also provides the compatibility of corss-platform. All of the scripts are listed as following:

`yarn <script>`|Description
------------------|-----------
`start`|Run your app on the development server at `localhost:3000`. HMR will be enabled.
`start:production`|Bundles the app to `./build` and run it on the production server at `localhost:8080`.
`start:prod`|Run your app on the production server only at `localhost:8080`.
`build`|Remove the previous client and server bundled stuff and bundle them to `./build`.
`build:client`|Remove the previous client bundled stuff and bundle it to `./build/public/assets`.
`build:client`|Remove the previous server bundled stuff and bundle it to `./build`.
`lint`|Lint all `.js` and `.scss` files.
`lint:js`|Lint all `.js` files.
`lint:style`|Lint all `.scss` files.
`flow`|Run type checking for `.js` files.
`test`|Run testing once.
`test:watch`|Run testing on every test file change.
`clean:all`|Remove the client/server bundled stuff and the coverage report.
`clean:client`|Remove the `./build/public/assets` folder to clean the client bundled stuff.
`clean:server`|Remove the server bundled stuff from the `./build` folder.
`clean:coverage`|Remove the `./coverage` folder to clean the code coverage report.


## App Structure

Here is the structure of the app, which serve as generally accepted guidelines and patterns for building scalable apps.

```
.
├── build                             # Webpack bundled files will be place into it
│   └── public                        # The Express server static path
│       └── favicon.ico               # Favicon is placed in the same path with the main HTML page       
├── src                               # App source code
│   ├── config                        # App configuration settings
│   │   ├── default.js                # Default settings
│   │   ├── index.js                  # Configuration entry point
│   │   └── prod.js                   # Production settings (overrides the default settings)
│   ├── components                    # Reusable components (including scss/testing files)
│   ├── containers                    # Container components (including assets/action/reducer/scss/testing files)
│   ├── utils                         # App-wide util (including HTML render view, helpers)
│   ├── redux                         # Redux related configuration scripts
│   │   ├── reducers.js               # The root reducer (registry and injection)
│   │   └── store.js                  # Configure and instrument Redux store   
│   ├── theme                         # App-wide style, vendor style, generally settings
│   ├── types                         # Flow types for actions, reducers and more
│   ├── client.js                     # App bootstrap and rendering (webpack entry)
│   ├── routes.js                     # Routes shared between client and server side
│   └── server.js                     # Express server (with webpack dev/hot middlewares)                  
├── tools                             # Project related configurations (testing/build etc.)
│   ├── flow                          # Flow definitions and module aliasing
│   ├── openBrowser                   # Utility for opening Google Chrome
│   ├── testing                       # Testing configuration settings
│   │   ├── karma.conf.js             # Karma configuration file
│   │   └── test-bunlder.js           # Karma pre-processor settings file
│   ├── webpack                       # Webpack configuration settings
│   │   ├── config.js                 # Configuration for CSSModules, vendor registering
│   │   ├── webpack.client.babel.js   # Webpack configuration for client
│   │   ├── webpack.server.babel.js   # Webpack configuration for server
│   │   ├── config.test.babel.js      # Webpack configuration file for testing (for karma config)
│   │   └── WIT.config.js             # Webpack Isomorphic Tools configuration file        
└── index.js                          # App start point
```


## Server Side Security and Performance

Concering to the security and performance for Express in production, I already setup some middlewares for you:

* [helmet](https://github.com/helmetjs/helmet) - Helps secure Express server with various HTTP headers.
* [hpp](https://github.com/analog-nico/hpp) - Express middleware to protect against HTTP Parameter Pollution attacks.
* [compression](https://github.com/expressjs/compression) - Gzip compression support for speeding up Express server responses.

Note: It's just a basic protected mechanism for your app, you can see the [security best practices](https://expressjs.com/en/advanced/best-practice-security.html) for more advanced configuration.


## Setup Redux DevTools Extension

The [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension) let us wire up our Redux app to a time-traveling debugger. It's enabled in development only. You can follow the installation guide to use it:

**For Chrome**

* from [Chrome Web - from [Chrome Web Store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd);
* or build it with `npm i && npm run build:extension` and [load the extension's folder](https://developer.chrome.com/extensions/getstarted#unpacked) `./build/extension`;
* or run it in dev mode with `npm i && npm start` and [load the extension's folder](https://developer.chrome.com/extensions/getstarted#unpacked) `./dev`.


**For Firefox**

* from [Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/addon/remotedev/);
* or build it with `npm i && npm run build:firefox` and [load the extension's folder](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) `./build/firefox` (just select a file from inside the dir).


**For Electron**

* just specify `REDUX_DEVTOOLS` in [`electron-devtools-installer`](https://github.com/GPMDP/electron-devtools-installer).

**For other browsers and non-browser environment**

* use [`remote-redux-devtools`](https://github.com/zalmoxisus/remote-redux-devtools).


## Overview

### Stateless Functional Components

[React 0.14](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html) introduced a simpler way to define components called [stateless functional components](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions). These components are written in plain javascript functions. In the starter boilerplate I use it wherever possible.

### Adding Routes and Async Reducers

[React Router](https://github.com/reactjs/react-router) provides the dynamic routing by "Code-Splitting". It's great for building scableable apps (see the [document](https://github.com/ReactTraining/react-router/blob/master/docs/guides/DynamicRouting.md) for the detail).

Here I use the `import()` syntax to achieve loading the components and async reducers (by Redux) via a Promise based api, which already support by [Webpack 2](https://webpack.js.org/).

You can add your routes and async reducers in `./src/routes.js`. For example:

```javascript
import { injectReducer } from './redux/reducers';

// ...

export default function createRoutes(store) {
  return {

    // ...

    childRoutes: [
      {
        path: '/path',                                                        // Define your route path here
        getComponent(location, cb) {
          const importModules = Promise.all([
            import('./containers/MyNewRouteComponent'),                       // Add your route component here
            import('./containers/MyNewRouteComponent/myAsyncReducer'),        // Add your async reducer here
          ]);

          const renderRoute = loadModule(cb);

          importModules
            .then(([Component, reducer]) => {
              injectReducer(store, 'userInfo', reducer.default);              // Inject your async reducer
                                                                              // to the store
              renderRoute(Component);
            })
            .catch(errorLoading);
        },
      },

      // ...

    ],
  };
}
```

### Managing Title, Meta, Styles and Scripts

The parent `App.js` defines the base title and meta in a `<Helmet {...config.app} />` component. Any sub-component can override/add properties (supports meta, link, script, style tags and html attributes). See the [react-helmet](https://github.com/nfl/react-helmet) documents for more info.

### App config

You can store app settings under `./src/config`. By default the `default.js` will be loaded. If the `process.env.NODE_ENV` matches to production, the `prod.js` will be used insteadlly, and it inherits the data info from `default.js`.

You can access the correct config with:

```javascript
import config from './config';
```

### Styles

The starter boilerplate supports CSS, SASS and [CSS Modules](https://github.com/css-Modules/css-Modules) is enabled by default. I use [PostCSS](https://github.com/postcss/postcss-loader) plugin to parse CSS and add autoprefixer to your stylesheet. You can access your stylesheet with two ways.

With CSS Modules:

```javascript
import styles from './styles.scss';

// ...

render() {
  return (
    <div className={styles.Home}>   // The className matches one of CSS classes in your SCSS file
      <Helmet title="Home" />
      {this.displayUserList()}
    </div>
  );
}
```

Without CSS Modules (you need to turn off CSS Modules from `./tools/webpack/config.js`):

```javascript
import './styles.scss';

// ...

render() {
  return (
    <div className="Home">    // Use the CSS class as normal
      <Helmet title="Home" />
      {this.displayUserList()}
    </div>
  );
}
```

By the way, if you want to use your based stylesheet or a vendor CSS framework, just import it through the `./src/containers/App/index.js` file, for example:

```javascript
import '../../theme/normalize.css';   // import a vendor stylesheet here
import styles from './styles.scss';   // import your based stylesheet here

const App = ({ children }) => (

  // ...

);
```

For the better development experience, don't forget to include those files in the `./src/utils/renderHtmlPage.js`, for example:

```javascript
// ...

${
  _.keys(assets.styles).length === 0 ?
    `<style>${
      // Include the vendor stylesheet and the stylesheets which you have used here
      require('../theme/normalize.css')._style +                
      require('../containers/App/styles.scss')._style +              
    }</style>` : ''
}

// ...
```

### Image and Font

It's super easy to render the image and font both on client and server, the usage would be like below.

Using image:

```javascript
// Require an image
<img src={require('./assets/logo.svg')} alt="Logo" role="presentation" />
```

Using font-awesome:

```javascript
// With CSS Modules
import styles from './myStyle.scss';

// ...

return (
  <div>
    <div><i className={styles.iconUser}></i> Welly</div>
  </div>
);

// Without CSS Modules
import './font-awesome.css';

// ...

return (
  <div>
    <div><i className="fa fa-user"></i> Welly</div>
  </div>
);

```

For using CSS Modules, you have to set the proper font path in your scss file:

```
$fa-font-path:"../node_modules/font-awesome/fonts";
@import "../node_modules/font-awesome/scss/font-awesome";
.icon-user {
  @extend .fa;
  @extend .fa-user;
}
```

### Data fetching and client hydration

Just write Redux actions and stores as normal (read the [Redux](https://rackt.github.io/redux/) guide if you are new). The starter boilerplate using [axios](https://github.com/mzabriskie/axios) as the data fetcher, it's quite simple and easy to use. If the action creator is asynchronous then it will return a Promise (or a Promise.all) in the inner function.

You can write dispatches for actions that must be called for the container to be ready:

```javascript
// Write a static function which be called by server and client
static fetchData(dispatch, params) {
  // Add the asynchronous actions which must be called while paga loading here
  return Promise.all([
    dispatch(action.fetchDataIfNeeded(params.id)),
  ]);
}
```

Then invoke the actions in `componentDidMount`. This ensures that if the component is reached on the client, then the same actions will be invoked. It's up to the action to figure out if fetches for data need to be made or not:

```javascript
componentDidMount() {
  const { dispatch, params } = this.props;

  // Invoke the action for client rendering
  UserInfo.fetchData(dispatch, params);
}
```

### Boost App Performance by Shallow Compare

If your React component's render() function renders the same result given the same props and state, you can use [React.PureComponent](https://facebook.github.io/react/docs/react-api.html#react.purecomponent) for a performance boost.

React.PureComponent is exactly like React.Component but implements `shouldComponentUpdate()` with a shallow prop and state comparison. See the [Optimizing Performance](https://facebook.github.io/react/docs/optimizing-performance.html#examples) topic for more info.

How we implemented the optimizing:

```javascript
import React, { PureComponent } from 'react';

// ...

class Home extends PureComponent {  // Use PureComponent instead of Component

  // ...

}
```


### Type Checking by Flow

[Flow](https://flowtype.org/docs/react.html), a static type checker for javascript. It adds static typing to javascript to improve developer productivity and code quality. In particular, static typing offers benefits like early error checking, which helps you avoid certain kinds of runtime failures, and code intelligence, which aids code maintenance, navigation, transformation, and optimization.

Flow’s static analysis makes building large web apps with React safe by tracking the types of props and state. Flow understands which props are required and also supports default props. (learn more about [Flow with React](https://flowtype.org/docs/react.html))

I love to write React, Redux with Flow. If you are new to Flow, [five simple examples](https://flowtype.org/docs/five-simple-examples.html) can get you started writing Flow programs.

There're some tips

### JavaScript and Style Lint

[JavaScript lint](https://github.com/MoOx/eslint-loader) and [style lint](https://github.com/JaKXz/stylelint-webpack-plugin) are included into webpack compiling for runtime checking. If you don't want them be actived during developing, you can turn off those from `./tools/webpack/config.js` and do the mannually checking by `yarn lint`.


### Unit Tests

The starter boilerplate uses [mocha](https://mochajs.org/) to run your unit tests, it uses [karma](https://karma-runner.github.io/1.0/index.html) as the test runner, and uses [enzyme](https://github.com/airbnb/enzyme) as the testing utility for React, which makes it easier to assert, manipulate, and traverse your React Components' output. Moreover it also uses [chai](http://chaijs.com/) as the assertion library and uses [sinon](https://github.com/sinonjs/sinon) to provide the standalone test spies, stubs and mocks. The unit tests focus on four parts as below:

* Actions
* Containers
* Components
* Reducers

By the way, I use [babel-plugin-istanbul](https://github.com/istanbuljs/babel-plugin-istanbul) to instruments your code with Istanbul coverage, the report is generated in `./coverage` folder. You can configure `./tools/webpack/config.test.babel.js` to ignore the files which you don't want to cover. For example:

```javascript
{
  // ...

  plugins: [
    'transform-runtime',
    ['istanbul', {
      exclude: [
        '**/*-test.js',   // Ignore the files which you don't want to cover here
      ],
    }],
  ],

  // ...
}
```

You can also use [istanbul's ignore hints](https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes) to specify specific lines of code to skip instrumenting.


## Troubleshooting

If you get the the following message during developing, try to run `yarn build` to fix it.

> webpack-isomorphic-tools (waiting for the first webpack build to finish)

If you run the example of the app. And you encounter the checksum error like below, try to restart the server to solve the problem. (it's a react universal issue, this solution might not works for your further developing scenarios)

> React attempted to use reuse markup in a container but the checksum was invalid. This generally means that you are using server rendering and the markup generated on the server was not what the client was expecting. React injected new markup to compensate which works but you have lost many of the benefits of server rendering. Instead, figure out why the markup being generated is different on the client or server.


## To Do...

There're some features or improvements I'd like to do in the near future. If you have any great ideas or suggestions, feel free to fork the repository and share it.

- [ ] Type checking with [Flow](https://flowtype.org/)
- [ ] Replacing the Mocha testing framework with [Jest](https://facebook.github.io/jest/)
- [ ] Upgrading to [React Router v4](https://reacttraining.com/react-router/)
