(function() {
var exports = {};
exports.id = "pages/Signup";
exports.ids = ["pages/Signup"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
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

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutProperties; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FilledInput/FilledInput.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FilledInput/FilledInput.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");








var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  var backgroundColor = light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      backgroundColor: backgroundColor,
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      '&:hover': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.13)' : 'rgba(255, 255, 255, 0.13)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: backgroundColor
        }
      },
      '&$focused': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)'
      },
      '&$disabled': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'
      }
    },

    /* Styles applied to the root element if color secondary. */
    colorSecondary: {
      '&$underline:after': {
        borderBottomColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      '&:after': {
        borderBottom: "2px solid ".concat(theme.palette.primary.main),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      },
      '&$error:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)' // error is always underlined in red

      },
      '&:before': {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&:hover:before': {
        borderBottom: "1px solid ".concat(theme.palette.text.primary)
      },
      '&$disabled:before': {
        borderBottomStyle: 'dotted'
      }
    },

    /* Pseudo-class applied to the root element if the component is focused. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
      paddingLeft: 12
    },

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
      paddingRight: 12
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: '27px 12px 10px',
      '&$marginDense': {
        paddingTop: 23,
        paddingBottom: 6
      }
    },

    /* Styles applied to the `input` element. */
    input: {
      padding: '27px 12px 10px',
      '&:-webkit-autofill': {
        WebkitBoxShadow: theme.palette.type === 'light' ? null : '0 0 0 100px #266798 inset',
        WebkitTextFillColor: theme.palette.type === 'light' ? null : '#fff',
        caretColor: theme.palette.type === 'light' ? null : '#fff',
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit'
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 23,
      paddingBottom: 6
    },

    /* Styles applied to the `input` if in `<FormControl hiddenLabel />`. */
    inputHiddenLabel: {
      paddingTop: 18,
      paddingBottom: 19,
      '&$inputMarginDense': {
        paddingTop: 10,
        paddingBottom: 11
      }
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      padding: 0
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
      paddingLeft: 0
    },

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};
var FilledInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function FilledInput(props, ref) {
  var disableUnderline = props.disableUnderline,
      classes = props.classes,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InputBase__WEBPACK_IMPORTED_MODULE_6__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    classes: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, classes, {
      root: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
 true ? FilledInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The id of the `input` element.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.refType,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense', 'none']),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Name attribute of the `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the `input` element will be required.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
} : 0;
FilledInput.muiName = 'Input';
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__.default)(styles, {
  name: 'MuiFilledInput'
})(FilledInput));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FilledInput/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FilledInput/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FilledInput__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FilledInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilledInput */ "./node_modules/@material-ui/core/esm/FilledInput/FilledInput.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/FormControl.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _InputBase_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputBase/utils */ "./node_modules/@material-ui/core/esm/InputBase/utils.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _utils_isMuiElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/isMuiElement */ "./node_modules/@material-ui/core/esm/utils/isMuiElement.js");
/* harmony import */ var _FormControlContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormControlContext */ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js");










var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    // Reset fieldset default style.
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: 'top' // Fix alignment issue on Safari.

  },

  /* Styles applied to the root element if `margin="normal"`. */
  marginNormal: {
    marginTop: 16,
    marginBottom: 8
  },

  /* Styles applied to the root element if `margin="dense"`. */
  marginDense: {
    marginTop: 8,
    marginBottom: 4
  },

  /* Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {
    width: '100%'
  }
};
/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *
 *  - FormLabel
 *  - FormHelperText
 *  - Input
 *  - InputLabel
 *
 * You can find one composition example below and more going to [the demos](/components/text-fields/#components).
 *
 * ```jsx
 * <FormControl>
 *   <InputLabel htmlFor="my-input">Email address</InputLabel>
 *   <Input id="my-input" aria-describedby="my-helper-text" />
 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
 * </FormControl>
 * ```
 *
 * ??????Only one input can be used within a FormControl.
 */

var FormControl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function FormControl(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      visuallyFocused = props.focused,
      _props$hiddenLabel = props.hiddenLabel,
      hiddenLabel = _props$hiddenLabel === void 0 ? false : _props$hiddenLabel,
      _props$margin = props.margin,
      margin = _props$margin === void 0 ? 'none' : _props$margin,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      size = props.size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "classes", "className", "color", "component", "disabled", "error", "fullWidth", "focused", "hiddenLabel", "margin", "required", "size", "variant"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(function () {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    var initialAdornedStart = false;

    if (children) {
      react__WEBPACK_IMPORTED_MODULE_2__.Children.forEach(children, function (child) {
        if (!(0,_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_5__.default)(child, ['Input', 'Select'])) {
          return;
        }

        var input = (0,_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_5__.default)(child, ['Select']) ? child.props.input : child;

        if (input && (0,_InputBase_utils__WEBPACK_IMPORTED_MODULE_6__.isAdornedStart)(input.props)) {
          initialAdornedStart = true;
        }
      });
    }

    return initialAdornedStart;
  }),
      adornedStart = _React$useState[0],
      setAdornedStart = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_2__.useState(function () {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    var initialFilled = false;

    if (children) {
      react__WEBPACK_IMPORTED_MODULE_2__.Children.forEach(children, function (child) {
        if (!(0,_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_5__.default)(child, ['Input', 'Select'])) {
          return;
        }

        if ((0,_InputBase_utils__WEBPACK_IMPORTED_MODULE_6__.isFilled)(child.props, true)) {
          initialFilled = true;
        }
      });
    }

    return initialFilled;
  }),
      filled = _React$useState2[0],
      setFilled = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__.useState(false),
      _focused = _React$useState3[0],
      setFocused = _React$useState3[1];

  var focused = visuallyFocused !== undefined ? visuallyFocused : _focused;

  if (disabled && focused) {
    setFocused(false);
  }

  var registerEffect;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var registeredInput = react__WEBPACK_IMPORTED_MODULE_2__.useRef(false);

    registerEffect = function registerEffect() {
      if (registeredInput.current) {
        console.error(['Material-UI: There are multiple InputBase components inside a FormControl.', 'This is not supported. It might cause infinite rendering loops.', 'Only use one InputBase.'].join('\n'));
      }

      registeredInput.current = true;
      return function () {
        registeredInput.current = false;
      };
    };
  }

  var onFilled = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    setFilled(true);
  }, []);
  var onEmpty = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    setFilled(false);
  }, []);
  var childContext = {
    adornedStart: adornedStart,
    setAdornedStart: setAdornedStart,
    color: color,
    disabled: disabled,
    error: error,
    filled: filled,
    focused: focused,
    fullWidth: fullWidth,
    hiddenLabel: hiddenLabel,
    margin: (size === 'small' ? 'dense' : undefined) || margin,
    onBlur: function onBlur() {
      setFocused(false);
    },
    onEmpty: onEmpty,
    onFilled: onFilled,
    onFocus: function onFocus() {
      setFocused(true);
    },
    registerEffect: registerEffect,
    required: required,
    variant: variant
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_FormControlContext__WEBPACK_IMPORTED_MODULE_7__.default.Provider, {
    value: childContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className, margin !== 'none' && classes["margin".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__.default)(margin))], fullWidth && classes.fullWidth),
    ref: ref
  }, other), children));
});
 true ? FormControl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The contents of the form control.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the component will be displayed in focused state.
   */
  focused: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the component will take up the full width of its container.
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label will be hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   */
  hiddenLabel: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense', 'none', 'normal']),

  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The size of the text field.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['medium', 'small']),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['filled', 'outlined', 'standard'])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__.default)(styles, {
  name: 'MuiFormControl'
})(FormControl));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFormControl": function() { return /* binding */ useFormControl; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var FormControlContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext();

if (true) {
  FormControlContext.displayName = 'FormControlContext';
}

function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(FormControlContext);
}
/* harmony default export */ __webpack_exports__["default"] = (FormControlContext);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/formControlState.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ formControlState; }
/* harmony export */ });
function formControlState(_ref) {
  var props = _ref.props,
      states = _ref.states,
      muiFormControl = _ref.muiFormControl;
  return states.reduce(function (acc, state) {
    acc[state] = props[state];

    if (muiFormControl) {
      if (typeof props[state] === 'undefined') {
        acc[state] = muiFormControl[state];
      }
    }

    return acc;
  }, {});
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormControl__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "useFormControl": function() { return /* reexport safe */ _useFormControl__WEBPACK_IMPORTED_MODULE_1__.default; }
/* harmony export */ });
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _useFormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/useFormControl.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useFormControl; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormControlContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormControlContext */ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js");


function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(_FormControlContext__WEBPACK_IMPORTED_MODULE_1__.default);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
      color: theme.palette.text.secondary
    }, theme.typography.caption, {
      textAlign: 'left',
      marginTop: 3,
      margin: 0,
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&$error': {
        color: theme.palette.error.main
      }
    }),

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      marginTop: 4
    },

    /* Styles applied to the root element if `variant="filled"` or `variant="outlined"`. */
    contained: {
      marginLeft: 14,
      marginRight: 14
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `filled={true}`. */
    filled: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {}
  };
};
var FormHelperText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function FormHelperText(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'p' : _props$component,
      disabled = props.disabled,
      error = props.error,
      filled = props.filled,
      focused = props.focused,
      margin = props.margin,
      required = props.required,
      variant = props.variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["children", "classes", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"]);

  var muiFormControl = (0,_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_5__.default)();
  var fcs = (0,_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__.default)({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant', 'margin', 'disabled', 'error', 'filled', 'focused', 'required']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, (fcs.variant === 'filled' || fcs.variant === 'outlined') && classes.contained, className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required, fcs.margin === 'dense' && classes.marginDense),
    ref: ref
  }, other), children === ' ' ?
  /*#__PURE__*/
  // eslint-disable-next-line react/no-danger
  react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  }) : children);
});
 true ? FormHelperText.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense']),

  /**
   * If `true`, the helper text should use required classes key.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['filled', 'outlined', 'standard'])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__.default)(styles, {
  name: 'MuiFormHelperText'
})(FormHelperText));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormHelperText/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormHelperText/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormHelperText__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormHelperText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormLabel/FormLabel.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormLabel/FormLabel.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
      color: theme.palette.text.secondary
    }, theme.typography.body1, {
      lineHeight: 1,
      padding: 0,
      '&$focused': {
        color: theme.palette.primary.main
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&$error': {
        color: theme.palette.error.main
      }
    }),

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {
      '&$focused': {
        color: theme.palette.secondary.main
      }
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `filled={true}`. */
    filled: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {},

    /* Styles applied to the asterisk element. */
    asterisk: {
      '&$error': {
        color: theme.palette.error.main
      }
    }
  };
};
var FormLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function FormLabel(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      color = props.color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'label' : _props$component,
      disabled = props.disabled,
      error = props.error,
      filled = props.filled,
      focused = props.focused,
      required = props.required,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["children", "classes", "className", "color", "component", "disabled", "error", "filled", "focused", "required"]);

  var muiFormControl = (0,_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_5__.default)();
  var fcs = (0,_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__.default)({
    props: props,
    muiFormControl: muiFormControl,
    states: ['color', 'required', 'focused', 'disabled', 'error', 'filled']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__.default)(fcs.color || 'primary'))], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required),
    ref: ref
  }, other), children, fcs.required && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    "aria-hidden": true,
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.asterisk, fcs.error && classes.error)
  }, "\u2009", '*'));
});
 true ? FormLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label should use filled classes key.
   */
  filled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__.default)(styles, {
  name: 'MuiFormLabel'
})(FormLabel));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormLabel/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormLabel/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FormLabel__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/FormLabel.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Grow/Grow.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Grow/Grow.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../transitions/utils */ "./node_modules/@material-ui/core/esm/transitions/utils.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");










function getScale(value) {
  return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
}

var styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: 'none'
  }
};
/**
 * The Grow transition is used by the [Tooltip](/components/tooltips/) and
 * [Popover](/components/popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Grow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function Grow(props, ref) {
  var children = props.children,
      _props$disableStrictM = props.disableStrictModeCompat,
      disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      style = props.style,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? 'auto' : _props$timeout,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? react_transition_group__WEBPACK_IMPORTED_MODULE_5__.Transition : _props$TransitionComp,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);

  var timer = react__WEBPACK_IMPORTED_MODULE_3__.useRef();
  var autoTimeout = react__WEBPACK_IMPORTED_MODULE_3__.useRef();
  var theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_6__.default)();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);
  var foreignRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__.default)(children.ref, ref);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__.default)(enableStrictModeCompat ? nodeRef : undefined, foreignRef);

  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing],
            _ref2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, 2),
            node = _ref2[0],
            isAppearing = _ref2[1]; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.


        if (isAppearing === undefined) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };

  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_8__.reflow)(node); // So the animation always start from the start.

    var _getTransitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_8__.getTransitionProps)({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    }),
        transitionDuration = _getTransitionProps.duration,
        delay = _getTransitionProps.delay;

    var duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration: duration,
      delay: delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay: delay
    })].join(',');

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function (node) {
    var _getTransitionProps2 = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_8__.getTransitionProps)({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    }),
        transitionDuration = _getTransitionProps2.duration,
        delay = _getTransitionProps2.delay;

    var duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration: duration,
      delay: delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay: delay || duration * 0.333
    })].join(',');
    node.style.opacity = '0';
    node.style.transform = getScale(0.75);

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);

  var addEndListener = function addEndListener(nodeOrNext, maybeNext) {
    var next = enableStrictModeCompat ? nodeOrNext : maybeNext;

    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTimeout.current || 0);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    return function () {
      clearTimeout(timer.current);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    appear: true,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: addEndListener,
    timeout: timeout === 'auto' ? null : timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.cloneElement(children, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        opacity: 0,
        transform: getScale(0.75),
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, styles[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
 true ? Grow.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A single child content element.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().element),

  /**
   * Enable this prop if you encounter 'Function components cannot be given refs',
   * use `unstable_createStrictModeTheme`,
   * and can't forward the ref in the child component.
   */
  disableStrictModeCompat: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * @ignore
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['auto']), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
  })])
} : 0;
Grow.muiSupportAuto = true;
/* harmony default export */ __webpack_exports__["default"] = (Grow);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Grow/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Grow/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Grow__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Grow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grow */ "./node_modules/@material-ui/core/esm/Grow/Grow.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputBase/InputBase.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormControl/FormControlContext */ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _TextareaAutosize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./node_modules/@material-ui/core/esm/InputBase/utils.js");




/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */











var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var placeholder = {
    color: 'currentColor',
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter
    })
  };
  var placeholderHidden = {
    opacity: '0 !important'
  };
  var placeholderVisible = {
    opacity: light ? 0.42 : 0.5
  };
  return {
    '@global': {
      '@keyframes mui-auto-fill': {},
      '@keyframes mui-auto-fill-cancel': {}
    },

    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, theme.typography.body1, {
      color: theme.palette.text.primary,
      lineHeight: '1.1876em',
      // Reset (19px), match the native input line-height
      boxSizing: 'border-box',
      // Prevent padding issue with fullWidth.
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      '&$disabled': {
        color: theme.palette.text.disabled,
        cursor: 'default'
      }
    }),

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {},

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {},

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      '&$marginDense': {
        paddingTop: 4 - 1
      }
    },

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the `input` element. */
    input: {
      font: 'inherit',
      letterSpacing: 'inherit',
      color: 'currentColor',
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      border: 0,
      boxSizing: 'content-box',
      background: 'none',
      height: '1.1876em',
      // Reset (19px), match the native input line-height
      margin: 0,
      // Reset for Safari
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      // Make the flex item shrink with Firefox
      minWidth: 0,
      width: '100%',
      // Fix IE 11 width issue
      animationName: 'mui-auto-fill-cancel',
      animationDuration: '10ms',
      '&::-webkit-input-placeholder': placeholder,
      '&::-moz-placeholder': placeholder,
      // Firefox 19+
      '&:-ms-input-placeholder': placeholder,
      // IE 11
      '&::-ms-input-placeholder': placeholder,
      // Edge
      '&:focus': {
        outline: 0
      },
      // Reset Firefox invalid required input style
      '&:invalid': {
        boxShadow: 'none'
      },
      '&::-webkit-search-decoration': {
        // Remove the padding when type=search.
        '-webkit-appearance': 'none'
      },
      // Show and hide the placeholder logic
      'label[data-shrink=false] + $formControl &': {
        '&::-webkit-input-placeholder': placeholderHidden,
        '&::-moz-placeholder': placeholderHidden,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholderHidden,
        // IE 11
        '&::-ms-input-placeholder': placeholderHidden,
        // Edge
        '&:focus::-webkit-input-placeholder': placeholderVisible,
        '&:focus::-moz-placeholder': placeholderVisible,
        // Firefox 19+
        '&:focus:-ms-input-placeholder': placeholderVisible,
        // IE 11
        '&:focus::-ms-input-placeholder': placeholderVisible // Edge

      },
      '&$disabled': {
        opacity: 1 // Reset iOS opacity

      },
      '&:-webkit-autofill': {
        animationDuration: '5000s',
        animationName: 'mui-auto-fill'
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 4 - 1
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      height: 'auto',
      resize: 'none',
      padding: 0
    },

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {
      // Improve type search style.
      '-moz-appearance': 'textfield',
      '-webkit-appearance': 'textfield'
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {},

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {},

    /* Styles applied to the `input` element if `hiddenLabel={true}`. */
    inputHiddenLabel: {}
  };
};
var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_3__.useEffect : react__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect;
/**
 * `InputBase` contains as few styles as possible.
 * It aims to be a simple building block for creating an input.
 * It contains a load of style reset and some state logic.
 */

var InputBase = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function InputBase(props, ref) {
  var ariaDescribedby = props['aria-describedby'],
      autoComplete = props.autoComplete,
      autoFocus = props.autoFocus,
      classes = props.classes,
      className = props.className,
      color = props.color,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      endAdornment = props.endAdornment,
      error = props.error,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      id = props.id,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$inputProps = props.inputProps,
      inputPropsProp = _props$inputProps === void 0 ? {} : _props$inputProps,
      inputRefProp = props.inputRef,
      margin = props.margin,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      placeholder = props.placeholder,
      readOnly = props.readOnly,
      renderSuffix = props.renderSuffix,
      rows = props.rows,
      rowsMax = props.rowsMax,
      rowsMin = props.rowsMin,
      maxRows = props.maxRows,
      minRows = props.minRows,
      startAdornment = props.startAdornment,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      valueProp = props.value,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["aria-describedby", "autoComplete", "autoFocus", "classes", "className", "color", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "rowsMax", "rowsMin", "maxRows", "minRows", "startAdornment", "type", "value"]);

  var value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(value != null),
      isControlled = _React$useRef.current;

  var inputRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef();
  var handleInputRefWarning = react__WEBPACK_IMPORTED_MODULE_3__.useCallback(function (instance) {
    if (true) {
      if (instance && instance.nodeName !== 'INPUT' && !instance.focus) {
        console.error(['Material-UI: You have provided a `inputComponent` to the input component', 'that does not correctly handle the `inputRef` prop.', 'Make sure the `inputRef` prop is called with a HTMLInputElement.'].join('\n'));
      }
    }
  }, []);
  var handleInputPropsRefProp = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_6__.default)(inputPropsProp.ref, handleInputRefWarning);
  var handleInputRefProp = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_6__.default)(inputRefProp, handleInputPropsRefProp);
  var handleInputRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_6__.default)(inputRef, handleInputRefProp);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState(false),
      focused = _React$useState[0],
      setFocused = _React$useState[1];

  var muiFormControl = (0,_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_7__.useFormControl)();

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
      if (muiFormControl) {
        return muiFormControl.registerEffect();
      }

      return undefined;
    }, [muiFormControl]);
  }

  var fcs = (0,_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_8__.default)({
    props: props,
    muiFormControl: muiFormControl,
    states: ['color', 'disabled', 'error', 'hiddenLabel', 'margin', 'required', 'filled']
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused; // The blur won't fire when the disabled state is set on a focused input.
  // We need to book keep the focused state manually.

  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);

      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  var onFilled = muiFormControl && muiFormControl.onFilled;
  var onEmpty = muiFormControl && muiFormControl.onEmpty;
  var checkDirty = react__WEBPACK_IMPORTED_MODULE_3__.useCallback(function (obj) {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_9__.isFilled)(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect(function () {
    if (isControlled) {
      checkDirty({
        value: value
      });
    }
  }, [value, checkDirty, isControlled]);

  var handleFocus = function handleFocus(event) {
    // Fix a bug with IE 11 where the focus/blur events are triggered
    // while the input is disabled.
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }

    if (onFocus) {
      onFocus(event);
    }

    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (onBlur) {
      onBlur(event);
    }

    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };

  var handleChange = function handleChange(event) {
    if (!isControlled) {
      var element = event.target || inputRef.current;

      if (element == null) {
        throw new Error( true ? "Material-UI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://material-ui.com/r/input-component-ref-interface for more info." : 0);
      }

      checkDirty({
        value: element.value
      });
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (inputPropsProp.onChange) {
      inputPropsProp.onChange.apply(inputPropsProp, [event].concat(args));
    } // Perform in the willUpdate


    if (onChange) {
      onChange.apply(void 0, [event].concat(args));
    }
  }; // Check the input state on mount, in case it was filled by the user
  // or auto filled by the browser before the hydration (for SSR).


  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    checkDirty(inputRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  var handleClick = function handleClick(event) {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }

    if (onClick) {
      onClick(event);
    }
  };

  var InputComponent = inputComponent;

  var inputProps = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, inputPropsProp, {
    ref: handleInputRef
  });

  if (typeof InputComponent !== 'string') {
    inputProps = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
      // Rename ref to inputRef as we don't know the
      // provided `inputComponent` structure.
      inputRef: handleInputRef,
      type: type
    }, inputProps, {
      ref: null
    });
  } else if (multiline) {
    if (rows && !maxRows && !minRows && !rowsMax && !rowsMin) {
      InputComponent = 'textarea';
    } else {
      inputProps = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        minRows: rows || minRows,
        rowsMax: rowsMax,
        maxRows: maxRows
      }, inputProps);
      InputComponent = _TextareaAutosize__WEBPACK_IMPORTED_MODULE_10__.default;
    }
  } else {
    inputProps = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
      type: type
    }, inputProps);
  }

  var handleAutoFill = function handleAutoFill(event) {
    // Provide a fake value as Chrome might not let you access it for security reasons.
    checkDirty(event.animationName === 'mui-auto-fill-cancel' ? inputRef.current : {
      value: 'x'
    });
  };

  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.root, classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_11__.default)(fcs.color || 'primary'))], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fullWidth && classes.fullWidth, fcs.focused && classes.focused, muiFormControl && classes.formControl, multiline && classes.multiline, startAdornment && classes.adornedStart, endAdornment && classes.adornedEnd, fcs.margin === 'dense' && classes.marginDense),
    onClick: handleClick,
    ref: ref
  }, other), startAdornment, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_7__.default.Provider, {
    value: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(InputComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    "aria-invalid": fcs.error,
    "aria-describedby": ariaDescribedby,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    disabled: fcs.disabled,
    id: id,
    onAnimationStart: handleAutoFill,
    name: name,
    placeholder: placeholder,
    readOnly: readOnly,
    required: fcs.required,
    rows: rows,
    value: value,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp
  }, inputProps, {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.input, inputPropsProp.className, fcs.disabled && classes.disabled, multiline && classes.inputMultiline, fcs.hiddenLabel && classes.inputHiddenLabel, startAdornment && classes.inputAdornedStart, endAdornment && classes.inputAdornedEnd, type === 'search' && classes.inputTypeSearch, fcs.margin === 'dense' && classes.inputMarginDense),
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus
  }))), endAdornment, renderSuffix ? renderSuffix((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, fcs, {
    startAdornment: startAdornment
  })) : null);
});
 true ? InputBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  'aria-describedby': (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any),

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * The id of the `input` element.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.refType,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['dense', 'none']),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]),

  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Name attribute of the `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * Callback fired when the input is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onFocus: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * @ignore
   */
  onKeyUp: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * @ignore
   */
  renderSuffix: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * If `true`, the `input` element will be required.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]),

  /**
   * Maximum number of rows to display.
   * @deprecated Use `maxRows` instead.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]),

  /**
   * Minimum number of rows to display.
   * @deprecated Use `minRows` instead.
   */
  rowsMin: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_12__.default)(styles, {
  name: 'MuiInputBase'
})(InputBase));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputBase/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputBase/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _InputBase__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputBase */ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputBase/utils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputBase/utils.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasValue": function() { return /* binding */ hasValue; },
/* harmony export */   "isFilled": function() { return /* binding */ isFilled; },
/* harmony export */   "isAdornedStart": function() { return /* binding */ isAdornedStart; }
/* harmony export */ });
// Supports determination of isControlled().
// Controlled input accepts its current value as a prop.
//
// @see https://facebook.github.io/react/docs/forms.html#controlled-components
// @param value
// @returns {boolean} true if string (including '') or number (including zero)
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
} // Determine if field is empty or filled.
// Response determines if label is presented above field or as placeholder.
//
// @param obj
// @param SSR
// @returns {boolean} False when not present or empty string.
//                    True when any number or string with length.

function isFilled(obj) {
  var SSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
} // Determine if an Input is adorned on start.
// It's corresponding to the left with LTR.
//
// @param obj
// @returns {boolean} False when no adornments.
//                    True when adorned at the start.

function isAdornedStart(obj) {
  return obj.startAdornment;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'block',
      transformOrigin: 'top left'
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {},

    /* Pseudo-class applied to the asterisk element. */
    asterisk: {},

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      position: 'absolute',
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: 'translate(0, 24px) scale(1)'
    },

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      // Compensation for the `Input.inputDense` style.
      transform: 'translate(0, 21px) scale(1)'
    },

    /* Styles applied to the `input` element if `shrink={true}`. */
    shrink: {
      transform: 'translate(0, 1.5px) scale(0.75)',
      transformOrigin: 'top left'
    },

    /* Styles applied to the `input` element if `disableAnimation={false}`. */
    animated: {
      transition: theme.transitions.create(['color', 'transform'], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    },

    /* Styles applied to the root element if `variant="filled"`. */
    filled: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: 'none',
      transform: 'translate(12px, 20px) scale(1)',
      '&$marginDense': {
        transform: 'translate(12px, 17px) scale(1)'
      },
      '&$shrink': {
        transform: 'translate(12px, 10px) scale(0.75)',
        '&$marginDense': {
          transform: 'translate(12px, 7px) scale(0.75)'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: 'none',
      transform: 'translate(14px, 20px) scale(1)',
      '&$marginDense': {
        transform: 'translate(14px, 12px) scale(1)'
      },
      '&$shrink': {
        transform: 'translate(14px, -6px) scale(0.75)'
      }
    }
  };
};
var InputLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function InputLabel(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$disableAnimati = props.disableAnimation,
      disableAnimation = _props$disableAnimati === void 0 ? false : _props$disableAnimati,
      margin = props.margin,
      shrinkProp = props.shrink,
      variant = props.variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "disableAnimation", "margin", "shrink", "variant"]);

  var muiFormControl = (0,_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_5__.default)();
  var shrink = shrinkProp;

  if (typeof shrink === 'undefined' && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }

  var fcs = (0,_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__.default)({
    props: props,
    muiFormControl: muiFormControl,
    states: ['margin', 'variant']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_FormLabel__WEBPACK_IMPORTED_MODULE_7__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    "data-shrink": shrink,
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className, muiFormControl && classes.formControl, !disableAnimation && classes.animated, shrink && classes.shrink, fcs.margin === 'dense' && classes.marginDense, {
      'filled': classes.filled,
      'outlined': classes.outlined
    }[fcs.variant]),
    classes: {
      focused: classes.focused,
      disabled: classes.disabled,
      error: classes.error,
      required: classes.required,
      asterisk: classes.asterisk
    },
    ref: ref
  }, other));
});
 true ? InputLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The contents of the `InputLabel`.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * If `true`, the transition animation is disabled.
   */
  disableAnimation: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, apply disabled class.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the input of this label is focused.
   */
  focused: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense']),

  /**
   * if `true`, the label will indicate that the input is required.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label is shrunk.
   */
  shrink: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['filled', 'outlined', 'standard'])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__.default)(styles, {
  name: 'MuiInputLabel'
})(InputLabel));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputLabel/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputLabel/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _InputLabel__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _InputLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Input/Input.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Input/Input.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");








var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative'
    },

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      'label + &': {
        marginTop: 16
      }
    },

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if color secondary. */
    colorSecondary: {
      '&$underline:after': {
        borderBottomColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      '&:after': {
        borderBottom: "2px solid ".concat(theme.palette.primary.main),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      },
      '&$error:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)' // error is always underlined in red

      },
      '&:before': {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&:hover:not($disabled):before': {
        borderBottom: "2px solid ".concat(theme.palette.text.primary),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          borderBottom: "1px solid ".concat(bottomLineColor)
        }
      },
      '&$disabled:before': {
        borderBottomStyle: 'dotted'
      }
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {},

    /* Styles applied to the `input` element. */
    input: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {},

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {},

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {}
  };
};
var Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Input(props, ref) {
  var disableUnderline = props.disableUnderline,
      classes = props.classes,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InputBase__WEBPACK_IMPORTED_MODULE_6__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    classes: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, classes, {
      root: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
 true ? Input.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The id of the `input` element.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.refType,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense', 'none']),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Name attribute of the `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the `input` element will be required.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
} : 0;
Input.muiName = 'Input';
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__.default)(styles, {
  name: 'MuiInput'
})(Input));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Input/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Input/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./node_modules/@material-ui/core/esm/Input/Input.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/List/List.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/List/List.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ListContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListContext */ "./node_modules/@material-ui/core/esm/List/ListContext.js");







var styles = {
  /* Styles applied to the root element. */
  root: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative'
  },

  /* Styles applied to the root element if `disablePadding={false}`. */
  padding: {
    paddingTop: 8,
    paddingBottom: 8
  },

  /* Styles applied to the root element if dense. */
  dense: {},

  /* Styles applied to the root element if a `subheader` is provided. */
  subheader: {
    paddingTop: 0
  }
};
var List = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function List(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'ul' : _props$component,
      _props$dense = props.dense,
      dense = _props$dense === void 0 ? false : _props$dense,
      _props$disablePadding = props.disablePadding,
      disablePadding = _props$disablePadding === void 0 ? false : _props$disablePadding,
      subheader = props.subheader,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);

  var context = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    return {
      dense: dense
    };
  }, [dense]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ListContext__WEBPACK_IMPORTED_MODULE_5__.default.Provider, {
    value: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className, dense && classes.dense, !disablePadding && classes.padding, subheader && classes.subheader),
    ref: ref
  }, other), subheader, children));
});
 true ? List.propTypes = {
  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   */
  dense: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, vertical padding will be removed from the list.
   */
  disablePadding: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiList'
})(List));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/List/ListContext.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/List/ListContext.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var ListContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

if (true) {
  ListContext.displayName = 'ListContext';
}

/* harmony default export */ __webpack_exports__["default"] = (ListContext);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/List/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/List/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _List__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./node_modules/@material-ui/core/esm/List/List.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/MenuList/MenuList.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/MenuList/MenuList.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "react-is");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getScrollbarSize */ "./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");











function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }

  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }

  return disableListWrap ? null : list.firstChild;
}

function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }

  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }

  return disableListWrap ? null : list.lastChild;
}

function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === undefined) {
    return true;
  }

  var text = nextFocus.innerText;

  if (text === undefined) {
    // jsdom doesn't support innerText
    text = nextFocus.textContent;
  }

  text = text.trim().toLowerCase();

  if (text.length === 0) {
    return false;
  }

  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }

  return text.indexOf(textCriteria.keys.join('')) === 0;
}

function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  var wrappedOnce = false;
  var nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);

  while (nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }

      wrappedOnce = true;
    } // Same logic as useAutocomplete.js


    var nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';

    if (!nextFocus.hasAttribute('tabindex') || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      // Move to the next element.
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return;
    }
  }
}

var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__.useEffect : react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect;
/**
 * A permanently displayed menu following https://www.w3.org/TR/wai-aria-practices/#menubutton.
 * It's exposed to help customization of the [`Menu`](/api/menu/) component. If you
 * use it separately you need to move focus into the component manually. Once
 * the focus is placed inside the component it is fully keyboard accessible.
 */

var MenuList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function MenuList(props, ref) {
  var actions = props.actions,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      _props$autoFocusItem = props.autoFocusItem,
      autoFocusItem = _props$autoFocusItem === void 0 ? false : _props$autoFocusItem,
      children = props.children,
      className = props.className,
      _props$disabledItemsF = props.disabledItemsFocusable,
      disabledItemsFocusable = _props$disabledItemsF === void 0 ? false : _props$disabledItemsF,
      _props$disableListWra = props.disableListWrap,
      disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra,
      onKeyDown = props.onKeyDown,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'selectedMenu' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"]);

  var listRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  var textCriteriaRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect(function () {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  react__WEBPACK_IMPORTED_MODULE_2__.useImperativeHandle(actions, function () {
    return {
      adjustStyleForScrollbar: function adjustStyleForScrollbar(containerElement, theme) {
        // Let's ignore that piece of logic if users are already overriding the width
        // of the menu.
        var noExplicitWidth = !listRef.current.style.width;

        if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
          var scrollbarSize = "".concat((0,_utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_6__.default)(true), "px");
          listRef.current.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = scrollbarSize;
          listRef.current.style.width = "calc(100% + ".concat(scrollbarSize, ")");
        }

        return listRef.current;
      }
    };
  }, []);

  var handleKeyDown = function handleKeyDown(event) {
    var list = listRef.current;
    var key = event.key;
    /**
     * @type {Element} - will always be defined since we are in a keydown handler
     * attached to an element. A keydown event is either dispatched to the activeElement
     * or document.body or document.documentElement. Only the first case will
     * trigger this specific handler.
     */

    var currentFocus = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_7__.default)(list).activeElement;

    if (key === 'ArrowDown') {
      // Prevent scroll of the page
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === 'ArrowUp') {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === 'Home') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === 'End') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      var criteria = textCriteriaRef.current;
      var lowerKey = key.toLowerCase();
      var currTime = performance.now();

      if (criteria.keys.length > 0) {
        // Reset
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }

      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      var keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);

      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (instance) {
    // #StrictMode ready
    listRef.current = react_dom__WEBPACK_IMPORTED_MODULE_5__.findDOMNode(instance);
  }, []);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__.default)(handleOwnRef, ref);
  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */

  var activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback

  react__WEBPACK_IMPORTED_MODULE_2__.Children.forEach(children, function (child, index) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.isValidElement(child)) {
      return;
    }

    if (true) {
      if ((0,react_is__WEBPACK_IMPORTED_MODULE_3__.isFragment)(child)) {
        console.error(["Material-UI: The Menu component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    if (!child.props.disabled) {
      if (variant === 'selectedMenu' && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  var items = react__WEBPACK_IMPORTED_MODULE_2__.Children.map(children, function (child, index) {
    if (index === activeItemIndex) {
      var newChildProps = {};

      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }

      if (child.props.tabIndex === undefined && variant === 'selectedMenu') {
        newChildProps.tabIndex = 0;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(child, newChildProps);
    }

    return child;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_List__WEBPACK_IMPORTED_MODULE_9__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    role: "menu",
    ref: handleRef,
    className: className,
    onKeyDown: handleKeyDown,
    tabIndex: autoFocus ? 0 : -1
  }, other), items);
});
 true ? MenuList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   */
  autoFocusItem: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * If `true`, will allow focus on disabled items.
   */
  disabledItemsFocusable: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the menu items will not wrap focus.
   */
  disableListWrap: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * @ignore
   */
  onKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['menu', 'selectedMenu'])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (MenuList);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/MenuList/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/MenuList/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _MenuList__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuList */ "./node_modules/@material-ui/core/esm/MenuList/MenuList.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Menu/Menu.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Menu/Menu.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "react-is");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/deprecatedPropType */ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js");














var RTL_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};
var LTR_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};
var styles = {
  /* Styles applied to the `Paper` component. */
  paper: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tapable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: 'calc(100% - 96px)',
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: 'touch'
  },

  /* Styles applied to the `List` component via `MenuList`. */
  list: {
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  }
};
var Menu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Menu(props, ref) {
  var _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
      children = props.children,
      classes = props.classes,
      _props$disableAutoFoc = props.disableAutoFocusItem,
      disableAutoFocusItem = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$MenuListProps = props.MenuListProps,
      MenuListProps = _props$MenuListProps === void 0 ? {} : _props$MenuListProps,
      onClose = props.onClose,
      onEnteringProp = props.onEntering,
      open = props.open,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      PopoverClasses = props.PopoverClasses,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
      _props$TransitionProp = props.TransitionProps;
  _props$TransitionProp = _props$TransitionProp === void 0 ? {} : _props$TransitionProp;

  var onEntering = _props$TransitionProp.onEntering,
      TransitionProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_props$TransitionProp, ["onEntering"]),
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'selectedMenu' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["autoFocus", "children", "classes", "disableAutoFocusItem", "MenuListProps", "onClose", "onEntering", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"]);

  var theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_8__.default)();
  var autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  var menuListActionsRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  var contentAnchorRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);

  var getContentAnchorEl = function getContentAnchorEl() {
    return contentAnchorRef.current;
  };

  var handleEntering = function handleEntering(element, isAppearing) {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
    }

    if (onEnteringProp) {
      onEnteringProp(element, isAppearing);
    }

    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };

  var handleListKeyDown = function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();

      if (onClose) {
        onClose(event, 'tabKeyDown');
      }
    }
  };
  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */


  var activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback

  react__WEBPACK_IMPORTED_MODULE_2__.Children.map(children, function (child, index) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.isValidElement(child)) {
      return;
    }

    if (true) {
      if ((0,react_is__WEBPACK_IMPORTED_MODULE_3__.isFragment)(child)) {
        console.error(["Material-UI: The Menu component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    if (!child.props.disabled) {
      if (variant !== "menu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  var items = react__WEBPACK_IMPORTED_MODULE_2__.Children.map(children, function (child, index) {
    if (index === activeItemIndex) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(child, {
        ref: function ref(instance) {
          // #StrictMode ready
          contentAnchorRef.current = react_dom__WEBPACK_IMPORTED_MODULE_7__.findDOMNode(instance);
          (0,_utils_setRef__WEBPACK_IMPORTED_MODULE_9__.default)(child.ref, instance);
        }
      });
    }

    return child;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Popover__WEBPACK_IMPORTED_MODULE_10__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    getContentAnchorEl: getContentAnchorEl,
    classes: PopoverClasses,
    onClose: onClose,
    TransitionProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      onEntering: handleEntering
    }, TransitionProps),
    anchorOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
    transformOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
    PaperProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, PaperProps, {
      classes: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, PaperProps.classes, {
        root: classes.paper
      })
    }),
    open: open,
    ref: ref,
    transitionDuration: transitionDuration
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_MenuList__WEBPACK_IMPORTED_MODULE_11__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    onKeyDown: handleListKeyDown,
    actions: menuListActionsRef,
    autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
    autoFocusItem: autoFocusItem,
    variant: variant
  }, MenuListProps, {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.list, MenuListProps.className)
  }), items));
});
 true ? Menu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A HTML element, or a function that returns it.
   * It's used to set the position of the menu.
   */
  anchorEl: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.HTMLElementType, (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)]),

  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   */
  disableAutoFocusItem: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Props applied to the [`MenuList`](/api/menu-list/) element.
   */
  MenuListProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired before the Menu enters.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEnter: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_12__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), 'Use the `TransitionProps` prop instead.'),

  /**
   * Callback fired when the Menu has entered.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEntered: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_12__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), 'Use the `TransitionProps` prop instead.'),

  /**
   * Callback fired when the Menu is entering.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEntering: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_12__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), 'Use the `TransitionProps` prop instead.'),

  /**
   * Callback fired before the Menu exits.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExit: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_12__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), 'Use the `TransitionProps` prop instead.'),

  /**
   * Callback fired when the Menu has exited.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExited: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_12__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), 'Use the `TransitionProps` prop instead.'),

  /**
   * Callback fired when the Menu is exiting.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExiting: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_12__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), 'Use the `TransitionProps` prop instead.'),

  /**
   * If `true`, the menu is visible.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired),

  /**
   * @ignore
   */
  PaperProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * `classes` prop applied to the [`Popover`](/api/popover/) element.
   */
  PopoverClasses: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * The length of the transition in `ms`, or 'auto'
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['auto']), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)
  })]),

  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition) component.
   */
  TransitionProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['menu', 'selectedMenu'])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_13__.default)(styles, {
  name: 'MuiMenu'
})(Menu));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Modal/Modal.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Modal/Modal.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/deprecatedPropType */ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Portal */ "./node_modules/@material-ui/core/esm/Portal/index.js");
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/createChainedFunction */ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony import */ var _styles_zIndex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/zIndex */ "./node_modules/@material-ui/core/esm/styles/zIndex.js");
/* harmony import */ var _ModalManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ModalManager */ "./node_modules/@material-ui/core/esm/Modal/ModalManager.js");
/* harmony import */ var _Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Unstable_TrapFocus */ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/index.js");
/* harmony import */ var _SimpleBackdrop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SimpleBackdrop */ "./node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js");


















function getContainer(container) {
  container = typeof container === 'function' ? container() : container;
  return react_dom__WEBPACK_IMPORTED_MODULE_3__.findDOMNode(container);
}

function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
} // A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.


var defaultManager = new _ModalManager__WEBPACK_IMPORTED_MODULE_7__.default();
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0
    },

    /* Styles applied to the root element if the `Modal` has exited. */
    hidden: {
      visibility: 'hidden'
    }
  };
};
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/api/dialog/)
 * - [Drawer](/api/drawer/)
 * - [Menu](/api/menu/)
 * - [Popover](/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */

var Modal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Modal(inProps, ref) {
  var theme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
  var props = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__.getThemeProps)({
    name: 'MuiModal',
    props: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, inProps),
    theme: theme
  });

  var _props$BackdropCompon = props.BackdropComponent,
      BackdropComponent = _props$BackdropCompon === void 0 ? _SimpleBackdrop__WEBPACK_IMPORTED_MODULE_8__.default : _props$BackdropCompon,
      BackdropProps = props.BackdropProps,
      children = props.children,
      _props$closeAfterTran = props.closeAfterTransition,
      closeAfterTransition = _props$closeAfterTran === void 0 ? false : _props$closeAfterTran,
      container = props.container,
      _props$disableAutoFoc = props.disableAutoFocus,
      disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$disableBackdro = props.disableBackdropClick,
      disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro,
      _props$disableEnforce = props.disableEnforceFocus,
      disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
      _props$disableEscapeK = props.disableEscapeKeyDown,
      disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      _props$disableRestore = props.disableRestoreFocus,
      disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
      _props$disableScrollL = props.disableScrollLock,
      disableScrollLock = _props$disableScrollL === void 0 ? false : _props$disableScrollL,
      _props$hideBackdrop = props.hideBackdrop,
      hideBackdrop = _props$hideBackdrop === void 0 ? false : _props$hideBackdrop,
      _props$keepMounted = props.keepMounted,
      keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
      _props$manager = props.manager,
      manager = _props$manager === void 0 ? defaultManager : _props$manager,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEscapeKeyDown = props.onEscapeKeyDown,
      onRendered = props.onRendered,
      open = props.open,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["BackdropComponent", "BackdropProps", "children", "closeAfterTransition", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(true),
      exited = _React$useState[0],
      setExited = _React$useState[1];

  var modal = react__WEBPACK_IMPORTED_MODULE_2__.useRef({});
  var mountNodeRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  var modalRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__.default)(modalRef, ref);
  var hasTransition = getHasTransition(props);

  var getDoc = function getDoc() {
    return (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_10__.default)(mountNodeRef.current);
  };

  var getModal = function getModal() {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };

  var handleMounted = function handleMounted() {
    manager.mount(getModal(), {
      disableScrollLock: disableScrollLock
    }); // Fix a bug on Chrome where the scroll isn't initially 0.

    modalRef.current.scrollTop = 0;
  };

  var handleOpen = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_11__.default)(function () {
    var resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer); // The element was already mounted.

    if (modalRef.current) {
      handleMounted();
    }
  });
  var isTopModal = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    return manager.isTopModal(getModal());
  }, [manager]);
  var handlePortalRef = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_11__.default)(function (node) {
    mountNodeRef.current = node;

    if (!node) {
      return;
    }

    if (onRendered) {
      onRendered();
    }

    if (open && isTopModal()) {
      handleMounted();
    } else {
      (0,_ModalManager__WEBPACK_IMPORTED_MODULE_7__.ariaHidden)(modalRef.current, true);
    }
  });
  var handleClose = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    manager.remove(getModal());
  }, [manager]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    return function () {
      handleClose();
    };
  }, [handleClose]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);

  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }

  var handleEnter = function handleEnter() {
    setExited(false);
  };

  var handleExited = function handleExited() {
    setExited(true);

    if (closeAfterTransition) {
      handleClose();
    }
  };

  var handleBackdropClick = function handleBackdropClick(event) {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (!disableBackdropClick && onClose) {
      onClose(event, 'backdropClick');
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviours like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (event.key !== 'Escape' || !isTopModal()) {
      return;
    }

    if (onEscapeKeyDown) {
      onEscapeKeyDown(event);
    }

    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();

      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };

  var inlineStyle = styles(theme || {
    zIndex: _styles_zIndex__WEBPACK_IMPORTED_MODULE_12__.default
  });
  var childProps = {};

  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = children.props.tabIndex || '-1';
  } // It's a Transition like component


  if (hasTransition) {
    childProps.onEnter = (0,_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_13__.default)(handleEnter, children.props.onEnter);
    childProps.onExited = (0,_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_13__.default)(handleExited, children.props.onExited);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Portal__WEBPACK_IMPORTED_MODULE_14__.default, {
    ref: handlePortalRef,
    container: container,
    disablePortal: disablePortal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    ref: handleRef,
    onKeyDown: handleKeyDown,
    role: "presentation"
  }, other, {
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, inlineStyle.root, !open && exited ? inlineStyle.hidden : {}, other.style)
  }), hideBackdrop ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(BackdropComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    open: open,
    onClick: handleBackdropClick
  }, BackdropProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_15__.default, {
    disableEnforceFocus: disableEnforceFocus,
    disableAutoFocus: disableAutoFocus,
    disableRestoreFocus: disableRestoreFocus,
    getDoc: getDoc,
    isEnabled: isTopModal,
    open: open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(children, childProps))));
});
 true ? Modal.propTypes = {
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   */
  BackdropComponent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),

  /**
   * Props applied to the [`Backdrop`](/api/backdrop/) element.
   */
  BackdropProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * A single child content element.
   */
  children: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.elementAcceptingRef.isRequired,

  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   */
  closeAfterTransition: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.HTMLElementType, prop_types__WEBPACK_IMPORTED_MODULE_4___default().instanceOf(react__WEBPACK_IMPORTED_MODULE_2__.Component), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)]),

  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, clicking the backdrop will not fire `onClose`.
   */
  disableBackdropClick: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_16__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), 'Use the onClose prop with the `reason` argument to filter the `backdropClick` events.'),

  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, hitting escape will not fire `onClose`.
   */
  disableEscapeKeyDown: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden.
   */
  disableRestoreFocus: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Disable the scroll lock behavior.
   */
  disableScrollLock: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * If `true`, the backdrop is not rendered.
   */
  hideBackdrop: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   */
  keepMounted: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * @ignore
   */
  manager: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_16__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), 'Use the onClose prop with the `reason` argument to handle the `backdropClick` events.'),

  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Callback fired when the escape key is pressed,
   * `disableEscapeKeyDown` is false and the modal is in focus.
   */
  onEscapeKeyDown: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_16__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), 'Use the onClose prop with the `reason` argument to handle the `escapeKeyDown` events.'),

  /**
   * Callback fired once the children has been mounted into the `container`.
   * It signals that the `open={true}` prop took effect.
   *
   * This prop will be removed in v5, the ref can be used instead.
   */
  onRendered: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_16__.default)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), 'Use the ref instead.'),

  /**
   * If `true`, the modal is open.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Modal/ModalManager.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Modal/ModalManager.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ariaHidden": function() { return /* binding */ ariaHidden; },
/* harmony export */   "default": function() { return /* binding */ ModalManager; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getScrollbarSize */ "./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_ownerWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/ownerWindow */ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js");





 // Is a vertical scrollbar displayed?

function isOverflowing(container) {
  var doc = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_3__.default)(container);

  if (doc.body === container) {
    return (0,_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_4__.default)(doc).innerWidth > doc.documentElement.clientWidth;
  }

  return container.scrollHeight > container.clientHeight;
}

function ariaHidden(node, show) {
  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function getPaddingRight(node) {
  return parseInt(window.getComputedStyle(node)['padding-right'], 10) || 0;
}

function ariaHiddenSiblings(container, mountNode, currentNode) {
  var nodesToExclude = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var show = arguments.length > 4 ? arguments[4] : undefined;
  var blacklist = [mountNode, currentNode].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(nodesToExclude));
  var blacklistTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE'];
  [].forEach.call(container.children, function (node) {
    if (node.nodeType === 1 && blacklist.indexOf(node) === -1 && blacklistTagNames.indexOf(node.tagName) === -1) {
      ariaHidden(node, show);
    }
  });
}

function findIndexOf(containerInfo, callback) {
  var idx = -1;
  containerInfo.some(function (item, index) {
    if (callback(item)) {
      idx = index;
      return true;
    }

    return false;
  });
  return idx;
}

function handleContainer(containerInfo, props) {
  var restoreStyle = [];
  var restorePaddings = [];
  var container = containerInfo.container;
  var fixedNodes;

  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      var scrollbarSize = (0,_utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_5__.default)();
      restoreStyle.push({
        value: container.style.paddingRight,
        key: 'padding-right',
        el: container
      }); // Use computed style, here to get the real padding to add our scrollbar width.

      container.style['padding-right'] = "".concat(getPaddingRight(container) + scrollbarSize, "px"); // .mui-fixed is a global helper.

      fixedNodes = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_3__.default)(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedNodes, function (node) {
        restorePaddings.push(node.style.paddingRight);
        node.style.paddingRight = "".concat(getPaddingRight(node) + scrollbarSize, "px");
      });
    } // Improve Gatsby support
    // https://css-tricks.com/snippets/css/force-vertical-scrollbar/


    var parent = container.parentElement;
    var scrollContainer = parent.nodeName === 'HTML' && window.getComputedStyle(parent)['overflow-y'] === 'scroll' ? parent : container; // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.

    restoreStyle.push({
      value: scrollContainer.style.overflow,
      key: 'overflow',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }

  var restore = function restore() {
    if (fixedNodes) {
      [].forEach.call(fixedNodes, function (node, i) {
        if (restorePaddings[i]) {
          node.style.paddingRight = restorePaddings[i];
        } else {
          node.style.removeProperty('padding-right');
        }
      });
    }

    restoreStyle.forEach(function (_ref) {
      var value = _ref.value,
          el = _ref.el,
          key = _ref.key;

      if (value) {
        el.style.setProperty(key, value);
      } else {
        el.style.removeProperty(key);
      }
    });
  };

  return restore;
}

function getHiddenSiblings(container) {
  var hiddenSiblings = [];
  [].forEach.call(container.children, function (node) {
    if (node.getAttribute && node.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(node);
    }
  });
  return hiddenSiblings;
}
/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */


var ModalManager = /*#__PURE__*/function () {
  function ModalManager() {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ModalManager);

    // this.modals[modalIndex] = modal
    this.modals = []; // this.containers[containerIndex] = {
    //   modals: [],
    //   container,
    //   restore: null,
    // }

    this.containers = [];
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ModalManager, [{
    key: "add",
    value: function add(modal, container) {
      var modalIndex = this.modals.indexOf(modal);

      if (modalIndex !== -1) {
        return modalIndex;
      }

      modalIndex = this.modals.length;
      this.modals.push(modal); // If the modal we are adding is already in the DOM.

      if (modal.modalRef) {
        ariaHidden(modal.modalRef, false);
      }

      var hiddenSiblingNodes = getHiddenSiblings(container);
      ariaHiddenSiblings(container, modal.mountNode, modal.modalRef, hiddenSiblingNodes, true);
      var containerIndex = findIndexOf(this.containers, function (item) {
        return item.container === container;
      });

      if (containerIndex !== -1) {
        this.containers[containerIndex].modals.push(modal);
        return modalIndex;
      }

      this.containers.push({
        modals: [modal],
        container: container,
        restore: null,
        hiddenSiblingNodes: hiddenSiblingNodes
      });
      return modalIndex;
    }
  }, {
    key: "mount",
    value: function mount(modal, props) {
      var containerIndex = findIndexOf(this.containers, function (item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.containers[containerIndex];

      if (!containerInfo.restore) {
        containerInfo.restore = handleContainer(containerInfo, props);
      }
    }
  }, {
    key: "remove",
    value: function remove(modal) {
      var modalIndex = this.modals.indexOf(modal);

      if (modalIndex === -1) {
        return modalIndex;
      }

      var containerIndex = findIndexOf(this.containers, function (item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.containers[containerIndex];
      containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
      this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

      if (containerInfo.modals.length === 0) {
        // The modal might be closed before it had the chance to be mounted in the DOM.
        if (containerInfo.restore) {
          containerInfo.restore();
        }

        if (modal.modalRef) {
          // In case the modal wasn't in the DOM yet.
          ariaHidden(modal.modalRef, true);
        }

        ariaHiddenSiblings(containerInfo.container, modal.mountNode, modal.modalRef, containerInfo.hiddenSiblingNodes, false);
        this.containers.splice(containerIndex, 1);
      } else {
        // Otherwise make sure the next top modal is visible to a screen reader.
        var nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
        // aria-hidden because the dom element doesn't exist either
        // when modal was unmounted before modalRef gets null

        if (nextTop.modalRef) {
          ariaHidden(nextTop.modalRef, false);
        }
      }

      return modalIndex;
    }
  }, {
    key: "isTopModal",
    value: function isTopModal(modal) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
    }
  }]);

  return ModalManager;
}();



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




var styles = {
  /* Styles applied to the root element. */
  root: {
    zIndex: -1,
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent'
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: 'transparent'
  }
};
/**
 * @ignore - internal component.
 */

var SimpleBackdrop = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function SimpleBackdrop(props, ref) {
  var _props$invisible = props.invisible,
      invisible = _props$invisible === void 0 ? false : _props$invisible,
      open = props.open,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["invisible", "open"]);

  return open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    "aria-hidden": true,
    ref: ref
  }, other, {
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, styles.root, invisible ? styles.invisible : {}, other.style)
  })) : null;
});
 true ? SimpleBackdrop.propTypes = {
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the backdrop is open.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (SimpleBackdrop);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Modal/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Modal/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "ModalManager": function() { return /* reexport safe */ _ModalManager__WEBPACK_IMPORTED_MODULE_1__.default; }
/* harmony export */ });
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./node_modules/@material-ui/core/esm/Modal/Modal.js");
/* harmony import */ var _ModalManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalManager */ "./node_modules/@material-ui/core/esm/Modal/ModalManager.js");



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NativeSelectInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NativeSelectInput */ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/svg-icons/ArrowDropDown */ "./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Input */ "./node_modules/@material-ui/core/esm/Input/index.js");










var styles = function styles(theme) {
  return {
    /* Styles applied to the select component `root` class. */
    root: {},

    /* Styles applied to the select component `select` class. */
    select: {
      '-moz-appearance': 'none',
      // Reset
      '-webkit-appearance': 'none',
      // Reset
      // When interacting quickly, the text can end up selected.
      // Native select can't be selected either.
      userSelect: 'none',
      borderRadius: 0,
      // Reset
      minWidth: 16,
      // So it doesn't collapse.
      cursor: 'pointer',
      '&:focus': {
        // Show that it's not an text input
        backgroundColor: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
        borderRadius: 0 // Reset Chrome style

      },
      // Remove IE 11 arrow
      '&::-ms-expand': {
        display: 'none'
      },
      '&$disabled': {
        cursor: 'default'
      },
      '&[multiple]': {
        height: 'auto'
      },
      '&:not([multiple]) option, &:not([multiple]) optgroup': {
        backgroundColor: theme.palette.background.paper
      },
      '&&': {
        paddingRight: 24
      }
    },

    /* Styles applied to the select component if `variant="filled"`. */
    filled: {
      '&&': {
        paddingRight: 32
      }
    },

    /* Styles applied to the select component if `variant="outlined"`. */
    outlined: {
      borderRadius: theme.shape.borderRadius,
      '&&': {
        paddingRight: 32
      }
    },

    /* Styles applied to the select component `selectMenu` class. */
    selectMenu: {
      height: 'auto',
      // Resets for multpile select with chips
      minHeight: '1.1876em',
      // Required for select\text-field height consistency
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },

    /* Pseudo-class applied to the select component `disabled` class. */
    disabled: {},

    /* Styles applied to the icon component. */
    icon: {
      // We use a position absolute over a flexbox in order to forward the pointer events
      // to the input and to support wrapping tags..
      position: 'absolute',
      right: 0,
      top: 'calc(50% - 12px)',
      // Center vertically
      pointerEvents: 'none',
      // Don't block pointer events on the select under the icon.
      color: theme.palette.action.active,
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    },

    /* Styles applied to the icon component if the popup is open. */
    iconOpen: {
      transform: 'rotate(180deg)'
    },

    /* Styles applied to the icon component if `variant="filled"`. */
    iconFilled: {
      right: 7
    },

    /* Styles applied to the icon component if `variant="outlined"`. */
    iconOutlined: {
      right: 7
    },

    /* Styles applied to the underlying native input component. */
    nativeInput: {
      bottom: 0,
      left: 0,
      position: 'absolute',
      opacity: 0,
      pointerEvents: 'none',
      width: '100%'
    }
  };
};
var defaultInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Input__WEBPACK_IMPORTED_MODULE_4__.default, null);
/**
 * An alternative to `<Select native />` with a much smaller bundle size footprint.
 */

var NativeSelect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function NativeSelect(props, ref) {
  var children = props.children,
      classes = props.classes,
      _props$IconComponent = props.IconComponent,
      IconComponent = _props$IconComponent === void 0 ? _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5__.default : _props$IconComponent,
      _props$input = props.input,
      input = _props$input === void 0 ? defaultInput : _props$input,
      inputProps = props.inputProps,
      variant = props.variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "classes", "IconComponent", "input", "inputProps", "variant"]);

  var muiFormControl = (0,_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__.default)();
  var fcs = (0,_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_7__.default)({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(input, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    // Most of the logic is implemented in `NativeSelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: _NativeSelectInput__WEBPACK_IMPORTED_MODULE_8__.default,
    inputProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      children: children,
      classes: classes,
      IconComponent: IconComponent,
      variant: fcs.variant,
      type: undefined
    }, inputProps, input ? input.props.inputProps : {}),
    ref: ref
  }, other));
});
 true ? NativeSelect.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The icon that displays the arrow.
   */
  IconComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().element),

  /**
   * Attributes applied to the `select` element.
   */
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The input value. The DOM API casts this to a string.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['filled', 'outlined', 'standard'])
} : 0;
NativeSelect.muiName = 'Select';
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__.default)(styles, {
  name: 'MuiNativeSelect'
})(NativeSelect));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");







/**
 * @ignore - internal component.
 */

var NativeSelectInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function NativeSelectInput(props, ref) {
  var classes = props.classes,
      className = props.className,
      disabled = props.disabled,
      IconComponent = props.IconComponent,
      inputRef = props.inputRef,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "className", "disabled", "IconComponent", "inputRef", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("select", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, // TODO v5: merge root and select
    classes.select, classes[variant], className, disabled && classes.disabled),
    disabled: disabled,
    ref: inputRef || ref
  }, other)), props.multiple ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(IconComponent, {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.icon, classes["icon".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(variant))], disabled && classes.disabled)
  }));
});
 true ? NativeSelectInput.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),

  /**
   * The CSS class name of the select element.
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the select will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The icon that displays the arrow.
   */
  IconComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType.isRequired),

  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.refType,

  /**
   * @ignore
   */
  multiple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The input value.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['standard', 'outlined', 'filled'])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (NativeSelectInput);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/OutlinedInput/NotchedOutline.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/OutlinedInput/NotchedOutline.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      top: -5,
      left: 0,
      margin: 0,
      padding: '0 8px',
      pointerEvents: 'none',
      borderRadius: 'inherit',
      borderStyle: 'solid',
      borderWidth: 1,
      overflow: 'hidden'
    },

    /* Styles applied to the legend element when `labelWidth` is provided. */
    legend: {
      textAlign: 'left',
      padding: 0,
      lineHeight: '11px',
      // sync with `height` in `legend` styles
      transition: theme.transitions.create('width', {
        duration: 150,
        easing: theme.transitions.easing.easeOut
      })
    },

    /* Styles applied to the legend element. */
    legendLabelled: {
      display: 'block',
      width: 'auto',
      textAlign: 'left',
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: '0.75em',
      visibility: 'hidden',
      maxWidth: 0.01,
      transition: theme.transitions.create('max-width', {
        duration: 50,
        easing: theme.transitions.easing.easeOut
      }),
      '& > span': {
        paddingLeft: 5,
        paddingRight: 5,
        display: 'inline-block'
      }
    },

    /* Styles applied to the legend element is notched. */
    legendNotched: {
      maxWidth: 1000,
      transition: theme.transitions.create('max-width', {
        duration: 100,
        easing: theme.transitions.easing.easeOut,
        delay: 50
      })
    }
  };
};
/**
 * @ignore - internal component.
 */

var NotchedOutline = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function NotchedOutline(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      label = props.label,
      labelWidthProp = props.labelWidth,
      notched = props.notched,
      style = props.style,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(props, ["children", "classes", "className", "label", "labelWidth", "notched", "style"]);

  var theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_6__.default)();
  var align = theme.direction === 'rtl' ? 'right' : 'left';

  if (label !== undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("fieldset", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
      "aria-hidden": true,
      className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.root, className),
      ref: ref,
      style: style
    }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("legend", {
      className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.legendLabelled, notched && classes.legendNotched)
    }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, label) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: '&#8203;'
      }
    })));
  }

  var labelWidth = labelWidthProp > 0 ? labelWidthProp * 0.75 + 8 : 0.01;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("fieldset", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    "aria-hidden": true,
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, "padding".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__.default)(align)), 8), style),
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.root, className),
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("legend", {
    className: classes.legend,
    style: {
      // IE 11: fieldset with legend does not render
      // a border radius. This maintains consistency
      // by always having a legend rendered
      width: notched ? labelWidth : 0.01
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  })));
});
 true ? NotchedOutline.propTypes = {
  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /**
   * The label.
   */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * The width of the label.
   */
  labelWidth: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number.isRequired),

  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__.default)(styles, {
  name: 'PrivateNotchedOutline'
})(NotchedOutline));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _NotchedOutline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NotchedOutline */ "./node_modules/@material-ui/core/esm/OutlinedInput/NotchedOutline.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");









var styles = function styles(theme) {
  var borderColor = theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      '&:hover $notchedOutline': {
        borderColor: theme.palette.text.primary
      },
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        '&:hover $notchedOutline': {
          borderColor: borderColor
        }
      },
      '&$focused $notchedOutline': {
        borderColor: theme.palette.primary.main,
        borderWidth: 2
      },
      '&$error $notchedOutline': {
        borderColor: theme.palette.error.main
      },
      '&$disabled $notchedOutline': {
        borderColor: theme.palette.action.disabled
      }
    },

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {
      '&$focused $notchedOutline': {
        borderColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
      paddingLeft: 14
    },

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
      paddingRight: 14
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: '18.5px 14px',
      '&$marginDense': {
        paddingTop: 10.5,
        paddingBottom: 10.5
      }
    },

    /* Styles applied to the `NotchedOutline` element. */
    notchedOutline: {
      borderColor: borderColor
    },

    /* Styles applied to the `input` element. */
    input: {
      padding: '18.5px 14px',
      '&:-webkit-autofill': {
        WebkitBoxShadow: theme.palette.type === 'light' ? null : '0 0 0 100px #266798 inset',
        WebkitTextFillColor: theme.palette.type === 'light' ? null : '#fff',
        caretColor: theme.palette.type === 'light' ? null : '#fff',
        borderRadius: 'inherit'
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 10.5,
      paddingBottom: 10.5
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      padding: 0
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
      paddingLeft: 0
    },

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};
var OutlinedInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function OutlinedInput(props, ref) {
  var classes = props.classes,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      label = props.label,
      _props$labelWidth = props.labelWidth,
      labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      notched = props.notched,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "fullWidth", "inputComponent", "label", "labelWidth", "multiline", "notched", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InputBase__WEBPACK_IMPORTED_MODULE_6__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    renderSuffix: function renderSuffix(state) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_NotchedOutline__WEBPACK_IMPORTED_MODULE_7__.default, {
        className: classes.notchedOutline,
        label: label,
        labelWidth: labelWidth,
        notched: typeof notched !== 'undefined' ? notched : Boolean(state.startAdornment || state.filled || state.focused)
      });
    },
    classes: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, classes, {
      root: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, classes.underline),
      notchedOutline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
 true ? OutlinedInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The id of the `input` element.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.refType,

  /**
   * The label of the input. It is only used for layout. The actual labelling
   * is handled by `InputLabel`. If specified `labelWidth` is ignored.
   */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * The width of the label. Is ignored if `label` is provided. Prefer `label`
   * if the input label appears with a strike through.
   */
  labelWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense', 'none']),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Name attribute of the `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the `input` element will be required.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
} : 0;
OutlinedInput.muiName = 'Input';
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__.default)(styles, {
  name: 'MuiOutlinedInput'
})(OutlinedInput));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/OutlinedInput/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _OutlinedInput__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _OutlinedInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Paper/Paper.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Paper/Paper.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");







var styles = function styles(theme) {
  var elevations = {};
  theme.shadows.forEach(function (shadow, index) {
    elevations["elevation".concat(index)] = {
      boxShadow: shadow
    };
  });
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: theme.transitions.create('box-shadow')
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      border: "1px solid ".concat(theme.palette.divider)
    }
  }, elevations);
};
var Paper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Paper(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$square = props.square,
      square = _props$square === void 0 ? false : _props$square,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 1 : _props$elevation,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'elevation' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(props, ["classes", "className", "component", "square", "elevation", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className, variant === 'outlined' ? classes.outlined : classes["elevation".concat(elevation)], !square && classes.rounded),
    ref: ref
  }, other));
});
 true ? Paper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   */
  elevation: (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.chainPropTypes)((prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), function (props) {
    var classes = props.classes,
        elevation = props.elevation; // in case `withStyles` fails to inject we don't need this warning

    if (classes === undefined) {
      return null;
    }

    if (elevation != null && classes["elevation".concat(elevation)] === undefined) {
      return new Error("Material-UI: This elevation `".concat(elevation, "` is not implemented."));
    }

    return null;
  }),

  /**
   * If `true`, rounded corners are disabled.
   */
  square: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['elevation', 'outlined'])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles, {
  name: 'MuiPaper'
})(Paper));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Paper/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Paper/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Paper__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Popover/Popover.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Popover/Popover.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOffsetTop": function() { return /* binding */ getOffsetTop; },
/* harmony export */   "getOffsetLeft": function() { return /* binding */ getOffsetLeft; },
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_ownerWindow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/ownerWindow */ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js");
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/createChainedFunction */ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js");
/* harmony import */ var _utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/deprecatedPropType */ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _Grow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
















function getOffsetTop(rect, vertical) {
  var offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}
function getOffsetLeft(rect, horizontal) {
  var offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}

function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
    return typeof n === 'number' ? "".concat(n, "px") : n;
  }).join(' ');
} // Sum the scrollTop between two elements.


function getScrollParent(parent, child) {
  var element = child;
  var scrollTop = 0;

  while (element && element !== parent) {
    element = element.parentElement;
    scrollTop += element.scrollTop;
  }

  return scrollTop;
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

var styles = {
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the `Paper` component. */
  paper: {
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    // So we see the popover when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  }
};
var Popover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Popover(props, ref) {
  var action = props.action,
      anchorEl = props.anchorEl,
      _props$anchorOrigin = props.anchorOrigin,
      anchorOrigin = _props$anchorOrigin === void 0 ? {
    vertical: 'top',
    horizontal: 'left'
  } : _props$anchorOrigin,
      anchorPosition = props.anchorPosition,
      _props$anchorReferenc = props.anchorReference,
      anchorReference = _props$anchorReferenc === void 0 ? 'anchorEl' : _props$anchorReferenc,
      children = props.children,
      classes = props.classes,
      className = props.className,
      containerProp = props.container,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 8 : _props$elevation,
      getContentAnchorEl = props.getContentAnchorEl,
      _props$marginThreshol = props.marginThreshold,
      marginThreshold = _props$marginThreshol === void 0 ? 16 : _props$marginThreshol,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      _props$transformOrigi = props.transformOrigin,
      transformOrigin = _props$transformOrigi === void 0 ? {
    vertical: 'top',
    horizontal: 'left'
  } : _props$transformOrigi,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Grow__WEBPACK_IMPORTED_MODULE_7__.default : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDurationProp = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
      _props$TransitionProp = props.TransitionProps,
      TransitionProps = _props$TransitionProp === void 0 ? {} : _props$TransitionProp,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "className", "container", "elevation", "getContentAnchorEl", "marginThreshold", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]);

  var paperRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(); // Returns the top/left offset of the position
  // to attach to on the anchor element (or body if none is provided)

  var getAnchorOffset = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (contentAnchorOffset) {
    if (anchorReference === 'anchorPosition') {
      if (true) {
        if (!anchorPosition) {
          console.error('Material-UI: You need to provide a `anchorPosition` prop when using ' + '<Popover anchorReference="anchorPosition" />.');
        }
      }

      return anchorPosition;
    }

    var resolvedAnchorEl = getAnchorEl(anchorEl); // If an anchor element wasn't provided, just use the parent body element of this Popover

    var anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_8__.default)(paperRef.current).body;
    var anchorRect = anchorElement.getBoundingClientRect();

    if (true) {
      var box = anchorElement.getBoundingClientRect();

      if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
        console.warn(['Material-UI: The `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
      }
    }

    var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorVertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]); // Returns the vertical offset of inner content to anchor the transform on if provided

  var getContentAnchorOffset = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (element) {
    var contentAnchorOffset = 0;

    if (getContentAnchorEl && anchorReference === 'anchorEl') {
      var contentAnchorEl = getContentAnchorEl(element);

      if (contentAnchorEl && element.contains(contentAnchorEl)) {
        var scrollTop = getScrollParent(element, contentAnchorEl);
        contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
      } // != the default value


      if (true) {
        if (anchorOrigin.vertical !== 'top') {
          console.error(['Material-UI: You can not change the default `anchorOrigin.vertical` value ', 'when also providing the `getContentAnchorEl` prop to the popover component.', 'Only use one of the two props.', 'Set `getContentAnchorEl` to `null | undefined`' + ' or leave `anchorOrigin.vertical` unchanged.'].join('\n'));
        }
      }
    }

    return contentAnchorOffset;
  }, [anchorOrigin.vertical, anchorReference, getContentAnchorEl]); // Return the base transform origin using the element
  // and taking the content anchor offset into account if in use

  var getTransformOrigin = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (elemRect) {
    var contentAnchorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  var getPositioningStyle = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (element) {
    // Check if the parent has requested anchoring on an inner content node
    var contentAnchorOffset = getContentAnchorOffset(element);
    var elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    }; // Get the transform origin point on the element itself

    var elemTransformOrigin = getTransformOrigin(elemRect, contentAnchorOffset);

    if (anchorReference === 'none') {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    } // Get the offset of of the anchoring element


    var anchorOffset = getAnchorOffset(contentAnchorOffset); // Calculate element positioning

    var top = anchorOffset.top - elemTransformOrigin.vertical;
    var left = anchorOffset.left - elemTransformOrigin.horizontal;
    var bottom = top + elemRect.height;
    var right = left + elemRect.width; // Use the parent window of the anchorEl if provided

    var containerWindow = (0,_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_9__.default)(getAnchorEl(anchorEl)); // Window thresholds taking required margin into account

    var heightThreshold = containerWindow.innerHeight - marginThreshold;
    var widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

    if (top < marginThreshold) {
      var diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (bottom > heightThreshold) {
      var _diff = bottom - heightThreshold;

      top -= _diff;
      elemTransformOrigin.vertical += _diff;
    }

    if (true) {
      if (elemRect.height > heightThreshold && elemRect.height && heightThreshold) {
        console.error(['Material-UI: The popover component is too tall.', "Some part of it can not be seen on the screen (".concat(elemRect.height - heightThreshold, "px)."), 'Please consider adding a `max-height` to improve the user-experience.'].join('\n'));
      }
    } // Check if the horizontal axis needs shifting


    if (left < marginThreshold) {
      var _diff2 = left - marginThreshold;

      left -= _diff2;
      elemTransformOrigin.horizontal += _diff2;
    } else if (right > widthThreshold) {
      var _diff3 = right - widthThreshold;

      left -= _diff3;
      elemTransformOrigin.horizontal += _diff3;
    }

    return {
      top: "".concat(Math.round(top), "px"),
      left: "".concat(Math.round(left), "px"),
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getContentAnchorOffset, getTransformOrigin, marginThreshold]);
  var setPositioningStyles = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    var element = paperRef.current;

    if (!element) {
      return;
    }

    var positioning = getPositioningStyle(element);

    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }

    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }

    element.style.transformOrigin = positioning.transformOrigin;
  }, [getPositioningStyle]);

  var handleEntering = function handleEntering(element, isAppearing) {
    if (onEntering) {
      onEntering(element, isAppearing);
    }

    setPositioningStyles();
  };

  var handlePaperRef = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (instance) {
    // #StrictMode ready
    paperRef.current = react_dom__WEBPACK_IMPORTED_MODULE_4__.findDOMNode(instance);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (open) {
      setPositioningStyles();
    }
  });
  react__WEBPACK_IMPORTED_MODULE_2__.useImperativeHandle(action, function () {
    return open ? {
      updatePosition: function updatePosition() {
        setPositioningStyles();
      }
    } : null;
  }, [open, setPositioningStyles]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (!open) {
      return undefined;
    }

    var handleResize = (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_10__.default)(function () {
      setPositioningStyles();
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [open, setPositioningStyles]);
  var transitionDuration = transitionDurationProp;

  if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
    transitionDuration = undefined;
  } // If the container prop is provided, use that
  // If the anchorEl prop is provided, use its parent body element as the container
  // If neither are provided let the Modal take care of choosing the container


  var container = containerProp || (anchorEl ? (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_8__.default)(getAnchorEl(anchorEl)).body : undefined);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_11__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    container: container,
    open: open,
    ref: ref,
    BackdropProps: {
      invisible: true
    },
    className: clsx__WEBPACK_IMPORTED_MODULE_6___default()(classes.root, className)
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    appear: true,
    in: open,
    onEnter: onEnter,
    onEntered: onEntered,
    onExit: onExit,
    onExited: onExited,
    onExiting: onExiting,
    timeout: transitionDuration
  }, TransitionProps, {
    onEntering: (0,_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_12__.default)(handleEntering, TransitionProps.onEntering)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Paper__WEBPACK_IMPORTED_MODULE_13__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    elevation: elevation,
    ref: handlePaperRef
  }, PaperProps, {
    className: clsx__WEBPACK_IMPORTED_MODULE_6___default()(classes.paper, PaperProps.className)
  }), children)));
});
 true ? Popover.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.refType,

  /**
   * A HTML element, or a function that returns it.
   * It's used to set the position of the popover.
   */
  anchorEl: (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.chainPropTypes)(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.HTMLElementType, (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)]), function (props) {
    if (props.open && (!props.anchorReference || props.anchorReference === 'anchorEl')) {
      var resolvedAnchorEl = getAnchorEl(props.anchorEl);

      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        var box = resolvedAnchorEl.getBoundingClientRect();

        if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(['Material-UI: The `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      } else {
        return new Error(['Material-UI: The `anchorEl` prop provided to the component is invalid.', "It should be an Element instance but it's `".concat(resolvedAnchorEl, "` instead.")].join('\n'));
      }
    }

    return null;
  }),

  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   */
  anchorOrigin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    horizontal: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['center', 'left', 'right']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)]).isRequired,
    vertical: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['bottom', 'center', 'top']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)]).isRequired
  }),

  /**
   * This is the position that may be used
   * to set the position of the popover.
   * The coordinates are relative to
   * the application's client area.
   */
  anchorPosition: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    left: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired),
    top: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired)
  }),

  /**
   * This determines which anchor prop to refer to to set
   * the position of the popover.
   */
  anchorReference: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['anchorEl', 'anchorPosition', 'none']),

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.HTMLElementType, prop_types__WEBPACK_IMPORTED_MODULE_3___default().instanceOf(react__WEBPACK_IMPORTED_MODULE_2__.Component), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)]),

  /**
   * The elevation of the popover.
   */
  elevation: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),

  /**
   * This function is called in order to retrieve the content anchor element.
   * It's the opposite of the `anchorEl` prop.
   * The content anchor element should be an element inside the popover.
   * It's used to correctly scroll and set the position of the popover.
   * The positioning strategy tries to make the content anchor element just above the
   * anchor element.
   */
  getContentAnchorEl: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Specifies how close to the edge of the window the popover can appear.
   */
  marginThreshold: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),

  /**
   * Callback fired when the component requests to be closed.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired before the component is entering.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEnter: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_14__.default)((prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), 'Use the `TransitionProps` prop instead.'),

  /**
   * Callback fired when the component has entered.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEntered: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_14__.default)((prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), 'Use the `TransitionProps` prop instead.'),

  /**
   * Callback fired when the component is entering.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onEntering: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_14__.default)((prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), 'Use the `TransitionProps` prop instead.'),

  /**
   * Callback fired before the component is exiting.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExit: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_14__.default)((prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), 'Use the `TransitionProps` prop instead.'),

  /**
   * Callback fired when the component has exited.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExited: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_14__.default)((prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), 'Use the `TransitionProps` prop instead.'),

  /**
   * Callback fired when the component is exiting.
   * @deprecated Use the `TransitionProps` prop instead.
   */
  onExiting: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_14__.default)((prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), 'Use the `TransitionProps` prop instead.'),

  /**
   * If `true`, the popover is visible.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired),

  /**
   * Props applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    component: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.elementTypeAcceptingRef
  }),

  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   */
  transformOrigin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    horizontal: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['center', 'left', 'right']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)]).isRequired,
    vertical: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['bottom', 'center', 'top']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)]).isRequired
  }),

  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['auto']), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
  })]),

  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_15__.default)(styles, {
  name: 'MuiPopover'
})(Popover));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Popover/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Popover/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Popover__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popover */ "./node_modules/@material-ui/core/esm/Popover/Popover.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Portal/Portal.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Portal/Portal.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/deprecatedPropType */ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js");
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");








function getContainer(container) {
  container = typeof container === 'function' ? container() : container; // #StrictMode ready

  return react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(container);
}

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */

var Portal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Portal(props, ref) {
  var children = props.children,
      container = props.container,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      onRendered = props.onRendered;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      mountNode = _React$useState[0],
      setMountNode = _React$useState[1];

  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children) ? children.ref : null, ref);
  useEnhancedEffect(function () {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(function () {
    if (mountNode && !disablePortal) {
      (0,_utils_setRef__WEBPACK_IMPORTED_MODULE_5__.default)(ref, mountNode);
      return function () {
        (0,_utils_setRef__WEBPACK_IMPORTED_MODULE_5__.default)(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, disablePortal]);
  useEnhancedEffect(function () {
    if (onRendered && (mountNode || disablePortal)) {
      onRendered();
    }
  }, [onRendered, mountNode, disablePortal]);

  if (disablePortal) {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
        ref: handleRef
      });
    }

    return children;
  }

  return mountNode ? /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(children, mountNode) : mountNode;
});
 true ? Portal.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The children to render into the `container`.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),

  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__.HTMLElementType, prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(react__WEBPACK_IMPORTED_MODULE_0__.Component), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)]),

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * Callback fired once the children has been mounted into the `container`.
   *
   * This prop will be removed in v5, the ref can be used instead.
   * @deprecated Use the ref instead.
   */
  onRendered: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_6__.default)((prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), 'Use the ref instead.')
} : 0;

if (true) {
  // eslint-disable-next-line
  Portal['propTypes' + ''] = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__.exactProp)(Portal.propTypes);
}

/* harmony default export */ __webpack_exports__["default"] = (Portal);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Portal/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Portal/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Portal */ "./node_modules/@material-ui/core/esm/Portal/Portal.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Select/Select.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Select/Select.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SelectInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SelectInput */ "./node_modules/@material-ui/core/esm/Select/SelectInput.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../internal/svg-icons/ArrowDropDown */ "./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _NativeSelect_NativeSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../NativeSelect/NativeSelect */ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js");
/* harmony import */ var _NativeSelect_NativeSelectInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../NativeSelect/NativeSelectInput */ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js");
/* harmony import */ var _FilledInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FilledInput */ "./node_modules/@material-ui/core/esm/FilledInput/index.js");
/* harmony import */ var _OutlinedInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js");















var styles = _NativeSelect_NativeSelect__WEBPACK_IMPORTED_MODULE_5__.styles;

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Input__WEBPACK_IMPORTED_MODULE_6__.default, null);

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_FilledInput__WEBPACK_IMPORTED_MODULE_7__.default, null);

var Select = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Select(props, ref) {
  var _props$autoWidth = props.autoWidth,
      autoWidth = _props$autoWidth === void 0 ? false : _props$autoWidth,
      children = props.children,
      classes = props.classes,
      _props$displayEmpty = props.displayEmpty,
      displayEmpty = _props$displayEmpty === void 0 ? false : _props$displayEmpty,
      _props$IconComponent = props.IconComponent,
      IconComponent = _props$IconComponent === void 0 ? _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_8__.default : _props$IconComponent,
      id = props.id,
      input = props.input,
      inputProps = props.inputProps,
      label = props.label,
      labelId = props.labelId,
      _props$labelWidth = props.labelWidth,
      labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth,
      MenuProps = props.MenuProps,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      _props$native = props.native,
      native = _props$native === void 0 ? false : _props$native,
      onClose = props.onClose,
      onOpen = props.onOpen,
      open = props.open,
      renderValue = props.renderValue,
      SelectDisplayProps = props.SelectDisplayProps,
      _props$variant = props.variant,
      variantProps = _props$variant === void 0 ? 'standard' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["autoWidth", "children", "classes", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "labelWidth", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"]);

  var inputComponent = native ? _NativeSelect_NativeSelectInput__WEBPACK_IMPORTED_MODULE_9__.default : _SelectInput__WEBPACK_IMPORTED_MODULE_10__.default;
  var muiFormControl = (0,_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_11__.default)();
  var fcs = (0,_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_12__.default)({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant']
  });
  var variant = fcs.variant || variantProps;
  var InputComponent = input || {
    standard: _ref,
    outlined: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_OutlinedInput__WEBPACK_IMPORTED_MODULE_13__.default, {
      label: label,
      labelWidth: labelWidth
    }),
    filled: _ref2
  }[variant];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(InputComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    // Most of the logic is implemented in `SelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: inputComponent,
    inputProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      children: children,
      IconComponent: IconComponent,
      variant: variant,
      type: undefined,
      // We render a select. We can ignore the type provided by the `Input`.
      multiple: multiple
    }, native ? {
      id: id
    } : {
      autoWidth: autoWidth,
      displayEmpty: displayEmpty,
      labelId: labelId,
      MenuProps: MenuProps,
      onClose: onClose,
      onOpen: onOpen,
      open: open,
      renderValue: renderValue,
      SelectDisplayProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        id: id
      }, SelectDisplayProps)
    }, inputProps, {
      classes: inputProps ? (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__.mergeClasses)({
        baseClasses: classes,
        newClasses: inputProps.classes,
        Component: Select
      }) : classes
    }, input ? input.props.inputProps : {}),
    ref: ref
  }, other));
});
 true ? Select.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ??????The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function should be passed to the `renderValue` prop which returns the value to be displayed when no items are selected.
   * You can only use it when the `native` prop is `false` (default).
   */
  displayEmpty: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The icon that displays the arrow.
   */
  IconComponent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().element),

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   */
  labelWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),

  /**
   * Props applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the component will be using a native `select` element.
   */
  native: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Control `select` open state.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The input value. Providing an empty string will select no options.
   * This prop is required when the `native` prop is `false` (default).
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['filled', 'outlined', 'standard'])
} : 0;
Select.muiName = 'Select';
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_14__.default)(styles, {
  name: 'MuiSelect'
})(Select));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Select/SelectInput.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Select/SelectInput.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-is */ "react-is");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Menu/Menu */ "./node_modules/@material-ui/core/esm/Menu/Menu.js");
/* harmony import */ var _InputBase_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../InputBase/utils */ "./node_modules/@material-ui/core/esm/InputBase/utils.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_useControlled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/useControlled */ "./node_modules/@material-ui/core/esm/utils/useControlled.js");

















function areEqualValues(a, b) {
  if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__.default)(b) === 'object' && b !== null) {
    return a === b;
  }

  return String(a) === String(b);
}

function isEmpty(display) {
  return display == null || typeof display === 'string' && !display.trim();
}
/**
 * @ignore - internal component.
 */


var SelectInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.forwardRef(function SelectInput(props, ref) {
  var ariaLabel = props['aria-label'],
      autoFocus = props.autoFocus,
      autoWidth = props.autoWidth,
      children = props.children,
      classes = props.classes,
      className = props.className,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      displayEmpty = props.displayEmpty,
      IconComponent = props.IconComponent,
      inputRefProp = props.inputRef,
      labelId = props.labelId,
      _props$MenuProps = props.MenuProps,
      MenuProps = _props$MenuProps === void 0 ? {} : _props$MenuProps,
      multiple = props.multiple,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onClose = props.onClose,
      onFocus = props.onFocus,
      onOpen = props.onOpen,
      openProp = props.open,
      readOnly = props.readOnly,
      renderValue = props.renderValue,
      _props$SelectDisplayP = props.SelectDisplayProps,
      SelectDisplayProps = _props$SelectDisplayP === void 0 ? {} : _props$SelectDisplayP,
      tabIndexProp = props.tabIndex,
      type = props.type,
      valueProp = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(props, ["aria-label", "autoFocus", "autoWidth", "children", "classes", "className", "defaultValue", "disabled", "displayEmpty", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"]);

  var _useControlled = (0,_utils_useControlled__WEBPACK_IMPORTED_MODULE_9__.default)({
    controlled: valueProp,
    default: defaultValue,
    name: 'Select'
  }),
      _useControlled2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useControlled, 2),
      value = _useControlled2[0],
      setValue = _useControlled2[1];

  var inputRef = react__WEBPACK_IMPORTED_MODULE_5__.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5__.useState(null),
      displayNode = _React$useState[0],
      setDisplayNode = _React$useState[1];

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_5__.useRef(openProp != null),
      isOpenControlled = _React$useRef.current;

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_5__.useState(),
      menuMinWidthState = _React$useState2[0],
      setMenuMinWidthState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5__.useState(false),
      openState = _React$useState3[0],
      setOpenState = _React$useState3[1];

  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__.default)(ref, inputRefProp);
  react__WEBPACK_IMPORTED_MODULE_5__.useImperativeHandle(handleRef, function () {
    return {
      focus: function focus() {
        displayNode.focus();
      },
      node: inputRef.current,
      value: value
    };
  }, [displayNode, value]);
  react__WEBPACK_IMPORTED_MODULE_5__.useEffect(function () {
    if (autoFocus && displayNode) {
      displayNode.focus();
    }
  }, [autoFocus, displayNode]);
  react__WEBPACK_IMPORTED_MODULE_5__.useEffect(function () {
    if (displayNode) {
      var label = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_11__.default)(displayNode).getElementById(labelId);

      if (label) {
        var handler = function handler() {
          if (getSelection().isCollapsed) {
            displayNode.focus();
          }
        };

        label.addEventListener('click', handler);
        return function () {
          label.removeEventListener('click', handler);
        };
      }
    }

    return undefined;
  }, [labelId, displayNode]);

  var update = function update(open, event) {
    if (open) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }

    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : displayNode.clientWidth);
      setOpenState(open);
    }
  };

  var handleMouseDown = function handleMouseDown(event) {
    // Ignore everything but left-click
    if (event.button !== 0) {
      return;
    } // Hijack the default focus behavior.


    event.preventDefault();
    displayNode.focus();
    update(true, event);
  };

  var handleClose = function handleClose(event) {
    update(false, event);
  };

  var childrenArray = react__WEBPACK_IMPORTED_MODULE_5__.Children.toArray(children); // Support autofill.

  var handleChange = function handleChange(event) {
    var index = childrenArray.map(function (child) {
      return child.props.value;
    }).indexOf(event.target.value);

    if (index === -1) {
      return;
    }

    var child = childrenArray[index];
    setValue(child.props.value);

    if (onChange) {
      onChange(event, child);
    }
  };

  var handleItemClick = function handleItemClick(child) {
    return function (event) {
      if (!multiple) {
        update(false, event);
      }

      var newValue;

      if (multiple) {
        newValue = Array.isArray(value) ? value.slice() : [];
        var itemIndex = value.indexOf(child.props.value);

        if (itemIndex === -1) {
          newValue.push(child.props.value);
        } else {
          newValue.splice(itemIndex, 1);
        }
      } else {
        newValue = child.props.value;
      }

      if (child.props.onClick) {
        child.props.onClick(event);
      }

      if (value === newValue) {
        return;
      }

      setValue(newValue);

      if (onChange) {
        event.persist(); // Preact support, target is read only property on a native event.

        Object.defineProperty(event, 'target', {
          writable: true,
          value: {
            value: newValue,
            name: name
          }
        });
        onChange(event, child);
      }
    };
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (!readOnly) {
      var validKeys = [' ', 'ArrowUp', 'ArrowDown', // The native select doesn't respond to enter on MacOS, but it's recommended by
      // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
      'Enter'];

      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        update(true, event);
      }
    }
  };

  var open = displayNode !== null && (isOpenControlled ? openProp : openState);

  var handleBlur = function handleBlur(event) {
    // if open event.stopImmediatePropagation
    if (!open && onBlur) {
      event.persist(); // Preact support, target is read only property on a native event.

      Object.defineProperty(event, 'target', {
        writable: true,
        value: {
          value: value,
          name: name
        }
      });
      onBlur(event);
    }
  };

  delete other['aria-invalid'];
  var display;
  var displaySingle;
  var displayMultiple = [];
  var computeDisplay = false;
  var foundMatch = false; // No need to display any value if the field is empty.

  if ((0,_InputBase_utils__WEBPACK_IMPORTED_MODULE_12__.isFilled)({
    value: value
  }) || displayEmpty) {
    if (renderValue) {
      display = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }

  var items = childrenArray.map(function (child) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.isValidElement(child)) {
      return null;
    }

    if (true) {
      if ((0,react_is__WEBPACK_IMPORTED_MODULE_6__.isFragment)(child)) {
        console.error(["Material-UI: The Select component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    var selected;

    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error( true ? "Material-UI: The `value` prop must be an array when using the `Select` component with `multiple`." : 0);
      }

      selected = value.some(function (v) {
        return areEqualValues(v, child.props.value);
      });

      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);

      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }

    if (selected) {
      foundMatch = true;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.cloneElement(child, {
      'aria-selected': selected ? 'true' : undefined,
      onClick: handleItemClick(child),
      onKeyUp: function onKeyUp(event) {
        if (event.key === ' ') {
          // otherwise our MenuItems dispatches a click event
          // it's not behavior of the native <option> and causes
          // the select to close immediately since we open on space keydown
          event.preventDefault();
        }

        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: 'option',
      selected: selected,
      value: undefined,
      // The value is most likely not a valid HTML attribute.
      'data-value': child.props.value // Instead, we provide it as a data attribute.

    });
  });

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_5__.useEffect(function () {
      if (!foundMatch && !multiple && value !== '') {
        var values = childrenArray.map(function (child) {
          return child.props.value;
        });
        console.warn(["Material-UI: You have provided an out-of-range value `".concat(value, "` for the select ").concat(name ? "(name=\"".concat(name, "\") ") : '', "component."), "Consider providing a value that matches one of the available options or ''.", "The available values are ".concat(values.filter(function (x) {
          return x != null;
        }).map(function (x) {
          return "`".concat(x, "`");
        }).join(', ') || '""', ".")].join('\n'));
      }
    }, [foundMatch, childrenArray, multiple, name, value]);
  }

  if (computeDisplay) {
    display = multiple ? displayMultiple.join(', ') : displaySingle;
  } // Avoid performing a layout computation in the render method.


  var menuMinWidth = menuMinWidthState;

  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = displayNode.clientWidth;
  }

  var tabIndex;

  if (typeof tabIndexProp !== 'undefined') {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }

  var buttonId = SelectDisplayProps.id || (name ? "mui-component-select-".concat(name) : undefined);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(classes.root, // TODO v5: merge root and select
    classes.select, classes.selectMenu, classes[variant], className, disabled && classes.disabled),
    ref: setDisplayNode,
    tabIndex: tabIndex,
    role: "button",
    "aria-disabled": disabled ? 'true' : undefined,
    "aria-expanded": open ? 'true' : undefined,
    "aria-haspopup": "listbox",
    "aria-label": ariaLabel,
    "aria-labelledby": [labelId, buttonId].filter(Boolean).join(' ') || undefined,
    onKeyDown: handleKeyDown,
    onMouseDown: disabled || readOnly ? null : handleMouseDown,
    onBlur: handleBlur,
    onFocus: onFocus
  }, SelectDisplayProps, {
    // The id is required for proper a11y
    id: buttonId
  }), isEmpty(display) ?
  /*#__PURE__*/
  // eslint-disable-next-line react/no-danger
  react__WEBPACK_IMPORTED_MODULE_5__.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  }) : display), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    value: Array.isArray(value) ? value.join(',') : value,
    name: name,
    ref: inputRef,
    "aria-hidden": true,
    onChange: handleChange,
    tabIndex: -1,
    className: classes.nativeInput,
    autoFocus: autoFocus
  }, other)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(IconComponent, {
    className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(classes.icon, classes["icon".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_13__.default)(variant))], open && classes.iconOpen, disabled && classes.disabled)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_14__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    id: "menu-".concat(name || ''),
    anchorEl: displayNode,
    open: open,
    onClose: handleClose
  }, MenuProps, {
    MenuListProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      'aria-labelledby': labelId,
      role: 'listbox',
      disableListWrap: true
    }, MenuProps.MenuListProps),
    PaperProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, MenuProps.PaperProps, {
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        minWidth: menuMinWidth
      }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
    })
  }), items));
});
 true ? SelectInput.propTypes = {
  /**
   * @ignore
   */
  'aria-label': (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),

  /**
   * @ignore
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object.isRequired),

  /**
   * The CSS class name of the select element.
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),

  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().any),

  /**
   * If `true`, the select will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * The icon that displays the arrow.
   */
  IconComponent: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().elementType.isRequired),

  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_4__.refType,

  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),

  /**
   * Props applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),

  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),

  /**
   * @ignore
   */
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * @ignore
   */
  onFocus: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Control `select` open state.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * @ignore
   */
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),

  /**
   * @ignore
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)]),

  /**
   * @ignore
   */
  type: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().any),

  /**
   * The input value.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().any),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(['standard', 'outlined', 'filled'])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (SelectInput);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Select/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Select/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Select__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select */ "./node_modules/@material-ui/core/esm/Select/Select.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fill: 'currentColor',
      flexShrink: 0,
      fontSize: theme.typography.pxToRem(24),
      transition: theme.transitions.create('fill', {
        duration: theme.transitions.duration.shorter
      })
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `color="action"`. */
    colorAction: {
      color: theme.palette.action.active
    },

    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },

    /* Styles applied to the root element if `color="disabled"`. */
    colorDisabled: {
      color: theme.palette.action.disabled
    },

    /* Styles applied to the root element if `fontSize="inherit"`. */
    fontSizeInherit: {
      fontSize: 'inherit'
    },

    /* Styles applied to the root element if `fontSize="small"`. */
    fontSizeSmall: {
      fontSize: theme.typography.pxToRem(20)
    },

    /* Styles applied to the root element if `fontSize="large"`. */
    fontSizeLarge: {
      fontSize: theme.typography.pxToRem(35)
    }
  };
};
var SvgIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function SvgIcon(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'inherit' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'svg' : _props$component,
      _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? 'medium' : _props$fontSize,
      htmlColor = props.htmlColor,
      titleAccess = props.titleAccess,
      _props$viewBox = props.viewBox,
      viewBox = _props$viewBox === void 0 ? '0 0 24 24' : _props$viewBox,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "classes", "className", "color", "component", "fontSize", "htmlColor", "titleAccess", "viewBox"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className, color !== 'inherit' && classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(color))], fontSize !== 'default' && fontSize !== 'medium' && classes["fontSize".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__.default)(fontSize))]),
    focusable: "false",
    viewBox: viewBox,
    color: htmlColor,
    "aria-hidden": titleAccess ? undefined : true,
    role: titleAccess ? 'img' : undefined,
    ref: ref
  }, other), children, titleAccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("title", null, titleAccess) : null);
});
 true ? SvgIcon.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Node passed into the SVG element.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['action', 'disabled', 'error', 'inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),

  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   */
  fontSize: (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.chainPropTypes)(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['default', 'inherit', 'large', 'medium', 'small']), function (props) {
    var fontSize = props.fontSize;

    if (fontSize === 'default') {
      throw new Error('Material-UI: `fontSize="default"` is deprecated. Use `fontSize="medium"` instead.');
    }

    return null;
  }),

  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this property.
   */
  shapeRendering: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
} : 0;
SvgIcon.muiName = 'SvgIcon';
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__.default)(styles, {
  name: 'MuiSvgIcon'
})(SvgIcon));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/SvgIcon/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/SvgIcon/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _SvgIcon__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _SvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextField/TextField.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextField/TextField.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _FilledInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FilledInput */ "./node_modules/@material-ui/core/esm/FilledInput/index.js");
/* harmony import */ var _OutlinedInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js");
/* harmony import */ var _InputLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _FormHelperText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");














var variantComponent = {
  standard: _Input__WEBPACK_IMPORTED_MODULE_6__.default,
  filled: _FilledInput__WEBPACK_IMPORTED_MODULE_7__.default,
  outlined: _OutlinedInput__WEBPACK_IMPORTED_MODULE_8__.default
};
var styles = {
  /* Styles applied to the root element. */
  root: {}
};
/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 *
 * - [FormControl](/api/form-control/)
 * - [InputLabel](/api/input-label/)
 * - [FilledInput](/api/filled-input/)
 * - [OutlinedInput](/api/outlined-input/)
 * - [Input](/api/input/)
 * - [FormHelperText](/api/form-helper-text/)
 *
 * If you wish to alter the props applied to the `input` element, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 *
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */

var TextField = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TextField(props, ref) {
  var autoComplete = props.autoComplete,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      defaultValue = props.defaultValue,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      FormHelperTextProps = props.FormHelperTextProps,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      helperText = props.helperText,
      hiddenLabel = props.hiddenLabel,
      id = props.id,
      InputLabelProps = props.InputLabelProps,
      inputProps = props.inputProps,
      InputProps = props.InputProps,
      inputRef = props.inputRef,
      label = props.label,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      placeholder = props.placeholder,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      rows = props.rows,
      rowsMax = props.rowsMax,
      maxRows = props.maxRows,
      minRows = props.minRows,
      _props$select = props.select,
      select = _props$select === void 0 ? false : _props$select,
      SelectProps = props.SelectProps,
      type = props.type,
      value = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["autoComplete", "autoFocus", "children", "classes", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "hiddenLabel", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "rowsMax", "maxRows", "minRows", "select", "SelectProps", "type", "value", "variant"]);

  if (true) {
    if (select && !children) {
      console.error('Material-UI: `children` must be passed when using the `TextField` component with `select`.');
    }
  }

  var InputMore = {};

  if (variant === 'outlined') {
    if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
      InputMore.notched = InputLabelProps.shrink;
    }

    if (label) {
      var _InputLabelProps$requ;

      var displayRequired = (_InputLabelProps$requ = InputLabelProps === null || InputLabelProps === void 0 ? void 0 : InputLabelProps.required) !== null && _InputLabelProps$requ !== void 0 ? _InputLabelProps$requ : required;
      InputMore.label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, label, displayRequired && "\xA0*");
    }
  }

  if (select) {
    // unset defaults from textbox inputs
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = undefined;
    }

    InputMore['aria-describedby'] = undefined;
  }

  var helperTextId = helperText && id ? "".concat(id, "-helper-text") : undefined;
  var inputLabelId = label && id ? "".concat(id, "-label") : undefined;
  var InputComponent = variantComponent[variant];
  var InputElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(InputComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    "aria-describedby": helperTextId,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    fullWidth: fullWidth,
    multiline: multiline,
    name: name,
    rows: rows,
    rowsMax: rowsMax,
    maxRows: maxRows,
    minRows: minRows,
    type: type,
    value: value,
    id: id,
    inputRef: inputRef,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    inputProps: inputProps
  }, InputMore, InputProps));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_FormControl__WEBPACK_IMPORTED_MODULE_9__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className),
    disabled: disabled,
    error: error,
    fullWidth: fullWidth,
    hiddenLabel: hiddenLabel,
    ref: ref,
    required: required,
    color: color,
    variant: variant
  }, other), label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InputLabel__WEBPACK_IMPORTED_MODULE_10__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    htmlFor: id,
    id: inputLabelId
  }, InputLabelProps), label), select ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Select__WEBPACK_IMPORTED_MODULE_11__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    "aria-describedby": helperTextId,
    id: id,
    labelId: inputLabelId,
    value: value,
    input: InputElement
  }, SelectProps), children) : InputElement, helperText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_FormHelperText__WEBPACK_IMPORTED_MODULE_12__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    id: helperTextId
  }, FormHelperTextProps), helperText));
});
 true ? TextField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * @ignore
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['primary', 'secondary']),

  /**
   * The default value of the `input` element.
   */
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Props applied to the [`FormHelperText`](/api/form-helper-text/) element.
   */
  FormHelperTextProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The helper text content.
   */
  helperText: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * @ignore
   */
  hiddenLabel: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Props applied to the [`InputLabel`](/api/input-label/) element.
   */
  InputLabelProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/api/filled-input/),
   * [`OutlinedInput`](/api/outlined-input/) or [`Input`](/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.refType,

  /**
   * The label content.
   */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['dense', 'none', 'normal']),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Minimum number of rows to display.
   */
  minRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * If `true`, a textarea element will be rendered instead of an input.
   */
  multiline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Name attribute of the `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * @ignore
   */
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onFocus: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * If `true`, the label is displayed as required and the `input` element` will be required.
   */
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Number of rows to display when multiline option is set to true.
   * @deprecated Use `minRows` instead.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Maximum number of rows to display.
   * @deprecated Use `maxRows` instead.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Render a [`Select`](/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   */
  select: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Props applied to the [`Select`](/api/select/) element.
   */
  SelectProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The size of the text field.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['medium', 'small']),

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['filled', 'outlined', 'standard'])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_13__.default)(styles, {
  name: 'MuiTextField'
})(TextField));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextField/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextField/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _TextField__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/deprecatedPropType */ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js");








function getStyleValue(computedStyle, property) {
  return parseInt(computedStyle[property], 10) || 0;
}

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_2__.useEffect;
var styles = {
  /* Styles applied to the shadow textarea element. */
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    // Remove from the content flow
    position: 'absolute',
    // Ignore the scrollbar width
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: 'translateZ(0)'
  }
};
var TextareaAutosize = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TextareaAutosize(props, ref) {
  var onChange = props.onChange,
      rows = props.rows,
      rowsMax = props.rowsMax,
      rowsMinProp = props.rowsMin,
      maxRowsProp = props.maxRows,
      _props$minRows = props.minRows,
      minRowsProp = _props$minRows === void 0 ? 1 : _props$minRows,
      style = props.style,
      value = props.value,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["onChange", "rows", "rowsMax", "rowsMin", "maxRows", "minRows", "style", "value"]);

  var maxRows = maxRowsProp || rowsMax;
  var minRows = rows || rowsMinProp || minRowsProp;

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(value != null),
      isControlled = _React$useRef.current;

  var inputRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__.default)(ref, inputRef);
  var shadowRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  var renders = react__WEBPACK_IMPORTED_MODULE_2__.useRef(0);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState({}),
      state = _React$useState[0],
      setState = _React$useState[1];

  var syncHeight = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function () {
    var input = inputRef.current;
    var computedStyle = window.getComputedStyle(input);
    var inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || 'x';

    if (inputShallow.value.slice(-1) === '\n') {
      // Certain fonts which overflow the line height will cause the textarea
      // to report a different scrollHeight depending on whether the last line
      // is empty. Make it non-empty to avoid this issue.
      inputShallow.value += ' ';
    }

    var boxSizing = computedStyle['box-sizing'];
    var padding = getStyleValue(computedStyle, 'padding-bottom') + getStyleValue(computedStyle, 'padding-top');
    var border = getStyleValue(computedStyle, 'border-bottom-width') + getStyleValue(computedStyle, 'border-top-width'); // The height of the inner content

    var innerHeight = inputShallow.scrollHeight - padding; // Measure height of a textarea with a single row

    inputShallow.value = 'x';
    var singleRowHeight = inputShallow.scrollHeight - padding; // The height of the outer content

    var outerHeight = innerHeight;

    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }

    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }

    outerHeight = Math.max(outerHeight, singleRowHeight); // Take the box sizing into account for applying this value as a style.

    var outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    var overflow = Math.abs(outerHeight - innerHeight) <= 1;
    setState(function (prevState) {
      // Need a large enough difference to update the height.
      // This prevents infinite rendering loop.
      if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
        renders.current += 1;
        return {
          overflow: overflow,
          outerHeightStyle: outerHeightStyle
        };
      }

      if (true) {
        if (renders.current === 20) {
          console.error(['Material-UI: Too many re-renders. The layout is unstable.', 'TextareaAutosize limits the number of renders to prevent an infinite loop.'].join('\n'));
        }
      }

      return prevState;
    });
  }, [maxRows, minRows, props.placeholder]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    var handleResize = (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_5__.default)(function () {
      renders.current = 0;
      syncHeight();
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [syncHeight]);
  useEnhancedEffect(function () {
    syncHeight();
  });
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    renders.current = 0;
  }, [value]);

  var handleChange = function handleChange(event) {
    renders.current = 0;

    if (!isControlled) {
      syncHeight();
    }

    if (onChange) {
      onChange(event);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("textarea", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    value: value,
    onChange: handleChange,
    ref: handleRef // Apply the rows prop to get a "correct" first SSR paint
    ,
    rows: minRows,
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      height: state.outerHeightStyle,
      // Need a large enough difference to allow scrolling.
      // This prevents infinite rendering loop.
      overflow: state.overflow ? 'hidden' : null
    }, style)
  }, other)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("textarea", {
    "aria-hidden": true,
    className: props.className,
    readOnly: true,
    ref: shadowRef,
    tabIndex: -1,
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, styles.shadow, style)
  }));
});
 true ? TextareaAutosize.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Maximum number of rows to display.
   */
  maxRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Minimum number of rows to display.
   */
  minRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * @ignore
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Minimum number of rows to display.
   * @deprecated Use `minRows` instead.
   */
  rows: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_6__.default)(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]), 'Use `minRows` instead.'),

  /**
   * Maximum number of rows to display.
   * @deprecated Use `maxRows` instead.
   */
  rowsMax: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_6__.default)(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]), 'Use `maxRows` instead.'),

  /**
   * Minimum number of rows to display.
   * @deprecated Use `minRows` instead.
   */
  rowsMin: (0,_utils_deprecatedPropType__WEBPACK_IMPORTED_MODULE_6__.default)(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]), 'Use `minRows` instead.'),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)])
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (TextareaAutosize);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextareaAutosize/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _TextareaAutosize__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _TextareaAutosize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/Unstable_TrapFocus.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Unstable_TrapFocus/Unstable_TrapFocus.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex, camelcase */






/**
 * Utility component that locks focus inside the component.
 */

function Unstable_TrapFocus(props) {
  var children = props.children,
      _props$disableAutoFoc = props.disableAutoFocus,
      disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$disableEnforce = props.disableEnforceFocus,
      disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
      _props$disableRestore = props.disableRestoreFocus,
      disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
      getDoc = props.getDoc,
      isEnabled = props.isEnabled,
      open = props.open;
  var ignoreNextEnforceFocus = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  var sentinelStart = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var sentinelEnd = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var nodeToRestore = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  var rootRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null); // can be removed once we drop support for non ref forwarding class components

  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (instance) {
    // #StrictMode ready
    rootRef.current = react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(instance);
  }, []);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__.default)(children.ref, handleOwnRef);
  var prevOpenRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    prevOpenRef.current = open;
  }, [open]);

  if (!prevOpenRef.current && open && typeof window !== 'undefined') {
    // WARNING: Potentially unsafe in concurrent mode.
    // The way the read on `nodeToRestore` is setup could make this actually safe.
    // Say we render `open={false}` -> `open={true}` but never commit.
    // We have now written a state that wasn't committed. But no committed effect
    // will read this wrong value. We only read from `nodeToRestore` in effects
    // that were committed on `open={true}`
    // WARNING: Prevents the instance from being garbage collected. Should only
    // hold a weak ref.
    nodeToRestore.current = getDoc().activeElement;
  }

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (!open) {
      return;
    }

    var doc = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_5__.default)(rootRef.current); // We might render an empty child.

    if (!disableAutoFocus && rootRef.current && !rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
        if (true) {
          console.error(['Material-UI: The modal content node does not accept focus.', 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".'].join('\n'));
        }

        rootRef.current.setAttribute('tabIndex', -1);
      }

      rootRef.current.focus();
    }

    var contain = function contain() {
      var rootElement = rootRef.current; // Cleanup functions are executed lazily in React 17.
      // Contain can be called between the component being unmounted and its cleanup function being run.

      if (rootElement === null) {
        return;
      }

      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      if (rootRef.current && !rootRef.current.contains(doc.activeElement)) {
        rootRef.current.focus();
      }
    };

    var loopFocus = function loopFocus(event) {
      // 9 = Tab
      if (disableEnforceFocus || !isEnabled() || event.keyCode !== 9) {
        return;
      } // Make sure the next tab starts from the right place.


      if (doc.activeElement === rootRef.current) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;

        if (event.shiftKey) {
          sentinelEnd.current.focus();
        } else {
          sentinelStart.current.focus();
        }
      }
    };

    doc.addEventListener('focus', contain, true);
    doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

    var interval = setInterval(function () {
      contain();
    }, 50);
    return function () {
      clearInterval(interval);
      doc.removeEventListener('focus', contain, true);
      doc.removeEventListener('keydown', loopFocus, true); // restoreLastFocus()

      if (!disableRestoreFocus) {
        // In IE 11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE 11 have a focus method.
        // Once IE 11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          nodeToRestore.current.focus();
        }

        nodeToRestore.current = null;
      }
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    tabIndex: 0,
    ref: sentinelStart,
    "data-test": "sentinelStart"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
    ref: handleRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    tabIndex: 0,
    ref: sentinelEnd,
    "data-test": "sentinelEnd"
  }));
}

 true ? Unstable_TrapFocus.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A single child content element.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),

  /**
   * If `true`, the trap focus will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any trap focus children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * If `true`, the trap focus will not prevent focus from leaving the trap focus while open.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * If `true`, the trap focus will not restore focus to previously focused element once
   * trap focus is hidden.
   */
  disableRestoreFocus: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * Return the document to consider.
   * We use it to implement the restore focus between different browser documents.
   */
  getDoc: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),

  /**
   * Do we still want to enforce the focus?
   * This prop helps nesting TrapFocus elements.
   */
  isEnabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),

  /**
   * If `true`, focus will be locked.
   */
  open: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired)
} : 0;

if (true) {
  // eslint-disable-next-line
  Unstable_TrapFocus['propTypes' + ''] = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__.exactProp)(Unstable_TrapFocus.propTypes);
}

/* harmony default export */ __webpack_exports__["default"] = (Unstable_TrapFocus);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Unstable_TrapFocus/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unstable_TrapFocus */ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/Unstable_TrapFocus.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/blue.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/blue.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
/* harmony default export */ __webpack_exports__["default"] = (blue);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/common.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/common.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var common = {
  black: '#000',
  white: '#fff'
};
/* harmony default export */ __webpack_exports__["default"] = (common);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/green.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/green.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
/* harmony default export */ __webpack_exports__["default"] = (green);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/grey.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/grey.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
/* harmony default export */ __webpack_exports__["default"] = (grey);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/indigo.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/indigo.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
/* harmony default export */ __webpack_exports__["default"] = (indigo);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/orange.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/orange.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
/* harmony default export */ __webpack_exports__["default"] = (orange);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/pink.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/pink.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
/* harmony default export */ __webpack_exports__["default"] = (pink);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/red.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/red.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
/* harmony default export */ __webpack_exports__["default"] = (red);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown'));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/colorManipulator.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hexToRgb": function() { return /* binding */ hexToRgb; },
/* harmony export */   "rgbToHex": function() { return /* binding */ rgbToHex; },
/* harmony export */   "hslToRgb": function() { return /* binding */ hslToRgb; },
/* harmony export */   "decomposeColor": function() { return /* binding */ decomposeColor; },
/* harmony export */   "recomposeColor": function() { return /* binding */ recomposeColor; },
/* harmony export */   "getContrastRatio": function() { return /* binding */ getContrastRatio; },
/* harmony export */   "getLuminance": function() { return /* binding */ getLuminance; },
/* harmony export */   "emphasize": function() { return /* binding */ emphasize; },
/* harmony export */   "fade": function() { return /* binding */ fade; },
/* harmony export */   "alpha": function() { return /* binding */ alpha; },
/* harmony export */   "darken": function() { return /* binding */ darken; },
/* harmony export */   "lighten": function() { return /* binding */ lighten; }
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (true) {
    if (value < min || value > max) {
      console.error("Material-UI: The value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
    }
  }

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb".concat(colors.length === 4 ? 'a' : '', "(").concat(colors.map(function (n, index) {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', '), ")") : '';
}

function intToHex(int) {
  var hex = int.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */


function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  var _decomposeColor = decomposeColor(color),
      values = _decomposeColor.values;

  return "#".concat(values.map(function (n) {
    return intToHex(n);
  }).join(''));
}
/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color,
      values = _color.values;
  var h = values[0];
  var s = values[1] / 100;
  var l = values[2] / 100;
  var a = s * Math.min(l, 1 - l);

  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };

  var type = 'rgb';
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type: type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error( true ? "Material-UI: Unsupported `".concat(color, "` color.\nWe support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().") : 0);
  }

  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(function (val) {
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
var warnedOnce = false;
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 *
 * @deprecated
 * Use `import { alpha } from '@material-ui/core/styles'` instead.
 */

function fade(color, value) {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: The `fade` color utility was renamed to `alpha` to better describe its functionality.', '', "You should use `import { alpha } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return alpha(color, value);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha value is overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0-1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function alpha(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createBreakpoints.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keys": function() { return /* binding */ keys; },
/* harmony export */   "default": function() { return /* binding */ createBreakpoints; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");


// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
  }

  function only(key) {
    return between(key, key);
  }

  var warnedOnce = false;

  function width(key) {
    if (true) {
      if (!warnedOnce) {
        warnedOnce = true;
        console.warn(["Material-UI: The `theme.breakpoints.width` utility is deprecated because it's redundant.", 'Use the `theme.breakpoints.values` instead.'].join('\n'));
      }
    }

    return values[key];
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMixins.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMixins.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createMixins; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.warn(['Material-UI: theme.mixins.gutters() is deprecated.', 'You can use the source of the mixin directly:', "\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join('\n'));
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, breakpoints.up('sm'), (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        paddingLeft: spacing(3),
        paddingRight: spacing(3)
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
      minHeight: 48
    }), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createPalette.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createPalette.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "light": function() { return /* binding */ light; },
/* harmony export */   "dark": function() { return /* binding */ dark; },
/* harmony export */   "default": function() { return /* binding */ createPalette; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _colors_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colors/common */ "./node_modules/@material-ui/core/esm/colors/common.js");
/* harmony import */ var _colors_grey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colors/grey */ "./node_modules/@material-ui/core/esm/colors/grey.js");
/* harmony import */ var _colors_indigo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../colors/indigo */ "./node_modules/@material-ui/core/esm/colors/indigo.js");
/* harmony import */ var _colors_pink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../colors/pink */ "./node_modules/@material-ui/core/esm/colors/pink.js");
/* harmony import */ var _colors_red__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../colors/red */ "./node_modules/@material-ui/core/esm/colors/red.js");
/* harmony import */ var _colors_orange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../colors/orange */ "./node_modules/@material-ui/core/esm/colors/orange.js");
/* harmony import */ var _colors_blue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../colors/blue */ "./node_modules/@material-ui/core/esm/colors/blue.js");
/* harmony import */ var _colors_green__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../colors/green */ "./node_modules/@material-ui/core/esm/colors/green.js");
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");













var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    default: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default[50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
var dark = {
  text: {
    primary: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default[800],
    default: '#303030'
  },
  action: {
    active: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.lighten)(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.darken)(intent.main, tonalOffsetDark);
    }
  }
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === void 0 ? {
    light: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[300],
    main: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[500],
    dark: _colors_indigo__WEBPACK_IMPORTED_MODULE_6__.default[700]
  } : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === void 0 ? {
    light: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A200,
    main: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A400,
    dark: _colors_pink__WEBPACK_IMPORTED_MODULE_7__.default.A700
  } : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === void 0 ? {
    light: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[300],
    main: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[500],
    dark: _colors_red__WEBPACK_IMPORTED_MODULE_8__.default[700]
  } : _palette$error,
      _palette$warning = palette.warning,
      warning = _palette$warning === void 0 ? {
    light: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[300],
    main: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[500],
    dark: _colors_orange__WEBPACK_IMPORTED_MODULE_9__.default[700]
  } : _palette$warning,
      _palette$info = palette.info,
      info = _palette$info === void 0 ? {
    light: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[300],
    main: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[500],
    dark: _colors_blue__WEBPACK_IMPORTED_MODULE_10__.default[700]
  } : _palette$info,
      _palette$success = palette.success,
      success = _palette$success === void 0 ? {
    light: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[300],
    main: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[500],
    dark: _colors_green__WEBPACK_IMPORTED_MODULE_11__.default[700]
  } : _palette$success,
      _palette$type = palette.type,
      type = _palette$type === void 0 ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


  function getContrastText(background) {
    var contrastText = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.getContrastRatio)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (true) {
      var contrast = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_5__.getContrastRatio)(background, contrastText);

      if (contrast < 3) {
        console.error(["Material-UI: The contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }

    return contrastText;
  }

  var augmentColor = function augmentColor(color) {
    var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
    color = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.main) {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\nThe color object needs to have a `main` property or a `".concat(mainShade, "` property.") : 0);
    }

    if (typeof color.main !== 'string') {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\n`color.main` should be a string, but `".concat(JSON.stringify(color.main), "` was provided instead.\n\nDid you intend to use one of the following approaches?\n\nimport {\xA0green } from \"@material-ui/core/colors\";\n\nconst theme1 = createTheme({ palette: {\n  primary: green,\n} });\n\nconst theme2 = createTheme({ palette: {\n  primary: { main: green[500] },\n} });") : 0);
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  var types = {
    dark: dark,
    light: light
  };

  if (true) {
    if (!types[type]) {
      console.error("Material-UI: The palette type `".concat(type, "` is not supported."));
    }
  }

  var paletteOutput = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    // A collection of common colors.
    common: _colors_common__WEBPACK_IMPORTED_MODULE_3__.default,
    // The palette type, can be light or dark.
    type: type,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor(primary),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor(error),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor(warning),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor(info),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor(success),
    // The grey colors.
    grey: _colors_grey__WEBPACK_IMPORTED_MODULE_4__.default,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: getContrastText,
    // Generate a rich color object.
    augmentColor: augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: tonalOffset
  }, types[type]), other);
  return paletteOutput;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createSpacing.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createSpacing.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createSpacing; }
/* harmony export */ });
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/system */ "@material-ui/system");
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_0__);

var warnOnce;
function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
  // Smaller components, such as icons and type, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  var transform = (0,_material_ui_system__WEBPACK_IMPORTED_MODULE_0__.createUnarySpacing)({
    spacing: spacingInput
  });

  var spacing = function spacing() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (true) {
      if (!(args.length <= 4)) {
        console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
      }
    }

    if (args.length === 0) {
      return transform(1);
    }

    if (args.length === 1) {
      return transform(args[0]);
    }

    return args.map(function (argument) {
      if (typeof argument === 'string') {
        return argument;
      }

      var output = transform(argument);
      return typeof output === 'number' ? "".concat(output, "px") : output;
    }).join(' ');
  }; // Backward compatibility, to remove in v5.


  Object.defineProperty(spacing, 'unit', {
    get: function get() {
      if (true) {
        if (!warnOnce || "development" === 'test') {
          console.error(['Material-UI: theme.spacing.unit usage has been deprecated.', 'It will be removed in v5.', 'You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.', '', 'You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother.'].join('\n'));
        }

        warnOnce = true;
      }

      return spacingInput;
    }
  });
  spacing.mui = true;
  return spacing;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTheme.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTheme.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMuiTheme": function() { return /* binding */ createMuiTheme; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _createBreakpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createBreakpoints */ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js");
/* harmony import */ var _createMixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createMixins */ "./node_modules/@material-ui/core/esm/styles/createMixins.js");
/* harmony import */ var _createPalette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPalette */ "./node_modules/@material-ui/core/esm/styles/createPalette.js");
/* harmony import */ var _createTypography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createTypography */ "./node_modules/@material-ui/core/esm/styles/createTypography.js");
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shadows */ "./node_modules/@material-ui/core/esm/styles/shadows.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shape */ "./node_modules/@material-ui/core/esm/styles/shape.js");
/* harmony import */ var _createSpacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createSpacing */ "./node_modules/@material-ui/core/esm/styles/createSpacing.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _zIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zIndex */ "./node_modules/@material-ui/core/esm/styles/zIndex.js");













function createTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      spacingInput = options.spacing,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

  var palette = (0,_createPalette__WEBPACK_IMPORTED_MODULE_3__.default)(paletteInput);
  var breakpoints = (0,_createBreakpoints__WEBPACK_IMPORTED_MODULE_4__.default)(breakpointsInput);
  var spacing = (0,_createSpacing__WEBPACK_IMPORTED_MODULE_5__.default)(spacingInput);
  var muiTheme = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: (0,_createMixins__WEBPACK_IMPORTED_MODULE_6__.default)(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Provide default props
    shadows: _shadows__WEBPACK_IMPORTED_MODULE_7__.default,
    typography: (0,_createTypography__WEBPACK_IMPORTED_MODULE_8__.default)(palette, typographyInput),
    spacing: spacing,
    shape: _shape__WEBPACK_IMPORTED_MODULE_9__.default,
    transitions: _transitions__WEBPACK_IMPORTED_MODULE_10__.default,
    zIndex: _zIndex__WEBPACK_IMPORTED_MODULE_11__.default
  }, other);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  muiTheme = args.reduce(function (acc, argument) {
    return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)(acc, argument);
  }, muiTheme);

  if (true) {
    var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];

    var traverse = function traverse(node, parentKey) {
      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var key; // eslint-disable-next-line guard-for-in, no-restricted-syntax

      for (key in node) {
        var child = node[key];

        if (depth === 1) {
          if (key.indexOf('Mui') === 0 && child) {
            traverse(child, key, depth + 1);
          }
        } else if (pseudoClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            console.error(["Material-UI: The `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), 'You can not override it like this: ', JSON.stringify(node, null, 2), '', 'Instead, you need to use the $ruleName syntax:', JSON.stringify({
              root: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, "&$".concat(key), child)
            }, null, 2), '', 'https://material-ui.com/r/pseudo-classes-guide'].join('\n'));
          } // Remove the style to prevent global conflicts.


          node[key] = {};
        }
      }
    };

    traverse(muiTheme.overrides);
  }

  return muiTheme;
}

var warnedOnce = false;
function createMuiTheme() {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: the createMuiTheme function was renamed to createTheme.', '', "You should use `import { createTheme } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return createTheme.apply(void 0, arguments);
}
/* harmony default export */ __webpack_exports__["default"] = (createTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTypography.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTypography.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createTypography; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__);




function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var warnedOnce = false;

function roundWithDeprecationWarning(value) {
  if (true) {
    if (!warnedOnce) {
      console.warn(['Material-UI: The `theme.typography.round` helper is deprecated.', 'Head to https://material-ui.com/r/migration-v4/#theme for a migration path.'].join('\n'));
      warnedOnce = true;
    }
  }

  return round(value);
}

var caseAllCaps = {
  textTransform: 'uppercase'
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$fontWeightBold = _ref.fontWeightBold,
      fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      allVariants = _ref.allVariants,
      pxToRem2 = _ref.pxToRem,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

  if (true) {
    if (typeof fontSize !== 'number') {
      console.error('Material-UI: `fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
      console.error('Material-UI: `htmlFontSize` is required to be a number.');
    }
  }

  var coef = fontSize / 14;

  var pxToRem = pxToRem2 || function (size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };

  var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}, casing, allVariants);
  };

  var variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    htmlFontSize: htmlFontSize,
    pxToRem: pxToRem,
    round: roundWithDeprecationWarning,
    // TODO v5: remove
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightBold: fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/defaultTheme.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");

var defaultTheme = (0,_createTheme__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ __webpack_exports__["default"] = (defaultTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shadows.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shadows.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
/* harmony default export */ __webpack_exports__["default"] = (shadows);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shape.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shape.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var shape = {
  borderRadius: 4
};
/* harmony default export */ __webpack_exports__["default"] = (shape);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/transitions.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/transitions.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easing": function() { return /* binding */ easing; },
/* harmony export */   "duration": function() { return /* binding */ duration; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _options$duration = options.duration,
        durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === void 0 ? 0 : _options$delay,
        other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(options, ["duration", "easing", "delay"]);

    if (true) {
      var isString = function isString(value) {
        return typeof value === 'string';
      };

      var isNumber = function isNumber(value) {
        return !isNaN(parseFloat(value));
      };

      if (!isString(props) && !Array.isArray(props)) {
        console.error('Material-UI: Argument "props" must be a string or Array.');
      }

      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error("Material-UI: Argument \"duration\" must be a number or a string but found ".concat(durationOption, "."));
      }

      if (!isString(easingOption)) {
        console.error('Material-UI: Argument "easing" must be a string.');
      }

      if (!isNumber(delay) && !isString(delay)) {
        console.error('Material-UI: Argument "delay" must be a number or a string.');
      }

      if (Object.keys(other).length !== 0) {
        console.error("Material-UI: Unrecognized argument(s) [".concat(Object.keys(other).join(','), "]."));
      }
    }

    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
    }).join(',');
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
});

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/useTheme.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/useTheme.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useTheme; }
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");



function useTheme() {
  var theme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)() || _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_1___default().useDebugValue(theme);
  }

  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withStyles.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function withStyles(stylesOrCreator, options) {
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.withStyles)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
  }, options));
}

/* harmony default export */ __webpack_exports__["default"] = (withStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/zIndex.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/zIndex.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
var zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
/* harmony default export */ __webpack_exports__["default"] = (zIndex);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/transitions/utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/transitions/utils.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reflow": function() { return /* binding */ reflow; },
/* harmony export */   "getTransitionProps": function() { return /* binding */ getTransitionProps; }
/* harmony export */ });
var reflow = function reflow(node) {
  return node.scrollTop;
};
function getTransitionProps(props, options) {
  var timeout = props.timeout,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style;
  return {
    duration: style.transitionDuration || typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
    delay: style.transitionDelay
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/capitalize.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/capitalize.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ capitalize; }
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "@material-ui/utils");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__);

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word a the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error( true ? "Material-UI: capitalize(string) expects a string argument." : 0);
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/createChainedFunction.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createChainedFunction; }
/* harmony export */ });
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.reduce(function (acc, func) {
    if (func == null) {
      return acc;
    }

    if (true) {
      if (typeof func !== 'function') {
        console.error('Material-UI: Invalid Argument Type, must only provide functions, undefined, or null.');
      }
    }

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      func.apply(this, args);
    };
  }, function () {});
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createSvgIcon; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");



/**
 * Private module reserved for @material-ui/x packages.
 */

function createSvgIcon(path, displayName) {
  var Component = function Component(props, ref) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      ref: ref
    }, props), path);
  };

  if (true) {
    // Need to set `displayName` on the inner component for React.memo.
    // React prior to 16.14 ignores `displayName` on the wrapper.
    Component.displayName = "".concat(displayName, "Icon");
  }

  Component.muiName = _SvgIcon__WEBPACK_IMPORTED_MODULE_2__.default.muiName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(Component));
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/debounce.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/debounce.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ debounce; }
/* harmony export */ });
// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 166;
  var timeout;

  function debounced() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // eslint-disable-next-line consistent-this
    var that = this;

    var later = function later() {
      func.apply(that, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.clear = function () {
    clearTimeout(timeout);
  };

  return debounced;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ deprecatedPropType; }
/* harmony export */ });
function deprecatedPropType(validator, reason) {
  if (false) {}

  return function (props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (typeof props[propName] !== 'undefined') {
      return new Error("The ".concat(location, " `").concat(propFullNameSafe, "` of ") + "`".concat(componentNameSafe, "` is deprecated. ").concat(reason));
    }

    return null;
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getScrollbarSize; }
/* harmony export */ });
// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/3ffe3a5d82f6f561b82ff78d82b32a7d14aed558/js/src/modal.js#L512-L519
function getScrollbarSize() {
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '99px';
  scrollDiv.style.height = '99px';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarSize;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/isMuiElement.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/isMuiElement.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isMuiElement; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function isMuiElement(element, muiNames) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/ownerDocument.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ownerDocument; }
/* harmony export */ });
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/ownerWindow.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ownerWindow; }
/* harmony export */ });
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");

function ownerWindow(node) {
  var doc = (0,_ownerDocument__WEBPACK_IMPORTED_MODULE_0__.default)(node);
  return doc.defaultView || window;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/setRef.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/setRef.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setRef; }
/* harmony export */ });
// TODO v5: consider to make it private
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/useControlled.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/useControlled.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useControlled; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */

function useControlled(_ref) {
  var controlled = _ref.controlled,
      defaultProp = _ref.default,
      name = _ref.name,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? 'value' : _ref$state;

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(controlled !== undefined),
      isControlled = _React$useRef.current;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultProp),
      valueState = _React$useState[0],
      setValue = _React$useState[1];

  var value = isControlled ? controlled : valueState;

  if (true) {
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
      if (isControlled !== (controlled !== undefined)) {
        console.error(["Material-UI: A component is changing the ".concat(isControlled ? '' : 'un', "controlled ").concat(state, " state of ").concat(name, " to be ").concat(isControlled ? 'un' : '', "controlled."), 'Elements should not switch from uncontrolled to controlled (or vice versa).', "Decide between using a controlled or uncontrolled ".concat(name, " ") + 'element for the lifetime of the component.', "The nature of the state is determined during the first render, it's considered controlled if the value is not `undefined`.", 'More info: https://fb.me/react-controlled-components'].join('\n'));
      }
    }, [controlled]);

    var _React$useRef2 = react__WEBPACK_IMPORTED_MODULE_0__.useRef(defaultProp),
        defaultValue = _React$useRef2.current;

    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
      if (!isControlled && defaultValue !== defaultProp) {
        console.error(["Material-UI: A component is changing the default ".concat(state, " state of an uncontrolled ").concat(name, " after being initialized. ") + "To suppress this warning opt to use a controlled ".concat(name, ".")].join('\n'));
      }
    }, [JSON.stringify(defaultProp)]);
  }

  var setValueIfUncontrolled = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (newValue) {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/useEventCallback.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useEventCallback; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 *
 * @param {function} fn
 */

function useEventCallback(fn) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(fn);
  useEnhancedEffect(function () {
    ref.current = fn;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
    return (0, ref.current).apply(void 0, arguments);
  }, []);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/useForkRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/useForkRef.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useForkRef; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");


function useForkRef(refA, refB) {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior
   */
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    if (refA == null && refB == null) {
      return null;
    }

    return function (refValue) {
      (0,_setRef__WEBPACK_IMPORTED_MODULE_1__.default)(refA, refValue);
      (0,_setRef__WEBPACK_IMPORTED_MODULE_1__.default)(refB, refValue);
    };
  }, [refA, refB]);
}

/***/ }),

/***/ "./pages/Signup.js":
/*!*************************!*\
  !*** ./pages/Signup.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AboutPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");

var _jsxFileName = "E:\\newWebTest-main\\pages\\Signup.js";



function AboutPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jsx-520702952" + " " + "App",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("style", {
      children: `
              body {
          background-image: url(https://img.wallpapersafari.com/desktop/1536/864/87/69/Q4RuUB.jpg);
          background-size: cover;
          }
          `
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "jsx-520702952",
      children: "Sign Up"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "520702952",
      children: ".jsx-520702952{text-align:center;}body.jsx-520702952{background-color:#1abc9c;font:1em Helvetica;}#container.jsx-520702952{width:840px;margin:25px auto;}.whysign.jsx-520702952{float:left;background-color:white;width:480px;height:347px;border-radius:0 5px 5px 0;padding-top:20px;padding-right:20px;}.signup.jsx-520702952{float:left;width:300px;padding:30px 20px;background-color:white;text-align:center;border-radius:5px 0 0 5px;}[type=text].jsx-520702952{display:block;margin:0 auto;width:80%;border:0;border-bottom:1px solid rgba(0,0,0,.2);height:45px;line-height:45px;margin-bottom:10px;font-size:1em;color:rgba(0,0,0,.4);}[type=submit].jsx-520702952{margin-top:25px;width:10%;border:0;background-color:#53CACE;border-radius:5px;height:50px;color:white;font-weight:400;font-size:1em;}[type='text']:focus.jsx-520702952{outline:none;border-color:#53CACE;}h1.jsx-520702952{color:rgba(0,0,0,.7);font-weight:900;font-size:2.5em;}p.jsx-520702952{color:rgba(0,0,0,.6);font-size:1.2em;margin:50px 0 50px 0;}span.jsx-520702952{font-size:.75em;background-color:white;padding:2px 5px;color:rgba(0,0,0,.6);border-radius:2px;box-shadow:1px 1px 1px rgba(0,0,0,.3);margin:5px;}span.jsx-520702952:hover{color:#53CACE;}p.jsx-520702952:nth-of-type(2){font-size:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxuZXdXZWJUZXN0LW1haW5cXHBhZ2VzXFxTaWdudXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY3dCLEFBRStCLEFBRVcsQUFLYixBQUtELEFBVUEsQUFTRyxBQWFFLEFBWUgsQUFLUSxBQU1BLEFBTUwsQUFVRixBQUlBLFdBMUVTLEFBVVgsQ0FmSyxDQWlESSxDQXpCUCxBQW9EaEIsQUFJQSxFQTNDWSxBQTZCYSxFQWdCMUIsR0E1Qm1CLEFBTUEsRUE1Q0UsRUFyQkMsQ0EyQ1YsRUFiQyxDQXhCWixLQUtjLEFBNENkLENBWDJCLEVBZ0JULEFBTUssQ0FuQ1osQ0F5Q08sRUFsRE8sR0FyQnpCLEVBV2UsQ0FvQjBCLE1BNkJ6QyxFQVl1QixHQU52QixDQXRENEIsQ0FnQ1IsSUF0QkEsWUFtREEsRUE1Qk4sSUF0QmMsR0FWVCxDQW1CTCxJQWNBLElBNEIwQixJQXpDckIsSUFuQkUsQUFpQ0gsTUF2QmxCLE9BVXFCLEdBY0wsR0FqQ2hCLFdBa0NBLEFBMEJhLEVBeENHLFNBeUNoQixLQXhDdUIscUJBQ3ZCIiwiZmlsZSI6IkU6XFxuZXdXZWJUZXN0LW1haW5cXHBhZ2VzXFxTaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXRQYWdlKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgICAgIDxzdHlsZT57YFxuICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWcud2FsbHBhcGVyc2FmYXJpLmNvbS9kZXNrdG9wLzE1MzYvODY0Lzg3LzY5L1E0UnVVQi5qcGcpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDxoMT5TaWduIFVwPC9oMT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWJjOWM7XG4gICAgICAgICAgICAgICAgZm9udDogMWVtIEhlbHZldGljYTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgI2NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDg0MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjVweCBhdXRvO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAud2h5c2lnbiB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ4MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzQ3cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLnNpZ251cCB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFt0eXBlPXRleHRdIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4OyAgXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwuNCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFt0eXBlPXN1Ym1pdF0ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUzQ0FDRTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBbdHlwZT0ndGV4dCddOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzUzQ0FDRTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNTBweCAwIDUwcHggMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuNzVlbTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLDAsMCwuMyk7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHNwYW46aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTNDQUNFO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBwOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJodHRwczovL3JlcXJlcy5pbi9hcGkvdXNlcnMyXCIgbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpcnN0X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiRmlyYXRuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcmF0bmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGFzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImxhc3RuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3RuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYXZhdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cImF2YXRhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICk7XG59Il19 */\n/*@ sourceURL=E:\\\\newWebTest-main\\\\pages\\\\Signup.js */"
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "jsx-520702952",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        action: "https://reqres.in/api/users2",
        method: "POST",
        className: "jsx-520702952",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-520702952"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-520702952"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__.default, {
          variant: "outlined",
          margin: "normal",
          autoFocus: true,
          id: "first_name",
          type: "text",
          autocomplete: "Firatname",
          required: true,
          placeholder: "Firatname"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-520702952"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-520702952"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__.default, {
          variant: "outlined",
          margin: "normal",
          autoFocus: true,
          id: "last_name",
          type: "text",
          autocomplete: "lastname",
          required: true,
          placeholder: "Lastname"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-520702952"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-520702952"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__.default, {
          variant: "outlined",
          margin: "normal",
          autoFocus: true,
          id: "email",
          type: "text",
          autocomplete: "email",
          required: true,
          placeholder: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-520702952"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-520702952"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__.default, {
          variant: "outlined",
          margin: "normal",
          autoFocus: true,
          id: "avater",
          type: "text",
          autocomplete: "avatar",
          required: true,
          placeholder: "Avatar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-520702952"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {
          className: "jsx-520702952"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          className: "jsx-520702952",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ "@material-ui/system":
/*!**************************************!*\
  !*** external "@material-ui/system" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ "@material-ui/utils":
/*!*************************************!*\
  !*** external "@material-ui/utils" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/Signup.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9GaWxsZWRJbnB1dC9GaWxsZWRJbnB1dC5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vRm9ybUNvbnRyb2wvRm9ybUNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0Zvcm1Db250cm9sL0Zvcm1Db250cm9sQ29udGV4dC5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vRm9ybUNvbnRyb2wvZm9ybUNvbnRyb2xTdGF0ZS5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vRm9ybUNvbnRyb2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0Zvcm1Db250cm9sL3VzZUZvcm1Db250cm9sLmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtSGVscGVyVGV4dC9Gb3JtSGVscGVyVGV4dC5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vRm9ybUxhYmVsL0Zvcm1MYWJlbC5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vR3Jvdy9Hcm93LmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9JbnB1dEJhc2UvSW5wdXRCYXNlLmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9JbnB1dEJhc2UvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0lucHV0TGFiZWwvSW5wdXRMYWJlbC5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vSW5wdXQvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0xpc3QvTGlzdC5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTGlzdC9MaXN0Q29udGV4dC5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTWVudUxpc3QvTWVudUxpc3QuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL01lbnUvTWVudS5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTW9kYWwvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL01vZGFsL01vZGFsTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTW9kYWwvU2ltcGxlQmFja2Ryb3AuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL01vZGFsL2luZGV4LmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9OYXRpdmVTZWxlY3QvTmF0aXZlU2VsZWN0LmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9OYXRpdmVTZWxlY3QvTmF0aXZlU2VsZWN0SW5wdXQuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL091dGxpbmVkSW5wdXQvTm90Y2hlZE91dGxpbmUuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL091dGxpbmVkSW5wdXQvT3V0bGluZWRJbnB1dC5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vUGFwZXIvUGFwZXIuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1BvcG92ZXIvUG9wb3Zlci5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vUG9ydGFsL1BvcnRhbC5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vU2VsZWN0L1NlbGVjdC5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vU2VsZWN0L1NlbGVjdElucHV0LmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9TdmdJY29uL1N2Z0ljb24uanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RleHRGaWVsZC9UZXh0RmllbGQuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RleHRhcmVhQXV0b3NpemUvVGV4dGFyZWFBdXRvc2l6ZS5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVW5zdGFibGVfVHJhcEZvY3VzL1Vuc3RhYmxlX1RyYXBGb2N1cy5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2JsdWUuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9ncmVlbi5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2dyZXkuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9pbmRpZ28uanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9vcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9waW5rLmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvcmVkLmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9pbnRlcm5hbC9zdmctaWNvbnMvQXJyb3dEcm9wRG93bi5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVCcmVha3BvaW50cy5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZU1peGlucy5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVBhbGV0dGUuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVTcGFjaW5nLmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlVGhlbWUuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVUeXBvZ3JhcGh5LmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvZGVmYXVsdFRoZW1lLmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvc2hhZG93cy5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3NoYXBlLmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvdHJhbnNpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy91c2VUaGVtZS5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3dpdGhTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy96SW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3RyYW5zaXRpb25zL3V0aWxzLmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy9jYXBpdGFsaXplLmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL2RlYm91bmNlLmpzIiwid2VicGFjazovL3Rlc3R0Ly4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy9kZXByZWNhdGVkUHJvcFR5cGUuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL2dldFNjcm9sbGJhclNpemUuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL2lzTXVpRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvb3duZXJEb2N1bWVudC5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvb3duZXJXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vdGVzdHQvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL3NldFJlZi5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvdXNlQ29udHJvbGxlZC5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvdXNlRXZlbnRDYWxsYmFjay5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvdXNlRm9ya1JlZi5qcyIsIndlYnBhY2s6Ly90ZXN0dC8uL3BhZ2VzL1NpZ251cC5qcyIsIndlYnBhY2s6Ly90ZXN0dC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIiIsIndlYnBhY2s6Ly90ZXN0dC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zeXN0ZW1cIiIsIndlYnBhY2s6Ly90ZXN0dC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS91dGlsc1wiIiwid2VicGFjazovL3Rlc3R0L2V4dGVybmFsIFwiY2xzeFwiIiwid2VicGFjazovL3Rlc3R0L2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL3Rlc3R0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90ZXN0dC9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovL3Rlc3R0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly90ZXN0dC9leHRlcm5hbCBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIiIsIndlYnBhY2s6Ly90ZXN0dC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3Rlc3R0L2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkFib3V0UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNSZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0YyRTtBQUM1RDtBQUNmLGlDQUFpQyxvRkFBZ0I7QUFDakQsQzs7Ozs7Ozs7Ozs7Ozs7O0FDSGU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNkZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2JlO0FBQ2Y7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNGZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsK0JBQStCO0FBQzVFOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFD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Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL1NpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IHJlZlR5cGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IElucHV0QmFzZSBmcm9tICcuLi9JbnB1dEJhc2UnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgdmFyIGxpZ2h0ID0gdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnO1xuICB2YXIgYm90dG9tTGluZUNvbG9yID0gbGlnaHQgPyAncmdiYSgwLCAwLCAwLCAwLjQyKScgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpJztcbiAgdmFyIGJhY2tncm91bmRDb2xvciA9IGxpZ2h0ID8gJ3JnYmEoMCwgMCwgMCwgMC4wOSknIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOSknO1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcixcbiAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcbiAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ2JhY2tncm91bmQtY29sb3InLCB7XG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyLFxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5lYXNlT3V0XG4gICAgICB9KSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGxpZ2h0ID8gJ3JnYmEoMCwgMCwgMCwgMC4xMyknIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyknLFxuICAgICAgICAvLyBSZXNldCBvbiB0b3VjaCBkZXZpY2VzLCBpdCBkb2Vzbid0IGFkZCBzcGVjaWZpY2l0eVxuICAgICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmJGZvY3VzZWQnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbGlnaHQgPyAncmdiYSgwLCAwLCAwLCAwLjA5KScgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA5KSdcbiAgICAgIH0sXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBsaWdodCA/ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGNvbG9yIHNlY29uZGFyeS4gKi9cbiAgICBjb2xvclNlY29uZGFyeToge1xuICAgICAgJyYkdW5kZXJsaW5lOmFmdGVyJzoge1xuICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlVW5kZXJsaW5lPXtmYWxzZX1gLiAqL1xuICAgIHVuZGVybGluZToge1xuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbTogXCIycHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluKSxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAvLyBEb2luZyB0aGUgb3RoZXIgd2F5IGFyb3VuZCBjcmFzaCBvbiBJRSAxMSBcIicnXCIgaHR0cHM6Ly9naXRodWIuY29tL2Nzc2luanMvanNzL2lzc3Vlcy8yNDJcbiAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgwKScsXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgndHJhbnNmb3JtJywge1xuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyLFxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXRcbiAgICAgICAgfSksXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyAvLyBUcmFuc3BhcmVudCB0byB0aGUgaG92ZXIgc3R5bGUuXG5cbiAgICAgIH0sXG4gICAgICAnJiRmb2N1c2VkOmFmdGVyJzoge1xuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMSknXG4gICAgICB9LFxuICAgICAgJyYkZXJyb3I6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgxKScgLy8gZXJyb3IgaXMgYWx3YXlzIHVuZGVybGluZWQgaW4gcmVkXG5cbiAgICAgIH0sXG4gICAgICAnJjpiZWZvcmUnOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgXCIuY29uY2F0KGJvdHRvbUxpbmVDb2xvciksXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgLy8gRG9pbmcgdGhlIG90aGVyIHdheSBhcm91bmQgY3Jhc2ggb24gSUUgMTEgXCInJ1wiIGh0dHBzOi8vZ2l0aHViLmNvbS9jc3NpbmpzL2pzcy9pc3N1ZXMvMjQyXG4gICAgICAgIGNvbnRlbnQ6ICdcIlxcXFwwMGEwXCInLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnYm9yZGVyLWJvdHRvbS1jb2xvcicsIHtcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRlclxuICAgICAgICB9KSxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnIC8vIFRyYW5zcGFyZW50IHRvIHRoZSBob3ZlciBzdHlsZS5cblxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyOmJlZm9yZSc6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnkpXG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQ6YmVmb3JlJzoge1xuICAgICAgICBib3JkZXJCb3R0b21TdHlsZTogJ2RvdHRlZCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgY29tcG9uZW50IGlzIGZvY3VzZWQuICovXG4gICAgZm9jdXNlZDoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlZD17dHJ1ZX1gLiAqL1xuICAgIGRpc2FibGVkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHN0YXJ0QWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBhZG9ybmVkU3RhcnQ6IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiAxMlxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlbmRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGFkb3JuZWRFbmQ6IHtcbiAgICAgIHBhZGRpbmdSaWdodDogMTJcbiAgICB9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZXJyb3I9e3RydWV9YC4gKi9cbiAgICBlcnJvcjoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgICBtYXJnaW5EZW5zZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtdWx0aWxpbmU9e3RydWV9YC4gKi9cbiAgICBtdWx0aWxpbmU6IHtcbiAgICAgIHBhZGRpbmc6ICcyN3B4IDEycHggMTBweCcsXG4gICAgICAnJiRtYXJnaW5EZW5zZSc6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogMjMsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IDZcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC4gKi9cbiAgICBpbnB1dDoge1xuICAgICAgcGFkZGluZzogJzI3cHggMTJweCAxMHB4JyxcbiAgICAgICcmOi13ZWJraXQtYXV0b2ZpbGwnOiB7XG4gICAgICAgIFdlYmtpdEJveFNoYWRvdzogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gbnVsbCA6ICcwIDAgMCAxMDBweCAjMjY2Nzk4IGluc2V0JyxcbiAgICAgICAgV2Via2l0VGV4dEZpbGxDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gbnVsbCA6ICcjZmZmJyxcbiAgICAgICAgY2FyZXRDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gbnVsbCA6ICcjZmZmJyxcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogJ2luaGVyaXQnLFxuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogJ2luaGVyaXQnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG1hcmdpbj1cImRlbnNlXCJgLiAqL1xuICAgIGlucHV0TWFyZ2luRGVuc2U6IHtcbiAgICAgIHBhZGRpbmdUb3A6IDIzLFxuICAgICAgcGFkZGluZ0JvdHRvbTogNlxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBpZiBpbiBgPEZvcm1Db250cm9sIGhpZGRlbkxhYmVsIC8+YC4gKi9cbiAgICBpbnB1dEhpZGRlbkxhYmVsOiB7XG4gICAgICBwYWRkaW5nVG9wOiAxOCxcbiAgICAgIHBhZGRpbmdCb3R0b206IDE5LFxuICAgICAgJyYkaW5wdXRNYXJnaW5EZW5zZSc6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogMTAsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IDExXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG11bHRpbGluZT17dHJ1ZX1gLiAqL1xuICAgIGlucHV0TXVsdGlsaW5lOiB7XG4gICAgICBwYWRkaW5nOiAwXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYHN0YXJ0QWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBpbnB1dEFkb3JuZWRTdGFydDoge1xuICAgICAgcGFkZGluZ0xlZnQ6IDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgZW5kQWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBpbnB1dEFkb3JuZWRFbmQ6IHtcbiAgICAgIHBhZGRpbmdSaWdodDogMFxuICAgIH1cbiAgfTtcbn07XG52YXIgRmlsbGVkSW5wdXQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBGaWxsZWRJbnB1dChwcm9wcywgcmVmKSB7XG4gIHZhciBkaXNhYmxlVW5kZXJsaW5lID0gcHJvcHMuZGlzYWJsZVVuZGVybGluZSxcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgX3Byb3BzJGZ1bGxXaWR0aCA9IHByb3BzLmZ1bGxXaWR0aCxcbiAgICAgIGZ1bGxXaWR0aCA9IF9wcm9wcyRmdWxsV2lkdGggPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGZ1bGxXaWR0aCxcbiAgICAgIF9wcm9wcyRpbnB1dENvbXBvbmVudCA9IHByb3BzLmlucHV0Q29tcG9uZW50LFxuICAgICAgaW5wdXRDb21wb25lbnQgPSBfcHJvcHMkaW5wdXRDb21wb25lbnQgPT09IHZvaWQgMCA/ICdpbnB1dCcgOiBfcHJvcHMkaW5wdXRDb21wb25lbnQsXG4gICAgICBfcHJvcHMkbXVsdGlsaW5lID0gcHJvcHMubXVsdGlsaW5lLFxuICAgICAgbXVsdGlsaW5lID0gX3Byb3BzJG11bHRpbGluZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkbXVsdGlsaW5lLFxuICAgICAgX3Byb3BzJHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgdHlwZSA9IF9wcm9wcyR0eXBlID09PSB2b2lkIDAgPyAndGV4dCcgOiBfcHJvcHMkdHlwZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJkaXNhYmxlVW5kZXJsaW5lXCIsIFwiY2xhc3Nlc1wiLCBcImZ1bGxXaWR0aFwiLCBcImlucHV0Q29tcG9uZW50XCIsIFwibXVsdGlsaW5lXCIsIFwidHlwZVwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElucHV0QmFzZSwgX2V4dGVuZHMoe1xuICAgIGNsYXNzZXM6IF9leHRlbmRzKHt9LCBjbGFzc2VzLCB7XG4gICAgICByb290OiBjbHN4KGNsYXNzZXMucm9vdCwgIWRpc2FibGVVbmRlcmxpbmUgJiYgY2xhc3Nlcy51bmRlcmxpbmUpLFxuICAgICAgdW5kZXJsaW5lOiBudWxsXG4gICAgfSksXG4gICAgZnVsbFdpZHRoOiBmdWxsV2lkdGgsXG4gICAgaW5wdXRDb21wb25lbnQ6IGlucHV0Q29tcG9uZW50LFxuICAgIG11bHRpbGluZTogbXVsdGlsaW5lLFxuICAgIHJlZjogcmVmLFxuICAgIHR5cGU6IHR5cGVcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gRmlsbGVkSW5wdXQucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhpcyBwcm9wIGhlbHBzIHVzZXJzIHRvIGZpbGwgZm9ybXMgZmFzdGVyLCBlc3BlY2lhbGx5IG9uIG1vYmlsZSBkZXZpY2VzLlxuICAgKiBUaGUgbmFtZSBjYW4gYmUgY29uZnVzaW5nLCBhcyBpdCdzIG1vcmUgbGlrZSBhbiBhdXRvZmlsbC5cbiAgICogWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IGl0IFtmb2xsb3dpbmcgdGhlIHNwZWNpZmljYXRpb25dKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm0tY29udHJvbC1pbmZyYXN0cnVjdHVyZS5odG1sI2F1dG9maWxsKS5cbiAgICovXG4gIGF1dG9Db21wbGV0ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgZm9jdXNlZCBkdXJpbmcgdGhlIGZpcnN0IG1vdW50LlxuICAgKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGBpbnB1dGAgZWxlbWVudCB2YWx1ZS4gVXNlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBub3QgY29udHJvbGxlZC5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgbm90IGhhdmUgYW4gdW5kZXJsaW5lLlxuICAgKi9cbiAgZGlzYWJsZVVuZGVybGluZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuZCBgSW5wdXRBZG9ybm1lbnRgIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGVuZEFkb3JubWVudDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgaW5kaWNhdGUgYW4gZXJyb3IuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBpbnB1dENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBbQXR0cmlidXRlc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0F0dHJpYnV0ZXMpIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFBhc3MgYSByZWYgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UmVmOiByZWZUeXBlLFxuXG4gIC8qKlxuICAgKiBJZiBgZGVuc2VgLCB3aWxsIGFkanVzdCB2ZXJ0aWNhbCBzcGFjaW5nLiBUaGlzIGlzIG5vcm1hbGx5IG9idGFpbmVkIHZpYSBjb250ZXh0IGZyb21cbiAgICogRm9ybUNvbnRyb2wuXG4gICAqL1xuICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZihbJ2RlbnNlJywgJ25vbmUnXSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICBtYXhSb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYSB0ZXh0YXJlYSBlbGVtZW50IHdpbGwgYmUgcmVuZGVyZWQuXG4gICAqL1xuICBtdWx0aWxpbmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOYW1lIGF0dHJpYnV0ZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgdmFsdWUgaXMgY2hhbmdlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgIChzdHJpbmcpLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgc2hvcnQgaGludCBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0IGJlZm9yZSB0aGUgdXNlciBlbnRlcnMgYSB2YWx1ZS5cbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJdCBwcmV2ZW50cyB0aGUgdXNlciBmcm9tIGNoYW5naW5nIHRoZSB2YWx1ZSBvZiB0aGUgZmllbGRcbiAgICogKG5vdCBmcm9tIGludGVyYWN0aW5nIHdpdGggdGhlIGZpZWxkKS5cbiAgICovXG4gIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgcmVxdWlyZWQuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlbiBtdWx0aWxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93czogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBTdGFydCBgSW5wdXRBZG9ybm1lbnRgIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIHN0YXJ0QWRvcm5tZW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVHlwZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LiBJdCBzaG91bGQgYmUgW2EgdmFsaWQgSFRNTDUgaW5wdXQgdHlwZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0Zvcm1fJTNDaW5wdXQlM0VfdHlwZXMpLlxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQsIHJlcXVpcmVkIGZvciBhIGNvbnRyb2xsZWQgY29tcG9uZW50LlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnlcbn0gOiB2b2lkIDA7XG5GaWxsZWRJbnB1dC5tdWlOYW1lID0gJ0lucHV0JztcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlGaWxsZWRJbnB1dCdcbn0pKEZpbGxlZElucHV0KTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBpc0ZpbGxlZCwgaXNBZG9ybmVkU3RhcnQgfSBmcm9tICcuLi9JbnB1dEJhc2UvdXRpbHMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5pbXBvcnQgaXNNdWlFbGVtZW50IGZyb20gJy4uL3V0aWxzL2lzTXVpRWxlbWVudCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xDb250ZXh0IGZyb20gJy4vRm9ybUNvbnRyb2xDb250ZXh0JztcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAvLyBSZXNldCBmaWVsZHNldCBkZWZhdWx0IHN0eWxlLlxuICAgIG1pbldpZHRoOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIGJvcmRlcjogMCxcbiAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyAvLyBGaXggYWxpZ25tZW50IGlzc3VlIG9uIFNhZmFyaS5cblxuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG1hcmdpbj1cIm5vcm1hbFwiYC4gKi9cbiAgbWFyZ2luTm9ybWFsOiB7XG4gICAgbWFyZ2luVG9wOiAxNixcbiAgICBtYXJnaW5Cb3R0b206IDhcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgbWFyZ2luRGVuc2U6IHtcbiAgICBtYXJnaW5Ub3A6IDgsXG4gICAgbWFyZ2luQm90dG9tOiA0XG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZnVsbFdpZHRoPXt0cnVlfWAuICovXG4gIGZ1bGxXaWR0aDoge1xuICAgIHdpZHRoOiAnMTAwJSdcbiAgfVxufTtcbi8qKlxuICogUHJvdmlkZXMgY29udGV4dCBzdWNoIGFzIGZpbGxlZC9mb2N1c2VkL2Vycm9yL3JlcXVpcmVkIGZvciBmb3JtIGlucHV0cy5cbiAqIFJlbHlpbmcgb24gdGhlIGNvbnRleHQgcHJvdmlkZXMgaGlnaCBmbGV4aWJpbGl0eSBhbmQgZW5zdXJlcyB0aGF0IHRoZSBzdGF0ZSBhbHdheXMgc3RheXNcbiAqIGNvbnNpc3RlbnQgYWNyb3NzIHRoZSBjaGlsZHJlbiBvZiB0aGUgYEZvcm1Db250cm9sYC5cbiAqIFRoaXMgY29udGV4dCBpcyB1c2VkIGJ5IHRoZSBmb2xsb3dpbmcgY29tcG9uZW50czpcbiAqXG4gKiAgLSBGb3JtTGFiZWxcbiAqICAtIEZvcm1IZWxwZXJUZXh0XG4gKiAgLSBJbnB1dFxuICogIC0gSW5wdXRMYWJlbFxuICpcbiAqIFlvdSBjYW4gZmluZCBvbmUgY29tcG9zaXRpb24gZXhhbXBsZSBiZWxvdyBhbmQgbW9yZSBnb2luZyB0byBbdGhlIGRlbW9zXSgvY29tcG9uZW50cy90ZXh0LWZpZWxkcy8jY29tcG9uZW50cykuXG4gKlxuICogYGBganN4XG4gKiA8Rm9ybUNvbnRyb2w+XG4gKiAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJteS1pbnB1dFwiPkVtYWlsIGFkZHJlc3M8L0lucHV0TGFiZWw+XG4gKiAgIDxJbnB1dCBpZD1cIm15LWlucHV0XCIgYXJpYS1kZXNjcmliZWRieT1cIm15LWhlbHBlci10ZXh0XCIgLz5cbiAqICAgPEZvcm1IZWxwZXJUZXh0IGlkPVwibXktaGVscGVyLXRleHRcIj5XZSdsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsLjwvRm9ybUhlbHBlclRleHQ+XG4gKiA8L0Zvcm1Db250cm9sPlxuICogYGBgXG4gKlxuICog4pqg77iPT25seSBvbmUgaW5wdXQgY2FuIGJlIHVzZWQgd2l0aGluIGEgRm9ybUNvbnRyb2wuXG4gKi9cblxudmFyIEZvcm1Db250cm9sID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gRm9ybUNvbnRyb2wocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjb2xvciA9IF9wcm9wcyRjb2xvciA9PT0gdm9pZCAwID8gJ3ByaW1hcnknIDogX3Byb3BzJGNvbG9yLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdkaXYnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWQgPSBfcHJvcHMkZGlzYWJsZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVkLFxuICAgICAgX3Byb3BzJGVycm9yID0gcHJvcHMuZXJyb3IsXG4gICAgICBlcnJvciA9IF9wcm9wcyRlcnJvciA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZXJyb3IsXG4gICAgICBfcHJvcHMkZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgZnVsbFdpZHRoID0gX3Byb3BzJGZ1bGxXaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFdpZHRoLFxuICAgICAgdmlzdWFsbHlGb2N1c2VkID0gcHJvcHMuZm9jdXNlZCxcbiAgICAgIF9wcm9wcyRoaWRkZW5MYWJlbCA9IHByb3BzLmhpZGRlbkxhYmVsLFxuICAgICAgaGlkZGVuTGFiZWwgPSBfcHJvcHMkaGlkZGVuTGFiZWwgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGhpZGRlbkxhYmVsLFxuICAgICAgX3Byb3BzJG1hcmdpbiA9IHByb3BzLm1hcmdpbixcbiAgICAgIG1hcmdpbiA9IF9wcm9wcyRtYXJnaW4gPT09IHZvaWQgMCA/ICdub25lJyA6IF9wcm9wcyRtYXJnaW4sXG4gICAgICBfcHJvcHMkcmVxdWlyZWQgPSBwcm9wcy5yZXF1aXJlZCxcbiAgICAgIHJlcXVpcmVkID0gX3Byb3BzJHJlcXVpcmVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRyZXF1aXJlZCxcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnc3RhbmRhcmQnIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJjb21wb25lbnRcIiwgXCJkaXNhYmxlZFwiLCBcImVycm9yXCIsIFwiZnVsbFdpZHRoXCIsIFwiZm9jdXNlZFwiLCBcImhpZGRlbkxhYmVsXCIsIFwibWFyZ2luXCIsIFwicmVxdWlyZWRcIiwgXCJzaXplXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBXZSBuZWVkIHRvIGl0ZXJhdGUgdGhyb3VnaCB0aGUgY2hpbGRyZW4gYW5kIGZpbmQgdGhlIElucHV0IGluIG9yZGVyXG4gICAgLy8gdG8gZnVsbHkgc3VwcG9ydCBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuXG4gICAgdmFyIGluaXRpYWxBZG9ybmVkU3RhcnQgPSBmYWxzZTtcblxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmICghaXNNdWlFbGVtZW50KGNoaWxkLCBbJ0lucHV0JywgJ1NlbGVjdCddKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbnB1dCA9IGlzTXVpRWxlbWVudChjaGlsZCwgWydTZWxlY3QnXSkgPyBjaGlsZC5wcm9wcy5pbnB1dCA6IGNoaWxkO1xuXG4gICAgICAgIGlmIChpbnB1dCAmJiBpc0Fkb3JuZWRTdGFydChpbnB1dC5wcm9wcykpIHtcbiAgICAgICAgICBpbml0aWFsQWRvcm5lZFN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluaXRpYWxBZG9ybmVkU3RhcnQ7XG4gIH0pLFxuICAgICAgYWRvcm5lZFN0YXJ0ID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0QWRvcm5lZFN0YXJ0ID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUyID0gUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIC8vIFdlIG5lZWQgdG8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBjaGlsZHJlbiBhbmQgZmluZCB0aGUgSW5wdXQgaW4gb3JkZXJcbiAgICAvLyB0byBmdWxseSBzdXBwb3J0IHNlcnZlci1zaWRlIHJlbmRlcmluZy5cbiAgICB2YXIgaW5pdGlhbEZpbGxlZCA9IGZhbHNlO1xuXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKCFpc011aUVsZW1lbnQoY2hpbGQsIFsnSW5wdXQnLCAnU2VsZWN0J10pKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRmlsbGVkKGNoaWxkLnByb3BzLCB0cnVlKSkge1xuICAgICAgICAgIGluaXRpYWxGaWxsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5pdGlhbEZpbGxlZDtcbiAgfSksXG4gICAgICBmaWxsZWQgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0RmlsbGVkID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMyA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIF9mb2N1c2VkID0gX1JlYWN0JHVzZVN0YXRlM1swXSxcbiAgICAgIHNldEZvY3VzZWQgPSBfUmVhY3QkdXNlU3RhdGUzWzFdO1xuXG4gIHZhciBmb2N1c2VkID0gdmlzdWFsbHlGb2N1c2VkICE9PSB1bmRlZmluZWQgPyB2aXN1YWxseUZvY3VzZWQgOiBfZm9jdXNlZDtcblxuICBpZiAoZGlzYWJsZWQgJiYgZm9jdXNlZCkge1xuICAgIHNldEZvY3VzZWQoZmFsc2UpO1xuICB9XG5cbiAgdmFyIHJlZ2lzdGVyRWZmZWN0O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgdmFyIHJlZ2lzdGVyZWRJbnB1dCA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG5cbiAgICByZWdpc3RlckVmZmVjdCA9IGZ1bmN0aW9uIHJlZ2lzdGVyRWZmZWN0KCkge1xuICAgICAgaWYgKHJlZ2lzdGVyZWRJbnB1dC5jdXJyZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogVGhlcmUgYXJlIG11bHRpcGxlIElucHV0QmFzZSBjb21wb25lbnRzIGluc2lkZSBhIEZvcm1Db250cm9sLicsICdUaGlzIGlzIG5vdCBzdXBwb3J0ZWQuIEl0IG1pZ2h0IGNhdXNlIGluZmluaXRlIHJlbmRlcmluZyBsb29wcy4nLCAnT25seSB1c2Ugb25lIElucHV0QmFzZS4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG5cbiAgICAgIHJlZ2lzdGVyZWRJbnB1dC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlZ2lzdGVyZWRJbnB1dC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICB9O1xuICAgIH07XG4gIH1cblxuICB2YXIgb25GaWxsZWQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgc2V0RmlsbGVkKHRydWUpO1xuICB9LCBbXSk7XG4gIHZhciBvbkVtcHR5ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHNldEZpbGxlZChmYWxzZSk7XG4gIH0sIFtdKTtcbiAgdmFyIGNoaWxkQ29udGV4dCA9IHtcbiAgICBhZG9ybmVkU3RhcnQ6IGFkb3JuZWRTdGFydCxcbiAgICBzZXRBZG9ybmVkU3RhcnQ6IHNldEFkb3JuZWRTdGFydCxcbiAgICBjb2xvcjogY29sb3IsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIGVycm9yOiBlcnJvcixcbiAgICBmaWxsZWQ6IGZpbGxlZCxcbiAgICBmb2N1c2VkOiBmb2N1c2VkLFxuICAgIGZ1bGxXaWR0aDogZnVsbFdpZHRoLFxuICAgIGhpZGRlbkxhYmVsOiBoaWRkZW5MYWJlbCxcbiAgICBtYXJnaW46IChzaXplID09PSAnc21hbGwnID8gJ2RlbnNlJyA6IHVuZGVmaW5lZCkgfHwgbWFyZ2luLFxuICAgIG9uQmx1cjogZnVuY3Rpb24gb25CbHVyKCkge1xuICAgICAgc2V0Rm9jdXNlZChmYWxzZSk7XG4gICAgfSxcbiAgICBvbkVtcHR5OiBvbkVtcHR5LFxuICAgIG9uRmlsbGVkOiBvbkZpbGxlZCxcbiAgICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKCkge1xuICAgICAgc2V0Rm9jdXNlZCh0cnVlKTtcbiAgICB9LFxuICAgIHJlZ2lzdGVyRWZmZWN0OiByZWdpc3RlckVmZmVjdCxcbiAgICByZXF1aXJlZDogcmVxdWlyZWQsXG4gICAgdmFyaWFudDogdmFyaWFudFxuICB9O1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2xDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNoaWxkQ29udGV4dFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIG1hcmdpbiAhPT0gJ25vbmUnICYmIGNsYXNzZXNbXCJtYXJnaW5cIi5jb25jYXQoY2FwaXRhbGl6ZShtYXJnaW4pKV0sIGZ1bGxXaWR0aCAmJiBjbGFzc2VzLmZ1bGxXaWR0aCksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBjaGlsZHJlbikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBGb3JtQ29udHJvbC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudHMgb2YgdGhlIGZvcm0gY29udHJvbC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsLCBpbnB1dCBhbmQgaGVscGVyIHRleHQgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiBhIGRpc2FibGVkIHN0YXRlLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCBzaG91bGQgYmUgZGlzcGxheWVkIGluIGFuIGVycm9yIHN0YXRlLlxuICAgKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gZm9jdXNlZCBzdGF0ZS5cbiAgICovXG4gIGZvY3VzZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCB3aWxsIGJlIGhpZGRlbi5cbiAgICogVGhpcyBpcyB1c2VkIHRvIGluY3JlYXNlIGRlbnNpdHkgZm9yIGEgYEZpbGxlZElucHV0YC5cbiAgICogQmUgc3VyZSB0byBhZGQgYGFyaWEtbGFiZWxgIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBoaWRkZW5MYWJlbDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGBkZW5zZWAgb3IgYG5vcm1hbGAsIHdpbGwgYWRqdXN0IHZlcnRpY2FsIHNwYWNpbmcgb2YgdGhpcyBhbmQgY29udGFpbmVkIGNvbXBvbmVudHMuXG4gICAqL1xuICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZihbJ2RlbnNlJywgJ25vbmUnLCAnbm9ybWFsJ10pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCB3aWxsIGluZGljYXRlIHRoYXQgdGhlIGlucHV0IGlzIHJlcXVpcmVkLlxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgdGV4dCBmaWVsZC5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ21lZGl1bScsICdzbWFsbCddKSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZmlsbGVkJywgJ291dGxpbmVkJywgJ3N0YW5kYXJkJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUZvcm1Db250cm9sJ1xufSkoRm9ybUNvbnRyb2wpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG52YXIgRm9ybUNvbnRyb2xDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBGb3JtQ29udHJvbENvbnRleHQuZGlzcGxheU5hbWUgPSAnRm9ybUNvbnRyb2xDb250ZXh0Jztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvcm1Db250cm9sKCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChGb3JtQ29udHJvbENvbnRleHQpO1xufVxuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbnRyb2xDb250ZXh0OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1Db250cm9sU3RhdGUoX3JlZikge1xuICB2YXIgcHJvcHMgPSBfcmVmLnByb3BzLFxuICAgICAgc3RhdGVzID0gX3JlZi5zdGF0ZXMsXG4gICAgICBtdWlGb3JtQ29udHJvbCA9IF9yZWYubXVpRm9ybUNvbnRyb2w7XG4gIHJldHVybiBzdGF0ZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHN0YXRlKSB7XG4gICAgYWNjW3N0YXRlXSA9IHByb3BzW3N0YXRlXTtcblxuICAgIGlmIChtdWlGb3JtQ29udHJvbCkge1xuICAgICAgaWYgKHR5cGVvZiBwcm9wc1tzdGF0ZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGFjY1tzdGF0ZV0gPSBtdWlGb3JtQ29udHJvbFtzdGF0ZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufSIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Zvcm1Db250cm9sJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlRm9ybUNvbnRyb2wgfSBmcm9tICcuL3VzZUZvcm1Db250cm9sJzsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xDb250ZXh0IGZyb20gJy4vRm9ybUNvbnRyb2xDb250ZXh0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcm1Db250cm9sKCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChGb3JtQ29udHJvbENvbnRleHQpO1xufSIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBmb3JtQ29udHJvbFN0YXRlIGZyb20gJy4uL0Zvcm1Db250cm9sL2Zvcm1Db250cm9sU3RhdGUnO1xuaW1wb3J0IHVzZUZvcm1Db250cm9sIGZyb20gJy4uL0Zvcm1Db250cm9sL3VzZUZvcm1Db250cm9sJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiBfZXh0ZW5kcyh7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeVxuICAgIH0sIHRoZW1lLnR5cG9ncmFwaHkuY2FwdGlvbiwge1xuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICBtYXJnaW5Ub3A6IDMsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5kaXNhYmxlZFxuICAgICAgfSxcbiAgICAgICcmJGVycm9yJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluXG4gICAgICB9XG4gICAgfSksXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlcnJvcj17dHJ1ZX1gLiAqL1xuICAgIGVycm9yOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgbWFyZ2luPVwiZGVuc2VcImAuICovXG4gICAgbWFyZ2luRGVuc2U6IHtcbiAgICAgIG1hcmdpblRvcDogNFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiZmlsbGVkXCJgIG9yIGB2YXJpYW50PVwib3V0bGluZWRcImAuICovXG4gICAgY29udGFpbmVkOiB7XG4gICAgICBtYXJnaW5MZWZ0OiAxNCxcbiAgICAgIG1hcmdpblJpZ2h0OiAxNFxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmb2N1c2VkPXt0cnVlfWAuICovXG4gICAgZm9jdXNlZDoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmaWxsZWQ9e3RydWV9YC4gKi9cbiAgICBmaWxsZWQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgcmVxdWlyZWQ9e3RydWV9YC4gKi9cbiAgICByZXF1aXJlZDoge31cbiAgfTtcbn07XG52YXIgRm9ybUhlbHBlclRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBGb3JtSGVscGVyVGV4dChwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ3AnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBlcnJvciA9IHByb3BzLmVycm9yLFxuICAgICAgZmlsbGVkID0gcHJvcHMuZmlsbGVkLFxuICAgICAgZm9jdXNlZCA9IHByb3BzLmZvY3VzZWQsXG4gICAgICBtYXJnaW4gPSBwcm9wcy5tYXJnaW4sXG4gICAgICByZXF1aXJlZCA9IHByb3BzLnJlcXVpcmVkLFxuICAgICAgdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCIsIFwiZGlzYWJsZWRcIiwgXCJlcnJvclwiLCBcImZpbGxlZFwiLCBcImZvY3VzZWRcIiwgXCJtYXJnaW5cIiwgXCJyZXF1aXJlZFwiLCBcInZhcmlhbnRcIl0pO1xuXG4gIHZhciBtdWlGb3JtQ29udHJvbCA9IHVzZUZvcm1Db250cm9sKCk7XG4gIHZhciBmY3MgPSBmb3JtQ29udHJvbFN0YXRlKHtcbiAgICBwcm9wczogcHJvcHMsXG4gICAgbXVpRm9ybUNvbnRyb2w6IG11aUZvcm1Db250cm9sLFxuICAgIHN0YXRlczogWyd2YXJpYW50JywgJ21hcmdpbicsICdkaXNhYmxlZCcsICdlcnJvcicsICdmaWxsZWQnLCAnZm9jdXNlZCcsICdyZXF1aXJlZCddXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgKGZjcy52YXJpYW50ID09PSAnZmlsbGVkJyB8fCBmY3MudmFyaWFudCA9PT0gJ291dGxpbmVkJykgJiYgY2xhc3Nlcy5jb250YWluZWQsIGNsYXNzTmFtZSwgZmNzLmRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQsIGZjcy5lcnJvciAmJiBjbGFzc2VzLmVycm9yLCBmY3MuZmlsbGVkICYmIGNsYXNzZXMuZmlsbGVkLCBmY3MuZm9jdXNlZCAmJiBjbGFzc2VzLmZvY3VzZWQsIGZjcy5yZXF1aXJlZCAmJiBjbGFzc2VzLnJlcXVpcmVkLCBmY3MubWFyZ2luID09PSAnZGVuc2UnICYmIGNsYXNzZXMubWFyZ2luRGVuc2UpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSwgY2hpbGRyZW4gPT09ICcgJyA/XG4gIC8qI19fUFVSRV9fKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgIF9faHRtbDogJyYjODIwMzsnXG4gICAgfVxuICB9KSA6IGNoaWxkcmVuKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gRm9ybUhlbHBlclRleHQucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogSWYgYCcgJ2AgaXMgcHJvdmlkZWQsIHRoZSBjb21wb25lbnQgcmVzZXJ2ZXMgb25lIGxpbmUgaGVpZ2h0IGZvciBkaXNwbGF5aW5nIGEgZnV0dXJlIG1lc3NhZ2UuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaGVscGVyIHRleHQgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiBhIGRpc2FibGVkIHN0YXRlLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGhlbHBlciB0ZXh0IHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gYW4gZXJyb3Igc3RhdGUuXG4gICAqL1xuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGhlbHBlciB0ZXh0IHNob3VsZCB1c2UgZmlsbGVkIGNsYXNzZXMga2V5LlxuICAgKi9cbiAgZmlsbGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaGVscGVyIHRleHQgc2hvdWxkIHVzZSBmb2N1c2VkIGNsYXNzZXMga2V5LlxuICAgKi9cbiAgZm9jdXNlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGBkZW5zZWAsIHdpbGwgYWRqdXN0IHZlcnRpY2FsIHNwYWNpbmcuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mKFsnZGVuc2UnXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGhlbHBlciB0ZXh0IHNob3VsZCB1c2UgcmVxdWlyZWQgY2xhc3NlcyBrZXkuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2ZpbGxlZCcsICdvdXRsaW5lZCcsICdzdGFuZGFyZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlGb3JtSGVscGVyVGV4dCdcbn0pKEZvcm1IZWxwZXJUZXh0KTsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgZm9ybUNvbnRyb2xTdGF0ZSBmcm9tICcuLi9Gb3JtQ29udHJvbC9mb3JtQ29udHJvbFN0YXRlJztcbmltcG9ydCB1c2VGb3JtQ29udHJvbCBmcm9tICcuLi9Gb3JtQ29udHJvbC91c2VGb3JtQ29udHJvbCc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiBfZXh0ZW5kcyh7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeVxuICAgIH0sIHRoZW1lLnR5cG9ncmFwaHkuYm9keTEsIHtcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgJyYkZm9jdXNlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuZGlzYWJsZWRcbiAgICAgIH0sXG4gICAgICAnJiRlcnJvcic6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpblxuICAgICAgfVxuICAgIH0pLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgY29sb3IgaXMgc2Vjb25kYXJ5LiAqL1xuICAgIGNvbG9yU2Vjb25kYXJ5OiB7XG4gICAgICAnJiRmb2N1c2VkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmb2N1c2VkPXt0cnVlfWAuICovXG4gICAgZm9jdXNlZDoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlZD17dHJ1ZX1gLiAqL1xuICAgIGRpc2FibGVkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGVycm9yPXt0cnVlfWAuICovXG4gICAgZXJyb3I6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZmlsbGVkPXt0cnVlfWAuICovXG4gICAgZmlsbGVkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHJlcXVpcmVkPXt0cnVlfWAuICovXG4gICAgcmVxdWlyZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGFzdGVyaXNrIGVsZW1lbnQuICovXG4gICAgYXN0ZXJpc2s6IHtcbiAgICAgICcmJGVycm9yJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluXG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbnZhciBGb3JtTGFiZWwgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBGb3JtTGFiZWwocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnbGFiZWwnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBlcnJvciA9IHByb3BzLmVycm9yLFxuICAgICAgZmlsbGVkID0gcHJvcHMuZmlsbGVkLFxuICAgICAgZm9jdXNlZCA9IHByb3BzLmZvY3VzZWQsXG4gICAgICByZXF1aXJlZCA9IHByb3BzLnJlcXVpcmVkLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwiY29tcG9uZW50XCIsIFwiZGlzYWJsZWRcIiwgXCJlcnJvclwiLCBcImZpbGxlZFwiLCBcImZvY3VzZWRcIiwgXCJyZXF1aXJlZFwiXSk7XG5cbiAgdmFyIG11aUZvcm1Db250cm9sID0gdXNlRm9ybUNvbnRyb2woKTtcbiAgdmFyIGZjcyA9IGZvcm1Db250cm9sU3RhdGUoe1xuICAgIHByb3BzOiBwcm9wcyxcbiAgICBtdWlGb3JtQ29udHJvbDogbXVpRm9ybUNvbnRyb2wsXG4gICAgc3RhdGVzOiBbJ2NvbG9yJywgJ3JlcXVpcmVkJywgJ2ZvY3VzZWQnLCAnZGlzYWJsZWQnLCAnZXJyb3InLCAnZmlsbGVkJ11cbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc2VzW1wiY29sb3JcIi5jb25jYXQoY2FwaXRhbGl6ZShmY3MuY29sb3IgfHwgJ3ByaW1hcnknKSldLCBjbGFzc05hbWUsIGZjcy5kaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkLCBmY3MuZXJyb3IgJiYgY2xhc3Nlcy5lcnJvciwgZmNzLmZpbGxlZCAmJiBjbGFzc2VzLmZpbGxlZCwgZmNzLmZvY3VzZWQgJiYgY2xhc3Nlcy5mb2N1c2VkLCBmY3MucmVxdWlyZWQgJiYgY2xhc3Nlcy5yZXF1aXJlZCksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBjaGlsZHJlbiwgZmNzLnJlcXVpcmVkICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmFzdGVyaXNrLCBmY3MuZXJyb3IgJiYgY2xhc3Nlcy5lcnJvcilcbiAgfSwgXCJcXHUyMDA5XCIsICcqJykpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBGb3JtTGFiZWwucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gYSBkaXNhYmxlZCBzdGF0ZS5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbGFiZWwgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiBhbiBlcnJvciBzdGF0ZS5cbiAgICovXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbGFiZWwgc2hvdWxkIHVzZSBmaWxsZWQgY2xhc3NlcyBrZXkuXG4gICAqL1xuICBmaWxsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCBvZiB0aGlzIGxhYmVsIGlzIGZvY3VzZWQgKHVzZWQgYnkgYEZvcm1Hcm91cGAgY29tcG9uZW50cykuXG4gICAqL1xuICBmb2N1c2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbGFiZWwgd2lsbCBpbmRpY2F0ZSB0aGF0IHRoZSBpbnB1dCBpcyByZXF1aXJlZC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlGb3JtTGFiZWwnXG59KShGb3JtTGFiZWwpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuLi9zdHlsZXMvdXNlVGhlbWUnO1xuaW1wb3J0IHsgcmVmbG93LCBnZXRUcmFuc2l0aW9uUHJvcHMgfSBmcm9tICcuLi90cmFuc2l0aW9ucy91dGlscyc7XG5pbXBvcnQgdXNlRm9ya1JlZiBmcm9tICcuLi91dGlscy91c2VGb3JrUmVmJztcblxuZnVuY3Rpb24gZ2V0U2NhbGUodmFsdWUpIHtcbiAgcmV0dXJuIFwic2NhbGUoXCIuY29uY2F0KHZhbHVlLCBcIiwgXCIpLmNvbmNhdChNYXRoLnBvdyh2YWx1ZSwgMiksIFwiKVwiKTtcbn1cblxudmFyIHN0eWxlcyA9IHtcbiAgZW50ZXJpbmc6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogZ2V0U2NhbGUoMSlcbiAgfSxcbiAgZW50ZXJlZDoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiAnbm9uZSdcbiAgfVxufTtcbi8qKlxuICogVGhlIEdyb3cgdHJhbnNpdGlvbiBpcyB1c2VkIGJ5IHRoZSBbVG9vbHRpcF0oL2NvbXBvbmVudHMvdG9vbHRpcHMvKSBhbmRcbiAqIFtQb3BvdmVyXSgvY29tcG9uZW50cy9wb3BvdmVyLykgY29tcG9uZW50cy5cbiAqIEl0IHVzZXMgW3JlYWN0LXRyYW5zaXRpb24tZ3JvdXBdKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXApIGludGVybmFsbHkuXG4gKi9cblxudmFyIEdyb3cgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBHcm93KHByb3BzLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBfcHJvcHMkZGlzYWJsZVN0cmljdE0gPSBwcm9wcy5kaXNhYmxlU3RyaWN0TW9kZUNvbXBhdCxcbiAgICAgIGRpc2FibGVTdHJpY3RNb2RlQ29tcGF0ID0gX3Byb3BzJGRpc2FibGVTdHJpY3RNID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlU3RyaWN0TSxcbiAgICAgIGluUHJvcCA9IHByb3BzLmluLFxuICAgICAgb25FbnRlciA9IHByb3BzLm9uRW50ZXIsXG4gICAgICBvbkVudGVyZWQgPSBwcm9wcy5vbkVudGVyZWQsXG4gICAgICBvbkVudGVyaW5nID0gcHJvcHMub25FbnRlcmluZyxcbiAgICAgIG9uRXhpdCA9IHByb3BzLm9uRXhpdCxcbiAgICAgIG9uRXhpdGVkID0gcHJvcHMub25FeGl0ZWQsXG4gICAgICBvbkV4aXRpbmcgPSBwcm9wcy5vbkV4aXRpbmcsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgX3Byb3BzJHRpbWVvdXQgPSBwcm9wcy50aW1lb3V0LFxuICAgICAgdGltZW91dCA9IF9wcm9wcyR0aW1lb3V0ID09PSB2b2lkIDAgPyAnYXV0bycgOiBfcHJvcHMkdGltZW91dCxcbiAgICAgIF9wcm9wcyRUcmFuc2l0aW9uQ29tcCA9IHByb3BzLlRyYW5zaXRpb25Db21wb25lbnQsXG4gICAgICBUcmFuc2l0aW9uQ29tcG9uZW50ID0gX3Byb3BzJFRyYW5zaXRpb25Db21wID09PSB2b2lkIDAgPyBUcmFuc2l0aW9uIDogX3Byb3BzJFRyYW5zaXRpb25Db21wLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiZGlzYWJsZVN0cmljdE1vZGVDb21wYXRcIiwgXCJpblwiLCBcIm9uRW50ZXJcIiwgXCJvbkVudGVyZWRcIiwgXCJvbkVudGVyaW5nXCIsIFwib25FeGl0XCIsIFwib25FeGl0ZWRcIiwgXCJvbkV4aXRpbmdcIiwgXCJzdHlsZVwiLCBcInRpbWVvdXRcIiwgXCJUcmFuc2l0aW9uQ29tcG9uZW50XCJdKTtcblxuICB2YXIgdGltZXIgPSBSZWFjdC51c2VSZWYoKTtcbiAgdmFyIGF1dG9UaW1lb3V0ID0gUmVhY3QudXNlUmVmKCk7XG4gIHZhciB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIHZhciBlbmFibGVTdHJpY3RNb2RlQ29tcGF0ID0gdGhlbWUudW5zdGFibGVfc3RyaWN0TW9kZSAmJiAhZGlzYWJsZVN0cmljdE1vZGVDb21wYXQ7XG4gIHZhciBub2RlUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgZm9yZWlnblJlZiA9IHVzZUZvcmtSZWYoY2hpbGRyZW4ucmVmLCByZWYpO1xuICB2YXIgaGFuZGxlUmVmID0gdXNlRm9ya1JlZihlbmFibGVTdHJpY3RNb2RlQ29tcGF0ID8gbm9kZVJlZiA6IHVuZGVmaW5lZCwgZm9yZWlnblJlZik7XG5cbiAgdmFyIG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2sgPSBmdW5jdGlvbiBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChub2RlT3JBcHBlYXJpbmcsIG1heWJlQXBwZWFyaW5nKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF9yZWYgPSBlbmFibGVTdHJpY3RNb2RlQ29tcGF0ID8gW25vZGVSZWYuY3VycmVudCwgbm9kZU9yQXBwZWFyaW5nXSA6IFtub2RlT3JBcHBlYXJpbmcsIG1heWJlQXBwZWFyaW5nXSxcbiAgICAgICAgICAgIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgICBub2RlID0gX3JlZjJbMF0sXG4gICAgICAgICAgICBpc0FwcGVhcmluZyA9IF9yZWYyWzFdOyAvLyBvbkVudGVyWHh4IGFuZCBvbkV4aXRYeHggY2FsbGJhY2tzIGhhdmUgYSBkaWZmZXJlbnQgYXJndW1lbnRzLmxlbmd0aCB2YWx1ZS5cblxuXG4gICAgICAgIGlmIChpc0FwcGVhcmluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY2FsbGJhY2sobm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2sobm9kZSwgaXNBcHBlYXJpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaGFuZGxlRW50ZXJpbmcgPSBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKG9uRW50ZXJpbmcpO1xuICB2YXIgaGFuZGxlRW50ZXIgPSBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKGZ1bmN0aW9uIChub2RlLCBpc0FwcGVhcmluZykge1xuICAgIHJlZmxvdyhub2RlKTsgLy8gU28gdGhlIGFuaW1hdGlvbiBhbHdheXMgc3RhcnQgZnJvbSB0aGUgc3RhcnQuXG5cbiAgICB2YXIgX2dldFRyYW5zaXRpb25Qcm9wcyA9IGdldFRyYW5zaXRpb25Qcm9wcyh7XG4gICAgICBzdHlsZTogc3R5bGUsXG4gICAgICB0aW1lb3V0OiB0aW1lb3V0XG4gICAgfSwge1xuICAgICAgbW9kZTogJ2VudGVyJ1xuICAgIH0pLFxuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSBfZ2V0VHJhbnNpdGlvblByb3BzLmR1cmF0aW9uLFxuICAgICAgICBkZWxheSA9IF9nZXRUcmFuc2l0aW9uUHJvcHMuZGVsYXk7XG5cbiAgICB2YXIgZHVyYXRpb247XG5cbiAgICBpZiAodGltZW91dCA9PT0gJ2F1dG8nKSB7XG4gICAgICBkdXJhdGlvbiA9IHRoZW1lLnRyYW5zaXRpb25zLmdldEF1dG9IZWlnaHREdXJhdGlvbihub2RlLmNsaWVudEhlaWdodCk7XG4gICAgICBhdXRvVGltZW91dC5jdXJyZW50ID0gZHVyYXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgIH1cblxuICAgIG5vZGUuc3R5bGUudHJhbnNpdGlvbiA9IFt0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknLCB7XG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBkZWxheTogZGVsYXlcbiAgICB9KSwgdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nLCB7XG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24gKiAwLjY2NixcbiAgICAgIGRlbGF5OiBkZWxheVxuICAgIH0pXS5qb2luKCcsJyk7XG5cbiAgICBpZiAob25FbnRlcikge1xuICAgICAgb25FbnRlcihub2RlLCBpc0FwcGVhcmluZyk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGhhbmRsZUVudGVyZWQgPSBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKG9uRW50ZXJlZCk7XG4gIHZhciBoYW5kbGVFeGl0aW5nID0gbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayhvbkV4aXRpbmcpO1xuICB2YXIgaGFuZGxlRXhpdCA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2soZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgX2dldFRyYW5zaXRpb25Qcm9wczIgPSBnZXRUcmFuc2l0aW9uUHJvcHMoe1xuICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgdGltZW91dDogdGltZW91dFxuICAgIH0sIHtcbiAgICAgIG1vZGU6ICdleGl0J1xuICAgIH0pLFxuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSBfZ2V0VHJhbnNpdGlvblByb3BzMi5kdXJhdGlvbixcbiAgICAgICAgZGVsYXkgPSBfZ2V0VHJhbnNpdGlvblByb3BzMi5kZWxheTtcblxuICAgIHZhciBkdXJhdGlvbjtcblxuICAgIGlmICh0aW1lb3V0ID09PSAnYXV0bycpIHtcbiAgICAgIGR1cmF0aW9uID0gdGhlbWUudHJhbnNpdGlvbnMuZ2V0QXV0b0hlaWdodER1cmF0aW9uKG5vZGUuY2xpZW50SGVpZ2h0KTtcbiAgICAgIGF1dG9UaW1lb3V0LmN1cnJlbnQgPSBkdXJhdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgZHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb247XG4gICAgfVxuXG4gICAgbm9kZS5zdHlsZS50cmFuc2l0aW9uID0gW3RoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScsIHtcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIGRlbGF5OiBkZWxheVxuICAgIH0pLCB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3RyYW5zZm9ybScsIHtcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiAqIDAuNjY2LFxuICAgICAgZGVsYXk6IGRlbGF5IHx8IGR1cmF0aW9uICogMC4zMzNcbiAgICB9KV0uam9pbignLCcpO1xuICAgIG5vZGUuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IGdldFNjYWxlKDAuNzUpO1xuXG4gICAgaWYgKG9uRXhpdCkge1xuICAgICAgb25FeGl0KG5vZGUpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBoYW5kbGVFeGl0ZWQgPSBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKG9uRXhpdGVkKTtcblxuICB2YXIgYWRkRW5kTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRFbmRMaXN0ZW5lcihub2RlT3JOZXh0LCBtYXliZU5leHQpIHtcbiAgICB2YXIgbmV4dCA9IGVuYWJsZVN0cmljdE1vZGVDb21wYXQgPyBub2RlT3JOZXh0IDogbWF5YmVOZXh0O1xuXG4gICAgaWYgKHRpbWVvdXQgPT09ICdhdXRvJykge1xuICAgICAgdGltZXIuY3VycmVudCA9IHNldFRpbWVvdXQobmV4dCwgYXV0b1RpbWVvdXQuY3VycmVudCB8fCAwKTtcbiAgICB9XG4gIH07XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyLmN1cnJlbnQpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Db21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBhcHBlYXI6IHRydWUsXG4gICAgaW46IGluUHJvcCxcbiAgICBub2RlUmVmOiBlbmFibGVTdHJpY3RNb2RlQ29tcGF0ID8gbm9kZVJlZiA6IHVuZGVmaW5lZCxcbiAgICBvbkVudGVyOiBoYW5kbGVFbnRlcixcbiAgICBvbkVudGVyZWQ6IGhhbmRsZUVudGVyZWQsXG4gICAgb25FbnRlcmluZzogaGFuZGxlRW50ZXJpbmcsXG4gICAgb25FeGl0OiBoYW5kbGVFeGl0LFxuICAgIG9uRXhpdGVkOiBoYW5kbGVFeGl0ZWQsXG4gICAgb25FeGl0aW5nOiBoYW5kbGVFeGl0aW5nLFxuICAgIGFkZEVuZExpc3RlbmVyOiBhZGRFbmRMaXN0ZW5lcixcbiAgICB0aW1lb3V0OiB0aW1lb3V0ID09PSAnYXV0bycgPyBudWxsIDogdGltZW91dFxuICB9LCBvdGhlciksIGZ1bmN0aW9uIChzdGF0ZSwgY2hpbGRQcm9wcykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCBfZXh0ZW5kcyh7XG4gICAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB0cmFuc2Zvcm06IGdldFNjYWxlKDAuNzUpLFxuICAgICAgICB2aXNpYmlsaXR5OiBzdGF0ZSA9PT0gJ2V4aXRlZCcgJiYgIWluUHJvcCA/ICdoaWRkZW4nIDogdW5kZWZpbmVkXG4gICAgICB9LCBzdHlsZXNbc3RhdGVdLCBzdHlsZSwgY2hpbGRyZW4ucHJvcHMuc3R5bGUpLFxuICAgICAgcmVmOiBoYW5kbGVSZWZcbiAgICB9LCBjaGlsZFByb3BzKSk7XG4gIH0pO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBHcm93LnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIEEgc2luZ2xlIGNoaWxkIGNvbnRlbnQgZWxlbWVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudCxcblxuICAvKipcbiAgICogRW5hYmxlIHRoaXMgcHJvcCBpZiB5b3UgZW5jb3VudGVyICdGdW5jdGlvbiBjb21wb25lbnRzIGNhbm5vdCBiZSBnaXZlbiByZWZzJyxcbiAgICogdXNlIGB1bnN0YWJsZV9jcmVhdGVTdHJpY3RNb2RlVGhlbWVgLFxuICAgKiBhbmQgY2FuJ3QgZm9yd2FyZCB0aGUgcmVmIGluIHRoZSBjaGlsZCBjb21wb25lbnQuXG4gICAqL1xuICBkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgc2hvdyB0aGUgY29tcG9uZW50OyB0cmlnZ2VycyB0aGUgZW50ZXIgb3IgZXhpdCBhbmltYXRpb24uXG4gICAqL1xuICBpbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIGZvciB0aGUgdHJhbnNpdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBZb3UgbWF5IHNwZWNpZnkgYSBzaW5nbGUgdGltZW91dCBmb3IgYWxsIHRyYW5zaXRpb25zLCBvciBpbmRpdmlkdWFsbHkgd2l0aCBhbiBvYmplY3QuXG4gICAqXG4gICAqIFNldCB0byAnYXV0bycgdG8gYXV0b21hdGljYWxseSBjYWxjdWxhdGUgdHJhbnNpdGlvbiB0aW1lIGJhc2VkIG9uIGhlaWdodC5cbiAgICovXG4gIHRpbWVvdXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXBwZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGVudGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGV4aXQ6IFByb3BUeXBlcy5udW1iZXJcbiAgfSldKVxufSA6IHZvaWQgMDtcbkdyb3cubXVpU3VwcG9ydEF1dG8gPSB0cnVlO1xuZXhwb3J0IGRlZmF1bHQgR3JvdzsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIjtcblxuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cywganN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyByZWZUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBmb3JtQ29udHJvbFN0YXRlIGZyb20gJy4uL0Zvcm1Db250cm9sL2Zvcm1Db250cm9sU3RhdGUnO1xuaW1wb3J0IEZvcm1Db250cm9sQ29udGV4dCwgeyB1c2VGb3JtQ29udHJvbCB9IGZyb20gJy4uL0Zvcm1Db250cm9sL0Zvcm1Db250cm9sQ29udGV4dCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmltcG9ydCB1c2VGb3JrUmVmIGZyb20gJy4uL3V0aWxzL3VzZUZvcmtSZWYnO1xuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSAnLi4vVGV4dGFyZWFBdXRvc2l6ZSc7XG5pbXBvcnQgeyBpc0ZpbGxlZCB9IGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgdmFyIGxpZ2h0ID0gdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnO1xuICB2YXIgcGxhY2Vob2xkZXIgPSB7XG4gICAgY29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgIG9wYWNpdHk6IGxpZ2h0ID8gMC40MiA6IDAuNSxcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknLCB7XG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRlclxuICAgIH0pXG4gIH07XG4gIHZhciBwbGFjZWhvbGRlckhpZGRlbiA9IHtcbiAgICBvcGFjaXR5OiAnMCAhaW1wb3J0YW50J1xuICB9O1xuICB2YXIgcGxhY2Vob2xkZXJWaXNpYmxlID0ge1xuICAgIG9wYWNpdHk6IGxpZ2h0ID8gMC40MiA6IDAuNVxuICB9O1xuICByZXR1cm4ge1xuICAgICdAZ2xvYmFsJzoge1xuICAgICAgJ0BrZXlmcmFtZXMgbXVpLWF1dG8tZmlsbCc6IHt9LFxuICAgICAgJ0BrZXlmcmFtZXMgbXVpLWF1dG8tZmlsbC1jYW5jZWwnOiB7fVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IF9leHRlbmRzKHt9LCB0aGVtZS50eXBvZ3JhcGh5LmJvZHkxLCB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4xODc2ZW0nLFxuICAgICAgLy8gUmVzZXQgKDE5cHgpLCBtYXRjaCB0aGUgbmF0aXZlIGlucHV0IGxpbmUtaGVpZ2h0XG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIC8vIFByZXZlbnQgcGFkZGluZyBpc3N1ZSB3aXRoIGZ1bGxXaWR0aC5cbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgY3Vyc29yOiAndGV4dCcsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5kaXNhYmxlZCxcbiAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCdcbiAgICAgIH1cbiAgICB9KSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIGNvbXBvbmVudCBpcyBhIGRlc2NlbmRhbnQgb2YgYEZvcm1Db250cm9sYC4gKi9cbiAgICBmb3JtQ29udHJvbDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb21wb25lbnQgaXMgZm9jdXNlZC4gKi9cbiAgICBmb2N1c2VkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc3RhcnRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGFkb3JuZWRTdGFydDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlbmRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGFkb3JuZWRFbmQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZXJyb3I9e3RydWV9YC4gKi9cbiAgICBlcnJvcjoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgICBtYXJnaW5EZW5zZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtdWx0aWxpbmU9e3RydWV9YC4gKi9cbiAgICBtdWx0aWxpbmU6IHtcbiAgICAgIHBhZGRpbmc6IFwiXCIuY29uY2F0KDggLSAyLCBcInB4IDAgXCIpLmNvbmNhdCg4IC0gMSwgXCJweFwiKSxcbiAgICAgICcmJG1hcmdpbkRlbnNlJzoge1xuICAgICAgICBwYWRkaW5nVG9wOiA0IC0gMVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb2xvciBpcyBzZWNvbmRhcnkuICovXG4gICAgY29sb3JTZWNvbmRhcnk6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZnVsbFdpZHRoPXt0cnVlfWAuICovXG4gICAgZnVsbFdpZHRoOiB7XG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuICovXG4gICAgaW5wdXQ6IHtcbiAgICAgIGZvbnQ6ICdpbmhlcml0JyxcbiAgICAgIGxldHRlclNwYWNpbmc6ICdpbmhlcml0JyxcbiAgICAgIGNvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHBhZGRpbmc6IFwiXCIuY29uY2F0KDggLSAyLCBcInB4IDAgXCIpLmNvbmNhdCg4IC0gMSwgXCJweFwiKSxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgIGhlaWdodDogJzEuMTg3NmVtJyxcbiAgICAgIC8vIFJlc2V0ICgxOXB4KSwgbWF0Y2ggdGhlIG5hdGl2ZSBpbnB1dCBsaW5lLWhlaWdodFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgLy8gUmVzZXQgZm9yIFNhZmFyaVxuICAgICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgLy8gTWFrZSB0aGUgZmxleCBpdGVtIHNocmluayB3aXRoIEZpcmVmb3hcbiAgICAgIG1pbldpZHRoOiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIC8vIEZpeCBJRSAxMSB3aWR0aCBpc3N1ZVxuICAgICAgYW5pbWF0aW9uTmFtZTogJ211aS1hdXRvLWZpbGwtY2FuY2VsJyxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMTBtcycsXG4gICAgICAnJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVyLFxuICAgICAgJyY6Oi1tb3otcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlcixcbiAgICAgIC8vIEZpcmVmb3ggMTkrXG4gICAgICAnJjotbXMtaW5wdXQtcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlcixcbiAgICAgIC8vIElFIDExXG4gICAgICAnJjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXIsXG4gICAgICAvLyBFZGdlXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogMFxuICAgICAgfSxcbiAgICAgIC8vIFJlc2V0IEZpcmVmb3ggaW52YWxpZCByZXF1aXJlZCBpbnB1dCBzdHlsZVxuICAgICAgJyY6aW52YWxpZCc6IHtcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAnJjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbic6IHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBwYWRkaW5nIHdoZW4gdHlwZT1zZWFyY2guXG4gICAgICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAvLyBTaG93IGFuZCBoaWRlIHRoZSBwbGFjZWhvbGRlciBsb2dpY1xuICAgICAgJ2xhYmVsW2RhdGEtc2hyaW5rPWZhbHNlXSArICRmb3JtQ29udHJvbCAmJzoge1xuICAgICAgICAnJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVySGlkZGVuLFxuICAgICAgICAnJjo6LW1vei1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVySGlkZGVuLFxuICAgICAgICAvLyBGaXJlZm94IDE5K1xuICAgICAgICAnJjotbXMtaW5wdXQtcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlckhpZGRlbixcbiAgICAgICAgLy8gSUUgMTFcbiAgICAgICAgJyY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVySGlkZGVuLFxuICAgICAgICAvLyBFZGdlXG4gICAgICAgICcmOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXJWaXNpYmxlLFxuICAgICAgICAnJjpmb2N1czo6LW1vei1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVyVmlzaWJsZSxcbiAgICAgICAgLy8gRmlyZWZveCAxOStcbiAgICAgICAgJyY6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXJWaXNpYmxlLFxuICAgICAgICAvLyBJRSAxMVxuICAgICAgICAnJjpmb2N1czo6LW1zLWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXJWaXNpYmxlIC8vIEVkZ2VcblxuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBvcGFjaXR5OiAxIC8vIFJlc2V0IGlPUyBvcGFjaXR5XG5cbiAgICAgIH0sXG4gICAgICAnJjotd2Via2l0LWF1dG9maWxsJzoge1xuICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzUwMDBzJyxcbiAgICAgICAgYW5pbWF0aW9uTmFtZTogJ211aS1hdXRvLWZpbGwnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG1hcmdpbj1cImRlbnNlXCJgLiAqL1xuICAgIGlucHV0TWFyZ2luRGVuc2U6IHtcbiAgICAgIHBhZGRpbmdUb3A6IDQgLSAxXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG11bHRpbGluZT17dHJ1ZX1gLiAqL1xuICAgIGlucHV0TXVsdGlsaW5lOiB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHJlc2l6ZTogJ25vbmUnLFxuICAgICAgcGFkZGluZzogMFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGB0eXBlPVwic2VhcmNoXCJgLiAqL1xuICAgIGlucHV0VHlwZVNlYXJjaDoge1xuICAgICAgLy8gSW1wcm92ZSB0eXBlIHNlYXJjaCBzdHlsZS5cbiAgICAgICctbW96LWFwcGVhcmFuY2UnOiAndGV4dGZpZWxkJyxcbiAgICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAndGV4dGZpZWxkJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBzdGFydEFkb3JubWVudGAgaXMgcHJvdmlkZWQuICovXG4gICAgaW5wdXRBZG9ybmVkU3RhcnQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgZW5kQWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBpbnB1dEFkb3JuZWRFbmQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgaGlkZGVuTGFiZWw9e3RydWV9YC4gKi9cbiAgICBpbnB1dEhpZGRlbkxhYmVsOiB7fVxuICB9O1xufTtcbnZhciB1c2VFbmhhbmNlZEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gUmVhY3QudXNlRWZmZWN0IDogUmVhY3QudXNlTGF5b3V0RWZmZWN0O1xuLyoqXG4gKiBgSW5wdXRCYXNlYCBjb250YWlucyBhcyBmZXcgc3R5bGVzIGFzIHBvc3NpYmxlLlxuICogSXQgYWltcyB0byBiZSBhIHNpbXBsZSBidWlsZGluZyBibG9jayBmb3IgY3JlYXRpbmcgYW4gaW5wdXQuXG4gKiBJdCBjb250YWlucyBhIGxvYWQgb2Ygc3R5bGUgcmVzZXQgYW5kIHNvbWUgc3RhdGUgbG9naWMuXG4gKi9cblxudmFyIElucHV0QmFzZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIElucHV0QmFzZShwcm9wcywgcmVmKSB7XG4gIHZhciBhcmlhRGVzY3JpYmVkYnkgPSBwcm9wc1snYXJpYS1kZXNjcmliZWRieSddLFxuICAgICAgYXV0b0NvbXBsZXRlID0gcHJvcHMuYXV0b0NvbXBsZXRlLFxuICAgICAgYXV0b0ZvY3VzID0gcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGVuZEFkb3JubWVudCA9IHByb3BzLmVuZEFkb3JubWVudCxcbiAgICAgIGVycm9yID0gcHJvcHMuZXJyb3IsXG4gICAgICBfcHJvcHMkZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgZnVsbFdpZHRoID0gX3Byb3BzJGZ1bGxXaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFdpZHRoLFxuICAgICAgaWQgPSBwcm9wcy5pZCxcbiAgICAgIF9wcm9wcyRpbnB1dENvbXBvbmVudCA9IHByb3BzLmlucHV0Q29tcG9uZW50LFxuICAgICAgaW5wdXRDb21wb25lbnQgPSBfcHJvcHMkaW5wdXRDb21wb25lbnQgPT09IHZvaWQgMCA/ICdpbnB1dCcgOiBfcHJvcHMkaW5wdXRDb21wb25lbnQsXG4gICAgICBfcHJvcHMkaW5wdXRQcm9wcyA9IHByb3BzLmlucHV0UHJvcHMsXG4gICAgICBpbnB1dFByb3BzUHJvcCA9IF9wcm9wcyRpbnB1dFByb3BzID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRpbnB1dFByb3BzLFxuICAgICAgaW5wdXRSZWZQcm9wID0gcHJvcHMuaW5wdXRSZWYsXG4gICAgICBtYXJnaW4gPSBwcm9wcy5tYXJnaW4sXG4gICAgICBfcHJvcHMkbXVsdGlsaW5lID0gcHJvcHMubXVsdGlsaW5lLFxuICAgICAgbXVsdGlsaW5lID0gX3Byb3BzJG11bHRpbGluZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkbXVsdGlsaW5lLFxuICAgICAgbmFtZSA9IHByb3BzLm5hbWUsXG4gICAgICBvbkJsdXIgPSBwcm9wcy5vbkJsdXIsXG4gICAgICBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgb25DbGljayA9IHByb3BzLm9uQ2xpY2ssXG4gICAgICBvbkZvY3VzID0gcHJvcHMub25Gb2N1cyxcbiAgICAgIG9uS2V5RG93biA9IHByb3BzLm9uS2V5RG93bixcbiAgICAgIG9uS2V5VXAgPSBwcm9wcy5vbktleVVwLFxuICAgICAgcGxhY2Vob2xkZXIgPSBwcm9wcy5wbGFjZWhvbGRlcixcbiAgICAgIHJlYWRPbmx5ID0gcHJvcHMucmVhZE9ubHksXG4gICAgICByZW5kZXJTdWZmaXggPSBwcm9wcy5yZW5kZXJTdWZmaXgsXG4gICAgICByb3dzID0gcHJvcHMucm93cyxcbiAgICAgIHJvd3NNYXggPSBwcm9wcy5yb3dzTWF4LFxuICAgICAgcm93c01pbiA9IHByb3BzLnJvd3NNaW4sXG4gICAgICBtYXhSb3dzID0gcHJvcHMubWF4Um93cyxcbiAgICAgIG1pblJvd3MgPSBwcm9wcy5taW5Sb3dzLFxuICAgICAgc3RhcnRBZG9ybm1lbnQgPSBwcm9wcy5zdGFydEFkb3JubWVudCxcbiAgICAgIF9wcm9wcyR0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgIHR5cGUgPSBfcHJvcHMkdHlwZSA9PT0gdm9pZCAwID8gJ3RleHQnIDogX3Byb3BzJHR5cGUsXG4gICAgICB2YWx1ZVByb3AgPSBwcm9wcy52YWx1ZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhcmlhLWRlc2NyaWJlZGJ5XCIsIFwiYXV0b0NvbXBsZXRlXCIsIFwiYXV0b0ZvY3VzXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwiZGVmYXVsdFZhbHVlXCIsIFwiZGlzYWJsZWRcIiwgXCJlbmRBZG9ybm1lbnRcIiwgXCJlcnJvclwiLCBcImZ1bGxXaWR0aFwiLCBcImlkXCIsIFwiaW5wdXRDb21wb25lbnRcIiwgXCJpbnB1dFByb3BzXCIsIFwiaW5wdXRSZWZcIiwgXCJtYXJnaW5cIiwgXCJtdWx0aWxpbmVcIiwgXCJuYW1lXCIsIFwib25CbHVyXCIsIFwib25DaGFuZ2VcIiwgXCJvbkNsaWNrXCIsIFwib25Gb2N1c1wiLCBcIm9uS2V5RG93blwiLCBcIm9uS2V5VXBcIiwgXCJwbGFjZWhvbGRlclwiLCBcInJlYWRPbmx5XCIsIFwicmVuZGVyU3VmZml4XCIsIFwicm93c1wiLCBcInJvd3NNYXhcIiwgXCJyb3dzTWluXCIsIFwibWF4Um93c1wiLCBcIm1pblJvd3NcIiwgXCJzdGFydEFkb3JubWVudFwiLCBcInR5cGVcIiwgXCJ2YWx1ZVwiXSk7XG5cbiAgdmFyIHZhbHVlID0gaW5wdXRQcm9wc1Byb3AudmFsdWUgIT0gbnVsbCA/IGlucHV0UHJvcHNQcm9wLnZhbHVlIDogdmFsdWVQcm9wO1xuXG4gIHZhciBfUmVhY3QkdXNlUmVmID0gUmVhY3QudXNlUmVmKHZhbHVlICE9IG51bGwpLFxuICAgICAgaXNDb250cm9sbGVkID0gX1JlYWN0JHVzZVJlZi5jdXJyZW50O1xuXG4gIHZhciBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICB2YXIgaGFuZGxlSW5wdXRSZWZXYXJuaW5nID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5ub2RlTmFtZSAhPT0gJ0lOUFVUJyAmJiAhaW5zdGFuY2UuZm9jdXMpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBZb3UgaGF2ZSBwcm92aWRlZCBhIGBpbnB1dENvbXBvbmVudGAgdG8gdGhlIGlucHV0IGNvbXBvbmVudCcsICd0aGF0IGRvZXMgbm90IGNvcnJlY3RseSBoYW5kbGUgdGhlIGBpbnB1dFJlZmAgcHJvcC4nLCAnTWFrZSBzdXJlIHRoZSBgaW5wdXRSZWZgIHByb3AgaXMgY2FsbGVkIHdpdGggYSBIVE1MSW5wdXRFbGVtZW50LiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcbiAgdmFyIGhhbmRsZUlucHV0UHJvcHNSZWZQcm9wID0gdXNlRm9ya1JlZihpbnB1dFByb3BzUHJvcC5yZWYsIGhhbmRsZUlucHV0UmVmV2FybmluZyk7XG4gIHZhciBoYW5kbGVJbnB1dFJlZlByb3AgPSB1c2VGb3JrUmVmKGlucHV0UmVmUHJvcCwgaGFuZGxlSW5wdXRQcm9wc1JlZlByb3ApO1xuICB2YXIgaGFuZGxlSW5wdXRSZWYgPSB1c2VGb3JrUmVmKGlucHV0UmVmLCBoYW5kbGVJbnB1dFJlZlByb3ApO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksXG4gICAgICBmb2N1c2VkID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0Rm9jdXNlZCA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgbXVpRm9ybUNvbnRyb2wgPSB1c2VGb3JtQ29udHJvbCgpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtdWlGb3JtQ29udHJvbCkge1xuICAgICAgICByZXR1cm4gbXVpRm9ybUNvbnRyb2wucmVnaXN0ZXJFZmZlY3QoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LCBbbXVpRm9ybUNvbnRyb2xdKTtcbiAgfVxuXG4gIHZhciBmY3MgPSBmb3JtQ29udHJvbFN0YXRlKHtcbiAgICBwcm9wczogcHJvcHMsXG4gICAgbXVpRm9ybUNvbnRyb2w6IG11aUZvcm1Db250cm9sLFxuICAgIHN0YXRlczogWydjb2xvcicsICdkaXNhYmxlZCcsICdlcnJvcicsICdoaWRkZW5MYWJlbCcsICdtYXJnaW4nLCAncmVxdWlyZWQnLCAnZmlsbGVkJ11cbiAgfSk7XG4gIGZjcy5mb2N1c2VkID0gbXVpRm9ybUNvbnRyb2wgPyBtdWlGb3JtQ29udHJvbC5mb2N1c2VkIDogZm9jdXNlZDsgLy8gVGhlIGJsdXIgd29uJ3QgZmlyZSB3aGVuIHRoZSBkaXNhYmxlZCBzdGF0ZSBpcyBzZXQgb24gYSBmb2N1c2VkIGlucHV0LlxuICAvLyBXZSBuZWVkIHRvIGJvb2sga2VlcCB0aGUgZm9jdXNlZCBzdGF0ZSBtYW51YWxseS5cblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghbXVpRm9ybUNvbnRyb2wgJiYgZGlzYWJsZWQgJiYgZm9jdXNlZCkge1xuICAgICAgc2V0Rm9jdXNlZChmYWxzZSk7XG5cbiAgICAgIGlmIChvbkJsdXIpIHtcbiAgICAgICAgb25CbHVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbbXVpRm9ybUNvbnRyb2wsIGRpc2FibGVkLCBmb2N1c2VkLCBvbkJsdXJdKTtcbiAgdmFyIG9uRmlsbGVkID0gbXVpRm9ybUNvbnRyb2wgJiYgbXVpRm9ybUNvbnRyb2wub25GaWxsZWQ7XG4gIHZhciBvbkVtcHR5ID0gbXVpRm9ybUNvbnRyb2wgJiYgbXVpRm9ybUNvbnRyb2wub25FbXB0eTtcbiAgdmFyIGNoZWNrRGlydHkgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAob2JqKSB7XG4gICAgaWYgKGlzRmlsbGVkKG9iaikpIHtcbiAgICAgIGlmIChvbkZpbGxlZCkge1xuICAgICAgICBvbkZpbGxlZCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob25FbXB0eSkge1xuICAgICAgb25FbXB0eSgpO1xuICAgIH1cbiAgfSwgW29uRmlsbGVkLCBvbkVtcHR5XSk7XG4gIHVzZUVuaGFuY2VkRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNDb250cm9sbGVkKSB7XG4gICAgICBjaGVja0RpcnR5KHtcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFt2YWx1ZSwgY2hlY2tEaXJ0eSwgaXNDb250cm9sbGVkXSk7XG5cbiAgdmFyIGhhbmRsZUZvY3VzID0gZnVuY3Rpb24gaGFuZGxlRm9jdXMoZXZlbnQpIHtcbiAgICAvLyBGaXggYSBidWcgd2l0aCBJRSAxMSB3aGVyZSB0aGUgZm9jdXMvYmx1ciBldmVudHMgYXJlIHRyaWdnZXJlZFxuICAgIC8vIHdoaWxlIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbiAgICBpZiAoZmNzLmRpc2FibGVkKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob25Gb2N1cykge1xuICAgICAgb25Gb2N1cyhldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0UHJvcHNQcm9wLm9uRm9jdXMpIHtcbiAgICAgIGlucHV0UHJvcHNQcm9wLm9uRm9jdXMoZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChtdWlGb3JtQ29udHJvbCAmJiBtdWlGb3JtQ29udHJvbC5vbkZvY3VzKSB7XG4gICAgICBtdWlGb3JtQ29udHJvbC5vbkZvY3VzKGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Rm9jdXNlZCh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUJsdXIgPSBmdW5jdGlvbiBoYW5kbGVCbHVyKGV2ZW50KSB7XG4gICAgaWYgKG9uQmx1cikge1xuICAgICAgb25CbHVyKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaW5wdXRQcm9wc1Byb3Aub25CbHVyKSB7XG4gICAgICBpbnB1dFByb3BzUHJvcC5vbkJsdXIoZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChtdWlGb3JtQ29udHJvbCAmJiBtdWlGb3JtQ29udHJvbC5vbkJsdXIpIHtcbiAgICAgIG11aUZvcm1Db250cm9sLm9uQmx1cihldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZvY3VzZWQoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKCFpc0NvbnRyb2xsZWQpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZXZlbnQudGFyZ2V0IHx8IGlucHV0UmVmLmN1cnJlbnQ7XG5cbiAgICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiTWF0ZXJpYWwtVUk6IEV4cGVjdGVkIHZhbGlkIGlucHV0IHRhcmdldC4gRGlkIHlvdSB1c2UgYSBjdXN0b20gYGlucHV0Q29tcG9uZW50YCBhbmQgZm9yZ2V0IHRvIGZvcndhcmQgcmVmcz8gU2VlIGh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL3IvaW5wdXQtY29tcG9uZW50LXJlZi1pbnRlcmZhY2UgZm9yIG1vcmUgaW5mby5cIiA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoMSkpO1xuICAgICAgfVxuXG4gICAgICBjaGVja0RpcnR5KHtcbiAgICAgICAgdmFsdWU6IGVsZW1lbnQudmFsdWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChpbnB1dFByb3BzUHJvcC5vbkNoYW5nZSkge1xuICAgICAgaW5wdXRQcm9wc1Byb3Aub25DaGFuZ2UuYXBwbHkoaW5wdXRQcm9wc1Byb3AsIFtldmVudF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9IC8vIFBlcmZvcm0gaW4gdGhlIHdpbGxVcGRhdGVcblxuXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZS5hcHBseSh2b2lkIDAsIFtldmVudF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07IC8vIENoZWNrIHRoZSBpbnB1dCBzdGF0ZSBvbiBtb3VudCwgaW4gY2FzZSBpdCB3YXMgZmlsbGVkIGJ5IHRoZSB1c2VyXG4gIC8vIG9yIGF1dG8gZmlsbGVkIGJ5IHRoZSBicm93c2VyIGJlZm9yZSB0aGUgaHlkcmF0aW9uIChmb3IgU1NSKS5cblxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgY2hlY2tEaXJ0eShpbnB1dFJlZi5jdXJyZW50KTtcbiAgfSwgW10pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIHZhciBoYW5kbGVDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKGlucHV0UmVmLmN1cnJlbnQgJiYgZXZlbnQuY3VycmVudFRhcmdldCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgSW5wdXRDb21wb25lbnQgPSBpbnB1dENvbXBvbmVudDtcblxuICB2YXIgaW5wdXRQcm9wcyA9IF9leHRlbmRzKHt9LCBpbnB1dFByb3BzUHJvcCwge1xuICAgIHJlZjogaGFuZGxlSW5wdXRSZWZcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBJbnB1dENvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICBpbnB1dFByb3BzID0gX2V4dGVuZHMoe1xuICAgICAgLy8gUmVuYW1lIHJlZiB0byBpbnB1dFJlZiBhcyB3ZSBkb24ndCBrbm93IHRoZVxuICAgICAgLy8gcHJvdmlkZWQgYGlucHV0Q29tcG9uZW50YCBzdHJ1Y3R1cmUuXG4gICAgICBpbnB1dFJlZjogaGFuZGxlSW5wdXRSZWYsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSwgaW5wdXRQcm9wcywge1xuICAgICAgcmVmOiBudWxsXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAobXVsdGlsaW5lKSB7XG4gICAgaWYgKHJvd3MgJiYgIW1heFJvd3MgJiYgIW1pblJvd3MgJiYgIXJvd3NNYXggJiYgIXJvd3NNaW4pIHtcbiAgICAgIElucHV0Q29tcG9uZW50ID0gJ3RleHRhcmVhJztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRQcm9wcyA9IF9leHRlbmRzKHtcbiAgICAgICAgbWluUm93czogcm93cyB8fCBtaW5Sb3dzLFxuICAgICAgICByb3dzTWF4OiByb3dzTWF4LFxuICAgICAgICBtYXhSb3dzOiBtYXhSb3dzXG4gICAgICB9LCBpbnB1dFByb3BzKTtcbiAgICAgIElucHV0Q29tcG9uZW50ID0gVGV4dGFyZWFBdXRvc2l6ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaW5wdXRQcm9wcyA9IF9leHRlbmRzKHtcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9LCBpbnB1dFByb3BzKTtcbiAgfVxuXG4gIHZhciBoYW5kbGVBdXRvRmlsbCA9IGZ1bmN0aW9uIGhhbmRsZUF1dG9GaWxsKGV2ZW50KSB7XG4gICAgLy8gUHJvdmlkZSBhIGZha2UgdmFsdWUgYXMgQ2hyb21lIG1pZ2h0IG5vdCBsZXQgeW91IGFjY2VzcyBpdCBmb3Igc2VjdXJpdHkgcmVhc29ucy5cbiAgICBjaGVja0RpcnR5KGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09ICdtdWktYXV0by1maWxsLWNhbmNlbCcgPyBpbnB1dFJlZi5jdXJyZW50IDoge1xuICAgICAgdmFsdWU6ICd4J1xuICAgIH0pO1xuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG11aUZvcm1Db250cm9sKSB7XG4gICAgICBtdWlGb3JtQ29udHJvbC5zZXRBZG9ybmVkU3RhcnQoQm9vbGVhbihzdGFydEFkb3JubWVudCkpO1xuICAgIH1cbiAgfSwgW211aUZvcm1Db250cm9sLCBzdGFydEFkb3JubWVudF0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzZXNbXCJjb2xvclwiLmNvbmNhdChjYXBpdGFsaXplKGZjcy5jb2xvciB8fCAncHJpbWFyeScpKV0sIGNsYXNzTmFtZSwgZmNzLmRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQsIGZjcy5lcnJvciAmJiBjbGFzc2VzLmVycm9yLCBmdWxsV2lkdGggJiYgY2xhc3Nlcy5mdWxsV2lkdGgsIGZjcy5mb2N1c2VkICYmIGNsYXNzZXMuZm9jdXNlZCwgbXVpRm9ybUNvbnRyb2wgJiYgY2xhc3Nlcy5mb3JtQ29udHJvbCwgbXVsdGlsaW5lICYmIGNsYXNzZXMubXVsdGlsaW5lLCBzdGFydEFkb3JubWVudCAmJiBjbGFzc2VzLmFkb3JuZWRTdGFydCwgZW5kQWRvcm5tZW50ICYmIGNsYXNzZXMuYWRvcm5lZEVuZCwgZmNzLm1hcmdpbiA9PT0gJ2RlbnNlJyAmJiBjbGFzc2VzLm1hcmdpbkRlbnNlKSxcbiAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIHN0YXJ0QWRvcm5tZW50LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udHJvbENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogbnVsbFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIFwiYXJpYS1pbnZhbGlkXCI6IGZjcy5lcnJvcixcbiAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogYXJpYURlc2NyaWJlZGJ5LFxuICAgIGF1dG9Db21wbGV0ZTogYXV0b0NvbXBsZXRlLFxuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIGRpc2FibGVkOiBmY3MuZGlzYWJsZWQsXG4gICAgaWQ6IGlkLFxuICAgIG9uQW5pbWF0aW9uU3RhcnQ6IGhhbmRsZUF1dG9GaWxsLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgIHJlYWRPbmx5OiByZWFkT25seSxcbiAgICByZXF1aXJlZDogZmNzLnJlcXVpcmVkLFxuICAgIHJvd3M6IHJvd3MsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIG9uS2V5RG93bjogb25LZXlEb3duLFxuICAgIG9uS2V5VXA6IG9uS2V5VXBcbiAgfSwgaW5wdXRQcm9wcywge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmlucHV0LCBpbnB1dFByb3BzUHJvcC5jbGFzc05hbWUsIGZjcy5kaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkLCBtdWx0aWxpbmUgJiYgY2xhc3Nlcy5pbnB1dE11bHRpbGluZSwgZmNzLmhpZGRlbkxhYmVsICYmIGNsYXNzZXMuaW5wdXRIaWRkZW5MYWJlbCwgc3RhcnRBZG9ybm1lbnQgJiYgY2xhc3Nlcy5pbnB1dEFkb3JuZWRTdGFydCwgZW5kQWRvcm5tZW50ICYmIGNsYXNzZXMuaW5wdXRBZG9ybmVkRW5kLCB0eXBlID09PSAnc2VhcmNoJyAmJiBjbGFzc2VzLmlucHV0VHlwZVNlYXJjaCwgZmNzLm1hcmdpbiA9PT0gJ2RlbnNlJyAmJiBjbGFzc2VzLmlucHV0TWFyZ2luRGVuc2UpLFxuICAgIG9uQmx1cjogaGFuZGxlQmx1cixcbiAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgIG9uRm9jdXM6IGhhbmRsZUZvY3VzXG4gIH0pKSksIGVuZEFkb3JubWVudCwgcmVuZGVyU3VmZml4ID8gcmVuZGVyU3VmZml4KF9leHRlbmRzKHt9LCBmY3MsIHtcbiAgICBzdGFydEFkb3JubWVudDogc3RhcnRBZG9ybm1lbnRcbiAgfSkpIDogbnVsbCk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IElucHV0QmFzZS5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICAnYXJpYS1kZXNjcmliZWRieSc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoaXMgcHJvcCBoZWxwcyB1c2VycyB0byBmaWxsIGZvcm1zIGZhc3RlciwgZXNwZWNpYWxseSBvbiBtb2JpbGUgZGV2aWNlcy5cbiAgICogVGhlIG5hbWUgY2FuIGJlIGNvbmZ1c2luZywgYXMgaXQncyBtb3JlIGxpa2UgYW4gYXV0b2ZpbGwuXG4gICAqIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBpdCBbZm9sbG93aW5nIHRoZSBzcGVjaWZpY2F0aW9uXShodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3JtLWNvbnRyb2wtaW5mcmFzdHJ1Y3R1cmUuaHRtbCNhdXRvZmlsbCkuXG4gICAqL1xuICBhdXRvQ29tcGxldGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGBpbnB1dGAgZWxlbWVudCB3aWxsIGJlIGZvY3VzZWQgZHVyaW5nIHRoZSBmaXJzdCBtb3VudC5cbiAgICovXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGBpbnB1dGAgZWxlbWVudCB2YWx1ZS4gVXNlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBub3QgY29udHJvbGxlZC5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuZCBgSW5wdXRBZG9ybm1lbnRgIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGVuZEFkb3JubWVudDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgaW5kaWNhdGUgYW4gZXJyb3IuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBpbnB1dENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBbQXR0cmlidXRlc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0F0dHJpYnV0ZXMpIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFBhc3MgYSByZWYgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UmVmOiByZWZUeXBlLFxuXG4gIC8qKlxuICAgKiBJZiBgZGVuc2VgLCB3aWxsIGFkanVzdCB2ZXJ0aWNhbCBzcGFjaW5nLiBUaGlzIGlzIG5vcm1hbGx5IG9idGFpbmVkIHZpYSBjb250ZXh0IGZyb21cbiAgICogRm9ybUNvbnRyb2wuXG4gICAqL1xuICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZihbJ2RlbnNlJywgJ25vbmUnXSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICBtYXhSb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIE1pbmltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICBtaW5Sb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYSB0ZXh0YXJlYSBlbGVtZW50IHdpbGwgYmUgcmVuZGVyZWQuXG4gICAqL1xuICBtdWx0aWxpbmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOYW1lIGF0dHJpYnV0ZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgaW5wdXQgaXMgYmx1cnJlZC5cbiAgICpcbiAgICogTm90aWNlIHRoYXQgdGhlIGZpcnN0IGFyZ3VtZW50IChldmVudCkgbWlnaHQgYmUgdW5kZWZpbmVkLlxuICAgKi9cbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgdmFsdWUgaXMgY2hhbmdlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgIChzdHJpbmcpLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uS2V5VXA6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgc2hvcnQgaGludCBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0IGJlZm9yZSB0aGUgdXNlciBlbnRlcnMgYSB2YWx1ZS5cbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJdCBwcmV2ZW50cyB0aGUgdXNlciBmcm9tIGNoYW5naW5nIHRoZSB2YWx1ZSBvZiB0aGUgZmllbGRcbiAgICogKG5vdCBmcm9tIGludGVyYWN0aW5nIHdpdGggdGhlIGZpZWxkKS5cbiAgICovXG4gIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVuZGVyU3VmZml4OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgcmVxdWlyZWQuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlbiBtdWx0aWxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93czogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkuXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgbWF4Um93c2AgaW5zdGVhZC5cbiAgICovXG4gIHJvd3NNYXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogTWluaW11bSBudW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5LlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYG1pblJvd3NgIGluc3RlYWQuXG4gICAqL1xuICByb3dzTWluOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGBJbnB1dEFkb3JubWVudGAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgc3RhcnRBZG9ybm1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUeXBlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuIEl0IHNob3VsZCBiZSBbYSB2YWxpZCBIVE1MNSBpbnB1dCB0eXBlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjRm9ybV8lM0NpbnB1dCUzRV90eXBlcykuXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudCwgcmVxdWlyZWQgZm9yIGEgY29udHJvbGxlZCBjb21wb25lbnQuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlJbnB1dEJhc2UnXG59KShJbnB1dEJhc2UpOyIsIi8vIFN1cHBvcnRzIGRldGVybWluYXRpb24gb2YgaXNDb250cm9sbGVkKCkuXG4vLyBDb250cm9sbGVkIGlucHV0IGFjY2VwdHMgaXRzIGN1cnJlbnQgdmFsdWUgYXMgYSBwcm9wLlxuLy9cbi8vIEBzZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9mb3Jtcy5odG1sI2NvbnRyb2xsZWQtY29tcG9uZW50c1xuLy8gQHBhcmFtIHZhbHVlXG4vLyBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiBzdHJpbmcgKGluY2x1ZGluZyAnJykgb3IgbnVtYmVyIChpbmNsdWRpbmcgemVybylcbmV4cG9ydCBmdW5jdGlvbiBoYXNWYWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAhKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCk7XG59IC8vIERldGVybWluZSBpZiBmaWVsZCBpcyBlbXB0eSBvciBmaWxsZWQuXG4vLyBSZXNwb25zZSBkZXRlcm1pbmVzIGlmIGxhYmVsIGlzIHByZXNlbnRlZCBhYm92ZSBmaWVsZCBvciBhcyBwbGFjZWhvbGRlci5cbi8vXG4vLyBAcGFyYW0gb2JqXG4vLyBAcGFyYW0gU1NSXG4vLyBAcmV0dXJucyB7Ym9vbGVhbn0gRmFsc2Ugd2hlbiBub3QgcHJlc2VudCBvciBlbXB0eSBzdHJpbmcuXG4vLyAgICAgICAgICAgICAgICAgICAgVHJ1ZSB3aGVuIGFueSBudW1iZXIgb3Igc3RyaW5nIHdpdGggbGVuZ3RoLlxuXG5leHBvcnQgZnVuY3Rpb24gaXNGaWxsZWQob2JqKSB7XG4gIHZhciBTU1IgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICByZXR1cm4gb2JqICYmIChoYXNWYWx1ZShvYmoudmFsdWUpICYmIG9iai52YWx1ZSAhPT0gJycgfHwgU1NSICYmIGhhc1ZhbHVlKG9iai5kZWZhdWx0VmFsdWUpICYmIG9iai5kZWZhdWx0VmFsdWUgIT09ICcnKTtcbn0gLy8gRGV0ZXJtaW5lIGlmIGFuIElucHV0IGlzIGFkb3JuZWQgb24gc3RhcnQuXG4vLyBJdCdzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGxlZnQgd2l0aCBMVFIuXG4vL1xuLy8gQHBhcmFtIG9ialxuLy8gQHJldHVybnMge2Jvb2xlYW59IEZhbHNlIHdoZW4gbm8gYWRvcm5tZW50cy5cbi8vICAgICAgICAgICAgICAgICAgICBUcnVlIHdoZW4gYWRvcm5lZCBhdCB0aGUgc3RhcnQuXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fkb3JuZWRTdGFydChvYmopIHtcbiAgcmV0dXJuIG9iai5zdGFydEFkb3JubWVudDtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgZm9ybUNvbnRyb2xTdGF0ZSBmcm9tICcuLi9Gb3JtQ29udHJvbC9mb3JtQ29udHJvbFN0YXRlJztcbmltcG9ydCB1c2VGb3JtQ29udHJvbCBmcm9tICcuLi9Gb3JtQ29udHJvbC91c2VGb3JtQ29udHJvbCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgRm9ybUxhYmVsIGZyb20gJy4uL0Zvcm1MYWJlbCc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCBsZWZ0J1xuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmb2N1c2VkPXt0cnVlfWAuICovXG4gICAgZm9jdXNlZDoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlZD17dHJ1ZX1gLiAqL1xuICAgIGRpc2FibGVkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGVycm9yPXt0cnVlfWAuICovXG4gICAgZXJyb3I6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgcmVxdWlyZWQ9e3RydWV9YC4gKi9cbiAgICByZXF1aXJlZDoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgYXN0ZXJpc2sgZWxlbWVudC4gKi9cbiAgICBhc3Rlcmlzazoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb21wb25lbnQgaXMgYSBkZXNjZW5kYW50IG9mIGBGb3JtQ29udHJvbGAuICovXG4gICAgZm9ybUNvbnRyb2w6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIC8vIHNsaWdodCBhbHRlcmF0aW9uIHRvIHNwZWMgc3BhY2luZyB0byBtYXRjaCB2aXN1YWwgc3BlYyByZXN1bHRcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLCAyNHB4KSBzY2FsZSgxKSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgbWFyZ2luPVwiZGVuc2VcImAuICovXG4gICAgbWFyZ2luRGVuc2U6IHtcbiAgICAgIC8vIENvbXBlbnNhdGlvbiBmb3IgdGhlIGBJbnB1dC5pbnB1dERlbnNlYCBzdHlsZS5cbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLCAyMXB4KSBzY2FsZSgxKSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgc2hyaW5rPXt0cnVlfWAuICovXG4gICAgc2hyaW5rOiB7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwgMS41cHgpIHNjYWxlKDAuNzUpJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCBsZWZ0J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBkaXNhYmxlQW5pbWF0aW9uPXtmYWxzZX1gLiAqL1xuICAgIGFuaW1hdGVkOiB7XG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWydjb2xvcicsICd0cmFuc2Zvcm0nXSwge1xuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRlcixcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dFxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImZpbGxlZFwiYC4gKi9cbiAgICBmaWxsZWQ6IHtcbiAgICAgIC8vIENocm9tZSdzIGF1dG9maWxsIGZlYXR1cmUgZ2l2ZXMgdGhlIGlucHV0IGZpZWxkIGEgeWVsbG93IGJhY2tncm91bmQuXG4gICAgICAvLyBTaW5jZSB0aGUgaW5wdXQgZmllbGQgaXMgYmVoaW5kIHRoZSBsYWJlbCBpbiB0aGUgSFRNTCB0cmVlLFxuICAgICAgLy8gdGhlIGlucHV0IGZpZWxkIGlzIGRyYXduIGxhc3QgYW5kIGhpZGVzIHRoZSBsYWJlbCB3aXRoIGFuIG9wYXF1ZSBiYWNrZ3JvdW5kIGNvbG9yLlxuICAgICAgLy8gekluZGV4OiAxIHdpbGwgcmFpc2UgdGhlIGxhYmVsIGFib3ZlIG9wYXF1ZSBiYWNrZ3JvdW5kLWNvbG9ycyBvZiBpbnB1dC5cbiAgICAgIHpJbmRleDogMSxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgxMnB4LCAyMHB4KSBzY2FsZSgxKScsXG4gICAgICAnJiRtYXJnaW5EZW5zZSc6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDEycHgsIDE3cHgpIHNjYWxlKDEpJ1xuICAgICAgfSxcbiAgICAgICcmJHNocmluayc6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDEycHgsIDEwcHgpIHNjYWxlKDAuNzUpJyxcbiAgICAgICAgJyYkbWFyZ2luRGVuc2UnOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDEycHgsIDdweCkgc2NhbGUoMC43NSknXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cIm91dGxpbmVkXCJgLiAqL1xuICAgIG91dGxpbmVkOiB7XG4gICAgICAvLyBzZWUgY29tbWVudCBhYm92ZSBvbiBmaWxsZWQuekluZGV4XG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMTRweCwgMjBweCkgc2NhbGUoMSknLFxuICAgICAgJyYkbWFyZ2luRGVuc2UnOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgxNHB4LCAxMnB4KSBzY2FsZSgxKSdcbiAgICAgIH0sXG4gICAgICAnJiRzaHJpbmsnOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgxNHB4LCAtNnB4KSBzY2FsZSgwLjc1KSdcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xudmFyIElucHV0TGFiZWwgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBJbnB1dExhYmVsKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGRpc2FibGVBbmltYXRpID0gcHJvcHMuZGlzYWJsZUFuaW1hdGlvbixcbiAgICAgIGRpc2FibGVBbmltYXRpb24gPSBfcHJvcHMkZGlzYWJsZUFuaW1hdGkgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVBbmltYXRpLFxuICAgICAgbWFyZ2luID0gcHJvcHMubWFyZ2luLFxuICAgICAgc2hyaW5rUHJvcCA9IHByb3BzLnNocmluayxcbiAgICAgIHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJkaXNhYmxlQW5pbWF0aW9uXCIsIFwibWFyZ2luXCIsIFwic2hyaW5rXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIG11aUZvcm1Db250cm9sID0gdXNlRm9ybUNvbnRyb2woKTtcbiAgdmFyIHNocmluayA9IHNocmlua1Byb3A7XG5cbiAgaWYgKHR5cGVvZiBzaHJpbmsgPT09ICd1bmRlZmluZWQnICYmIG11aUZvcm1Db250cm9sKSB7XG4gICAgc2hyaW5rID0gbXVpRm9ybUNvbnRyb2wuZmlsbGVkIHx8IG11aUZvcm1Db250cm9sLmZvY3VzZWQgfHwgbXVpRm9ybUNvbnRyb2wuYWRvcm5lZFN0YXJ0O1xuICB9XG5cbiAgdmFyIGZjcyA9IGZvcm1Db250cm9sU3RhdGUoe1xuICAgIHByb3BzOiBwcm9wcyxcbiAgICBtdWlGb3JtQ29udHJvbDogbXVpRm9ybUNvbnRyb2wsXG4gICAgc3RhdGVzOiBbJ21hcmdpbicsICd2YXJpYW50J11cbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtTGFiZWwsIF9leHRlbmRzKHtcbiAgICBcImRhdGEtc2hyaW5rXCI6IHNocmluayxcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIG11aUZvcm1Db250cm9sICYmIGNsYXNzZXMuZm9ybUNvbnRyb2wsICFkaXNhYmxlQW5pbWF0aW9uICYmIGNsYXNzZXMuYW5pbWF0ZWQsIHNocmluayAmJiBjbGFzc2VzLnNocmluaywgZmNzLm1hcmdpbiA9PT0gJ2RlbnNlJyAmJiBjbGFzc2VzLm1hcmdpbkRlbnNlLCB7XG4gICAgICAnZmlsbGVkJzogY2xhc3Nlcy5maWxsZWQsXG4gICAgICAnb3V0bGluZWQnOiBjbGFzc2VzLm91dGxpbmVkXG4gICAgfVtmY3MudmFyaWFudF0pLFxuICAgIGNsYXNzZXM6IHtcbiAgICAgIGZvY3VzZWQ6IGNsYXNzZXMuZm9jdXNlZCxcbiAgICAgIGRpc2FibGVkOiBjbGFzc2VzLmRpc2FibGVkLFxuICAgICAgZXJyb3I6IGNsYXNzZXMuZXJyb3IsXG4gICAgICByZXF1aXJlZDogY2xhc3Nlcy5yZXF1aXJlZCxcbiAgICAgIGFzdGVyaXNrOiBjbGFzc2VzLmFzdGVyaXNrXG4gICAgfSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBJbnB1dExhYmVsLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50cyBvZiB0aGUgYElucHV0TGFiZWxgLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5J10pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0cmFuc2l0aW9uIGFuaW1hdGlvbiBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVBbmltYXRpb246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGFwcGx5IGRpc2FibGVkIGNsYXNzLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCB3aWxsIGJlIGRpc3BsYXllZCBpbiBhbiBlcnJvciBzdGF0ZS5cbiAgICovXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgb2YgdGhpcyBsYWJlbCBpcyBmb2N1c2VkLlxuICAgKi9cbiAgZm9jdXNlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGBkZW5zZWAsIHdpbGwgYWRqdXN0IHZlcnRpY2FsIHNwYWNpbmcuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mKFsnZGVuc2UnXSksXG5cbiAgLyoqXG4gICAqIGlmIGB0cnVlYCwgdGhlIGxhYmVsIHdpbGwgaW5kaWNhdGUgdGhhdCB0aGUgaW5wdXQgaXMgcmVxdWlyZWQuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIGlzIHNocnVuay5cbiAgICovXG4gIHNocmluazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2ZpbGxlZCcsICdvdXRsaW5lZCcsICdzdGFuZGFyZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlJbnB1dExhYmVsJ1xufSkoSW5wdXRMYWJlbCk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgcmVmVHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgSW5wdXRCYXNlIGZyb20gJy4uL0lucHV0QmFzZSc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICB2YXIgbGlnaHQgPSB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCc7XG4gIHZhciBib3R0b21MaW5lQ29sb3IgPSBsaWdodCA/ICdyZ2JhKDAsIDAsIDAsIDAuNDIpJyA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknO1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgY29tcG9uZW50IGlzIGEgZGVzY2VuZGFudCBvZiBgRm9ybUNvbnRyb2xgLiAqL1xuICAgIGZvcm1Db250cm9sOiB7XG4gICAgICAnbGFiZWwgKyAmJzoge1xuICAgICAgICBtYXJnaW5Ub3A6IDE2XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIGNvbXBvbmVudCBpcyBmb2N1c2VkLiAqL1xuICAgIGZvY3VzZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZWQ9e3RydWV9YC4gKi9cbiAgICBkaXNhYmxlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGNvbG9yIHNlY29uZGFyeS4gKi9cbiAgICBjb2xvclNlY29uZGFyeToge1xuICAgICAgJyYkdW5kZXJsaW5lOmFmdGVyJzoge1xuICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlVW5kZXJsaW5lPXtmYWxzZX1gLiAqL1xuICAgIHVuZGVybGluZToge1xuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbTogXCIycHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluKSxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAvLyBEb2luZyB0aGUgb3RoZXIgd2F5IGFyb3VuZCBjcmFzaCBvbiBJRSAxMSBcIicnXCIgaHR0cHM6Ly9naXRodWIuY29tL2Nzc2luanMvanNzL2lzc3Vlcy8yNDJcbiAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgwKScsXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgndHJhbnNmb3JtJywge1xuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyLFxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXRcbiAgICAgICAgfSksXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyAvLyBUcmFuc3BhcmVudCB0byB0aGUgaG92ZXIgc3R5bGUuXG5cbiAgICAgIH0sXG4gICAgICAnJiRmb2N1c2VkOmFmdGVyJzoge1xuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMSknXG4gICAgICB9LFxuICAgICAgJyYkZXJyb3I6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgxKScgLy8gZXJyb3IgaXMgYWx3YXlzIHVuZGVybGluZWQgaW4gcmVkXG5cbiAgICAgIH0sXG4gICAgICAnJjpiZWZvcmUnOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgXCIuY29uY2F0KGJvdHRvbUxpbmVDb2xvciksXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgLy8gRG9pbmcgdGhlIG90aGVyIHdheSBhcm91bmQgY3Jhc2ggb24gSUUgMTEgXCInJ1wiIGh0dHBzOi8vZ2l0aHViLmNvbS9jc3NpbmpzL2pzcy9pc3N1ZXMvMjQyXG4gICAgICAgIGNvbnRlbnQ6ICdcIlxcXFwwMGEwXCInLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnYm9yZGVyLWJvdHRvbS1jb2xvcicsIHtcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRlclxuICAgICAgICB9KSxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnIC8vIFRyYW5zcGFyZW50IHRvIHRoZSBob3ZlciBzdHlsZS5cblxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyOm5vdCgkZGlzYWJsZWQpOmJlZm9yZSc6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjJweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnkpLFxuICAgICAgICAvLyBSZXNldCBvbiB0b3VjaCBkZXZpY2VzLCBpdCBkb2Vzbid0IGFkZCBzcGVjaWZpY2l0eVxuICAgICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XG4gICAgICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCBcIi5jb25jYXQoYm90dG9tTGluZUNvbG9yKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQ6YmVmb3JlJzoge1xuICAgICAgICBib3JkZXJCb3R0b21TdHlsZTogJ2RvdHRlZCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZXJyb3I9e3RydWV9YC4gKi9cbiAgICBlcnJvcjoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgICBtYXJnaW5EZW5zZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtdWx0aWxpbmU9e3RydWV9YC4gKi9cbiAgICBtdWx0aWxpbmU6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZnVsbFdpZHRoPXt0cnVlfWAuICovXG4gICAgZnVsbFdpZHRoOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuICovXG4gICAgaW5wdXQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbWFyZ2luPVwiZGVuc2VcImAuICovXG4gICAgaW5wdXRNYXJnaW5EZW5zZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBtdWx0aWxpbmU9e3RydWV9YC4gKi9cbiAgICBpbnB1dE11bHRpbGluZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGB0eXBlPVwic2VhcmNoXCJgLiAqL1xuICAgIGlucHV0VHlwZVNlYXJjaDoge31cbiAgfTtcbn07XG52YXIgSW5wdXQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBJbnB1dChwcm9wcywgcmVmKSB7XG4gIHZhciBkaXNhYmxlVW5kZXJsaW5lID0gcHJvcHMuZGlzYWJsZVVuZGVybGluZSxcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgX3Byb3BzJGZ1bGxXaWR0aCA9IHByb3BzLmZ1bGxXaWR0aCxcbiAgICAgIGZ1bGxXaWR0aCA9IF9wcm9wcyRmdWxsV2lkdGggPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGZ1bGxXaWR0aCxcbiAgICAgIF9wcm9wcyRpbnB1dENvbXBvbmVudCA9IHByb3BzLmlucHV0Q29tcG9uZW50LFxuICAgICAgaW5wdXRDb21wb25lbnQgPSBfcHJvcHMkaW5wdXRDb21wb25lbnQgPT09IHZvaWQgMCA/ICdpbnB1dCcgOiBfcHJvcHMkaW5wdXRDb21wb25lbnQsXG4gICAgICBfcHJvcHMkbXVsdGlsaW5lID0gcHJvcHMubXVsdGlsaW5lLFxuICAgICAgbXVsdGlsaW5lID0gX3Byb3BzJG11bHRpbGluZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkbXVsdGlsaW5lLFxuICAgICAgX3Byb3BzJHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgdHlwZSA9IF9wcm9wcyR0eXBlID09PSB2b2lkIDAgPyAndGV4dCcgOiBfcHJvcHMkdHlwZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJkaXNhYmxlVW5kZXJsaW5lXCIsIFwiY2xhc3Nlc1wiLCBcImZ1bGxXaWR0aFwiLCBcImlucHV0Q29tcG9uZW50XCIsIFwibXVsdGlsaW5lXCIsIFwidHlwZVwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElucHV0QmFzZSwgX2V4dGVuZHMoe1xuICAgIGNsYXNzZXM6IF9leHRlbmRzKHt9LCBjbGFzc2VzLCB7XG4gICAgICByb290OiBjbHN4KGNsYXNzZXMucm9vdCwgIWRpc2FibGVVbmRlcmxpbmUgJiYgY2xhc3Nlcy51bmRlcmxpbmUpLFxuICAgICAgdW5kZXJsaW5lOiBudWxsXG4gICAgfSksXG4gICAgZnVsbFdpZHRoOiBmdWxsV2lkdGgsXG4gICAgaW5wdXRDb21wb25lbnQ6IGlucHV0Q29tcG9uZW50LFxuICAgIG11bHRpbGluZTogbXVsdGlsaW5lLFxuICAgIHJlZjogcmVmLFxuICAgIHR5cGU6IHR5cGVcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gSW5wdXQucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhpcyBwcm9wIGhlbHBzIHVzZXJzIHRvIGZpbGwgZm9ybXMgZmFzdGVyLCBlc3BlY2lhbGx5IG9uIG1vYmlsZSBkZXZpY2VzLlxuICAgKiBUaGUgbmFtZSBjYW4gYmUgY29uZnVzaW5nLCBhcyBpdCdzIG1vcmUgbGlrZSBhbiBhdXRvZmlsbC5cbiAgICogWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IGl0IFtmb2xsb3dpbmcgdGhlIHNwZWNpZmljYXRpb25dKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm0tY29udHJvbC1pbmZyYXN0cnVjdHVyZS5odG1sI2F1dG9maWxsKS5cbiAgICovXG4gIGF1dG9Db21wbGV0ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgZm9jdXNlZCBkdXJpbmcgdGhlIGZpcnN0IG1vdW50LlxuICAgKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGBpbnB1dGAgZWxlbWVudCB2YWx1ZS4gVXNlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBub3QgY29udHJvbGxlZC5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgbm90IGhhdmUgYW4gdW5kZXJsaW5lLlxuICAgKi9cbiAgZGlzYWJsZVVuZGVybGluZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuZCBgSW5wdXRBZG9ybm1lbnRgIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGVuZEFkb3JubWVudDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgaW5kaWNhdGUgYW4gZXJyb3IuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBpbnB1dENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBbQXR0cmlidXRlc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0F0dHJpYnV0ZXMpIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFBhc3MgYSByZWYgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UmVmOiByZWZUeXBlLFxuXG4gIC8qKlxuICAgKiBJZiBgZGVuc2VgLCB3aWxsIGFkanVzdCB2ZXJ0aWNhbCBzcGFjaW5nLiBUaGlzIGlzIG5vcm1hbGx5IG9idGFpbmVkIHZpYSBjb250ZXh0IGZyb21cbiAgICogRm9ybUNvbnRyb2wuXG4gICAqL1xuICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZihbJ2RlbnNlJywgJ25vbmUnXSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICBtYXhSb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYSB0ZXh0YXJlYSBlbGVtZW50IHdpbGwgYmUgcmVuZGVyZWQuXG4gICAqL1xuICBtdWx0aWxpbmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOYW1lIGF0dHJpYnV0ZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgdmFsdWUgaXMgY2hhbmdlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgIChzdHJpbmcpLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgc2hvcnQgaGludCBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0IGJlZm9yZSB0aGUgdXNlciBlbnRlcnMgYSB2YWx1ZS5cbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJdCBwcmV2ZW50cyB0aGUgdXNlciBmcm9tIGNoYW5naW5nIHRoZSB2YWx1ZSBvZiB0aGUgZmllbGRcbiAgICogKG5vdCBmcm9tIGludGVyYWN0aW5nIHdpdGggdGhlIGZpZWxkKS5cbiAgICovXG4gIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgcmVxdWlyZWQuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlbiBtdWx0aWxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93czogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBTdGFydCBgSW5wdXRBZG9ybm1lbnRgIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIHN0YXJ0QWRvcm5tZW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVHlwZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LiBJdCBzaG91bGQgYmUgW2EgdmFsaWQgSFRNTDUgaW5wdXQgdHlwZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0Zvcm1fJTNDaW5wdXQlM0VfdHlwZXMpLlxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQsIHJlcXVpcmVkIGZvciBhIGNvbnRyb2xsZWQgY29tcG9uZW50LlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnlcbn0gOiB2b2lkIDA7XG5JbnB1dC5tdWlOYW1lID0gJ0lucHV0JztcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlJbnB1dCdcbn0pKElucHV0KTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgTGlzdENvbnRleHQgZnJvbSAnLi9MaXN0Q29udGV4dCc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge1xuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgIG1hcmdpbjogMCxcbiAgICBwYWRkaW5nOiAwLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZVBhZGRpbmc9e2ZhbHNlfWAuICovXG4gIHBhZGRpbmc6IHtcbiAgICBwYWRkaW5nVG9wOiA4LFxuICAgIHBhZGRpbmdCb3R0b206IDhcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGRlbnNlLiAqL1xuICBkZW5zZToge30sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBhIGBzdWJoZWFkZXJgIGlzIHByb3ZpZGVkLiAqL1xuICBzdWJoZWFkZXI6IHtcbiAgICBwYWRkaW5nVG9wOiAwXG4gIH1cbn07XG52YXIgTGlzdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIExpc3QocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICd1bCcgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgX3Byb3BzJGRlbnNlID0gcHJvcHMuZGVuc2UsXG4gICAgICBkZW5zZSA9IF9wcm9wcyRkZW5zZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGVuc2UsXG4gICAgICBfcHJvcHMkZGlzYWJsZVBhZGRpbmcgPSBwcm9wcy5kaXNhYmxlUGFkZGluZyxcbiAgICAgIGRpc2FibGVQYWRkaW5nID0gX3Byb3BzJGRpc2FibGVQYWRkaW5nID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlUGFkZGluZyxcbiAgICAgIHN1YmhlYWRlciA9IHByb3BzLnN1YmhlYWRlcixcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb21wb25lbnRcIiwgXCJkZW5zZVwiLCBcImRpc2FibGVQYWRkaW5nXCIsIFwic3ViaGVhZGVyXCJdKTtcblxuICB2YXIgY29udGV4dCA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZW5zZTogZGVuc2VcbiAgICB9O1xuICB9LCBbZGVuc2VdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExpc3RDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNvbnRleHRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCBkZW5zZSAmJiBjbGFzc2VzLmRlbnNlLCAhZGlzYWJsZVBhZGRpbmcgJiYgY2xhc3Nlcy5wYWRkaW5nLCBzdWJoZWFkZXIgJiYgY2xhc3Nlcy5zdWJoZWFkZXIpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSwgc3ViaGVhZGVyLCBjaGlsZHJlbikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBMaXN0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGNvbXBhY3QgdmVydGljYWwgcGFkZGluZyBkZXNpZ25lZCBmb3Iga2V5Ym9hcmQgYW5kIG1vdXNlIGlucHV0IHdpbGwgYmUgdXNlZCBmb3JcbiAgICogdGhlIGxpc3QgYW5kIGxpc3QgaXRlbXMuXG4gICAqIFRoZSBwcm9wIGlzIGF2YWlsYWJsZSB0byBkZXNjZW5kYW50IGNvbXBvbmVudHMgYXMgdGhlIGBkZW5zZWAgY29udGV4dC5cbiAgICovXG4gIGRlbnNlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB2ZXJ0aWNhbCBwYWRkaW5nIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBsaXN0LlxuICAgKi9cbiAgZGlzYWJsZVBhZGRpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgc3ViaGVhZGVyLCBub3JtYWxseSBgTGlzdFN1YmhlYWRlcmAuXG4gICAqL1xuICBzdWJoZWFkZXI6IFByb3BUeXBlcy5ub2RlXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUxpc3QnXG59KShMaXN0KTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxudmFyIExpc3RDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIExpc3RDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0xpc3RDb250ZXh0Jztcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdENvbnRleHQ7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNGcmFnbWVudCB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnLi4vdXRpbHMvb3duZXJEb2N1bWVudCc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9MaXN0JztcbmltcG9ydCBnZXRTY3JvbGxiYXJTaXplIGZyb20gJy4uL3V0aWxzL2dldFNjcm9sbGJhclNpemUnO1xuaW1wb3J0IHVzZUZvcmtSZWYgZnJvbSAnLi4vdXRpbHMvdXNlRm9ya1JlZic7XG5cbmZ1bmN0aW9uIG5leHRJdGVtKGxpc3QsIGl0ZW0sIGRpc2FibGVMaXN0V3JhcCkge1xuICBpZiAobGlzdCA9PT0gaXRlbSkge1xuICAgIHJldHVybiBsaXN0LmZpcnN0Q2hpbGQ7XG4gIH1cblxuICBpZiAoaXRlbSAmJiBpdGVtLm5leHRFbGVtZW50U2libGluZykge1xuICAgIHJldHVybiBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgfVxuXG4gIHJldHVybiBkaXNhYmxlTGlzdFdyYXAgPyBudWxsIDogbGlzdC5maXJzdENoaWxkO1xufVxuXG5mdW5jdGlvbiBwcmV2aW91c0l0ZW0obGlzdCwgaXRlbSwgZGlzYWJsZUxpc3RXcmFwKSB7XG4gIGlmIChsaXN0ID09PSBpdGVtKSB7XG4gICAgcmV0dXJuIGRpc2FibGVMaXN0V3JhcCA/IGxpc3QuZmlyc3RDaGlsZCA6IGxpc3QubGFzdENoaWxkO1xuICB9XG5cbiAgaWYgKGl0ZW0gJiYgaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgcmV0dXJuIGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgfVxuXG4gIHJldHVybiBkaXNhYmxlTGlzdFdyYXAgPyBudWxsIDogbGlzdC5sYXN0Q2hpbGQ7XG59XG5cbmZ1bmN0aW9uIHRleHRDcml0ZXJpYU1hdGNoZXMobmV4dEZvY3VzLCB0ZXh0Q3JpdGVyaWEpIHtcbiAgaWYgKHRleHRDcml0ZXJpYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgdGV4dCA9IG5leHRGb2N1cy5pbm5lclRleHQ7XG5cbiAgaWYgKHRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIGpzZG9tIGRvZXNuJ3Qgc3VwcG9ydCBpbm5lclRleHRcbiAgICB0ZXh0ID0gbmV4dEZvY3VzLnRleHRDb250ZW50O1xuICB9XG5cbiAgdGV4dCA9IHRleHQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKHRleHQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRleHRDcml0ZXJpYS5yZXBlYXRpbmcpIHtcbiAgICByZXR1cm4gdGV4dFswXSA9PT0gdGV4dENyaXRlcmlhLmtleXNbMF07XG4gIH1cblxuICByZXR1cm4gdGV4dC5pbmRleE9mKHRleHRDcml0ZXJpYS5rZXlzLmpvaW4oJycpKSA9PT0gMDtcbn1cblxuZnVuY3Rpb24gbW92ZUZvY3VzKGxpc3QsIGN1cnJlbnRGb2N1cywgZGlzYWJsZUxpc3RXcmFwLCBkaXNhYmxlZEl0ZW1zRm9jdXNhYmxlLCB0cmF2ZXJzYWxGdW5jdGlvbiwgdGV4dENyaXRlcmlhKSB7XG4gIHZhciB3cmFwcGVkT25jZSA9IGZhbHNlO1xuICB2YXIgbmV4dEZvY3VzID0gdHJhdmVyc2FsRnVuY3Rpb24obGlzdCwgY3VycmVudEZvY3VzLCBjdXJyZW50Rm9jdXMgPyBkaXNhYmxlTGlzdFdyYXAgOiBmYWxzZSk7XG5cbiAgd2hpbGUgKG5leHRGb2N1cykge1xuICAgIC8vIFByZXZlbnQgaW5maW5pdGUgbG9vcC5cbiAgICBpZiAobmV4dEZvY3VzID09PSBsaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGlmICh3cmFwcGVkT25jZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdyYXBwZWRPbmNlID0gdHJ1ZTtcbiAgICB9IC8vIFNhbWUgbG9naWMgYXMgdXNlQXV0b2NvbXBsZXRlLmpzXG5cblxuICAgIHZhciBuZXh0Rm9jdXNEaXNhYmxlZCA9IGRpc2FibGVkSXRlbXNGb2N1c2FibGUgPyBmYWxzZSA6IG5leHRGb2N1cy5kaXNhYmxlZCB8fCBuZXh0Rm9jdXMuZ2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJykgPT09ICd0cnVlJztcblxuICAgIGlmICghbmV4dEZvY3VzLmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSB8fCAhdGV4dENyaXRlcmlhTWF0Y2hlcyhuZXh0Rm9jdXMsIHRleHRDcml0ZXJpYSkgfHwgbmV4dEZvY3VzRGlzYWJsZWQpIHtcbiAgICAgIC8vIE1vdmUgdG8gdGhlIG5leHQgZWxlbWVudC5cbiAgICAgIG5leHRGb2N1cyA9IHRyYXZlcnNhbEZ1bmN0aW9uKGxpc3QsIG5leHRGb2N1cywgZGlzYWJsZUxpc3RXcmFwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dEZvY3VzLmZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59XG5cbnZhciB1c2VFbmhhbmNlZEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gUmVhY3QudXNlRWZmZWN0IDogUmVhY3QudXNlTGF5b3V0RWZmZWN0O1xuLyoqXG4gKiBBIHBlcm1hbmVudGx5IGRpc3BsYXllZCBtZW51IGZvbGxvd2luZyBodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtcHJhY3RpY2VzLyNtZW51YnV0dG9uLlxuICogSXQncyBleHBvc2VkIHRvIGhlbHAgY3VzdG9taXphdGlvbiBvZiB0aGUgW2BNZW51YF0oL2FwaS9tZW51LykgY29tcG9uZW50LiBJZiB5b3VcbiAqIHVzZSBpdCBzZXBhcmF0ZWx5IHlvdSBuZWVkIHRvIG1vdmUgZm9jdXMgaW50byB0aGUgY29tcG9uZW50IG1hbnVhbGx5LiBPbmNlXG4gKiB0aGUgZm9jdXMgaXMgcGxhY2VkIGluc2lkZSB0aGUgY29tcG9uZW50IGl0IGlzIGZ1bGx5IGtleWJvYXJkIGFjY2Vzc2libGUuXG4gKi9cblxudmFyIE1lbnVMaXN0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTWVudUxpc3QocHJvcHMsIHJlZikge1xuICB2YXIgYWN0aW9ucyA9IHByb3BzLmFjdGlvbnMsXG4gICAgICBfcHJvcHMkYXV0b0ZvY3VzID0gcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgYXV0b0ZvY3VzID0gX3Byb3BzJGF1dG9Gb2N1cyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkYXV0b0ZvY3VzLFxuICAgICAgX3Byb3BzJGF1dG9Gb2N1c0l0ZW0gPSBwcm9wcy5hdXRvRm9jdXNJdGVtLFxuICAgICAgYXV0b0ZvY3VzSXRlbSA9IF9wcm9wcyRhdXRvRm9jdXNJdGVtID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRhdXRvRm9jdXNJdGVtLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlZEl0ZW1zRiA9IHByb3BzLmRpc2FibGVkSXRlbXNGb2N1c2FibGUsXG4gICAgICBkaXNhYmxlZEl0ZW1zRm9jdXNhYmxlID0gX3Byb3BzJGRpc2FibGVkSXRlbXNGID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlZEl0ZW1zRixcbiAgICAgIF9wcm9wcyRkaXNhYmxlTGlzdFdyYSA9IHByb3BzLmRpc2FibGVMaXN0V3JhcCxcbiAgICAgIGRpc2FibGVMaXN0V3JhcCA9IF9wcm9wcyRkaXNhYmxlTGlzdFdyYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUxpc3RXcmEsXG4gICAgICBvbktleURvd24gPSBwcm9wcy5vbktleURvd24sXG4gICAgICBfcHJvcHMkdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICB2YXJpYW50ID0gX3Byb3BzJHZhcmlhbnQgPT09IHZvaWQgMCA/ICdzZWxlY3RlZE1lbnUnIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYWN0aW9uc1wiLCBcImF1dG9Gb2N1c1wiLCBcImF1dG9Gb2N1c0l0ZW1cIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImRpc2FibGVkSXRlbXNGb2N1c2FibGVcIiwgXCJkaXNhYmxlTGlzdFdyYXBcIiwgXCJvbktleURvd25cIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgbGlzdFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIHRleHRDcml0ZXJpYVJlZiA9IFJlYWN0LnVzZVJlZih7XG4gICAga2V5czogW10sXG4gICAgcmVwZWF0aW5nOiB0cnVlLFxuICAgIHByZXZpb3VzS2V5TWF0Y2hlZDogdHJ1ZSxcbiAgICBsYXN0VGltZTogbnVsbFxuICB9KTtcbiAgdXNlRW5oYW5jZWRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChhdXRvRm9jdXMpIHtcbiAgICAgIGxpc3RSZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH1cbiAgfSwgW2F1dG9Gb2N1c10pO1xuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKGFjdGlvbnMsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWRqdXN0U3R5bGVGb3JTY3JvbGxiYXI6IGZ1bmN0aW9uIGFkanVzdFN0eWxlRm9yU2Nyb2xsYmFyKGNvbnRhaW5lckVsZW1lbnQsIHRoZW1lKSB7XG4gICAgICAgIC8vIExldCdzIGlnbm9yZSB0aGF0IHBpZWNlIG9mIGxvZ2ljIGlmIHVzZXJzIGFyZSBhbHJlYWR5IG92ZXJyaWRpbmcgdGhlIHdpZHRoXG4gICAgICAgIC8vIG9mIHRoZSBtZW51LlxuICAgICAgICB2YXIgbm9FeHBsaWNpdFdpZHRoID0gIWxpc3RSZWYuY3VycmVudC5zdHlsZS53aWR0aDtcblxuICAgICAgICBpZiAoY29udGFpbmVyRWxlbWVudC5jbGllbnRIZWlnaHQgPCBsaXN0UmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0ICYmIG5vRXhwbGljaXRXaWR0aCkge1xuICAgICAgICAgIHZhciBzY3JvbGxiYXJTaXplID0gXCJcIi5jb25jYXQoZ2V0U2Nyb2xsYmFyU2l6ZSh0cnVlKSwgXCJweFwiKTtcbiAgICAgICAgICBsaXN0UmVmLmN1cnJlbnQuc3R5bGVbdGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0J10gPSBzY3JvbGxiYXJTaXplO1xuICAgICAgICAgIGxpc3RSZWYuY3VycmVudC5zdHlsZS53aWR0aCA9IFwiY2FsYygxMDAlICsgXCIuY29uY2F0KHNjcm9sbGJhclNpemUsIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaXN0UmVmLmN1cnJlbnQ7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHZhciBoYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgIHZhciBsaXN0ID0gbGlzdFJlZi5jdXJyZW50O1xuICAgIHZhciBrZXkgPSBldmVudC5rZXk7XG4gICAgLyoqXG4gICAgICogQHR5cGUge0VsZW1lbnR9IC0gd2lsbCBhbHdheXMgYmUgZGVmaW5lZCBzaW5jZSB3ZSBhcmUgaW4gYSBrZXlkb3duIGhhbmRsZXJcbiAgICAgKiBhdHRhY2hlZCB0byBhbiBlbGVtZW50LiBBIGtleWRvd24gZXZlbnQgaXMgZWl0aGVyIGRpc3BhdGNoZWQgdG8gdGhlIGFjdGl2ZUVsZW1lbnRcbiAgICAgKiBvciBkb2N1bWVudC5ib2R5IG9yIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC4gT25seSB0aGUgZmlyc3QgY2FzZSB3aWxsXG4gICAgICogdHJpZ2dlciB0aGlzIHNwZWNpZmljIGhhbmRsZXIuXG4gICAgICovXG5cbiAgICB2YXIgY3VycmVudEZvY3VzID0gb3duZXJEb2N1bWVudChsaXN0KS5hY3RpdmVFbGVtZW50O1xuXG4gICAgaWYgKGtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIC8vIFByZXZlbnQgc2Nyb2xsIG9mIHRoZSBwYWdlXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW92ZUZvY3VzKGxpc3QsIGN1cnJlbnRGb2N1cywgZGlzYWJsZUxpc3RXcmFwLCBkaXNhYmxlZEl0ZW1zRm9jdXNhYmxlLCBuZXh0SXRlbSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1vdmVGb2N1cyhsaXN0LCBjdXJyZW50Rm9jdXMsIGRpc2FibGVMaXN0V3JhcCwgZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZSwgcHJldmlvdXNJdGVtKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0hvbWUnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW92ZUZvY3VzKGxpc3QsIG51bGwsIGRpc2FibGVMaXN0V3JhcCwgZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZSwgbmV4dEl0ZW0pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnRW5kJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1vdmVGb2N1cyhsaXN0LCBudWxsLCBkaXNhYmxlTGlzdFdyYXAsIGRpc2FibGVkSXRlbXNGb2N1c2FibGUsIHByZXZpb3VzSXRlbSk7XG4gICAgfSBlbHNlIGlmIChrZXkubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY3JpdGVyaWEgPSB0ZXh0Q3JpdGVyaWFSZWYuY3VycmVudDtcbiAgICAgIHZhciBsb3dlcktleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdmFyIGN1cnJUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICAgIGlmIChjcml0ZXJpYS5rZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gUmVzZXRcbiAgICAgICAgaWYgKGN1cnJUaW1lIC0gY3JpdGVyaWEubGFzdFRpbWUgPiA1MDApIHtcbiAgICAgICAgICBjcml0ZXJpYS5rZXlzID0gW107XG4gICAgICAgICAgY3JpdGVyaWEucmVwZWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICBjcml0ZXJpYS5wcmV2aW91c0tleU1hdGNoZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGNyaXRlcmlhLnJlcGVhdGluZyAmJiBsb3dlcktleSAhPT0gY3JpdGVyaWEua2V5c1swXSkge1xuICAgICAgICAgIGNyaXRlcmlhLnJlcGVhdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNyaXRlcmlhLmxhc3RUaW1lID0gY3VyclRpbWU7XG4gICAgICBjcml0ZXJpYS5rZXlzLnB1c2gobG93ZXJLZXkpO1xuICAgICAgdmFyIGtlZXBGb2N1c09uQ3VycmVudCA9IGN1cnJlbnRGb2N1cyAmJiAhY3JpdGVyaWEucmVwZWF0aW5nICYmIHRleHRDcml0ZXJpYU1hdGNoZXMoY3VycmVudEZvY3VzLCBjcml0ZXJpYSk7XG5cbiAgICAgIGlmIChjcml0ZXJpYS5wcmV2aW91c0tleU1hdGNoZWQgJiYgKGtlZXBGb2N1c09uQ3VycmVudCB8fCBtb3ZlRm9jdXMobGlzdCwgY3VycmVudEZvY3VzLCBmYWxzZSwgZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZSwgbmV4dEl0ZW0sIGNyaXRlcmlhKSkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNyaXRlcmlhLnByZXZpb3VzS2V5TWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvbktleURvd24pIHtcbiAgICAgIG9uS2V5RG93bihldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVPd25SZWYgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAvLyAjU3RyaWN0TW9kZSByZWFkeVxuICAgIGxpc3RSZWYuY3VycmVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGluc3RhbmNlKTtcbiAgfSwgW10pO1xuICB2YXIgaGFuZGxlUmVmID0gdXNlRm9ya1JlZihoYW5kbGVPd25SZWYsIHJlZik7XG4gIC8qKlxuICAgKiB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gc2hvdWxkIHJlY2VpdmUgZm9jdXNcbiAgICogaW4gYSBgdmFyaWFudD1cInNlbGVjdGVkTWVudVwiYCBpdCdzIHRoZSBmaXJzdCBgc2VsZWN0ZWRgIGl0ZW1cbiAgICogb3RoZXJ3aXNlIGl0J3MgdGhlIHZlcnkgZmlyc3QgaXRlbS5cbiAgICovXG5cbiAgdmFyIGFjdGl2ZUl0ZW1JbmRleCA9IC0xOyAvLyBzaW5jZSB3ZSBpbmplY3QgZm9jdXMgcmVsYXRlZCBwcm9wcyBpbnRvIGNoaWxkcmVuIHdlIGhhdmUgdG8gZG8gYSBsb29rYWhlYWRcbiAgLy8gdG8gY2hlY2sgaWYgdGhlcmUgaXMgYSBgc2VsZWN0ZWRgIGl0ZW0uIFdlJ3JlIGxvb2tpbmcgZm9yIHRoZSBsYXN0IGBzZWxlY3RlZGBcbiAgLy8gaXRlbSBhbmQgdXNlIHRoZSBmaXJzdCB2YWxpZCBpdGVtIGFzIGEgZmFsbGJhY2tcblxuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgaWYgKCEgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoaXNGcmFnbWVudChjaGlsZCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIE1lbnUgY29tcG9uZW50IGRvZXNuJ3QgYWNjZXB0IGEgRnJhZ21lbnQgYXMgYSBjaGlsZC5cIiwgJ0NvbnNpZGVyIHByb3ZpZGluZyBhbiBhcnJheSBpbnN0ZWFkLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNoaWxkLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICBpZiAodmFyaWFudCA9PT0gJ3NlbGVjdGVkTWVudScgJiYgY2hpbGQucHJvcHMuc2VsZWN0ZWQpIHtcbiAgICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaW5kZXg7XG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZUl0ZW1JbmRleCA9PT0gLTEpIHtcbiAgICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgdmFyIGl0ZW1zID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSBhY3RpdmVJdGVtSW5kZXgpIHtcbiAgICAgIHZhciBuZXdDaGlsZFByb3BzID0ge307XG5cbiAgICAgIGlmIChhdXRvRm9jdXNJdGVtKSB7XG4gICAgICAgIG5ld0NoaWxkUHJvcHMuYXV0b0ZvY3VzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkLnByb3BzLnRhYkluZGV4ID09PSB1bmRlZmluZWQgJiYgdmFyaWFudCA9PT0gJ3NlbGVjdGVkTWVudScpIHtcbiAgICAgICAgbmV3Q2hpbGRQcm9wcy50YWJJbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBuZXdDaGlsZFByb3BzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdCwgX2V4dGVuZHMoe1xuICAgIHJvbGU6IFwibWVudVwiLFxuICAgIHJlZjogaGFuZGxlUmVmLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93bixcbiAgICB0YWJJbmRleDogYXV0b0ZvY3VzID8gMCA6IC0xXG4gIH0sIG90aGVyKSwgaXRlbXMpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBNZW51TGlzdC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHdpbGwgZm9jdXMgdGhlIGBbcm9sZT1cIm1lbnVcIl1gIGNvbnRhaW5lciBhbmQgbW92ZSBpbnRvIHRhYiBvcmRlci5cbiAgICovXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgd2lsbCBmb2N1cyB0aGUgZmlyc3QgbWVudWl0ZW0gaWYgYHZhcmlhbnQ9XCJtZW51XCJgIG9yIHNlbGVjdGVkIGl0ZW1cbiAgICogaWYgYHZhcmlhbnQ9XCJzZWxlY3RlZE1lbnVcImAuXG4gICAqL1xuICBhdXRvRm9jdXNJdGVtOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTWVudUxpc3QgY29udGVudHMsIG5vcm1hbGx5IGBNZW51SXRlbWBzLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgd2lsbCBhbGxvdyBmb2N1cyBvbiBkaXNhYmxlZCBpdGVtcy5cbiAgICovXG4gIGRpc2FibGVkSXRlbXNGb2N1c2FibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBtZW51IGl0ZW1zIHdpbGwgbm90IHdyYXAgZm9jdXMuXG4gICAqL1xuICBkaXNhYmxlTGlzdFdyYXA6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuIFVzZSBgbWVudWAgdG8gcHJldmVudCBzZWxlY3RlZCBpdGVtcyBmcm9tIGltcGFjdGluZyB0aGUgaW5pdGlhbCBmb2N1c1xuICAgKiBhbmQgdGhlIHZlcnRpY2FsIGFsaWdubWVudCByZWxhdGl2ZSB0byB0aGUgYW5jaG9yIGVsZW1lbnQuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydtZW51JywgJ3NlbGVjdGVkTWVudSddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IE1lbnVMaXN0OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzRnJhZ21lbnQgfSBmcm9tICdyZWFjdC1pcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBIVE1MRWxlbWVudFR5cGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAnLi4vUG9wb3Zlcic7XG5pbXBvcnQgTWVudUxpc3QgZnJvbSAnLi4vTWVudUxpc3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBzZXRSZWYgZnJvbSAnLi4vdXRpbHMvc2V0UmVmJztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuLi9zdHlsZXMvdXNlVGhlbWUnO1xuaW1wb3J0IGRlcHJlY2F0ZWRQcm9wVHlwZSBmcm9tICcuLi91dGlscy9kZXByZWNhdGVkUHJvcFR5cGUnO1xudmFyIFJUTF9PUklHSU4gPSB7XG4gIHZlcnRpY2FsOiAndG9wJyxcbiAgaG9yaXpvbnRhbDogJ3JpZ2h0J1xufTtcbnZhciBMVFJfT1JJR0lOID0ge1xuICB2ZXJ0aWNhbDogJ3RvcCcsXG4gIGhvcml6b250YWw6ICdsZWZ0J1xufTtcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQuICovXG4gIHBhcGVyOiB7XG4gICAgLy8gc3BlY1o6IFRoZSBtYXhpbXVtIGhlaWdodCBvZiBhIHNpbXBsZSBtZW51IHNob3VsZCBiZSBvbmUgb3IgbW9yZSByb3dzIGxlc3MgdGhhbiB0aGUgdmlld1xuICAgIC8vIGhlaWdodC4gVGhpcyBlbnN1cmVzIGEgdGFwYWJsZSBhcmVhIG91dHNpZGUgb2YgdGhlIHNpbXBsZSBtZW51IHdpdGggd2hpY2ggdG8gZGlzbWlzc1xuICAgIC8vIHRoZSBtZW51LlxuICAgIG1heEhlaWdodDogJ2NhbGMoMTAwJSAtIDk2cHgpJyxcbiAgICAvLyBBZGQgaU9TIG1vbWVudHVtIHNjcm9sbGluZy5cbiAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogJ3RvdWNoJ1xuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgTGlzdGAgY29tcG9uZW50IHZpYSBgTWVudUxpc3RgLiAqL1xuICBsaXN0OiB7XG4gICAgLy8gV2UgZGlzYWJsZSB0aGUgZm9jdXMgcmluZyBmb3IgbW91c2UsIHRvdWNoIGFuZCBrZXlib2FyZCB1c2Vycy5cbiAgICBvdXRsaW5lOiAwXG4gIH1cbn07XG52YXIgTWVudSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE1lbnUocHJvcHMsIHJlZikge1xuICB2YXIgX3Byb3BzJGF1dG9Gb2N1cyA9IHByb3BzLmF1dG9Gb2N1cyxcbiAgICAgIGF1dG9Gb2N1cyA9IF9wcm9wcyRhdXRvRm9jdXMgPT09IHZvaWQgMCA/IHRydWUgOiBfcHJvcHMkYXV0b0ZvY3VzLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgX3Byb3BzJGRpc2FibGVBdXRvRm9jID0gcHJvcHMuZGlzYWJsZUF1dG9Gb2N1c0l0ZW0sXG4gICAgICBkaXNhYmxlQXV0b0ZvY3VzSXRlbSA9IF9wcm9wcyRkaXNhYmxlQXV0b0ZvYyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUF1dG9Gb2MsXG4gICAgICBfcHJvcHMkTWVudUxpc3RQcm9wcyA9IHByb3BzLk1lbnVMaXN0UHJvcHMsXG4gICAgICBNZW51TGlzdFByb3BzID0gX3Byb3BzJE1lbnVMaXN0UHJvcHMgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJE1lbnVMaXN0UHJvcHMsXG4gICAgICBvbkNsb3NlID0gcHJvcHMub25DbG9zZSxcbiAgICAgIG9uRW50ZXJpbmdQcm9wID0gcHJvcHMub25FbnRlcmluZyxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgX3Byb3BzJFBhcGVyUHJvcHMgPSBwcm9wcy5QYXBlclByb3BzLFxuICAgICAgUGFwZXJQcm9wcyA9IF9wcm9wcyRQYXBlclByb3BzID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRQYXBlclByb3BzLFxuICAgICAgUG9wb3ZlckNsYXNzZXMgPSBwcm9wcy5Qb3BvdmVyQ2xhc3NlcyxcbiAgICAgIF9wcm9wcyR0cmFuc2l0aW9uRHVyYSA9IHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IF9wcm9wcyR0cmFuc2l0aW9uRHVyYSA9PT0gdm9pZCAwID8gJ2F1dG8nIDogX3Byb3BzJHRyYW5zaXRpb25EdXJhLFxuICAgICAgX3Byb3BzJFRyYW5zaXRpb25Qcm9wID0gcHJvcHMuVHJhbnNpdGlvblByb3BzO1xuICBfcHJvcHMkVHJhbnNpdGlvblByb3AgPSBfcHJvcHMkVHJhbnNpdGlvblByb3AgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJFRyYW5zaXRpb25Qcm9wO1xuXG4gIHZhciBvbkVudGVyaW5nID0gX3Byb3BzJFRyYW5zaXRpb25Qcm9wLm9uRW50ZXJpbmcsXG4gICAgICBUcmFuc2l0aW9uUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzJFRyYW5zaXRpb25Qcm9wLCBbXCJvbkVudGVyaW5nXCJdKSxcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ3NlbGVjdGVkTWVudScgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhdXRvRm9jdXNcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJkaXNhYmxlQXV0b0ZvY3VzSXRlbVwiLCBcIk1lbnVMaXN0UHJvcHNcIiwgXCJvbkNsb3NlXCIsIFwib25FbnRlcmluZ1wiLCBcIm9wZW5cIiwgXCJQYXBlclByb3BzXCIsIFwiUG9wb3ZlckNsYXNzZXNcIiwgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIiwgXCJUcmFuc2l0aW9uUHJvcHNcIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICB2YXIgYXV0b0ZvY3VzSXRlbSA9IGF1dG9Gb2N1cyAmJiAhZGlzYWJsZUF1dG9Gb2N1c0l0ZW0gJiYgb3BlbjtcbiAgdmFyIG1lbnVMaXN0QWN0aW9uc1JlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIGNvbnRlbnRBbmNob3JSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgdmFyIGdldENvbnRlbnRBbmNob3JFbCA9IGZ1bmN0aW9uIGdldENvbnRlbnRBbmNob3JFbCgpIHtcbiAgICByZXR1cm4gY29udGVudEFuY2hvclJlZi5jdXJyZW50O1xuICB9O1xuXG4gIHZhciBoYW5kbGVFbnRlcmluZyA9IGZ1bmN0aW9uIGhhbmRsZUVudGVyaW5nKGVsZW1lbnQsIGlzQXBwZWFyaW5nKSB7XG4gICAgaWYgKG1lbnVMaXN0QWN0aW9uc1JlZi5jdXJyZW50KSB7XG4gICAgICBtZW51TGlzdEFjdGlvbnNSZWYuY3VycmVudC5hZGp1c3RTdHlsZUZvclNjcm9sbGJhcihlbGVtZW50LCB0aGVtZSk7XG4gICAgfVxuXG4gICAgaWYgKG9uRW50ZXJpbmdQcm9wKSB7XG4gICAgICBvbkVudGVyaW5nUHJvcChlbGVtZW50LCBpc0FwcGVhcmluZyk7XG4gICAgfVxuXG4gICAgaWYgKG9uRW50ZXJpbmcpIHtcbiAgICAgIG9uRW50ZXJpbmcoZWxlbWVudCwgaXNBcHBlYXJpbmcpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlTGlzdEtleURvd24gPSBmdW5jdGlvbiBoYW5kbGVMaXN0S2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAob25DbG9zZSkge1xuICAgICAgICBvbkNsb3NlKGV2ZW50LCAndGFiS2V5RG93bicpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIHRoZSBpbmRleCBvZiB0aGUgaXRlbSBzaG91bGQgcmVjZWl2ZSBmb2N1c1xuICAgKiBpbiBhIGB2YXJpYW50PVwic2VsZWN0ZWRNZW51XCJgIGl0J3MgdGhlIGZpcnN0IGBzZWxlY3RlZGAgaXRlbVxuICAgKiBvdGhlcndpc2UgaXQncyB0aGUgdmVyeSBmaXJzdCBpdGVtLlxuICAgKi9cblxuXG4gIHZhciBhY3RpdmVJdGVtSW5kZXggPSAtMTsgLy8gc2luY2Ugd2UgaW5qZWN0IGZvY3VzIHJlbGF0ZWQgcHJvcHMgaW50byBjaGlsZHJlbiB3ZSBoYXZlIHRvIGRvIGEgbG9va2FoZWFkXG4gIC8vIHRvIGNoZWNrIGlmIHRoZXJlIGlzIGEgYHNlbGVjdGVkYCBpdGVtLiBXZSdyZSBsb29raW5nIGZvciB0aGUgbGFzdCBgc2VsZWN0ZWRgXG4gIC8vIGl0ZW0gYW5kIHVzZSB0aGUgZmlyc3QgdmFsaWQgaXRlbSBhcyBhIGZhbGxiYWNrXG5cbiAgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgaWYgKCEgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoaXNGcmFnbWVudChjaGlsZCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIE1lbnUgY29tcG9uZW50IGRvZXNuJ3QgYWNjZXB0IGEgRnJhZ21lbnQgYXMgYSBjaGlsZC5cIiwgJ0NvbnNpZGVyIHByb3ZpZGluZyBhbiBhcnJheSBpbnN0ZWFkLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNoaWxkLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICBpZiAodmFyaWFudCAhPT0gXCJtZW51XCIgJiYgY2hpbGQucHJvcHMuc2VsZWN0ZWQpIHtcbiAgICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaW5kZXg7XG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZUl0ZW1JbmRleCA9PT0gLTEpIHtcbiAgICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgdmFyIGl0ZW1zID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSBhY3RpdmVJdGVtSW5kZXgpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGluc3RhbmNlKSB7XG4gICAgICAgICAgLy8gI1N0cmljdE1vZGUgcmVhZHlcbiAgICAgICAgICBjb250ZW50QW5jaG9yUmVmLmN1cnJlbnQgPSBSZWFjdERPTS5maW5kRE9NTm9kZShpbnN0YW5jZSk7XG4gICAgICAgICAgc2V0UmVmKGNoaWxkLnJlZiwgaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUG9wb3ZlciwgX2V4dGVuZHMoe1xuICAgIGdldENvbnRlbnRBbmNob3JFbDogZ2V0Q29udGVudEFuY2hvckVsLFxuICAgIGNsYXNzZXM6IFBvcG92ZXJDbGFzc2VzLFxuICAgIG9uQ2xvc2U6IG9uQ2xvc2UsXG4gICAgVHJhbnNpdGlvblByb3BzOiBfZXh0ZW5kcyh7XG4gICAgICBvbkVudGVyaW5nOiBoYW5kbGVFbnRlcmluZ1xuICAgIH0sIFRyYW5zaXRpb25Qcm9wcyksXG4gICAgYW5jaG9yT3JpZ2luOiB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gUlRMX09SSUdJTiA6IExUUl9PUklHSU4sXG4gICAgdHJhbnNmb3JtT3JpZ2luOiB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gUlRMX09SSUdJTiA6IExUUl9PUklHSU4sXG4gICAgUGFwZXJQcm9wczogX2V4dGVuZHMoe30sIFBhcGVyUHJvcHMsIHtcbiAgICAgIGNsYXNzZXM6IF9leHRlbmRzKHt9LCBQYXBlclByb3BzLmNsYXNzZXMsIHtcbiAgICAgICAgcm9vdDogY2xhc3Nlcy5wYXBlclxuICAgICAgfSlcbiAgICB9KSxcbiAgICBvcGVuOiBvcGVuLFxuICAgIHJlZjogcmVmLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogdHJhbnNpdGlvbkR1cmF0aW9uXG4gIH0sIG90aGVyKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUxpc3QsIF9leHRlbmRzKHtcbiAgICBvbktleURvd246IGhhbmRsZUxpc3RLZXlEb3duLFxuICAgIGFjdGlvbnM6IG1lbnVMaXN0QWN0aW9uc1JlZixcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyAmJiAoYWN0aXZlSXRlbUluZGV4ID09PSAtMSB8fCBkaXNhYmxlQXV0b0ZvY3VzSXRlbSksXG4gICAgYXV0b0ZvY3VzSXRlbTogYXV0b0ZvY3VzSXRlbSxcbiAgICB2YXJpYW50OiB2YXJpYW50XG4gIH0sIE1lbnVMaXN0UHJvcHMsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5saXN0LCBNZW51TGlzdFByb3BzLmNsYXNzTmFtZSlcbiAgfSksIGl0ZW1zKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IE1lbnUucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQSBIVE1MIGVsZW1lbnQsIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGl0LlxuICAgKiBJdCdzIHVzZWQgdG8gc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgbWVudS5cbiAgICovXG4gIGFuY2hvckVsOiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAub25lT2ZUeXBlKFtIVE1MRWxlbWVudFR5cGUsIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCAoRGVmYXVsdCkgd2lsbCBmb2N1cyB0aGUgYFtyb2xlPVwibWVudVwiXWAgaWYgbm8gZm9jdXNhYmxlIGNoaWxkIGlzIGZvdW5kLiBEaXNhYmxlZFxuICAgKiBjaGlsZHJlbiBhcmUgbm90IGZvY3VzYWJsZS4gSWYgeW91IHNldCB0aGlzIHByb3AgdG8gYGZhbHNlYCBmb2N1cyB3aWxsIGJlIHBsYWNlZFxuICAgKiBvbiB0aGUgcGFyZW50IG1vZGFsIGNvbnRhaW5lci4gVGhpcyBoYXMgc2V2ZXJlIGFjY2Vzc2liaWxpdHkgaW1wbGljYXRpb25zXG4gICAqIGFuZCBzaG91bGQgb25seSBiZSBjb25zaWRlcmVkIGlmIHlvdSBtYW5hZ2UgZm9jdXMgb3RoZXJ3aXNlLlxuICAgKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTWVudSBjb250ZW50cywgbm9ybWFsbHkgYE1lbnVJdGVtYHMuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogV2hlbiBvcGVuaW5nIHRoZSBtZW51IHdpbGwgbm90IGZvY3VzIHRoZSBhY3RpdmUgaXRlbSBidXQgdGhlIGBbcm9sZT1cIm1lbnVcIl1gXG4gICAqIHVubGVzcyBgYXV0b0ZvY3VzYCBpcyBhbHNvIHNldCB0byBgZmFsc2VgLiBOb3QgdXNpbmcgdGhlIGRlZmF1bHQgbWVhbnMgbm90XG4gICAqIGZvbGxvd2luZyBXQUktQVJJQSBhdXRob3JpbmcgcHJhY3RpY2VzLiBQbGVhc2UgYmUgY29uc2lkZXJhdGUgYWJvdXQgcG9zc2libGVcbiAgICogYWNjZXNzaWJpbGl0eSBpbXBsaWNhdGlvbnMuXG4gICAqL1xuICBkaXNhYmxlQXV0b0ZvY3VzSXRlbTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIFtgTWVudUxpc3RgXSgvYXBpL21lbnUtbGlzdC8pIGVsZW1lbnQuXG4gICAqL1xuICBNZW51TGlzdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgcmVxdWVzdHMgdG8gYmUgY2xvc2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gQ2FuIGJlOiBgXCJlc2NhcGVLZXlEb3duXCJgLCBgXCJiYWNrZHJvcENsaWNrXCJgLCBgXCJ0YWJLZXlEb3duXCJgLlxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgTWVudSBlbnRlcnMuXG4gICAqIEBkZXByZWNhdGVkIFVzZSB0aGUgYFRyYW5zaXRpb25Qcm9wc2AgcHJvcCBpbnN0ZWFkLlxuICAgKi9cbiAgb25FbnRlcjogZGVwcmVjYXRlZFByb3BUeXBlKFByb3BUeXBlcy5mdW5jLCAnVXNlIHRoZSBgVHJhbnNpdGlvblByb3BzYCBwcm9wIGluc3RlYWQuJyksXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIE1lbnUgaGFzIGVudGVyZWQuXG4gICAqIEBkZXByZWNhdGVkIFVzZSB0aGUgYFRyYW5zaXRpb25Qcm9wc2AgcHJvcCBpbnN0ZWFkLlxuICAgKi9cbiAgb25FbnRlcmVkOiBkZXByZWNhdGVkUHJvcFR5cGUoUHJvcFR5cGVzLmZ1bmMsICdVc2UgdGhlIGBUcmFuc2l0aW9uUHJvcHNgIHByb3AgaW5zdGVhZC4nKSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgTWVudSBpcyBlbnRlcmluZy5cbiAgICogQGRlcHJlY2F0ZWQgVXNlIHRoZSBgVHJhbnNpdGlvblByb3BzYCBwcm9wIGluc3RlYWQuXG4gICAqL1xuICBvbkVudGVyaW5nOiBkZXByZWNhdGVkUHJvcFR5cGUoUHJvcFR5cGVzLmZ1bmMsICdVc2UgdGhlIGBUcmFuc2l0aW9uUHJvcHNgIHByb3AgaW5zdGVhZC4nKSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBNZW51IGV4aXRzLlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgdGhlIGBUcmFuc2l0aW9uUHJvcHNgIHByb3AgaW5zdGVhZC5cbiAgICovXG4gIG9uRXhpdDogZGVwcmVjYXRlZFByb3BUeXBlKFByb3BUeXBlcy5mdW5jLCAnVXNlIHRoZSBgVHJhbnNpdGlvblByb3BzYCBwcm9wIGluc3RlYWQuJyksXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIE1lbnUgaGFzIGV4aXRlZC5cbiAgICogQGRlcHJlY2F0ZWQgVXNlIHRoZSBgVHJhbnNpdGlvblByb3BzYCBwcm9wIGluc3RlYWQuXG4gICAqL1xuICBvbkV4aXRlZDogZGVwcmVjYXRlZFByb3BUeXBlKFByb3BUeXBlcy5mdW5jLCAnVXNlIHRoZSBgVHJhbnNpdGlvblByb3BzYCBwcm9wIGluc3RlYWQuJyksXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIE1lbnUgaXMgZXhpdGluZy5cbiAgICogQGRlcHJlY2F0ZWQgVXNlIHRoZSBgVHJhbnNpdGlvblByb3BzYCBwcm9wIGluc3RlYWQuXG4gICAqL1xuICBvbkV4aXRpbmc6IGRlcHJlY2F0ZWRQcm9wVHlwZShQcm9wVHlwZXMuZnVuYywgJ1VzZSB0aGUgYFRyYW5zaXRpb25Qcm9wc2AgcHJvcCBpbnN0ZWFkLicpLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBtZW51IGlzIHZpc2libGUuXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBQYXBlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBgY2xhc3Nlc2AgcHJvcCBhcHBsaWVkIHRvIHRoZSBbYFBvcG92ZXJgXSgvYXBpL3BvcG92ZXIvKSBlbGVtZW50LlxuICAgKi9cbiAgUG9wb3ZlckNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBsZW5ndGggb2YgdGhlIHRyYW5zaXRpb24gaW4gYG1zYCwgb3IgJ2F1dG8nXG4gICAqL1xuICB0cmFuc2l0aW9uRHVyYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXBwZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGVudGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGV4aXQ6IFByb3BUeXBlcy5udW1iZXJcbiAgfSldKSxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgdHJhbnNpdGlvbiBlbGVtZW50LlxuICAgKiBCeSBkZWZhdWx0LCB0aGUgZWxlbWVudCBpcyBiYXNlZCBvbiB0aGlzIFtgVHJhbnNpdGlvbmBdKGh0dHA6Ly9yZWFjdGNvbW11bml0eS5vcmcvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC90cmFuc2l0aW9uKSBjb21wb25lbnQuXG4gICAqL1xuICBUcmFuc2l0aW9uUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS4gVXNlIGBtZW51YCB0byBwcmV2ZW50IHNlbGVjdGVkIGl0ZW1zIGZyb20gaW1wYWN0aW5nIHRoZSBpbml0aWFsIGZvY3VzXG4gICAqIGFuZCB0aGUgdmVydGljYWwgYWxpZ25tZW50IHJlbGF0aXZlIHRvIHRoZSBhbmNob3IgZWxlbWVudC5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ21lbnUnLCAnc2VsZWN0ZWRNZW51J10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aU1lbnUnXG59KShNZW51KTsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldFRoZW1lUHJvcHMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgeyBlbGVtZW50QWNjZXB0aW5nUmVmLCBIVE1MRWxlbWVudFR5cGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGRlcHJlY2F0ZWRQcm9wVHlwZSBmcm9tICcuLi91dGlscy9kZXByZWNhdGVkUHJvcFR5cGUnO1xuaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnLi4vdXRpbHMvb3duZXJEb2N1bWVudCc7XG5pbXBvcnQgUG9ydGFsIGZyb20gJy4uL1BvcnRhbCc7XG5pbXBvcnQgY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uIGZyb20gJy4uL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbic7XG5pbXBvcnQgdXNlRm9ya1JlZiBmcm9tICcuLi91dGlscy91c2VGb3JrUmVmJztcbmltcG9ydCB1c2VFdmVudENhbGxiYWNrIGZyb20gJy4uL3V0aWxzL3VzZUV2ZW50Q2FsbGJhY2snO1xuaW1wb3J0IHpJbmRleCBmcm9tICcuLi9zdHlsZXMvekluZGV4JztcbmltcG9ydCBNb2RhbE1hbmFnZXIsIHsgYXJpYUhpZGRlbiB9IGZyb20gJy4vTW9kYWxNYW5hZ2VyJztcbmltcG9ydCBUcmFwRm9jdXMgZnJvbSAnLi4vVW5zdGFibGVfVHJhcEZvY3VzJztcbmltcG9ydCBTaW1wbGVCYWNrZHJvcCBmcm9tICcuL1NpbXBsZUJhY2tkcm9wJztcblxuZnVuY3Rpb24gZ2V0Q29udGFpbmVyKGNvbnRhaW5lcikge1xuICBjb250YWluZXIgPSB0eXBlb2YgY29udGFpbmVyID09PSAnZnVuY3Rpb24nID8gY29udGFpbmVyKCkgOiBjb250YWluZXI7XG4gIHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZShjb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBnZXRIYXNUcmFuc2l0aW9uKHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy5jaGlsZHJlbiA/IHByb3BzLmNoaWxkcmVuLnByb3BzLmhhc093blByb3BlcnR5KCdpbicpIDogZmFsc2U7XG59IC8vIEEgbW9kYWwgbWFuYWdlciB1c2VkIHRvIHRyYWNrIGFuZCBtYW5hZ2UgdGhlIHN0YXRlIG9mIG9wZW4gTW9kYWxzLlxuLy8gTW9kYWxzIGRvbid0IG9wZW4gb24gdGhlIHNlcnZlciBzbyB0aGlzIHdvbid0IGNvbmZsaWN0IHdpdGggY29uY3VycmVudCByZXF1ZXN0cy5cblxuXG52YXIgZGVmYXVsdE1hbmFnZXIgPSBuZXcgTW9kYWxNYW5hZ2VyKCk7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5tb2RhbCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBgTW9kYWxgIGhhcyBleGl0ZWQuICovXG4gICAgaGlkZGVuOiB7XG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xuICAgIH1cbiAgfTtcbn07XG4vKipcbiAqIE1vZGFsIGlzIGEgbG93ZXItbGV2ZWwgY29uc3RydWN0IHRoYXQgaXMgbGV2ZXJhZ2VkIGJ5IHRoZSBmb2xsb3dpbmcgY29tcG9uZW50czpcbiAqXG4gKiAtIFtEaWFsb2ddKC9hcGkvZGlhbG9nLylcbiAqIC0gW0RyYXdlcl0oL2FwaS9kcmF3ZXIvKVxuICogLSBbTWVudV0oL2FwaS9tZW51LylcbiAqIC0gW1BvcG92ZXJdKC9hcGkvcG9wb3Zlci8pXG4gKlxuICogSWYgeW91IGFyZSBjcmVhdGluZyBhIG1vZGFsIGRpYWxvZywgeW91IHByb2JhYmx5IHdhbnQgdG8gdXNlIHRoZSBbRGlhbG9nXSgvYXBpL2RpYWxvZy8pIGNvbXBvbmVudFxuICogcmF0aGVyIHRoYW4gZGlyZWN0bHkgdXNpbmcgTW9kYWwuXG4gKlxuICogVGhpcyBjb21wb25lbnQgc2hhcmVzIG1hbnkgY29uY2VwdHMgd2l0aCBbcmVhY3Qtb3ZlcmxheXNdKGh0dHBzOi8vcmVhY3QtYm9vdHN0cmFwLmdpdGh1Yi5pby9yZWFjdC1vdmVybGF5cy8jbW9kYWxzKS5cbiAqL1xuXG52YXIgTW9kYWwgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBNb2RhbChpblByb3BzLCByZWYpIHtcbiAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgdmFyIHByb3BzID0gZ2V0VGhlbWVQcm9wcyh7XG4gICAgbmFtZTogJ011aU1vZGFsJyxcbiAgICBwcm9wczogX2V4dGVuZHMoe30sIGluUHJvcHMpLFxuICAgIHRoZW1lOiB0aGVtZVxuICB9KTtcblxuICB2YXIgX3Byb3BzJEJhY2tkcm9wQ29tcG9uID0gcHJvcHMuQmFja2Ryb3BDb21wb25lbnQsXG4gICAgICBCYWNrZHJvcENvbXBvbmVudCA9IF9wcm9wcyRCYWNrZHJvcENvbXBvbiA9PT0gdm9pZCAwID8gU2ltcGxlQmFja2Ryb3AgOiBfcHJvcHMkQmFja2Ryb3BDb21wb24sXG4gICAgICBCYWNrZHJvcFByb3BzID0gcHJvcHMuQmFja2Ryb3BQcm9wcyxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBfcHJvcHMkY2xvc2VBZnRlclRyYW4gPSBwcm9wcy5jbG9zZUFmdGVyVHJhbnNpdGlvbixcbiAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uID0gX3Byb3BzJGNsb3NlQWZ0ZXJUcmFuID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRjbG9zZUFmdGVyVHJhbixcbiAgICAgIGNvbnRhaW5lciA9IHByb3BzLmNvbnRhaW5lcixcbiAgICAgIF9wcm9wcyRkaXNhYmxlQXV0b0ZvYyA9IHByb3BzLmRpc2FibGVBdXRvRm9jdXMsXG4gICAgICBkaXNhYmxlQXV0b0ZvY3VzID0gX3Byb3BzJGRpc2FibGVBdXRvRm9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlQXV0b0ZvYyxcbiAgICAgIF9wcm9wcyRkaXNhYmxlQmFja2RybyA9IHByb3BzLmRpc2FibGVCYWNrZHJvcENsaWNrLFxuICAgICAgZGlzYWJsZUJhY2tkcm9wQ2xpY2sgPSBfcHJvcHMkZGlzYWJsZUJhY2tkcm8gPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVCYWNrZHJvLFxuICAgICAgX3Byb3BzJGRpc2FibGVFbmZvcmNlID0gcHJvcHMuZGlzYWJsZUVuZm9yY2VGb2N1cyxcbiAgICAgIGRpc2FibGVFbmZvcmNlRm9jdXMgPSBfcHJvcHMkZGlzYWJsZUVuZm9yY2UgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVFbmZvcmNlLFxuICAgICAgX3Byb3BzJGRpc2FibGVFc2NhcGVLID0gcHJvcHMuZGlzYWJsZUVzY2FwZUtleURvd24sXG4gICAgICBkaXNhYmxlRXNjYXBlS2V5RG93biA9IF9wcm9wcyRkaXNhYmxlRXNjYXBlSyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUVzY2FwZUssXG4gICAgICBfcHJvcHMkZGlzYWJsZVBvcnRhbCA9IHByb3BzLmRpc2FibGVQb3J0YWwsXG4gICAgICBkaXNhYmxlUG9ydGFsID0gX3Byb3BzJGRpc2FibGVQb3J0YWwgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVQb3J0YWwsXG4gICAgICBfcHJvcHMkZGlzYWJsZVJlc3RvcmUgPSBwcm9wcy5kaXNhYmxlUmVzdG9yZUZvY3VzLFxuICAgICAgZGlzYWJsZVJlc3RvcmVGb2N1cyA9IF9wcm9wcyRkaXNhYmxlUmVzdG9yZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVJlc3RvcmUsXG4gICAgICBfcHJvcHMkZGlzYWJsZVNjcm9sbEwgPSBwcm9wcy5kaXNhYmxlU2Nyb2xsTG9jayxcbiAgICAgIGRpc2FibGVTY3JvbGxMb2NrID0gX3Byb3BzJGRpc2FibGVTY3JvbGxMID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlU2Nyb2xsTCxcbiAgICAgIF9wcm9wcyRoaWRlQmFja2Ryb3AgPSBwcm9wcy5oaWRlQmFja2Ryb3AsXG4gICAgICBoaWRlQmFja2Ryb3AgPSBfcHJvcHMkaGlkZUJhY2tkcm9wID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRoaWRlQmFja2Ryb3AsXG4gICAgICBfcHJvcHMka2VlcE1vdW50ZWQgPSBwcm9wcy5rZWVwTW91bnRlZCxcbiAgICAgIGtlZXBNb3VudGVkID0gX3Byb3BzJGtlZXBNb3VudGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRrZWVwTW91bnRlZCxcbiAgICAgIF9wcm9wcyRtYW5hZ2VyID0gcHJvcHMubWFuYWdlcixcbiAgICAgIG1hbmFnZXIgPSBfcHJvcHMkbWFuYWdlciA9PT0gdm9pZCAwID8gZGVmYXVsdE1hbmFnZXIgOiBfcHJvcHMkbWFuYWdlcixcbiAgICAgIG9uQmFja2Ryb3BDbGljayA9IHByb3BzLm9uQmFja2Ryb3BDbGljayxcbiAgICAgIG9uQ2xvc2UgPSBwcm9wcy5vbkNsb3NlLFxuICAgICAgb25Fc2NhcGVLZXlEb3duID0gcHJvcHMub25Fc2NhcGVLZXlEb3duLFxuICAgICAgb25SZW5kZXJlZCA9IHByb3BzLm9uUmVuZGVyZWQsXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJCYWNrZHJvcENvbXBvbmVudFwiLCBcIkJhY2tkcm9wUHJvcHNcIiwgXCJjaGlsZHJlblwiLCBcImNsb3NlQWZ0ZXJUcmFuc2l0aW9uXCIsIFwiY29udGFpbmVyXCIsIFwiZGlzYWJsZUF1dG9Gb2N1c1wiLCBcImRpc2FibGVCYWNrZHJvcENsaWNrXCIsIFwiZGlzYWJsZUVuZm9yY2VGb2N1c1wiLCBcImRpc2FibGVFc2NhcGVLZXlEb3duXCIsIFwiZGlzYWJsZVBvcnRhbFwiLCBcImRpc2FibGVSZXN0b3JlRm9jdXNcIiwgXCJkaXNhYmxlU2Nyb2xsTG9ja1wiLCBcImhpZGVCYWNrZHJvcFwiLCBcImtlZXBNb3VudGVkXCIsIFwibWFuYWdlclwiLCBcIm9uQmFja2Ryb3BDbGlja1wiLCBcIm9uQ2xvc2VcIiwgXCJvbkVzY2FwZUtleURvd25cIiwgXCJvblJlbmRlcmVkXCIsIFwib3BlblwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpLFxuICAgICAgZXhpdGVkID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0RXhpdGVkID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBtb2RhbCA9IFJlYWN0LnVzZVJlZih7fSk7XG4gIHZhciBtb3VudE5vZGVSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBtb2RhbFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIGhhbmRsZVJlZiA9IHVzZUZvcmtSZWYobW9kYWxSZWYsIHJlZik7XG4gIHZhciBoYXNUcmFuc2l0aW9uID0gZ2V0SGFzVHJhbnNpdGlvbihwcm9wcyk7XG5cbiAgdmFyIGdldERvYyA9IGZ1bmN0aW9uIGdldERvYygpIHtcbiAgICByZXR1cm4gb3duZXJEb2N1bWVudChtb3VudE5vZGVSZWYuY3VycmVudCk7XG4gIH07XG5cbiAgdmFyIGdldE1vZGFsID0gZnVuY3Rpb24gZ2V0TW9kYWwoKSB7XG4gICAgbW9kYWwuY3VycmVudC5tb2RhbFJlZiA9IG1vZGFsUmVmLmN1cnJlbnQ7XG4gICAgbW9kYWwuY3VycmVudC5tb3VudE5vZGUgPSBtb3VudE5vZGVSZWYuY3VycmVudDtcbiAgICByZXR1cm4gbW9kYWwuY3VycmVudDtcbiAgfTtcblxuICB2YXIgaGFuZGxlTW91bnRlZCA9IGZ1bmN0aW9uIGhhbmRsZU1vdW50ZWQoKSB7XG4gICAgbWFuYWdlci5tb3VudChnZXRNb2RhbCgpLCB7XG4gICAgICBkaXNhYmxlU2Nyb2xsTG9jazogZGlzYWJsZVNjcm9sbExvY2tcbiAgICB9KTsgLy8gRml4IGEgYnVnIG9uIENocm9tZSB3aGVyZSB0aGUgc2Nyb2xsIGlzbid0IGluaXRpYWxseSAwLlxuXG4gICAgbW9kYWxSZWYuY3VycmVudC5zY3JvbGxUb3AgPSAwO1xuICB9O1xuXG4gIHZhciBoYW5kbGVPcGVuID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc29sdmVkQ29udGFpbmVyID0gZ2V0Q29udGFpbmVyKGNvbnRhaW5lcikgfHwgZ2V0RG9jKCkuYm9keTtcbiAgICBtYW5hZ2VyLmFkZChnZXRNb2RhbCgpLCByZXNvbHZlZENvbnRhaW5lcik7IC8vIFRoZSBlbGVtZW50IHdhcyBhbHJlYWR5IG1vdW50ZWQuXG5cbiAgICBpZiAobW9kYWxSZWYuY3VycmVudCkge1xuICAgICAgaGFuZGxlTW91bnRlZCgpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBpc1RvcE1vZGFsID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtYW5hZ2VyLmlzVG9wTW9kYWwoZ2V0TW9kYWwoKSk7XG4gIH0sIFttYW5hZ2VyXSk7XG4gIHZhciBoYW5kbGVQb3J0YWxSZWYgPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgbW91bnROb2RlUmVmLmN1cnJlbnQgPSBub2RlO1xuXG4gICAgaWYgKCFub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9uUmVuZGVyZWQpIHtcbiAgICAgIG9uUmVuZGVyZWQoKTtcbiAgICB9XG5cbiAgICBpZiAob3BlbiAmJiBpc1RvcE1vZGFsKCkpIHtcbiAgICAgIGhhbmRsZU1vdW50ZWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJpYUhpZGRlbihtb2RhbFJlZi5jdXJyZW50LCB0cnVlKTtcbiAgICB9XG4gIH0pO1xuICB2YXIgaGFuZGxlQ2xvc2UgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgbWFuYWdlci5yZW1vdmUoZ2V0TW9kYWwoKSk7XG4gIH0sIFttYW5hZ2VyXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgfTtcbiAgfSwgW2hhbmRsZUNsb3NlXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIGhhbmRsZU9wZW4oKTtcbiAgICB9IGVsc2UgaWYgKCFoYXNUcmFuc2l0aW9uIHx8ICFjbG9zZUFmdGVyVHJhbnNpdGlvbikge1xuICAgICAgaGFuZGxlQ2xvc2UoKTtcbiAgICB9XG4gIH0sIFtvcGVuLCBoYW5kbGVDbG9zZSwgaGFzVHJhbnNpdGlvbiwgY2xvc2VBZnRlclRyYW5zaXRpb24sIGhhbmRsZU9wZW5dKTtcblxuICBpZiAoIWtlZXBNb3VudGVkICYmICFvcGVuICYmICghaGFzVHJhbnNpdGlvbiB8fCBleGl0ZWQpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgaGFuZGxlRW50ZXIgPSBmdW5jdGlvbiBoYW5kbGVFbnRlcigpIHtcbiAgICBzZXRFeGl0ZWQoZmFsc2UpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVFeGl0ZWQgPSBmdW5jdGlvbiBoYW5kbGVFeGl0ZWQoKSB7XG4gICAgc2V0RXhpdGVkKHRydWUpO1xuXG4gICAgaWYgKGNsb3NlQWZ0ZXJUcmFuc2l0aW9uKSB7XG4gICAgICBoYW5kbGVDbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlQmFja2Ryb3BDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUJhY2tkcm9wQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9uQmFja2Ryb3BDbGljaykge1xuICAgICAgb25CYWNrZHJvcENsaWNrKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoIWRpc2FibGVCYWNrZHJvcENsaWNrICYmIG9uQ2xvc2UpIHtcbiAgICAgIG9uQ2xvc2UoZXZlbnQsICdiYWNrZHJvcENsaWNrJyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgIC8vIFRoZSBoYW5kbGVyIGRvZXNuJ3QgdGFrZSBldmVudC5kZWZhdWx0UHJldmVudGVkIGludG8gYWNjb3VudDpcbiAgICAvL1xuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaXMgbWVhbnQgdG8gc3RvcCBkZWZhdWx0IGJlaGF2aW91cnMgbGlrZVxuICAgIC8vIGNsaWNraW5nIGEgY2hlY2tib3ggdG8gY2hlY2sgaXQsIGhpdHRpbmcgYSBidXR0b24gdG8gc3VibWl0IGEgZm9ybSxcbiAgICAvLyBhbmQgaGl0dGluZyBsZWZ0IGFycm93IHRvIG1vdmUgdGhlIGN1cnNvciBpbiBhIHRleHQgaW5wdXQgZXRjLlxuICAgIC8vIE9ubHkgc3BlY2lhbCBIVE1MIGVsZW1lbnRzIGhhdmUgdGhlc2UgZGVmYXVsdCBiZWhhdmlvcnMuXG4gICAgaWYgKGV2ZW50LmtleSAhPT0gJ0VzY2FwZScgfHwgIWlzVG9wTW9kYWwoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvbkVzY2FwZUtleURvd24pIHtcbiAgICAgIG9uRXNjYXBlS2V5RG93bihldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKCFkaXNhYmxlRXNjYXBlS2V5RG93bikge1xuICAgICAgLy8gU3dhbGxvdyB0aGUgZXZlbnQsIGluIGNhc2Ugc29tZW9uZSBpcyBsaXN0ZW5pbmcgZm9yIHRoZSBlc2NhcGUga2V5IG9uIHRoZSBib2R5LlxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICAgIG9uQ2xvc2UoZXZlbnQsICdlc2NhcGVLZXlEb3duJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBpbmxpbmVTdHlsZSA9IHN0eWxlcyh0aGVtZSB8fCB7XG4gICAgekluZGV4OiB6SW5kZXhcbiAgfSk7XG4gIHZhciBjaGlsZFByb3BzID0ge307XG5cbiAgaWYgKGNoaWxkcmVuLnByb3BzLnRhYkluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICBjaGlsZFByb3BzLnRhYkluZGV4ID0gY2hpbGRyZW4ucHJvcHMudGFiSW5kZXggfHwgJy0xJztcbiAgfSAvLyBJdCdzIGEgVHJhbnNpdGlvbiBsaWtlIGNvbXBvbmVudFxuXG5cbiAgaWYgKGhhc1RyYW5zaXRpb24pIHtcbiAgICBjaGlsZFByb3BzLm9uRW50ZXIgPSBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oaGFuZGxlRW50ZXIsIGNoaWxkcmVuLnByb3BzLm9uRW50ZXIpO1xuICAgIGNoaWxkUHJvcHMub25FeGl0ZWQgPSBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oaGFuZGxlRXhpdGVkLCBjaGlsZHJlbi5wcm9wcy5vbkV4aXRlZCk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUG9ydGFsLCB7XG4gICAgcmVmOiBoYW5kbGVQb3J0YWxSZWYsXG4gICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgZGlzYWJsZVBvcnRhbDogZGlzYWJsZVBvcnRhbFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBoYW5kbGVSZWYsXG4gICAgb25LZXlEb3duOiBoYW5kbGVLZXlEb3duLFxuICAgIHJvbGU6IFwicHJlc2VudGF0aW9uXCJcbiAgfSwgb3RoZXIsIHtcbiAgICBzdHlsZTogX2V4dGVuZHMoe30sIGlubGluZVN0eWxlLnJvb3QsICFvcGVuICYmIGV4aXRlZCA/IGlubGluZVN0eWxlLmhpZGRlbiA6IHt9LCBvdGhlci5zdHlsZSlcbiAgfSksIGhpZGVCYWNrZHJvcCA/IG51bGwgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCYWNrZHJvcENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIG9wZW46IG9wZW4sXG4gICAgb25DbGljazogaGFuZGxlQmFja2Ryb3BDbGlja1xuICB9LCBCYWNrZHJvcFByb3BzKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYXBGb2N1cywge1xuICAgIGRpc2FibGVFbmZvcmNlRm9jdXM6IGRpc2FibGVFbmZvcmNlRm9jdXMsXG4gICAgZGlzYWJsZUF1dG9Gb2N1czogZGlzYWJsZUF1dG9Gb2N1cyxcbiAgICBkaXNhYmxlUmVzdG9yZUZvY3VzOiBkaXNhYmxlUmVzdG9yZUZvY3VzLFxuICAgIGdldERvYzogZ2V0RG9jLFxuICAgIGlzRW5hYmxlZDogaXNUb3BNb2RhbCxcbiAgICBvcGVuOiBvcGVuXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIGNoaWxkUHJvcHMpKSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBNb2RhbC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBBIGJhY2tkcm9wIGNvbXBvbmVudC4gVGhpcyBwcm9wIGVuYWJsZXMgY3VzdG9tIGJhY2tkcm9wIHJlbmRlcmluZy5cbiAgICovXG4gIEJhY2tkcm9wQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIFtgQmFja2Ryb3BgXSgvYXBpL2JhY2tkcm9wLykgZWxlbWVudC5cbiAgICovXG4gIEJhY2tkcm9wUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEEgc2luZ2xlIGNoaWxkIGNvbnRlbnQgZWxlbWVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBlbGVtZW50QWNjZXB0aW5nUmVmLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFdoZW4gc2V0IHRvIHRydWUgdGhlIE1vZGFsIHdhaXRzIHVudGlsIGEgbmVzdGVkIFRyYW5zaXRpb24gaXMgY29tcGxldGVkIGJlZm9yZSBjbG9zaW5nLlxuICAgKi9cbiAgY2xvc2VBZnRlclRyYW5zaXRpb246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBIEhUTUwgZWxlbWVudCwgY29tcG9uZW50IGluc3RhbmNlLCBvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWl0aGVyLlxuICAgKiBUaGUgYGNvbnRhaW5lcmAgd2lsbCBoYXZlIHRoZSBwb3J0YWwgY2hpbGRyZW4gYXBwZW5kZWQgdG8gaXQuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGl0IHVzZXMgdGhlIGJvZHkgb2YgdGhlIHRvcC1sZXZlbCBkb2N1bWVudCBvYmplY3QsXG4gICAqIHNvIGl0J3Mgc2ltcGx5IGBkb2N1bWVudC5ib2R5YCBtb3N0IG9mIHRoZSB0aW1lLlxuICAgKi9cbiAgY29udGFpbmVyOiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAub25lT2ZUeXBlKFtIVE1MRWxlbWVudFR5cGUsIFByb3BUeXBlcy5pbnN0YW5jZU9mKFJlYWN0LkNvbXBvbmVudCksIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIG1vZGFsIHdpbGwgbm90IGF1dG9tYXRpY2FsbHkgc2hpZnQgZm9jdXMgdG8gaXRzZWxmIHdoZW4gaXQgb3BlbnMsIGFuZFxuICAgKiByZXBsYWNlIGl0IHRvIHRoZSBsYXN0IGZvY3VzZWQgZWxlbWVudCB3aGVuIGl0IGNsb3Nlcy5cbiAgICogVGhpcyBhbHNvIHdvcmtzIGNvcnJlY3RseSB3aXRoIGFueSBtb2RhbCBjaGlsZHJlbiB0aGF0IGhhdmUgdGhlIGBkaXNhYmxlQXV0b0ZvY3VzYCBwcm9wLlxuICAgKlxuICAgKiBHZW5lcmFsbHkgdGhpcyBzaG91bGQgbmV2ZXIgYmUgc2V0IHRvIGB0cnVlYCBhcyBpdCBtYWtlcyB0aGUgbW9kYWwgbGVzc1xuICAgKiBhY2Nlc3NpYmxlIHRvIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsIGxpa2Ugc2NyZWVuIHJlYWRlcnMuXG4gICAqL1xuICBkaXNhYmxlQXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBjbGlja2luZyB0aGUgYmFja2Ryb3Agd2lsbCBub3QgZmlyZSBgb25DbG9zZWAuXG4gICAqL1xuICBkaXNhYmxlQmFja2Ryb3BDbGljazogZGVwcmVjYXRlZFByb3BUeXBlKFByb3BUeXBlcy5ib29sLCAnVXNlIHRoZSBvbkNsb3NlIHByb3Agd2l0aCB0aGUgYHJlYXNvbmAgYXJndW1lbnQgdG8gZmlsdGVyIHRoZSBgYmFja2Ryb3BDbGlja2AgZXZlbnRzLicpLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBtb2RhbCB3aWxsIG5vdCBwcmV2ZW50IGZvY3VzIGZyb20gbGVhdmluZyB0aGUgbW9kYWwgd2hpbGUgb3Blbi5cbiAgICpcbiAgICogR2VuZXJhbGx5IHRoaXMgc2hvdWxkIG5ldmVyIGJlIHNldCB0byBgdHJ1ZWAgYXMgaXQgbWFrZXMgdGhlIG1vZGFsIGxlc3NcbiAgICogYWNjZXNzaWJsZSB0byBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCBsaWtlIHNjcmVlbiByZWFkZXJzLlxuICAgKi9cbiAgZGlzYWJsZUVuZm9yY2VGb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgaGl0dGluZyBlc2NhcGUgd2lsbCBub3QgZmlyZSBgb25DbG9zZWAuXG4gICAqL1xuICBkaXNhYmxlRXNjYXBlS2V5RG93bjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIHBvcnRhbCBiZWhhdmlvci5cbiAgICogVGhlIGNoaWxkcmVuIHN0YXkgd2l0aGluIGl0J3MgcGFyZW50IERPTSBoaWVyYXJjaHkuXG4gICAqL1xuICBkaXNhYmxlUG9ydGFsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbW9kYWwgd2lsbCBub3QgcmVzdG9yZSBmb2N1cyB0byBwcmV2aW91c2x5IGZvY3VzZWQgZWxlbWVudCBvbmNlXG4gICAqIG1vZGFsIGlzIGhpZGRlbi5cbiAgICovXG4gIGRpc2FibGVSZXN0b3JlRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRoZSBzY3JvbGwgbG9jayBiZWhhdmlvci5cbiAgICovXG4gIGRpc2FibGVTY3JvbGxMb2NrOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYmFja2Ryb3AgaXMgbm90IHJlbmRlcmVkLlxuICAgKi9cbiAgaGlkZUJhY2tkcm9wOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQWx3YXlzIGtlZXAgdGhlIGNoaWxkcmVuIGluIHRoZSBET00uXG4gICAqIFRoaXMgcHJvcCBjYW4gYmUgdXNlZnVsIGluIFNFTyBzaXR1YXRpb24gb3JcbiAgICogd2hlbiB5b3Ugd2FudCB0byBtYXhpbWl6ZSB0aGUgcmVzcG9uc2l2ZW5lc3Mgb2YgdGhlIE1vZGFsLlxuICAgKi9cbiAga2VlcE1vdW50ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBtYW5hZ2VyOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBiYWNrZHJvcCBpcyBjbGlja2VkLlxuICAgKi9cbiAgb25CYWNrZHJvcENsaWNrOiBkZXByZWNhdGVkUHJvcFR5cGUoUHJvcFR5cGVzLmZ1bmMsICdVc2UgdGhlIG9uQ2xvc2UgcHJvcCB3aXRoIHRoZSBgcmVhc29uYCBhcmd1bWVudCB0byBoYW5kbGUgdGhlIGBiYWNrZHJvcENsaWNrYCBldmVudHMuJyksXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBjbG9zZWQuXG4gICAqIFRoZSBgcmVhc29uYCBwYXJhbWV0ZXIgY2FuIG9wdGlvbmFsbHkgYmUgdXNlZCB0byBjb250cm9sIHRoZSByZXNwb25zZSB0byBgb25DbG9zZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiBDYW4gYmU6IGBcImVzY2FwZUtleURvd25cImAsIGBcImJhY2tkcm9wQ2xpY2tcImAuXG4gICAqL1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgZXNjYXBlIGtleSBpcyBwcmVzc2VkLFxuICAgKiBgZGlzYWJsZUVzY2FwZUtleURvd25gIGlzIGZhbHNlIGFuZCB0aGUgbW9kYWwgaXMgaW4gZm9jdXMuXG4gICAqL1xuICBvbkVzY2FwZUtleURvd246IGRlcHJlY2F0ZWRQcm9wVHlwZShQcm9wVHlwZXMuZnVuYywgJ1VzZSB0aGUgb25DbG9zZSBwcm9wIHdpdGggdGhlIGByZWFzb25gIGFyZ3VtZW50IHRvIGhhbmRsZSB0aGUgYGVzY2FwZUtleURvd25gIGV2ZW50cy4nKSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgb25jZSB0aGUgY2hpbGRyZW4gaGFzIGJlZW4gbW91bnRlZCBpbnRvIHRoZSBgY29udGFpbmVyYC5cbiAgICogSXQgc2lnbmFscyB0aGF0IHRoZSBgb3Blbj17dHJ1ZX1gIHByb3AgdG9vayBlZmZlY3QuXG4gICAqXG4gICAqIFRoaXMgcHJvcCB3aWxsIGJlIHJlbW92ZWQgaW4gdjUsIHRoZSByZWYgY2FuIGJlIHVzZWQgaW5zdGVhZC5cbiAgICovXG4gIG9uUmVuZGVyZWQ6IGRlcHJlY2F0ZWRQcm9wVHlwZShQcm9wVHlwZXMuZnVuYywgJ1VzZSB0aGUgcmVmIGluc3RlYWQuJyksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIG1vZGFsIGlzIG9wZW4uXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgTW9kYWw7IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheVwiO1xuaW1wb3J0IGdldFNjcm9sbGJhclNpemUgZnJvbSAnLi4vdXRpbHMvZ2V0U2Nyb2xsYmFyU2l6ZSc7XG5pbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICcuLi91dGlscy9vd25lckRvY3VtZW50JztcbmltcG9ydCBvd25lcldpbmRvdyBmcm9tICcuLi91dGlscy9vd25lcldpbmRvdyc7IC8vIElzIGEgdmVydGljYWwgc2Nyb2xsYmFyIGRpc3BsYXllZD9cblxuZnVuY3Rpb24gaXNPdmVyZmxvd2luZyhjb250YWluZXIpIHtcbiAgdmFyIGRvYyA9IG93bmVyRG9jdW1lbnQoY29udGFpbmVyKTtcblxuICBpZiAoZG9jLmJvZHkgPT09IGNvbnRhaW5lcikge1xuICAgIHJldHVybiBvd25lcldpbmRvdyhkb2MpLmlubmVyV2lkdGggPiBkb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgPiBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJpYUhpZGRlbihub2RlLCBzaG93KSB7XG4gIGlmIChzaG93KSB7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgfSBlbHNlIHtcbiAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYWRkaW5nUmlnaHQobm9kZSkge1xuICByZXR1cm4gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSlbJ3BhZGRpbmctcmlnaHQnXSwgMTApIHx8IDA7XG59XG5cbmZ1bmN0aW9uIGFyaWFIaWRkZW5TaWJsaW5ncyhjb250YWluZXIsIG1vdW50Tm9kZSwgY3VycmVudE5vZGUpIHtcbiAgdmFyIG5vZGVzVG9FeGNsdWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBbXTtcbiAgdmFyIHNob3cgPSBhcmd1bWVudHMubGVuZ3RoID4gNCA/IGFyZ3VtZW50c1s0XSA6IHVuZGVmaW5lZDtcbiAgdmFyIGJsYWNrbGlzdCA9IFttb3VudE5vZGUsIGN1cnJlbnROb2RlXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KG5vZGVzVG9FeGNsdWRlKSk7XG4gIHZhciBibGFja2xpc3RUYWdOYW1lcyA9IFsnVEVNUExBVEUnLCAnU0NSSVBUJywgJ1NUWUxFJ107XG4gIFtdLmZvckVhY2guY2FsbChjb250YWluZXIuY2hpbGRyZW4sIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgJiYgYmxhY2tsaXN0LmluZGV4T2Yobm9kZSkgPT09IC0xICYmIGJsYWNrbGlzdFRhZ05hbWVzLmluZGV4T2Yobm9kZS50YWdOYW1lKSA9PT0gLTEpIHtcbiAgICAgIGFyaWFIaWRkZW4obm9kZSwgc2hvdyk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4T2YoY29udGFpbmVySW5mbywgY2FsbGJhY2spIHtcbiAgdmFyIGlkeCA9IC0xO1xuICBjb250YWluZXJJbmZvLnNvbWUoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgaWYgKGNhbGxiYWNrKGl0ZW0pKSB7XG4gICAgICBpZHggPSBpbmRleDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gIHJldHVybiBpZHg7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNvbnRhaW5lcihjb250YWluZXJJbmZvLCBwcm9wcykge1xuICB2YXIgcmVzdG9yZVN0eWxlID0gW107XG4gIHZhciByZXN0b3JlUGFkZGluZ3MgPSBbXTtcbiAgdmFyIGNvbnRhaW5lciA9IGNvbnRhaW5lckluZm8uY29udGFpbmVyO1xuICB2YXIgZml4ZWROb2RlcztcblxuICBpZiAoIXByb3BzLmRpc2FibGVTY3JvbGxMb2NrKSB7XG4gICAgaWYgKGlzT3ZlcmZsb3dpbmcoY29udGFpbmVyKSkge1xuICAgICAgLy8gQ29tcHV0ZSB0aGUgc2l6ZSBiZWZvcmUgYXBwbHlpbmcgb3ZlcmZsb3cgaGlkZGVuIHRvIGF2b2lkIGFueSBzY3JvbGwganVtcHMuXG4gICAgICB2YXIgc2Nyb2xsYmFyU2l6ZSA9IGdldFNjcm9sbGJhclNpemUoKTtcbiAgICAgIHJlc3RvcmVTdHlsZS5wdXNoKHtcbiAgICAgICAgdmFsdWU6IGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nUmlnaHQsXG4gICAgICAgIGtleTogJ3BhZGRpbmctcmlnaHQnLFxuICAgICAgICBlbDogY29udGFpbmVyXG4gICAgICB9KTsgLy8gVXNlIGNvbXB1dGVkIHN0eWxlLCBoZXJlIHRvIGdldCB0aGUgcmVhbCBwYWRkaW5nIHRvIGFkZCBvdXIgc2Nyb2xsYmFyIHdpZHRoLlxuXG4gICAgICBjb250YWluZXIuc3R5bGVbJ3BhZGRpbmctcmlnaHQnXSA9IFwiXCIuY29uY2F0KGdldFBhZGRpbmdSaWdodChjb250YWluZXIpICsgc2Nyb2xsYmFyU2l6ZSwgXCJweFwiKTsgLy8gLm11aS1maXhlZCBpcyBhIGdsb2JhbCBoZWxwZXIuXG5cbiAgICAgIGZpeGVkTm9kZXMgPSBvd25lckRvY3VtZW50KGNvbnRhaW5lcikucXVlcnlTZWxlY3RvckFsbCgnLm11aS1maXhlZCcpO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGZpeGVkTm9kZXMsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJlc3RvcmVQYWRkaW5ncy5wdXNoKG5vZGUuc3R5bGUucGFkZGluZ1JpZ2h0KTtcbiAgICAgICAgbm9kZS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiLmNvbmNhdChnZXRQYWRkaW5nUmlnaHQobm9kZSkgKyBzY3JvbGxiYXJTaXplLCBcInB4XCIpO1xuICAgICAgfSk7XG4gICAgfSAvLyBJbXByb3ZlIEdhdHNieSBzdXBwb3J0XG4gICAgLy8gaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvZm9yY2UtdmVydGljYWwtc2Nyb2xsYmFyL1xuXG5cbiAgICB2YXIgcGFyZW50ID0gY29udGFpbmVyLnBhcmVudEVsZW1lbnQ7XG4gICAgdmFyIHNjcm9sbENvbnRhaW5lciA9IHBhcmVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudClbJ292ZXJmbG93LXknXSA9PT0gJ3Njcm9sbCcgPyBwYXJlbnQgOiBjb250YWluZXI7IC8vIEJsb2NrIHRoZSBzY3JvbGwgZXZlbiBpZiBubyBzY3JvbGxiYXIgaXMgdmlzaWJsZSB0byBhY2NvdW50IGZvciBtb2JpbGUga2V5Ym9hcmRcbiAgICAvLyBzY3JlZW5zaXplIHNocmluay5cblxuICAgIHJlc3RvcmVTdHlsZS5wdXNoKHtcbiAgICAgIHZhbHVlOiBzY3JvbGxDb250YWluZXIuc3R5bGUub3ZlcmZsb3csXG4gICAgICBrZXk6ICdvdmVyZmxvdycsXG4gICAgICBlbDogc2Nyb2xsQ29udGFpbmVyXG4gICAgfSk7XG4gICAgc2Nyb2xsQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gIH1cblxuICB2YXIgcmVzdG9yZSA9IGZ1bmN0aW9uIHJlc3RvcmUoKSB7XG4gICAgaWYgKGZpeGVkTm9kZXMpIHtcbiAgICAgIFtdLmZvckVhY2guY2FsbChmaXhlZE5vZGVzLCBmdW5jdGlvbiAobm9kZSwgaSkge1xuICAgICAgICBpZiAocmVzdG9yZVBhZGRpbmdzW2ldKSB7XG4gICAgICAgICAgbm9kZS5zdHlsZS5wYWRkaW5nUmlnaHQgPSByZXN0b3JlUGFkZGluZ3NbaV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1yaWdodCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXN0b3JlU3R5bGUuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgICAgICBlbCA9IF9yZWYuZWwsXG4gICAgICAgICAga2V5ID0gX3JlZi5rZXk7XG5cbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHJlc3RvcmU7XG59XG5cbmZ1bmN0aW9uIGdldEhpZGRlblNpYmxpbmdzKGNvbnRhaW5lcikge1xuICB2YXIgaGlkZGVuU2libGluZ3MgPSBbXTtcbiAgW10uZm9yRWFjaC5jYWxsKGNvbnRhaW5lci5jaGlsZHJlbiwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykgPT09ICd0cnVlJykge1xuICAgICAgaGlkZGVuU2libGluZ3MucHVzaChub2RlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaGlkZGVuU2libGluZ3M7XG59XG4vKipcbiAqIEBpZ25vcmUgLSBkbyBub3QgZG9jdW1lbnQuXG4gKlxuICogUHJvcGVyIHN0YXRlIG1hbmFnZW1lbnQgZm9yIGNvbnRhaW5lcnMgYW5kIHRoZSBtb2RhbHMgaW4gdGhvc2UgY29udGFpbmVycy5cbiAqIFNpbXBsaWZpZWQsIGJ1dCBpbnNwaXJlZCBieSByZWFjdC1vdmVybGF5J3MgTW9kYWxNYW5hZ2VyIGNsYXNzLlxuICogVXNlZCBieSB0aGUgTW9kYWwgdG8gZW5zdXJlIHByb3BlciBzdHlsaW5nIG9mIGNvbnRhaW5lcnMuXG4gKi9cblxuXG52YXIgTW9kYWxNYW5hZ2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTW9kYWxNYW5hZ2VyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb2RhbE1hbmFnZXIpO1xuXG4gICAgLy8gdGhpcy5tb2RhbHNbbW9kYWxJbmRleF0gPSBtb2RhbFxuICAgIHRoaXMubW9kYWxzID0gW107IC8vIHRoaXMuY29udGFpbmVyc1tjb250YWluZXJJbmRleF0gPSB7XG4gICAgLy8gICBtb2RhbHM6IFtdLFxuICAgIC8vICAgY29udGFpbmVyLFxuICAgIC8vICAgcmVzdG9yZTogbnVsbCxcbiAgICAvLyB9XG5cbiAgICB0aGlzLmNvbnRhaW5lcnMgPSBbXTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNb2RhbE1hbmFnZXIsIFt7XG4gICAga2V5OiBcImFkZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQobW9kYWwsIGNvbnRhaW5lcikge1xuICAgICAgdmFyIG1vZGFsSW5kZXggPSB0aGlzLm1vZGFscy5pbmRleE9mKG1vZGFsKTtcblxuICAgICAgaWYgKG1vZGFsSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBtb2RhbEluZGV4O1xuICAgICAgfVxuXG4gICAgICBtb2RhbEluZGV4ID0gdGhpcy5tb2RhbHMubGVuZ3RoO1xuICAgICAgdGhpcy5tb2RhbHMucHVzaChtb2RhbCk7IC8vIElmIHRoZSBtb2RhbCB3ZSBhcmUgYWRkaW5nIGlzIGFscmVhZHkgaW4gdGhlIERPTS5cblxuICAgICAgaWYgKG1vZGFsLm1vZGFsUmVmKSB7XG4gICAgICAgIGFyaWFIaWRkZW4obW9kYWwubW9kYWxSZWYsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGhpZGRlblNpYmxpbmdOb2RlcyA9IGdldEhpZGRlblNpYmxpbmdzKGNvbnRhaW5lcik7XG4gICAgICBhcmlhSGlkZGVuU2libGluZ3MoY29udGFpbmVyLCBtb2RhbC5tb3VudE5vZGUsIG1vZGFsLm1vZGFsUmVmLCBoaWRkZW5TaWJsaW5nTm9kZXMsIHRydWUpO1xuICAgICAgdmFyIGNvbnRhaW5lckluZGV4ID0gZmluZEluZGV4T2YodGhpcy5jb250YWluZXJzLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5jb250YWluZXIgPT09IGNvbnRhaW5lcjtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY29udGFpbmVySW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyc1tjb250YWluZXJJbmRleF0ubW9kYWxzLnB1c2gobW9kYWwpO1xuICAgICAgICByZXR1cm4gbW9kYWxJbmRleDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250YWluZXJzLnB1c2goe1xuICAgICAgICBtb2RhbHM6IFttb2RhbF0sXG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgICByZXN0b3JlOiBudWxsLFxuICAgICAgICBoaWRkZW5TaWJsaW5nTm9kZXM6IGhpZGRlblNpYmxpbmdOb2Rlc1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbW9kYWxJbmRleDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbW91bnQobW9kYWwsIHByb3BzKSB7XG4gICAgICB2YXIgY29udGFpbmVySW5kZXggPSBmaW5kSW5kZXhPZih0aGlzLmNvbnRhaW5lcnMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLm1vZGFscy5pbmRleE9mKG1vZGFsKSAhPT0gLTE7XG4gICAgICB9KTtcbiAgICAgIHZhciBjb250YWluZXJJbmZvID0gdGhpcy5jb250YWluZXJzW2NvbnRhaW5lckluZGV4XTtcblxuICAgICAgaWYgKCFjb250YWluZXJJbmZvLnJlc3RvcmUpIHtcbiAgICAgICAgY29udGFpbmVySW5mby5yZXN0b3JlID0gaGFuZGxlQ29udGFpbmVyKGNvbnRhaW5lckluZm8sIHByb3BzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShtb2RhbCkge1xuICAgICAgdmFyIG1vZGFsSW5kZXggPSB0aGlzLm1vZGFscy5pbmRleE9mKG1vZGFsKTtcblxuICAgICAgaWYgKG1vZGFsSW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBtb2RhbEluZGV4O1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGFpbmVySW5kZXggPSBmaW5kSW5kZXhPZih0aGlzLmNvbnRhaW5lcnMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLm1vZGFscy5pbmRleE9mKG1vZGFsKSAhPT0gLTE7XG4gICAgICB9KTtcbiAgICAgIHZhciBjb250YWluZXJJbmZvID0gdGhpcy5jb250YWluZXJzW2NvbnRhaW5lckluZGV4XTtcbiAgICAgIGNvbnRhaW5lckluZm8ubW9kYWxzLnNwbGljZShjb250YWluZXJJbmZvLm1vZGFscy5pbmRleE9mKG1vZGFsKSwgMSk7XG4gICAgICB0aGlzLm1vZGFscy5zcGxpY2UobW9kYWxJbmRleCwgMSk7IC8vIElmIHRoYXQgd2FzIHRoZSBsYXN0IG1vZGFsIGluIGEgY29udGFpbmVyLCBjbGVhbiB1cCB0aGUgY29udGFpbmVyLlxuXG4gICAgICBpZiAoY29udGFpbmVySW5mby5tb2RhbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIFRoZSBtb2RhbCBtaWdodCBiZSBjbG9zZWQgYmVmb3JlIGl0IGhhZCB0aGUgY2hhbmNlIHRvIGJlIG1vdW50ZWQgaW4gdGhlIERPTS5cbiAgICAgICAgaWYgKGNvbnRhaW5lckluZm8ucmVzdG9yZSkge1xuICAgICAgICAgIGNvbnRhaW5lckluZm8ucmVzdG9yZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vZGFsLm1vZGFsUmVmKSB7XG4gICAgICAgICAgLy8gSW4gY2FzZSB0aGUgbW9kYWwgd2Fzbid0IGluIHRoZSBET00geWV0LlxuICAgICAgICAgIGFyaWFIaWRkZW4obW9kYWwubW9kYWxSZWYsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJpYUhpZGRlblNpYmxpbmdzKGNvbnRhaW5lckluZm8uY29udGFpbmVyLCBtb2RhbC5tb3VudE5vZGUsIG1vZGFsLm1vZGFsUmVmLCBjb250YWluZXJJbmZvLmhpZGRlblNpYmxpbmdOb2RlcywgZmFsc2UpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lcnMuc3BsaWNlKGNvbnRhaW5lckluZGV4LCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE90aGVyd2lzZSBtYWtlIHN1cmUgdGhlIG5leHQgdG9wIG1vZGFsIGlzIHZpc2libGUgdG8gYSBzY3JlZW4gcmVhZGVyLlxuICAgICAgICB2YXIgbmV4dFRvcCA9IGNvbnRhaW5lckluZm8ubW9kYWxzW2NvbnRhaW5lckluZm8ubW9kYWxzLmxlbmd0aCAtIDFdOyAvLyBhcyBzb29uIGFzIGEgbW9kYWwgaXMgYWRkaW5nIGl0cyBtb2RhbFJlZiBpcyB1bmRlZmluZWQuIGl0IGNhbid0IHNldFxuICAgICAgICAvLyBhcmlhLWhpZGRlbiBiZWNhdXNlIHRoZSBkb20gZWxlbWVudCBkb2Vzbid0IGV4aXN0IGVpdGhlclxuICAgICAgICAvLyB3aGVuIG1vZGFsIHdhcyB1bm1vdW50ZWQgYmVmb3JlIG1vZGFsUmVmIGdldHMgbnVsbFxuXG4gICAgICAgIGlmIChuZXh0VG9wLm1vZGFsUmVmKSB7XG4gICAgICAgICAgYXJpYUhpZGRlbihuZXh0VG9wLm1vZGFsUmVmLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1vZGFsSW5kZXg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzVG9wTW9kYWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNUb3BNb2RhbChtb2RhbCkge1xuICAgICAgcmV0dXJuIHRoaXMubW9kYWxzLmxlbmd0aCA+IDAgJiYgdGhpcy5tb2RhbHNbdGhpcy5tb2RhbHMubGVuZ3RoIC0gMV0gPT09IG1vZGFsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNb2RhbE1hbmFnZXI7XG59KCk7XG5cbmV4cG9ydCB7IE1vZGFsTWFuYWdlciBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7XG4gICAgekluZGV4OiAtMSxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjUpJyxcbiAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGludmlzaWJsZT17dHJ1ZX1gLiAqL1xuICBpbnZpc2libGU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgfVxufTtcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG52YXIgU2ltcGxlQmFja2Ryb3AgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBTaW1wbGVCYWNrZHJvcChwcm9wcywgcmVmKSB7XG4gIHZhciBfcHJvcHMkaW52aXNpYmxlID0gcHJvcHMuaW52aXNpYmxlLFxuICAgICAgaW52aXNpYmxlID0gX3Byb3BzJGludmlzaWJsZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkaW52aXNpYmxlLFxuICAgICAgb3BlbiA9IHByb3BzLm9wZW4sXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiaW52aXNpYmxlXCIsIFwib3BlblwiXSk7XG5cbiAgcmV0dXJuIG9wZW4gPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyLCB7XG4gICAgc3R5bGU6IF9leHRlbmRzKHt9LCBzdHlsZXMucm9vdCwgaW52aXNpYmxlID8gc3R5bGVzLmludmlzaWJsZSA6IHt9LCBvdGhlci5zdHlsZSlcbiAgfSkpIDogbnVsbDtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gU2ltcGxlQmFja2Ryb3AucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYmFja2Ryb3AgaXMgaW52aXNpYmxlLlxuICAgKiBJdCBjYW4gYmUgdXNlZCB3aGVuIHJlbmRlcmluZyBhIHBvcG92ZXIgb3IgYSBjdXN0b20gc2VsZWN0IGNvbXBvbmVudC5cbiAgICovXG4gIGludmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGJhY2tkcm9wIGlzIG9wZW4uXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgU2ltcGxlQmFja2Ryb3A7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vTW9kYWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RhbE1hbmFnZXIgfSBmcm9tICcuL01vZGFsTWFuYWdlcic7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBOYXRpdmVTZWxlY3RJbnB1dCBmcm9tICcuL05hdGl2ZVNlbGVjdElucHV0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBmb3JtQ29udHJvbFN0YXRlIGZyb20gJy4uL0Zvcm1Db250cm9sL2Zvcm1Db250cm9sU3RhdGUnO1xuaW1wb3J0IHVzZUZvcm1Db250cm9sIGZyb20gJy4uL0Zvcm1Db250cm9sL3VzZUZvcm1Db250cm9sJztcbmltcG9ydCBBcnJvd0Ryb3BEb3duSWNvbiBmcm9tICcuLi9pbnRlcm5hbC9zdmctaWNvbnMvQXJyb3dEcm9wRG93bic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vSW5wdXQnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgc2VsZWN0IGNvbXBvbmVudCBgcm9vdGAgY2xhc3MuICovXG4gICAgcm9vdDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgc2VsZWN0IGNvbXBvbmVudCBgc2VsZWN0YCBjbGFzcy4gKi9cbiAgICBzZWxlY3Q6IHtcbiAgICAgICctbW96LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgICAvLyBSZXNldFxuICAgICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAgIC8vIFJlc2V0XG4gICAgICAvLyBXaGVuIGludGVyYWN0aW5nIHF1aWNrbHksIHRoZSB0ZXh0IGNhbiBlbmQgdXAgc2VsZWN0ZWQuXG4gICAgICAvLyBOYXRpdmUgc2VsZWN0IGNhbid0IGJlIHNlbGVjdGVkIGVpdGhlci5cbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIGJvcmRlclJhZGl1czogMCxcbiAgICAgIC8vIFJlc2V0XG4gICAgICBtaW5XaWR0aDogMTYsXG4gICAgICAvLyBTbyBpdCBkb2Vzbid0IGNvbGxhcHNlLlxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgLy8gU2hvdyB0aGF0IGl0J3Mgbm90IGFuIHRleHQgaW5wdXRcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyAncmdiYSgwLCAwLCAwLCAwLjA1KScgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KScsXG4gICAgICAgIGJvcmRlclJhZGl1czogMCAvLyBSZXNldCBDaHJvbWUgc3R5bGVcblxuICAgICAgfSxcbiAgICAgIC8vIFJlbW92ZSBJRSAxMSBhcnJvd1xuICAgICAgJyY6Oi1tcy1leHBhbmQnOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBjdXJzb3I6ICdkZWZhdWx0J1xuICAgICAgfSxcbiAgICAgICcmW211bHRpcGxlXSc6IHtcbiAgICAgICAgaGVpZ2h0OiAnYXV0bydcbiAgICAgIH0sXG4gICAgICAnJjpub3QoW211bHRpcGxlXSkgb3B0aW9uLCAmOm5vdChbbXVsdGlwbGVdKSBvcHRncm91cCc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXJcbiAgICAgIH0sXG4gICAgICAnJiYnOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogMjRcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHNlbGVjdCBjb21wb25lbnQgaWYgYHZhcmlhbnQ9XCJmaWxsZWRcImAuICovXG4gICAgZmlsbGVkOiB7XG4gICAgICAnJiYnOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogMzJcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHNlbGVjdCBjb21wb25lbnQgaWYgYHZhcmlhbnQ9XCJvdXRsaW5lZFwiYC4gKi9cbiAgICBvdXRsaW5lZDoge1xuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXG4gICAgICAnJiYnOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogMzJcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHNlbGVjdCBjb21wb25lbnQgYHNlbGVjdE1lbnVgIGNsYXNzLiAqL1xuICAgIHNlbGVjdE1lbnU6IHtcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgLy8gUmVzZXRzIGZvciBtdWx0cGlsZSBzZWxlY3Qgd2l0aCBjaGlwc1xuICAgICAgbWluSGVpZ2h0OiAnMS4xODc2ZW0nLFxuICAgICAgLy8gUmVxdWlyZWQgZm9yIHNlbGVjdFxcdGV4dC1maWVsZCBoZWlnaHQgY29uc2lzdGVuY3lcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgfSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSBzZWxlY3QgY29tcG9uZW50IGBkaXNhYmxlZGAgY2xhc3MuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGljb24gY29tcG9uZW50LiAqL1xuICAgIGljb246IHtcbiAgICAgIC8vIFdlIHVzZSBhIHBvc2l0aW9uIGFic29sdXRlIG92ZXIgYSBmbGV4Ym94IGluIG9yZGVyIHRvIGZvcndhcmQgdGhlIHBvaW50ZXIgZXZlbnRzXG4gICAgICAvLyB0byB0aGUgaW5wdXQgYW5kIHRvIHN1cHBvcnQgd3JhcHBpbmcgdGFncy4uXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgdG9wOiAnY2FsYyg1MCUgLSAxMnB4KScsXG4gICAgICAvLyBDZW50ZXIgdmVydGljYWxseVxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgLy8gRG9uJ3QgYmxvY2sgcG9pbnRlciBldmVudHMgb24gdGhlIHNlbGVjdCB1bmRlciB0aGUgaWNvbi5cbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5hY3RpdmUsXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmRpc2FibGVkXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBpY29uIGNvbXBvbmVudCBpZiB0aGUgcG9wdXAgaXMgb3Blbi4gKi9cbiAgICBpY29uT3Blbjoge1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDE4MGRlZyknXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBpY29uIGNvbXBvbmVudCBpZiBgdmFyaWFudD1cImZpbGxlZFwiYC4gKi9cbiAgICBpY29uRmlsbGVkOiB7XG4gICAgICByaWdodDogN1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaWNvbiBjb21wb25lbnQgaWYgYHZhcmlhbnQ9XCJvdXRsaW5lZFwiYC4gKi9cbiAgICBpY29uT3V0bGluZWQ6IHtcbiAgICAgIHJpZ2h0OiA3XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSB1bmRlcmx5aW5nIG5hdGl2ZSBpbnB1dCBjb21wb25lbnQuICovXG4gICAgbmF0aXZlSW5wdXQ6IHtcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfVxuICB9O1xufTtcbnZhciBkZWZhdWx0SW5wdXQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgbnVsbCk7XG4vKipcbiAqIEFuIGFsdGVybmF0aXZlIHRvIGA8U2VsZWN0IG5hdGl2ZSAvPmAgd2l0aCBhIG11Y2ggc21hbGxlciBidW5kbGUgc2l6ZSBmb290cHJpbnQuXG4gKi9cblxudmFyIE5hdGl2ZVNlbGVjdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE5hdGl2ZVNlbGVjdChwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBfcHJvcHMkSWNvbkNvbXBvbmVudCA9IHByb3BzLkljb25Db21wb25lbnQsXG4gICAgICBJY29uQ29tcG9uZW50ID0gX3Byb3BzJEljb25Db21wb25lbnQgPT09IHZvaWQgMCA/IEFycm93RHJvcERvd25JY29uIDogX3Byb3BzJEljb25Db21wb25lbnQsXG4gICAgICBfcHJvcHMkaW5wdXQgPSBwcm9wcy5pbnB1dCxcbiAgICAgIGlucHV0ID0gX3Byb3BzJGlucHV0ID09PSB2b2lkIDAgPyBkZWZhdWx0SW5wdXQgOiBfcHJvcHMkaW5wdXQsXG4gICAgICBpbnB1dFByb3BzID0gcHJvcHMuaW5wdXRQcm9wcyxcbiAgICAgIHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcIkljb25Db21wb25lbnRcIiwgXCJpbnB1dFwiLCBcImlucHV0UHJvcHNcIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgbXVpRm9ybUNvbnRyb2wgPSB1c2VGb3JtQ29udHJvbCgpO1xuICB2YXIgZmNzID0gZm9ybUNvbnRyb2xTdGF0ZSh7XG4gICAgcHJvcHM6IHByb3BzLFxuICAgIG11aUZvcm1Db250cm9sOiBtdWlGb3JtQ29udHJvbCxcbiAgICBzdGF0ZXM6IFsndmFyaWFudCddXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChpbnB1dCwgX2V4dGVuZHMoe1xuICAgIC8vIE1vc3Qgb2YgdGhlIGxvZ2ljIGlzIGltcGxlbWVudGVkIGluIGBOYXRpdmVTZWxlY3RJbnB1dGAuXG4gICAgLy8gVGhlIGBTZWxlY3RgIGNvbXBvbmVudCBpcyBhIHNpbXBsZSBBUEkgd3JhcHBlciB0byBleHBvc2Ugc29tZXRoaW5nIGJldHRlciB0byBwbGF5IHdpdGguXG4gICAgaW5wdXRDb21wb25lbnQ6IE5hdGl2ZVNlbGVjdElucHV0LFxuICAgIGlucHV0UHJvcHM6IF9leHRlbmRzKHtcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICAgIGNsYXNzZXM6IGNsYXNzZXMsXG4gICAgICBJY29uQ29tcG9uZW50OiBJY29uQ29tcG9uZW50LFxuICAgICAgdmFyaWFudDogZmNzLnZhcmlhbnQsXG4gICAgICB0eXBlOiB1bmRlZmluZWRcbiAgICB9LCBpbnB1dFByb3BzLCBpbnB1dCA/IGlucHV0LnByb3BzLmlucHV0UHJvcHMgOiB7fSksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gTmF0aXZlU2VsZWN0LnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBvcHRpb24gZWxlbWVudHMgdG8gcG9wdWxhdGUgdGhlIHNlbGVjdCB3aXRoLlxuICAgKiBDYW4gYmUgc29tZSBgPG9wdGlvbj5gIGVsZW1lbnRzLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIHRoYXQgZGlzcGxheXMgdGhlIGFycm93LlxuICAgKi9cbiAgSWNvbkNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBBbiBgSW5wdXRgIGVsZW1lbnQ7IGRvZXMgbm90IGhhdmUgdG8gYmUgYSBtYXRlcmlhbC11aSBzcGVjaWZpYyBgSW5wdXRgLlxuICAgKi9cbiAgaW5wdXQ6IFByb3BUeXBlcy5lbGVtZW50LFxuXG4gIC8qKlxuICAgKiBBdHRyaWJ1dGVzIGFwcGxpZWQgdG8gdGhlIGBzZWxlY3RgIGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIGEgbWVudSBpdGVtIGlzIHNlbGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAgKHN0cmluZykuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBpbnB1dCB2YWx1ZS4gVGhlIERPTSBBUEkgY2FzdHMgdGhpcyB0byBhIHN0cmluZy5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydmaWxsZWQnLCAnb3V0bGluZWQnLCAnc3RhbmRhcmQnXSlcbn0gOiB2b2lkIDA7XG5OYXRpdmVTZWxlY3QubXVpTmFtZSA9ICdTZWxlY3QnO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aU5hdGl2ZVNlbGVjdCdcbn0pKE5hdGl2ZVNlbGVjdCk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgcmVmVHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG52YXIgTmF0aXZlU2VsZWN0SW5wdXQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBOYXRpdmVTZWxlY3RJbnB1dChwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBJY29uQ29tcG9uZW50ID0gcHJvcHMuSWNvbkNvbXBvbmVudCxcbiAgICAgIGlucHV0UmVmID0gcHJvcHMuaW5wdXRSZWYsXG4gICAgICBfcHJvcHMkdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICB2YXJpYW50ID0gX3Byb3BzJHZhcmlhbnQgPT09IHZvaWQgMCA/ICdzdGFuZGFyZCcgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZWRcIiwgXCJJY29uQ29tcG9uZW50XCIsIFwiaW5wdXRSZWZcIiwgXCJ2YXJpYW50XCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCAvLyBUT0RPIHY1OiBtZXJnZSByb290IGFuZCBzZWxlY3RcbiAgICBjbGFzc2VzLnNlbGVjdCwgY2xhc3Nlc1t2YXJpYW50XSwgY2xhc3NOYW1lLCBkaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkKSxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgcmVmOiBpbnB1dFJlZiB8fCByZWZcbiAgfSwgb3RoZXIpKSwgcHJvcHMubXVsdGlwbGUgPyBudWxsIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkNvbXBvbmVudCwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmljb24sIGNsYXNzZXNbXCJpY29uXCIuY29uY2F0KGNhcGl0YWxpemUodmFyaWFudCkpXSwgZGlzYWJsZWQgJiYgY2xhc3Nlcy5kaXNhYmxlZClcbiAgfSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBOYXRpdmVTZWxlY3RJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgb3B0aW9uIGVsZW1lbnRzIHRvIHBvcHVsYXRlIHRoZSBzZWxlY3Qgd2l0aC5cbiAgICogQ2FuIGJlIHNvbWUgYDxvcHRpb24+YCBlbGVtZW50cy5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBDU1MgY2xhc3MgbmFtZSBvZiB0aGUgc2VsZWN0IGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHNlbGVjdCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB0aGF0IGRpc3BsYXlzIHRoZSBhcnJvdy5cbiAgICovXG4gIEljb25Db21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBVc2UgdGhhdCBwcm9wIHRvIHBhc3MgYSByZWYgdG8gdGhlIG5hdGl2ZSBzZWxlY3QgZWxlbWVudC5cbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIGlucHV0UmVmOiByZWZUeXBlLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5hbWUgYXR0cmlidXRlIG9mIHRoZSBgc2VsZWN0YCBvciBoaWRkZW4gYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiBhIG1lbnUgaXRlbSBpcyBzZWxlY3RlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgIChzdHJpbmcpLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgaW5wdXQgdmFsdWUuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnc3RhbmRhcmQnLCAnb3V0bGluZWQnLCAnZmlsbGVkJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgTmF0aXZlU2VsZWN0SW5wdXQ7IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuLi9zdHlsZXMvdXNlVGhlbWUnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIHRvcDogLTUsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIGJvcmRlclJhZGl1czogJ2luaGVyaXQnLFxuICAgICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgbGVnZW5kIGVsZW1lbnQgd2hlbiBgbGFiZWxXaWR0aGAgaXMgcHJvdmlkZWQuICovXG4gICAgbGVnZW5kOiB7XG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBsaW5lSGVpZ2h0OiAnMTFweCcsXG4gICAgICAvLyBzeW5jIHdpdGggYGhlaWdodGAgaW4gYGxlZ2VuZGAgc3R5bGVzXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xuICAgICAgICBkdXJhdGlvbjogMTUwLFxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5lYXNlT3V0XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgbGVnZW5kIGVsZW1lbnQuICovXG4gICAgbGVnZW5kTGFiZWxsZWQ6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgaGVpZ2h0OiAxMSxcbiAgICAgIC8vIHN5bmMgd2l0aCBgbGluZUhlaWdodGAgaW4gYGxlZ2VuZGAgc3R5bGVzXG4gICAgICBmb250U2l6ZTogJzAuNzVlbScsXG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgIG1heFdpZHRoOiAwLjAxLFxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdtYXgtd2lkdGgnLCB7XG4gICAgICAgIGR1cmF0aW9uOiA1MCxcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dFxuICAgICAgfSksXG4gICAgICAnJiA+IHNwYW4nOiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiA1LFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IDUsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBsZWdlbmQgZWxlbWVudCBpcyBub3RjaGVkLiAqL1xuICAgIGxlZ2VuZE5vdGNoZWQ6IHtcbiAgICAgIG1heFdpZHRoOiAxMDAwLFxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdtYXgtd2lkdGgnLCB7XG4gICAgICAgIGR1cmF0aW9uOiAxMDAsXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXQsXG4gICAgICAgIGRlbGF5OiA1MFxuICAgICAgfSlcbiAgICB9XG4gIH07XG59O1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbnZhciBOb3RjaGVkT3V0bGluZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE5vdGNoZWRPdXRsaW5lKHByb3BzLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICBsYWJlbFdpZHRoUHJvcCA9IHByb3BzLmxhYmVsV2lkdGgsXG4gICAgICBub3RjaGVkID0gcHJvcHMubm90Y2hlZCxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwibGFiZWxcIiwgXCJsYWJlbFdpZHRoXCIsIFwibm90Y2hlZFwiLCBcInN0eWxlXCJdKTtcblxuICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICB2YXIgYWxpZ24gPSB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcblxuICBpZiAobGFiZWwgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIsIF9leHRlbmRzKHtcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSksXG4gICAgICByZWY6IHJlZixcbiAgICAgIHN0eWxlOiBzdHlsZVxuICAgIH0sIG90aGVyKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIiwge1xuICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMubGVnZW5kTGFiZWxsZWQsIG5vdGNoZWQgJiYgY2xhc3Nlcy5sZWdlbmROb3RjaGVkKVxuICAgIH0sIGxhYmVsID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGxhYmVsKSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICBfX2h0bWw6ICcmIzgyMDM7J1xuICAgICAgfVxuICAgIH0pKSk7XG4gIH1cblxuICB2YXIgbGFiZWxXaWR0aCA9IGxhYmVsV2lkdGhQcm9wID4gMCA/IGxhYmVsV2lkdGhQcm9wICogMC43NSArIDggOiAwLjAxO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiLCBfZXh0ZW5kcyh7XG4gICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgIHN0eWxlOiBfZXh0ZW5kcyhfZGVmaW5lUHJvcGVydHkoe30sIFwicGFkZGluZ1wiLmNvbmNhdChjYXBpdGFsaXplKGFsaWduKSksIDgpLCBzdHlsZSksXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMubGVnZW5kLFxuICAgIHN0eWxlOiB7XG4gICAgICAvLyBJRSAxMTogZmllbGRzZXQgd2l0aCBsZWdlbmQgZG9lcyBub3QgcmVuZGVyXG4gICAgICAvLyBhIGJvcmRlciByYWRpdXMuIFRoaXMgbWFpbnRhaW5zIGNvbnNpc3RlbmN5XG4gICAgICAvLyBieSBhbHdheXMgaGF2aW5nIGEgbGVnZW5kIHJlbmRlcmVkXG4gICAgICB3aWR0aDogbm90Y2hlZCA/IGxhYmVsV2lkdGggOiAwLjAxXG4gICAgfVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICBfX2h0bWw6ICcmIzgyMDM7J1xuICAgIH1cbiAgfSkpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gTm90Y2hlZE91dGxpbmUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbC5cbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBsYWJlbC5cbiAgICovXG4gIGxhYmVsV2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgb3V0bGluZSBpcyBub3RjaGVkIHRvIGFjY29tbW9kYXRlIHRoZSBsYWJlbC5cbiAgICovXG4gIG5vdGNoZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ1ByaXZhdGVOb3RjaGVkT3V0bGluZSdcbn0pKE5vdGNoZWRPdXRsaW5lKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyByZWZUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSAnLi4vSW5wdXRCYXNlJztcbmltcG9ydCBOb3RjaGVkT3V0bGluZSBmcm9tICcuL05vdGNoZWRPdXRsaW5lJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHZhciBib3JkZXJDb2xvciA9IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/ICdyZ2JhKDAsIDAsIDAsIDAuMjMpJyA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjMpJztcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMsXG4gICAgICAnJjpob3ZlciAkbm90Y2hlZE91dGxpbmUnOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeVxuICAgICAgfSxcbiAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XG4gICAgICAgICcmOmhvdmVyICRub3RjaGVkT3V0bGluZSc6IHtcbiAgICAgICAgICBib3JkZXJDb2xvcjogYm9yZGVyQ29sb3JcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmJGZvY3VzZWQgJG5vdGNoZWRPdXRsaW5lJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgICB9LFxuICAgICAgJyYkZXJyb3IgJG5vdGNoZWRPdXRsaW5lJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluXG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQgJG5vdGNoZWRPdXRsaW5lJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uZGlzYWJsZWRcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgY29sb3IgaXMgc2Vjb25kYXJ5LiAqL1xuICAgIGNvbG9yU2Vjb25kYXJ5OiB7XG4gICAgICAnJiRmb2N1c2VkICRub3RjaGVkT3V0bGluZSc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgY29tcG9uZW50IGlzIGZvY3VzZWQuICovXG4gICAgZm9jdXNlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlZD17dHJ1ZX1gLiAqL1xuICAgIGRpc2FibGVkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHN0YXJ0QWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBhZG9ybmVkU3RhcnQ6IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiAxNFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlbmRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGFkb3JuZWRFbmQ6IHtcbiAgICAgIHBhZGRpbmdSaWdodDogMTRcbiAgICB9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZXJyb3I9e3RydWV9YC4gKi9cbiAgICBlcnJvcjoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgICBtYXJnaW5EZW5zZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtdWx0aWxpbmU9e3RydWV9YC4gKi9cbiAgICBtdWx0aWxpbmU6IHtcbiAgICAgIHBhZGRpbmc6ICcxOC41cHggMTRweCcsXG4gICAgICAnJiRtYXJnaW5EZW5zZSc6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogMTAuNSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogMTAuNVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYE5vdGNoZWRPdXRsaW5lYCBlbGVtZW50LiAqL1xuICAgIG5vdGNoZWRPdXRsaW5lOiB7XG4gICAgICBib3JkZXJDb2xvcjogYm9yZGVyQ29sb3JcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC4gKi9cbiAgICBpbnB1dDoge1xuICAgICAgcGFkZGluZzogJzE4LjVweCAxNHB4JyxcbiAgICAgICcmOi13ZWJraXQtYXV0b2ZpbGwnOiB7XG4gICAgICAgIFdlYmtpdEJveFNoYWRvdzogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gbnVsbCA6ICcwIDAgMCAxMDBweCAjMjY2Nzk4IGluc2V0JyxcbiAgICAgICAgV2Via2l0VGV4dEZpbGxDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gbnVsbCA6ICcjZmZmJyxcbiAgICAgICAgY2FyZXRDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gbnVsbCA6ICcjZmZmJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnaW5oZXJpdCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbWFyZ2luPVwiZGVuc2VcImAuICovXG4gICAgaW5wdXRNYXJnaW5EZW5zZToge1xuICAgICAgcGFkZGluZ1RvcDogMTAuNSxcbiAgICAgIHBhZGRpbmdCb3R0b206IDEwLjVcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbXVsdGlsaW5lPXt0cnVlfWAuICovXG4gICAgaW5wdXRNdWx0aWxpbmU6IHtcbiAgICAgIHBhZGRpbmc6IDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgc3RhcnRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGlucHV0QWRvcm5lZFN0YXJ0OiB7XG4gICAgICBwYWRkaW5nTGVmdDogMFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBlbmRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGlucHV0QWRvcm5lZEVuZDoge1xuICAgICAgcGFkZGluZ1JpZ2h0OiAwXG4gICAgfVxuICB9O1xufTtcbnZhciBPdXRsaW5lZElucHV0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gT3V0bGluZWRJbnB1dChwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIF9wcm9wcyRmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGgsXG4gICAgICBmdWxsV2lkdGggPSBfcHJvcHMkZnVsbFdpZHRoID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRmdWxsV2lkdGgsXG4gICAgICBfcHJvcHMkaW5wdXRDb21wb25lbnQgPSBwcm9wcy5pbnB1dENvbXBvbmVudCxcbiAgICAgIGlucHV0Q29tcG9uZW50ID0gX3Byb3BzJGlucHV0Q29tcG9uZW50ID09PSB2b2lkIDAgPyAnaW5wdXQnIDogX3Byb3BzJGlucHV0Q29tcG9uZW50LFxuICAgICAgbGFiZWwgPSBwcm9wcy5sYWJlbCxcbiAgICAgIF9wcm9wcyRsYWJlbFdpZHRoID0gcHJvcHMubGFiZWxXaWR0aCxcbiAgICAgIGxhYmVsV2lkdGggPSBfcHJvcHMkbGFiZWxXaWR0aCA9PT0gdm9pZCAwID8gMCA6IF9wcm9wcyRsYWJlbFdpZHRoLFxuICAgICAgX3Byb3BzJG11bHRpbGluZSA9IHByb3BzLm11bHRpbGluZSxcbiAgICAgIG11bHRpbGluZSA9IF9wcm9wcyRtdWx0aWxpbmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJG11bHRpbGluZSxcbiAgICAgIG5vdGNoZWQgPSBwcm9wcy5ub3RjaGVkLFxuICAgICAgX3Byb3BzJHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgdHlwZSA9IF9wcm9wcyR0eXBlID09PSB2b2lkIDAgPyAndGV4dCcgOiBfcHJvcHMkdHlwZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiZnVsbFdpZHRoXCIsIFwiaW5wdXRDb21wb25lbnRcIiwgXCJsYWJlbFwiLCBcImxhYmVsV2lkdGhcIiwgXCJtdWx0aWxpbmVcIiwgXCJub3RjaGVkXCIsIFwidHlwZVwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElucHV0QmFzZSwgX2V4dGVuZHMoe1xuICAgIHJlbmRlclN1ZmZpeDogZnVuY3Rpb24gcmVuZGVyU3VmZml4KHN0YXRlKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTm90Y2hlZE91dGxpbmUsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLm5vdGNoZWRPdXRsaW5lLFxuICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgIGxhYmVsV2lkdGg6IGxhYmVsV2lkdGgsXG4gICAgICAgIG5vdGNoZWQ6IHR5cGVvZiBub3RjaGVkICE9PSAndW5kZWZpbmVkJyA/IG5vdGNoZWQgOiBCb29sZWFuKHN0YXRlLnN0YXJ0QWRvcm5tZW50IHx8IHN0YXRlLmZpbGxlZCB8fCBzdGF0ZS5mb2N1c2VkKVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBjbGFzc2VzOiBfZXh0ZW5kcyh7fSwgY2xhc3Nlcywge1xuICAgICAgcm9vdDogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzZXMudW5kZXJsaW5lKSxcbiAgICAgIG5vdGNoZWRPdXRsaW5lOiBudWxsXG4gICAgfSksXG4gICAgZnVsbFdpZHRoOiBmdWxsV2lkdGgsXG4gICAgaW5wdXRDb21wb25lbnQ6IGlucHV0Q29tcG9uZW50LFxuICAgIG11bHRpbGluZTogbXVsdGlsaW5lLFxuICAgIHJlZjogcmVmLFxuICAgIHR5cGU6IHR5cGVcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gT3V0bGluZWRJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGlzIHByb3AgaGVscHMgdXNlcnMgdG8gZmlsbCBmb3JtcyBmYXN0ZXIsIGVzcGVjaWFsbHkgb24gbW9iaWxlIGRldmljZXMuXG4gICAqIFRoZSBuYW1lIGNhbiBiZSBjb25mdXNpbmcsIGFzIGl0J3MgbW9yZSBsaWtlIGFuIGF1dG9maWxsLlxuICAgKiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgaXQgW2ZvbGxvd2luZyB0aGUgc3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybS1jb250cm9sLWluZnJhc3RydWN0dXJlLmh0bWwjYXV0b2ZpbGwpLlxuICAgKi9cbiAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBmb2N1c2VkIGR1cmluZyB0aGUgZmlyc3QgbW91bnQuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgYGlucHV0YCBlbGVtZW50IHZhbHVlLiBVc2Ugd2hlbiB0aGUgY29tcG9uZW50IGlzIG5vdCBjb250cm9sbGVkLlxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5kIGBJbnB1dEFkb3JubWVudGAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgZW5kQWRvcm5tZW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCBpbmRpY2F0ZSBhbiBlcnJvci4gVGhpcyBpcyBub3JtYWxseSBvYnRhaW5lZCB2aWEgY29udGV4dCBmcm9tXG4gICAqIEZvcm1Db250cm9sLlxuICAgKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cbiAgICovXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGlucHV0Q29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFtBdHRyaWJ1dGVzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjQXR0cmlidXRlcykgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUGFzcyBhIHJlZiB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRSZWY6IHJlZlR5cGUsXG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbCBvZiB0aGUgaW5wdXQuIEl0IGlzIG9ubHkgdXNlZCBmb3IgbGF5b3V0LiBUaGUgYWN0dWFsIGxhYmVsbGluZ1xuICAgKiBpcyBoYW5kbGVkIGJ5IGBJbnB1dExhYmVsYC4gSWYgc3BlY2lmaWVkIGBsYWJlbFdpZHRoYCBpcyBpZ25vcmVkLlxuICAgKi9cbiAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGUgd2lkdGggb2YgdGhlIGxhYmVsLiBJcyBpZ25vcmVkIGlmIGBsYWJlbGAgaXMgcHJvdmlkZWQuIFByZWZlciBgbGFiZWxgXG4gICAqIGlmIHRoZSBpbnB1dCBsYWJlbCBhcHBlYXJzIHdpdGggYSBzdHJpa2UgdGhyb3VnaC5cbiAgICovXG4gIGxhYmVsV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIElmIGBkZW5zZWAsIHdpbGwgYWRqdXN0IHZlcnRpY2FsIHNwYWNpbmcuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mKFsnZGVuc2UnLCAnbm9uZSddKSxcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5IHdoZW4gbXVsdGlsaW5lIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIG1heFJvd3M6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBhIHRleHRhcmVhIGVsZW1lbnQgd2lsbCBiZSByZW5kZXJlZC5cbiAgICovXG4gIG11bHRpbGluZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5hbWUgYXR0cmlidXRlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBvdXRsaW5lIGlzIG5vdGNoZWQgdG8gYWNjb21tb2RhdGUgdGhlIGxhYmVsLlxuICAgKi9cbiAgbm90Y2hlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LnZhbHVlYCAoc3RyaW5nKS5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVGhlIHNob3J0IGhpbnQgZGlzcGxheWVkIGluIHRoZSBpbnB1dCBiZWZvcmUgdGhlIHVzZXIgZW50ZXJzIGEgdmFsdWUuXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSXQgcHJldmVudHMgdGhlIHVzZXIgZnJvbSBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgdGhlIGZpZWxkXG4gICAqIChub3QgZnJvbSBpbnRlcmFjdGluZyB3aXRoIHRoZSBmaWVsZCkuXG4gICAqL1xuICByZWFkT25seTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGBpbnB1dGAgZWxlbWVudCB3aWxsIGJlIHJlcXVpcmVkLlxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5IHdoZW4gbXVsdGlsaW5lIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIHJvd3M6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogU3RhcnQgYElucHV0QWRvcm5tZW50YCBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBzdGFydEFkb3JubWVudDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFR5cGUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC4gSXQgc2hvdWxkIGJlIFthIHZhbGlkIEhUTUw1IGlucHV0IHR5cGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNGb3JtXyUzQ2lucHV0JTNFX3R5cGVzKS5cbiAgICovXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LCByZXF1aXJlZCBmb3IgYSBjb250cm9sbGVkIGNvbXBvbmVudC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55XG59IDogdm9pZCAwO1xuT3V0bGluZWRJbnB1dC5tdWlOYW1lID0gJ0lucHV0JztcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlPdXRsaW5lZElucHV0J1xufSkoT3V0bGluZWRJbnB1dCk7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgY2hhaW5Qcm9wVHlwZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgdmFyIGVsZXZhdGlvbnMgPSB7fTtcbiAgdGhlbWUuc2hhZG93cy5mb3JFYWNoKGZ1bmN0aW9uIChzaGFkb3csIGluZGV4KSB7XG4gICAgZWxldmF0aW9uc1tcImVsZXZhdGlvblwiLmNvbmNhdChpbmRleCldID0ge1xuICAgICAgYm94U2hhZG93OiBzaGFkb3dcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdib3gtc2hhZG93JylcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc3F1YXJlPXtmYWxzZX1gLiAqL1xuICAgIHJvdW5kZWQ6IHtcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJvdXRsaW5lZFwiYC4gKi9cbiAgICBvdXRsaW5lZDoge1xuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5kaXZpZGVyKVxuICAgIH1cbiAgfSwgZWxldmF0aW9ucyk7XG59O1xudmFyIFBhcGVyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gUGFwZXIocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgX3Byb3BzJHNxdWFyZSA9IHByb3BzLnNxdWFyZSxcbiAgICAgIHNxdWFyZSA9IF9wcm9wcyRzcXVhcmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHNxdWFyZSxcbiAgICAgIF9wcm9wcyRlbGV2YXRpb24gPSBwcm9wcy5lbGV2YXRpb24sXG4gICAgICBlbGV2YXRpb24gPSBfcHJvcHMkZWxldmF0aW9uID09PSB2b2lkIDAgPyAxIDogX3Byb3BzJGVsZXZhdGlvbixcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ2VsZXZhdGlvbicgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCIsIFwic3F1YXJlXCIsIFwiZWxldmF0aW9uXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgdmFyaWFudCA9PT0gJ291dGxpbmVkJyA/IGNsYXNzZXMub3V0bGluZWQgOiBjbGFzc2VzW1wiZWxldmF0aW9uXCIuY29uY2F0KGVsZXZhdGlvbildLCAhc3F1YXJlICYmIGNsYXNzZXMucm91bmRlZCksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gUGFwZXIucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBTaGFkb3cgZGVwdGgsIGNvcnJlc3BvbmRzIHRvIGBkcGAgaW4gdGhlIHNwZWMuXG4gICAqIEl0IGFjY2VwdHMgdmFsdWVzIGJldHdlZW4gMCBhbmQgMjQgaW5jbHVzaXZlLlxuICAgKi9cbiAgZWxldmF0aW9uOiBjaGFpblByb3BUeXBlcyhQcm9wVHlwZXMubnVtYmVyLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICAgIGVsZXZhdGlvbiA9IHByb3BzLmVsZXZhdGlvbjsgLy8gaW4gY2FzZSBgd2l0aFN0eWxlc2AgZmFpbHMgdG8gaW5qZWN0IHdlIGRvbid0IG5lZWQgdGhpcyB3YXJuaW5nXG5cbiAgICBpZiAoY2xhc3NlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoZWxldmF0aW9uICE9IG51bGwgJiYgY2xhc3Nlc1tcImVsZXZhdGlvblwiLmNvbmNhdChlbGV2YXRpb24pXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFwiTWF0ZXJpYWwtVUk6IFRoaXMgZWxldmF0aW9uIGBcIi5jb25jYXQoZWxldmF0aW9uLCBcImAgaXMgbm90IGltcGxlbWVudGVkLlwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHJvdW5kZWQgY29ybmVycyBhcmUgZGlzYWJsZWQuXG4gICAqL1xuICBzcXVhcmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydlbGV2YXRpb24nLCAnb3V0bGluZWQnXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpUGFwZXInXG59KShQYXBlcik7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjaGFpblByb3BUeXBlcywgZWxlbWVudFR5cGVBY2NlcHRpbmdSZWYsIHJlZlR5cGUsIEhUTUxFbGVtZW50VHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vdXRpbHMvZGVib3VuY2UnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICcuLi91dGlscy9vd25lckRvY3VtZW50JztcbmltcG9ydCBvd25lcldpbmRvdyBmcm9tICcuLi91dGlscy9vd25lcldpbmRvdyc7XG5pbXBvcnQgY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uIGZyb20gJy4uL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbic7XG5pbXBvcnQgZGVwcmVjYXRlZFByb3BUeXBlIGZyb20gJy4uL3V0aWxzL2RlcHJlY2F0ZWRQcm9wVHlwZSc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwnO1xuaW1wb3J0IEdyb3cgZnJvbSAnLi4vR3Jvdyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnLi4vUGFwZXInO1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldFRvcChyZWN0LCB2ZXJ0aWNhbCkge1xuICB2YXIgb2Zmc2V0ID0gMDtcblxuICBpZiAodHlwZW9mIHZlcnRpY2FsID09PSAnbnVtYmVyJykge1xuICAgIG9mZnNldCA9IHZlcnRpY2FsO1xuICB9IGVsc2UgaWYgKHZlcnRpY2FsID09PSAnY2VudGVyJykge1xuICAgIG9mZnNldCA9IHJlY3QuaGVpZ2h0IC8gMjtcbiAgfSBlbHNlIGlmICh2ZXJ0aWNhbCA9PT0gJ2JvdHRvbScpIHtcbiAgICBvZmZzZXQgPSByZWN0LmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0TGVmdChyZWN0LCBob3Jpem9udGFsKSB7XG4gIHZhciBvZmZzZXQgPSAwO1xuXG4gIGlmICh0eXBlb2YgaG9yaXpvbnRhbCA9PT0gJ251bWJlcicpIHtcbiAgICBvZmZzZXQgPSBob3Jpem9udGFsO1xuICB9IGVsc2UgaWYgKGhvcml6b250YWwgPT09ICdjZW50ZXInKSB7XG4gICAgb2Zmc2V0ID0gcmVjdC53aWR0aCAvIDI7XG4gIH0gZWxzZSBpZiAoaG9yaXpvbnRhbCA9PT0gJ3JpZ2h0Jykge1xuICAgIG9mZnNldCA9IHJlY3Qud2lkdGg7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0O1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1PcmlnaW5WYWx1ZSh0cmFuc2Zvcm1PcmlnaW4pIHtcbiAgcmV0dXJuIFt0cmFuc2Zvcm1PcmlnaW4uaG9yaXpvbnRhbCwgdHJhbnNmb3JtT3JpZ2luLnZlcnRpY2FsXS5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIG4gPT09ICdudW1iZXInID8gXCJcIi5jb25jYXQobiwgXCJweFwiKSA6IG47XG4gIH0pLmpvaW4oJyAnKTtcbn0gLy8gU3VtIHRoZSBzY3JvbGxUb3AgYmV0d2VlbiB0d28gZWxlbWVudHMuXG5cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KHBhcmVudCwgY2hpbGQpIHtcbiAgdmFyIGVsZW1lbnQgPSBjaGlsZDtcbiAgdmFyIHNjcm9sbFRvcCA9IDA7XG5cbiAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudCAhPT0gcGFyZW50KSB7XG4gICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBzY3JvbGxUb3AgKz0gZWxlbWVudC5zY3JvbGxUb3A7XG4gIH1cblxuICByZXR1cm4gc2Nyb2xsVG9wO1xufVxuXG5mdW5jdGlvbiBnZXRBbmNob3JFbChhbmNob3JFbCkge1xuICByZXR1cm4gdHlwZW9mIGFuY2hvckVsID09PSAnZnVuY3Rpb24nID8gYW5jaG9yRWwoKSA6IGFuY2hvckVsO1xufVxuXG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge30sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50LiAqL1xuICBwYXBlcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgLy8gU28gd2Ugc2VlIHRoZSBwb3BvdmVyIHdoZW4gaXQncyBlbXB0eS5cbiAgICAvLyBJdCdzIG1vc3QgbGlrZWx5IG9uIGlzc3VlIG9uIHVzZXJsYW5kLlxuICAgIG1pbldpZHRoOiAxNixcbiAgICBtaW5IZWlnaHQ6IDE2LFxuICAgIG1heFdpZHRoOiAnY2FsYygxMDAlIC0gMzJweCknLFxuICAgIG1heEhlaWdodDogJ2NhbGMoMTAwJSAtIDMycHgpJyxcbiAgICAvLyBXZSBkaXNhYmxlIHRoZSBmb2N1cyByaW5nIGZvciBtb3VzZSwgdG91Y2ggYW5kIGtleWJvYXJkIHVzZXJzLlxuICAgIG91dGxpbmU6IDBcbiAgfVxufTtcbnZhciBQb3BvdmVyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gUG9wb3Zlcihwcm9wcywgcmVmKSB7XG4gIHZhciBhY3Rpb24gPSBwcm9wcy5hY3Rpb24sXG4gICAgICBhbmNob3JFbCA9IHByb3BzLmFuY2hvckVsLFxuICAgICAgX3Byb3BzJGFuY2hvck9yaWdpbiA9IHByb3BzLmFuY2hvck9yaWdpbixcbiAgICAgIGFuY2hvck9yaWdpbiA9IF9wcm9wcyRhbmNob3JPcmlnaW4gPT09IHZvaWQgMCA/IHtcbiAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgaG9yaXpvbnRhbDogJ2xlZnQnXG4gIH0gOiBfcHJvcHMkYW5jaG9yT3JpZ2luLFxuICAgICAgYW5jaG9yUG9zaXRpb24gPSBwcm9wcy5hbmNob3JQb3NpdGlvbixcbiAgICAgIF9wcm9wcyRhbmNob3JSZWZlcmVuYyA9IHByb3BzLmFuY2hvclJlZmVyZW5jZSxcbiAgICAgIGFuY2hvclJlZmVyZW5jZSA9IF9wcm9wcyRhbmNob3JSZWZlcmVuYyA9PT0gdm9pZCAwID8gJ2FuY2hvckVsJyA6IF9wcm9wcyRhbmNob3JSZWZlcmVuYyxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNvbnRhaW5lclByb3AgPSBwcm9wcy5jb250YWluZXIsXG4gICAgICBfcHJvcHMkZWxldmF0aW9uID0gcHJvcHMuZWxldmF0aW9uLFxuICAgICAgZWxldmF0aW9uID0gX3Byb3BzJGVsZXZhdGlvbiA9PT0gdm9pZCAwID8gOCA6IF9wcm9wcyRlbGV2YXRpb24sXG4gICAgICBnZXRDb250ZW50QW5jaG9yRWwgPSBwcm9wcy5nZXRDb250ZW50QW5jaG9yRWwsXG4gICAgICBfcHJvcHMkbWFyZ2luVGhyZXNob2wgPSBwcm9wcy5tYXJnaW5UaHJlc2hvbGQsXG4gICAgICBtYXJnaW5UaHJlc2hvbGQgPSBfcHJvcHMkbWFyZ2luVGhyZXNob2wgPT09IHZvaWQgMCA/IDE2IDogX3Byb3BzJG1hcmdpblRocmVzaG9sLFxuICAgICAgb25FbnRlciA9IHByb3BzLm9uRW50ZXIsXG4gICAgICBvbkVudGVyZWQgPSBwcm9wcy5vbkVudGVyZWQsXG4gICAgICBvbkVudGVyaW5nID0gcHJvcHMub25FbnRlcmluZyxcbiAgICAgIG9uRXhpdCA9IHByb3BzLm9uRXhpdCxcbiAgICAgIG9uRXhpdGVkID0gcHJvcHMub25FeGl0ZWQsXG4gICAgICBvbkV4aXRpbmcgPSBwcm9wcy5vbkV4aXRpbmcsXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIF9wcm9wcyRQYXBlclByb3BzID0gcHJvcHMuUGFwZXJQcm9wcyxcbiAgICAgIFBhcGVyUHJvcHMgPSBfcHJvcHMkUGFwZXJQcm9wcyA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkUGFwZXJQcm9wcyxcbiAgICAgIF9wcm9wcyR0cmFuc2Zvcm1PcmlnaSA9IHByb3BzLnRyYW5zZm9ybU9yaWdpbixcbiAgICAgIHRyYW5zZm9ybU9yaWdpbiA9IF9wcm9wcyR0cmFuc2Zvcm1PcmlnaSA9PT0gdm9pZCAwID8ge1xuICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICBob3Jpem9udGFsOiAnbGVmdCdcbiAgfSA6IF9wcm9wcyR0cmFuc2Zvcm1PcmlnaSxcbiAgICAgIF9wcm9wcyRUcmFuc2l0aW9uQ29tcCA9IHByb3BzLlRyYW5zaXRpb25Db21wb25lbnQsXG4gICAgICBUcmFuc2l0aW9uQ29tcG9uZW50ID0gX3Byb3BzJFRyYW5zaXRpb25Db21wID09PSB2b2lkIDAgPyBHcm93IDogX3Byb3BzJFRyYW5zaXRpb25Db21wLFxuICAgICAgX3Byb3BzJHRyYW5zaXRpb25EdXJhID0gcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uUHJvcCA9IF9wcm9wcyR0cmFuc2l0aW9uRHVyYSA9PT0gdm9pZCAwID8gJ2F1dG8nIDogX3Byb3BzJHRyYW5zaXRpb25EdXJhLFxuICAgICAgX3Byb3BzJFRyYW5zaXRpb25Qcm9wID0gcHJvcHMuVHJhbnNpdGlvblByb3BzLFxuICAgICAgVHJhbnNpdGlvblByb3BzID0gX3Byb3BzJFRyYW5zaXRpb25Qcm9wID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRUcmFuc2l0aW9uUHJvcCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhY3Rpb25cIiwgXCJhbmNob3JFbFwiLCBcImFuY2hvck9yaWdpblwiLCBcImFuY2hvclBvc2l0aW9uXCIsIFwiYW5jaG9yUmVmZXJlbmNlXCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29udGFpbmVyXCIsIFwiZWxldmF0aW9uXCIsIFwiZ2V0Q29udGVudEFuY2hvckVsXCIsIFwibWFyZ2luVGhyZXNob2xkXCIsIFwib25FbnRlclwiLCBcIm9uRW50ZXJlZFwiLCBcIm9uRW50ZXJpbmdcIiwgXCJvbkV4aXRcIiwgXCJvbkV4aXRlZFwiLCBcIm9uRXhpdGluZ1wiLCBcIm9wZW5cIiwgXCJQYXBlclByb3BzXCIsIFwidHJhbnNmb3JtT3JpZ2luXCIsIFwiVHJhbnNpdGlvbkNvbXBvbmVudFwiLCBcInRyYW5zaXRpb25EdXJhdGlvblwiLCBcIlRyYW5zaXRpb25Qcm9wc1wiXSk7XG5cbiAgdmFyIHBhcGVyUmVmID0gUmVhY3QudXNlUmVmKCk7IC8vIFJldHVybnMgdGhlIHRvcC9sZWZ0IG9mZnNldCBvZiB0aGUgcG9zaXRpb25cbiAgLy8gdG8gYXR0YWNoIHRvIG9uIHRoZSBhbmNob3IgZWxlbWVudCAob3IgYm9keSBpZiBub25lIGlzIHByb3ZpZGVkKVxuXG4gIHZhciBnZXRBbmNob3JPZmZzZXQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoY29udGVudEFuY2hvck9mZnNldCkge1xuICAgIGlmIChhbmNob3JSZWZlcmVuY2UgPT09ICdhbmNob3JQb3NpdGlvbicpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghYW5jaG9yUG9zaXRpb24pIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogWW91IG5lZWQgdG8gcHJvdmlkZSBhIGBhbmNob3JQb3NpdGlvbmAgcHJvcCB3aGVuIHVzaW5nICcgKyAnPFBvcG92ZXIgYW5jaG9yUmVmZXJlbmNlPVwiYW5jaG9yUG9zaXRpb25cIiAvPi4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYW5jaG9yUG9zaXRpb247XG4gICAgfVxuXG4gICAgdmFyIHJlc29sdmVkQW5jaG9yRWwgPSBnZXRBbmNob3JFbChhbmNob3JFbCk7IC8vIElmIGFuIGFuY2hvciBlbGVtZW50IHdhc24ndCBwcm92aWRlZCwganVzdCB1c2UgdGhlIHBhcmVudCBib2R5IGVsZW1lbnQgb2YgdGhpcyBQb3BvdmVyXG5cbiAgICB2YXIgYW5jaG9yRWxlbWVudCA9IHJlc29sdmVkQW5jaG9yRWwgJiYgcmVzb2x2ZWRBbmNob3JFbC5ub2RlVHlwZSA9PT0gMSA/IHJlc29sdmVkQW5jaG9yRWwgOiBvd25lckRvY3VtZW50KHBhcGVyUmVmLmN1cnJlbnQpLmJvZHk7XG4gICAgdmFyIGFuY2hvclJlY3QgPSBhbmNob3JFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBib3ggPSBhbmNob3JFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiBib3gudG9wID09PSAwICYmIGJveC5sZWZ0ID09PSAwICYmIGJveC5yaWdodCA9PT0gMCAmJiBib3guYm90dG9tID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihbJ01hdGVyaWFsLVVJOiBUaGUgYGFuY2hvckVsYCBwcm9wIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQgaXMgaW52YWxpZC4nLCAnVGhlIGFuY2hvciBlbGVtZW50IHNob3VsZCBiZSBwYXJ0IG9mIHRoZSBkb2N1bWVudCBsYXlvdXQuJywgXCJNYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgcHJlc2VudCBpbiB0aGUgZG9jdW1lbnQgb3IgdGhhdCBpdCdzIG5vdCBkaXNwbGF5IG5vbmUuXCJdLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYW5jaG9yVmVydGljYWwgPSBjb250ZW50QW5jaG9yT2Zmc2V0ID09PSAwID8gYW5jaG9yT3JpZ2luLnZlcnRpY2FsIDogJ2NlbnRlcic7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogYW5jaG9yUmVjdC50b3AgKyBnZXRPZmZzZXRUb3AoYW5jaG9yUmVjdCwgYW5jaG9yVmVydGljYWwpLFxuICAgICAgbGVmdDogYW5jaG9yUmVjdC5sZWZ0ICsgZ2V0T2Zmc2V0TGVmdChhbmNob3JSZWN0LCBhbmNob3JPcmlnaW4uaG9yaXpvbnRhbClcbiAgICB9O1xuICB9LCBbYW5jaG9yRWwsIGFuY2hvck9yaWdpbi5ob3Jpem9udGFsLCBhbmNob3JPcmlnaW4udmVydGljYWwsIGFuY2hvclBvc2l0aW9uLCBhbmNob3JSZWZlcmVuY2VdKTsgLy8gUmV0dXJucyB0aGUgdmVydGljYWwgb2Zmc2V0IG9mIGlubmVyIGNvbnRlbnQgdG8gYW5jaG9yIHRoZSB0cmFuc2Zvcm0gb24gaWYgcHJvdmlkZWRcblxuICB2YXIgZ2V0Q29udGVudEFuY2hvck9mZnNldCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdmFyIGNvbnRlbnRBbmNob3JPZmZzZXQgPSAwO1xuXG4gICAgaWYgKGdldENvbnRlbnRBbmNob3JFbCAmJiBhbmNob3JSZWZlcmVuY2UgPT09ICdhbmNob3JFbCcpIHtcbiAgICAgIHZhciBjb250ZW50QW5jaG9yRWwgPSBnZXRDb250ZW50QW5jaG9yRWwoZWxlbWVudCk7XG5cbiAgICAgIGlmIChjb250ZW50QW5jaG9yRWwgJiYgZWxlbWVudC5jb250YWlucyhjb250ZW50QW5jaG9yRWwpKSB7XG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCwgY29udGVudEFuY2hvckVsKTtcbiAgICAgICAgY29udGVudEFuY2hvck9mZnNldCA9IGNvbnRlbnRBbmNob3JFbC5vZmZzZXRUb3AgKyBjb250ZW50QW5jaG9yRWwuY2xpZW50SGVpZ2h0IC8gMiAtIHNjcm9sbFRvcCB8fCAwO1xuICAgICAgfSAvLyAhPSB0aGUgZGVmYXVsdCB2YWx1ZVxuXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhbmNob3JPcmlnaW4udmVydGljYWwgIT09ICd0b3AnKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBZb3UgY2FuIG5vdCBjaGFuZ2UgdGhlIGRlZmF1bHQgYGFuY2hvck9yaWdpbi52ZXJ0aWNhbGAgdmFsdWUgJywgJ3doZW4gYWxzbyBwcm92aWRpbmcgdGhlIGBnZXRDb250ZW50QW5jaG9yRWxgIHByb3AgdG8gdGhlIHBvcG92ZXIgY29tcG9uZW50LicsICdPbmx5IHVzZSBvbmUgb2YgdGhlIHR3byBwcm9wcy4nLCAnU2V0IGBnZXRDb250ZW50QW5jaG9yRWxgIHRvIGBudWxsIHwgdW5kZWZpbmVkYCcgKyAnIG9yIGxlYXZlIGBhbmNob3JPcmlnaW4udmVydGljYWxgIHVuY2hhbmdlZC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudEFuY2hvck9mZnNldDtcbiAgfSwgW2FuY2hvck9yaWdpbi52ZXJ0aWNhbCwgYW5jaG9yUmVmZXJlbmNlLCBnZXRDb250ZW50QW5jaG9yRWxdKTsgLy8gUmV0dXJuIHRoZSBiYXNlIHRyYW5zZm9ybSBvcmlnaW4gdXNpbmcgdGhlIGVsZW1lbnRcbiAgLy8gYW5kIHRha2luZyB0aGUgY29udGVudCBhbmNob3Igb2Zmc2V0IGludG8gYWNjb3VudCBpZiBpbiB1c2VcblxuICB2YXIgZ2V0VHJhbnNmb3JtT3JpZ2luID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGVsZW1SZWN0KSB7XG4gICAgdmFyIGNvbnRlbnRBbmNob3JPZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZlcnRpY2FsOiBnZXRPZmZzZXRUb3AoZWxlbVJlY3QsIHRyYW5zZm9ybU9yaWdpbi52ZXJ0aWNhbCkgKyBjb250ZW50QW5jaG9yT2Zmc2V0LFxuICAgICAgaG9yaXpvbnRhbDogZ2V0T2Zmc2V0TGVmdChlbGVtUmVjdCwgdHJhbnNmb3JtT3JpZ2luLmhvcml6b250YWwpXG4gICAgfTtcbiAgfSwgW3RyYW5zZm9ybU9yaWdpbi5ob3Jpem9udGFsLCB0cmFuc2Zvcm1PcmlnaW4udmVydGljYWxdKTtcbiAgdmFyIGdldFBvc2l0aW9uaW5nU3R5bGUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIENoZWNrIGlmIHRoZSBwYXJlbnQgaGFzIHJlcXVlc3RlZCBhbmNob3Jpbmcgb24gYW4gaW5uZXIgY29udGVudCBub2RlXG4gICAgdmFyIGNvbnRlbnRBbmNob3JPZmZzZXQgPSBnZXRDb250ZW50QW5jaG9yT2Zmc2V0KGVsZW1lbnQpO1xuICAgIHZhciBlbGVtUmVjdCA9IHtcbiAgICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodFxuICAgIH07IC8vIEdldCB0aGUgdHJhbnNmb3JtIG9yaWdpbiBwb2ludCBvbiB0aGUgZWxlbWVudCBpdHNlbGZcblxuICAgIHZhciBlbGVtVHJhbnNmb3JtT3JpZ2luID0gZ2V0VHJhbnNmb3JtT3JpZ2luKGVsZW1SZWN0LCBjb250ZW50QW5jaG9yT2Zmc2V0KTtcblxuICAgIGlmIChhbmNob3JSZWZlcmVuY2UgPT09ICdub25lJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBudWxsLFxuICAgICAgICBsZWZ0OiBudWxsLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IGdldFRyYW5zZm9ybU9yaWdpblZhbHVlKGVsZW1UcmFuc2Zvcm1PcmlnaW4pXG4gICAgICB9O1xuICAgIH0gLy8gR2V0IHRoZSBvZmZzZXQgb2Ygb2YgdGhlIGFuY2hvcmluZyBlbGVtZW50XG5cblxuICAgIHZhciBhbmNob3JPZmZzZXQgPSBnZXRBbmNob3JPZmZzZXQoY29udGVudEFuY2hvck9mZnNldCk7IC8vIENhbGN1bGF0ZSBlbGVtZW50IHBvc2l0aW9uaW5nXG5cbiAgICB2YXIgdG9wID0gYW5jaG9yT2Zmc2V0LnRvcCAtIGVsZW1UcmFuc2Zvcm1PcmlnaW4udmVydGljYWw7XG4gICAgdmFyIGxlZnQgPSBhbmNob3JPZmZzZXQubGVmdCAtIGVsZW1UcmFuc2Zvcm1PcmlnaW4uaG9yaXpvbnRhbDtcbiAgICB2YXIgYm90dG9tID0gdG9wICsgZWxlbVJlY3QuaGVpZ2h0O1xuICAgIHZhciByaWdodCA9IGxlZnQgKyBlbGVtUmVjdC53aWR0aDsgLy8gVXNlIHRoZSBwYXJlbnQgd2luZG93IG9mIHRoZSBhbmNob3JFbCBpZiBwcm92aWRlZFxuXG4gICAgdmFyIGNvbnRhaW5lcldpbmRvdyA9IG93bmVyV2luZG93KGdldEFuY2hvckVsKGFuY2hvckVsKSk7IC8vIFdpbmRvdyB0aHJlc2hvbGRzIHRha2luZyByZXF1aXJlZCBtYXJnaW4gaW50byBhY2NvdW50XG5cbiAgICB2YXIgaGVpZ2h0VGhyZXNob2xkID0gY29udGFpbmVyV2luZG93LmlubmVySGVpZ2h0IC0gbWFyZ2luVGhyZXNob2xkO1xuICAgIHZhciB3aWR0aFRocmVzaG9sZCA9IGNvbnRhaW5lcldpbmRvdy5pbm5lcldpZHRoIC0gbWFyZ2luVGhyZXNob2xkOyAvLyBDaGVjayBpZiB0aGUgdmVydGljYWwgYXhpcyBuZWVkcyBzaGlmdGluZ1xuXG4gICAgaWYgKHRvcCA8IG1hcmdpblRocmVzaG9sZCkge1xuICAgICAgdmFyIGRpZmYgPSB0b3AgLSBtYXJnaW5UaHJlc2hvbGQ7XG4gICAgICB0b3AgLT0gZGlmZjtcbiAgICAgIGVsZW1UcmFuc2Zvcm1PcmlnaW4udmVydGljYWwgKz0gZGlmZjtcbiAgICB9IGVsc2UgaWYgKGJvdHRvbSA+IGhlaWdodFRocmVzaG9sZCkge1xuICAgICAgdmFyIF9kaWZmID0gYm90dG9tIC0gaGVpZ2h0VGhyZXNob2xkO1xuXG4gICAgICB0b3AgLT0gX2RpZmY7XG4gICAgICBlbGVtVHJhbnNmb3JtT3JpZ2luLnZlcnRpY2FsICs9IF9kaWZmO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoZWxlbVJlY3QuaGVpZ2h0ID4gaGVpZ2h0VGhyZXNob2xkICYmIGVsZW1SZWN0LmhlaWdodCAmJiBoZWlnaHRUaHJlc2hvbGQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBUaGUgcG9wb3ZlciBjb21wb25lbnQgaXMgdG9vIHRhbGwuJywgXCJTb21lIHBhcnQgb2YgaXQgY2FuIG5vdCBiZSBzZWVuIG9uIHRoZSBzY3JlZW4gKFwiLmNvbmNhdChlbGVtUmVjdC5oZWlnaHQgLSBoZWlnaHRUaHJlc2hvbGQsIFwicHgpLlwiKSwgJ1BsZWFzZSBjb25zaWRlciBhZGRpbmcgYSBgbWF4LWhlaWdodGAgdG8gaW1wcm92ZSB0aGUgdXNlci1leHBlcmllbmNlLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9IC8vIENoZWNrIGlmIHRoZSBob3Jpem9udGFsIGF4aXMgbmVlZHMgc2hpZnRpbmdcblxuXG4gICAgaWYgKGxlZnQgPCBtYXJnaW5UaHJlc2hvbGQpIHtcbiAgICAgIHZhciBfZGlmZjIgPSBsZWZ0IC0gbWFyZ2luVGhyZXNob2xkO1xuXG4gICAgICBsZWZ0IC09IF9kaWZmMjtcbiAgICAgIGVsZW1UcmFuc2Zvcm1PcmlnaW4uaG9yaXpvbnRhbCArPSBfZGlmZjI7XG4gICAgfSBlbHNlIGlmIChyaWdodCA+IHdpZHRoVGhyZXNob2xkKSB7XG4gICAgICB2YXIgX2RpZmYzID0gcmlnaHQgLSB3aWR0aFRocmVzaG9sZDtcblxuICAgICAgbGVmdCAtPSBfZGlmZjM7XG4gICAgICBlbGVtVHJhbnNmb3JtT3JpZ2luLmhvcml6b250YWwgKz0gX2RpZmYzO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IFwiXCIuY29uY2F0KE1hdGgucm91bmQodG9wKSwgXCJweFwiKSxcbiAgICAgIGxlZnQ6IFwiXCIuY29uY2F0KE1hdGgucm91bmQobGVmdCksIFwicHhcIiksXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IGdldFRyYW5zZm9ybU9yaWdpblZhbHVlKGVsZW1UcmFuc2Zvcm1PcmlnaW4pXG4gICAgfTtcbiAgfSwgW2FuY2hvckVsLCBhbmNob3JSZWZlcmVuY2UsIGdldEFuY2hvck9mZnNldCwgZ2V0Q29udGVudEFuY2hvck9mZnNldCwgZ2V0VHJhbnNmb3JtT3JpZ2luLCBtYXJnaW5UaHJlc2hvbGRdKTtcbiAgdmFyIHNldFBvc2l0aW9uaW5nU3R5bGVzID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbGVtZW50ID0gcGFwZXJSZWYuY3VycmVudDtcblxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwb3NpdGlvbmluZyA9IGdldFBvc2l0aW9uaW5nU3R5bGUoZWxlbWVudCk7XG5cbiAgICBpZiAocG9zaXRpb25pbmcudG9wICE9PSBudWxsKSB7XG4gICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IHBvc2l0aW9uaW5nLnRvcDtcbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb25pbmcubGVmdCAhPT0gbnVsbCkge1xuICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gcG9zaXRpb25pbmcubGVmdDtcbiAgICB9XG5cbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IHBvc2l0aW9uaW5nLnRyYW5zZm9ybU9yaWdpbjtcbiAgfSwgW2dldFBvc2l0aW9uaW5nU3R5bGVdKTtcblxuICB2YXIgaGFuZGxlRW50ZXJpbmcgPSBmdW5jdGlvbiBoYW5kbGVFbnRlcmluZyhlbGVtZW50LCBpc0FwcGVhcmluZykge1xuICAgIGlmIChvbkVudGVyaW5nKSB7XG4gICAgICBvbkVudGVyaW5nKGVsZW1lbnQsIGlzQXBwZWFyaW5nKTtcbiAgICB9XG5cbiAgICBzZXRQb3NpdGlvbmluZ1N0eWxlcygpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVQYXBlclJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIC8vICNTdHJpY3RNb2RlIHJlYWR5XG4gICAgcGFwZXJSZWYuY3VycmVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGluc3RhbmNlKTtcbiAgfSwgW10pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICBzZXRQb3NpdGlvbmluZ1N0eWxlcygpO1xuICAgIH1cbiAgfSk7XG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUoYWN0aW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG9wZW4gPyB7XG4gICAgICB1cGRhdGVQb3NpdGlvbjogZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24oKSB7XG4gICAgICAgIHNldFBvc2l0aW9uaW5nU3R5bGVzKCk7XG4gICAgICB9XG4gICAgfSA6IG51bGw7XG4gIH0sIFtvcGVuLCBzZXRQb3NpdGlvbmluZ1N0eWxlc10pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghb3Blbikge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlUmVzaXplID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgc2V0UG9zaXRpb25pbmdTdHlsZXMoKTtcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaGFuZGxlUmVzaXplLmNsZWFyKCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbb3Blbiwgc2V0UG9zaXRpb25pbmdTdHlsZXNdKTtcbiAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvblByb3A7XG5cbiAgaWYgKHRyYW5zaXRpb25EdXJhdGlvblByb3AgPT09ICdhdXRvJyAmJiAhVHJhbnNpdGlvbkNvbXBvbmVudC5tdWlTdXBwb3J0QXV0bykge1xuICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfSAvLyBJZiB0aGUgY29udGFpbmVyIHByb3AgaXMgcHJvdmlkZWQsIHVzZSB0aGF0XG4gIC8vIElmIHRoZSBhbmNob3JFbCBwcm9wIGlzIHByb3ZpZGVkLCB1c2UgaXRzIHBhcmVudCBib2R5IGVsZW1lbnQgYXMgdGhlIGNvbnRhaW5lclxuICAvLyBJZiBuZWl0aGVyIGFyZSBwcm92aWRlZCBsZXQgdGhlIE1vZGFsIHRha2UgY2FyZSBvZiBjaG9vc2luZyB0aGUgY29udGFpbmVyXG5cblxuICB2YXIgY29udGFpbmVyID0gY29udGFpbmVyUHJvcCB8fCAoYW5jaG9yRWwgPyBvd25lckRvY3VtZW50KGdldEFuY2hvckVsKGFuY2hvckVsKSkuYm9keSA6IHVuZGVmaW5lZCk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbCwgX2V4dGVuZHMoe1xuICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgIG9wZW46IG9wZW4sXG4gICAgcmVmOiByZWYsXG4gICAgQmFja2Ryb3BQcm9wczoge1xuICAgICAgaW52aXNpYmxlOiB0cnVlXG4gICAgfSxcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpXG4gIH0sIG90aGVyKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkNvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGFwcGVhcjogdHJ1ZSxcbiAgICBpbjogb3BlbixcbiAgICBvbkVudGVyOiBvbkVudGVyLFxuICAgIG9uRW50ZXJlZDogb25FbnRlcmVkLFxuICAgIG9uRXhpdDogb25FeGl0LFxuICAgIG9uRXhpdGVkOiBvbkV4aXRlZCxcbiAgICBvbkV4aXRpbmc6IG9uRXhpdGluZyxcbiAgICB0aW1lb3V0OiB0cmFuc2l0aW9uRHVyYXRpb25cbiAgfSwgVHJhbnNpdGlvblByb3BzLCB7XG4gICAgb25FbnRlcmluZzogY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKGhhbmRsZUVudGVyaW5nLCBUcmFuc2l0aW9uUHJvcHMub25FbnRlcmluZylcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBhcGVyLCBfZXh0ZW5kcyh7XG4gICAgZWxldmF0aW9uOiBlbGV2YXRpb24sXG4gICAgcmVmOiBoYW5kbGVQYXBlclJlZlxuICB9LCBQYXBlclByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucGFwZXIsIFBhcGVyUHJvcHMuY2xhc3NOYW1lKVxuICB9KSwgY2hpbGRyZW4pKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFBvcG92ZXIucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQSByZWYgZm9yIGltcGVyYXRpdmUgYWN0aW9ucy5cbiAgICogSXQgY3VycmVudGx5IG9ubHkgc3VwcG9ydHMgdXBkYXRlUG9zaXRpb24oKSBhY3Rpb24uXG4gICAqL1xuICBhY3Rpb246IHJlZlR5cGUsXG5cbiAgLyoqXG4gICAqIEEgSFRNTCBlbGVtZW50LCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBpdC5cbiAgICogSXQncyB1c2VkIHRvIHNldCB0aGUgcG9zaXRpb24gb2YgdGhlIHBvcG92ZXIuXG4gICAqL1xuICBhbmNob3JFbDogY2hhaW5Qcm9wVHlwZXMoUHJvcFR5cGVzLm9uZU9mVHlwZShbSFRNTEVsZW1lbnRUeXBlLCBQcm9wVHlwZXMuZnVuY10pLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBpZiAocHJvcHMub3BlbiAmJiAoIXByb3BzLmFuY2hvclJlZmVyZW5jZSB8fCBwcm9wcy5hbmNob3JSZWZlcmVuY2UgPT09ICdhbmNob3JFbCcpKSB7XG4gICAgICB2YXIgcmVzb2x2ZWRBbmNob3JFbCA9IGdldEFuY2hvckVsKHByb3BzLmFuY2hvckVsKTtcblxuICAgICAgaWYgKHJlc29sdmVkQW5jaG9yRWwgJiYgcmVzb2x2ZWRBbmNob3JFbC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICB2YXIgYm94ID0gcmVzb2x2ZWRBbmNob3JFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiBib3gudG9wID09PSAwICYmIGJveC5sZWZ0ID09PSAwICYmIGJveC5yaWdodCA9PT0gMCAmJiBib3guYm90dG9tID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihbJ01hdGVyaWFsLVVJOiBUaGUgYGFuY2hvckVsYCBwcm9wIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQgaXMgaW52YWxpZC4nLCAnVGhlIGFuY2hvciBlbGVtZW50IHNob3VsZCBiZSBwYXJ0IG9mIHRoZSBkb2N1bWVudCBsYXlvdXQuJywgXCJNYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgcHJlc2VudCBpbiB0aGUgZG9jdW1lbnQgb3IgdGhhdCBpdCdzIG5vdCBkaXNwbGF5IG5vbmUuXCJdLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihbJ01hdGVyaWFsLVVJOiBUaGUgYGFuY2hvckVsYCBwcm9wIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQgaXMgaW52YWxpZC4nLCBcIkl0IHNob3VsZCBiZSBhbiBFbGVtZW50IGluc3RhbmNlIGJ1dCBpdCdzIGBcIi5jb25jYXQocmVzb2x2ZWRBbmNob3JFbCwgXCJgIGluc3RlYWQuXCIpXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0pLFxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBwb2ludCBvbiB0aGUgYW5jaG9yIHdoZXJlIHRoZSBwb3BvdmVyJ3NcbiAgICogYGFuY2hvckVsYCB3aWxsIGF0dGFjaCB0by4gVGhpcyBpcyBub3QgdXNlZCB3aGVuIHRoZVxuICAgKiBhbmNob3JSZWZlcmVuY2UgaXMgJ2FuY2hvclBvc2l0aW9uJy5cbiAgICpcbiAgICogT3B0aW9uczpcbiAgICogdmVydGljYWw6IFt0b3AsIGNlbnRlciwgYm90dG9tXTtcbiAgICogaG9yaXpvbnRhbDogW2xlZnQsIGNlbnRlciwgcmlnaHRdLlxuICAgKi9cbiAgYW5jaG9yT3JpZ2luOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGhvcml6b250YWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2NlbnRlcicsICdsZWZ0JywgJ3JpZ2h0J10pLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcbiAgICB2ZXJ0aWNhbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsnYm90dG9tJywgJ2NlbnRlcicsICd0b3AnXSksIFByb3BUeXBlcy5udW1iZXJdKS5pc1JlcXVpcmVkXG4gIH0pLFxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBwb3NpdGlvbiB0aGF0IG1heSBiZSB1c2VkXG4gICAqIHRvIHNldCB0aGUgcG9zaXRpb24gb2YgdGhlIHBvcG92ZXIuXG4gICAqIFRoZSBjb29yZGluYXRlcyBhcmUgcmVsYXRpdmUgdG9cbiAgICogdGhlIGFwcGxpY2F0aW9uJ3MgY2xpZW50IGFyZWEuXG4gICAqL1xuICBhbmNob3JQb3NpdGlvbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBsZWZ0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdG9wOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgfSksXG5cbiAgLyoqXG4gICAqIFRoaXMgZGV0ZXJtaW5lcyB3aGljaCBhbmNob3IgcHJvcCB0byByZWZlciB0byB0byBzZXRcbiAgICogdGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgYW5jaG9yUmVmZXJlbmNlOiBQcm9wVHlwZXMub25lT2YoWydhbmNob3JFbCcsICdhbmNob3JQb3NpdGlvbicsICdub25lJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQSBIVE1MIGVsZW1lbnQsIGNvbXBvbmVudCBpbnN0YW5jZSwgb3IgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGVpdGhlci5cbiAgICogVGhlIGBjb250YWluZXJgIHdpbGwgcGFzc2VkIHRvIHRoZSBNb2RhbCBjb21wb25lbnQuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGl0IHVzZXMgdGhlIGJvZHkgb2YgdGhlIGFuY2hvckVsJ3MgdG9wLWxldmVsIGRvY3VtZW50IG9iamVjdCxcbiAgICogc28gaXQncyBzaW1wbHkgYGRvY3VtZW50LmJvZHlgIG1vc3Qgb2YgdGhlIHRpbWUuXG4gICAqL1xuICBjb250YWluZXI6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5vbmVPZlR5cGUoW0hUTUxFbGVtZW50VHlwZSwgUHJvcFR5cGVzLmluc3RhbmNlT2YoUmVhY3QuQ29tcG9uZW50KSwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAvKipcbiAgICogVGhlIGVsZXZhdGlvbiBvZiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIGVsZXZhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgaW4gb3JkZXIgdG8gcmV0cmlldmUgdGhlIGNvbnRlbnQgYW5jaG9yIGVsZW1lbnQuXG4gICAqIEl0J3MgdGhlIG9wcG9zaXRlIG9mIHRoZSBgYW5jaG9yRWxgIHByb3AuXG4gICAqIFRoZSBjb250ZW50IGFuY2hvciBlbGVtZW50IHNob3VsZCBiZSBhbiBlbGVtZW50IGluc2lkZSB0aGUgcG9wb3Zlci5cbiAgICogSXQncyB1c2VkIHRvIGNvcnJlY3RseSBzY3JvbGwgYW5kIHNldCB0aGUgcG9zaXRpb24gb2YgdGhlIHBvcG92ZXIuXG4gICAqIFRoZSBwb3NpdGlvbmluZyBzdHJhdGVneSB0cmllcyB0byBtYWtlIHRoZSBjb250ZW50IGFuY2hvciBlbGVtZW50IGp1c3QgYWJvdmUgdGhlXG4gICAqIGFuY2hvciBlbGVtZW50LlxuICAgKi9cbiAgZ2V0Q29udGVudEFuY2hvckVsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogU3BlY2lmaWVzIGhvdyBjbG9zZSB0byB0aGUgZWRnZSBvZiB0aGUgd2luZG93IHRoZSBwb3BvdmVyIGNhbiBhcHBlYXIuXG4gICAqL1xuICBtYXJnaW5UaHJlc2hvbGQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBjbG9zZWQuXG4gICAqL1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgZW50ZXJpbmcuXG4gICAqIEBkZXByZWNhdGVkIFVzZSB0aGUgYFRyYW5zaXRpb25Qcm9wc2AgcHJvcCBpbnN0ZWFkLlxuICAgKi9cbiAgb25FbnRlcjogZGVwcmVjYXRlZFByb3BUeXBlKFByb3BUeXBlcy5mdW5jLCAnVXNlIHRoZSBgVHJhbnNpdGlvblByb3BzYCBwcm9wIGluc3RlYWQuJyksXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgZW50ZXJlZC5cbiAgICogQGRlcHJlY2F0ZWQgVXNlIHRoZSBgVHJhbnNpdGlvblByb3BzYCBwcm9wIGluc3RlYWQuXG4gICAqL1xuICBvbkVudGVyZWQ6IGRlcHJlY2F0ZWRQcm9wVHlwZShQcm9wVHlwZXMuZnVuYywgJ1VzZSB0aGUgYFRyYW5zaXRpb25Qcm9wc2AgcHJvcCBpbnN0ZWFkLicpLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgZW50ZXJpbmcuXG4gICAqIEBkZXByZWNhdGVkIFVzZSB0aGUgYFRyYW5zaXRpb25Qcm9wc2AgcHJvcCBpbnN0ZWFkLlxuICAgKi9cbiAgb25FbnRlcmluZzogZGVwcmVjYXRlZFByb3BUeXBlKFByb3BUeXBlcy5mdW5jLCAnVXNlIHRoZSBgVHJhbnNpdGlvblByb3BzYCBwcm9wIGluc3RlYWQuJyksXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIGV4aXRpbmcuXG4gICAqIEBkZXByZWNhdGVkIFVzZSB0aGUgYFRyYW5zaXRpb25Qcm9wc2AgcHJvcCBpbnN0ZWFkLlxuICAgKi9cbiAgb25FeGl0OiBkZXByZWNhdGVkUHJvcFR5cGUoUHJvcFR5cGVzLmZ1bmMsICdVc2UgdGhlIGBUcmFuc2l0aW9uUHJvcHNgIHByb3AgaW5zdGVhZC4nKSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBleGl0ZWQuXG4gICAqIEBkZXByZWNhdGVkIFVzZSB0aGUgYFRyYW5zaXRpb25Qcm9wc2AgcHJvcCBpbnN0ZWFkLlxuICAgKi9cbiAgb25FeGl0ZWQ6IGRlcHJlY2F0ZWRQcm9wVHlwZShQcm9wVHlwZXMuZnVuYywgJ1VzZSB0aGUgYFRyYW5zaXRpb25Qcm9wc2AgcHJvcCBpbnN0ZWFkLicpLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgZXhpdGluZy5cbiAgICogQGRlcHJlY2F0ZWQgVXNlIHRoZSBgVHJhbnNpdGlvblByb3BzYCBwcm9wIGluc3RlYWQuXG4gICAqL1xuICBvbkV4aXRpbmc6IGRlcHJlY2F0ZWRQcm9wVHlwZShQcm9wVHlwZXMuZnVuYywgJ1VzZSB0aGUgYFRyYW5zaXRpb25Qcm9wc2AgcHJvcCBpbnN0ZWFkLicpLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBwb3BvdmVyIGlzIHZpc2libGUuXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYFBhcGVyYF0oL2FwaS9wYXBlci8pIGVsZW1lbnQuXG4gICAqL1xuICBQYXBlclByb3BzOiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuc2hhcGUoe1xuICAgIGNvbXBvbmVudDogZWxlbWVudFR5cGVBY2NlcHRpbmdSZWZcbiAgfSksXG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIHBvaW50IG9uIHRoZSBwb3BvdmVyIHdoaWNoXG4gICAqIHdpbGwgYXR0YWNoIHRvIHRoZSBhbmNob3IncyBvcmlnaW4uXG4gICAqXG4gICAqIE9wdGlvbnM6XG4gICAqIHZlcnRpY2FsOiBbdG9wLCBjZW50ZXIsIGJvdHRvbSwgeChweCldO1xuICAgKiBob3Jpem9udGFsOiBbbGVmdCwgY2VudGVyLCByaWdodCwgeChweCldLlxuICAgKi9cbiAgdHJhbnNmb3JtT3JpZ2luOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGhvcml6b250YWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2NlbnRlcicsICdsZWZ0JywgJ3JpZ2h0J10pLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcbiAgICB2ZXJ0aWNhbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsnYm90dG9tJywgJ2NlbnRlcicsICd0b3AnXSksIFByb3BUeXBlcy5udW1iZXJdKS5pc1JlcXVpcmVkXG4gIH0pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSB0cmFuc2l0aW9uLlxuICAgKiBbRm9sbG93IHRoaXMgZ3VpZGVdKC9jb21wb25lbnRzL3RyYW5zaXRpb25zLyN0cmFuc2l0aW9uY29tcG9uZW50LXByb3ApIHRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIHJlcXVpcmVtZW50cyBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBUcmFuc2l0aW9uQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFNldCB0byAnYXV0bycgdG8gYXV0b21hdGljYWxseSBjYWxjdWxhdGUgdHJhbnNpdGlvbiB0aW1lIGJhc2VkIG9uIGhlaWdodC5cbiAgICovXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSwgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhcHBlYXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZW50ZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZXhpdDogUHJvcFR5cGVzLm51bWJlclxuICB9KV0pLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYFRyYW5zaXRpb25gXShodHRwOi8vcmVhY3Rjb21tdW5pdHkub3JnL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdHJhbnNpdGlvbiNUcmFuc2l0aW9uLXByb3BzKSBlbGVtZW50LlxuICAgKi9cbiAgVHJhbnNpdGlvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0XG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVBvcG92ZXInXG59KShQb3BvdmVyKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGV4YWN0UHJvcCwgSFRNTEVsZW1lbnRUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBkZXByZWNhdGVkUHJvcFR5cGUgZnJvbSAnLi4vdXRpbHMvZGVwcmVjYXRlZFByb3BUeXBlJztcbmltcG9ydCBzZXRSZWYgZnJvbSAnLi4vdXRpbHMvc2V0UmVmJztcbmltcG9ydCB1c2VGb3JrUmVmIGZyb20gJy4uL3V0aWxzL3VzZUZvcmtSZWYnO1xuXG5mdW5jdGlvbiBnZXRDb250YWluZXIoY29udGFpbmVyKSB7XG4gIGNvbnRhaW5lciA9IHR5cGVvZiBjb250YWluZXIgPT09ICdmdW5jdGlvbicgPyBjb250YWluZXIoKSA6IGNvbnRhaW5lcjsgLy8gI1N0cmljdE1vZGUgcmVhZHlcblxuICByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUoY29udGFpbmVyKTtcbn1cblxudmFyIHVzZUVuaGFuY2VkRWZmZWN0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBSZWFjdC51c2VMYXlvdXRFZmZlY3QgOiBSZWFjdC51c2VFZmZlY3Q7XG4vKipcbiAqIFBvcnRhbHMgcHJvdmlkZSBhIGZpcnN0LWNsYXNzIHdheSB0byByZW5kZXIgY2hpbGRyZW4gaW50byBhIERPTSBub2RlXG4gKiB0aGF0IGV4aXN0cyBvdXRzaWRlIHRoZSBET00gaGllcmFyY2h5IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50LlxuICovXG5cbnZhciBQb3J0YWwgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBQb3J0YWwocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNvbnRhaW5lciA9IHByb3BzLmNvbnRhaW5lcixcbiAgICAgIF9wcm9wcyRkaXNhYmxlUG9ydGFsID0gcHJvcHMuZGlzYWJsZVBvcnRhbCxcbiAgICAgIGRpc2FibGVQb3J0YWwgPSBfcHJvcHMkZGlzYWJsZVBvcnRhbCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVBvcnRhbCxcbiAgICAgIG9uUmVuZGVyZWQgPSBwcm9wcy5vblJlbmRlcmVkO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShudWxsKSxcbiAgICAgIG1vdW50Tm9kZSA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldE1vdW50Tm9kZSA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgaGFuZGxlUmVmID0gdXNlRm9ya1JlZiggLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSA/IGNoaWxkcmVuLnJlZiA6IG51bGwsIHJlZik7XG4gIHVzZUVuaGFuY2VkRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWRpc2FibGVQb3J0YWwpIHtcbiAgICAgIHNldE1vdW50Tm9kZShnZXRDb250YWluZXIoY29udGFpbmVyKSB8fCBkb2N1bWVudC5ib2R5KTtcbiAgICB9XG4gIH0sIFtjb250YWluZXIsIGRpc2FibGVQb3J0YWxdKTtcbiAgdXNlRW5oYW5jZWRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChtb3VudE5vZGUgJiYgIWRpc2FibGVQb3J0YWwpIHtcbiAgICAgIHNldFJlZihyZWYsIG1vdW50Tm9kZSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRSZWYocmVmLCBudWxsKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSwgW3JlZiwgbW91bnROb2RlLCBkaXNhYmxlUG9ydGFsXSk7XG4gIHVzZUVuaGFuY2VkRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAob25SZW5kZXJlZCAmJiAobW91bnROb2RlIHx8IGRpc2FibGVQb3J0YWwpKSB7XG4gICAgICBvblJlbmRlcmVkKCk7XG4gICAgfVxuICB9LCBbb25SZW5kZXJlZCwgbW91bnROb2RlLCBkaXNhYmxlUG9ydGFsXSk7XG5cbiAgaWYgKGRpc2FibGVQb3J0YWwpIHtcbiAgICBpZiAoIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgIHJlZjogaGFuZGxlUmVmXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICByZXR1cm4gbW91bnROb2RlID8gLyojX19QVVJFX18qL1JlYWN0RE9NLmNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgbW91bnROb2RlKSA6IG1vdW50Tm9kZTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gUG9ydGFsLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjaGlsZHJlbiB0byByZW5kZXIgaW50byB0aGUgYGNvbnRhaW5lcmAuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIEEgSFRNTCBlbGVtZW50LCBjb21wb25lbnQgaW5zdGFuY2UsIG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlaXRoZXIuXG4gICAqIFRoZSBgY29udGFpbmVyYCB3aWxsIGhhdmUgdGhlIHBvcnRhbCBjaGlsZHJlbiBhcHBlbmRlZCB0byBpdC5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgaXQgdXNlcyB0aGUgYm9keSBvZiB0aGUgdG9wLWxldmVsIGRvY3VtZW50IG9iamVjdCxcbiAgICogc28gaXQncyBzaW1wbHkgYGRvY3VtZW50LmJvZHlgIG1vc3Qgb2YgdGhlIHRpbWUuXG4gICAqL1xuICBjb250YWluZXI6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5vbmVPZlR5cGUoW0hUTUxFbGVtZW50VHlwZSwgUHJvcFR5cGVzLmluc3RhbmNlT2YoUmVhY3QuQ29tcG9uZW50KSwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUgcG9ydGFsIGJlaGF2aW9yLlxuICAgKiBUaGUgY2hpbGRyZW4gc3RheSB3aXRoaW4gaXQncyBwYXJlbnQgRE9NIGhpZXJhcmNoeS5cbiAgICovXG4gIGRpc2FibGVQb3J0YWw6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBvbmNlIHRoZSBjaGlsZHJlbiBoYXMgYmVlbiBtb3VudGVkIGludG8gdGhlIGBjb250YWluZXJgLlxuICAgKlxuICAgKiBUaGlzIHByb3Agd2lsbCBiZSByZW1vdmVkIGluIHY1LCB0aGUgcmVmIGNhbiBiZSB1c2VkIGluc3RlYWQuXG4gICAqIEBkZXByZWNhdGVkIFVzZSB0aGUgcmVmIGluc3RlYWQuXG4gICAqL1xuICBvblJlbmRlcmVkOiBkZXByZWNhdGVkUHJvcFR5cGUoUHJvcFR5cGVzLmZ1bmMsICdVc2UgdGhlIHJlZiBpbnN0ZWFkLicpXG59IDogdm9pZCAwO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgUG9ydGFsWydwcm9wVHlwZXMnICsgJyddID0gZXhhY3RQcm9wKFBvcnRhbC5wcm9wVHlwZXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3J0YWw7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IG1lcmdlQ2xhc3NlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IFNlbGVjdElucHV0IGZyb20gJy4vU2VsZWN0SW5wdXQnO1xuaW1wb3J0IGZvcm1Db250cm9sU3RhdGUgZnJvbSAnLi4vRm9ybUNvbnRyb2wvZm9ybUNvbnRyb2xTdGF0ZSc7XG5pbXBvcnQgdXNlRm9ybUNvbnRyb2wgZnJvbSAnLi4vRm9ybUNvbnRyb2wvdXNlRm9ybUNvbnRyb2wnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IEFycm93RHJvcERvd25JY29uIGZyb20gJy4uL2ludGVybmFsL3N2Zy1pY29ucy9BcnJvd0Ryb3BEb3duJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9JbnB1dCc7XG5pbXBvcnQgeyBzdHlsZXMgYXMgbmF0aXZlU2VsZWN0U3R5bGVzIH0gZnJvbSAnLi4vTmF0aXZlU2VsZWN0L05hdGl2ZVNlbGVjdCc7XG5pbXBvcnQgTmF0aXZlU2VsZWN0SW5wdXQgZnJvbSAnLi4vTmF0aXZlU2VsZWN0L05hdGl2ZVNlbGVjdElucHV0JztcbmltcG9ydCBGaWxsZWRJbnB1dCBmcm9tICcuLi9GaWxsZWRJbnB1dCc7XG5pbXBvcnQgT3V0bGluZWRJbnB1dCBmcm9tICcuLi9PdXRsaW5lZElucHV0JztcbmV4cG9ydCB2YXIgc3R5bGVzID0gbmF0aXZlU2VsZWN0U3R5bGVzO1xuXG52YXIgX3JlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCBudWxsKTtcblxudmFyIF9yZWYyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRmlsbGVkSW5wdXQsIG51bGwpO1xuXG52YXIgU2VsZWN0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gU2VsZWN0KHByb3BzLCByZWYpIHtcbiAgdmFyIF9wcm9wcyRhdXRvV2lkdGggPSBwcm9wcy5hdXRvV2lkdGgsXG4gICAgICBhdXRvV2lkdGggPSBfcHJvcHMkYXV0b1dpZHRoID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRhdXRvV2lkdGgsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBfcHJvcHMkZGlzcGxheUVtcHR5ID0gcHJvcHMuZGlzcGxheUVtcHR5LFxuICAgICAgZGlzcGxheUVtcHR5ID0gX3Byb3BzJGRpc3BsYXlFbXB0eSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzcGxheUVtcHR5LFxuICAgICAgX3Byb3BzJEljb25Db21wb25lbnQgPSBwcm9wcy5JY29uQ29tcG9uZW50LFxuICAgICAgSWNvbkNvbXBvbmVudCA9IF9wcm9wcyRJY29uQ29tcG9uZW50ID09PSB2b2lkIDAgPyBBcnJvd0Ryb3BEb3duSWNvbiA6IF9wcm9wcyRJY29uQ29tcG9uZW50LFxuICAgICAgaWQgPSBwcm9wcy5pZCxcbiAgICAgIGlucHV0ID0gcHJvcHMuaW5wdXQsXG4gICAgICBpbnB1dFByb3BzID0gcHJvcHMuaW5wdXRQcm9wcyxcbiAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICBsYWJlbElkID0gcHJvcHMubGFiZWxJZCxcbiAgICAgIF9wcm9wcyRsYWJlbFdpZHRoID0gcHJvcHMubGFiZWxXaWR0aCxcbiAgICAgIGxhYmVsV2lkdGggPSBfcHJvcHMkbGFiZWxXaWR0aCA9PT0gdm9pZCAwID8gMCA6IF9wcm9wcyRsYWJlbFdpZHRoLFxuICAgICAgTWVudVByb3BzID0gcHJvcHMuTWVudVByb3BzLFxuICAgICAgX3Byb3BzJG11bHRpcGxlID0gcHJvcHMubXVsdGlwbGUsXG4gICAgICBtdWx0aXBsZSA9IF9wcm9wcyRtdWx0aXBsZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkbXVsdGlwbGUsXG4gICAgICBfcHJvcHMkbmF0aXZlID0gcHJvcHMubmF0aXZlLFxuICAgICAgbmF0aXZlID0gX3Byb3BzJG5hdGl2ZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkbmF0aXZlLFxuICAgICAgb25DbG9zZSA9IHByb3BzLm9uQ2xvc2UsXG4gICAgICBvbk9wZW4gPSBwcm9wcy5vbk9wZW4sXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIHJlbmRlclZhbHVlID0gcHJvcHMucmVuZGVyVmFsdWUsXG4gICAgICBTZWxlY3REaXNwbGF5UHJvcHMgPSBwcm9wcy5TZWxlY3REaXNwbGF5UHJvcHMsXG4gICAgICBfcHJvcHMkdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICB2YXJpYW50UHJvcHMgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ3N0YW5kYXJkJyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImF1dG9XaWR0aFwiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImRpc3BsYXlFbXB0eVwiLCBcIkljb25Db21wb25lbnRcIiwgXCJpZFwiLCBcImlucHV0XCIsIFwiaW5wdXRQcm9wc1wiLCBcImxhYmVsXCIsIFwibGFiZWxJZFwiLCBcImxhYmVsV2lkdGhcIiwgXCJNZW51UHJvcHNcIiwgXCJtdWx0aXBsZVwiLCBcIm5hdGl2ZVwiLCBcIm9uQ2xvc2VcIiwgXCJvbk9wZW5cIiwgXCJvcGVuXCIsIFwicmVuZGVyVmFsdWVcIiwgXCJTZWxlY3REaXNwbGF5UHJvcHNcIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgaW5wdXRDb21wb25lbnQgPSBuYXRpdmUgPyBOYXRpdmVTZWxlY3RJbnB1dCA6IFNlbGVjdElucHV0O1xuICB2YXIgbXVpRm9ybUNvbnRyb2wgPSB1c2VGb3JtQ29udHJvbCgpO1xuICB2YXIgZmNzID0gZm9ybUNvbnRyb2xTdGF0ZSh7XG4gICAgcHJvcHM6IHByb3BzLFxuICAgIG11aUZvcm1Db250cm9sOiBtdWlGb3JtQ29udHJvbCxcbiAgICBzdGF0ZXM6IFsndmFyaWFudCddXG4gIH0pO1xuICB2YXIgdmFyaWFudCA9IGZjcy52YXJpYW50IHx8IHZhcmlhbnRQcm9wcztcbiAgdmFyIElucHV0Q29tcG9uZW50ID0gaW5wdXQgfHwge1xuICAgIHN0YW5kYXJkOiBfcmVmLFxuICAgIG91dGxpbmVkOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChPdXRsaW5lZElucHV0LCB7XG4gICAgICBsYWJlbDogbGFiZWwsXG4gICAgICBsYWJlbFdpZHRoOiBsYWJlbFdpZHRoXG4gICAgfSksXG4gICAgZmlsbGVkOiBfcmVmMlxuICB9W3ZhcmlhbnRdO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChJbnB1dENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIC8vIE1vc3Qgb2YgdGhlIGxvZ2ljIGlzIGltcGxlbWVudGVkIGluIGBTZWxlY3RJbnB1dGAuXG4gICAgLy8gVGhlIGBTZWxlY3RgIGNvbXBvbmVudCBpcyBhIHNpbXBsZSBBUEkgd3JhcHBlciB0byBleHBvc2Ugc29tZXRoaW5nIGJldHRlciB0byBwbGF5IHdpdGguXG4gICAgaW5wdXRDb21wb25lbnQ6IGlucHV0Q29tcG9uZW50LFxuICAgIGlucHV0UHJvcHM6IF9leHRlbmRzKHtcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICAgIEljb25Db21wb25lbnQ6IEljb25Db21wb25lbnQsXG4gICAgICB2YXJpYW50OiB2YXJpYW50LFxuICAgICAgdHlwZTogdW5kZWZpbmVkLFxuICAgICAgLy8gV2UgcmVuZGVyIGEgc2VsZWN0LiBXZSBjYW4gaWdub3JlIHRoZSB0eXBlIHByb3ZpZGVkIGJ5IHRoZSBgSW5wdXRgLlxuICAgICAgbXVsdGlwbGU6IG11bHRpcGxlXG4gICAgfSwgbmF0aXZlID8ge1xuICAgICAgaWQ6IGlkXG4gICAgfSA6IHtcbiAgICAgIGF1dG9XaWR0aDogYXV0b1dpZHRoLFxuICAgICAgZGlzcGxheUVtcHR5OiBkaXNwbGF5RW1wdHksXG4gICAgICBsYWJlbElkOiBsYWJlbElkLFxuICAgICAgTWVudVByb3BzOiBNZW51UHJvcHMsXG4gICAgICBvbkNsb3NlOiBvbkNsb3NlLFxuICAgICAgb25PcGVuOiBvbk9wZW4sXG4gICAgICBvcGVuOiBvcGVuLFxuICAgICAgcmVuZGVyVmFsdWU6IHJlbmRlclZhbHVlLFxuICAgICAgU2VsZWN0RGlzcGxheVByb3BzOiBfZXh0ZW5kcyh7XG4gICAgICAgIGlkOiBpZFxuICAgICAgfSwgU2VsZWN0RGlzcGxheVByb3BzKVxuICAgIH0sIGlucHV0UHJvcHMsIHtcbiAgICAgIGNsYXNzZXM6IGlucHV0UHJvcHMgPyBtZXJnZUNsYXNzZXMoe1xuICAgICAgICBiYXNlQ2xhc3NlczogY2xhc3NlcyxcbiAgICAgICAgbmV3Q2xhc3NlczogaW5wdXRQcm9wcy5jbGFzc2VzLFxuICAgICAgICBDb21wb25lbnQ6IFNlbGVjdFxuICAgICAgfSkgOiBjbGFzc2VzXG4gICAgfSwgaW5wdXQgPyBpbnB1dC5wcm9wcy5pbnB1dFByb3BzIDoge30pLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFNlbGVjdC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB3aWR0aCBvZiB0aGUgcG9wb3ZlciB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgc2V0IGFjY29yZGluZyB0byB0aGUgaXRlbXMgaW5zaWRlIHRoZVxuICAgKiBtZW51LCBvdGhlcndpc2UgaXQgd2lsbCBiZSBhdCBsZWFzdCB0aGUgd2lkdGggb2YgdGhlIHNlbGVjdCBpbnB1dC5cbiAgICovXG4gIGF1dG9XaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBvcHRpb24gZWxlbWVudHMgdG8gcG9wdWxhdGUgdGhlIHNlbGVjdCB3aXRoLlxuICAgKiBDYW4gYmUgc29tZSBgTWVudUl0ZW1gIHdoZW4gYG5hdGl2ZWAgaXMgZmFsc2UgYW5kIGBvcHRpb25gIHdoZW4gYG5hdGl2ZWAgaXMgdHJ1ZS5cbiAgICpcbiAgICog4pqg77iPVGhlIGBNZW51SXRlbWAgZWxlbWVudHMgKiptdXN0KiogYmUgZGlyZWN0IGRlc2NlbmRhbnRzIHdoZW4gYG5hdGl2ZWAgaXMgZmFsc2UuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgZWxlbWVudCB2YWx1ZS4gVXNlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBub3QgY29udHJvbGxlZC5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBhIHZhbHVlIGlzIGRpc3BsYXllZCBldmVuIGlmIG5vIGl0ZW1zIGFyZSBzZWxlY3RlZC5cbiAgICpcbiAgICogSW4gb3JkZXIgdG8gZGlzcGxheSBhIG1lYW5pbmdmdWwgdmFsdWUsIGEgZnVuY3Rpb24gc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgYHJlbmRlclZhbHVlYCBwcm9wIHdoaWNoIHJldHVybnMgdGhlIHZhbHVlIHRvIGJlIGRpc3BsYXllZCB3aGVuIG5vIGl0ZW1zIGFyZSBzZWxlY3RlZC5cbiAgICogWW91IGNhbiBvbmx5IHVzZSBpdCB3aGVuIHRoZSBgbmF0aXZlYCBwcm9wIGlzIGBmYWxzZWAgKGRlZmF1bHQpLlxuICAgKi9cbiAgZGlzcGxheUVtcHR5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGljb24gdGhhdCBkaXNwbGF5cyB0aGUgYXJyb3cuXG4gICAqL1xuICBJY29uQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFRoZSBgaWRgIG9mIHRoZSB3cmFwcGVyIGVsZW1lbnQgb3IgdGhlIGBzZWxlY3RgIGVsZW1lbnQgd2hlbiBgbmF0aXZlYC5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBBbiBgSW5wdXRgIGVsZW1lbnQ7IGRvZXMgbm90IGhhdmUgdG8gYmUgYSBtYXRlcmlhbC11aSBzcGVjaWZpYyBgSW5wdXRgLlxuICAgKi9cbiAgaW5wdXQ6IFByb3BUeXBlcy5lbGVtZW50LFxuXG4gIC8qKlxuICAgKiBbQXR0cmlidXRlc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0F0dHJpYnV0ZXMpIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICogV2hlbiBgbmF0aXZlYCBpcyBgdHJ1ZWAsIHRoZSBhdHRyaWJ1dGVzIGFyZSBhcHBsaWVkIG9uIHRoZSBgc2VsZWN0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogU2VlIFtPdXRsaW5lZElucHV0I2xhYmVsXSgvYXBpL291dGxpbmVkLWlucHV0LyNwcm9wcylcbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIElEIG9mIGFuIGVsZW1lbnQgdGhhdCBhY3RzIGFzIGFuIGFkZGl0aW9uYWwgbGFiZWwuIFRoZSBTZWxlY3Qgd2lsbFxuICAgKiBiZSBsYWJlbGxlZCBieSB0aGUgYWRkaXRpb25hbCBsYWJlbCBhbmQgdGhlIHNlbGVjdGVkIHZhbHVlLlxuICAgKi9cbiAgbGFiZWxJZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogU2VlIFtPdXRsaW5lZElucHV0I2xhYmVsXSgvYXBpL291dGxpbmVkLWlucHV0LyNwcm9wcylcbiAgICovXG4gIGxhYmVsV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIFtgTWVudWBdKC9hcGkvbWVudS8pIGVsZW1lbnQuXG4gICAqL1xuICBNZW51UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYHZhbHVlYCBtdXN0IGJlIGFuIGFycmF5IGFuZCB0aGUgbWVudSB3aWxsIHN1cHBvcnQgbXVsdGlwbGUgc2VsZWN0aW9ucy5cbiAgICovXG4gIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgY29tcG9uZW50IHdpbGwgYmUgdXNpbmcgYSBuYXRpdmUgYHNlbGVjdGAgZWxlbWVudC5cbiAgICovXG4gIG5hdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gYSBtZW51IGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LnZhbHVlYCAoYW55KS5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtjaGlsZF0gVGhlIHJlYWN0IGVsZW1lbnQgdGhhdCB3YXMgc2VsZWN0ZWQgd2hlbiBgbmF0aXZlYCBpcyBgZmFsc2VgIChkZWZhdWx0KS5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IHJlcXVlc3RzIHRvIGJlIGNsb3NlZC5cbiAgICogVXNlIGluIGNvbnRyb2xsZWQgbW9kZSAoc2VlIG9wZW4pLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqL1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IHJlcXVlc3RzIHRvIGJlIG9wZW5lZC5cbiAgICogVXNlIGluIGNvbnRyb2xsZWQgbW9kZSAoc2VlIG9wZW4pLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqL1xuICBvbk9wZW46IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDb250cm9sIGBzZWxlY3RgIG9wZW4gc3RhdGUuXG4gICAqIFlvdSBjYW4gb25seSB1c2UgaXQgd2hlbiB0aGUgYG5hdGl2ZWAgcHJvcCBpcyBgZmFsc2VgIChkZWZhdWx0KS5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIHNlbGVjdGVkIHZhbHVlLlxuICAgKiBZb3UgY2FuIG9ubHkgdXNlIGl0IHdoZW4gdGhlIGBuYXRpdmVgIHByb3AgaXMgYGZhbHNlYCAoZGVmYXVsdCkuXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZSBUaGUgYHZhbHVlYCBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBAcmV0dXJucyB7UmVhY3ROb2RlfVxuICAgKi9cbiAgcmVuZGVyVmFsdWU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBjbGlja2FibGUgZGl2IGVsZW1lbnQuXG4gICAqL1xuICBTZWxlY3REaXNwbGF5UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBpbnB1dCB2YWx1ZS4gUHJvdmlkaW5nIGFuIGVtcHR5IHN0cmluZyB3aWxsIHNlbGVjdCBubyBvcHRpb25zLlxuICAgKiBUaGlzIHByb3AgaXMgcmVxdWlyZWQgd2hlbiB0aGUgYG5hdGl2ZWAgcHJvcCBpcyBgZmFsc2VgIChkZWZhdWx0KS5cbiAgICogU2V0IHRvIGFuIGVtcHR5IHN0cmluZyBgJydgIGlmIHlvdSBkb24ndCB3YW50IGFueSBvZiB0aGUgYXZhaWxhYmxlIG9wdGlvbnMgdG8gYmUgc2VsZWN0ZWQuXG4gICAqXG4gICAqIElmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3QgaXQgbXVzdCBoYXZlIHJlZmVyZW5jZSBlcXVhbGl0eSB3aXRoIHRoZSBvcHRpb24gaW4gb3JkZXIgdG8gYmUgc2VsZWN0ZWQuXG4gICAqIElmIHRoZSB2YWx1ZSBpcyBub3QgYW4gb2JqZWN0LCB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG11c3QgbWF0Y2ggd2l0aCB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvcHRpb24gaW4gb3JkZXIgdG8gYmUgc2VsZWN0ZWQuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZmlsbGVkJywgJ291dGxpbmVkJywgJ3N0YW5kYXJkJ10pXG59IDogdm9pZCAwO1xuU2VsZWN0Lm11aU5hbWUgPSAnU2VsZWN0JztcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlTZWxlY3QnXG59KShTZWxlY3QpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0ZyYWdtZW50IH0gZnJvbSAncmVhY3QtaXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnLi4vdXRpbHMvb3duZXJEb2N1bWVudCc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmltcG9ydCB7IHJlZlR5cGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vTWVudS9NZW51JztcbmltcG9ydCB7IGlzRmlsbGVkIH0gZnJvbSAnLi4vSW5wdXRCYXNlL3V0aWxzJztcbmltcG9ydCB1c2VGb3JrUmVmIGZyb20gJy4uL3V0aWxzL3VzZUZvcmtSZWYnO1xuaW1wb3J0IHVzZUNvbnRyb2xsZWQgZnJvbSAnLi4vdXRpbHMvdXNlQ29udHJvbGxlZCc7XG5cbmZ1bmN0aW9uIGFyZUVxdWFsVmFsdWVzKGEsIGIpIHtcbiAgaWYgKF90eXBlb2YoYikgPT09ICdvYmplY3QnICYmIGIgIT09IG51bGwpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfVxuXG4gIHJldHVybiBTdHJpbmcoYSkgPT09IFN0cmluZyhiKTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eShkaXNwbGF5KSB7XG4gIHJldHVybiBkaXNwbGF5ID09IG51bGwgfHwgdHlwZW9mIGRpc3BsYXkgPT09ICdzdHJpbmcnICYmICFkaXNwbGF5LnRyaW0oKTtcbn1cbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG5cbnZhciBTZWxlY3RJbnB1dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFNlbGVjdElucHV0KHByb3BzLCByZWYpIHtcbiAgdmFyIGFyaWFMYWJlbCA9IHByb3BzWydhcmlhLWxhYmVsJ10sXG4gICAgICBhdXRvRm9jdXMgPSBwcm9wcy5hdXRvRm9jdXMsXG4gICAgICBhdXRvV2lkdGggPSBwcm9wcy5hdXRvV2lkdGgsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzcGxheUVtcHR5ID0gcHJvcHMuZGlzcGxheUVtcHR5LFxuICAgICAgSWNvbkNvbXBvbmVudCA9IHByb3BzLkljb25Db21wb25lbnQsXG4gICAgICBpbnB1dFJlZlByb3AgPSBwcm9wcy5pbnB1dFJlZixcbiAgICAgIGxhYmVsSWQgPSBwcm9wcy5sYWJlbElkLFxuICAgICAgX3Byb3BzJE1lbnVQcm9wcyA9IHByb3BzLk1lbnVQcm9wcyxcbiAgICAgIE1lbnVQcm9wcyA9IF9wcm9wcyRNZW51UHJvcHMgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJE1lbnVQcm9wcyxcbiAgICAgIG11bHRpcGxlID0gcHJvcHMubXVsdGlwbGUsXG4gICAgICBuYW1lID0gcHJvcHMubmFtZSxcbiAgICAgIG9uQmx1ciA9IHByb3BzLm9uQmx1cixcbiAgICAgIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UsXG4gICAgICBvbkNsb3NlID0gcHJvcHMub25DbG9zZSxcbiAgICAgIG9uRm9jdXMgPSBwcm9wcy5vbkZvY3VzLFxuICAgICAgb25PcGVuID0gcHJvcHMub25PcGVuLFxuICAgICAgb3BlblByb3AgPSBwcm9wcy5vcGVuLFxuICAgICAgcmVhZE9ubHkgPSBwcm9wcy5yZWFkT25seSxcbiAgICAgIHJlbmRlclZhbHVlID0gcHJvcHMucmVuZGVyVmFsdWUsXG4gICAgICBfcHJvcHMkU2VsZWN0RGlzcGxheVAgPSBwcm9wcy5TZWxlY3REaXNwbGF5UHJvcHMsXG4gICAgICBTZWxlY3REaXNwbGF5UHJvcHMgPSBfcHJvcHMkU2VsZWN0RGlzcGxheVAgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJFNlbGVjdERpc3BsYXlQLFxuICAgICAgdGFiSW5kZXhQcm9wID0gcHJvcHMudGFiSW5kZXgsXG4gICAgICB0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgIHZhbHVlUHJvcCA9IHByb3BzLnZhbHVlLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnc3RhbmRhcmQnIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYXJpYS1sYWJlbFwiLCBcImF1dG9Gb2N1c1wiLCBcImF1dG9XaWR0aFwiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImRlZmF1bHRWYWx1ZVwiLCBcImRpc2FibGVkXCIsIFwiZGlzcGxheUVtcHR5XCIsIFwiSWNvbkNvbXBvbmVudFwiLCBcImlucHV0UmVmXCIsIFwibGFiZWxJZFwiLCBcIk1lbnVQcm9wc1wiLCBcIm11bHRpcGxlXCIsIFwibmFtZVwiLCBcIm9uQmx1clwiLCBcIm9uQ2hhbmdlXCIsIFwib25DbG9zZVwiLCBcIm9uRm9jdXNcIiwgXCJvbk9wZW5cIiwgXCJvcGVuXCIsIFwicmVhZE9ubHlcIiwgXCJyZW5kZXJWYWx1ZVwiLCBcIlNlbGVjdERpc3BsYXlQcm9wc1wiLCBcInRhYkluZGV4XCIsIFwidHlwZVwiLCBcInZhbHVlXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIF91c2VDb250cm9sbGVkID0gdXNlQ29udHJvbGxlZCh7XG4gICAgY29udHJvbGxlZDogdmFsdWVQcm9wLFxuICAgIGRlZmF1bHQ6IGRlZmF1bHRWYWx1ZSxcbiAgICBuYW1lOiAnU2VsZWN0J1xuICB9KSxcbiAgICAgIF91c2VDb250cm9sbGVkMiA9IF9zbGljZWRUb0FycmF5KF91c2VDb250cm9sbGVkLCAyKSxcbiAgICAgIHZhbHVlID0gX3VzZUNvbnRyb2xsZWQyWzBdLFxuICAgICAgc2V0VmFsdWUgPSBfdXNlQ29udHJvbGxlZDJbMV07XG5cbiAgdmFyIGlucHV0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShudWxsKSxcbiAgICAgIGRpc3BsYXlOb2RlID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0RGlzcGxheU5vZGUgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VSZWYgPSBSZWFjdC51c2VSZWYob3BlblByb3AgIT0gbnVsbCksXG4gICAgICBpc09wZW5Db250cm9sbGVkID0gX1JlYWN0JHVzZVJlZi5jdXJyZW50O1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUyID0gUmVhY3QudXNlU3RhdGUoKSxcbiAgICAgIG1lbnVNaW5XaWR0aFN0YXRlID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldE1lbnVNaW5XaWR0aFN0YXRlID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMyA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIG9wZW5TdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZTNbMF0sXG4gICAgICBzZXRPcGVuU3RhdGUgPSBfUmVhY3QkdXNlU3RhdGUzWzFdO1xuXG4gIHZhciBoYW5kbGVSZWYgPSB1c2VGb3JrUmVmKHJlZiwgaW5wdXRSZWZQcm9wKTtcbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShoYW5kbGVSZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9jdXM6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgICBkaXNwbGF5Tm9kZS5mb2N1cygpO1xuICAgICAgfSxcbiAgICAgIG5vZGU6IGlucHV0UmVmLmN1cnJlbnQsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9O1xuICB9LCBbZGlzcGxheU5vZGUsIHZhbHVlXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGF1dG9Gb2N1cyAmJiBkaXNwbGF5Tm9kZSkge1xuICAgICAgZGlzcGxheU5vZGUuZm9jdXMoKTtcbiAgICB9XG4gIH0sIFthdXRvRm9jdXMsIGRpc3BsYXlOb2RlXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRpc3BsYXlOb2RlKSB7XG4gICAgICB2YXIgbGFiZWwgPSBvd25lckRvY3VtZW50KGRpc3BsYXlOb2RlKS5nZXRFbGVtZW50QnlJZChsYWJlbElkKTtcblxuICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICBpZiAoZ2V0U2VsZWN0aW9uKCkuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIGRpc3BsYXlOb2RlLmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbGFiZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9LCBbbGFiZWxJZCwgZGlzcGxheU5vZGVdKTtcblxuICB2YXIgdXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKG9wZW4sIGV2ZW50KSB7XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIGlmIChvbk9wZW4pIHtcbiAgICAgICAgb25PcGVuKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9uQ2xvc2UpIHtcbiAgICAgIG9uQ2xvc2UoZXZlbnQpO1xuICAgIH1cblxuICAgIGlmICghaXNPcGVuQ29udHJvbGxlZCkge1xuICAgICAgc2V0TWVudU1pbldpZHRoU3RhdGUoYXV0b1dpZHRoID8gbnVsbCA6IGRpc3BsYXlOb2RlLmNsaWVudFdpZHRoKTtcbiAgICAgIHNldE9wZW5TdGF0ZShvcGVuKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZU1vdXNlRG93biA9IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuICAgIC8vIElnbm9yZSBldmVyeXRoaW5nIGJ1dCBsZWZ0LWNsaWNrXG4gICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gSGlqYWNrIHRoZSBkZWZhdWx0IGZvY3VzIGJlaGF2aW9yLlxuXG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRpc3BsYXlOb2RlLmZvY3VzKCk7XG4gICAgdXBkYXRlKHRydWUsIGV2ZW50KTtcbiAgfTtcblxuICB2YXIgaGFuZGxlQ2xvc2UgPSBmdW5jdGlvbiBoYW5kbGVDbG9zZShldmVudCkge1xuICAgIHVwZGF0ZShmYWxzZSwgZXZlbnQpO1xuICB9O1xuXG4gIHZhciBjaGlsZHJlbkFycmF5ID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7IC8vIFN1cHBvcnQgYXV0b2ZpbGwuXG5cbiAgdmFyIGhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHZhciBpbmRleCA9IGNoaWxkcmVuQXJyYXkubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgcmV0dXJuIGNoaWxkLnByb3BzLnZhbHVlO1xuICAgIH0pLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbkFycmF5W2luZGV4XTtcbiAgICBzZXRWYWx1ZShjaGlsZC5wcm9wcy52YWx1ZSk7XG5cbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKGV2ZW50LCBjaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVJdGVtQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVJdGVtQ2xpY2soY2hpbGQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIW11bHRpcGxlKSB7XG4gICAgICAgIHVwZGF0ZShmYWxzZSwgZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3VmFsdWU7XG5cbiAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICBuZXdWYWx1ZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUuc2xpY2UoKSA6IFtdO1xuICAgICAgICB2YXIgaXRlbUluZGV4ID0gdmFsdWUuaW5kZXhPZihjaGlsZC5wcm9wcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGl0ZW1JbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBuZXdWYWx1ZS5wdXNoKGNoaWxkLnByb3BzLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdWYWx1ZS5zcGxpY2UoaXRlbUluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3VmFsdWUgPSBjaGlsZC5wcm9wcy52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhldmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG5cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBldmVudC5wZXJzaXN0KCk7IC8vIFByZWFjdCBzdXBwb3J0LCB0YXJnZXQgaXMgcmVhZCBvbmx5IHByb3BlcnR5IG9uIGEgbmF0aXZlIGV2ZW50LlxuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ3RhcmdldCcsIHtcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG9uQ2hhbmdlKGV2ZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICBpZiAoIXJlYWRPbmx5KSB7XG4gICAgICB2YXIgdmFsaWRLZXlzID0gWycgJywgJ0Fycm93VXAnLCAnQXJyb3dEb3duJywgLy8gVGhlIG5hdGl2ZSBzZWxlY3QgZG9lc24ndCByZXNwb25kIHRvIGVudGVyIG9uIE1hY09TLCBidXQgaXQncyByZWNvbW1lbmRlZCBieVxuICAgICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLXByYWN0aWNlcy9leGFtcGxlcy9saXN0Ym94L2xpc3Rib3gtY29sbGFwc2libGUuaHRtbFxuICAgICAgJ0VudGVyJ107XG5cbiAgICAgIGlmICh2YWxpZEtleXMuaW5kZXhPZihldmVudC5rZXkpICE9PSAtMSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB1cGRhdGUodHJ1ZSwgZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgb3BlbiA9IGRpc3BsYXlOb2RlICE9PSBudWxsICYmIChpc09wZW5Db250cm9sbGVkID8gb3BlblByb3AgOiBvcGVuU3RhdGUpO1xuXG4gIHZhciBoYW5kbGVCbHVyID0gZnVuY3Rpb24gaGFuZGxlQmx1cihldmVudCkge1xuICAgIC8vIGlmIG9wZW4gZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uXG4gICAgaWYgKCFvcGVuICYmIG9uQmx1cikge1xuICAgICAgZXZlbnQucGVyc2lzdCgpOyAvLyBQcmVhY3Qgc3VwcG9ydCwgdGFyZ2V0IGlzIHJlYWQgb25seSBwcm9wZXJ0eSBvbiBhIG5hdGl2ZSBldmVudC5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2ZW50LCAndGFyZ2V0Jywge1xuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIG9uQmx1cihldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIGRlbGV0ZSBvdGhlclsnYXJpYS1pbnZhbGlkJ107XG4gIHZhciBkaXNwbGF5O1xuICB2YXIgZGlzcGxheVNpbmdsZTtcbiAgdmFyIGRpc3BsYXlNdWx0aXBsZSA9IFtdO1xuICB2YXIgY29tcHV0ZURpc3BsYXkgPSBmYWxzZTtcbiAgdmFyIGZvdW5kTWF0Y2ggPSBmYWxzZTsgLy8gTm8gbmVlZCB0byBkaXNwbGF5IGFueSB2YWx1ZSBpZiB0aGUgZmllbGQgaXMgZW1wdHkuXG5cbiAgaWYgKGlzRmlsbGVkKHtcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSkgfHwgZGlzcGxheUVtcHR5KSB7XG4gICAgaWYgKHJlbmRlclZhbHVlKSB7XG4gICAgICBkaXNwbGF5ID0gcmVuZGVyVmFsdWUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wdXRlRGlzcGxheSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGl0ZW1zID0gY2hpbGRyZW5BcnJheS5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKCEgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChpc0ZyYWdtZW50KGNoaWxkKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgU2VsZWN0IGNvbXBvbmVudCBkb2Vzbid0IGFjY2VwdCBhIEZyYWdtZW50IGFzIGEgY2hpbGQuXCIsICdDb25zaWRlciBwcm92aWRpbmcgYW4gYXJyYXkgaW5zdGVhZC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHNlbGVjdGVkO1xuXG4gICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBUaGUgYHZhbHVlYCBwcm9wIG11c3QgYmUgYW4gYXJyYXkgd2hlbiB1c2luZyB0aGUgYFNlbGVjdGAgY29tcG9uZW50IHdpdGggYG11bHRpcGxlYC5cIiA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoMikpO1xuICAgICAgfVxuXG4gICAgICBzZWxlY3RlZCA9IHZhbHVlLnNvbWUoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIGFyZUVxdWFsVmFsdWVzKHYsIGNoaWxkLnByb3BzLnZhbHVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc2VsZWN0ZWQgJiYgY29tcHV0ZURpc3BsYXkpIHtcbiAgICAgICAgZGlzcGxheU11bHRpcGxlLnB1c2goY2hpbGQucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RlZCA9IGFyZUVxdWFsVmFsdWVzKHZhbHVlLCBjaGlsZC5wcm9wcy52YWx1ZSk7XG5cbiAgICAgIGlmIChzZWxlY3RlZCAmJiBjb21wdXRlRGlzcGxheSkge1xuICAgICAgICBkaXNwbGF5U2luZ2xlID0gY2hpbGQucHJvcHMuY2hpbGRyZW47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICBmb3VuZE1hdGNoID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBzZWxlY3RlZCA/ICd0cnVlJyA6IHVuZGVmaW5lZCxcbiAgICAgIG9uQ2xpY2s6IGhhbmRsZUl0ZW1DbGljayhjaGlsZCksXG4gICAgICBvbktleVVwOiBmdW5jdGlvbiBvbktleVVwKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICcgJykge1xuICAgICAgICAgIC8vIG90aGVyd2lzZSBvdXIgTWVudUl0ZW1zIGRpc3BhdGNoZXMgYSBjbGljayBldmVudFxuICAgICAgICAgIC8vIGl0J3Mgbm90IGJlaGF2aW9yIG9mIHRoZSBuYXRpdmUgPG9wdGlvbj4gYW5kIGNhdXNlc1xuICAgICAgICAgIC8vIHRoZSBzZWxlY3QgdG8gY2xvc2UgaW1tZWRpYXRlbHkgc2luY2Ugd2Ugb3BlbiBvbiBzcGFjZSBrZXlkb3duXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZC5wcm9wcy5vbktleVVwKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25LZXlVcChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByb2xlOiAnb3B0aW9uJyxcbiAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZCxcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAvLyBUaGUgdmFsdWUgaXMgbW9zdCBsaWtlbHkgbm90IGEgdmFsaWQgSFRNTCBhdHRyaWJ1dGUuXG4gICAgICAnZGF0YS12YWx1ZSc6IGNoaWxkLnByb3BzLnZhbHVlIC8vIEluc3RlYWQsIHdlIHByb3ZpZGUgaXQgYXMgYSBkYXRhIGF0dHJpYnV0ZS5cblxuICAgIH0pO1xuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWZvdW5kTWF0Y2ggJiYgIW11bHRpcGxlICYmIHZhbHVlICE9PSAnJykge1xuICAgICAgICB2YXIgdmFsdWVzID0gY2hpbGRyZW5BcnJheS5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkLnByb3BzLnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS53YXJuKFtcIk1hdGVyaWFsLVVJOiBZb3UgaGF2ZSBwcm92aWRlZCBhbiBvdXQtb2YtcmFuZ2UgdmFsdWUgYFwiLmNvbmNhdCh2YWx1ZSwgXCJgIGZvciB0aGUgc2VsZWN0IFwiKS5jb25jYXQobmFtZSA/IFwiKG5hbWU9XFxcIlwiLmNvbmNhdChuYW1lLCBcIlxcXCIpIFwiKSA6ICcnLCBcImNvbXBvbmVudC5cIiksIFwiQ29uc2lkZXIgcHJvdmlkaW5nIGEgdmFsdWUgdGhhdCBtYXRjaGVzIG9uZSBvZiB0aGUgYXZhaWxhYmxlIG9wdGlvbnMgb3IgJycuXCIsIFwiVGhlIGF2YWlsYWJsZSB2YWx1ZXMgYXJlIFwiLmNvbmNhdCh2YWx1ZXMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgcmV0dXJuIHggIT0gbnVsbDtcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgcmV0dXJuIFwiYFwiLmNvbmNhdCh4LCBcImBcIik7XG4gICAgICAgIH0pLmpvaW4oJywgJykgfHwgJ1wiXCInLCBcIi5cIildLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9LCBbZm91bmRNYXRjaCwgY2hpbGRyZW5BcnJheSwgbXVsdGlwbGUsIG5hbWUsIHZhbHVlXSk7XG4gIH1cblxuICBpZiAoY29tcHV0ZURpc3BsYXkpIHtcbiAgICBkaXNwbGF5ID0gbXVsdGlwbGUgPyBkaXNwbGF5TXVsdGlwbGUuam9pbignLCAnKSA6IGRpc3BsYXlTaW5nbGU7XG4gIH0gLy8gQXZvaWQgcGVyZm9ybWluZyBhIGxheW91dCBjb21wdXRhdGlvbiBpbiB0aGUgcmVuZGVyIG1ldGhvZC5cblxuXG4gIHZhciBtZW51TWluV2lkdGggPSBtZW51TWluV2lkdGhTdGF0ZTtcblxuICBpZiAoIWF1dG9XaWR0aCAmJiBpc09wZW5Db250cm9sbGVkICYmIGRpc3BsYXlOb2RlKSB7XG4gICAgbWVudU1pbldpZHRoID0gZGlzcGxheU5vZGUuY2xpZW50V2lkdGg7XG4gIH1cblxuICB2YXIgdGFiSW5kZXg7XG5cbiAgaWYgKHR5cGVvZiB0YWJJbmRleFByb3AgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGFiSW5kZXggPSB0YWJJbmRleFByb3A7XG4gIH0gZWxzZSB7XG4gICAgdGFiSW5kZXggPSBkaXNhYmxlZCA/IG51bGwgOiAwO1xuICB9XG5cbiAgdmFyIGJ1dHRvbklkID0gU2VsZWN0RGlzcGxheVByb3BzLmlkIHx8IChuYW1lID8gXCJtdWktY29tcG9uZW50LXNlbGVjdC1cIi5jb25jYXQobmFtZSkgOiB1bmRlZmluZWQpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCAvLyBUT0RPIHY1OiBtZXJnZSByb290IGFuZCBzZWxlY3RcbiAgICBjbGFzc2VzLnNlbGVjdCwgY2xhc3Nlcy5zZWxlY3RNZW51LCBjbGFzc2VzW3ZhcmlhbnRdLCBjbGFzc05hbWUsIGRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQpLFxuICAgIHJlZjogc2V0RGlzcGxheU5vZGUsXG4gICAgdGFiSW5kZXg6IHRhYkluZGV4LFxuICAgIHJvbGU6IFwiYnV0dG9uXCIsXG4gICAgXCJhcmlhLWRpc2FibGVkXCI6IGRpc2FibGVkID8gJ3RydWUnIDogdW5kZWZpbmVkLFxuICAgIFwiYXJpYS1leHBhbmRlZFwiOiBvcGVuID8gJ3RydWUnIDogdW5kZWZpbmVkLFxuICAgIFwiYXJpYS1oYXNwb3B1cFwiOiBcImxpc3Rib3hcIixcbiAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsLFxuICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFtsYWJlbElkLCBidXR0b25JZF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKSB8fCB1bmRlZmluZWQsXG4gICAgb25LZXlEb3duOiBoYW5kbGVLZXlEb3duLFxuICAgIG9uTW91c2VEb3duOiBkaXNhYmxlZCB8fCByZWFkT25seSA/IG51bGwgOiBoYW5kbGVNb3VzZURvd24sXG4gICAgb25CbHVyOiBoYW5kbGVCbHVyLFxuICAgIG9uRm9jdXM6IG9uRm9jdXNcbiAgfSwgU2VsZWN0RGlzcGxheVByb3BzLCB7XG4gICAgLy8gVGhlIGlkIGlzIHJlcXVpcmVkIGZvciBwcm9wZXIgYTExeVxuICAgIGlkOiBidXR0b25JZFxuICB9KSwgaXNFbXB0eShkaXNwbGF5KSA/XG4gIC8qI19fUFVSRV9fKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgIF9faHRtbDogJyYjODIwMzsnXG4gICAgfVxuICB9KSA6IGRpc3BsYXkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIF9leHRlbmRzKHtcbiAgICB2YWx1ZTogQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5qb2luKCcsJykgOiB2YWx1ZSxcbiAgICBuYW1lOiBuYW1lLFxuICAgIHJlZjogaW5wdXRSZWYsXG4gICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgdGFiSW5kZXg6IC0xLFxuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5uYXRpdmVJbnB1dCxcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1c1xuICB9LCBvdGhlcikpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQ29tcG9uZW50LCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuaWNvbiwgY2xhc3Nlc1tcImljb25cIi5jb25jYXQoY2FwaXRhbGl6ZSh2YXJpYW50KSldLCBvcGVuICYmIGNsYXNzZXMuaWNvbk9wZW4sIGRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQpXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51LCBfZXh0ZW5kcyh7XG4gICAgaWQ6IFwibWVudS1cIi5jb25jYXQobmFtZSB8fCAnJyksXG4gICAgYW5jaG9yRWw6IGRpc3BsYXlOb2RlLFxuICAgIG9wZW46IG9wZW4sXG4gICAgb25DbG9zZTogaGFuZGxlQ2xvc2VcbiAgfSwgTWVudVByb3BzLCB7XG4gICAgTWVudUxpc3RQcm9wczogX2V4dGVuZHMoe1xuICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IGxhYmVsSWQsXG4gICAgICByb2xlOiAnbGlzdGJveCcsXG4gICAgICBkaXNhYmxlTGlzdFdyYXA6IHRydWVcbiAgICB9LCBNZW51UHJvcHMuTWVudUxpc3RQcm9wcyksXG4gICAgUGFwZXJQcm9wczogX2V4dGVuZHMoe30sIE1lbnVQcm9wcy5QYXBlclByb3BzLCB7XG4gICAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgICBtaW5XaWR0aDogbWVudU1pbldpZHRoXG4gICAgICB9LCBNZW51UHJvcHMuUGFwZXJQcm9wcyAhPSBudWxsID8gTWVudVByb3BzLlBhcGVyUHJvcHMuc3R5bGUgOiBudWxsKVxuICAgIH0pXG4gIH0pLCBpdGVtcykpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTZWxlY3RJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICAnYXJpYS1sYWJlbCc6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHdpZHRoIG9mIHRoZSBwb3BvdmVyIHdpbGwgYXV0b21hdGljYWxseSBiZSBzZXQgYWNjb3JkaW5nIHRvIHRoZSBpdGVtcyBpbnNpZGUgdGhlXG4gICAqIG1lbnUsIG90aGVyd2lzZSBpdCB3aWxsIGJlIGF0IGxlYXN0IHRoZSB3aWR0aCBvZiB0aGUgc2VsZWN0IGlucHV0LlxuICAgKi9cbiAgYXV0b1dpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIG9wdGlvbiBlbGVtZW50cyB0byBwb3B1bGF0ZSB0aGUgc2VsZWN0IHdpdGguXG4gICAqIENhbiBiZSBzb21lIGA8TWVudUl0ZW0+YCBlbGVtZW50cy5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBDU1MgY2xhc3MgbmFtZSBvZiB0aGUgc2VsZWN0IGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGVsZW1lbnQgdmFsdWUuIFVzZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbm90IGNvbnRyb2xsZWQuXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHNlbGVjdCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBzZWxlY3RlZCBpdGVtIGlzIGRpc3BsYXllZCBldmVuIGlmIGl0cyB2YWx1ZSBpcyBlbXB0eS5cbiAgICovXG4gIGRpc3BsYXlFbXB0eTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIHRoYXQgZGlzcGxheXMgdGhlIGFycm93LlxuICAgKi9cbiAgSWNvbkNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEltcGVyYXRpdmUgaGFuZGxlIGltcGxlbWVudGluZyBgeyB2YWx1ZTogVCwgbm9kZTogSFRNTEVsZW1lbnQsIGZvY3VzKCk6IHZvaWQgfWBcbiAgICogRXF1aXZhbGVudCB0byBgcmVmYFxuICAgKi9cbiAgaW5wdXRSZWY6IHJlZlR5cGUsXG5cbiAgLyoqXG4gICAqIFRoZSBJRCBvZiBhbiBlbGVtZW50IHRoYXQgYWN0cyBhcyBhbiBhZGRpdGlvbmFsIGxhYmVsLiBUaGUgU2VsZWN0IHdpbGxcbiAgICogYmUgbGFiZWxsZWQgYnkgdGhlIGFkZGl0aW9uYWwgbGFiZWwgYW5kIHRoZSBzZWxlY3RlZCB2YWx1ZS5cbiAgICovXG4gIGxhYmVsSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIFtgTWVudWBdKC9hcGkvbWVudS8pIGVsZW1lbnQuXG4gICAqL1xuICBNZW51UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYHZhbHVlYCBtdXN0IGJlIGFuIGFycmF5IGFuZCB0aGUgbWVudSB3aWxsIHN1cHBvcnQgbXVsdGlwbGUgc2VsZWN0aW9ucy5cbiAgICovXG4gIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTmFtZSBhdHRyaWJ1dGUgb2YgdGhlIGBzZWxlY3RgIG9yIGhpZGRlbiBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIGEgbWVudSBpdGVtIGlzIHNlbGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAgKGFueSkuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbY2hpbGRdIFRoZSByZWFjdCBlbGVtZW50IHRoYXQgd2FzIHNlbGVjdGVkLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgcmVxdWVzdHMgdG8gYmUgY2xvc2VkLlxuICAgKiBVc2UgaW4gY29udHJvbGxlZCBtb2RlIChzZWUgb3BlbikuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICovXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IHJlcXVlc3RzIHRvIGJlIG9wZW5lZC5cbiAgICogVXNlIGluIGNvbnRyb2xsZWQgbW9kZSAoc2VlIG9wZW4pLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqL1xuICBvbk9wZW46IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDb250cm9sIGBzZWxlY3RgIG9wZW4gc3RhdGUuXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIHNlbGVjdGVkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgVGhlIGB2YWx1ZWAgcHJvdmlkZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogQHJldHVybnMge1JlYWN0Tm9kZX1cbiAgICovXG4gIHJlbmRlclZhbHVlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgY2xpY2thYmxlIGRpdiBlbGVtZW50LlxuICAgKi9cbiAgU2VsZWN0RGlzcGxheVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICB0YWJJbmRleDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBUaGUgaW5wdXQgdmFsdWUuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnc3RhbmRhcmQnLCAnb3V0bGluZWQnLCAnZmlsbGVkJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgU2VsZWN0SW5wdXQ7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgY2hhaW5Qcm9wVHlwZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgyNCksXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ2ZpbGwnLCB7XG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInByaW1hcnlcImAuICovXG4gICAgY29sb3JQcmltYXJ5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJzZWNvbmRhcnlcImAuICovXG4gICAgY29sb3JTZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwiYWN0aW9uXCJgLiAqL1xuICAgIGNvbG9yQWN0aW9uOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uYWN0aXZlXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwiZXJyb3JcImAuICovXG4gICAgY29sb3JFcnJvcjoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpblxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cImRpc2FibGVkXCJgLiAqL1xuICAgIGNvbG9yRGlzYWJsZWQ6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmb250U2l6ZT1cImluaGVyaXRcImAuICovXG4gICAgZm9udFNpemVJbmhlcml0OiB7XG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGZvbnRTaXplPVwic21hbGxcImAuICovXG4gICAgZm9udFNpemVTbWFsbDoge1xuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgyMClcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZm9udFNpemU9XCJsYXJnZVwiYC4gKi9cbiAgICBmb250U2l6ZUxhcmdlOiB7XG4gICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDM1KVxuICAgIH1cbiAgfTtcbn07XG52YXIgU3ZnSWNvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFN2Z0ljb24ocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjb2xvciA9IF9wcm9wcyRjb2xvciA9PT0gdm9pZCAwID8gJ2luaGVyaXQnIDogX3Byb3BzJGNvbG9yLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdzdmcnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRmb250U2l6ZSA9IHByb3BzLmZvbnRTaXplLFxuICAgICAgZm9udFNpemUgPSBfcHJvcHMkZm9udFNpemUgPT09IHZvaWQgMCA/ICdtZWRpdW0nIDogX3Byb3BzJGZvbnRTaXplLFxuICAgICAgaHRtbENvbG9yID0gcHJvcHMuaHRtbENvbG9yLFxuICAgICAgdGl0bGVBY2Nlc3MgPSBwcm9wcy50aXRsZUFjY2VzcyxcbiAgICAgIF9wcm9wcyR2aWV3Qm94ID0gcHJvcHMudmlld0JveCxcbiAgICAgIHZpZXdCb3ggPSBfcHJvcHMkdmlld0JveCA9PT0gdm9pZCAwID8gJzAgMCAyNCAyNCcgOiBfcHJvcHMkdmlld0JveCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xvclwiLCBcImNvbXBvbmVudFwiLCBcImZvbnRTaXplXCIsIFwiaHRtbENvbG9yXCIsIFwidGl0bGVBY2Nlc3NcIiwgXCJ2aWV3Qm94XCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCBjb2xvciAhPT0gJ2luaGVyaXQnICYmIGNsYXNzZXNbXCJjb2xvclwiLmNvbmNhdChjYXBpdGFsaXplKGNvbG9yKSldLCBmb250U2l6ZSAhPT0gJ2RlZmF1bHQnICYmIGZvbnRTaXplICE9PSAnbWVkaXVtJyAmJiBjbGFzc2VzW1wiZm9udFNpemVcIi5jb25jYXQoY2FwaXRhbGl6ZShmb250U2l6ZSkpXSksXG4gICAgZm9jdXNhYmxlOiBcImZhbHNlXCIsXG4gICAgdmlld0JveDogdmlld0JveCxcbiAgICBjb2xvcjogaHRtbENvbG9yLFxuICAgIFwiYXJpYS1oaWRkZW5cIjogdGl0bGVBY2Nlc3MgPyB1bmRlZmluZWQgOiB0cnVlLFxuICAgIHJvbGU6IHRpdGxlQWNjZXNzID8gJ2ltZycgOiB1bmRlZmluZWQsXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBjaGlsZHJlbiwgdGl0bGVBY2Nlc3MgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIG51bGwsIHRpdGxlQWNjZXNzKSA6IG51bGwpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTdmdJY29uLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIE5vZGUgcGFzc2VkIGludG8gdGhlIFNWRyBlbGVtZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKiBZb3UgY2FuIHVzZSB0aGUgYGh0bWxDb2xvcmAgcHJvcCB0byBhcHBseSBhIGNvbG9yIGF0dHJpYnV0ZSB0byB0aGUgU1ZHIGVsZW1lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsnYWN0aW9uJywgJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ2luaGVyaXQnLCAncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBUaGUgZm9udFNpemUgYXBwbGllZCB0byB0aGUgaWNvbi4gRGVmYXVsdHMgdG8gMjRweCwgYnV0IGNhbiBiZSBjb25maWd1cmUgdG8gaW5oZXJpdCBmb250IHNpemUuXG4gICAqL1xuICBmb250U2l6ZTogY2hhaW5Qcm9wVHlwZXMoUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdpbmhlcml0JywgJ2xhcmdlJywgJ21lZGl1bScsICdzbWFsbCddKSwgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGZvbnRTaXplID0gcHJvcHMuZm9udFNpemU7XG5cbiAgICBpZiAoZm9udFNpemUgPT09ICdkZWZhdWx0Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRlcmlhbC1VSTogYGZvbnRTaXplPVwiZGVmYXVsdFwiYCBpcyBkZXByZWNhdGVkLiBVc2UgYGZvbnRTaXplPVwibWVkaXVtXCJgIGluc3RlYWQuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0pLFxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGEgY29sb3IgYXR0cmlidXRlIHRvIHRoZSBTVkcgZWxlbWVudC5cbiAgICovXG4gIGh0bWxDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIHNoYXBlLXJlbmRlcmluZyBhdHRyaWJ1dGUuIFRoZSBiZWhhdmlvciBvZiB0aGUgZGlmZmVyZW50IG9wdGlvbnMgaXMgZGVzY3JpYmVkIG9uIHRoZVxuICAgKiBbTUROIFdlYiBEb2NzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3NoYXBlLXJlbmRlcmluZykuXG4gICAqIElmIHlvdSBhcmUgaGF2aW5nIGlzc3VlcyB3aXRoIGJsdXJyeSBpY29ucyB5b3Ugc2hvdWxkIGludmVzdGlnYXRlIHRoaXMgcHJvcGVydHkuXG4gICAqL1xuICBzaGFwZVJlbmRlcmluZzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogUHJvdmlkZXMgYSBodW1hbi1yZWFkYWJsZSB0aXRsZSBmb3IgdGhlIGVsZW1lbnQgdGhhdCBjb250YWlucyBpdC5cbiAgICogaHR0cHM6Ly93d3cudzMub3JnL1RSL1NWRy1hY2Nlc3MvI0VxdWl2YWxlbnRcbiAgICovXG4gIHRpdGxlQWNjZXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBBbGxvd3MgeW91IHRvIHJlZGVmaW5lIHdoYXQgdGhlIGNvb3JkaW5hdGVzIHdpdGhvdXQgdW5pdHMgbWVhbiBpbnNpZGUgYW4gU1ZHIGVsZW1lbnQuXG4gICAqIEZvciBleGFtcGxlLCBpZiB0aGUgU1ZHIGVsZW1lbnQgaXMgNTAwICh3aWR0aCkgYnkgMjAwIChoZWlnaHQpLFxuICAgKiBhbmQgeW91IHBhc3Mgdmlld0JveD1cIjAgMCA1MCAyMFwiLFxuICAgKiB0aGlzIG1lYW5zIHRoYXQgdGhlIGNvb3JkaW5hdGVzIGluc2lkZSB0aGUgU1ZHIHdpbGwgZ28gZnJvbSB0aGUgdG9wIGxlZnQgY29ybmVyICgwLDApXG4gICAqIHRvIGJvdHRvbSByaWdodCAoNTAsMjApIGFuZCBlYWNoIHVuaXQgd2lsbCBiZSB3b3J0aCAxMHB4LlxuICAgKi9cbiAgdmlld0JveDogUHJvcFR5cGVzLnN0cmluZ1xufSA6IHZvaWQgMDtcblN2Z0ljb24ubXVpTmFtZSA9ICdTdmdJY29uJztcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlTdmdJY29uJ1xufSkoU3ZnSWNvbik7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgcmVmVHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vSW5wdXQnO1xuaW1wb3J0IEZpbGxlZElucHV0IGZyb20gJy4uL0ZpbGxlZElucHV0JztcbmltcG9ydCBPdXRsaW5lZElucHV0IGZyb20gJy4uL091dGxpbmVkSW5wdXQnO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnLi4vSW5wdXRMYWJlbCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnLi4vRm9ybUNvbnRyb2wnO1xuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJy4uL0Zvcm1IZWxwZXJUZXh0JztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vU2VsZWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbnZhciB2YXJpYW50Q29tcG9uZW50ID0ge1xuICBzdGFuZGFyZDogSW5wdXQsXG4gIGZpbGxlZDogRmlsbGVkSW5wdXQsXG4gIG91dGxpbmVkOiBPdXRsaW5lZElucHV0XG59O1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHt9XG59O1xuLyoqXG4gKiBUaGUgYFRleHRGaWVsZGAgaXMgYSBjb252ZW5pZW5jZSB3cmFwcGVyIGZvciB0aGUgbW9zdCBjb21tb24gY2FzZXMgKDgwJSkuXG4gKiBJdCBjYW5ub3QgYmUgYWxsIHRoaW5ncyB0byBhbGwgcGVvcGxlLCBvdGhlcndpc2UgdGhlIEFQSSB3b3VsZCBncm93IG91dCBvZiBjb250cm9sLlxuICpcbiAqICMjIEFkdmFuY2VkIENvbmZpZ3VyYXRpb25cbiAqXG4gKiBJdCdzIGltcG9ydGFudCB0byB1bmRlcnN0YW5kIHRoYXQgdGhlIHRleHQgZmllbGQgaXMgYSBzaW1wbGUgYWJzdHJhY3Rpb25cbiAqIG9uIHRvcCBvZiB0aGUgZm9sbG93aW5nIGNvbXBvbmVudHM6XG4gKlxuICogLSBbRm9ybUNvbnRyb2xdKC9hcGkvZm9ybS1jb250cm9sLylcbiAqIC0gW0lucHV0TGFiZWxdKC9hcGkvaW5wdXQtbGFiZWwvKVxuICogLSBbRmlsbGVkSW5wdXRdKC9hcGkvZmlsbGVkLWlucHV0LylcbiAqIC0gW091dGxpbmVkSW5wdXRdKC9hcGkvb3V0bGluZWQtaW5wdXQvKVxuICogLSBbSW5wdXRdKC9hcGkvaW5wdXQvKVxuICogLSBbRm9ybUhlbHBlclRleHRdKC9hcGkvZm9ybS1oZWxwZXItdGV4dC8pXG4gKlxuICogSWYgeW91IHdpc2ggdG8gYWx0ZXIgdGhlIHByb3BzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCwgeW91IGNhbiBkbyBzbyBhcyBmb2xsb3dzOlxuICpcbiAqIGBgYGpzeFxuICogY29uc3QgaW5wdXRQcm9wcyA9IHtcbiAqICAgc3RlcDogMzAwLFxuICogfTtcbiAqXG4gKiByZXR1cm4gPFRleHRGaWVsZCBpZD1cInRpbWVcIiB0eXBlPVwidGltZVwiIGlucHV0UHJvcHM9e2lucHV0UHJvcHN9IC8+O1xuICogYGBgXG4gKlxuICogRm9yIGFkdmFuY2VkIGNhc2VzLCBwbGVhc2UgbG9vayBhdCB0aGUgc291cmNlIG9mIFRleHRGaWVsZCBieSBjbGlja2luZyBvbiB0aGVcbiAqIFwiRWRpdCB0aGlzIHBhZ2VcIiBidXR0b24gYWJvdmUuIENvbnNpZGVyIGVpdGhlcjpcbiAqXG4gKiAtIHVzaW5nIHRoZSB1cHBlciBjYXNlIHByb3BzIGZvciBwYXNzaW5nIHZhbHVlcyBkaXJlY3RseSB0byB0aGUgY29tcG9uZW50c1xuICogLSB1c2luZyB0aGUgdW5kZXJseWluZyBjb21wb25lbnRzIGRpcmVjdGx5IGFzIHNob3duIGluIHRoZSBkZW1vc1xuICovXG5cbnZhciBUZXh0RmllbGQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUZXh0RmllbGQocHJvcHMsIHJlZikge1xuICB2YXIgYXV0b0NvbXBsZXRlID0gcHJvcHMuYXV0b0NvbXBsZXRlLFxuICAgICAgX3Byb3BzJGF1dG9Gb2N1cyA9IHByb3BzLmF1dG9Gb2N1cyxcbiAgICAgIGF1dG9Gb2N1cyA9IF9wcm9wcyRhdXRvRm9jdXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGF1dG9Gb2N1cyxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgY29sb3IgPSBfcHJvcHMkY29sb3IgPT09IHZvaWQgMCA/ICdwcmltYXJ5JyA6IF9wcm9wcyRjb2xvcixcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWQgPSBfcHJvcHMkZGlzYWJsZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVkLFxuICAgICAgX3Byb3BzJGVycm9yID0gcHJvcHMuZXJyb3IsXG4gICAgICBlcnJvciA9IF9wcm9wcyRlcnJvciA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZXJyb3IsXG4gICAgICBGb3JtSGVscGVyVGV4dFByb3BzID0gcHJvcHMuRm9ybUhlbHBlclRleHRQcm9wcyxcbiAgICAgIF9wcm9wcyRmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGgsXG4gICAgICBmdWxsV2lkdGggPSBfcHJvcHMkZnVsbFdpZHRoID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRmdWxsV2lkdGgsXG4gICAgICBoZWxwZXJUZXh0ID0gcHJvcHMuaGVscGVyVGV4dCxcbiAgICAgIGhpZGRlbkxhYmVsID0gcHJvcHMuaGlkZGVuTGFiZWwsXG4gICAgICBpZCA9IHByb3BzLmlkLFxuICAgICAgSW5wdXRMYWJlbFByb3BzID0gcHJvcHMuSW5wdXRMYWJlbFByb3BzLFxuICAgICAgaW5wdXRQcm9wcyA9IHByb3BzLmlucHV0UHJvcHMsXG4gICAgICBJbnB1dFByb3BzID0gcHJvcHMuSW5wdXRQcm9wcyxcbiAgICAgIGlucHV0UmVmID0gcHJvcHMuaW5wdXRSZWYsXG4gICAgICBsYWJlbCA9IHByb3BzLmxhYmVsLFxuICAgICAgX3Byb3BzJG11bHRpbGluZSA9IHByb3BzLm11bHRpbGluZSxcbiAgICAgIG11bHRpbGluZSA9IF9wcm9wcyRtdWx0aWxpbmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJG11bHRpbGluZSxcbiAgICAgIG5hbWUgPSBwcm9wcy5uYW1lLFxuICAgICAgb25CbHVyID0gcHJvcHMub25CbHVyLFxuICAgICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIG9uRm9jdXMgPSBwcm9wcy5vbkZvY3VzLFxuICAgICAgcGxhY2Vob2xkZXIgPSBwcm9wcy5wbGFjZWhvbGRlcixcbiAgICAgIF9wcm9wcyRyZXF1aXJlZCA9IHByb3BzLnJlcXVpcmVkLFxuICAgICAgcmVxdWlyZWQgPSBfcHJvcHMkcmVxdWlyZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHJlcXVpcmVkLFxuICAgICAgcm93cyA9IHByb3BzLnJvd3MsXG4gICAgICByb3dzTWF4ID0gcHJvcHMucm93c01heCxcbiAgICAgIG1heFJvd3MgPSBwcm9wcy5tYXhSb3dzLFxuICAgICAgbWluUm93cyA9IHByb3BzLm1pblJvd3MsXG4gICAgICBfcHJvcHMkc2VsZWN0ID0gcHJvcHMuc2VsZWN0LFxuICAgICAgc2VsZWN0ID0gX3Byb3BzJHNlbGVjdCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkc2VsZWN0LFxuICAgICAgU2VsZWN0UHJvcHMgPSBwcm9wcy5TZWxlY3RQcm9wcyxcbiAgICAgIHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ3N0YW5kYXJkJyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImF1dG9Db21wbGV0ZVwiLCBcImF1dG9Gb2N1c1wiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwiZGVmYXVsdFZhbHVlXCIsIFwiZGlzYWJsZWRcIiwgXCJlcnJvclwiLCBcIkZvcm1IZWxwZXJUZXh0UHJvcHNcIiwgXCJmdWxsV2lkdGhcIiwgXCJoZWxwZXJUZXh0XCIsIFwiaGlkZGVuTGFiZWxcIiwgXCJpZFwiLCBcIklucHV0TGFiZWxQcm9wc1wiLCBcImlucHV0UHJvcHNcIiwgXCJJbnB1dFByb3BzXCIsIFwiaW5wdXRSZWZcIiwgXCJsYWJlbFwiLCBcIm11bHRpbGluZVwiLCBcIm5hbWVcIiwgXCJvbkJsdXJcIiwgXCJvbkNoYW5nZVwiLCBcIm9uRm9jdXNcIiwgXCJwbGFjZWhvbGRlclwiLCBcInJlcXVpcmVkXCIsIFwicm93c1wiLCBcInJvd3NNYXhcIiwgXCJtYXhSb3dzXCIsIFwibWluUm93c1wiLCBcInNlbGVjdFwiLCBcIlNlbGVjdFByb3BzXCIsIFwidHlwZVwiLCBcInZhbHVlXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoc2VsZWN0ICYmICFjaGlsZHJlbikge1xuICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IGBjaGlsZHJlbmAgbXVzdCBiZSBwYXNzZWQgd2hlbiB1c2luZyB0aGUgYFRleHRGaWVsZGAgY29tcG9uZW50IHdpdGggYHNlbGVjdGAuJyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIElucHV0TW9yZSA9IHt9O1xuXG4gIGlmICh2YXJpYW50ID09PSAnb3V0bGluZWQnKSB7XG4gICAgaWYgKElucHV0TGFiZWxQcm9wcyAmJiB0eXBlb2YgSW5wdXRMYWJlbFByb3BzLnNocmluayAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIElucHV0TW9yZS5ub3RjaGVkID0gSW5wdXRMYWJlbFByb3BzLnNocmluaztcbiAgICB9XG5cbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIHZhciBfSW5wdXRMYWJlbFByb3BzJHJlcXU7XG5cbiAgICAgIHZhciBkaXNwbGF5UmVxdWlyZWQgPSAoX0lucHV0TGFiZWxQcm9wcyRyZXF1ID0gSW5wdXRMYWJlbFByb3BzID09PSBudWxsIHx8IElucHV0TGFiZWxQcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogSW5wdXRMYWJlbFByb3BzLnJlcXVpcmVkKSAhPT0gbnVsbCAmJiBfSW5wdXRMYWJlbFByb3BzJHJlcXUgIT09IHZvaWQgMCA/IF9JbnB1dExhYmVsUHJvcHMkcmVxdSA6IHJlcXVpcmVkO1xuICAgICAgSW5wdXRNb3JlLmxhYmVsID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGxhYmVsLCBkaXNwbGF5UmVxdWlyZWQgJiYgXCJcXHhBMCpcIik7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNlbGVjdCkge1xuICAgIC8vIHVuc2V0IGRlZmF1bHRzIGZyb20gdGV4dGJveCBpbnB1dHNcbiAgICBpZiAoIVNlbGVjdFByb3BzIHx8ICFTZWxlY3RQcm9wcy5uYXRpdmUpIHtcbiAgICAgIElucHV0TW9yZS5pZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBJbnB1dE1vcmVbJ2FyaWEtZGVzY3JpYmVkYnknXSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHZhciBoZWxwZXJUZXh0SWQgPSBoZWxwZXJUZXh0ICYmIGlkID8gXCJcIi5jb25jYXQoaWQsIFwiLWhlbHBlci10ZXh0XCIpIDogdW5kZWZpbmVkO1xuICB2YXIgaW5wdXRMYWJlbElkID0gbGFiZWwgJiYgaWQgPyBcIlwiLmNvbmNhdChpZCwgXCItbGFiZWxcIikgOiB1bmRlZmluZWQ7XG4gIHZhciBJbnB1dENvbXBvbmVudCA9IHZhcmlhbnRDb21wb25lbnRbdmFyaWFudF07XG4gIHZhciBJbnB1dEVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiBoZWxwZXJUZXh0SWQsXG4gICAgYXV0b0NvbXBsZXRlOiBhdXRvQ29tcGxldGUsXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgZnVsbFdpZHRoOiBmdWxsV2lkdGgsXG4gICAgbXVsdGlsaW5lOiBtdWx0aWxpbmUsXG4gICAgbmFtZTogbmFtZSxcbiAgICByb3dzOiByb3dzLFxuICAgIHJvd3NNYXg6IHJvd3NNYXgsXG4gICAgbWF4Um93czogbWF4Um93cyxcbiAgICBtaW5Sb3dzOiBtaW5Sb3dzLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGlkOiBpZCxcbiAgICBpbnB1dFJlZjogaW5wdXRSZWYsXG4gICAgb25CbHVyOiBvbkJsdXIsXG4gICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgIG9uRm9jdXM6IG9uRm9jdXMsXG4gICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgIGlucHV0UHJvcHM6IGlucHV0UHJvcHNcbiAgfSwgSW5wdXRNb3JlLCBJbnB1dFByb3BzKSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udHJvbCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSksXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIGVycm9yOiBlcnJvcixcbiAgICBmdWxsV2lkdGg6IGZ1bGxXaWR0aCxcbiAgICBoaWRkZW5MYWJlbDogaGlkZGVuTGFiZWwsXG4gICAgcmVmOiByZWYsXG4gICAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICAgIGNvbG9yOiBjb2xvcixcbiAgICB2YXJpYW50OiB2YXJpYW50XG4gIH0sIG90aGVyKSwgbGFiZWwgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRMYWJlbCwgX2V4dGVuZHMoe1xuICAgIGh0bWxGb3I6IGlkLFxuICAgIGlkOiBpbnB1dExhYmVsSWRcbiAgfSwgSW5wdXRMYWJlbFByb3BzKSwgbGFiZWwpLCBzZWxlY3QgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3QsIF9leHRlbmRzKHtcbiAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogaGVscGVyVGV4dElkLFxuICAgIGlkOiBpZCxcbiAgICBsYWJlbElkOiBpbnB1dExhYmVsSWQsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGlucHV0OiBJbnB1dEVsZW1lbnRcbiAgfSwgU2VsZWN0UHJvcHMpLCBjaGlsZHJlbikgOiBJbnB1dEVsZW1lbnQsIGhlbHBlclRleHQgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUhlbHBlclRleHQsIF9leHRlbmRzKHtcbiAgICBpZDogaGVscGVyVGV4dElkXG4gIH0sIEZvcm1IZWxwZXJUZXh0UHJvcHMpLCBoZWxwZXJUZXh0KSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRleHRGaWVsZC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGlzIHByb3AgaGVscHMgdXNlcnMgdG8gZmlsbCBmb3JtcyBmYXN0ZXIsIGVzcGVjaWFsbHkgb24gbW9iaWxlIGRldmljZXMuXG4gICAqIFRoZSBuYW1lIGNhbiBiZSBjb25mdXNpbmcsIGFzIGl0J3MgbW9yZSBsaWtlIGFuIGF1dG9maWxsLlxuICAgKiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgaXQgW2ZvbGxvd2luZyB0aGUgc3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybS1jb250cm9sLWluZnJhc3RydWN0dXJlLmh0bWwjYXV0b2ZpbGwpLlxuICAgKi9cbiAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBmb2N1c2VkIGR1cmluZyB0aGUgZmlyc3QgbW91bnQuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGBpbnB1dGAgZWxlbWVudCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCB3aWxsIGJlIGRpc3BsYXllZCBpbiBhbiBlcnJvciBzdGF0ZS5cbiAgICovXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgW2BGb3JtSGVscGVyVGV4dGBdKC9hcGkvZm9ybS1oZWxwZXItdGV4dC8pIGVsZW1lbnQuXG4gICAqL1xuICBGb3JtSGVscGVyVGV4dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cbiAgICovXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBoZWxwZXIgdGV4dCBjb250ZW50LlxuICAgKi9cbiAgaGVscGVyVGV4dDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGhpZGRlbkxhYmVsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqIFVzZSB0aGlzIHByb3AgdG8gbWFrZSBgbGFiZWxgIGFuZCBgaGVscGVyVGV4dGAgYWNjZXNzaWJsZSBmb3Igc2NyZWVuIHJlYWRlcnMuXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgW2BJbnB1dExhYmVsYF0oL2FwaS9pbnB1dC1sYWJlbC8pIGVsZW1lbnQuXG4gICAqL1xuICBJbnB1dExhYmVsUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFtBdHRyaWJ1dGVzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjQXR0cmlidXRlcykgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgSW5wdXQgZWxlbWVudC5cbiAgICogSXQgd2lsbCBiZSBhIFtgRmlsbGVkSW5wdXRgXSgvYXBpL2ZpbGxlZC1pbnB1dC8pLFxuICAgKiBbYE91dGxpbmVkSW5wdXRgXSgvYXBpL291dGxpbmVkLWlucHV0Lykgb3IgW2BJbnB1dGBdKC9hcGkvaW5wdXQvKVxuICAgKiBjb21wb25lbnQgZGVwZW5kaW5nIG9uIHRoZSBgdmFyaWFudGAgcHJvcCB2YWx1ZS5cbiAgICovXG4gIElucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFBhc3MgYSByZWYgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UmVmOiByZWZUeXBlLFxuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgY29udGVudC5cbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogSWYgYGRlbnNlYCBvciBgbm9ybWFsYCwgd2lsbCBhZGp1c3QgdmVydGljYWwgc3BhY2luZyBvZiB0aGlzIGFuZCBjb250YWluZWQgY29tcG9uZW50cy5cbiAgICovXG4gIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mKFsnZGVuc2UnLCAnbm9uZScsICdub3JtYWwnXSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICBtYXhSb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIE1pbmltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheS5cbiAgICovXG4gIG1pblJvd3M6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBhIHRleHRhcmVhIGVsZW1lbnQgd2lsbCBiZSByZW5kZXJlZCBpbnN0ZWFkIG9mIGFuIGlucHV0LlxuICAgKi9cbiAgbXVsdGlsaW5lOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTmFtZSBhdHRyaWJ1dGUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LnZhbHVlYCAoc3RyaW5nKS5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBzaG9ydCBoaW50IGRpc3BsYXllZCBpbiB0aGUgaW5wdXQgYmVmb3JlIHRoZSB1c2VyIGVudGVycyBhIHZhbHVlLlxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIGlzIGRpc3BsYXllZCBhcyByZXF1aXJlZCBhbmQgdGhlIGBpbnB1dGAgZWxlbWVudGAgd2lsbCBiZSByZXF1aXJlZC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgbWluUm93c2AgaW5zdGVhZC5cbiAgICovXG4gIHJvd3M6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5LlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYG1heFJvd3NgIGluc3RlYWQuXG4gICAqL1xuICByb3dzTWF4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIFJlbmRlciBhIFtgU2VsZWN0YF0oL2FwaS9zZWxlY3QvKSBlbGVtZW50IHdoaWxlIHBhc3NpbmcgdGhlIElucHV0IGVsZW1lbnQgdG8gYFNlbGVjdGAgYXMgYGlucHV0YCBwYXJhbWV0ZXIuXG4gICAqIElmIHRoaXMgb3B0aW9uIGlzIHNldCB5b3UgbXVzdCBwYXNzIHRoZSBvcHRpb25zIG9mIHRoZSBzZWxlY3QgYXMgY2hpbGRyZW4uXG4gICAqL1xuICBzZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYFNlbGVjdGBdKC9hcGkvc2VsZWN0LykgZWxlbWVudC5cbiAgICovXG4gIFNlbGVjdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgdGV4dCBmaWVsZC5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ21lZGl1bScsICdzbWFsbCddKSxcblxuICAvKipcbiAgICogVHlwZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LiBJdCBzaG91bGQgYmUgW2EgdmFsaWQgSFRNTDUgaW5wdXQgdHlwZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0Zvcm1fJTNDaW5wdXQlM0VfdHlwZXMpLlxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQsIHJlcXVpcmVkIGZvciBhIGNvbnRyb2xsZWQgY29tcG9uZW50LlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2ZpbGxlZCcsICdvdXRsaW5lZCcsICdzdGFuZGFyZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlUZXh0RmllbGQnXG59KShUZXh0RmllbGQpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vdXRpbHMvZGVib3VuY2UnO1xuaW1wb3J0IHVzZUZvcmtSZWYgZnJvbSAnLi4vdXRpbHMvdXNlRm9ya1JlZic7XG5pbXBvcnQgZGVwcmVjYXRlZFByb3BUeXBlIGZyb20gJy4uL3V0aWxzL2RlcHJlY2F0ZWRQcm9wVHlwZSc7XG5cbmZ1bmN0aW9uIGdldFN0eWxlVmFsdWUoY29tcHV0ZWRTdHlsZSwgcHJvcGVydHkpIHtcbiAgcmV0dXJuIHBhcnNlSW50KGNvbXB1dGVkU3R5bGVbcHJvcGVydHldLCAxMCkgfHwgMDtcbn1cblxudmFyIHVzZUVuaGFuY2VkRWZmZWN0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBSZWFjdC51c2VMYXlvdXRFZmZlY3QgOiBSZWFjdC51c2VFZmZlY3Q7XG52YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgc2hhZG93IHRleHRhcmVhIGVsZW1lbnQuICovXG4gIHNoYWRvdzoge1xuICAgIC8vIFZpc2liaWxpdHkgbmVlZGVkIHRvIGhpZGUgdGhlIGV4dHJhIHRleHQgYXJlYSBvbiBpUGFkc1xuICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgIC8vIFJlbW92ZSBmcm9tIHRoZSBjb250ZW50IGZsb3dcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAvLyBJZ25vcmUgdGhlIHNjcm9sbGJhciB3aWR0aFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBoZWlnaHQ6IDAsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGxheWVyLCBpbmNyZWFzZSB0aGUgaXNvbGF0aW9uIG9mIHRoZSBjb21wdXRlZCB2YWx1ZXNcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVaKDApJ1xuICB9XG59O1xudmFyIFRleHRhcmVhQXV0b3NpemUgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUZXh0YXJlYUF1dG9zaXplKHByb3BzLCByZWYpIHtcbiAgdmFyIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UsXG4gICAgICByb3dzID0gcHJvcHMucm93cyxcbiAgICAgIHJvd3NNYXggPSBwcm9wcy5yb3dzTWF4LFxuICAgICAgcm93c01pblByb3AgPSBwcm9wcy5yb3dzTWluLFxuICAgICAgbWF4Um93c1Byb3AgPSBwcm9wcy5tYXhSb3dzLFxuICAgICAgX3Byb3BzJG1pblJvd3MgPSBwcm9wcy5taW5Sb3dzLFxuICAgICAgbWluUm93c1Byb3AgPSBfcHJvcHMkbWluUm93cyA9PT0gdm9pZCAwID8gMSA6IF9wcm9wcyRtaW5Sb3dzLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wib25DaGFuZ2VcIiwgXCJyb3dzXCIsIFwicm93c01heFwiLCBcInJvd3NNaW5cIiwgXCJtYXhSb3dzXCIsIFwibWluUm93c1wiLCBcInN0eWxlXCIsIFwidmFsdWVcIl0pO1xuXG4gIHZhciBtYXhSb3dzID0gbWF4Um93c1Byb3AgfHwgcm93c01heDtcbiAgdmFyIG1pblJvd3MgPSByb3dzIHx8IHJvd3NNaW5Qcm9wIHx8IG1pblJvd3NQcm9wO1xuXG4gIHZhciBfUmVhY3QkdXNlUmVmID0gUmVhY3QudXNlUmVmKHZhbHVlICE9IG51bGwpLFxuICAgICAgaXNDb250cm9sbGVkID0gX1JlYWN0JHVzZVJlZi5jdXJyZW50O1xuXG4gIHZhciBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIGhhbmRsZVJlZiA9IHVzZUZvcmtSZWYocmVmLCBpbnB1dFJlZik7XG4gIHZhciBzaGFkb3dSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciByZW5kZXJzID0gUmVhY3QudXNlUmVmKDApO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSh7fSksXG4gICAgICBzdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldFN0YXRlID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBzeW5jSGVpZ2h0ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnB1dCA9IGlucHV0UmVmLmN1cnJlbnQ7XG4gICAgdmFyIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpbnB1dCk7XG4gICAgdmFyIGlucHV0U2hhbGxvdyA9IHNoYWRvd1JlZi5jdXJyZW50O1xuICAgIGlucHV0U2hhbGxvdy5zdHlsZS53aWR0aCA9IGNvbXB1dGVkU3R5bGUud2lkdGg7XG4gICAgaW5wdXRTaGFsbG93LnZhbHVlID0gaW5wdXQudmFsdWUgfHwgcHJvcHMucGxhY2Vob2xkZXIgfHwgJ3gnO1xuXG4gICAgaWYgKGlucHV0U2hhbGxvdy52YWx1ZS5zbGljZSgtMSkgPT09ICdcXG4nKSB7XG4gICAgICAvLyBDZXJ0YWluIGZvbnRzIHdoaWNoIG92ZXJmbG93IHRoZSBsaW5lIGhlaWdodCB3aWxsIGNhdXNlIHRoZSB0ZXh0YXJlYVxuICAgICAgLy8gdG8gcmVwb3J0IGEgZGlmZmVyZW50IHNjcm9sbEhlaWdodCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgbGFzdCBsaW5lXG4gICAgICAvLyBpcyBlbXB0eS4gTWFrZSBpdCBub24tZW1wdHkgdG8gYXZvaWQgdGhpcyBpc3N1ZS5cbiAgICAgIGlucHV0U2hhbGxvdy52YWx1ZSArPSAnICc7XG4gICAgfVxuXG4gICAgdmFyIGJveFNpemluZyA9IGNvbXB1dGVkU3R5bGVbJ2JveC1zaXppbmcnXTtcbiAgICB2YXIgcGFkZGluZyA9IGdldFN0eWxlVmFsdWUoY29tcHV0ZWRTdHlsZSwgJ3BhZGRpbmctYm90dG9tJykgKyBnZXRTdHlsZVZhbHVlKGNvbXB1dGVkU3R5bGUsICdwYWRkaW5nLXRvcCcpO1xuICAgIHZhciBib3JkZXIgPSBnZXRTdHlsZVZhbHVlKGNvbXB1dGVkU3R5bGUsICdib3JkZXItYm90dG9tLXdpZHRoJykgKyBnZXRTdHlsZVZhbHVlKGNvbXB1dGVkU3R5bGUsICdib3JkZXItdG9wLXdpZHRoJyk7IC8vIFRoZSBoZWlnaHQgb2YgdGhlIGlubmVyIGNvbnRlbnRcblxuICAgIHZhciBpbm5lckhlaWdodCA9IGlucHV0U2hhbGxvdy5zY3JvbGxIZWlnaHQgLSBwYWRkaW5nOyAvLyBNZWFzdXJlIGhlaWdodCBvZiBhIHRleHRhcmVhIHdpdGggYSBzaW5nbGUgcm93XG5cbiAgICBpbnB1dFNoYWxsb3cudmFsdWUgPSAneCc7XG4gICAgdmFyIHNpbmdsZVJvd0hlaWdodCA9IGlucHV0U2hhbGxvdy5zY3JvbGxIZWlnaHQgLSBwYWRkaW5nOyAvLyBUaGUgaGVpZ2h0IG9mIHRoZSBvdXRlciBjb250ZW50XG5cbiAgICB2YXIgb3V0ZXJIZWlnaHQgPSBpbm5lckhlaWdodDtcblxuICAgIGlmIChtaW5Sb3dzKSB7XG4gICAgICBvdXRlckhlaWdodCA9IE1hdGgubWF4KE51bWJlcihtaW5Sb3dzKSAqIHNpbmdsZVJvd0hlaWdodCwgb3V0ZXJIZWlnaHQpO1xuICAgIH1cblxuICAgIGlmIChtYXhSb3dzKSB7XG4gICAgICBvdXRlckhlaWdodCA9IE1hdGgubWluKE51bWJlcihtYXhSb3dzKSAqIHNpbmdsZVJvd0hlaWdodCwgb3V0ZXJIZWlnaHQpO1xuICAgIH1cblxuICAgIG91dGVySGVpZ2h0ID0gTWF0aC5tYXgob3V0ZXJIZWlnaHQsIHNpbmdsZVJvd0hlaWdodCk7IC8vIFRha2UgdGhlIGJveCBzaXppbmcgaW50byBhY2NvdW50IGZvciBhcHBseWluZyB0aGlzIHZhbHVlIGFzIGEgc3R5bGUuXG5cbiAgICB2YXIgb3V0ZXJIZWlnaHRTdHlsZSA9IG91dGVySGVpZ2h0ICsgKGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnID8gcGFkZGluZyArIGJvcmRlciA6IDApO1xuICAgIHZhciBvdmVyZmxvdyA9IE1hdGguYWJzKG91dGVySGVpZ2h0IC0gaW5uZXJIZWlnaHQpIDw9IDE7XG4gICAgc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgLy8gTmVlZCBhIGxhcmdlIGVub3VnaCBkaWZmZXJlbmNlIHRvIHVwZGF0ZSB0aGUgaGVpZ2h0LlxuICAgICAgLy8gVGhpcyBwcmV2ZW50cyBpbmZpbml0ZSByZW5kZXJpbmcgbG9vcC5cbiAgICAgIGlmIChyZW5kZXJzLmN1cnJlbnQgPCAyMCAmJiAob3V0ZXJIZWlnaHRTdHlsZSA+IDAgJiYgTWF0aC5hYnMoKHByZXZTdGF0ZS5vdXRlckhlaWdodFN0eWxlIHx8IDApIC0gb3V0ZXJIZWlnaHRTdHlsZSkgPiAxIHx8IHByZXZTdGF0ZS5vdmVyZmxvdyAhPT0gb3ZlcmZsb3cpKSB7XG4gICAgICAgIHJlbmRlcnMuY3VycmVudCArPSAxO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG92ZXJmbG93OiBvdmVyZmxvdyxcbiAgICAgICAgICBvdXRlckhlaWdodFN0eWxlOiBvdXRlckhlaWdodFN0eWxlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChyZW5kZXJzLmN1cnJlbnQgPT09IDIwKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBUb28gbWFueSByZS1yZW5kZXJzLiBUaGUgbGF5b3V0IGlzIHVuc3RhYmxlLicsICdUZXh0YXJlYUF1dG9zaXplIGxpbWl0cyB0aGUgbnVtYmVyIG9mIHJlbmRlcnMgdG8gcHJldmVudCBhbiBpbmZpbml0ZSBsb29wLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgIH0pO1xuICB9LCBbbWF4Um93cywgbWluUm93cywgcHJvcHMucGxhY2Vob2xkZXJdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlUmVzaXplID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgcmVuZGVycy5jdXJyZW50ID0gMDtcbiAgICAgIHN5bmNIZWlnaHQoKTtcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaGFuZGxlUmVzaXplLmNsZWFyKCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbc3luY0hlaWdodF0pO1xuICB1c2VFbmhhbmNlZEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc3luY0hlaWdodCgpO1xuICB9KTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZW5kZXJzLmN1cnJlbnQgPSAwO1xuICB9LCBbdmFsdWVdKTtcblxuICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgcmVuZGVycy5jdXJyZW50ID0gMDtcblxuICAgIGlmICghaXNDb250cm9sbGVkKSB7XG4gICAgICBzeW5jSGVpZ2h0KCk7XG4gICAgfVxuXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBfZXh0ZW5kcyh7XG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgcmVmOiBoYW5kbGVSZWYgLy8gQXBwbHkgdGhlIHJvd3MgcHJvcCB0byBnZXQgYSBcImNvcnJlY3RcIiBmaXJzdCBTU1IgcGFpbnRcbiAgICAsXG4gICAgcm93czogbWluUm93cyxcbiAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgaGVpZ2h0OiBzdGF0ZS5vdXRlckhlaWdodFN0eWxlLFxuICAgICAgLy8gTmVlZCBhIGxhcmdlIGVub3VnaCBkaWZmZXJlbmNlIHRvIGFsbG93IHNjcm9sbGluZy5cbiAgICAgIC8vIFRoaXMgcHJldmVudHMgaW5maW5pdGUgcmVuZGVyaW5nIGxvb3AuXG4gICAgICBvdmVyZmxvdzogc3RhdGUub3ZlcmZsb3cgPyAnaGlkZGVuJyA6IG51bGxcbiAgICB9LCBzdHlsZSlcbiAgfSwgb3RoZXIpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lLFxuICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgIHJlZjogc2hhZG93UmVmLFxuICAgIHRhYkluZGV4OiAtMSxcbiAgICBzdHlsZTogX2V4dGVuZHMoe30sIHN0eWxlcy5zaGFkb3csIHN0eWxlKVxuICB9KSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRleHRhcmVhQXV0b3NpemUucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkuXG4gICAqL1xuICBtYXhSb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIE1pbmltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheS5cbiAgICovXG4gIG1pblJvd3M6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogTWluaW11bSBudW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5LlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYG1pblJvd3NgIGluc3RlYWQuXG4gICAqL1xuICByb3dzOiBkZXByZWNhdGVkUHJvcFR5cGUoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLCAnVXNlIGBtaW5Sb3dzYCBpbnN0ZWFkLicpLFxuXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkuXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgbWF4Um93c2AgaW5zdGVhZC5cbiAgICovXG4gIHJvd3NNYXg6IGRlcHJlY2F0ZWRQcm9wVHlwZShQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksICdVc2UgYG1heFJvd3NgIGluc3RlYWQuJyksXG5cbiAgLyoqXG4gICAqIE1pbmltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheS5cbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBtaW5Sb3dzYCBpbnN0ZWFkLlxuICAgKi9cbiAgcm93c01pbjogZGVwcmVjYXRlZFByb3BUeXBlKFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSwgJ1VzZSBgbWluUm93c2AgaW5zdGVhZC4nKSxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSwgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFBdXRvc2l6ZTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiwganN4LWExMXkvbm8tbm9uaW50ZXJhY3RpdmUtdGFiaW5kZXgsIGNhbWVsY2FzZSAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICcuLi91dGlscy9vd25lckRvY3VtZW50JztcbmltcG9ydCB1c2VGb3JrUmVmIGZyb20gJy4uL3V0aWxzL3VzZUZvcmtSZWYnO1xuaW1wb3J0IHsgZXhhY3RQcm9wIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbi8qKlxuICogVXRpbGl0eSBjb21wb25lbnQgdGhhdCBsb2NrcyBmb2N1cyBpbnNpZGUgdGhlIGNvbXBvbmVudC5cbiAqL1xuXG5mdW5jdGlvbiBVbnN0YWJsZV9UcmFwRm9jdXMocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBfcHJvcHMkZGlzYWJsZUF1dG9Gb2MgPSBwcm9wcy5kaXNhYmxlQXV0b0ZvY3VzLFxuICAgICAgZGlzYWJsZUF1dG9Gb2N1cyA9IF9wcm9wcyRkaXNhYmxlQXV0b0ZvYyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUF1dG9Gb2MsXG4gICAgICBfcHJvcHMkZGlzYWJsZUVuZm9yY2UgPSBwcm9wcy5kaXNhYmxlRW5mb3JjZUZvY3VzLFxuICAgICAgZGlzYWJsZUVuZm9yY2VGb2N1cyA9IF9wcm9wcyRkaXNhYmxlRW5mb3JjZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUVuZm9yY2UsXG4gICAgICBfcHJvcHMkZGlzYWJsZVJlc3RvcmUgPSBwcm9wcy5kaXNhYmxlUmVzdG9yZUZvY3VzLFxuICAgICAgZGlzYWJsZVJlc3RvcmVGb2N1cyA9IF9wcm9wcyRkaXNhYmxlUmVzdG9yZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVJlc3RvcmUsXG4gICAgICBnZXREb2MgPSBwcm9wcy5nZXREb2MsXG4gICAgICBpc0VuYWJsZWQgPSBwcm9wcy5pc0VuYWJsZWQsXG4gICAgICBvcGVuID0gcHJvcHMub3BlbjtcbiAgdmFyIGlnbm9yZU5leHRFbmZvcmNlRm9jdXMgPSBSZWFjdC51c2VSZWYoKTtcbiAgdmFyIHNlbnRpbmVsU3RhcnQgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBzZW50aW5lbEVuZCA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIG5vZGVUb1Jlc3RvcmUgPSBSZWFjdC51c2VSZWYoKTtcbiAgdmFyIHJvb3RSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7IC8vIGNhbiBiZSByZW1vdmVkIG9uY2Ugd2UgZHJvcCBzdXBwb3J0IGZvciBub24gcmVmIGZvcndhcmRpbmcgY2xhc3MgY29tcG9uZW50c1xuXG4gIHZhciBoYW5kbGVPd25SZWYgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAvLyAjU3RyaWN0TW9kZSByZWFkeVxuICAgIHJvb3RSZWYuY3VycmVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGluc3RhbmNlKTtcbiAgfSwgW10pO1xuICB2YXIgaGFuZGxlUmVmID0gdXNlRm9ya1JlZihjaGlsZHJlbi5yZWYsIGhhbmRsZU93blJlZik7XG4gIHZhciBwcmV2T3BlblJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHByZXZPcGVuUmVmLmN1cnJlbnQgPSBvcGVuO1xuICB9LCBbb3Blbl0pO1xuXG4gIGlmICghcHJldk9wZW5SZWYuY3VycmVudCAmJiBvcGVuICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gV0FSTklORzogUG90ZW50aWFsbHkgdW5zYWZlIGluIGNvbmN1cnJlbnQgbW9kZS5cbiAgICAvLyBUaGUgd2F5IHRoZSByZWFkIG9uIGBub2RlVG9SZXN0b3JlYCBpcyBzZXR1cCBjb3VsZCBtYWtlIHRoaXMgYWN0dWFsbHkgc2FmZS5cbiAgICAvLyBTYXkgd2UgcmVuZGVyIGBvcGVuPXtmYWxzZX1gIC0+IGBvcGVuPXt0cnVlfWAgYnV0IG5ldmVyIGNvbW1pdC5cbiAgICAvLyBXZSBoYXZlIG5vdyB3cml0dGVuIGEgc3RhdGUgdGhhdCB3YXNuJ3QgY29tbWl0dGVkLiBCdXQgbm8gY29tbWl0dGVkIGVmZmVjdFxuICAgIC8vIHdpbGwgcmVhZCB0aGlzIHdyb25nIHZhbHVlLiBXZSBvbmx5IHJlYWQgZnJvbSBgbm9kZVRvUmVzdG9yZWAgaW4gZWZmZWN0c1xuICAgIC8vIHRoYXQgd2VyZSBjb21taXR0ZWQgb24gYG9wZW49e3RydWV9YFxuICAgIC8vIFdBUk5JTkc6IFByZXZlbnRzIHRoZSBpbnN0YW5jZSBmcm9tIGJlaW5nIGdhcmJhZ2UgY29sbGVjdGVkLiBTaG91bGQgb25seVxuICAgIC8vIGhvbGQgYSB3ZWFrIHJlZi5cbiAgICBub2RlVG9SZXN0b3JlLmN1cnJlbnQgPSBnZXREb2MoKS5hY3RpdmVFbGVtZW50O1xuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIW9wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZG9jID0gb3duZXJEb2N1bWVudChyb290UmVmLmN1cnJlbnQpOyAvLyBXZSBtaWdodCByZW5kZXIgYW4gZW1wdHkgY2hpbGQuXG5cbiAgICBpZiAoIWRpc2FibGVBdXRvRm9jdXMgJiYgcm9vdFJlZi5jdXJyZW50ICYmICFyb290UmVmLmN1cnJlbnQuY29udGFpbnMoZG9jLmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICBpZiAoIXJvb3RSZWYuY3VycmVudC5oYXNBdHRyaWJ1dGUoJ3RhYkluZGV4JykpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IFRoZSBtb2RhbCBjb250ZW50IG5vZGUgZG9lcyBub3QgYWNjZXB0IGZvY3VzLicsICdGb3IgdGhlIGJlbmVmaXQgb2YgYXNzaXN0aXZlIHRlY2hub2xvZ2llcywgJyArICd0aGUgdGFiSW5kZXggb2YgdGhlIG5vZGUgaXMgYmVpbmcgc2V0IHRvIFwiLTFcIi4nXS5qb2luKCdcXG4nKSk7XG4gICAgICAgIH1cblxuICAgICAgICByb290UmVmLmN1cnJlbnQuc2V0QXR0cmlidXRlKCd0YWJJbmRleCcsIC0xKTtcbiAgICAgIH1cblxuICAgICAgcm9vdFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRhaW4gPSBmdW5jdGlvbiBjb250YWluKCkge1xuICAgICAgdmFyIHJvb3RFbGVtZW50ID0gcm9vdFJlZi5jdXJyZW50OyAvLyBDbGVhbnVwIGZ1bmN0aW9ucyBhcmUgZXhlY3V0ZWQgbGF6aWx5IGluIFJlYWN0IDE3LlxuICAgICAgLy8gQ29udGFpbiBjYW4gYmUgY2FsbGVkIGJldHdlZW4gdGhlIGNvbXBvbmVudCBiZWluZyB1bm1vdW50ZWQgYW5kIGl0cyBjbGVhbnVwIGZ1bmN0aW9uIGJlaW5nIHJ1bi5cblxuICAgICAgaWYgKHJvb3RFbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkb2MuaGFzRm9jdXMoKSB8fCBkaXNhYmxlRW5mb3JjZUZvY3VzIHx8ICFpc0VuYWJsZWQoKSB8fCBpZ25vcmVOZXh0RW5mb3JjZUZvY3VzLmN1cnJlbnQpIHtcbiAgICAgICAgaWdub3JlTmV4dEVuZm9yY2VGb2N1cy5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHJvb3RSZWYuY3VycmVudCAmJiAhcm9vdFJlZi5jdXJyZW50LmNvbnRhaW5zKGRvYy5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICByb290UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGxvb3BGb2N1cyA9IGZ1bmN0aW9uIGxvb3BGb2N1cyhldmVudCkge1xuICAgICAgLy8gOSA9IFRhYlxuICAgICAgaWYgKGRpc2FibGVFbmZvcmNlRm9jdXMgfHwgIWlzRW5hYmxlZCgpIHx8IGV2ZW50LmtleUNvZGUgIT09IDkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBNYWtlIHN1cmUgdGhlIG5leHQgdGFiIHN0YXJ0cyBmcm9tIHRoZSByaWdodCBwbGFjZS5cblxuXG4gICAgICBpZiAoZG9jLmFjdGl2ZUVsZW1lbnQgPT09IHJvb3RSZWYuY3VycmVudCkge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIGlnbm9yZSB0aGUgbmV4dCBjb250YWluIGFzXG4gICAgICAgIC8vIGl0IHdpbGwgdHJ5IHRvIG1vdmUgdGhlIGZvY3VzIGJhY2sgdG8gdGhlIHJvb3RSZWYgZWxlbWVudC5cbiAgICAgICAgaWdub3JlTmV4dEVuZm9yY2VGb2N1cy5jdXJyZW50ID0gdHJ1ZTtcblxuICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICBzZW50aW5lbEVuZC5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VudGluZWxTdGFydC5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgY29udGFpbiwgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBsb29wRm9jdXMsIHRydWUpOyAvLyBXaXRoIEVkZ2UsIFNhZmFyaSBhbmQgRmlyZWZveCwgbm8gZm9jdXMgcmVsYXRlZCBldmVudHMgYXJlIGZpcmVkIHdoZW4gdGhlIGZvY3VzZWQgYXJlYSBzdG9wcyBiZWluZyBhIGZvY3VzZWQgYXJlYVxuICAgIC8vIGUuZy4gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTU5NTYxLlxuICAgIC8vXG4gICAgLy8gVGhlIHdoYXR3ZyBzcGVjIGRlZmluZXMgaG93IHRoZSBicm93c2VyIHNob3VsZCBiZWhhdmUgYnV0IGRvZXMgbm90IGV4cGxpY2l0bHkgbWVudGlvbiBhbnkgZXZlbnRzOlxuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjZm9jdXMtZml4dXAtcnVsZS5cblxuICAgIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnRhaW4oKTtcbiAgICB9LCA1MCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgY29udGFpbiwgdHJ1ZSk7XG4gICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGxvb3BGb2N1cywgdHJ1ZSk7IC8vIHJlc3RvcmVMYXN0Rm9jdXMoKVxuXG4gICAgICBpZiAoIWRpc2FibGVSZXN0b3JlRm9jdXMpIHtcbiAgICAgICAgLy8gSW4gSUUgMTEgaXQgaXMgcG9zc2libGUgZm9yIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgdG8gYmUgbnVsbCByZXN1bHRpbmdcbiAgICAgICAgLy8gaW4gbm9kZVRvUmVzdG9yZS5jdXJyZW50IGJlaW5nIG51bGwuXG4gICAgICAgIC8vIE5vdCBhbGwgZWxlbWVudHMgaW4gSUUgMTEgaGF2ZSBhIGZvY3VzIG1ldGhvZC5cbiAgICAgICAgLy8gT25jZSBJRSAxMSBzdXBwb3J0IGlzIGRyb3BwZWQgdGhlIGZvY3VzKCkgY2FsbCBjYW4gYmUgdW5jb25kaXRpb25hbC5cbiAgICAgICAgaWYgKG5vZGVUb1Jlc3RvcmUuY3VycmVudCAmJiBub2RlVG9SZXN0b3JlLmN1cnJlbnQuZm9jdXMpIHtcbiAgICAgICAgICBub2RlVG9SZXN0b3JlLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGVUb1Jlc3RvcmUuY3VycmVudCA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2Rpc2FibGVBdXRvRm9jdXMsIGRpc2FibGVFbmZvcmNlRm9jdXMsIGRpc2FibGVSZXN0b3JlRm9jdXMsIGlzRW5hYmxlZCwgb3Blbl0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICB0YWJJbmRleDogMCxcbiAgICByZWY6IHNlbnRpbmVsU3RhcnQsXG4gICAgXCJkYXRhLXRlc3RcIjogXCJzZW50aW5lbFN0YXJ0XCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICByZWY6IGhhbmRsZVJlZlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHRhYkluZGV4OiAwLFxuICAgIHJlZjogc2VudGluZWxFbmQsXG4gICAgXCJkYXRhLXRlc3RcIjogXCJzZW50aW5lbEVuZFwiXG4gIH0pKTtcbn1cblxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVW5zdGFibGVfVHJhcEZvY3VzLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIEEgc2luZ2xlIGNoaWxkIGNvbnRlbnQgZWxlbWVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgdHJhcCBmb2N1cyB3aWxsIG5vdCBhdXRvbWF0aWNhbGx5IHNoaWZ0IGZvY3VzIHRvIGl0c2VsZiB3aGVuIGl0IG9wZW5zLCBhbmRcbiAgICogcmVwbGFjZSBpdCB0byB0aGUgbGFzdCBmb2N1c2VkIGVsZW1lbnQgd2hlbiBpdCBjbG9zZXMuXG4gICAqIFRoaXMgYWxzbyB3b3JrcyBjb3JyZWN0bHkgd2l0aCBhbnkgdHJhcCBmb2N1cyBjaGlsZHJlbiB0aGF0IGhhdmUgdGhlIGBkaXNhYmxlQXV0b0ZvY3VzYCBwcm9wLlxuICAgKlxuICAgKiBHZW5lcmFsbHkgdGhpcyBzaG91bGQgbmV2ZXIgYmUgc2V0IHRvIGB0cnVlYCBhcyBpdCBtYWtlcyB0aGUgdHJhcCBmb2N1cyBsZXNzXG4gICAqIGFjY2Vzc2libGUgdG8gYXNzaXN0aXZlIHRlY2hub2xvZ2llcywgbGlrZSBzY3JlZW4gcmVhZGVycy5cbiAgICovXG4gIGRpc2FibGVBdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0cmFwIGZvY3VzIHdpbGwgbm90IHByZXZlbnQgZm9jdXMgZnJvbSBsZWF2aW5nIHRoZSB0cmFwIGZvY3VzIHdoaWxlIG9wZW4uXG4gICAqXG4gICAqIEdlbmVyYWxseSB0aGlzIHNob3VsZCBuZXZlciBiZSBzZXQgdG8gYHRydWVgIGFzIGl0IG1ha2VzIHRoZSB0cmFwIGZvY3VzIGxlc3NcbiAgICogYWNjZXNzaWJsZSB0byBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCBsaWtlIHNjcmVlbiByZWFkZXJzLlxuICAgKi9cbiAgZGlzYWJsZUVuZm9yY2VGb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHRyYXAgZm9jdXMgd2lsbCBub3QgcmVzdG9yZSBmb2N1cyB0byBwcmV2aW91c2x5IGZvY3VzZWQgZWxlbWVudCBvbmNlXG4gICAqIHRyYXAgZm9jdXMgaXMgaGlkZGVuLlxuICAgKi9cbiAgZGlzYWJsZVJlc3RvcmVGb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZG9jdW1lbnQgdG8gY29uc2lkZXIuXG4gICAqIFdlIHVzZSBpdCB0byBpbXBsZW1lbnQgdGhlIHJlc3RvcmUgZm9jdXMgYmV0d2VlbiBkaWZmZXJlbnQgYnJvd3NlciBkb2N1bWVudHMuXG4gICAqL1xuICBnZXREb2M6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIERvIHdlIHN0aWxsIHdhbnQgdG8gZW5mb3JjZSB0aGUgZm9jdXM/XG4gICAqIFRoaXMgcHJvcCBoZWxwcyBuZXN0aW5nIFRyYXBGb2N1cyBlbGVtZW50cy5cbiAgICovXG4gIGlzRW5hYmxlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBmb2N1cyB3aWxsIGJlIGxvY2tlZC5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbn0gOiB2b2lkIDA7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBVbnN0YWJsZV9UcmFwRm9jdXNbJ3Byb3BUeXBlcycgKyAnJ10gPSBleGFjdFByb3AoVW5zdGFibGVfVHJhcEZvY3VzLnByb3BUeXBlcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVuc3RhYmxlX1RyYXBGb2N1czsiLCJ2YXIgYmx1ZSA9IHtcbiAgNTA6ICcjZTNmMmZkJyxcbiAgMTAwOiAnI2JiZGVmYicsXG4gIDIwMDogJyM5MGNhZjknLFxuICAzMDA6ICcjNjRiNWY2JyxcbiAgNDAwOiAnIzQyYTVmNScsXG4gIDUwMDogJyMyMTk2ZjMnLFxuICA2MDA6ICcjMWU4OGU1JyxcbiAgNzAwOiAnIzE5NzZkMicsXG4gIDgwMDogJyMxNTY1YzAnLFxuICA5MDA6ICcjMGQ0N2ExJyxcbiAgQTEwMDogJyM4MmIxZmYnLFxuICBBMjAwOiAnIzQ0OGFmZicsXG4gIEE0MDA6ICcjMjk3OWZmJyxcbiAgQTcwMDogJyMyOTYyZmYnXG59O1xuZXhwb3J0IGRlZmF1bHQgYmx1ZTsiLCJ2YXIgY29tbW9uID0ge1xuICBibGFjazogJyMwMDAnLFxuICB3aGl0ZTogJyNmZmYnXG59O1xuZXhwb3J0IGRlZmF1bHQgY29tbW9uOyIsInZhciBncmVlbiA9IHtcbiAgNTA6ICcjZThmNWU5JyxcbiAgMTAwOiAnI2M4ZTZjOScsXG4gIDIwMDogJyNhNWQ2YTcnLFxuICAzMDA6ICcjODFjNzg0JyxcbiAgNDAwOiAnIzY2YmI2YScsXG4gIDUwMDogJyM0Y2FmNTAnLFxuICA2MDA6ICcjNDNhMDQ3JyxcbiAgNzAwOiAnIzM4OGUzYycsXG4gIDgwMDogJyMyZTdkMzInLFxuICA5MDA6ICcjMWI1ZTIwJyxcbiAgQTEwMDogJyNiOWY2Y2EnLFxuICBBMjAwOiAnIzY5ZjBhZScsXG4gIEE0MDA6ICcjMDBlNjc2JyxcbiAgQTcwMDogJyMwMGM4NTMnXG59O1xuZXhwb3J0IGRlZmF1bHQgZ3JlZW47IiwidmFyIGdyZXkgPSB7XG4gIDUwOiAnI2ZhZmFmYScsXG4gIDEwMDogJyNmNWY1ZjUnLFxuICAyMDA6ICcjZWVlZWVlJyxcbiAgMzAwOiAnI2UwZTBlMCcsXG4gIDQwMDogJyNiZGJkYmQnLFxuICA1MDA6ICcjOWU5ZTllJyxcbiAgNjAwOiAnIzc1NzU3NScsXG4gIDcwMDogJyM2MTYxNjEnLFxuICA4MDA6ICcjNDI0MjQyJyxcbiAgOTAwOiAnIzIxMjEyMScsXG4gIEExMDA6ICcjZDVkNWQ1JyxcbiAgQTIwMDogJyNhYWFhYWEnLFxuICBBNDAwOiAnIzMwMzAzMCcsXG4gIEE3MDA6ICcjNjE2MTYxJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGdyZXk7IiwidmFyIGluZGlnbyA9IHtcbiAgNTA6ICcjZThlYWY2JyxcbiAgMTAwOiAnI2M1Y2FlOScsXG4gIDIwMDogJyM5ZmE4ZGEnLFxuICAzMDA6ICcjNzk4NmNiJyxcbiAgNDAwOiAnIzVjNmJjMCcsXG4gIDUwMDogJyMzZjUxYjUnLFxuICA2MDA6ICcjMzk0OWFiJyxcbiAgNzAwOiAnIzMwM2Y5ZicsXG4gIDgwMDogJyMyODM1OTMnLFxuICA5MDA6ICcjMWEyMzdlJyxcbiAgQTEwMDogJyM4YzllZmYnLFxuICBBMjAwOiAnIzUzNmRmZScsXG4gIEE0MDA6ICcjM2Q1YWZlJyxcbiAgQTcwMDogJyMzMDRmZmUnXG59O1xuZXhwb3J0IGRlZmF1bHQgaW5kaWdvOyIsInZhciBvcmFuZ2UgPSB7XG4gIDUwOiAnI2ZmZjNlMCcsXG4gIDEwMDogJyNmZmUwYjInLFxuICAyMDA6ICcjZmZjYzgwJyxcbiAgMzAwOiAnI2ZmYjc0ZCcsXG4gIDQwMDogJyNmZmE3MjYnLFxuICA1MDA6ICcjZmY5ODAwJyxcbiAgNjAwOiAnI2ZiOGMwMCcsXG4gIDcwMDogJyNmNTdjMDAnLFxuICA4MDA6ICcjZWY2YzAwJyxcbiAgOTAwOiAnI2U2NTEwMCcsXG4gIEExMDA6ICcjZmZkMTgwJyxcbiAgQTIwMDogJyNmZmFiNDAnLFxuICBBNDAwOiAnI2ZmOTEwMCcsXG4gIEE3MDA6ICcjZmY2ZDAwJ1xufTtcbmV4cG9ydCBkZWZhdWx0IG9yYW5nZTsiLCJ2YXIgcGluayA9IHtcbiAgNTA6ICcjZmNlNGVjJyxcbiAgMTAwOiAnI2Y4YmJkMCcsXG4gIDIwMDogJyNmNDhmYjEnLFxuICAzMDA6ICcjZjA2MjkyJyxcbiAgNDAwOiAnI2VjNDA3YScsXG4gIDUwMDogJyNlOTFlNjMnLFxuICA2MDA6ICcjZDgxYjYwJyxcbiAgNzAwOiAnI2MyMTg1YicsXG4gIDgwMDogJyNhZDE0NTcnLFxuICA5MDA6ICcjODgwZTRmJyxcbiAgQTEwMDogJyNmZjgwYWInLFxuICBBMjAwOiAnI2ZmNDA4MScsXG4gIEE0MDA6ICcjZjUwMDU3JyxcbiAgQTcwMDogJyNjNTExNjInXG59O1xuZXhwb3J0IGRlZmF1bHQgcGluazsiLCJ2YXIgcmVkID0ge1xuICA1MDogJyNmZmViZWUnLFxuICAxMDA6ICcjZmZjZGQyJyxcbiAgMjAwOiAnI2VmOWE5YScsXG4gIDMwMDogJyNlNTczNzMnLFxuICA0MDA6ICcjZWY1MzUwJyxcbiAgNTAwOiAnI2Y0NDMzNicsXG4gIDYwMDogJyNlNTM5MzUnLFxuICA3MDA6ICcjZDMyZjJmJyxcbiAgODAwOiAnI2M2MjgyOCcsXG4gIDkwMDogJyNiNzFjMWMnLFxuICBBMTAwOiAnI2ZmOGE4MCcsXG4gIEEyMDA6ICcjZmY1MjUyJyxcbiAgQTQwMDogJyNmZjE3NDQnLFxuICBBNzAwOiAnI2Q1MDAwMCdcbn07XG5leHBvcnQgZGVmYXVsdCByZWQ7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNNyAxMGw1IDUgNS01elwiXG59KSwgJ0Fycm93RHJvcERvd24nKTsiLCJpbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIjtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgbnVtYmVyIHdob3NlIHZhbHVlIGlzIGxpbWl0ZWQgdG8gdGhlIGdpdmVuIHJhbmdlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY2xhbXBlZFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBUaGUgbG93ZXIgYm91bmRhcnkgb2YgdGhlIG91dHB1dCByYW5nZVxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBUaGUgdXBwZXIgYm91bmRhcnkgb2YgdGhlIG91dHB1dCByYW5nZVxuICogQHJldHVybnMge251bWJlcn0gQSBudW1iZXIgaW4gdGhlIHJhbmdlIFttaW4sIG1heF1cbiAqL1xuZnVuY3Rpb24gY2xhbXAodmFsdWUpIHtcbiAgdmFyIG1pbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgdmFyIG1heCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh2YWx1ZSA8IG1pbiB8fCB2YWx1ZSA+IG1heCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBUaGUgdmFsdWUgcHJvdmlkZWQgXCIuY29uY2F0KHZhbHVlLCBcIiBpcyBvdXQgb2YgcmFuZ2UgW1wiKS5jb25jYXQobWluLCBcIiwgXCIpLmNvbmNhdChtYXgsIFwiXS5cIikpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChtaW4sIHZhbHVlKSwgbWF4KTtcbn1cbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBmcm9tIENTUyBoZXggZm9ybWF0IHRvIENTUyByZ2IgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIEhleCBjb2xvciwgaS5lLiAjbm5uIG9yICNubm5ubm5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIHJnYiBjb2xvciBzdHJpbmdcbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JnYihjb2xvcikge1xuICBjb2xvciA9IGNvbG9yLnN1YnN0cigxKTtcbiAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIi57MSxcIi5jb25jYXQoY29sb3IubGVuZ3RoID49IDYgPyAyIDogMSwgXCJ9XCIpLCAnZycpO1xuICB2YXIgY29sb3JzID0gY29sb3IubWF0Y2gocmUpO1xuXG4gIGlmIChjb2xvcnMgJiYgY29sb3JzWzBdLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbG9ycyA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICAgIHJldHVybiBuICsgbjtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjb2xvcnMgPyBcInJnYlwiLmNvbmNhdChjb2xvcnMubGVuZ3RoID09PSA0ID8gJ2EnIDogJycsIFwiKFwiKS5jb25jYXQoY29sb3JzLm1hcChmdW5jdGlvbiAobiwgaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPCAzID8gcGFyc2VJbnQobiwgMTYpIDogTWF0aC5yb3VuZChwYXJzZUludChuLCAxNikgLyAyNTUgKiAxMDAwKSAvIDEwMDA7XG4gIH0pLmpvaW4oJywgJyksIFwiKVwiKSA6ICcnO1xufVxuXG5mdW5jdGlvbiBpbnRUb0hleChpbnQpIHtcbiAgdmFyIGhleCA9IGludC50b1N0cmluZygxNik7XG4gIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gXCIwXCIuY29uY2F0KGhleCkgOiBoZXg7XG59XG4vKipcbiAqIENvbnZlcnRzIGEgY29sb3IgZnJvbSBDU1MgcmdiIGZvcm1hdCB0byBDU1MgaGV4IGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBSR0IgY29sb3IsIGkuZS4gcmdiKG4sIG4sIG4pXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyByZ2IgY29sb3Igc3RyaW5nLCBpLmUuICNubm5ubm5cbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JUb0hleChjb2xvcikge1xuICAvLyBJZGVtcG90ZW50XG4gIGlmIChjb2xvci5pbmRleE9mKCcjJykgPT09IDApIHtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICB2YXIgX2RlY29tcG9zZUNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpLFxuICAgICAgdmFsdWVzID0gX2RlY29tcG9zZUNvbG9yLnZhbHVlcztcblxuICByZXR1cm4gXCIjXCIuY29uY2F0KHZhbHVlcy5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gaW50VG9IZXgobik7XG4gIH0pLmpvaW4oJycpKTtcbn1cbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBmcm9tIGhzbCBmb3JtYXQgdG8gcmdiIGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBIU0wgY29sb3IgdmFsdWVzXG4gKiBAcmV0dXJucyB7c3RyaW5nfSByZ2IgY29sb3IgdmFsdWVzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhzbFRvUmdiKGNvbG9yKSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICB2YXIgX2NvbG9yID0gY29sb3IsXG4gICAgICB2YWx1ZXMgPSBfY29sb3IudmFsdWVzO1xuICB2YXIgaCA9IHZhbHVlc1swXTtcbiAgdmFyIHMgPSB2YWx1ZXNbMV0gLyAxMDA7XG4gIHZhciBsID0gdmFsdWVzWzJdIC8gMTAwO1xuICB2YXIgYSA9IHMgKiBNYXRoLm1pbihsLCAxIC0gbCk7XG5cbiAgdmFyIGYgPSBmdW5jdGlvbiBmKG4pIHtcbiAgICB2YXIgayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogKG4gKyBoIC8gMzApICUgMTI7XG4gICAgcmV0dXJuIGwgLSBhICogTWF0aC5tYXgoTWF0aC5taW4oayAtIDMsIDkgLSBrLCAxKSwgLTEpO1xuICB9O1xuXG4gIHZhciB0eXBlID0gJ3JnYic7XG4gIHZhciByZ2IgPSBbTWF0aC5yb3VuZChmKDApICogMjU1KSwgTWF0aC5yb3VuZChmKDgpICogMjU1KSwgTWF0aC5yb3VuZChmKDQpICogMjU1KV07XG5cbiAgaWYgKGNvbG9yLnR5cGUgPT09ICdoc2xhJykge1xuICAgIHR5cGUgKz0gJ2EnO1xuICAgIHJnYi5wdXNoKHZhbHVlc1szXSk7XG4gIH1cblxuICByZXR1cm4gcmVjb21wb3NlQ29sb3Ioe1xuICAgIHR5cGU6IHR5cGUsXG4gICAgdmFsdWVzOiByZ2JcbiAgfSk7XG59XG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIHR5cGUgYW5kIHZhbHVlcyBvZiBhIGNvbG9yLlxuICpcbiAqIE5vdGU6IERvZXMgbm90IHN1cHBvcnQgcmdiICUgdmFsdWVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEByZXR1cm5zIHtvYmplY3R9IC0gQSBNVUkgY29sb3Igb2JqZWN0OiB7dHlwZTogc3RyaW5nLCB2YWx1ZXM6IG51bWJlcltdfVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvbXBvc2VDb2xvcihjb2xvcikge1xuICAvLyBJZGVtcG90ZW50XG4gIGlmIChjb2xvci50eXBlKSB7XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgaWYgKGNvbG9yLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgcmV0dXJuIGRlY29tcG9zZUNvbG9yKGhleFRvUmdiKGNvbG9yKSk7XG4gIH1cblxuICB2YXIgbWFya2VyID0gY29sb3IuaW5kZXhPZignKCcpO1xuICB2YXIgdHlwZSA9IGNvbG9yLnN1YnN0cmluZygwLCBtYXJrZXIpO1xuXG4gIGlmIChbJ3JnYicsICdyZ2JhJywgJ2hzbCcsICdoc2xhJ10uaW5kZXhPZih0eXBlKSA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogVW5zdXBwb3J0ZWQgYFwiLmNvbmNhdChjb2xvciwgXCJgIGNvbG9yLlxcbldlIHN1cHBvcnQgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpLlwiKSA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoMywgY29sb3IpKTtcbiAgfVxuXG4gIHZhciB2YWx1ZXMgPSBjb2xvci5zdWJzdHJpbmcobWFya2VyICsgMSwgY29sb3IubGVuZ3RoIC0gMSkuc3BsaXQoJywnKTtcbiAgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgdmFsdWVzOiB2YWx1ZXNcbiAgfTtcbn1cbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBvYmplY3Qgd2l0aCB0eXBlIGFuZCB2YWx1ZXMgdG8gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbG9yIC0gRGVjb21wb3NlZCBjb2xvclxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yLnR5cGUgLSBPbmUgb2Y6ICdyZ2InLCAncmdiYScsICdoc2wnLCAnaHNsYSdcbiAqIEBwYXJhbSB7YXJyYXl9IGNvbG9yLnZhbHVlcyAtIFtuLG4sbl0gb3IgW24sbixuLG5dXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmdcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVjb21wb3NlQ29sb3IoY29sb3IpIHtcbiAgdmFyIHR5cGUgPSBjb2xvci50eXBlO1xuICB2YXIgdmFsdWVzID0gY29sb3IudmFsdWVzO1xuXG4gIGlmICh0eXBlLmluZGV4T2YoJ3JnYicpICE9PSAtMSkge1xuICAgIC8vIE9ubHkgY29udmVydCB0aGUgZmlyc3QgMyB2YWx1ZXMgdG8gaW50IChpLmUuIG5vdCBhbHBoYSlcbiAgICB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgICByZXR1cm4gaSA8IDMgPyBwYXJzZUludChuLCAxMCkgOiBuO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGUuaW5kZXhPZignaHNsJykgIT09IC0xKSB7XG4gICAgdmFsdWVzWzFdID0gXCJcIi5jb25jYXQodmFsdWVzWzFdLCBcIiVcIik7XG4gICAgdmFsdWVzWzJdID0gXCJcIi5jb25jYXQodmFsdWVzWzJdLCBcIiVcIik7XG4gIH1cblxuICByZXR1cm4gXCJcIi5jb25jYXQodHlwZSwgXCIoXCIpLmNvbmNhdCh2YWx1ZXMuam9pbignLCAnKSwgXCIpXCIpO1xufVxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBjb250cmFzdCByYXRpbyBiZXR3ZWVuIHR3byBjb2xvcnMuXG4gKlxuICogRm9ybXVsYTogaHR0cHM6Ly93d3cudzMub3JnL1RSL1dDQUcyMC1URUNIUy9HMTcuaHRtbCNHMTctdGVzdHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9yZWdyb3VuZCAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYWNrZ3JvdW5kIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHJldHVybnMge251bWJlcn0gQSBjb250cmFzdCByYXRpbyB2YWx1ZSBpbiB0aGUgcmFuZ2UgMCAtIDIxLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250cmFzdFJhdGlvKGZvcmVncm91bmQsIGJhY2tncm91bmQpIHtcbiAgdmFyIGx1bUEgPSBnZXRMdW1pbmFuY2UoZm9yZWdyb3VuZCk7XG4gIHZhciBsdW1CID0gZ2V0THVtaW5hbmNlKGJhY2tncm91bmQpO1xuICByZXR1cm4gKE1hdGgubWF4KGx1bUEsIGx1bUIpICsgMC4wNSkgLyAoTWF0aC5taW4obHVtQSwgbHVtQikgKyAwLjA1KTtcbn1cbi8qKlxuICogVGhlIHJlbGF0aXZlIGJyaWdodG5lc3Mgb2YgYW55IHBvaW50IGluIGEgY29sb3Igc3BhY2UsXG4gKiBub3JtYWxpemVkIHRvIDAgZm9yIGRhcmtlc3QgYmxhY2sgYW5kIDEgZm9yIGxpZ2h0ZXN0IHdoaXRlLlxuICpcbiAqIEZvcm11bGE6IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAtVEVDSFMvRzE3Lmh0bWwjRzE3LXRlc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHJldHVybnMge251bWJlcn0gVGhlIHJlbGF0aXZlIGJyaWdodG5lc3Mgb2YgdGhlIGNvbG9yIGluIHRoZSByYW5nZSAwIC0gMVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMdW1pbmFuY2UoY29sb3IpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIHZhciByZ2IgPSBjb2xvci50eXBlID09PSAnaHNsJyA/IGRlY29tcG9zZUNvbG9yKGhzbFRvUmdiKGNvbG9yKSkudmFsdWVzIDogY29sb3IudmFsdWVzO1xuICByZ2IgPSByZ2IubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICB2YWwgLz0gMjU1OyAvLyBub3JtYWxpemVkXG5cbiAgICByZXR1cm4gdmFsIDw9IDAuMDM5MjggPyB2YWwgLyAxMi45MiA6IE1hdGgucG93KCh2YWwgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgfSk7IC8vIFRydW5jYXRlIGF0IDMgZGlnaXRzXG5cbiAgcmV0dXJuIE51bWJlcigoMC4yMTI2ICogcmdiWzBdICsgMC43MTUyICogcmdiWzFdICsgMC4wNzIyICogcmdiWzJdKS50b0ZpeGVkKDMpKTtcbn1cbi8qKlxuICogRGFya2VuIG9yIGxpZ2h0ZW4gYSBjb2xvciwgZGVwZW5kaW5nIG9uIGl0cyBsdW1pbmFuY2UuXG4gKiBMaWdodCBjb2xvcnMgYXJlIGRhcmtlbmVkLCBkYXJrIGNvbG9ycyBhcmUgbGlnaHRlbmVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2VmZmljaWVudD0wLjE1IC0gbXVsdGlwbGllciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVtcGhhc2l6ZShjb2xvcikge1xuICB2YXIgY29lZmZpY2llbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDAuMTU7XG4gIHJldHVybiBnZXRMdW1pbmFuY2UoY29sb3IpID4gMC41ID8gZGFya2VuKGNvbG9yLCBjb2VmZmljaWVudCkgOiBsaWdodGVuKGNvbG9yLCBjb2VmZmljaWVudCk7XG59XG52YXIgd2FybmVkT25jZSA9IGZhbHNlO1xuLyoqXG4gKiBTZXQgdGhlIGFic29sdXRlIHRyYW5zcGFyZW5jeSBvZiBhIGNvbG9yLlxuICogQW55IGV4aXN0aW5nIGFscGhhIHZhbHVlcyBhcmUgb3ZlcndyaXR0ZW4uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gdmFsdWUgdG8gc2V0IHRoZSBhbHBoYSBjaGFubmVsIHRvIGluIHRoZSByYW5nZSAwIC0xXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxuICpcbiAqIEBkZXByZWNhdGVkXG4gKiBVc2UgYGltcG9ydCB7IGFscGhhIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ2AgaW5zdGVhZC5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZmFkZShjb2xvciwgdmFsdWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXdhcm5lZE9uY2UpIHtcbiAgICAgIHdhcm5lZE9uY2UgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBUaGUgYGZhZGVgIGNvbG9yIHV0aWxpdHkgd2FzIHJlbmFtZWQgdG8gYGFscGhhYCB0byBiZXR0ZXIgZGVzY3JpYmUgaXRzIGZ1bmN0aW9uYWxpdHkuJywgJycsIFwiWW91IHNob3VsZCB1c2UgYGltcG9ydCB7IGFscGhhIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ2BcIl0uam9pbignXFxuJykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhbHBoYShjb2xvciwgdmFsdWUpO1xufVxuLyoqXG4gKiBTZXQgdGhlIGFic29sdXRlIHRyYW5zcGFyZW5jeSBvZiBhIGNvbG9yLlxuICogQW55IGV4aXN0aW5nIGFscGhhIHZhbHVlIGlzIG92ZXJ3cml0dGVuLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIHZhbHVlIHRvIHNldCB0aGUgYWxwaGEgY2hhbm5lbCB0byBpbiB0aGUgcmFuZ2UgMC0xXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhbHBoYShjb2xvciwgdmFsdWUpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIHZhbHVlID0gY2xhbXAodmFsdWUpO1xuXG4gIGlmIChjb2xvci50eXBlID09PSAncmdiJyB8fCBjb2xvci50eXBlID09PSAnaHNsJykge1xuICAgIGNvbG9yLnR5cGUgKz0gJ2EnO1xuICB9XG5cbiAgY29sb3IudmFsdWVzWzNdID0gdmFsdWU7XG4gIHJldHVybiByZWNvbXBvc2VDb2xvcihjb2xvcik7XG59XG4vKipcbiAqIERhcmtlbnMgYSBjb2xvci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcGFyYW0ge251bWJlcn0gY29lZmZpY2llbnQgLSBtdWx0aXBsaWVyIGluIHRoZSByYW5nZSAwIC0gMVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGFya2VuKGNvbG9yLCBjb2VmZmljaWVudCkge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgY29lZmZpY2llbnQgPSBjbGFtcChjb2VmZmljaWVudCk7XG5cbiAgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZignaHNsJykgIT09IC0xKSB7XG4gICAgY29sb3IudmFsdWVzWzJdICo9IDEgLSBjb2VmZmljaWVudDtcbiAgfSBlbHNlIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ3JnYicpICE9PSAtMSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBjb2xvci52YWx1ZXNbaV0gKj0gMSAtIGNvZWZmaWNpZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWNvbXBvc2VDb2xvcihjb2xvcik7XG59XG4vKipcbiAqIExpZ2h0ZW5zIGEgY29sb3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IGNvZWZmaWNpZW50IC0gbXVsdGlwbGllciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxpZ2h0ZW4oY29sb3IsIGNvZWZmaWNpZW50KSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICBjb2VmZmljaWVudCA9IGNsYW1wKGNvZWZmaWNpZW50KTtcblxuICBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdoc2wnKSAhPT0gLTEpIHtcbiAgICBjb2xvci52YWx1ZXNbMl0gKz0gKDEwMCAtIGNvbG9yLnZhbHVlc1syXSkgKiBjb2VmZmljaWVudDtcbiAgfSBlbHNlIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ3JnYicpICE9PSAtMSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBjb2xvci52YWx1ZXNbaV0gKz0gKDI1NSAtIGNvbG9yLnZhbHVlc1tpXSkgKiBjb2VmZmljaWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVjb21wb3NlQ29sb3IoY29sb3IpO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbi8vIFNvcnRlZCBBU0MgYnkgc2l6ZS4gVGhhdCdzIGltcG9ydGFudC5cbi8vIEl0IGNhbid0IGJlIGNvbmZpZ3VyZWQgYXMgaXQncyB1c2VkIHN0YXRpY2FsbHkgZm9yIHByb3BUeXBlcy5cbmV4cG9ydCB2YXIga2V5cyA9IFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXTsgLy8gS2VlcCBpbiBtaW5kIHRoYXQgQG1lZGlhIGlzIGluY2x1c2l2ZSBieSB0aGUgQ1NTIHNwZWNpZmljYXRpb24uXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJyZWFrcG9pbnRzKGJyZWFrcG9pbnRzKSB7XG4gIHZhciBfYnJlYWtwb2ludHMkdmFsdWVzID0gYnJlYWtwb2ludHMudmFsdWVzLFxuICAgICAgdmFsdWVzID0gX2JyZWFrcG9pbnRzJHZhbHVlcyA9PT0gdm9pZCAwID8ge1xuICAgIHhzOiAwLFxuICAgIHNtOiA2MDAsXG4gICAgbWQ6IDk2MCxcbiAgICBsZzogMTI4MCxcbiAgICB4bDogMTkyMFxuICB9IDogX2JyZWFrcG9pbnRzJHZhbHVlcyxcbiAgICAgIF9icmVha3BvaW50cyR1bml0ID0gYnJlYWtwb2ludHMudW5pdCxcbiAgICAgIHVuaXQgPSBfYnJlYWtwb2ludHMkdW5pdCA9PT0gdm9pZCAwID8gJ3B4JyA6IF9icmVha3BvaW50cyR1bml0LFxuICAgICAgX2JyZWFrcG9pbnRzJHN0ZXAgPSBicmVha3BvaW50cy5zdGVwLFxuICAgICAgc3RlcCA9IF9icmVha3BvaW50cyRzdGVwID09PSB2b2lkIDAgPyA1IDogX2JyZWFrcG9pbnRzJHN0ZXAsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhicmVha3BvaW50cywgW1widmFsdWVzXCIsIFwidW5pdFwiLCBcInN0ZXBcIl0pO1xuXG4gIGZ1bmN0aW9uIHVwKGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHR5cGVvZiB2YWx1ZXNba2V5XSA9PT0gJ251bWJlcicgPyB2YWx1ZXNba2V5XSA6IGtleTtcbiAgICByZXR1cm4gXCJAbWVkaWEgKG1pbi13aWR0aDpcIi5jb25jYXQodmFsdWUpLmNvbmNhdCh1bml0LCBcIilcIik7XG4gIH1cblxuICBmdW5jdGlvbiBkb3duKGtleSkge1xuICAgIHZhciBlbmRJbmRleCA9IGtleXMuaW5kZXhPZihrZXkpICsgMTtcbiAgICB2YXIgdXBwZXJib3VuZCA9IHZhbHVlc1trZXlzW2VuZEluZGV4XV07XG5cbiAgICBpZiAoZW5kSW5kZXggPT09IGtleXMubGVuZ3RoKSB7XG4gICAgICAvLyB4bCBkb3duIGFwcGxpZXMgdG8gYWxsIHNpemVzXG4gICAgICByZXR1cm4gdXAoJ3hzJyk7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gdHlwZW9mIHVwcGVyYm91bmQgPT09ICdudW1iZXInICYmIGVuZEluZGV4ID4gMCA/IHVwcGVyYm91bmQgOiBrZXk7XG4gICAgcmV0dXJuIFwiQG1lZGlhIChtYXgtd2lkdGg6XCIuY29uY2F0KHZhbHVlIC0gc3RlcCAvIDEwMCkuY29uY2F0KHVuaXQsIFwiKVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJldHdlZW4oc3RhcnQsIGVuZCkge1xuICAgIHZhciBlbmRJbmRleCA9IGtleXMuaW5kZXhPZihlbmQpO1xuXG4gICAgaWYgKGVuZEluZGV4ID09PSBrZXlzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybiB1cChzdGFydCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiQG1lZGlhIChtaW4td2lkdGg6XCIuY29uY2F0KHR5cGVvZiB2YWx1ZXNbc3RhcnRdID09PSAnbnVtYmVyJyA/IHZhbHVlc1tzdGFydF0gOiBzdGFydCkuY29uY2F0KHVuaXQsIFwiKSBhbmQgXCIpICsgXCIobWF4LXdpZHRoOlwiLmNvbmNhdCgoZW5kSW5kZXggIT09IC0xICYmIHR5cGVvZiB2YWx1ZXNba2V5c1tlbmRJbmRleCArIDFdXSA9PT0gJ251bWJlcicgPyB2YWx1ZXNba2V5c1tlbmRJbmRleCArIDFdXSA6IGVuZCkgLSBzdGVwIC8gMTAwKS5jb25jYXQodW5pdCwgXCIpXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25seShrZXkpIHtcbiAgICByZXR1cm4gYmV0d2VlbihrZXksIGtleSk7XG4gIH1cblxuICB2YXIgd2FybmVkT25jZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHdpZHRoKGtleSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIXdhcm5lZE9uY2UpIHtcbiAgICAgICAgd2FybmVkT25jZSA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUud2FybihbXCJNYXRlcmlhbC1VSTogVGhlIGB0aGVtZS5icmVha3BvaW50cy53aWR0aGAgdXRpbGl0eSBpcyBkZXByZWNhdGVkIGJlY2F1c2UgaXQncyByZWR1bmRhbnQuXCIsICdVc2UgdGhlIGB0aGVtZS5icmVha3BvaW50cy52YWx1ZXNgIGluc3RlYWQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXNba2V5XTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAga2V5czoga2V5cyxcbiAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICB1cDogdXAsXG4gICAgZG93bjogZG93bixcbiAgICBiZXR3ZWVuOiBiZXR3ZWVuLFxuICAgIG9ubHk6IG9ubHksXG4gICAgd2lkdGg6IHdpZHRoXG4gIH0sIG90aGVyKTtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNaXhpbnMoYnJlYWtwb2ludHMsIHNwYWNpbmcsIG1peGlucykge1xuICB2YXIgX3Rvb2xiYXI7XG5cbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICBndXR0ZXJzOiBmdW5jdGlvbiBndXR0ZXJzKCkge1xuICAgICAgdmFyIHN0eWxlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICBjb25zb2xlLndhcm4oWydNYXRlcmlhbC1VSTogdGhlbWUubWl4aW5zLmd1dHRlcnMoKSBpcyBkZXByZWNhdGVkLicsICdZb3UgY2FuIHVzZSB0aGUgc291cmNlIG9mIHRoZSBtaXhpbiBkaXJlY3RseTonLCBcIlxcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxcbiAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZygyKSxcXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XFxuICAgICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygzKSxcXG4gICAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZygzKSxcXG4gICAgICB9LFxcbiAgICAgIFwiXS5qb2luKCdcXG4nKSk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBwYWRkaW5nTGVmdDogc3BhY2luZygyKSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nKDIpXG4gICAgICB9LCBzdHlsZXMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgYnJlYWtwb2ludHMudXAoJ3NtJyksIF9leHRlbmRzKHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcoMyksXG4gICAgICAgIHBhZGRpbmdSaWdodDogc3BhY2luZygzKVxuICAgICAgfSwgc3R5bGVzW2JyZWFrcG9pbnRzLnVwKCdzbScpXSkpKTtcbiAgICB9LFxuICAgIHRvb2xiYXI6IChfdG9vbGJhciA9IHtcbiAgICAgIG1pbkhlaWdodDogNTZcbiAgICB9LCBfZGVmaW5lUHJvcGVydHkoX3Rvb2xiYXIsIFwiXCIuY29uY2F0KGJyZWFrcG9pbnRzLnVwKCd4cycpLCBcIiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLCB7XG4gICAgICBtaW5IZWlnaHQ6IDQ4XG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfdG9vbGJhciwgYnJlYWtwb2ludHMudXAoJ3NtJyksIHtcbiAgICAgIG1pbkhlaWdodDogNjRcbiAgICB9KSwgX3Rvb2xiYXIpXG4gIH0sIG1peGlucyk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG5pbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGNvbW1vbiBmcm9tICcuLi9jb2xvcnMvY29tbW9uJztcbmltcG9ydCBncmV5IGZyb20gJy4uL2NvbG9ycy9ncmV5JztcbmltcG9ydCBpbmRpZ28gZnJvbSAnLi4vY29sb3JzL2luZGlnbyc7XG5pbXBvcnQgcGluayBmcm9tICcuLi9jb2xvcnMvcGluayc7XG5pbXBvcnQgcmVkIGZyb20gJy4uL2NvbG9ycy9yZWQnO1xuaW1wb3J0IG9yYW5nZSBmcm9tICcuLi9jb2xvcnMvb3JhbmdlJztcbmltcG9ydCBibHVlIGZyb20gJy4uL2NvbG9ycy9ibHVlJztcbmltcG9ydCBncmVlbiBmcm9tICcuLi9jb2xvcnMvZ3JlZW4nO1xuaW1wb3J0IHsgZGFya2VuLCBnZXRDb250cmFzdFJhdGlvLCBsaWdodGVuIH0gZnJvbSAnLi9jb2xvck1hbmlwdWxhdG9yJztcbmV4cG9ydCB2YXIgbGlnaHQgPSB7XG4gIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBzdHlsZSB0aGUgdGV4dC5cbiAgdGV4dDoge1xuICAgIC8vIFRoZSBtb3N0IGltcG9ydGFudCB0ZXh0LlxuICAgIHByaW1hcnk6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgICAvLyBTZWNvbmRhcnkgdGV4dC5cbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDAsIDAsIDAsIDAuNTQpJyxcbiAgICAvLyBEaXNhYmxlZCB0ZXh0IGhhdmUgZXZlbiBsb3dlciB2aXN1YWwgcHJvbWluZW5jZS5cbiAgICBkaXNhYmxlZDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknLFxuICAgIC8vIFRleHQgaGludHMuXG4gICAgaGludDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknXG4gIH0sXG4gIC8vIFRoZSBjb2xvciB1c2VkIHRvIGRpdmlkZSBkaWZmZXJlbnQgZWxlbWVudHMuXG4gIGRpdmlkZXI6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgLy8gVGhlIGJhY2tncm91bmQgY29sb3JzIHVzZWQgdG8gc3R5bGUgdGhlIHN1cmZhY2VzLlxuICAvLyBDb25zaXN0ZW5jeSBiZXR3ZWVuIHRoZXNlIHZhbHVlcyBpcyBpbXBvcnRhbnQuXG4gIGJhY2tncm91bmQ6IHtcbiAgICBwYXBlcjogY29tbW9uLndoaXRlLFxuICAgIGRlZmF1bHQ6IGdyZXlbNTBdXG4gIH0sXG4gIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBzdHlsZSB0aGUgYWN0aW9uIGVsZW1lbnRzLlxuICBhY3Rpb246IHtcbiAgICAvLyBUaGUgY29sb3Igb2YgYW4gYWN0aXZlIGFjdGlvbiBsaWtlIGFuIGljb24gYnV0dG9uLlxuICAgIGFjdGl2ZTogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICAgIC8vIFRoZSBjb2xvciBvZiBhbiBob3ZlcmVkIGFjdGlvbi5cbiAgICBob3ZlcjogJ3JnYmEoMCwgMCwgMCwgMC4wNCknLFxuICAgIGhvdmVyT3BhY2l0eTogMC4wNCxcbiAgICAvLyBUaGUgY29sb3Igb2YgYSBzZWxlY3RlZCBhY3Rpb24uXG4gICAgc2VsZWN0ZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMDgpJyxcbiAgICBzZWxlY3RlZE9wYWNpdHk6IDAuMDgsXG4gICAgLy8gVGhlIGNvbG9yIG9mIGEgZGlzYWJsZWQgYWN0aW9uLlxuICAgIGRpc2FibGVkOiAncmdiYSgwLCAwLCAwLCAwLjI2KScsXG4gICAgLy8gVGhlIGJhY2tncm91bmQgY29sb3Igb2YgYSBkaXNhYmxlZCBhY3Rpb24uXG4gICAgZGlzYWJsZWRCYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgZGlzYWJsZWRPcGFjaXR5OiAwLjM4LFxuICAgIGZvY3VzOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgZm9jdXNPcGFjaXR5OiAwLjEyLFxuICAgIGFjdGl2YXRlZE9wYWNpdHk6IDAuMTJcbiAgfVxufTtcbmV4cG9ydCB2YXIgZGFyayA9IHtcbiAgdGV4dDoge1xuICAgIHByaW1hcnk6IGNvbW1vbi53aGl0ZSxcbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknLFxuICAgIGRpc2FibGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICBoaW50OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICBpY29uOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJ1xuICB9LFxuICBkaXZpZGVyOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gIGJhY2tncm91bmQ6IHtcbiAgICBwYXBlcjogZ3JleVs4MDBdLFxuICAgIGRlZmF1bHQ6ICcjMzAzMDMwJ1xuICB9LFxuICBhY3Rpb246IHtcbiAgICBhY3RpdmU6IGNvbW1vbi53aGl0ZSxcbiAgICBob3ZlcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCknLFxuICAgIGhvdmVyT3BhY2l0eTogMC4wOCxcbiAgICBzZWxlY3RlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNiknLFxuICAgIHNlbGVjdGVkT3BhY2l0eTogMC4xNixcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKScsXG4gICAgZGlzYWJsZWRCYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gICAgZGlzYWJsZWRPcGFjaXR5OiAwLjM4LFxuICAgIGZvY3VzOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gICAgZm9jdXNPcGFjaXR5OiAwLjEyLFxuICAgIGFjdGl2YXRlZE9wYWNpdHk6IDAuMjRcbiAgfVxufTtcblxuZnVuY3Rpb24gYWRkTGlnaHRPckRhcmsoaW50ZW50LCBkaXJlY3Rpb24sIHNoYWRlLCB0b25hbE9mZnNldCkge1xuICB2YXIgdG9uYWxPZmZzZXRMaWdodCA9IHRvbmFsT2Zmc2V0LmxpZ2h0IHx8IHRvbmFsT2Zmc2V0O1xuICB2YXIgdG9uYWxPZmZzZXREYXJrID0gdG9uYWxPZmZzZXQuZGFyayB8fCB0b25hbE9mZnNldCAqIDEuNTtcblxuICBpZiAoIWludGVudFtkaXJlY3Rpb25dKSB7XG4gICAgaWYgKGludGVudC5oYXNPd25Qcm9wZXJ0eShzaGFkZSkpIHtcbiAgICAgIGludGVudFtkaXJlY3Rpb25dID0gaW50ZW50W3NoYWRlXTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2xpZ2h0Jykge1xuICAgICAgaW50ZW50LmxpZ2h0ID0gbGlnaHRlbihpbnRlbnQubWFpbiwgdG9uYWxPZmZzZXRMaWdodCk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkYXJrJykge1xuICAgICAgaW50ZW50LmRhcmsgPSBkYXJrZW4oaW50ZW50Lm1haW4sIHRvbmFsT2Zmc2V0RGFyayk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBhbGV0dGUocGFsZXR0ZSkge1xuICB2YXIgX3BhbGV0dGUkcHJpbWFyeSA9IHBhbGV0dGUucHJpbWFyeSxcbiAgICAgIHByaW1hcnkgPSBfcGFsZXR0ZSRwcmltYXJ5ID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IGluZGlnb1szMDBdLFxuICAgIG1haW46IGluZGlnb1s1MDBdLFxuICAgIGRhcms6IGluZGlnb1s3MDBdXG4gIH0gOiBfcGFsZXR0ZSRwcmltYXJ5LFxuICAgICAgX3BhbGV0dGUkc2Vjb25kYXJ5ID0gcGFsZXR0ZS5zZWNvbmRhcnksXG4gICAgICBzZWNvbmRhcnkgPSBfcGFsZXR0ZSRzZWNvbmRhcnkgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogcGluay5BMjAwLFxuICAgIG1haW46IHBpbmsuQTQwMCxcbiAgICBkYXJrOiBwaW5rLkE3MDBcbiAgfSA6IF9wYWxldHRlJHNlY29uZGFyeSxcbiAgICAgIF9wYWxldHRlJGVycm9yID0gcGFsZXR0ZS5lcnJvcixcbiAgICAgIGVycm9yID0gX3BhbGV0dGUkZXJyb3IgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogcmVkWzMwMF0sXG4gICAgbWFpbjogcmVkWzUwMF0sXG4gICAgZGFyazogcmVkWzcwMF1cbiAgfSA6IF9wYWxldHRlJGVycm9yLFxuICAgICAgX3BhbGV0dGUkd2FybmluZyA9IHBhbGV0dGUud2FybmluZyxcbiAgICAgIHdhcm5pbmcgPSBfcGFsZXR0ZSR3YXJuaW5nID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IG9yYW5nZVszMDBdLFxuICAgIG1haW46IG9yYW5nZVs1MDBdLFxuICAgIGRhcms6IG9yYW5nZVs3MDBdXG4gIH0gOiBfcGFsZXR0ZSR3YXJuaW5nLFxuICAgICAgX3BhbGV0dGUkaW5mbyA9IHBhbGV0dGUuaW5mbyxcbiAgICAgIGluZm8gPSBfcGFsZXR0ZSRpbmZvID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IGJsdWVbMzAwXSxcbiAgICBtYWluOiBibHVlWzUwMF0sXG4gICAgZGFyazogYmx1ZVs3MDBdXG4gIH0gOiBfcGFsZXR0ZSRpbmZvLFxuICAgICAgX3BhbGV0dGUkc3VjY2VzcyA9IHBhbGV0dGUuc3VjY2VzcyxcbiAgICAgIHN1Y2Nlc3MgPSBfcGFsZXR0ZSRzdWNjZXNzID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IGdyZWVuWzMwMF0sXG4gICAgbWFpbjogZ3JlZW5bNTAwXSxcbiAgICBkYXJrOiBncmVlbls3MDBdXG4gIH0gOiBfcGFsZXR0ZSRzdWNjZXNzLFxuICAgICAgX3BhbGV0dGUkdHlwZSA9IHBhbGV0dGUudHlwZSxcbiAgICAgIHR5cGUgPSBfcGFsZXR0ZSR0eXBlID09PSB2b2lkIDAgPyAnbGlnaHQnIDogX3BhbGV0dGUkdHlwZSxcbiAgICAgIF9wYWxldHRlJGNvbnRyYXN0VGhyZSA9IHBhbGV0dGUuY29udHJhc3RUaHJlc2hvbGQsXG4gICAgICBjb250cmFzdFRocmVzaG9sZCA9IF9wYWxldHRlJGNvbnRyYXN0VGhyZSA9PT0gdm9pZCAwID8gMyA6IF9wYWxldHRlJGNvbnRyYXN0VGhyZSxcbiAgICAgIF9wYWxldHRlJHRvbmFsT2Zmc2V0ID0gcGFsZXR0ZS50b25hbE9mZnNldCxcbiAgICAgIHRvbmFsT2Zmc2V0ID0gX3BhbGV0dGUkdG9uYWxPZmZzZXQgPT09IHZvaWQgMCA/IDAuMiA6IF9wYWxldHRlJHRvbmFsT2Zmc2V0LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocGFsZXR0ZSwgW1wicHJpbWFyeVwiLCBcInNlY29uZGFyeVwiLCBcImVycm9yXCIsIFwid2FybmluZ1wiLCBcImluZm9cIiwgXCJzdWNjZXNzXCIsIFwidHlwZVwiLCBcImNvbnRyYXN0VGhyZXNob2xkXCIsIFwidG9uYWxPZmZzZXRcIl0pOyAvLyBVc2UgdGhlIHNhbWUgbG9naWMgYXNcbiAgLy8gQm9vdHN0cmFwOiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi8xZDZlMzcxMGRkNDQ3ZGUxYTIwMGYyOWU4ZmE1MjFmOGEwOTA4ZjcwL3Njc3MvX2Z1bmN0aW9ucy5zY3NzI0w1OVxuICAvLyBhbmQgbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIgaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9hYzQ2Yjg4NjNjNGRhYjlmYzIyYzRjNjYyZGM2YmQxYjY1ZGQ2NTJmL3BhY2thZ2VzL21kYy10aGVtZS9fZnVuY3Rpb25zLnNjc3MjTDU0XG5cblxuICBmdW5jdGlvbiBnZXRDb250cmFzdFRleHQoYmFja2dyb3VuZCkge1xuICAgIHZhciBjb250cmFzdFRleHQgPSBnZXRDb250cmFzdFJhdGlvKGJhY2tncm91bmQsIGRhcmsudGV4dC5wcmltYXJ5KSA+PSBjb250cmFzdFRocmVzaG9sZCA/IGRhcmsudGV4dC5wcmltYXJ5IDogbGlnaHQudGV4dC5wcmltYXJ5O1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBjb250cmFzdCA9IGdldENvbnRyYXN0UmF0aW8oYmFja2dyb3VuZCwgY29udHJhc3RUZXh0KTtcblxuICAgICAgaWYgKGNvbnRyYXN0IDwgMykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgY29udHJhc3QgcmF0aW8gb2YgXCIuY29uY2F0KGNvbnRyYXN0LCBcIjoxIGZvciBcIikuY29uY2F0KGNvbnRyYXN0VGV4dCwgXCIgb24gXCIpLmNvbmNhdChiYWNrZ3JvdW5kKSwgJ2ZhbGxzIGJlbG93IHRoZSBXQ0FHIHJlY29tbWVuZGVkIGFic29sdXRlIG1pbmltdW0gY29udHJhc3QgcmF0aW8gb2YgMzoxLicsICdodHRwczovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMtV0NBRzIwLTIwMDgxMjExLyN2aXN1YWwtYXVkaW8tY29udHJhc3QtY29udHJhc3QnXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyYXN0VGV4dDtcbiAgfVxuXG4gIHZhciBhdWdtZW50Q29sb3IgPSBmdW5jdGlvbiBhdWdtZW50Q29sb3IoY29sb3IpIHtcbiAgICB2YXIgbWFpblNoYWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiA1MDA7XG4gICAgdmFyIGxpZ2h0U2hhZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDMwMDtcbiAgICB2YXIgZGFya1NoYWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiA3MDA7XG4gICAgY29sb3IgPSBfZXh0ZW5kcyh7fSwgY29sb3IpO1xuXG4gICAgaWYgKCFjb2xvci5tYWluICYmIGNvbG9yW21haW5TaGFkZV0pIHtcbiAgICAgIGNvbG9yLm1haW4gPSBjb2xvclttYWluU2hhZGVdO1xuICAgIH1cblxuICAgIGlmICghY29sb3IubWFpbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiTWF0ZXJpYWwtVUk6IFRoZSBjb2xvciBwcm92aWRlZCB0byBhdWdtZW50Q29sb3IoY29sb3IpIGlzIGludmFsaWQuXFxuVGhlIGNvbG9yIG9iamVjdCBuZWVkcyB0byBoYXZlIGEgYG1haW5gIHByb3BlcnR5IG9yIGEgYFwiLmNvbmNhdChtYWluU2hhZGUsIFwiYCBwcm9wZXJ0eS5cIikgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDQsIG1haW5TaGFkZSkpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29sb3IubWFpbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBUaGUgY29sb3IgcHJvdmlkZWQgdG8gYXVnbWVudENvbG9yKGNvbG9yKSBpcyBpbnZhbGlkLlxcbmBjb2xvci5tYWluYCBzaG91bGQgYmUgYSBzdHJpbmcsIGJ1dCBgXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGNvbG9yLm1haW4pLCBcImAgd2FzIHByb3ZpZGVkIGluc3RlYWQuXFxuXFxuRGlkIHlvdSBpbnRlbmQgdG8gdXNlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGFwcHJvYWNoZXM/XFxuXFxuaW1wb3J0IHtcXHhBMGdyZWVuIH0gZnJvbSBcXFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXFxcIjtcXG5cXG5jb25zdCB0aGVtZTEgPSBjcmVhdGVUaGVtZSh7IHBhbGV0dGU6IHtcXG4gIHByaW1hcnk6IGdyZWVuLFxcbn0gfSk7XFxuXFxuY29uc3QgdGhlbWUyID0gY3JlYXRlVGhlbWUoeyBwYWxldHRlOiB7XFxuICBwcmltYXJ5OiB7IG1haW46IGdyZWVuWzUwMF0gfSxcXG59IH0pO1wiKSA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoNSwgSlNPTi5zdHJpbmdpZnkoY29sb3IubWFpbikpKTtcbiAgICB9XG5cbiAgICBhZGRMaWdodE9yRGFyayhjb2xvciwgJ2xpZ2h0JywgbGlnaHRTaGFkZSwgdG9uYWxPZmZzZXQpO1xuICAgIGFkZExpZ2h0T3JEYXJrKGNvbG9yLCAnZGFyaycsIGRhcmtTaGFkZSwgdG9uYWxPZmZzZXQpO1xuXG4gICAgaWYgKCFjb2xvci5jb250cmFzdFRleHQpIHtcbiAgICAgIGNvbG9yLmNvbnRyYXN0VGV4dCA9IGdldENvbnRyYXN0VGV4dChjb2xvci5tYWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3I7XG4gIH07XG5cbiAgdmFyIHR5cGVzID0ge1xuICAgIGRhcms6IGRhcmssXG4gICAgbGlnaHQ6IGxpZ2h0XG4gIH07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXR5cGVzW3R5cGVdKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IFRoZSBwYWxldHRlIHR5cGUgYFwiLmNvbmNhdCh0eXBlLCBcImAgaXMgbm90IHN1cHBvcnRlZC5cIikpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwYWxldHRlT3V0cHV0ID0gZGVlcG1lcmdlKF9leHRlbmRzKHtcbiAgICAvLyBBIGNvbGxlY3Rpb24gb2YgY29tbW9uIGNvbG9ycy5cbiAgICBjb21tb246IGNvbW1vbixcbiAgICAvLyBUaGUgcGFsZXR0ZSB0eXBlLCBjYW4gYmUgbGlnaHQgb3IgZGFyay5cbiAgICB0eXBlOiB0eXBlLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byByZXByZXNlbnQgcHJpbWFyeSBpbnRlcmZhY2UgZWxlbWVudHMgZm9yIGEgdXNlci5cbiAgICBwcmltYXJ5OiBhdWdtZW50Q29sb3IocHJpbWFyeSksXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHJlcHJlc2VudCBzZWNvbmRhcnkgaW50ZXJmYWNlIGVsZW1lbnRzIGZvciBhIHVzZXIuXG4gICAgc2Vjb25kYXJ5OiBhdWdtZW50Q29sb3Ioc2Vjb25kYXJ5LCAnQTQwMCcsICdBMjAwJywgJ0E3MDAnKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcmVwcmVzZW50IGludGVyZmFjZSBlbGVtZW50cyB0aGF0IHRoZSB1c2VyIHNob3VsZCBiZSBtYWRlIGF3YXJlIG9mLlxuICAgIGVycm9yOiBhdWdtZW50Q29sb3IoZXJyb3IpLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byByZXByZXNlbnQgcG90ZW50aWFsbHkgZGFuZ2Vyb3VzIGFjdGlvbnMgb3IgaW1wb3J0YW50IG1lc3NhZ2VzLlxuICAgIHdhcm5pbmc6IGF1Z21lbnRDb2xvcih3YXJuaW5nKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcHJlc2VudCBpbmZvcm1hdGlvbiB0byB0aGUgdXNlciB0aGF0IGlzIG5ldXRyYWwgYW5kIG5vdCBuZWNlc3NhcmlseSBpbXBvcnRhbnQuXG4gICAgaW5mbzogYXVnbWVudENvbG9yKGluZm8pLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBpbmRpY2F0ZSB0aGUgc3VjY2Vzc2Z1bCBjb21wbGV0aW9uIG9mIGFuIGFjdGlvbiB0aGF0IHVzZXIgdHJpZ2dlcmVkLlxuICAgIHN1Y2Nlc3M6IGF1Z21lbnRDb2xvcihzdWNjZXNzKSxcbiAgICAvLyBUaGUgZ3JleSBjb2xvcnMuXG4gICAgZ3JleTogZ3JleSxcbiAgICAvLyBVc2VkIGJ5IGBnZXRDb250cmFzdFRleHQoKWAgdG8gbWF4aW1pemUgdGhlIGNvbnRyYXN0IGJldHdlZW5cbiAgICAvLyB0aGUgYmFja2dyb3VuZCBhbmQgdGhlIHRleHQuXG4gICAgY29udHJhc3RUaHJlc2hvbGQ6IGNvbnRyYXN0VGhyZXNob2xkLFxuICAgIC8vIFRha2VzIGEgYmFja2dyb3VuZCBjb2xvciBhbmQgcmV0dXJucyB0aGUgdGV4dCBjb2xvciB0aGF0IG1heGltaXplcyB0aGUgY29udHJhc3QuXG4gICAgZ2V0Q29udHJhc3RUZXh0OiBnZXRDb250cmFzdFRleHQsXG4gICAgLy8gR2VuZXJhdGUgYSByaWNoIGNvbG9yIG9iamVjdC5cbiAgICBhdWdtZW50Q29sb3I6IGF1Z21lbnRDb2xvcixcbiAgICAvLyBVc2VkIGJ5IHRoZSBmdW5jdGlvbnMgYmVsb3cgdG8gc2hpZnQgYSBjb2xvcidzIGx1bWluYW5jZSBieSBhcHByb3hpbWF0ZWx5XG4gICAgLy8gdHdvIGluZGV4ZXMgd2l0aGluIGl0cyB0b25hbCBwYWxldHRlLlxuICAgIC8vIEUuZy4sIHNoaWZ0IGZyb20gUmVkIDUwMCB0byBSZWQgMzAwIG9yIFJlZCA3MDAuXG4gICAgdG9uYWxPZmZzZXQ6IHRvbmFsT2Zmc2V0XG4gIH0sIHR5cGVzW3R5cGVdKSwgb3RoZXIpO1xuICByZXR1cm4gcGFsZXR0ZU91dHB1dDtcbn0iLCJpbXBvcnQgeyBjcmVhdGVVbmFyeVNwYWNpbmcgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3lzdGVtJztcbnZhciB3YXJuT25jZTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNwYWNpbmcoKSB7XG4gIHZhciBzcGFjaW5nSW5wdXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDg7XG5cbiAgLy8gQWxyZWFkeSB0cmFuc2Zvcm1lZC5cbiAgaWYgKHNwYWNpbmdJbnB1dC5tdWkpIHtcbiAgICByZXR1cm4gc3BhY2luZ0lucHV0O1xuICB9IC8vIE1hdGVyaWFsIERlc2lnbiBsYXlvdXRzIGFyZSB2aXN1YWxseSBiYWxhbmNlZC4gTW9zdCBtZWFzdXJlbWVudHMgYWxpZ24gdG8gYW4gOGRwIGdyaWQgYXBwbGllZCwgd2hpY2ggYWxpZ25zIGJvdGggc3BhY2luZyBhbmQgdGhlIG92ZXJhbGwgbGF5b3V0LlxuICAvLyBTbWFsbGVyIGNvbXBvbmVudHMsIHN1Y2ggYXMgaWNvbnMgYW5kIHR5cGUsIGNhbiBhbGlnbiB0byBhIDRkcCBncmlkLlxuICAvLyBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9sYXlvdXQvdW5kZXJzdGFuZGluZy1sYXlvdXQuaHRtbCN1c2FnZVxuXG5cbiAgdmFyIHRyYW5zZm9ybSA9IGNyZWF0ZVVuYXJ5U3BhY2luZyh7XG4gICAgc3BhY2luZzogc3BhY2luZ0lucHV0XG4gIH0pO1xuXG4gIHZhciBzcGFjaW5nID0gZnVuY3Rpb24gc3BhY2luZygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghKGFyZ3MubGVuZ3RoIDw9IDQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogVG9vIG1hbnkgYXJndW1lbnRzIHByb3ZpZGVkLCBleHBlY3RlZCBiZXR3ZWVuIDAgYW5kIDQsIGdvdCBcIi5jb25jYXQoYXJncy5sZW5ndGgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0cmFuc2Zvcm0oMSk7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtKGFyZ3NbMF0pO1xuICAgIH1cblxuICAgIHJldHVybiBhcmdzLm1hcChmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudDtcbiAgICAgIH1cblxuICAgICAgdmFyIG91dHB1dCA9IHRyYW5zZm9ybShhcmd1bWVudCk7XG4gICAgICByZXR1cm4gdHlwZW9mIG91dHB1dCA9PT0gJ251bWJlcicgPyBcIlwiLmNvbmNhdChvdXRwdXQsIFwicHhcIikgOiBvdXRwdXQ7XG4gICAgfSkuam9pbignICcpO1xuICB9OyAvLyBCYWNrd2FyZCBjb21wYXRpYmlsaXR5LCB0byByZW1vdmUgaW4gdjUuXG5cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3BhY2luZywgJ3VuaXQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIXdhcm5PbmNlIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IHRoZW1lLnNwYWNpbmcudW5pdCB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLicsICdJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdjUuJywgJ1lvdSBjYW4gcmVwbGFjZSBgdGhlbWUuc3BhY2luZy51bml0ICogeWAgd2l0aCBgdGhlbWUuc3BhY2luZyh5KWAuJywgJycsICdZb3UgY2FuIHVzZSB0aGUgYGh0dHBzOi8vZ2l0aHViLmNvbS9tdWktb3JnL21hdGVyaWFsLXVpL3RyZWUvbWFzdGVyL3BhY2thZ2VzL21hdGVyaWFsLXVpLWNvZGVtb2QvUkVBRE1FLm1kI3RoZW1lLXNwYWNpbmctYXBpYCBtaWdyYXRpb24gaGVscGVyIHRvIG1ha2UgdGhlIHByb2Nlc3Mgc21vb3RoZXIuJ10uam9pbignXFxuJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2Fybk9uY2UgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3BhY2luZ0lucHV0O1xuICAgIH1cbiAgfSk7XG4gIHNwYWNpbmcubXVpID0gdHJ1ZTtcbiAgcmV0dXJuIHNwYWNpbmc7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGNyZWF0ZUJyZWFrcG9pbnRzIGZyb20gJy4vY3JlYXRlQnJlYWtwb2ludHMnO1xuaW1wb3J0IGNyZWF0ZU1peGlucyBmcm9tICcuL2NyZWF0ZU1peGlucyc7XG5pbXBvcnQgY3JlYXRlUGFsZXR0ZSBmcm9tICcuL2NyZWF0ZVBhbGV0dGUnO1xuaW1wb3J0IGNyZWF0ZVR5cG9ncmFwaHkgZnJvbSAnLi9jcmVhdGVUeXBvZ3JhcGh5JztcbmltcG9ydCBzaGFkb3dzIGZyb20gJy4vc2hhZG93cyc7XG5pbXBvcnQgc2hhcGUgZnJvbSAnLi9zaGFwZSc7XG5pbXBvcnQgY3JlYXRlU3BhY2luZyBmcm9tICcuL2NyZWF0ZVNwYWNpbmcnO1xuaW1wb3J0IHRyYW5zaXRpb25zIGZyb20gJy4vdHJhbnNpdGlvbnMnO1xuaW1wb3J0IHpJbmRleCBmcm9tICcuL3pJbmRleCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRoZW1lKCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgdmFyIF9vcHRpb25zJGJyZWFrcG9pbnRzID0gb3B0aW9ucy5icmVha3BvaW50cyxcbiAgICAgIGJyZWFrcG9pbnRzSW5wdXQgPSBfb3B0aW9ucyRicmVha3BvaW50cyA9PT0gdm9pZCAwID8ge30gOiBfb3B0aW9ucyRicmVha3BvaW50cyxcbiAgICAgIF9vcHRpb25zJG1peGlucyA9IG9wdGlvbnMubWl4aW5zLFxuICAgICAgbWl4aW5zSW5wdXQgPSBfb3B0aW9ucyRtaXhpbnMgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkbWl4aW5zLFxuICAgICAgX29wdGlvbnMkcGFsZXR0ZSA9IG9wdGlvbnMucGFsZXR0ZSxcbiAgICAgIHBhbGV0dGVJbnB1dCA9IF9vcHRpb25zJHBhbGV0dGUgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkcGFsZXR0ZSxcbiAgICAgIHNwYWNpbmdJbnB1dCA9IG9wdGlvbnMuc3BhY2luZyxcbiAgICAgIF9vcHRpb25zJHR5cG9ncmFwaHkgPSBvcHRpb25zLnR5cG9ncmFwaHksXG4gICAgICB0eXBvZ3JhcGh5SW5wdXQgPSBfb3B0aW9ucyR0eXBvZ3JhcGh5ID09PSB2b2lkIDAgPyB7fSA6IF9vcHRpb25zJHR5cG9ncmFwaHksXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRpb25zLCBbXCJicmVha3BvaW50c1wiLCBcIm1peGluc1wiLCBcInBhbGV0dGVcIiwgXCJzcGFjaW5nXCIsIFwidHlwb2dyYXBoeVwiXSk7XG5cbiAgdmFyIHBhbGV0dGUgPSBjcmVhdGVQYWxldHRlKHBhbGV0dGVJbnB1dCk7XG4gIHZhciBicmVha3BvaW50cyA9IGNyZWF0ZUJyZWFrcG9pbnRzKGJyZWFrcG9pbnRzSW5wdXQpO1xuICB2YXIgc3BhY2luZyA9IGNyZWF0ZVNwYWNpbmcoc3BhY2luZ0lucHV0KTtcbiAgdmFyIG11aVRoZW1lID0gZGVlcG1lcmdlKHtcbiAgICBicmVha3BvaW50czogYnJlYWtwb2ludHMsXG4gICAgZGlyZWN0aW9uOiAnbHRyJyxcbiAgICBtaXhpbnM6IGNyZWF0ZU1peGlucyhicmVha3BvaW50cywgc3BhY2luZywgbWl4aW5zSW5wdXQpLFxuICAgIG92ZXJyaWRlczoge30sXG4gICAgLy8gSW5qZWN0IGN1c3RvbSBzdHlsZXNcbiAgICBwYWxldHRlOiBwYWxldHRlLFxuICAgIHByb3BzOiB7fSxcbiAgICAvLyBQcm92aWRlIGRlZmF1bHQgcHJvcHNcbiAgICBzaGFkb3dzOiBzaGFkb3dzLFxuICAgIHR5cG9ncmFwaHk6IGNyZWF0ZVR5cG9ncmFwaHkocGFsZXR0ZSwgdHlwb2dyYXBoeUlucHV0KSxcbiAgICBzcGFjaW5nOiBzcGFjaW5nLFxuICAgIHNoYXBlOiBzaGFwZSxcbiAgICB0cmFuc2l0aW9uczogdHJhbnNpdGlvbnMsXG4gICAgekluZGV4OiB6SW5kZXhcbiAgfSwgb3RoZXIpO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIG11aVRoZW1lID0gYXJncy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYXJndW1lbnQpIHtcbiAgICByZXR1cm4gZGVlcG1lcmdlKGFjYywgYXJndW1lbnQpO1xuICB9LCBtdWlUaGVtZSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgcHNldWRvQ2xhc3NlcyA9IFsnY2hlY2tlZCcsICdkaXNhYmxlZCcsICdlcnJvcicsICdmb2N1c2VkJywgJ2ZvY3VzVmlzaWJsZScsICdyZXF1aXJlZCcsICdleHBhbmRlZCcsICdzZWxlY3RlZCddO1xuXG4gICAgdmFyIHRyYXZlcnNlID0gZnVuY3Rpb24gdHJhdmVyc2Uobm9kZSwgcGFyZW50S2V5KSB7XG4gICAgICB2YXIgZGVwdGggPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDE7XG4gICAgICB2YXIga2V5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluLCBuby1yZXN0cmljdGVkLXN5bnRheFxuXG4gICAgICBmb3IgKGtleSBpbiBub2RlKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVba2V5XTtcblxuICAgICAgICBpZiAoZGVwdGggPT09IDEpIHtcbiAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ011aScpID09PSAwICYmIGNoaWxkKSB7XG4gICAgICAgICAgICB0cmF2ZXJzZShjaGlsZCwga2V5LCBkZXB0aCArIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwc2V1ZG9DbGFzc2VzLmluZGV4T2Yoa2V5KSAhPT0gLTEgJiYgT2JqZWN0LmtleXMoY2hpbGQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIGBcIi5jb25jYXQocGFyZW50S2V5LCBcImAgY29tcG9uZW50IGluY3JlYXNlcyBcIikgKyBcInRoZSBDU1Mgc3BlY2lmaWNpdHkgb2YgdGhlIGBcIi5jb25jYXQoa2V5LCBcImAgaW50ZXJuYWwgc3RhdGUuXCIpLCAnWW91IGNhbiBub3Qgb3ZlcnJpZGUgaXQgbGlrZSB0aGlzOiAnLCBKU09OLnN0cmluZ2lmeShub2RlLCBudWxsLCAyKSwgJycsICdJbnN0ZWFkLCB5b3UgbmVlZCB0byB1c2UgdGhlICRydWxlTmFtZSBzeW50YXg6JywgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICByb290OiBfZGVmaW5lUHJvcGVydHkoe30sIFwiJiRcIi5jb25jYXQoa2V5KSwgY2hpbGQpXG4gICAgICAgICAgICB9LCBudWxsLCAyKSwgJycsICdodHRwczovL21hdGVyaWFsLXVpLmNvbS9yL3BzZXVkby1jbGFzc2VzLWd1aWRlJ10uam9pbignXFxuJykpO1xuICAgICAgICAgIH0gLy8gUmVtb3ZlIHRoZSBzdHlsZSB0byBwcmV2ZW50IGdsb2JhbCBjb25mbGljdHMuXG5cblxuICAgICAgICAgIG5vZGVba2V5XSA9IHt9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRyYXZlcnNlKG11aVRoZW1lLm92ZXJyaWRlcyk7XG4gIH1cblxuICByZXR1cm4gbXVpVGhlbWU7XG59XG5cbnZhciB3YXJuZWRPbmNlID0gZmFsc2U7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTXVpVGhlbWUoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCF3YXJuZWRPbmNlKSB7XG4gICAgICB3YXJuZWRPbmNlID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogdGhlIGNyZWF0ZU11aVRoZW1lIGZ1bmN0aW9uIHdhcyByZW5hbWVkIHRvIGNyZWF0ZVRoZW1lLicsICcnLCBcIllvdSBzaG91bGQgdXNlIGBpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydgXCJdLmpvaW4oJ1xcbicpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3JlYXRlVGhlbWUuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGhlbWU7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcblxuZnVuY3Rpb24gcm91bmQodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxZTUpIC8gMWU1O1xufVxuXG52YXIgd2FybmVkT25jZSA9IGZhbHNlO1xuXG5mdW5jdGlvbiByb3VuZFdpdGhEZXByZWNhdGlvbldhcm5pbmcodmFsdWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXdhcm5lZE9uY2UpIHtcbiAgICAgIGNvbnNvbGUud2FybihbJ01hdGVyaWFsLVVJOiBUaGUgYHRoZW1lLnR5cG9ncmFwaHkucm91bmRgIGhlbHBlciBpcyBkZXByZWNhdGVkLicsICdIZWFkIHRvIGh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL3IvbWlncmF0aW9uLXY0LyN0aGVtZSBmb3IgYSBtaWdyYXRpb24gcGF0aC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB3YXJuZWRPbmNlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcm91bmQodmFsdWUpO1xufVxuXG52YXIgY2FzZUFsbENhcHMgPSB7XG4gIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG59O1xudmFyIGRlZmF1bHRGb250RmFtaWx5ID0gJ1wiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZic7XG4vKipcbiAqIEBzZWUgQGxpbmt7aHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vdHlwb2dyYXBoeS90aGUtdHlwZS1zeXN0ZW0uaHRtbH1cbiAqIEBzZWUgQGxpbmt7aHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vdHlwb2dyYXBoeS91bmRlcnN0YW5kaW5nLXR5cG9ncmFwaHkuaHRtbH1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUeXBvZ3JhcGh5KHBhbGV0dGUsIHR5cG9ncmFwaHkpIHtcbiAgdmFyIF9yZWYgPSB0eXBlb2YgdHlwb2dyYXBoeSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cG9ncmFwaHkocGFsZXR0ZSkgOiB0eXBvZ3JhcGh5LFxuICAgICAgX3JlZiRmb250RmFtaWx5ID0gX3JlZi5mb250RmFtaWx5LFxuICAgICAgZm9udEZhbWlseSA9IF9yZWYkZm9udEZhbWlseSA9PT0gdm9pZCAwID8gZGVmYXVsdEZvbnRGYW1pbHkgOiBfcmVmJGZvbnRGYW1pbHksXG4gICAgICBfcmVmJGZvbnRTaXplID0gX3JlZi5mb250U2l6ZSxcbiAgICAgIGZvbnRTaXplID0gX3JlZiRmb250U2l6ZSA9PT0gdm9pZCAwID8gMTQgOiBfcmVmJGZvbnRTaXplLFxuICAgICAgX3JlZiRmb250V2VpZ2h0TGlnaHQgPSBfcmVmLmZvbnRXZWlnaHRMaWdodCxcbiAgICAgIGZvbnRXZWlnaHRMaWdodCA9IF9yZWYkZm9udFdlaWdodExpZ2h0ID09PSB2b2lkIDAgPyAzMDAgOiBfcmVmJGZvbnRXZWlnaHRMaWdodCxcbiAgICAgIF9yZWYkZm9udFdlaWdodFJlZ3VsYSA9IF9yZWYuZm9udFdlaWdodFJlZ3VsYXIsXG4gICAgICBmb250V2VpZ2h0UmVndWxhciA9IF9yZWYkZm9udFdlaWdodFJlZ3VsYSA9PT0gdm9pZCAwID8gNDAwIDogX3JlZiRmb250V2VpZ2h0UmVndWxhLFxuICAgICAgX3JlZiRmb250V2VpZ2h0TWVkaXVtID0gX3JlZi5mb250V2VpZ2h0TWVkaXVtLFxuICAgICAgZm9udFdlaWdodE1lZGl1bSA9IF9yZWYkZm9udFdlaWdodE1lZGl1bSA9PT0gdm9pZCAwID8gNTAwIDogX3JlZiRmb250V2VpZ2h0TWVkaXVtLFxuICAgICAgX3JlZiRmb250V2VpZ2h0Qm9sZCA9IF9yZWYuZm9udFdlaWdodEJvbGQsXG4gICAgICBmb250V2VpZ2h0Qm9sZCA9IF9yZWYkZm9udFdlaWdodEJvbGQgPT09IHZvaWQgMCA/IDcwMCA6IF9yZWYkZm9udFdlaWdodEJvbGQsXG4gICAgICBfcmVmJGh0bWxGb250U2l6ZSA9IF9yZWYuaHRtbEZvbnRTaXplLFxuICAgICAgaHRtbEZvbnRTaXplID0gX3JlZiRodG1sRm9udFNpemUgPT09IHZvaWQgMCA/IDE2IDogX3JlZiRodG1sRm9udFNpemUsXG4gICAgICBhbGxWYXJpYW50cyA9IF9yZWYuYWxsVmFyaWFudHMsXG4gICAgICBweFRvUmVtMiA9IF9yZWYucHhUb1JlbSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImZvbnRGYW1pbHlcIiwgXCJmb250U2l6ZVwiLCBcImZvbnRXZWlnaHRMaWdodFwiLCBcImZvbnRXZWlnaHRSZWd1bGFyXCIsIFwiZm9udFdlaWdodE1lZGl1bVwiLCBcImZvbnRXZWlnaHRCb2xkXCIsIFwiaHRtbEZvbnRTaXplXCIsIFwiYWxsVmFyaWFudHNcIiwgXCJweFRvUmVtXCJdKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgZm9udFNpemUgIT09ICdudW1iZXInKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogYGZvbnRTaXplYCBpcyByZXF1aXJlZCB0byBiZSBhIG51bWJlci4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGh0bWxGb250U2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBgaHRtbEZvbnRTaXplYCBpcyByZXF1aXJlZCB0byBiZSBhIG51bWJlci4nKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29lZiA9IGZvbnRTaXplIC8gMTQ7XG5cbiAgdmFyIHB4VG9SZW0gPSBweFRvUmVtMiB8fCBmdW5jdGlvbiAoc2l6ZSkge1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChzaXplIC8gaHRtbEZvbnRTaXplICogY29lZiwgXCJyZW1cIik7XG4gIH07XG5cbiAgdmFyIGJ1aWxkVmFyaWFudCA9IGZ1bmN0aW9uIGJ1aWxkVmFyaWFudChmb250V2VpZ2h0LCBzaXplLCBsaW5lSGVpZ2h0LCBsZXR0ZXJTcGFjaW5nLCBjYXNpbmcpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgZm9udEZhbWlseTogZm9udEZhbWlseSxcbiAgICAgIGZvbnRXZWlnaHQ6IGZvbnRXZWlnaHQsXG4gICAgICBmb250U2l6ZTogcHhUb1JlbShzaXplKSxcbiAgICAgIC8vIFVuaXRsZXNzIGZvbGxvd2luZyBodHRwczovL21leWVyd2ViLmNvbS9lcmljL3Rob3VnaHRzLzIwMDYvMDIvMDgvdW5pdGxlc3MtbGluZS1oZWlnaHRzL1xuICAgICAgbGluZUhlaWdodDogbGluZUhlaWdodFxuICAgIH0sIGZvbnRGYW1pbHkgPT09IGRlZmF1bHRGb250RmFtaWx5ID8ge1xuICAgICAgbGV0dGVyU3BhY2luZzogXCJcIi5jb25jYXQocm91bmQobGV0dGVyU3BhY2luZyAvIHNpemUpLCBcImVtXCIpXG4gICAgfSA6IHt9LCBjYXNpbmcsIGFsbFZhcmlhbnRzKTtcbiAgfTtcblxuICB2YXIgdmFyaWFudHMgPSB7XG4gICAgaDE6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TGlnaHQsIDk2LCAxLjE2NywgLTEuNSksXG4gICAgaDI6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TGlnaHQsIDYwLCAxLjIsIC0wLjUpLFxuICAgIGgzOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDQ4LCAxLjE2NywgMCksXG4gICAgaDQ6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMzQsIDEuMjM1LCAwLjI1KSxcbiAgICBoNTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAyNCwgMS4zMzQsIDApLFxuICAgIGg2OiBidWlsZFZhcmlhbnQoZm9udFdlaWdodE1lZGl1bSwgMjAsIDEuNiwgMC4xNSksXG4gICAgc3VidGl0bGUxOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDE2LCAxLjc1LCAwLjE1KSxcbiAgICBzdWJ0aXRsZTI6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TWVkaXVtLCAxNCwgMS41NywgMC4xKSxcbiAgICBib2R5MTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxNiwgMS41LCAwLjE1KSxcbiAgICBib2R5MjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxNCwgMS40MywgMC4xNSksXG4gICAgYnV0dG9uOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodE1lZGl1bSwgMTQsIDEuNzUsIDAuNCwgY2FzZUFsbENhcHMpLFxuICAgIGNhcHRpb246IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTIsIDEuNjYsIDAuNCksXG4gICAgb3ZlcmxpbmU6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTIsIDIuNjYsIDEsIGNhc2VBbGxDYXBzKVxuICB9O1xuICByZXR1cm4gZGVlcG1lcmdlKF9leHRlbmRzKHtcbiAgICBodG1sRm9udFNpemU6IGh0bWxGb250U2l6ZSxcbiAgICBweFRvUmVtOiBweFRvUmVtLFxuICAgIHJvdW5kOiByb3VuZFdpdGhEZXByZWNhdGlvbldhcm5pbmcsXG4gICAgLy8gVE9ETyB2NTogcmVtb3ZlXG4gICAgZm9udEZhbWlseTogZm9udEZhbWlseSxcbiAgICBmb250U2l6ZTogZm9udFNpemUsXG4gICAgZm9udFdlaWdodExpZ2h0OiBmb250V2VpZ2h0TGlnaHQsXG4gICAgZm9udFdlaWdodFJlZ3VsYXI6IGZvbnRXZWlnaHRSZWd1bGFyLFxuICAgIGZvbnRXZWlnaHRNZWRpdW06IGZvbnRXZWlnaHRNZWRpdW0sXG4gICAgZm9udFdlaWdodEJvbGQ6IGZvbnRXZWlnaHRCb2xkXG4gIH0sIHZhcmlhbnRzKSwgb3RoZXIsIHtcbiAgICBjbG9uZTogZmFsc2UgLy8gTm8gbmVlZCB0byBjbG9uZSBkZWVwXG5cbiAgfSk7XG59IiwiaW1wb3J0IGNyZWF0ZVRoZW1lIGZyb20gJy4vY3JlYXRlVGhlbWUnO1xudmFyIGRlZmF1bHRUaGVtZSA9IGNyZWF0ZVRoZW1lKCk7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0VGhlbWU7IiwidmFyIHNoYWRvd0tleVVtYnJhT3BhY2l0eSA9IDAuMjtcbnZhciBzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkgPSAwLjE0O1xudmFyIHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5ID0gMC4xMjtcblxuZnVuY3Rpb24gY3JlYXRlU2hhZG93KCkge1xuICByZXR1cm4gW1wiXCIuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxXSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1syXSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMyA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1szXSwgXCJweCByZ2JhKDAsMCwwLFwiKS5jb25jYXQoc2hhZG93S2V5VW1icmFPcGFjaXR5LCBcIilcIiksIFwiXCIuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gNCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s0XSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gNSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s1XSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gNiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s2XSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gNyA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s3XSwgXCJweCByZ2JhKDAsMCwwLFwiKS5jb25jYXQoc2hhZG93S2V5UGVudW1icmFPcGFjaXR5LCBcIilcIiksIFwiXCIuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gOCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s4XSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gOSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s5XSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMTAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMTBdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSAxMSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxMV0sIFwicHggcmdiYSgwLDAsMCxcIikuY29uY2F0KHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5LCBcIilcIildLmpvaW4oJywnKTtcbn0gLy8gVmFsdWVzIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9iZTg3NDdmOTQ1NzQ2NjljYjVlN2FkZDFhN2M1NGZhNDFhODljZWM3L3BhY2thZ2VzL21kYy1lbGV2YXRpb24vX3ZhcmlhYmxlcy5zY3NzXG5cblxudmFyIHNoYWRvd3MgPSBbJ25vbmUnLCBjcmVhdGVTaGFkb3coMCwgMiwgMSwgLTEsIDAsIDEsIDEsIDAsIDAsIDEsIDMsIDApLCBjcmVhdGVTaGFkb3coMCwgMywgMSwgLTIsIDAsIDIsIDIsIDAsIDAsIDEsIDUsIDApLCBjcmVhdGVTaGFkb3coMCwgMywgMywgLTIsIDAsIDMsIDQsIDAsIDAsIDEsIDgsIDApLCBjcmVhdGVTaGFkb3coMCwgMiwgNCwgLTEsIDAsIDQsIDUsIDAsIDAsIDEsIDEwLCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDUsIC0xLCAwLCA1LCA4LCAwLCAwLCAxLCAxNCwgMCksIGNyZWF0ZVNoYWRvdygwLCAzLCA1LCAtMSwgMCwgNiwgMTAsIDAsIDAsIDEsIDE4LCAwKSwgY3JlYXRlU2hhZG93KDAsIDQsIDUsIC0yLCAwLCA3LCAxMCwgMSwgMCwgMiwgMTYsIDEpLCBjcmVhdGVTaGFkb3coMCwgNSwgNSwgLTMsIDAsIDgsIDEwLCAxLCAwLCAzLCAxNCwgMiksIGNyZWF0ZVNoYWRvdygwLCA1LCA2LCAtMywgMCwgOSwgMTIsIDEsIDAsIDMsIDE2LCAyKSwgY3JlYXRlU2hhZG93KDAsIDYsIDYsIC0zLCAwLCAxMCwgMTQsIDEsIDAsIDQsIDE4LCAzKSwgY3JlYXRlU2hhZG93KDAsIDYsIDcsIC00LCAwLCAxMSwgMTUsIDEsIDAsIDQsIDIwLCAzKSwgY3JlYXRlU2hhZG93KDAsIDcsIDgsIC00LCAwLCAxMiwgMTcsIDIsIDAsIDUsIDIyLCA0KSwgY3JlYXRlU2hhZG93KDAsIDcsIDgsIC00LCAwLCAxMywgMTksIDIsIDAsIDUsIDI0LCA0KSwgY3JlYXRlU2hhZG93KDAsIDcsIDksIC00LCAwLCAxNCwgMjEsIDIsIDAsIDUsIDI2LCA0KSwgY3JlYXRlU2hhZG93KDAsIDgsIDksIC01LCAwLCAxNSwgMjIsIDIsIDAsIDYsIDI4LCA1KSwgY3JlYXRlU2hhZG93KDAsIDgsIDEwLCAtNSwgMCwgMTYsIDI0LCAyLCAwLCA2LCAzMCwgNSksIGNyZWF0ZVNoYWRvdygwLCA4LCAxMSwgLTUsIDAsIDE3LCAyNiwgMiwgMCwgNiwgMzIsIDUpLCBjcmVhdGVTaGFkb3coMCwgOSwgMTEsIC01LCAwLCAxOCwgMjgsIDIsIDAsIDcsIDM0LCA2KSwgY3JlYXRlU2hhZG93KDAsIDksIDEyLCAtNiwgMCwgMTksIDI5LCAyLCAwLCA3LCAzNiwgNiksIGNyZWF0ZVNoYWRvdygwLCAxMCwgMTMsIC02LCAwLCAyMCwgMzEsIDMsIDAsIDgsIDM4LCA3KSwgY3JlYXRlU2hhZG93KDAsIDEwLCAxMywgLTYsIDAsIDIxLCAzMywgMywgMCwgOCwgNDAsIDcpLCBjcmVhdGVTaGFkb3coMCwgMTAsIDE0LCAtNiwgMCwgMjIsIDM1LCAzLCAwLCA4LCA0MiwgNyksIGNyZWF0ZVNoYWRvdygwLCAxMSwgMTQsIC03LCAwLCAyMywgMzYsIDMsIDAsIDksIDQ0LCA4KSwgY3JlYXRlU2hhZG93KDAsIDExLCAxNSwgLTcsIDAsIDI0LCAzOCwgMywgMCwgOSwgNDYsIDgpXTtcbmV4cG9ydCBkZWZhdWx0IHNoYWRvd3M7IiwidmFyIHNoYXBlID0ge1xuICBib3JkZXJSYWRpdXM6IDRcbn07XG5leHBvcnQgZGVmYXVsdCBzaGFwZTsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuLy8gRm9sbG93IGh0dHBzOi8vbWF0ZXJpYWwuZ29vZ2xlLmNvbS9tb3Rpb24vZHVyYXRpb24tZWFzaW5nLmh0bWwjZHVyYXRpb24tZWFzaW5nLW5hdHVyYWwtZWFzaW5nLWN1cnZlc1xuLy8gdG8gbGVhcm4gdGhlIGNvbnRleHQgaW4gd2hpY2ggZWFjaCBlYXNpbmcgc2hvdWxkIGJlIHVzZWQuXG5leHBvcnQgdmFyIGVhc2luZyA9IHtcbiAgLy8gVGhpcyBpcyB0aGUgbW9zdCBjb21tb24gZWFzaW5nIGN1cnZlLlxuICBlYXNlSW5PdXQ6ICdjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpJyxcbiAgLy8gT2JqZWN0cyBlbnRlciB0aGUgc2NyZWVuIGF0IGZ1bGwgdmVsb2NpdHkgZnJvbSBvZmYtc2NyZWVuIGFuZFxuICAvLyBzbG93bHkgZGVjZWxlcmF0ZSB0byBhIHJlc3RpbmcgcG9pbnQuXG4gIGVhc2VPdXQ6ICdjdWJpYy1iZXppZXIoMC4wLCAwLCAwLjIsIDEpJyxcbiAgLy8gT2JqZWN0cyBsZWF2ZSB0aGUgc2NyZWVuIGF0IGZ1bGwgdmVsb2NpdHkuIFRoZXkgZG8gbm90IGRlY2VsZXJhdGUgd2hlbiBvZmYtc2NyZWVuLlxuICBlYXNlSW46ICdjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKScsXG4gIC8vIFRoZSBzaGFycCBjdXJ2ZSBpcyB1c2VkIGJ5IG9iamVjdHMgdGhhdCBtYXkgcmV0dXJuIHRvIHRoZSBzY3JlZW4gYXQgYW55IHRpbWUuXG4gIHNoYXJwOiAnY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSdcbn07IC8vIEZvbGxvdyBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvbW90aW9uL2R1cmF0aW9uLWVhc2luZy5odG1sI2R1cmF0aW9uLWVhc2luZy1jb21tb24tZHVyYXRpb25zXG4vLyB0byBsZWFybiB3aGVuIHVzZSB3aGF0IHRpbWluZ1xuXG5leHBvcnQgdmFyIGR1cmF0aW9uID0ge1xuICBzaG9ydGVzdDogMTUwLFxuICBzaG9ydGVyOiAyMDAsXG4gIHNob3J0OiAyNTAsXG4gIC8vIG1vc3QgYmFzaWMgcmVjb21tZW5kZWQgdGltaW5nXG4gIHN0YW5kYXJkOiAzMDAsXG4gIC8vIHRoaXMgaXMgdG8gYmUgdXNlZCBpbiBjb21wbGV4IGFuaW1hdGlvbnNcbiAgY29tcGxleDogMzc1LFxuICAvLyByZWNvbW1lbmRlZCB3aGVuIHNvbWV0aGluZyBpcyBlbnRlcmluZyBzY3JlZW5cbiAgZW50ZXJpbmdTY3JlZW46IDIyNSxcbiAgLy8gcmVjb21tZW5kZWQgd2hlbiBzb21ldGhpbmcgaXMgbGVhdmluZyBzY3JlZW5cbiAgbGVhdmluZ1NjcmVlbjogMTk1XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRNcyhtaWxsaXNlY29uZHMpIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KE1hdGgucm91bmQobWlsbGlzZWNvbmRzKSwgXCJtc1wiKTtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IHByb3BzXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbS5wcm9wXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW0uZHVyYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbS5lYXNpbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbS5kZWxheVxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBlYXNpbmc6IGVhc2luZyxcbiAgZHVyYXRpb246IGR1cmF0aW9uLFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFsnYWxsJ107XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgdmFyIF9vcHRpb25zJGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbixcbiAgICAgICAgZHVyYXRpb25PcHRpb24gPSBfb3B0aW9ucyRkdXJhdGlvbiA9PT0gdm9pZCAwID8gZHVyYXRpb24uc3RhbmRhcmQgOiBfb3B0aW9ucyRkdXJhdGlvbixcbiAgICAgICAgX29wdGlvbnMkZWFzaW5nID0gb3B0aW9ucy5lYXNpbmcsXG4gICAgICAgIGVhc2luZ09wdGlvbiA9IF9vcHRpb25zJGVhc2luZyA9PT0gdm9pZCAwID8gZWFzaW5nLmVhc2VJbk91dCA6IF9vcHRpb25zJGVhc2luZyxcbiAgICAgICAgX29wdGlvbnMkZGVsYXkgPSBvcHRpb25zLmRlbGF5LFxuICAgICAgICBkZWxheSA9IF9vcHRpb25zJGRlbGF5ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkZGVsYXksXG4gICAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdGlvbnMsIFtcImR1cmF0aW9uXCIsIFwiZWFzaW5nXCIsIFwiZGVsYXlcIl0pO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBpc1N0cmluZyA9IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICAgICAgfTtcblxuICAgICAgdmFyIGlzTnVtYmVyID0gZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoIWlzU3RyaW5nKHByb3BzKSAmJiAhQXJyYXkuaXNBcnJheShwcm9wcykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IEFyZ3VtZW50IFwicHJvcHNcIiBtdXN0IGJlIGEgc3RyaW5nIG9yIEFycmF5LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTnVtYmVyKGR1cmF0aW9uT3B0aW9uKSAmJiAhaXNTdHJpbmcoZHVyYXRpb25PcHRpb24pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogQXJndW1lbnQgXFxcImR1cmF0aW9uXFxcIiBtdXN0IGJlIGEgbnVtYmVyIG9yIGEgc3RyaW5nIGJ1dCBmb3VuZCBcIi5jb25jYXQoZHVyYXRpb25PcHRpb24sIFwiLlwiKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNTdHJpbmcoZWFzaW5nT3B0aW9uKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogQXJndW1lbnQgXCJlYXNpbmdcIiBtdXN0IGJlIGEgc3RyaW5nLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTnVtYmVyKGRlbGF5KSAmJiAhaXNTdHJpbmcoZGVsYXkpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBBcmd1bWVudCBcImRlbGF5XCIgbXVzdCBiZSBhIG51bWJlciBvciBhIHN0cmluZy4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKG90aGVyKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBVbnJlY29nbml6ZWQgYXJndW1lbnQocykgW1wiLmNvbmNhdChPYmplY3Qua2V5cyhvdGhlcikuam9pbignLCcpLCBcIl0uXCIpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKEFycmF5LmlzQXJyYXkocHJvcHMpID8gcHJvcHMgOiBbcHJvcHNdKS5tYXAoZnVuY3Rpb24gKGFuaW1hdGVkUHJvcCkge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGFuaW1hdGVkUHJvcCwgXCIgXCIpLmNvbmNhdCh0eXBlb2YgZHVyYXRpb25PcHRpb24gPT09ICdzdHJpbmcnID8gZHVyYXRpb25PcHRpb24gOiBmb3JtYXRNcyhkdXJhdGlvbk9wdGlvbiksIFwiIFwiKS5jb25jYXQoZWFzaW5nT3B0aW9uLCBcIiBcIikuY29uY2F0KHR5cGVvZiBkZWxheSA9PT0gJ3N0cmluZycgPyBkZWxheSA6IGZvcm1hdE1zKGRlbGF5KSk7XG4gICAgfSkuam9pbignLCcpO1xuICB9LFxuICBnZXRBdXRvSGVpZ2h0RHVyYXRpb246IGZ1bmN0aW9uIGdldEF1dG9IZWlnaHREdXJhdGlvbihoZWlnaHQpIHtcbiAgICBpZiAoIWhlaWdodCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdmFyIGNvbnN0YW50ID0gaGVpZ2h0IC8gMzY7IC8vIGh0dHBzOi8vd3d3LndvbGZyYW1hbHBoYS5jb20vaW5wdXQvP2k9KDQrJTJCKzE1KyorKHgrJTJGKzM2KykrKiorMC4yNSslMkIrKHgrJTJGKzM2KSslMkYrNSkrKisxMFxuXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKDQgKyAxNSAqIE1hdGgucG93KGNvbnN0YW50LCAwLjI1KSArIGNvbnN0YW50IC8gNSkgKiAxMCk7XG4gIH1cbn07IiwiaW1wb3J0IHsgdXNlVGhlbWUgYXMgdXNlVGhlbWVXaXRob3V0RGVmYXVsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVGhlbWUoKSB7XG4gIHZhciB0aGVtZSA9IHVzZVRoZW1lV2l0aG91dERlZmF1bHQoKSB8fCBkZWZhdWx0VGhlbWU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKHRoZW1lKTtcbiAgfVxuXG4gIHJldHVybiB0aGVtZTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMgYXMgd2l0aFN0eWxlc1dpdGhvdXREZWZhdWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcblxuZnVuY3Rpb24gd2l0aFN0eWxlcyhzdHlsZXNPckNyZWF0b3IsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHdpdGhTdHlsZXNXaXRob3V0RGVmYXVsdChzdHlsZXNPckNyZWF0b3IsIF9leHRlbmRzKHtcbiAgICBkZWZhdWx0VGhlbWU6IGRlZmF1bHRUaGVtZVxuICB9LCBvcHRpb25zKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXM7IiwiLy8gV2UgbmVlZCB0byBjZW50cmFsaXplIHRoZSB6SW5kZXggZGVmaW5pdGlvbnMgYXMgdGhleSB3b3JrXG4vLyBsaWtlIGdsb2JhbCB2YWx1ZXMgaW4gdGhlIGJyb3dzZXIuXG52YXIgekluZGV4ID0ge1xuICBtb2JpbGVTdGVwcGVyOiAxMDAwLFxuICBzcGVlZERpYWw6IDEwNTAsXG4gIGFwcEJhcjogMTEwMCxcbiAgZHJhd2VyOiAxMjAwLFxuICBtb2RhbDogMTMwMCxcbiAgc25hY2tiYXI6IDE0MDAsXG4gIHRvb2x0aXA6IDE1MDBcbn07XG5leHBvcnQgZGVmYXVsdCB6SW5kZXg7IiwiZXhwb3J0IHZhciByZWZsb3cgPSBmdW5jdGlvbiByZWZsb3cobm9kZSkge1xuICByZXR1cm4gbm9kZS5zY3JvbGxUb3A7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zaXRpb25Qcm9wcyhwcm9wcywgb3B0aW9ucykge1xuICB2YXIgdGltZW91dCA9IHByb3BzLnRpbWVvdXQsXG4gICAgICBfcHJvcHMkc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIHN0eWxlID0gX3Byb3BzJHN0eWxlID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRzdHlsZTtcbiAgcmV0dXJuIHtcbiAgICBkdXJhdGlvbjogc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uIHx8IHR5cGVvZiB0aW1lb3V0ID09PSAnbnVtYmVyJyA/IHRpbWVvdXQgOiB0aW1lb3V0W29wdGlvbnMubW9kZV0gfHwgMCxcbiAgICBkZWxheTogc3R5bGUudHJhbnNpdGlvbkRlbGF5XG4gIH07XG59IiwiaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG4vLyBJdCBzaG91bGQgdG8gYmUgbm90ZWQgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzbid0IGVxdWl2YWxlbnQgdG8gYHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplYC5cbi8vXG4vLyBBIHN0cmljdCBjYXBpdGFsaXphdGlvbiBzaG91bGQgdXBwZXJjYXNlIHRoZSBmaXJzdCBsZXR0ZXIgb2YgZWFjaCB3b3JkIGEgdGhlIHNlbnRlbmNlLlxuLy8gV2Ugb25seSBoYW5kbGUgdGhlIGZpcnN0IHdvcmQuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogY2FwaXRhbGl6ZShzdHJpbmcpIGV4cGVjdHMgYSBzdHJpbmcgYXJndW1lbnQuXCIgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDcpKTtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59IiwiLyoqXG4gKiBTYWZlIGNoYWluZWQgZnVuY3Rpb25cbiAqXG4gKiBXaWxsIG9ubHkgY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIGlmIG5lZWRlZCxcbiAqIG90aGVyd2lzZSB3aWxsIHBhc3MgYmFjayBleGlzdGluZyBmdW5jdGlvbnMgb3IgbnVsbC5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jdGlvbnMgdG8gY2hhaW5cbiAqIEByZXR1cm5zIHtmdW5jdGlvbnxudWxsfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZnVuYykge1xuICAgIGlmIChmdW5jID09IG51bGwpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogSW52YWxpZCBBcmd1bWVudCBUeXBlLCBtdXN0IG9ubHkgcHJvdmlkZSBmdW5jdGlvbnMsIHVuZGVmaW5lZCwgb3IgbnVsbC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgYWNjLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICB9LCBmdW5jdGlvbiAoKSB7fSk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vU3ZnSWNvbic7XG4vKipcbiAqIFByaXZhdGUgbW9kdWxlIHJlc2VydmVkIGZvciBAbWF0ZXJpYWwtdWkveCBwYWNrYWdlcy5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTdmdJY29uKHBhdGgsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciBDb21wb25lbnQgPSBmdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIHJlZikge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTdmdJY29uLCBfZXh0ZW5kcyh7XG4gICAgICByZWY6IHJlZlxuICAgIH0sIHByb3BzKSwgcGF0aCk7XG4gIH07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBOZWVkIHRvIHNldCBgZGlzcGxheU5hbWVgIG9uIHRoZSBpbm5lciBjb21wb25lbnQgZm9yIFJlYWN0Lm1lbW8uXG4gICAgLy8gUmVhY3QgcHJpb3IgdG8gMTYuMTQgaWdub3JlcyBgZGlzcGxheU5hbWVgIG9uIHRoZSB3cmFwcGVyLlxuICAgIENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IFwiXCIuY29uY2F0KGRpc3BsYXlOYW1lLCBcIkljb25cIik7XG4gIH1cblxuICBDb21wb25lbnQubXVpTmFtZSA9IFN2Z0ljb24ubXVpTmFtZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5tZW1vKCAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihDb21wb25lbnQpKTtcbn0iLCIvLyBDb3JyZXNwb25kcyB0byAxMCBmcmFtZXMgYXQgNjAgSHouXG4vLyBBIGZldyBieXRlcyBwYXlsb2FkIG92ZXJoZWFkIHdoZW4gbG9kYXNoL2RlYm91bmNlIGlzIH4zIGtCIGFuZCBkZWJvdW5jZSB+MzAwIEIuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jKSB7XG4gIHZhciB3YWl0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxNjY7XG4gIHZhciB0aW1lb3V0O1xuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtdGhpc1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uIGxhdGVyKCkge1xuICAgICAgZnVuYy5hcHBseSh0aGF0LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgfVxuXG4gIGRlYm91bmNlZC5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gIH07XG5cbiAgcmV0dXJuIGRlYm91bmNlZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXByZWNhdGVkUHJvcFR5cGUodmFsaWRhdG9yLCByZWFzb24pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgdmFyIGNvbXBvbmVudE5hbWVTYWZlID0gY29tcG9uZW50TmFtZSB8fCAnPDxhbm9ueW1vdXM+Pic7XG4gICAgdmFyIHByb3BGdWxsTmFtZVNhZmUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICBpZiAodHlwZW9mIHByb3BzW3Byb3BOYW1lXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJUaGUgXCIuY29uY2F0KGxvY2F0aW9uLCBcIiBgXCIpLmNvbmNhdChwcm9wRnVsbE5hbWVTYWZlLCBcImAgb2YgXCIpICsgXCJgXCIuY29uY2F0KGNvbXBvbmVudE5hbWVTYWZlLCBcImAgaXMgZGVwcmVjYXRlZC4gXCIpLmNvbmNhdChyZWFzb24pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn0iLCIvLyBBIGNoYW5nZSBvZiB0aGUgYnJvd3NlciB6b29tIGNoYW5nZSB0aGUgc2Nyb2xsYmFyIHNpemUuXG4vLyBDcmVkaXQgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvM2ZmZTNhNWQ4MmY2ZjU2MWI4MmZmNzhkODJiMzJhN2QxNGFlZDU1OC9qcy9zcmMvbW9kYWwuanMjTDUxMi1MNTE5XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxiYXJTaXplKCkge1xuICB2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNjcm9sbERpdi5zdHlsZS53aWR0aCA9ICc5OXB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLmhlaWdodCA9ICc5OXB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgc2Nyb2xsRGl2LnN0eWxlLnRvcCA9ICctOTk5OXB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgdmFyIHNjcm9sbGJhclNpemUgPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgcmV0dXJuIHNjcm9sbGJhclNpemU7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNNdWlFbGVtZW50KGVsZW1lbnQsIG11aU5hbWVzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkgJiYgbXVpTmFtZXMuaW5kZXhPZihlbGVtZW50LnR5cGUubXVpTmFtZSkgIT09IC0xO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG93bmVyRG9jdW1lbnQobm9kZSkge1xuICByZXR1cm4gbm9kZSAmJiBub2RlLm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQ7XG59IiwiaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnLi9vd25lckRvY3VtZW50JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG93bmVyV2luZG93KG5vZGUpIHtcbiAgdmFyIGRvYyA9IG93bmVyRG9jdW1lbnQobm9kZSk7XG4gIHJldHVybiBkb2MuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xufSIsIi8vIFRPRE8gdjU6IGNvbnNpZGVyIHRvIG1ha2UgaXQgcHJpdmF0ZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0UmVmKHJlZiwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZWYodmFsdWUpO1xuICB9IGVsc2UgaWYgKHJlZikge1xuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rcywgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDb250cm9sbGVkKF9yZWYpIHtcbiAgdmFyIGNvbnRyb2xsZWQgPSBfcmVmLmNvbnRyb2xsZWQsXG4gICAgICBkZWZhdWx0UHJvcCA9IF9yZWYuZGVmYXVsdCxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBfcmVmJHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIHN0YXRlID0gX3JlZiRzdGF0ZSA9PT0gdm9pZCAwID8gJ3ZhbHVlJyA6IF9yZWYkc3RhdGU7XG5cbiAgdmFyIF9SZWFjdCR1c2VSZWYgPSBSZWFjdC51c2VSZWYoY29udHJvbGxlZCAhPT0gdW5kZWZpbmVkKSxcbiAgICAgIGlzQ29udHJvbGxlZCA9IF9SZWFjdCR1c2VSZWYuY3VycmVudDtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdFByb3ApLFxuICAgICAgdmFsdWVTdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldFZhbHVlID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciB2YWx1ZSA9IGlzQ29udHJvbGxlZCA/IGNvbnRyb2xsZWQgOiB2YWx1ZVN0YXRlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc0NvbnRyb2xsZWQgIT09IChjb250cm9sbGVkICE9PSB1bmRlZmluZWQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoW1wiTWF0ZXJpYWwtVUk6IEEgY29tcG9uZW50IGlzIGNoYW5naW5nIHRoZSBcIi5jb25jYXQoaXNDb250cm9sbGVkID8gJycgOiAndW4nLCBcImNvbnRyb2xsZWQgXCIpLmNvbmNhdChzdGF0ZSwgXCIgc3RhdGUgb2YgXCIpLmNvbmNhdChuYW1lLCBcIiB0byBiZSBcIikuY29uY2F0KGlzQ29udHJvbGxlZCA/ICd1bicgOiAnJywgXCJjb250cm9sbGVkLlwiKSwgJ0VsZW1lbnRzIHNob3VsZCBub3Qgc3dpdGNoIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWQgKG9yIHZpY2UgdmVyc2EpLicsIFwiRGVjaWRlIGJldHdlZW4gdXNpbmcgYSBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCBcIi5jb25jYXQobmFtZSwgXCIgXCIpICsgJ2VsZW1lbnQgZm9yIHRoZSBsaWZldGltZSBvZiB0aGUgY29tcG9uZW50LicsIFwiVGhlIG5hdHVyZSBvZiB0aGUgc3RhdGUgaXMgZGV0ZXJtaW5lZCBkdXJpbmcgdGhlIGZpcnN0IHJlbmRlciwgaXQncyBjb25zaWRlcmVkIGNvbnRyb2xsZWQgaWYgdGhlIHZhbHVlIGlzIG5vdCBgdW5kZWZpbmVkYC5cIiwgJ01vcmUgaW5mbzogaHR0cHM6Ly9mYi5tZS9yZWFjdC1jb250cm9sbGVkLWNvbXBvbmVudHMnXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfSwgW2NvbnRyb2xsZWRdKTtcblxuICAgIHZhciBfUmVhY3QkdXNlUmVmMiA9IFJlYWN0LnVzZVJlZihkZWZhdWx0UHJvcCksXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9IF9SZWFjdCR1c2VSZWYyLmN1cnJlbnQ7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFpc0NvbnRyb2xsZWQgJiYgZGVmYXVsdFZhbHVlICE9PSBkZWZhdWx0UHJvcCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBBIGNvbXBvbmVudCBpcyBjaGFuZ2luZyB0aGUgZGVmYXVsdCBcIi5jb25jYXQoc3RhdGUsIFwiIHN0YXRlIG9mIGFuIHVuY29udHJvbGxlZCBcIikuY29uY2F0KG5hbWUsIFwiIGFmdGVyIGJlaW5nIGluaXRpYWxpemVkLiBcIikgKyBcIlRvIHN1cHByZXNzIHRoaXMgd2FybmluZyBvcHQgdG8gdXNlIGEgY29udHJvbGxlZCBcIi5jb25jYXQobmFtZSwgXCIuXCIpXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfSwgW0pTT04uc3RyaW5naWZ5KGRlZmF1bHRQcm9wKV0pO1xuICB9XG5cbiAgdmFyIHNldFZhbHVlSWZVbmNvbnRyb2xsZWQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICBpZiAoIWlzQ29udHJvbGxlZCkge1xuICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4gW3ZhbHVlLCBzZXRWYWx1ZUlmVW5jb250cm9sbGVkXTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgdXNlRW5oYW5jZWRFZmZlY3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFJlYWN0LnVzZUxheW91dEVmZmVjdCA6IFJlYWN0LnVzZUVmZmVjdDtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xNDA5OSNpc3N1ZWNvbW1lbnQtNDQwMDEzODkyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VFdmVudENhbGxiYWNrKGZuKSB7XG4gIHZhciByZWYgPSBSZWFjdC51c2VSZWYoZm4pO1xuICB1c2VFbmhhbmNlZEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmVmLmN1cnJlbnQgPSBmbjtcbiAgfSk7XG4gIHJldHVybiBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICgwLCByZWYuY3VycmVudCkuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICB9LCBbXSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHNldFJlZiBmcm9tICcuL3NldFJlZic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JrUmVmKHJlZkEsIHJlZkIpIHtcbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gaWYgdGhlIHJlZiBwcm9wcyBjaGFuZ2UgYW5kIGFyZSBkZWZpbmVkLlxuICAgKiBUaGlzIG1lYW5zIHJlYWN0IHdpbGwgY2FsbCB0aGUgb2xkIGZvcmtSZWYgd2l0aCBgbnVsbGAgYW5kIHRoZSBuZXcgZm9ya1JlZlxuICAgKiB3aXRoIHRoZSByZWYuIENsZWFudXAgbmF0dXJhbGx5IGVtZXJnZXMgZnJvbSB0aGlzIGJlaGF2aW9yXG4gICAqL1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJlZkEgPT0gbnVsbCAmJiByZWZCID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAocmVmVmFsdWUpIHtcbiAgICAgIHNldFJlZihyZWZBLCByZWZWYWx1ZSk7XG4gICAgICBzZXRSZWYocmVmQiwgcmVmVmFsdWUpO1xuICAgIH07XG4gIH0sIFtyZWZBLCByZWZCXSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0UGFnZSgpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICAgICAgICA8c3R5bGU+e2BcbiAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1nLndhbGxwYXBlcnNhZmFyaS5jb20vZGVza3RvcC8xNTM2Lzg2NC84Ny82OS9RNFJ1VUIuanBnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8aDE+U2lnbiBVcDwvaDE+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiYzljO1xuICAgICAgICAgICAgICAgIGZvbnQ6IDFlbSBIZWx2ZXRpY2E7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICNjb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4NDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLndoeXNpZ24ge1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0ODBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0N3B4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5zaWdudXAge1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBbdHlwZT10ZXh0XSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDVweDsgIFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsLjQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBbdHlwZT1zdWJtaXRdIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1M0NBQ0U7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgW3R5cGU9J3RleHQnXTpmb2N1cyB7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICM1M0NBQ0U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwuNik7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDUwcHggMCA1MHB4IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjc1ZW07XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwuNik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsLjMpO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBzcGFuOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzUzQ0FDRTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgcDpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiaHR0cHM6Ly9yZXFyZXMuaW4vYXBpL3VzZXJzMlwiIG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaXJzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIkZpcmF0bmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJhdG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxhc3RfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJsYXN0bmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0bmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImF2YXRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApO1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9zdHlsZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9zeXN0ZW1cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS91dGlsc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xzeFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==