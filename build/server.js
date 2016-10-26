module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("react-helmet");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("immutable");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("chalk");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("react-immutable-proptypes");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("react-redux");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

if (false) {
  /* istanbul ignore next */
  module.exports = require('./default');
} else {
  /* istanbul ignore next */
  module.exports = __webpack_require__(26);
}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return USERS_INVALID; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return USERS_REQUESTING; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return USERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return USERS_FAILURE; });
/* unused harmony export fetchData */
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return fetchDataIfNeeded; });
var USERS_INVALID = 'USERS_INVALID';
var USERS_REQUESTING = 'USERS_REQUESTING';
var USERS_SUCCESS = 'USERS_SUCCESS';
var USERS_FAILURE = 'USERS_FAILURE';

var API_URL = 'https://jsonplaceholder.typicode.com/users';

// Export this function for testing
var fetchData = function fetchData(axios) {
  return function (dispatch) {
    dispatch({ type: USERS_REQUESTING });

    return axios.get(API_URL).then(function (res) {
      dispatch({ type: USERS_SUCCESS, data: res.data });
    }).catch(function (err) {
      dispatch({ type: USERS_FAILURE, err: err });
    });
  };
};

// Preventing dobule fetching data
/* istanbul ignore next */
var shouldFetchData = function shouldFetchData(state) {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  /* istanbul ignore next */
  if (false) return true;

  /* istanbul ignore next */
  var home = state.get('home');

  /* istanbul ignore next */
  if (home.get('readyState') === USERS_SUCCESS) return false; // Preventing double fetching data

  /* istanbul ignore next */
  return true;
};

/* istanbul ignore next */
var fetchDataIfNeeded = function fetchDataIfNeeded() {
  return function (dispatch, getState, axios) {
    /* istanbul ignore next */
    if (shouldFetchData(getState())) {
      /* istanbul ignore next */
      return dispatch(fetchData(axios));
    }

    /* istanbul ignore next */
    return null;
  };
};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AN_USER_REQUESTING; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return AN_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return AN_USER_FAILURE; });
/* unused harmony export fetchData */
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return fetchDataIfNeeded; });
var AN_USER_REQUESTING = 'AN_USER_REQUESTING';
var AN_USER_SUCCESS = 'AN_USER_SUCCESS';
var AN_USER_FAILURE = 'AN_USER_FAILURE';

var API_URL = 'https://jsonplaceholder.typicode.com/users';

// Export this function for testing
var fetchData = function fetchData(userId, axios) {
  return function (dispatch) {
    dispatch({ type: AN_USER_REQUESTING, userId: userId });

    return axios.get(API_URL + '/' + userId).then(function (res) {
      dispatch({ type: AN_USER_SUCCESS, userId: userId, data: res.data });
    }).catch(function (err) {
      dispatch({ type: AN_USER_FAILURE, userId: userId, err: err });
    });
  };
};

// Using for preventing dobule fetching data
/* istanbul ignore next */
var shouldFetchData = function shouldFetchData(state, userId) {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  /* istanbul ignore next */
  if (false) return true;

  /* istanbul ignore next */
  var userInfo = state.getIn(['userInfo', userId]);

  // Preventing dobule fetching data in production
  /* istanbul ignore next */
  if (userInfo && userInfo.get('readyState') === AN_USER_SUCCESS) return false;

  /* istanbul ignore next */
  return true;
};

/* istanbul ignore next */
var fetchDataIfNeeded = function fetchDataIfNeeded(userId) {
  return function (dispatch, getState, axios) {
    /* istanbul ignore next */
    if (shouldFetchData(getState(), userId)) {
      /* istanbul ignore next */
      return dispatch(fetchData(userId, axios));
    }

    /* istanbul ignore next */
    return null;
  };
};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_immutable__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_redux__);
/* harmony export (immutable) */ exports["b"] = createReducer;
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return injectReducer; });

/* eslint new-cap:0 */





// Initial routing state
var routeInitialState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["fromJS"])({
  locationBeforeTransitions: null
});

