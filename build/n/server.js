/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/devServer.js":
/*!*****************************!*\
  !*** ./server/devServer.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var liveReload = __webpack_require__(/*! livereload */ "livereload");

var connectLiveReload = __webpack_require__(/*! connect-livereload */ "connect-livereload");

function devServer(app) {
  var liveReloadServer = liveReload.createServer();
  liveReloadServer.watch("build");
  liveReloadServer.server.once("connection", function () {
    setTimeout(function () {
      liveReloadServer.refresh("/");
    }, 100);
  });
  app.use(connectLiveReload());
}

module.exports = devServer;

/***/ }),

/***/ "./server/helper/createStore.js":
/*!**************************************!*\
  !*** ./server/helper/createStore.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_store_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/store/reducers */ "./src/store/reducers/index.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req) {
  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_2___default().create({
    baseURL: "http://localhost:4000",
    headers: {
      "cookie": req.get("cookie") || ''
    }
  });
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_src_store_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], {}, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default().withExtraArgument(axiosInstance)));
}

/***/ }),

/***/ "./server/helper/renderer.js":
/*!***********************************!*\
  !*** ./server/helper/renderer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/server */ "@loadable/server");
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/App */ "./src/App.tsx");








var webStats = path__WEBPACK_IMPORTED_MODULE_0___default().resolve('./build/static/loadable-stats.json');
var chunkExtractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_2__.ChunkExtractor({
  statsFile: webStats
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req, store, props, isDev) {
  // const jsx = webExtractor.collectChunks(
  //   <Provider store={store}>
  //     <StaticRouter location={req.url} context={{}} >
  //       <App componentProps={{ props: props, page: req.url }} />
  //     </StaticRouter>
  //   </Provider>
  // )
  console.log(chunkExtractor.getLinkTags());
  var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_4__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {
    location: req.url,
    context: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src_App__WEBPACK_IMPORTED_MODULE_7__["default"], {
    componentProps: {
      props: props,
      page: req.url
    }
  }))); // const helmet = Helmet.renderStatic()

  return "\n  <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n      <meta name=\"themes\" content=\"#f43454\">\n\n      <link rel=\"shortcut icon\" type=\"image/jpg\" href=\"/public/favicon.ico\"/>\n<!--      <link rel=\"stylesheet\" href=\"http://localhost:1000/static/fonts/roboto.css\" />-->\n    </head>\n    <body>\n      <div id=\"backdrop\"></div>\n      <div id=\"modal-root\"></div>\n      <div id=\"root\">".concat(content, "</div>\n\n      <script id=\"APP_DATA\" type=\"application/json\">").concat(JSON.stringify({
    props: props,
    page: req.url
  }), "</script>\n      <script>\n        window.INITIAL_STATE = ").concat(JSON.stringify(store.getState()), "\n      </script>\n      ").concat(isDev && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    src: "//localhost:35729/livereload.js?snipver=1",
    async: "",
    defer: ""
  }), "\n    </body>\n  </html>\n");
}); //
// return `
//   <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <meta name="themes" content="#f43454">
//       ${helmet.meta.toString()}
//       ${helmet.title.toString()}
//       ${chunkExtractor.getLinkTags()}
//       ${chunkExtractor.getStyleTags()}
//       <link rel="shortcut icon" type="image/jpg" href="/public/favicon.ico"/>
// <!--      <link rel="stylesheet" href="http://localhost:1000/static/fonts/roboto.css" />-->
//     </head>
//     <body>
//       <div id="backdrop"></div>
//       <div id="modal-root"></div>
//       <div id="root">${content}</div>
//
//       ${chunkExtractor.getScriptTags()}
//       <script id="APP_DATA" type="application/json">${JSON.stringify({ props: props, page: req.url })}</script>
//       <script>
//         window.INITIAL_STATE = ${JSON.stringify(store.getState())}
//       </script>
//       ${isDev && <script src="//localhost:35729/livereload.js?snipver=1" async="" defer=""></script> }
//     </body>
//   </html>
// `

/***/ }),

/***/ "./src/store/actions/types.js":
/*!************************************!*\
  !*** ./src/store/actions/types.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FETCH_USERS": () => (/* binding */ FETCH_USERS),
/* harmony export */   "FETCH_USER": () => (/* binding */ FETCH_USER),
/* harmony export */   "LOGIN": () => (/* binding */ LOGIN),
/* harmony export */   "LOGOUT": () => (/* binding */ LOGOUT),
/* harmony export */   "SIGN_UP": () => (/* binding */ SIGN_UP)
/* harmony export */ });
var FETCH_USERS = 'fetch_users';
var FETCH_USER = 'fetch_user';
var LOGIN = "login";
var LOGOUT = "logout";
var SIGN_UP = "signup";

/***/ }),

/***/ "./src/store/reducers/index.js":
/*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/types */ "./src/store/actions/types.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialAuthState = {
  isAuthenticated: false
};

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialAuthState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_2__.LOGIN:
      return _objectSpread(_objectSpread({}, state), action.payload);

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__.LOGOUT:
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      return state;
  }
};

var usersReducer = function usersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_USERS:
      return action.payload;

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_USER:
      return action.payload;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  auth: authReducer,
  users: usersReducer
}));

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const App = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "This is SSR APPLICATION Error: Cannot find module '@loadable/server'")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@loadable/server");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "connect-livereload":
/*!*************************************!*\
  !*** external "connect-livereload" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("connect-livereload");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "livereload":
/*!*****************************!*\
  !*** external "livereload" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("livereload");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper/renderer */ "./server/helper/renderer.js");
/* harmony import */ var _helper_createStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper/createStore */ "./server/helper/createStore.js");




var PORT = process.env.PORT || 5000;
var isDev = false;

if (process.env.NodeENV === "development") {
  isDev = true;
}

var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(express__WEBPACK_IMPORTED_MODULE_0___default()["static"]("build"));
app.use("/public", express__WEBPACK_IMPORTED_MODULE_0___default()["static"]("public"));
app.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());

if (isDev) {
  var devServer = __webpack_require__(/*! ./devServer */ "./server/devServer.js"); // only for development server............


  devServer(app);
}

app.get("/api/users", function (req, res) {
  res.send([{
    username: 'A'
  }, {
    username: 'B'
  }]);
});
app.get("*", function (req, res) {
  var store = (0,_helper_createStore__WEBPACK_IMPORTED_MODULE_3__["default"])(req);
  res.send((0,_helper_renderer__WEBPACK_IMPORTED_MODULE_2__["default"])(req, store, {}, isDev));
});
app.listen(PORT, function () {
  return console.log("server a is running http://localhost:".concat(PORT));
});
})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=server.js.map