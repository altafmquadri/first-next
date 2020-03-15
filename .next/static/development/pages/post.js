(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/post.js"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fpost&absolutePagePath=%2Fmnt%2Fc%2Fusers%2Faq56215%2Fdevelopment%2Ffirst-next%2Fpages%2Fpost.js!./":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fpost&absolutePagePath=%2Fmnt%2Fc%2Fusers%2Faq56215%2Fdevelopment%2Ffirst-next%2Fpages%2Fpost.js ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/post", function() {
      var mod = __webpack_require__(/*! ./pages/post.js */ "./pages/post.js")
      if(true) {
        module.hot.accept(/*! ./pages/post.js */ "./pages/post.js", function() {
          if(!next.router.components["/post"]) return
          var updatedPage = __webpack_require__(/*! ./pages/post.js */ "./pages/post.js")
          next.router.update("/post", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_82519ec661270f7f484f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_82519ec661270f7f484f */ "dll-reference dll_82519ec661270f7f484f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/mnt/c/users/aq56215/development/first-next/pages/post.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var Post = function Post(_ref) {
  var id = _ref.id,
      comments = _ref.comments;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Comments for Post ", id, " "), comments.map(function (comment) {
    return __jsx(Comment, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: comment.id
    }, comment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }));
  }));
};

var Comment = function Comment(_ref2) {
  var email = _ref2.email,
      body = _ref2.body;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, email), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, body));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ 2:
/*!**********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fpost&absolutePagePath=%2Fmnt%2Fc%2Fusers%2Faq56215%2Fdevelopment%2Ffirst-next%2Fpages%2Fpost.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fpost&absolutePagePath=%2Fmnt%2Fc%2Fusers%2Faq56215%2Fdevelopment%2Ffirst-next%2Fpages%2Fpost.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fpost&absolutePagePath=%2Fmnt%2Fc%2Fusers%2Faq56215%2Fdevelopment%2Ffirst-next%2Fpages%2Fpost.js!./");


/***/ }),

/***/ "dll-reference dll_82519ec661270f7f484f":
/*!*******************************************!*\
  !*** external "dll_82519ec661270f7f484f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_82519ec661270f7f484f;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=post.js.map