// Merge route into the global application state (react-router-redux + immutable)
var routing = function routing() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : routeInitialState;
  var action = arguments[1];

  if (action.type === __WEBPACK_IMPORTED_MODULE_3_react_router_redux__["LOCATION_CHANGE"]) {
    return state.merge({
      locationBeforeTransitions: action.payload
    });
  }

  return state;
};

function createReducer(asyncReducers) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_immutable__["combineReducers"])(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    routing: routing,
    // Register the inital async reducers, otherwise you will get the warning of Redux
    home: function home() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["Map"])({});
      return state;
    },
    userInfo: function userInfo() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["Map"])({});
      return state;
    }
  }, asyncReducers));
}

/* eslint-disable */
// Using for injecting the async reducers
var injectReducer = function injectReducer(store, name, reducer) {
  store.asyncReducers[name] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
};
/* eslint-enable */

/***/ },
/* 11 */
/***/ function(module, exports) {



/***/ },
/* 12 */
/***/ function(module, exports) {



/***/ },
/* 13 */
/***/ function(module, exports) {



/***/ },
/* 14 */
/***/ function(module, exports) {



/***/ },
/* 15 */
/***/ function(module, exports) {



/***/ },
/* 16 */
/***/ function(module, exports) {



/***/ },
/* 17 */
/***/ function(module, exports) {



/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("react-router");

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = require("react-router-redux");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_source_map_support_register__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_source_map_support_register___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_source_map_support_register__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_morgan__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_compression__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_helmet__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hpp__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hpp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hpp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_serve_favicon__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_serve_favicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_serve_favicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom_server__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_router_redux__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_chalk__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__routes__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__redux_store__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__util_helpers__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__util_helpers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__util_helpers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__util_renderHtmlPage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__config__);

// Useful for debugging node.js code that has been bundled with Webpack





















var app = __WEBPACK_IMPORTED_MODULE_4_express___default()();

// Using helmet to secure Express with various HTTP headers
app.use(__WEBPACK_IMPORTED_MODULE_6_helmet___default()());
// Prevent HTTP parameter pollution.
app.use(__WEBPACK_IMPORTED_MODULE_7_hpp___default()());
// Compress all requests
app.use(__WEBPACK_IMPORTED_MODULE_5_compression___default()());

// Use morgan for http request debug (only show error)
app.use(__WEBPACK_IMPORTED_MODULE_3_morgan___default()('dev', { skip: function skip(req, res) {
    return res.statusCode < 400;
  } }));
app.use(__WEBPACK_IMPORTED_MODULE_8_serve_favicon___default()(__WEBPACK_IMPORTED_MODULE_2_path___default.a.join(process.cwd(), './build/public/favicon.ico')));
app.use(__WEBPACK_IMPORTED_MODULE_4_express___default.a.static(__WEBPACK_IMPORTED_MODULE_2_path___default.a.join(process.cwd(), './build/public')));

// Run express as webpack dev server
if (false) {
  var webpack = require('webpack');
  var webpackConfig = require('../tools/webpack/webpack.client.babel');

  var compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    stats: { colors: true }
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

// Register server-side rendering middleware
app.get('*', function (req, res) {
  if (false) webpackIsomorphicTools.refresh();

  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__redux_store__["a" /* default */])();

  // If __DISABLE_SSR__ = true, disable server side rendering
  if (__DISABLE_SSR__) {
    res.send(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__util_renderHtmlPage__["a" /* default */])(store));
    return;
  }

  var memoryHistory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_react_router__["createMemoryHistory"])(req.url);
  var routes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__routes__["a" /* default */])(store);
  var history = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_react_router_redux__["syncHistoryWithStore"])(memoryHistory, store, {
    selectLocationState: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_17__util_helpers__["createSelectLocationState"])('routing')
  });

  // eslint-disable-next-line max-len
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_react_router__["match"])({ history: history, routes: routes, location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (!renderProps) {
      res.sendStatus(404);
    } else {
      // Dispatch the initial action of each container first
      var promises = renderProps.components.filter(function (component) {
        return component.fetchData;
      }).map(function (component) {
        return component.fetchData(store.dispatch, renderProps.params);
      });

      // Then render the routes
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(promises).then(function () {
        var content = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11_react_redux__["Provider"],
          { store: store },
          __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_react_router__["RouterContext"], renderProps)
        ));

        res.status(200).send(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18__util_renderHtmlPage__["a" /* default */])(store, content));
      }).catch(function (err) {
        console.error('==> \uD83D\uDE2D  Rendering routes error: ' + err);
      });
    }
  });
});

