# React Cool Starter

A simple but feature rich starter boilerplate for creating your own [universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) app. It built on the top of [React](https://facebook.github.io/react), [Redux](https://github.com/reactjs/redux), [React Router](https://reacttraining.com/react-router) and [Express](https://expressjs.com). Includes all the hot stuff and modern web development tools such as [Redux Toolkit](https://redux-toolkit.js.org), [TypeScript](https://www.typescriptlang.org), [Webpack](https://webpack.js.org/), [Babel](https://babeljs.io), [PostCSS](https://github.com/postcss/postcss-loader), [React Hot Loader](https://github.com/gaearon/react-hot-loader), [Jest](https://facebook.github.io/jest) and [React Testing Library](https://github.com/testing-library/react-testing-library). See the [**“Features”**](#features) section for other awesome features you can expect.

I will maintain the starter boilerplate and keep all of the technologies on trend. Welcome to join me if you want. Hope you guys love it 🤩

> 👻 I'm curious what kind of app that you guys building via this starter? Please feel free to [tell me](https://github.com/wellyshen/react-cool-starter/issues/6), let's make some sharing between us.

[![build status](https://img.shields.io/github/workflow/status/wellyshen/react-cool-starter/CI?style=flat-square)](https://github.com/wellyshen/react-cool-starter/actions?query=workflow%3ACI)
[![coverage status](https://img.shields.io/coveralls/github/wellyshen/react-cool-starter?style=flat-square)](https://coveralls.io/github/wellyshen/react-cool-starter?branch=master)
[![dependencies status](https://img.shields.io/david/wellyshen/react-cool-starter?style=flat-square)](https://david-dm.org/wellyshen/react-cool-starter)
[![devDependencies status](https://img.shields.io/david/dev/wellyshen/react-cool-starter?style=flat-square)](https://david-dm.org/wellyshen/react-cool-starter?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4?style=flat-square)](https://github.com/prettier/prettier)
[![MIT licensed](https://img.shields.io/github/license/wellyshen/react-cool-starter?style=flat-square)](https://raw.githubusercontent.com/wellyshen/react-cool-starter/master/LICENSE)
[![All Contributors](https://img.shields.io/badge/all_contributors-22-orange?style=flat-square)](#contributors-)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](https://github.com/wellyshen/react-cool-starter/blob/master/CONTRIBUTING.md)
[![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fwellyshen%2Freact-cool-starter)](https://twitter.com/intent/tweet?text=With%20@react-cool-starter,%20I%20can%20build%20my%20universal%20web%20app%20easily.%20Thanks,%20@Welly%20Shen%20🤩)

## Real Case Study

- [Rendah Mag](https://www.rendahmag.com) is a music magazine which exists to bring exposure to an ever-growing community, focusing on the latest Halftime, Beats & Experimental news & releases. Congrats for the amazing product. 🎧 🎉
- [BECK Friends](https://www.beckfriends.com) is an international delivery service, which is built based on this starter boilerplate. Congrats for successful migrating to React. 🎉
- [DealDrop](https://www.dealdrop.com) is the best place to find verified coupon codes, deals, promos and offers for thousands of stores & brands you love. Never pay full price again 🤑

## Features

Really cool starter boilerplate with the most popular technologies:

- [Universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) rendering with async data fetching.
- [React](https://facebook.github.io/react) as the view library.
- [Redux](https://github.com/reactjs/redux) as the state management.
- [Redux Toolkit](https://redux-toolkit.js.org) for efficient Redux development.
- [React Router](https://reacttraining.com/react-router) as the router.
- [Connected React Router](https://github.com/supasate/connected-react-router) to bind Redux with React Router. Refer to [document](https://github.com/supasate/connected-react-router/blob/master/FAQ.md#frequently-asked-questions) to see how it works.
- [Express](https://expressjs.com) server.
- [TypeScript](https://www.typescriptlang.org) as the static type checker for JavaScript.
- [Webpack](https://webpack.js.org) for app bundling.
- [Babel](https://babeljs.io) for transpile ES6+ to ES5.
- [React Hot Loader](https://github.com/gaearon/react-hot-loader) to tweak React components in real time.
- [nodemon](https://nodemon.io) to monitor for any changes in your Node.js application and automatically restart the server.
- [axios](https://github.com/axios/axios) as the Promise-based HTTP client for the browser and Node.js.
- [react-helmet](https://github.com/nfl/react-helmet) to manage title, meta, styles and scripts tags on both server and client.
- [loadable-component](https://github.com/smooth-code/loadable-components) to lazy load a component when needed. Reduce your bundle size without stress.
- [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware) serves the files emitted from webpack over the Express server.
- [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware) allows you to add hot reloading into the Express server.
- [css-modules-require-hook](https://github.com/css-modules/css-modules-require-hook) compiles CSS Modules in runtime for SSR.
- [asset-require-hook](https://github.com/aribouius/asset-require-hook) allows your assets files required during runtime for SSR.
- [assets-webpack-plugin](https://github.com/ztoben/assets-webpack-plugin) generates assets with hash so you can use them for SSR.
- [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) creates a visualize size of webpack output files with an interactive zoomable treemap.
- [helmet](https://github.com/helmetjs/helmet) helps secure Express apps with various HTTP headers.
- [morgan](https://github.com/expressjs/morgan) the HTTP request logger for server side debugging.
- [ESLint](http://eslint.org) to maintain a consistent TypeScript/JavaScript code style (with Airbnb configuration).
- [StyleLint](http://stylelint.io) to maintain a consistent css/scss code style.
- [Prettier](https://prettier.io) to format code and style.
- CSS and SASS support with [PostCSS](https://github.com/postcss/postcss-loader) for advanced transformations (e.g. autoprefixer, cssnext etc.). [CSS modules](https://github.com/css-Modules/css-Modules) enabled.
- Image (compressed by [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader)) and Font support.
- Split vendor's libraries from client bundle.
- No other view engines, just JavaScript based HTML rendering component.
- Shared app configuration between development and production.
- 404 error page and redirect handling.
- Integrate [Jest](https://facebook.github.io/jest) with [React Testing Library](https://github.com/testing-library/react-testing-library) as the solution for writing unit tests with code coverage support.
- [Yarn](https://yarnpkg.com/lang/en) as the package manager.

## Who's the Starter for?

They're several React frameworks today, however this is a DIY oriented start-kit. It shows you how to build a universal web app from scratch and how to test it. If you're new to React or you want a ready-to-go solution, I'd recommend the following alternatives for you:

- For client-side rendering, use [create-react-app](https://create-react-app.dev).
- For server-side rendering, use [Next.js](https://nextjs.org).

## Requirements

- [node](https://nodejs.org/en) >= 10.0
- [npm](https://www.npmjs.com) >= 6.0

## Looking for Docker Image?

You can find Docker support version on this [branch](https://github.com/wellyshen/react-cool-starter/tree/docker).

## Getting Started

**1. You can start by cloning the repository on your local machine by running:**

```sh
git clone https://github.com/wellyshen/react-cool-starter.git
cd react-cool-starter
```

**2. Install all of the dependencies:**

```sh
yarn
```

**3. Start to run it:**

```sh
yarn build  # Building bundle
yarn start  # Running production server
```

Now the app should be running at [http://localhost:8080](http://localhost:8080)

> Note: You can change the port that you want from the `./package.json`.

## Script Commands

I use [cross-env](https://github.com/kentcdodds/cross-env) to set and use environment variables across platforms. All of the scripts are listed as following:

| `yarn <script>`    | Description                                                                      |
| ------------------ | -------------------------------------------------------------------------------- |
| `dev`              | Run your app on the development server at `localhost:3000`. HMR will be enabled. |
| `start`            | Run your app on the production server only at `localhost:8080`.                  |
| `build`            | Delete the previous bundled files and bundle it to the `./public/assets`.        |
| `analyze`          | Visualize the contents of all your bundles.                                      |
| `type-check`       | Run type checking for `.tsx?` files.                                             |
| `type-check:watch` | Run an interactive type checking watcher .                                       |
| `lint`             | Lint all `.tsx?`, `.jsx?` and `.scss` files.                                     |
| `lint:code`        | Lint all `.tsx?` and `.jsx?` files (With `--fix` to auto fix eslint errors).     |
| `lint:style`       | Lint all `.scss` files (With `--fix` to auto fix stylelint errors).              |
| `test`             | Run testing.                                                                     |
| `test:watch`       | Run an interactive test watcher.                                                 |
| `test:cov`         | Run testing with code coverage reports.                                          |
| `test:update`      | Update jest snapshot.                                                            |
| `clean`            | Delete the client/server bundled stuff and the coverage report.                  |
| `clean:build`      | Delete the `./public/assets` folder to clean the client bundled files.           |
| `clean:cov`        | Delete the `./coverage` folder to clean the code coverage report.                |
| `docker`           | Build then run docker.                                                           |
| `docker:build`     | Build docker.                                                                    |
| `docker:start`     | Run docker.                                                                      |

## App Structure

Here is the structure of the app, which serves as generally accepted guidelines and patterns for building scalable apps.

```
.
├── public                        # Express server static path and Webpack bundled output
│   ├── favicon.ico               # App favicon
│   ├── logo192.png               # App logo small
│   ├── logo512.png               # App logo large
│   └── manifest.json             # App favicon and logo manifest
├── src                           # App source code
│   ├── config                    # App configuration by environments
│   │   ├── default.ts            # Default settings
│   │   ├── index.ts              # Configuration entry point
│   │   └── prod.ts               # Production settings (overrides the default)
│   ├── components                # Reusable components
│   ├── pages                     # Page components
│   ├── app                       # App root component
│   ├── store                     # Redux store creator, actions + reducers (a.k.a slice)
│   ├── services                  # API calls
│   ├── utils                     # App-wide utils (e.g. mock store creator for testing etc.)
│   ├── static                    # Static assets (e.g. images, fonts etc.)
│   ├── theme                     # App-wide style and vendor CSS framework
│   ├── types                     # App-wide type definitions
│   ├── client                    # App bootstrap and rendering (Webpack entry)
│   ├── routes                    # Routes configuration for both client-side and server-side
│   └── server                    # Express server (with Webpack dev and hot middlewares)
├── tools                         # Project related configurations (e.g. build, testing etc.)
│   ├── jest                      # Jest CSS modules and assets mocks settings
│   ├── webpack                   # Webpack settings
│   │   ├── config.babel.js       # Webpack configuration
│   │   └── hooks.js              # Assets require hooks
├── index.ts                      # App entry point
├── postcss.config.js             # PostCSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## Server-Side Security and Performance

Concerning the security and performance of Express in production, I already setup some middleware for you:

- [helmet](https://github.com/helmetjs/helmet) - Helps secure Express server with various HTTP headers.
- [hpp](https://github.com/analog-nico/hpp) - Express middleware to protect against HTTP Parameter Pollution attacks.
- [compression](https://github.com/expressjs/compression) - Gzip compression support for speeding up Express server responses.

> Note: It's just a basic protected mechanism for your app, you can see the [security best practices](https://expressjs.com/en/advanced/best-practice-security.html) for more advanced configuration.

## Develop with Redux Toolkit

[Redux Toolkit](https://redux-toolkit.js.org) is the official, opinionated, batteries-included toolset for efficient Redux development. It includes several utility functions that simplify the most common Redux use cases. In a word, we can do more work with less code, start from the [tutorial](https://redux-toolkit.js.org/tutorials/basic-tutorial) to learn more about it.

- Supports [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension), you can follow the [installation guide](https://github.com/zalmoxisus/redux-devtools-extension#installation) to use it.
- Built-ins most commonly used Redux [middlewares](https://redux-toolkit.js.org/api/getDefaultMiddleware#included-default-middleware) for better DX, such as [Redux Thunk](https://github.com/reduxjs/redux-thunk), [Immer](https://immerjs.github.io/immer/docs/introduction) etc.
- Provides useful [APIs](https://redux-toolkit.js.org/api/createReducer) for better development efficiency. We can even create entire [slices](https://redux-toolkit.js.org/api/createSlice) of state at once without writing any action creators or action types by hand.
- Integrates the [Reselect library](https://github.com/reduxjs/reselect) for optimizing the performance of your React + Redux app.

Let's see how powerful it is by a simple asynchronous data fetching example:

```js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  readyStatus: "invalid",
  items: [],
  error: null,
};

const userList = createSlice({
  // A name for action types
  name: "userList",
  initialState,
  // An object of "case reducers", key names will be used to generate actions
  reducers: {
    getRequesting: (state) => {
      // Write an immutable updated state by a mutable way, thanks to the built-in Immer middleware
      state.readyStatus = "request";
    },
    getSuccess: (state, { payload }) => {
      state.readyStatus = "success";
      state.items = payload;
    },
    getFailure: (state, { payload }) => {
      state.readyStatus = "failure";
      state.error = payload;
    },
  },
});

// We can get the "reducer" and "actions" from the slice instance
export default userList.reducer;
const { getRequesting, getSuccess, getFailure } = userList.actions;

export const fetchUserList = () => async (dispatch) => {
  dispatch(getRequesting());

  try {
    const { data } = await axios("/api/users");

    // Dispatch the action once data is ready via the built-in Redux Thunk middleware
    dispatch(getSuccess(data));
  } catch (error) {
    dispatch(getFailure(error.message));
  }
};
```

## Overview

### Functional Components and Hooks

React v16.8 introduced a series of [Hooks](https://reactjs.org/docs/hooks-intro.html), which let you use state and other React features without writing a class. In the starter boilerplate, you can see how I leverage the benefit of [functional components](https://reactjs.org/docs/components-and-props.html#function-and-class-components) + hook APIs to write a demo with clean code.

### Adding Routes

This starter use [React Router](https://reacttraining.com/react-router) library to manage our routes. For the purpose of SSR with data pre-fetched, I put the routes in a centralized [Route Config](https://reacttraining.com/react-router/web/example/route-config). You can setup your routes in the `./src/routes/index.ts`. For example:

```js
import RouteComponent from "../pages/RouteComponent";

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
        component: SubRouteComponent,
      },
    ],
  },
  // Other routes...
];
```

### Data Fetching from Server-side

Strongly recommend to write Redux actions and reducers via the [createSlice](https://redux-toolkit.js.org/api/createSlice) API of Redux Toolkit (start from the [tutorial](https://redux-toolkit.js.org/tutorials/basic-tutorial) if you are new). The starter using [axios](https://github.com/axios/axios) as the data fetcher, it's quite simple and easy to use. If the action is asynchronous then it will return a Promise (or a Promise.all) in the inner function.

Register the action(s) in the `./src/routes/index.ts`, which have to be called from server-side:

```js
export default [
  {
    path: "/top-path",
    exact: true,
    component: RouteComponent,
    // Async actions in the loadData function will be fetched from server-side
    // You can access the URL parameters, Redux store, HTTP request and response by the event object
    loadData: ({ params, getState, req, res }) => [
      myReduxAction(),
      // Add other pre-fetched actions...
    ],
  },
];
```

The action(s) will be dispatched through the `./src/server/ssr.tsx` on server-side:

```js
app.get("*", (req, res) => {
  // ...

  // Here's the method for loading data from server-side
  const loadBranchData = () => {
    const branch = matchRoutes(routes, req.path);

    const promises = branch.map(({ route, match }) => {
      if (route.loadData) {
        return Promise.all(
          route
            .loadData({
              params: match.params,
              getState: store.getState,
              req,
              res,
            })
            .map((item) => store.dispatch(item))
        );
      }

      return Promise.resolve(null);
    });

    return Promise.all(promises);
  };

  // ...
});
```

In client-side, don't forget to invoke the action(s) in `componentDidMount` or `useEffect` hook. This ensures that if the component is reached on the client, then the same actions will be invoked. It's up to the action(s) to figure out if fetches for data need to be made or not:

```js
// Use React class component
componentDidMount() {
  // Invoke your redux action(s) for client rendering
  this.props.myReduxAction();
}

// Use functional component
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
       |- index.js             // Wrap the route component into async component
       |- RouteComponent.tsx   // The route component
```

The `index.js` will be:

```js
import loadable from "@loadable/component";

import { Error, Loading } from "../../components";

// Import your async route component
const AsyncComponent = loadable(() => import("./AsyncComponent"), {
  // Loading component will be displayed when the component is being loaded
  fallback: <Loading />,
});

export default (props) => (
  // Wrap an <ErrorBoundary /> to catch the error of <AsyncComponent /> (via "componentDidCatch()" life cycle)
  <ErrorBoundary>
    <AsyncComponent {...props} />
  </ErrorBoundary>
);
```

Then you can [setup](#adding-routes) the route as usual.

> Note: I just show a general case route-based splitting, however you can even split your app by component-based depends on your need. For more advanced configuration you can refer to the [document](https://github.com/smooth-code/loadable-components) of loadable-components.

### Managing Title, Meta, Styles and Scripts

The `./src/app/index.tsx` (app root component) defines the base title and meta in a `<Helmet {...config.APP} />` component. Any sub-component can override/add properties (supports meta, link, script, style tags and html attributes). See the [react-helmet](https://github.com/nfl/react-helmet) document for more info.

### App Configuration

You can store app settings under the `./src/config`. By default the `default.ts` will be loaded. If the `process.env.NODE_ENV` matches to production, the `prod.ts` will be used instead, and it inherits the properties of `default.ts`.

You can access the correct configuration with:

```js
import config from "./config";
```

### Styles

The starter supports CSS, SASS and [CSS modules](https://github.com/css-Modules/css-Modules) is auto enabled for all files the `[name].module.*` naming convention. I use [PostCSS](https://github.com/postcss/postcss-loader) plugin to parse CSS and add autoprefixer to your stylesheet. You can access your stylesheet with two ways.

With CSS modules:

```js
import styles from "./styles.module.scss";

// ...

return (
  <div className={styles.myClass}>
    {/* The className matches one of CSS classes in your .scss file */}
    <Helmet title="My title" />
    {this.renderContent()}
  </div>
);
```

Without CSS modules:

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
import "../../theme/normalize.css"; // Import the vendor stylesheet first
import styles from "./styles.scss"; // Then your based stylesheet

const App = ({ route }) => (
  // ...
};
```

### Image and Font

It's super easy to render the image and font both on client and server, the usage would be like below.

Using image:

```js
import logo from "../static/logo.svg";

<img src={logo} alt="Logo" role="presentation" />;
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

```scss
$fa-font-path: "../node_modules/font-awesome/fonts";
@import "../node_modules/font-awesome/scss/font-awesome";

.icon-user {
  @extend .fa;
  @extend .fa-user;
}
```

### Boost App Performance

In this starter, you can see I use [React.PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent) and [React.memo](https://reactjs.org/blog/2018/10/23/react-v-16-6.html#reactmemo) to demonstrate the basic performance optimizing for React app. The two APIs are used in different ways.

- `React.PureComponent` is used for React class components. It can do shallow prop and state comparison for a performance boost:

```js
import React, { PureComponent } from "react";

class MyComponent extends PureComponent {
  // Only re-renders if props change
}
```

- `React.memo` is used for functional components. It plays the same role as `React.PureComponent`:

```js
import React, { memo } from "react";

const MyComponent = memo((props) => {
  // Only re-renders if props change
});
```

- In addition, you can also use React hooks like [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo) or [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback) to avoid expensive calculations on every render:

```js
import React, { useMemo, useCallback } from "react";

// Performance optimizing via useMemo()
const ParentComponent = (props) => (
  <div>
    {/* Only re-renders if "a" change */}
    {useMemo(
      () => (
        <ChildComponent someProp={a} />
      ),
      [a]
    )}
  </div>
);

// Performance optimizing via useCallback()
const ParentComponent = (props) => (
  <div>
    {/* Return a memorized callback that only changes if "a" changed */}
    {/* This is useful to prevent child component from unnecessary renders */}
    <ChildComponent
      callback={useCallback(() => {
        doSomething(a);
      }, [a])}
    />
  </div>
);
```

> For more performance optimizing techniques. Please see the [Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html) topic.

### TypeScript

[TypeScript](https://www.typescriptlang.org) is a typed super-set of JavaScript. It's getting more and more popular in the Front-end world. And being widely used by many libraries. If you are new to TypeScript, you can check out its document [here](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).

TypeScript has been integrated with our application to bring the following benefits:

- Type safety for components, reducers, state and actions.
- Many IDEs support the hints of TypeScript, which give us a superior developer experience.
- Easy refactoring of typed code.
- In general, more types less bugs. Read this [article](https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b) to learn more.

### Code and Style Lint

[ESLint](http://eslint.org) (With Airbnb configuration), [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint), [StyleLint](http://stylelint.io), [Prettier](https://prettier.io) and [lint-staged](https://github.com/okonet/lint-staged) are integrated into this starter to maintain a consistent code style and give you a elegant code formatting. You can configure your lint rules through the `.eslintrc`, `.stylelintrc` and `.prettierrc` files.

### Unit Testing

This starter use [Jest](https://facebook.github.io/jest) as the testing framework. We also use [React Testing Library](https://github.com/testing-library/react-testing-library) with [jest-dom](https://github.com/testing-library/jest-dom), give you a simple and complete React DOM testing utilities that encourage good testing practices.

Jest support the feature of [snapshot testing](https://jestjs.io/docs/en/snapshot-testing), which is very powerful for testing React component. Give it a try, you'll be impressed. The unit testing focus on three parts as below:

- Components
- Actions
- Reducers

By the way, Jest built-in code coverage reports, the report files are generated in the `./coverage` folder. You can configure the `./jest.config.js` to define which files that you want to cover. For example:

```js
module.exports = {
  collectCoverageFrom: [
    "src/pages/**/*.tsx", // Define the files, which want to be covered
    "!src/pages/index.ts", // The files will be ignored by code coverage
  ],
  // Other configurations...
};
```

You can also use [istanbul's ignore hints](https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes) to specify specific lines of code in a JavaScript file to skip code coverage.

### How to Deploy

To deploy you app to cloud service (e.g. AWS, GCP), you can follow the instructions below.

1. Build then install production dependencies:

```sh
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

```sh
yarn start
```

> Ideally, the above steps can be integrated into your CI. I recommend you to pack the `./yarn.lock` for yarn installation by CI.

## Troubleshooting

- If app crash due to the error: `Invariant Violation: loadable: SSR requires "@loadable/babel-plugin", please install it` (refer to this [issue](https://github.com/smooth-code/loadable-components/issues/173)). To solve that, you must use `.js` extension for code-splitting files (e.g. `./src/Home/index.js`).

- If you encounter the markup mismatches error (it's a React universal issue, which usually occurs due to the non-synchronized rendering result between client and server), you can do:

  - Restart the server to solve it.
  - Or for v16.1.0 up, you can use `suppressHydrationWarning` attribute for intentional client/server text mismatches ([#11126](https://github.com/facebook/react/pull/11126)).

- If you are on windows and encounter the following error: Expected linebreaks to be 'LF' but found 'CRLF' linebreak-style. The following rule must be added to `.eslintrc`.

```
// ...
"rules": {
  "linebreak-style": "off",
  // Other rules...
}
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://wellyshen.com"><img src="https://avatars1.githubusercontent.com/u/21308003?v=4" width="100px;" alt=""/><br /><sub><b>Welly</b></sub></a><br /><a href="https://github.com/wellyshen/react-cool-starter/commits?author=wellyshen" title="Code">💻</a> <a href="https://github.com/wellyshen/react-cool-starter/commits?author=wellyshen" title="Documentation">📖</a> <a href="#maintenance-wellyshen" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/Microflow"><img src="https://avatars1.githubusercontent.com/u/15410443?v=4" width="100px;" alt=""/><br /><sub><b>Microflow</b></sub></a><br /><a href="#translation-Microflow" title="Translation">🌍</a></td>
    <td align="center"><a href="http://bacchetta.co/"><img src="https://avatars0.githubusercontent.com/u/12591890?v=4" width="100px;" alt=""/><br /><sub><b>Jason Bacchetta</b></sub></a><br /><a href="#tool-jabacchetta" title="Tools">🔧</a></td>
    <td align="center"><a href="https://github.com/xakep139"><img src="https://avatars2.githubusercontent.com/u/6381023?v=4" width="100px;" alt=""/><br /><sub><b>Nikita Balabaev</b></sub></a><br /><a href="https://github.com/wellyshen/react-cool-starter/commits?author=xakep139" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jmsherry"><img src="https://avatars1.githubusercontent.com/u/697341?v=4" width="100px;" alt=""/><br /><sub><b>James Sherry</b></sub></a><br /><a href="#infra-jmsherry" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/wellyshen/react-cool-starter/issues?q=author%3Ajmsherry" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/zace"><img src="https://avatars0.githubusercontent.com/u/3301615?v=4" width="100px;" alt=""/><br /><sub><b>Zack Pelz</b></sub></a><br /><a href="#translation-zace" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/apapacy"><img src="https://avatars3.githubusercontent.com/u/4279840?v=4" width="100px;" alt=""/><br /><sub><b>apapacy</b></sub></a><br /><a href="https://github.com/wellyshen/react-cool-starter/commits?author=apapacy" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/martin2786"><img src="https://avatars3.githubusercontent.com/u/2111808?v=4" width="100px;" alt=""/><br /><sub><b>martin2786</b></sub></a><br /><a href="https://github.com/wellyshen/react-cool-starter/commits?author=martin2786" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/iamacup"><img src="https://avatars2.githubusercontent.com/u/12894620?v=4" width="100px;" alt=""/><br /><sub><b>iamacup</b></sub></a><br /><a href="#tool-iamacup" title="Tools">🔧</a></td>
    <td align="center"><a href="http://zhogov.me/"><img src="https://avatars1.githubusercontent.com/u/5165362?v=4" width="100px;" alt=""/><br /><sub><b>Maxim</b></sub></a><br /><a href="#tool-forwardomg" title="Tools">🔧</a></td>
    <td align="center"><a href="http://stackoverflow.com/users/451634/benny-neugebauer"><img src="https://avatars3.githubusercontent.com/u/469989?v=4" width="100px;" alt=""/><br /><sub><b>Benny Neugebauer</b></sub></a><br /><a href="#translation-bennyn" title="Translation">🌍</a></td>
    <td align="center"><a href="https://lapkov.com"><img src="https://avatars2.githubusercontent.com/u/12545211?v=4" width="100px;" alt=""/><br /><sub><b> A. S. Lapkov</b></sub></a><br /><a href="https://github.com/wellyshen/react-cool-starter/commits?author=aslapkov" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/alirezavalizade"><img src="https://avatars0.githubusercontent.com/u/14992757?v=4" width="100px;" alt=""/><br /><sub><b>Alireza Valizade</b></sub></a><br /><a href="https://github.com/wellyshen/react-cool-starter/commits?author=alirezavalizade" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Rid"><img src="https://avatars2.githubusercontent.com/u/3407496?v=4" width="100px;" alt=""/><br /><sub><b>Grant Millar</b></sub></a><br /><a href="https://github.com/wellyshen/react-cool-starter/issues?q=author%3ARid" title="Bug reports">🐛</a> <a href="https://github.com/wellyshen/react-cool-starter/commits?author=Rid" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/BJvdA"><img src="https://avatars3.githubusercontent.com/u/9120530?v=4" width="100px;" alt=""/><br /><sub><b>Bart</b></sub></a><br /><a href="https://github.com/wellyshen/react-cool-starter/issues?q=author%3ABJvdA" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://stackoverflow.com/users/3078890/morteza-tourani"><img src="https://avatars2.githubusercontent.com/u/2953251?v=4" width="100px;" alt=""/><br /><sub><b>Morteza Tourani</b></sub></a><br /><a href="https://github.com/wellyshen/react-cool-starter/commits?author=MortezaT" title="Code">💻</a></td>
    <td align="center"><a href="http://www.tomkiernan.co.uk"><img src="https://avatars2.githubusercontent.com/u/13321712?v=4" width="100px;" alt=""/><br /><sub><b>Tom Kiernan</b></sub></a><br /><a href="#translation-tomkiernan120" title="Translation">🌍</a></td>
    <td align="center"><a href="https://nkremer.fr"><img src="https://avatars0.githubusercontent.com/u/14862690?v=4" width="100px;" alt=""/><br /><sub><b>Nathan KREMER</b></sub></a><br /><a href="https://github.com/wellyshen/react-cool-starter/commits?author=xD3CODER" title="Code">💻</a></td>
    <td align="center"><a href="https://twitter.com/amerllica"><img src="https://avatars0.githubusercontent.com/u/10472437?v=4" width="100px;" alt=""/><br /><sub><b>Amer Lotfi Orimi</b></sub></a><br /><a href="#tool-amerllica" title="Tools">🔧</a> <a href="https://github.com/wellyshen/react-cool-starter/commits?author=amerllica" title="Code">💻</a></td>
    <td align="center"><a href="https://w3debugger.com"><img src="https://avatars2.githubusercontent.com/u/6707482?v=4" width="100px;" alt=""/><br /><sub><b>Muhammad Umar</b></sub></a><br /><a href="https://github.com/wellyshen/react-cool-starter/commits?author=w3debugger" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/denny64"><img src="https://avatars1.githubusercontent.com/u/9099997?v=4" width="100px;" alt=""/><br /><sub><b>Denny Vuong</b></sub></a><br /><a href="https://github.com/wellyshen/react-cool-starter/commits?author=denny64" title="Documentation">📖</a> <a href="https://github.com/wellyshen/react-cool-starter/commits?author=denny64" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://mattcarlotta.io"><img src="https://avatars1.githubusercontent.com/u/22607722?v=4" width="100px;" alt=""/><br /><sub><b>Matt Carlotta</b></sub></a><br /><a href="https://github.com/wellyshen/react-cool-starter/commits?author=mattcarlotta" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
