# React Cool Starter 😎

[![Build Status](https://travis-ci.org/wellyshen/react-cool-starter.svg?branch=master)](https://travis-ci.org/wellyshen/react-cool-starter)
[![dependencies Status](https://david-dm.org/wellyshen/react-cool-starter/status.svg)](https://david-dm.org/wellyshen/react-cool-starter)
[![devDependencies Status](https://david-dm.org/wellyshen/react-cool-starter/dev-status.svg)](https://david-dm.org/wellyshen/react-cool-starter?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/wellyshen/react-cool-starter/badge.svg?branch=master)](https://coveralls.io/github/wellyshen/react-cool-starter?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/wellyshen/react-cool-starter/master/LICENSE)
[![Twitter URL](https://img.shields.io/twitter/url/https/github.com/erikras/redux-form.svg?style=social)](https://twitter.com/intent/tweet?text=With%20@React-Cool-Starter,%20I%20can%20build%20my%20universal%20web%20app%20easily.%20Thanks,%20@Welly%20Shen!)

> 🎉 My react-native app [LeadFit](https://itunes.apple.com/app/id1321807247) now available on App Store, which is a workout app. Welcome to try, it's free!

A simple but feature rich starter boilerplate for creating your own [universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) app. It built on the top of [React](https://facebook.github.io/react/), [Redux](https://github.com/reactjs/redux), [React Router](https://reacttraining.com/react-router/) and [Express](https://expressjs.com/). Includes all the hot stuff and modern web development tools such as [Typescript](https://www.typescriptlang.org/), [Webpack](https://webpack.js.org/), [Babel](https://babeljs.io/), [PostCSS](https://github.com/postcss/postcss-loader), [React Hot Loader](https://github.com/gaearon/react-hot-loader), [Jest](https://facebook.github.io/jest/) and [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension). See the [**“Features”**](#features) section for other awesome features you can expect.

I will maintain the starter boilerplate and keep all of the technologies on trend. Welcome to join me if you want. Hope you guys love it 🤩

> 👻 I'm curious what kind of app that you guys building via this starter? Please feel free to [tell me](https://github.com/wellyshen/react-cool-starter/issues/6), let's make some sharing between us.

## Real Case Study

- [Rendah Mag](https://www.rendahmag.com/) is a music magazine which exists to bring exposure to an ever-growing community, focusing on the latest Halftime, Beats & Experimental news & releases. Congrats for the amazing product. 🎧 🎉
- [BECK Friends](https://www.beckfriends.com/) is an international delivery service, which is built based on this starter boilerplate. Congrats for successful migrating to React. 🎉
- [DealDrop](https://www.dealdrop.com/) is the best place to find verified coupon codes, deals, promos and offers for thousands of stores & brands you love. Never pay full price again 🤑

## Features

Really cool starter boilerplate with the most popular technologies:

- [Universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) rendering with async data fetching.
- [React](https://facebook.github.io/react/) as the view framework.
- [Redux](https://github.com/reactjs/redux) as the state management.
- [React Router](https://reacttraining.com/react-router/) as the router.
- [Connected React Router](https://github.com/supasate/connected-react-router) to bind Redux with React Router. Refer to [doc](https://github.com/supasate/connected-react-router/blob/master/FAQ.md#frequently-asked-questions) to see how it works.
- [Express](https://expressjs.com/) server.
- [Typescript](https://www.typescriptlang.org/) as the static type checker for Javascript.
- [Webpack](https://webpack.js.org/) for app bundling.
- [Babel](https://babeljs.io/) for transpiling ES6+ to ES5.
- [React Hot Loader](https://github.com/gaearon/react-hot-loader) to tweak React components in real time.
- [nodemon](https://nodemon.io/) to monitor for any changes in your Node.js application and automatically restart the server.
- [axios](https://github.com/mzabriskie/axios) as the Promise-based HTTP client for the browser and Node.js.
- [redux-thunk](https://github.com/gaearon/redux-thunk) as the middleware to deal with asynchronous action.
- [react-helmet](https://github.com/nfl/react-helmet) to manage title, meta, styles and scripts tags on both server and client.
- [loadable-component](https://github.com/smooth-code/loadable-components) to lazy load component when needed in app. Reduce your bundle size without stress.
- [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware) serves the files emitted from webpack over the Express server.
- [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware) allows you to add hot reloading into the Express server.
- [css-modules-require-hook](https://github.com/css-modules/css-modules-require-hook) compiles CSS Modules in runtime for SSR.
- [asset-require-hook](https://github.com/aribouius/asset-require-hook) allows your assets files required during runtime for SSR.
- [assets-webpack-plugin](https://github.com/ztoben/assets-webpack-plugin) generates assets with hash so you can use them for SSR.
- [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) creates a visualize size of webpack output files with an interactive zoomable treemap.
- [helmet](https://github.com/helmetjs/helmet) helps secure Express apps with various HTTP headers.
- [morgan](https://github.com/expressjs/morgan) the HTTP request logger for server side debugging.
- [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension) for debugging application's state changes.
- [ESLint](http://eslint.org/) to maintain a consistent Typescript/Javascript code style (with Airbnb configuration).
- [StyleLint](http://stylelint.io/) to maintain a consistent css/scss code style.
- [Prettier](https://prettier.io/) to format code and style.
- CSS and SASS support with [PostCSS](https://github.com/postcss/postcss-loader) for advanced transformations (e.g. autoprefixer, cssnext etc.). [CSS modules](https://github.com/css-Modules/css-Modules) enabled.
- Image (with [imagemin-webpack-plugin](https://github.com/Klathmon/imagemin-webpack-plugin) for compressing images with imagemin) and Font support.
- Split vendor's libraries from client bundle.
- No other view engines, just Javascript based HTML rendering component.
- Shared app config between development and production.
- 404 error page and redirect handling.
- Integrate [Jest](https://facebook.github.io/jest/) with [enzyme](https://github.com/airbnb/enzyme) as the solution for writing unit tests with code coverage support.
- [Yarn](https://yarnpkg.com/lang/en/) as the package manager.

## Who's the Starter for?

This starter is for those who with basic knowledge of React and have the need for building a server-side app. In other words, it's not for a newbie. If you're new to React or you don't need a server-side rendering app, I'd recommend you give [create-react-app](https://github.com/facebook/create-react-app) a try.

## Requirements

- [node](https://nodejs.org/en/) >= 10.0
- [npm](https://www.npmjs.com/) >= 6.0

## Looking for Docker?

You can find Docker support version on this [branch](https://github.com/wellyshen/react-cool-starter/tree/docker).

## Getting Started

**1. You can start by cloning the repository on your local machine by running:**

```bash
git clone https://github.com/wellyshen/react-cool-starter.git
cd react-cool-starter
```

**2. Install all of the dependencies:**

```bash
yarn
```

**3. Start to run it:**

```bash
yarn build  # Building bundle
yarn start  # Running production server
```

Now the app should be running at [http://localhost:8080/](http://localhost:8080/)

> Note: You can change the port that you want from `./package.json`.

## Script Commands

I use [better-npm-run](https://github.com/benoror/better-npm-run) to manage the scripts in a better way, which also provides the compatibility of cross-platforms. All of the scripts are listed as following:

| `yarn <script>`        | Description                                                                      |
| ---------------------- | -------------------------------------------------------------------------------- |
| `dev`                  | Run your app on the development server at `localhost:3000`. HMR will be enabled. |
| `start`                | Run your app on the production server only at `localhost:8080`.                  |
| `build`                | Remove the previous bundled files and bundle it to `./public/assets`.            |
| `analyze`              | Visualize the contents of all your bundles.                                      |
| `type-check`           | Run type checking for `.tsx?` files.                                             |
| `type-check:watch`     | Run type checking and monitor changed files.                                     |
| `lint`                 | Lint all `.tsx?`, `.jsx?` and `.scss` files.                                     |
| `lint:code`            | Lint all `.tsx?` and `.jsx?` files (With `--fix` to auto fix eslint errors).     |
| `lint:style`           | Lint all `.scss` files (With `--fix` to auto fix stylelint errors).              |
| `test`                 | Run testing (with code coverage reports).                                        |
| `test:watch`           | Run testing and monitor changed files.                                           |
| `test:update-snapshot` | Update jest snapshot.                                                            |
| `clean`                | Remove the client/server bundled stuff and the coverage report.                  |
| `clean:build`          | Remove the `./public/assets` folder to clean the client bundled files.           |
| `clean:test`           | Remove the `./coverage` folder to clean the code coverage report.                |

## App Structure

Here is the structure of the app, which serves as generally accepted guidelines and patterns for building scalable apps.

```
.
├── public                          # Express server static path/Webpack bundled output
│   └── favicon.ico                 # Favicon is placed in the same path with the main HTML page
├── src                             # App source code
│   ├── config                      # App configuration settings
│   │   ├── default.ts              # Default settings
│   │   ├── index.ts                # Configuration entry point
│   │   └── prod.ts                 # Production settings (overrides the default settings)
│   ├── components                  # Reusable components (including scss/testing files)
│   ├── pages                       # Page components (including scss/testing files)
│   ├── app                         # App root component (including scss/testing files)
│   ├── actions                     # Redux actions (including testing files)
│   ├── reducers                    # Redux reducers (including testing files)
│   ├── utils                       # App-wide utils (e.g. configure Redux store, HTML template etc.)
│   ├── theme                       # App-wide style and vendor CSS framework
│   ├── types                       # Typescript type declarations for redux and global
│   ├── client.tsx                  # App bootstrap and rendering (webpack entry)
│   ├── routes.tsx                  # Routes configuration for both client and server side
│   └── server.tsx                  # Express server (with webpack dev/hot middlewares)
├── tools                           # Project related configurations (testing/build etc.)
│   ├── jest                        # Jest CSS modules and assets mocks settings
│   ├── webpack                     # Webpack settings
│   │   ├── config.babel.js         # Webpack configuration
│   │   └── hooks.js                # Assets require hooks
├── index.ts                        # App entry point
└── postcss.config.js               # PostCSS configuration
```

## Server-Side Security and Performance

Concerning the security and performance of Express in production, I already setup some middleware for you:

- [helmet](https://github.com/helmetjs/helmet) - Helps secure Express server with various HTTP headers.
- [hpp](https://github.com/analog-nico/hpp) - Express middleware to protect against HTTP Parameter Pollution attacks.
- [compression](https://github.com/expressjs/compression) - Gzip compression support for speeding up Express server responses.

> Note: It's just a basic protected mechanism for your app, you can see the [security best practices](https://expressjs.com/en/advanced/best-practice-security.html) for more advanced configuration.

## Setup Redux DevTools Extension

The [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension) let us wire up our Redux app to a time-traveling debugger. It's enabled in development only. You can follow these installation guides to use it:

**For Chrome**

- from [Chrome Web Store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd);
- or download `extension.zip` from [last releases](https://github.com/zalmoxisus/redux-devtools-extension/releases), unzip, open `chrome://extensions` url and turn on developer mode from top left and then click; on `Load Unpacked` and select the extracted folder for use
- or build it with `npm i && npm run build:extension` and [load the extension's folder](https://developer.chrome.com/extensions/getstarted#unpacked) `./build/extension`;
- or run it in dev mode with `npm i && npm start` and [load the extension's folder](https://developer.chrome.com/extensions/getstarted#unpacked) `./dev`.

**For Firefox**

- from [Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/);
- or build it with `npm i && npm run build:firefox` and [load the extension's folder](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) `./build/firefox` (just select a file from inside the dir).

**For Electron**

- just specify `REDUX_DEVTOOLS` in [`electron-devtools-installer`](https://github.com/GPMDP/electron-devtools-installer).

**For other browsers and non-browser environment**

- use [`remote-redux-devtools`](https://github.com/zalmoxisus/remote-redux-devtools).

## Overview

### Functional Components and Hooks

React v16.8 introduced a series of [Hooks](https://reactjs.org/docs/hooks-intro.html), which let you use state and other React features without writing a class. In the starter boilerplate, you can see how I leverage the benefit of [functional components](https://reactjs.org/docs/components-and-props.html#function-and-class-components) + hook APIs to write a demo with clean code.

### Adding Routes

This starter use [React Router](https://reacttraining.com/react-router/) library to manage our routes. For the purpose of SSR with data pre-fetched, I put the routes in a centralized [Route Config](https://reacttraining.com/react-router/web/example/route-config). You can setup your routes in `./src/routes.tsx`. For example:

```js
import RouteComponent from "./pages/RouteComponent";

// ...

export default [
  {
    // Define your route path
    path: "/top-path",
    // If the route matches the location.pathname exactly or not (used for index route usually)
    exact: true,
    // Add your route component here
    component: RouteComponent,
    // Add your sub route component here
    routes: [
      {
        path: "/top-path/sub-path",
        component: SubRouteComponent
      }
    ]
    // ...
  }
  // Setup other route components...
];
```

### Data Fetching from Server-side

Just write Redux actions and stores as normal (read the [Redux](https://redux.js.org/) document if you are new). The starter using [axios](https://github.com/mzabriskie/axios) as the data fetcher, it's quite simple and easy to use. If the action creator is asynchronous then it will return a Promise (or a Promise.all) in the inner function.

Register the action(s) in `./src/routes.tsx`, which have to be called from server-sdie:

```js
// ...

export default [
  {
    path: "/top-path",
    exact: true,
    component: RouteComponent,
    // Actions in the loadData function will be fetched from server-side
    loadData: () => [
      myReduxAction()
      // Add other pre-fetched actions here
    ]
  }
  // ...
];
```

The action(s) will be dispatched through `./src/server.tsx` on server-side:

```js
// ...

app.get("*", (req, res) => {
  // ...

  // Here's the method for loading data from server-side
  const loadBranchData = () => {
    const branch = matchRoutes(routes, req.path);

    const promises = branch.map(({ route, match }) => {
      if (route.loadData) {
        return Promise.all(
          route
            .loadData({ params: match.params, getState: store.getState })
            .map(item => store.dispatch(item))
        );
      }

      return Promise.resolve(null);
    });

    return Promise.all(promises);
  };

  // ...
});

// ...
```

In client-side, don't forget to invoke the action(s) in `componentDidMount` or `useEffect` hook. This ensures that if the component is reached on the client, then the same actions will be invoked. It's up to the action(s) to figure out if fetches for data need to be made or not:

```js
// If you use React class component

componentDidMount() {
  // Invoke your redux action(s) for client rendering
  this.props.myReduxAction();
}

// If you use functional component

useEffect(() => {
  myReduxAction();
}, [])
```

### Code Splitting

One great feature of the web is that you don’t have to make your visitors download the entire app before they can use it. You can think of code splitting as incrementally downloading the app. It divides your code into small pieces called “chunks” to reduce the size of bundle loaded by user. Reducing the size of a chunk makes it load and run faster.

To accomplish this, I integrate [loadable-components](https://github.com/smooth-code/loadable-components) into this starter. The reason I choose the library is because of its design philosophy of SSR. It works seamless with the starter rather than others. Let’s see how we split our app by route:

I use the following folder/file structure:

```
 |- pages
    |- AsyncRouteComponent
       |- index.js             // Wrap the route component as async component
       |- RouteComponent.tsx   // The route component
```

The `index.js` will be:

```js
import loadable from "@loadable/component";

import { Error, Loading } from "../../components";

// Import your async route component
const AsyncComponent = loadable(() => import("./AsyncComponent"), {
  // Loading component will be displayed when the component is being loaded
  fallback: <Loading />
});

export default props => (
  // Wrap an <ErrorBoundary /> to catch the error of <AsyncComponent /> (via "componentDidCatch()" lifecycle)
  <ErrorBoundary>
    <AsyncComponent {...props} />
  </ErrorBoundary>
);
```

Then you can [setup](#adding-routes) the route as usual.

> Note: I just show a general case route-based splitting, however you can even split your app by component-based depends on your need. For more advanced configuration you can refer to the [document](https://github.com/smooth-code/loadable-components) of loadable-components.

### Managing Title, Meta, Styles and Scripts

The `./src/app/index.tsx` (app root component) defines the base title and meta in a `<Helmet {...config.app} />` component. Any sub-component can override/add properties (supports meta, link, script, style tags and html attributes). See the [react-helmet](https://github.com/nfl/react-helmet) document for more info.

### App config

You can store app settings under `./src/config`. By default the `default.ts` will be loaded. If the `process.env.NODE_ENV` matches to production, the `prod.ts` will be used instead, and it inherits the data info from `default.ts`.

You can access the correct config with:

```js
import config from "./config";
```

### Styles

The starter supports CSS, SASS and [CSS modules](https://github.com/css-Modules/css-Modules) is enabled by default. I use [PostCSS](https://github.com/postcss/postcss-loader) plugin to parse CSS and add autoprefixer to your stylesheet. You can access your stylesheet with two ways.

With CSS modules:

```js
import styles from "./styles.scss";

// ...

return (
  <div className={styles.myClass}>
    {/* The className matches one of CSS classes in your SCSS file */}
    <Helmet title="My title" />
    {this.renderContent()}
  </div>
);
```

Without CSS modules (you need to turn off CSS modules from `./tools/webpack/config.babel.js`):

```js
import "./styles.scss";

// ...

return (
  <div className="myClass">
    {/* Use the CSS class as normal */}
    <Helmet title="My title" />
    {this.renderContent()}
  </div>
);
```

By the way, if you want to use vendor CSS frameworks or global styles, just import it through the `./src/app/index.tsx` file (app root component). For example:

```js
import "../../theme/normalize.css"; // Import a vendor stylesheet here
import styles from "./styles.scss"; // Import your based stylesheet here

// ...

export default routes => {
  // ...
};
```

### Image and Font

It's super easy to render the image and font both on client and server, the usage would be like below.

Using image:

```js
// Require an image
<img src={require("./assets/logo.svg")} alt="Logo" role="presentation" />
```

Using font-awesome:

```js
// With CSS modules
import styles from "./styles.scss";

// ...

return (
  <div>
    <div>
      <i className={styles.iconUser} /> Welly
    </div>
  </div>
);

// Without CSS modules
import "./font-awesome.css";

// ...

return (
  <div>
    <div>
      <i className="fa fa-icon" /> Welly
    </div>
  </div>
);
```

For using CSS modules, you have to set the proper font path in your scss/sass file:

```
$fa-font-path:"../node_modules/font-awesome/fonts";
@import "../node_modules/font-awesome/scss/font-awesome";

.icon-user {
  @extend .fa;
  @extend .fa-user;
}
```

### Boost App Performance

In this starter, you can see I use [React.PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent) and [React.memo](https://reactjs.org/blog/2018/10/23/react-v-16-6.html#reactmemo) to demostrate the basic performance optimizing for React app. The two APIs are used in different ways.

- `React.PureComponent` is used for React class components. It can do shallow prop and state comparison for a performance boost:

```js
import React, { PureComponent } from "react";

// ...

class MyComponent extends PureComponent {
  // Only rerenders if props change
  // ...
}
```

- `React.memo` is used for functional components. It plays the same role as `React.PureComponent`:

```js
import React, { memo } from "react";

// ...

const MyComponent = memo(props => {
  // Only rerenders if props change
  // ...
});
```

- In addition, you can also use [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo) to avoid expensive calculations on every render:

```js
import React, { useMemo } from "react";

// ...

const MyComponent = props => {
  // ...

  return (
    <div>
      {/* Only rerenders if "a" change */}
      {useMemo(
        () => (
          <SomeComponent someProp={a} />
        ),
        [a]
      )}
    </div>
  );
};
```

> For more performance optimizing techniques. Please see the [Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html) topic.

### Typescript

[Typescript](https://www.typescriptlang.org/) is a typed superset of JavaScript. It's getting more and more popular in the Front-end world. And being widely used by many libraries. If you are new to Typescript, you can check out its document [here](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).

Typescript has been integrated with our application to bring the following benefits:

- Type safety for components, reducers, state and actions.
- Many IDEs support the hints of Typescript, which give us a superior developer experience.
- Easy refactoring of typed code.
- In general, more types less bugs. Read this [article](https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b) to know more.

### Code and Style Lint

[ESLint](http://eslint.org/) (With Airbnb config), [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint), [StyleLint](http://stylelint.io/), [Prettier](https://prettier.io/) and [lint-staged](https://github.com/okonet/lint-staged) are integrated into this starter to maintain a consistent code style and give you a elegant code formatting. You can configure your lint rules through `./package.json` file.

### Unit Tests

This starter use [Jest](https://facebook.github.io/jest/) as the testing engine. It runs in a Node environment, so you won't have access to the DOM. In addition, Jest support the feature of [snapshot testing](http://facebook.github.io/jest/docs/snapshot-testing.html#content), which is very powerful for testing React component. Give it a try, you'll be impressed.

I also use [enzyme](https://github.com/airbnb/enzyme) as the testing utility for React, which makes it easier to assert, manipulate, and traverse your React Components' output. The unit tests focus on three parts as below:

- Components
- Actions
- Reducers

By the way, Jest built-in code coverage reports, the report files are generated in `./coverage` folder. You can configure `./package.json` to define which files that you want to cover. For example:

```
{
  // ...
  "jest": {
    "collectCoverageFrom": [
      "src/pages/**/*.tsx",     // Define the files, which want to be covered
      "!src/pages/index.ts"     // The files will be ignored by code coverage
    ],
    // Other configurations
  },
  // ...
}
```

You can also use [istanbul's ignore hints](https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes) to specify specific lines of code in a Javascript file to skip code coverage.

### How to Deploy

To depoly you app to cloud service (e.g. AWS, GCP), you can follow the instructions below.

1. Build then install production dependencies:

```bash
yarn build                  # Building bundle
rm -rf node_modules         # After building remove node modules
yarn install --production   # Then install dependencies only
```

2. Pack necessary folders/files to your Node.js server:

- ✅ node_modules
- ✅ public
- ✅ src
- ✅ tools/webpack
- ✅ index.ts
- ✅ postcss.config.js
- ✅ package.json
- ✅ tsconfig.json

3. Run your app:

```bash
yarn start
```

> Ideally, the above steps can be integrated into your CI. I recommend you to pack the `yarn.lock` for yarn installation via CI.

## Troubleshooting

- If app crash due to the error: `Invariant Violation: loadable: SSR requires "@loadable/babel-plugin", please install it` (refer to this [issue](https://github.com/smooth-code/loadable-components/issues/173)). To solve that, you must use `.js` extension for code-splitting files (e.g. `src/Home/index.js`).

- If you encounter the markup mismatches error (it's a React universal issue, which usually occurs due to the non-synchronized rendering result between client and server), you can do:

  - Restart the server to solve it.
  - Or for v16.1.0 up, you can use `suppressHydrationWarning` attribute for intentional client/server text mismatches ([#11126](https://github.com/facebook/react/pull/11126)).

- If you are on windows and encounter the following error: Expected linebreaks to be 'LF' but found 'CRLF' linebreak-style. The following rule must be added to `./package.json`.

```
"linebreak-style": 0
```

So it will look like:

```
// ...
"rules": {
  "linebreak-style": 0,
  "global-require": 0,
  // Other rules
```