if (__WEBPACK_IMPORTED_MODULE_19__config___default.a.port) {
  app.listen(__WEBPACK_IMPORTED_MODULE_19__config___default.a.port, __WEBPACK_IMPORTED_MODULE_19__config___default.a.host, function (err) {
    if (err) console.error('==> \uD83D\uDE2D  OMG!!! ' + err);

    console.info(__WEBPACK_IMPORTED_MODULE_14_chalk___default.a.green('==> \uD83C\uDF0E  Listening at http://' + __WEBPACK_IMPORTED_MODULE_19__config___default.a.host + ':' + __WEBPACK_IMPORTED_MODULE_19__config___default.a.port));
    // Open Chrome
    __webpack_require__(37).default(__WEBPACK_IMPORTED_MODULE_19__config___default.a.port);
  });
} else {
  console.error(__WEBPACK_IMPORTED_MODULE_14_chalk___default.a.red('==> 😭  OMG!!! No PORT environment variable has been specified'));
}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_immutable_proptypes__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_immutable_proptypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_immutable_proptypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_scss__);





var UserCard = function UserCard(_ref) {
  var info = _ref.info;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.UserCard },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h4',
      null,
      'User Card'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'Name: ',
        info.get('name')
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'Phone: ',
        info.get('phone')
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'Email: ',
        info.get('email')
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        'Website: ',
        info.get('website')
      )
    )
  );
};

UserCard.propTypes = {
  info: __WEBPACK_IMPORTED_MODULE_1_react_immutable_proptypes___default.a.map.isRequired
};

/* harmony default export */ exports["a"] = UserCard;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_immutable_proptypes__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_immutable_proptypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_immutable_proptypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_scss__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_scss__);






var UserList = function UserList(_ref) {
  var list = _ref.list;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_3__styles_scss___default.a.UserList },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h4',
      null,
      'User List'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      null,
      list.map(function (user) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { key: user.get('id') },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_router__["Link"],
            { to: '/UserInfo/' + user.get('id') },
            user.get('name')
          )
        );
      })
    )
  );
};

UserList.propTypes = {
  list: __WEBPACK_IMPORTED_MODULE_1_react_immutable_proptypes___default.a.list.isRequired
};

/* harmony default export */ exports["a"] = UserList;

/***/ },
/* 25 */
/***/ function(module, exports) {

module.exports = {
  host: 'localhost',
  port: 3000,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'React Cool Starter',
    titleTemplate: 'React Cool Starter - %s',
    meta: [{ name: 'description', content: 'The best react universal starter boilerplate in the world.' }]
  }
};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);

var defaultConfig = __webpack_require__(25);

var config = {
  // Over write default settings here...
};

module.exports = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, defaultConfig, config);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_normalize_css__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__theme_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_scss__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_scss__);







var App = function App(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_4__styles_scss___default.a.App },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, __WEBPACK_IMPORTED_MODULE_2__config___default.a.app),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_4__styles_scss___default.a.header },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __webpack_require__(38), alt: 'Logo', role: 'presentation', width: '70' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        __WEBPACK_IMPORTED_MODULE_2__config___default.a.app.title
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
    children
  );
};

App.propTypes = { children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node };

/* harmony default export */ exports["a"] = App;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_immutable_proptypes__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_immutable_proptypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_immutable_proptypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_addons_shallow_compare__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_addons_shallow_compare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_addons_shallow_compare__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_helmet__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__action__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_UserList__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__styles_scss__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__styles_scss__);
















var Home = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Home, _Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Home.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Home)).call.apply(_ref, [this].concat(args))), _this), _this.displayUserList = function () {
      var home = _this.props.home;


      if (!home.get('readyState') || home.get('readyState') === __WEBPACK_IMPORTED_MODULE_11__action__["a" /* USERS_INVALID */] || home.get('readyState') === __WEBPACK_IMPORTED_MODULE_11__action__["b" /* USERS_REQUESTING */]) {
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'p',
          null,
          'Loading...'
        );
      }

      if (home.get('readyState') === __WEBPACK_IMPORTED_MODULE_11__action__["c" /* USERS_FAILURE */]) {
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'p',
          null,
          'Oops, Failed to load list!'
        );
      }

      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_UserList__["a" /* default */], { list: home.get('list') });
    }, _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;

      // Fetching data for client side rendering

      Home.fetchData(dispatch);
    }

    // Prevent the components which with the same props and state are rendered repeatly

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return __WEBPACK_IMPORTED_MODULE_8_react_addons_shallow_compare___default()(this, nextProps, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_13__styles_scss___default.a.Home },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_react_helmet___default.a, { title: 'Home' }),
        this.displayUserList()
      );
    }
  }], [{
    key: 'fetchData',

    // Fetching data method for both server/client side rendering
    value: function fetchData(dispatch) {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all([dispatch(__WEBPACK_IMPORTED_MODULE_11__action__["d" /* fetchDataIfNeeded */]())]);
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

Home.propTypes = {
  home: __WEBPACK_IMPORTED_MODULE_7_react_immutable_proptypes___default.a.map,
  dispatch: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].func
};

var mapStateToProps = function mapStateToProps(state) {
  return { home: state.get('home') };
};

/* harmony default export */ exports["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react_redux__["connect"])(mapStateToProps)(Home);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__action__ = __webpack_require__(8);
/* eslint new-cap:0 */




var initialState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({
  readyState: __WEBPACK_IMPORTED_MODULE_1__action__["a" /* USERS_INVALID */],
  list: null
});

/* harmony default export */ exports["default"] = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__action__["b" /* USERS_REQUESTING */]:
      return state.merge({
        readyState: __WEBPACK_IMPORTED_MODULE_1__action__["b" /* USERS_REQUESTING */]
      });
    case __WEBPACK_IMPORTED_MODULE_1__action__["c" /* USERS_FAILURE */]:
      return state.merge({
        readyState: __WEBPACK_IMPORTED_MODULE_1__action__["c" /* USERS_FAILURE */],
        err: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])(action.err)
      });
    case __WEBPACK_IMPORTED_MODULE_1__action__["e" /* USERS_SUCCESS */]:
      return state.merge({
        readyState: __WEBPACK_IMPORTED_MODULE_1__action__["e" /* USERS_SUCCESS */],
        list: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])(action.data)
      });
    default:
      return state;
  }
};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_scss__);





/* harmony default export */ exports["default"] = function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_2__styles_scss___default.a.NotFound },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, { title: 'Oops' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      'Oops, Page was not found!'
    )
  );
};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_immutable_proptypes__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_immutable_proptypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_immutable_proptypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_addons_shallow_compare__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_addons_shallow_compare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_addons_shallow_compare__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_helmet__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__action__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_UserCard__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__styles_scss__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__styles_scss__);
















var UserInfo = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(UserInfo, _Component);

  function UserInfo() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, UserInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = UserInfo.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(UserInfo)).call.apply(_ref, [this].concat(args))), _this), _this.displayUserCard = function () {
      var _this$props = _this.props;
      var userInfo = _this$props.userInfo;
      var params = _this$props.params;

      var userInfoById = userInfo.get(params.id);

      if (!userInfoById || userInfoById.get('readyState') === __WEBPACK_IMPORTED_MODULE_11__action__["a" /* AN_USER_REQUESTING */]) {
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'p',
          null,
          'Loading...'
        );
      }

      if (userInfoById.get('readyState') === __WEBPACK_IMPORTED_MODULE_11__action__["b" /* AN_USER_FAILURE */]) {
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'p',
          null,
          'Oops, Failed to load info!'
        );
      }

      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_UserCard__["a" /* default */], { info: userInfoById.get('info') });
    }, _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(UserInfo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var dispatch = _props.dispatch;
      var params = _props.params;

      // Fetching data for client side rendering

      UserInfo.fetchData(dispatch, params);
    }

    // Prevent the components which with the same props and state are rendered repeatly

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return __WEBPACK_IMPORTED_MODULE_8_react_addons_shallow_compare___default()(this, nextProps, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_13__styles_scss___default.a.UserInfo },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_react_helmet___default.a, { title: 'User Info' }),
        this.displayUserCard()
      );
    }
  }], [{
    key: 'fetchData',

    // Fetching data method for both server/client side rendering
    value: function fetchData(dispatch, params) {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all([dispatch(__WEBPACK_IMPORTED_MODULE_11__action__["c" /* fetchDataIfNeeded */](params.id))]);
    }
  }]);

  return UserInfo;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

UserInfo.propTypes = {
  dispatch: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].func,
  params: __WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].objectOf(__WEBPACK_IMPORTED_MODULE_6_react__["PropTypes"].string),
  userInfo: __WEBPACK_IMPORTED_MODULE_7_react_immutable_proptypes___default.a.map
};

var mapStateToProps = function mapStateToProps(state) {
  return { userInfo: state.get('userInfo') };
};

/* harmony default export */ exports["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react_redux__["connect"])(mapStateToProps)(UserInfo);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__action__ = __webpack_require__(9);

/* eslint new-cap:0 */




/* harmony default export */ exports["default"] = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["Map"])({});
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_2__action__["a" /* AN_USER_REQUESTING */]:
      return state.merge(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, action.userId, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["Map"])({
        readyState: __WEBPACK_IMPORTED_MODULE_2__action__["a" /* AN_USER_REQUESTING */]
      })));
    case __WEBPACK_IMPORTED_MODULE_2__action__["b" /* AN_USER_FAILURE */]:
      return state.merge(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, action.userId, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["Map"])({
        readyState: __WEBPACK_IMPORTED_MODULE_2__action__["b" /* AN_USER_FAILURE */],
        err: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])(action.err)
      })));
    case __WEBPACK_IMPORTED_MODULE_2__action__["d" /* AN_USER_SUCCESS */]:
      return state.merge(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, action.userId, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["Map"])({
        readyState: __WEBPACK_IMPORTED_MODULE_2__action__["d" /* AN_USER_SUCCESS */],
        info: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])(action.data)
      })));
    default:
      return state;
  }
};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chalk__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers__ = __webpack_require__(10);







/* harmony default export */ exports["a"] = function (initialState) {
  var middlewares = [__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a.withExtraArgument(__WEBPACK_IMPORTED_MODULE_3_axios___default.a)];

  var enhancers = [__WEBPACK_IMPORTED_MODULE_1_redux__["applyMiddleware"].apply(undefined, middlewares),  false ? window.devToolsExtension() : function (f) {
    return f;
  }];

  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducers__["b" /* default */])(), initialState, __WEBPACK_IMPORTED_MODULE_1_redux__["compose"].apply(undefined, enhancers));

  store.asyncReducers = {}; // Async reducer registry

  if (false) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', function () {
      try {
        // eslint-disable-next-line import/newline-after-import
        var reducers = require('./reducers').default;
        store.replaceReducer(reducers(store.asyncReducers));
      } catch (error) {
        console.error(chalk.red('==> \uD83D\uDE2D  Reducer hot reloading error ' + error));
      }
    });
  }

  return store;
};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_reducers__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_App__ = __webpack_require__(27);
/* harmony export (immutable) */ exports["a"] = createRoutes;






var errorLoading = function errorLoading(err) {
  console.error(__WEBPACK_IMPORTED_MODULE_2_chalk___default.a.red('==> \uD83D\uDE2D  Dynamic page loading failed ' + err));
};

var loadModule = function loadModule(cb) {
  return function (Component) {
    cb(null, Component.default);
  };
};

function createRoutes(store) {
  return {
    component: __WEBPACK_IMPORTED_MODULE_4__containers_App__["a" /* default */],
    childRoutes: [{
      path: '/',
      getComponent: function getComponent(nextState, cb) {
        var importModules = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.all([Promise.resolve().then(__webpack_require__.bind(null, 28)), Promise.resolve().then(__webpack_require__.bind(null, 29))]);

        var renderRoute = loadModule(cb);

        importModules.then(function (_ref) {
          var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref, 2);

          var Component = _ref2[0];
          var reducer = _ref2[1];

          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__redux_reducers__["a" /* injectReducer */])(store, 'home', reducer.default);

          renderRoute(Component);
        }).catch(errorLoading);
      }
    }, {
      path: '/UserInfo/:id',
      getComponent: function getComponent(nextState, cb) {
        var importModules = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.all([Promise.resolve().then(__webpack_require__.bind(null, 31)), Promise.resolve().then(__webpack_require__.bind(null, 32))]);

        var renderRoute = loadModule(cb);

        importModules.then(function (_ref3) {
          var _ref4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref3, 2);

          var Component = _ref4[0];
          var reducer = _ref4[1];

          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__redux_reducers__["a" /* injectReducer */])(store, 'userInfo', reducer.default);

          renderRoute(Component);
        }).catch(errorLoading);
      }
    }, {
      path: '*',
      getComponent: function getComponent(location, cb) {
        Promise.resolve().then(__webpack_require__.bind(null, 30)).then(loadModule(cb)).catch(errorLoading);
      }
    }]
  };
}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);



// The fake store creator for testing Components

function storeFake(state) {
  return {
    default: function _default() {},
    subscribe: function subscribe() {},
    dispatch: function dispatch() {},
    getState: function getState() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, state));
    }
  };
}

// Create enhanced history object for router

function createSelectLocationState(reducerName) {
  var prevRoutingState = void 0;
  var prevRoutingStateJS = void 0;

  return function (state) {
    var routingState = state.get(reducerName); // or state.routing

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
}

module.exports = {
  storeFake: storeFake,
  createSelectLocationState: createSelectLocationState
};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_serialize_javascript__);




/* harmony default export */ exports["a"] = function (store, content) {
  var head = __WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a.rewind();
  var assets = webpackIsomorphicTools.assets();

  // Setup html page
  return '\n    <!DOCTYPE html>\n    <html ' + head.htmlAttributes.toString() + '>\n      <head>\n        <meta charset="utf-8" />\n        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />\n        <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n        <meta http-equiv="Content-Language" content="en" />\n        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />\n\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n\n        ' +
  /* Styles will be presented in production with webpack extract text plugin */
  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(assets.styles).map(function (style) {
    return '<link href="' + assets.styles[style] + '" media="screen, projection" rel="stylesheet" type="text/css" />';
  }).join('\n') + '\n\n        ' + (
  /* Styles will be presented in development mode
     I put all of the styles here to smoothen the flick */
  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(assets.styles).length === 0 ? '<style>' + (__webpack_require__(17)._style + __webpack_require__(13)._style + __webpack_require__(14)._style + __webpack_require__(16)._style + __webpack_require__(15)._style + __webpack_require__(12)._style + __webpack_require__(11)._style) + '</style>' : '') + '\n      </head>\n      <body>\n        <div id="react-view">' + (content || '') + '</div>\n\n        <script type="text/javascript">\n          ' + (store && 'window.__INITIAL_STATE__=' + __WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default()(store.getState())) + '\n        </script>\n\n        <!--[if gte IE 9 ]>\n          <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.9/es5-shim.min.js"></script>\n          <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.9/es5-sham.min.js"></script>\n        <![endif]-->\n\n        ' +
  /* Reverse the order of scripts for accessing vendor.js first */
  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(assets.javascript).reverse().map(function (script) {
    return '<script src="' + assets.javascript[script] + '"></script>';
  }).join('\n') + '\n        ' + head.script.toString() + '\n      </body>\n    </html>\n  ';
};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_child_process__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_child_process___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_child_process__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_opn__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_opn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_opn__);
// Modified from FB's create-react-app





/* harmony default export */ exports["default"] = function (port) {
  if (process.platform === 'darwin') {
    try {
      // Try our best to reuse existing tab
      // on OS X Google Chrome with AppleScript
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_child_process__["execSync"])('ps cax | grep "Google Chrome"');
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_child_process__["execSync"])('osascript ' + __WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, './openChrome.applescript') + ' http://localhost:' + port + '/');
      return true;
    } catch (err) {
      // Ignore errors.
    }
  }
  // Fallback to opn
  try {
    __WEBPACK_IMPORTED_MODULE_2_opn___default()('http://localhost:' + port + '/');
    return true;
  } catch (err) {
    return false;
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, "tools/openBrowser"))

/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjAiIHk9IjAiIHdpZHRoPSI1NzAiIGhlaWdodD0iNTEwIiB2aWV3Qm94PSIwLCAwLCA1NzAsIDUxMCI+CiAgPGcgaWQ9IkJhY2tncm91bmQiPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjU3MCIgaGVpZ2h0PSI1MTAiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMCIvPgogIDwvZz4KICA8ZyBpZD0iTGF5ZXJfMSI+CiAgICA8cGF0aCBkPSJNMzM0LjY5NiwyNTQuNjI4IEMzMzQuNjk2LDI4Mi4zMzQgMzEyLjIzNSwzMDQuNzk1IDI4NC41MjksMzA0Ljc5NSBDMjU2LjgyMywzMDQuNzk1IDIzNC4zNjIsMjgyLjMzNCAyMzQuMzYyLDI1NC42MjggQzIzNC4zNjIsMjI2LjkyMiAyNTYuODIzLDIwNC40NjEgMjg0LjUyOSwyMDQuNDYxIEMzMTIuMjM1LDIwNC40NjEgMzM0LjY5NiwyMjYuOTIyIDMzNC42OTYsMjU0LjYyOCB6IiBmaWxsPSIjMDBEOEZGIi8+CiAgICA8cGF0aCBkPSJNMjg0LjUyOSwxNTIuNjI4IEMzNTEuODg1LDE1Mi42MjggNDE0LjQ1NywxNjIuMjkzIDQ2MS42MzYsMTc4LjUzNSBDNTE4LjQ4LDE5OC4xMDQgNTUzLjQzLDIyNy43NjggNTUzLjQzLDI1NC42MjggQzU1My40MywyODIuNjE5IDUxNi4zODksMzE0LjEzMSA0NTUuMzQ3LDMzNC4zNTYgQzQwOS4xOTYsMzQ5LjY0NyAzNDguNDY4LDM1Ny42MjggMjg0LjUyOSwzNTcuNjI4IEMyMTguOTc1LDM1Ny42MjggMTU2Ljg5OSwzNTAuMTM2IDExMC4yMzksMzM0LjE4NyBDNTEuMTkzLDMxNC4wMDUgMTUuNjI4LDI4Mi4wODQgMTUuNjI4LDI1NC42MjggQzE1LjYyOCwyMjcuOTg2IDQ4Ljk5OCwxOTguNTUyIDEwNS4wNDMsMTc5LjAxMiBDMTUyLjM5OCwxNjIuNTAzIDIxNi41MTUsMTUyLjYyOCAyODQuNTI5LDE1Mi42MjggeiIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9IiMwMEQ4RkYiIHN0cm9rZS13aWR0aD0iMjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgogICAgPHBhdGggZD0iTTE5NS43MzYsMjAzLjkyMiBDMjI5LjM4NSwxNDUuNTc0IDI2OS4wMTcsOTYuMTk4IDMwNi42NTYsNjMuNDQyIEMzNTIuMDA2LDIzLjk3NiAzOTUuMTYzLDguNTE5IDQxOC40MzEsMjEuOTM3IEM0NDIuNjc5LDM1LjkyIDQ1MS40NzMsODMuNzUxIDQzOC40OTgsMTQ2LjczMyBDNDI4LjY4OCwxOTQuMzUxIDQwNS4yNjQsMjUwLjk0NSAzNzMuMzIyLDMwNi4zMzQgQzM0MC41NzMsMzYzLjEyMiAzMDMuMDcyLDQxMy4xNTMgMjY1Ljk0NSw0NDUuNjA2IEMyMTguOTY0LDQ4Ni42NzQgMTczLjU0NSw1MDEuNTM1IDE0OS43Niw0ODcuODE5IEMxMjYuNjgxLDQ3NC41MDkgMTE3Ljg1NCw0MzAuODk4IDEyOC45MjYsMzcyLjU4NiBDMTM4LjI4MSwzMjMuMzE2IDE2MS43NTgsMjYyLjg0MSAxOTUuNzM2LDIwMy45MjIgeiIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9IiMwMEQ4RkYiIHN0cm9rZS13aWR0aD0iMjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgogICAgPHBhdGggZD0iTTE5NS44MjEsMzA2LjQ4MiBDMTYyLjA3NSwyNDguMTkgMTM5LjA5LDE4OS4xOTUgMTI5LjUwOSwxNDAuMjI3IEMxMTcuOTY1LDgxLjIyOCAxMjYuMTI3LDM2LjExOCAxNDkuMzczLDIyLjY2MSBDMTczLjU5Nyw4LjYzNyAyMTkuNDI4LDI0LjkwNSAyNjcuNTEzLDY3LjYwMSBDMzAzLjg2OSw5OS44ODEgMzQxLjIwMSwxNDguNDM4IDM3My4yMzYsMjAzLjc3NCBDNDA2LjA4LDI2MC41MDcgNDMwLjY5NywzMTcuOTgzIDQ0MC4yNzIsMzY2LjM1NiBDNDUyLjM4OSw0MjcuNTY5IDQ0Mi41ODEsNDc0LjM0IDQxOC44MTksNDg4LjA5NiBDMzk1Ljc2Miw1MDEuNDQ0IDM1My41Nyw0ODcuMzEyIDMwOC41OCw0NDguNTk3IEMyNzAuNTY3LDQxNS44ODYgMjI5Ljg5OCwzNjUuMzQ0IDE5NS44MjEsMzA2LjQ4MiB6IiBmaWxsLW9wYWNpdHk9IjAiIHN0cm9rZT0iIzAwRDhGRiIgc3Ryb2tlLXdpZHRoPSIyNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CiAgPC9nPgo8L3N2Zz4K"

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = require("axios");

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ },
/* 41 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ },
/* 49 */
/***/ function(module, exports) {

module.exports = require("child_process");

/***/ },
/* 50 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 51 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 52 */
/***/ function(module, exports) {

module.exports = require("helmet");

/***/ },
/* 53 */
/***/ function(module, exports) {

module.exports = require("hpp");

/***/ },
/* 54 */
/***/ function(module, exports) {

module.exports = require("morgan");

/***/ },
/* 55 */
/***/ function(module, exports) {

module.exports = require("opn");

/***/ },
/* 56 */
/***/ function(module, exports) {

module.exports = require("react-addons-shallow-compare");

/***/ },
/* 57 */
/***/ function(module, exports) {

module.exports = require("react-dom/server");

/***/ },
/* 58 */
/***/ function(module, exports) {

module.exports = require("redux");

/***/ },
/* 59 */
/***/ function(module, exports) {

module.exports = require("redux-immutable");

/***/ },
/* 60 */
/***/ function(module, exports) {

module.exports = require("redux-thunk");

/***/ },
/* 61 */
/***/ function(module, exports) {

module.exports = require("serialize-javascript");

/***/ },
/* 62 */
/***/ function(module, exports) {

module.exports = require("serve-favicon");

/***/ },
/* 63 */
/***/ function(module, exports) {

module.exports = require("source-map-support/register");

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ },
/* 65 */
/***/ function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }
/******/ ]);