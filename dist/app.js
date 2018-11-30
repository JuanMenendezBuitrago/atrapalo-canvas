/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/canvas.js");
/* harmony import */ var _toolbars_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbars/toolbar */ "./src/toolbars/toolbar.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/config.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var App =
/*#__PURE__*/
function () {
  /**
   * Constructor.
   * sets the config data, bootstraps tools based on config and initializes.
   * @param {object} config - The app configuration.
   */
  function App(config) {
    _classCallCheck(this, App);

    this.config = config;
    this.bootstrap();
    this.init();
  }
  /**
   * Bootstraps based on config information (only tools for now).
   */


  _createClass(App, [{
    key: "bootstrap",
    value: function bootstrap() {
      this.setTools();
    }
    /**
     * Sets tools information based on config settings.
     */

  }, {
    key: "setTools",
    value: function setTools() {
      if (this.config.tools == undefined || _typeof(this.config.tools) != 'object') throw 'Exception setting tools!'; //TODO

      this.tools = {};

      for (var tool in this.config.tools) {
        this.tools[tool] = this.config.tools[tool].class;
        this.currentTool = this.config.tools[tool].isDefault ? tool : undefined;
      }
    }
    /**
     * Instatiates toolbar.
     */

  }, {
    key: "initToolbar",
    value: function initToolbar() {
      this.toolbar = new _toolbars_toolbar__WEBPACK_IMPORTED_MODULE_1__["default"](this, document.getElementById('toolbar'));
      if (!this.toolbar) throw 'Exception setting the toolbar!'; // TODO

      this.toolbar.setTool(this.currentTool);
    }
    /**
     * Instatiates canvas
     */

  }, {
    key: "initCanvas",
    value: function initCanvas() {
      this.canvas = new _canvas__WEBPACK_IMPORTED_MODULE_0__["default"](this, document.getElementById(this.config.canvas || 'canvas'));
      if (!this.canvas) throw 'Exception setting the canvas!'; // TODO
    }
    /**
     * Initializes app elements.
     */

  }, {
    key: "init",
    value: function init() {
      this.initCanvas();
      this.initToolbar();
    }
  }]);

  return App;
}();

var app = new App(_config__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "./src/point.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history */ "./src/history.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * Class representing the canvas.
 */

var Canvas =
/*#__PURE__*/
function () {
  /**
   * Constructor.
   * Sets some basic properties and launches initialization.
   * @param {object} app - The app holding the canvas.
   * @param {object} canvas - The canvas DOM Element.
   */
  function Canvas(app, canvas) {
    _classCallCheck(this, Canvas);

    this.app = app;
    this.history = new _history__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.canvas = canvas;
    this.height = canvas.height = document.documentElement.clientHeight;
    this.width = canvas.width = document.documentElement.clientWidth;
    this.context = canvas.getContext('2d');
    this.init();
  }
  /**
  * Initializes the canvas.
  * As for now, only sets event listeners.
  */


  _createClass(Canvas, [{
    key: "init",
    value: function init() {
      this.setEventListeners();
    }
    /** 
     * Refreshes the canvas contents (clears everything and redraws history).
     */

  }, {
    key: "refresh",
    value: function refresh() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.history.refresh();
    }
    /**
     * Sets listeners for user's actions on the canvas.
     */

  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      this.setMouseMoveListener();
      this.setMouseUpListener();
      this.setMouseLeaveListener();
      this.setMouseDownListener();
    }
    /**
     * Sets the listener for the action of moving the mouse over the canvas.
     * If the paint flag is set, adds a point to the history's current stroke and rfreshes.
     */

  }, {
    key: "setMouseMoveListener",
    value: function setMouseMoveListener() {
      var _this = this;

      this.canvas.addEventListener('mousemove', function (evt) {
        var mousePos = _this.getMousePos(evt);

        if (_this.paint) {
          _this.history.currentStroke.addPoint(new _point__WEBPACK_IMPORTED_MODULE_0__["default"](mousePos.x, mousePos.y));

          _this.refresh();
        }
      });
    }
    /**
     * Sets the listener for the action of releasing the mouse button while on the canvas.
     * It just sets the paint lag to false.
     */

  }, {
    key: "setMouseUpListener",
    value: function setMouseUpListener() {
      var _this2 = this;

      this.canvas.addEventListener('mouseup', function () {
        _this2.paint = false;
      });
    }
    /**
     * Sets the listener for the action of leaving the canvas.
     * It just sets the paint lag to false.
     * TODO: This could be improved adding an 'onMouseEnter' event handler.
     */

  }, {
    key: "setMouseLeaveListener",
    value: function setMouseLeaveListener() {
      var _this3 = this;

      this.canvas.addEventListener('mouseleave', function () {
        _this3.paint = false;
      });
    }
    /**
     * Sets the listener for the click event on the canvas,
     * It sets the paint flag to true and adds a new stroke to the history.
     */

  }, {
    key: "setMouseDownListener",
    value: function setMouseDownListener() {
      var _this4 = this;

      this.canvas.addEventListener('mousedown', function (evt) {
        var mousePos = _this4.getMousePos(evt);

        var point = new _point__WEBPACK_IMPORTED_MODULE_0__["default"](mousePos.x, mousePos.y);
        var currentToolClass = _this4.app.tools[_this4.app.currentTool];
        _this4.paint = true;

        _this4.history.addStroke(currentToolClass, point);
      });
    }
    /**
     * Gets the mouse coordinates inside the canvas.
     * @param {object} evt - Event that is used for measuring the coordinates.
     */

  }, {
    key: "getMousePos",
    value: function getMousePos(evt) {
      var rect = this.canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    }
  }]);

  return Canvas;
}();



/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_freehand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/freehand */ "./src/tools/freehand.js");
/* harmony import */ var _toolbars_freehand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbars/freehand */ "./src/toolbars/freehand.js");
/* harmony import */ var _toolbars_freehand__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_toolbars_freehand__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toolbars_sections_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbars/sections/colors */ "./src/toolbars/sections/colors.js");
/* harmony import */ var _toolbars_sections_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbars/sections/history */ "./src/toolbars/sections/history.js");
/* harmony import */ var _toolbars_sections_strokes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbars/sections/strokes */ "./src/toolbars/sections/strokes.js");





var config = {
  "canvas": "canvas",
  "toolbar": "toolbar",
  "sections": {
    "colors": {
      "class": _toolbars_sections_colors__WEBPACK_IMPORTED_MODULE_2__["default"],
      "id": "color-section"
    },
    "history": {
      "class": _toolbars_sections_history__WEBPACK_IMPORTED_MODULE_3__["default"],
      "id": "history-section"
    },
    "strokes": {
      "class": _toolbars_sections_strokes__WEBPACK_IMPORTED_MODULE_4__["default"],
      "id": "stroke-section"
    }
  },
  "tools": {
    "freehand": {
      "isDefault": true,
      "defaultColor": "#ff9933",
      "defaultWidth": "2px",
      "class": _tools_freehand__WEBPACK_IMPORTED_MODULE_0__["default"],
      "toolbar": _toolbars_freehand__WEBPACK_IMPORTED_MODULE_1___default.a,
      "sections": ["colors", "history", "strokes"]
    }
  },
  "filters": {}
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/history.js":
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return History; });
/* harmony import */ var _stroke__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stroke */ "./src/stroke.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var History =
/*#__PURE__*/
function () {
  function History(canvas) {
    _classCallCheck(this, History);

    this.canvas = canvas;
    this.currentStrokeIndex = -1;
    this.strokesList = [];
    this.observers = [];
  }

  _createClass(History, [{
    key: "addObserver",
    value: function addObserver(observer) {
      this.observers.push(observer);
    }
  }, {
    key: "notifyObservers",
    value: function notifyObservers() {
      this.observers.forEach(function (observer) {
        observer.onNotify();
      });
    }
  }, {
    key: "addStroke",
    value: function addStroke(tool, point) {
      var newCurrent = this.current + 1;

      if (this.strokesList[newCurrent]) {
        this.strokesList = this.strokesList.slice(0, newCurrent);
      }

      this.strokesList.push(new _stroke__WEBPACK_IMPORTED_MODULE_0__["default"](this, tool, point));
      this.current = newCurrent;
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      if (this.currentStrokeIndex < this.strokesList.length - 1) {
        this.current += 1;
      }
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      if (this.currentStrokeIndex >= 0) {
        this.current -= 1;
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var _this = this;

      this.strokesList.forEach(function (stroke, i) {
        i <= _this.currentStrokeIndex && stroke.refresh();
      });
    }
  }, {
    key: "current",
    set: function set(value) {
      this.currentStrokeIndex = value;
      this.notifyObservers();
    },
    get: function get() {
      return this.currentStrokeIndex;
    }
  }, {
    key: "currentStroke",
    get: function get() {
      return this.strokesList[this.currentStrokeIndex];
    }
  }]);

  return History;
}();



/***/ }),

/***/ "./src/point.js":
/*!**********************!*\
  !*** ./src/point.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class representing a point in 2D
 */
var Point = function Point(x, y) {
  _classCallCheck(this, Point);

  this.x = x;
  this.y = y;
};



/***/ }),

/***/ "./src/stroke.js":
/*!***********************!*\
  !*** ./src/stroke.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stroke; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Class representing a list of points.
 *
 * - Every stroke belongs to the Canvas' History object and has a tool associated to it.
 * - The list of points stored in a Stroke will be used by its tool to perform an action on the Canvas.
 */
var Stroke =
/*#__PURE__*/
function () {
  /**
   * Constructor.
   * @param {object} history - The history object to which this stroke belongs.
   * @param {fn} tool - The tool class  that will be attached to this stroke.
   * @param {object} points - The points to be added to the stroke (usually just one).
   */
  function Stroke(history, tool) {
    _classCallCheck(this, Stroke);

    this.history = history;
    this.tool = new tool(history.canvas.app.toolbar);
    this.pointsList = [];

    for (var _len = arguments.length, points = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      points[_key - 2] = arguments[_key];
    }

    if (points.length) {
      this.pointsList.push.apply(this.pointsList, points);
    }
  }
  /**
   * It adds a point to the poits list.
   */


  _createClass(Stroke, [{
    key: "addPoint",
    value: function addPoint(point) {
      this.pointsList.push(point);
    }
    /** 
     * Refeshes the canvas with the tool and the Stroke points
     */

  }, {
    key: "refresh",
    value: function refresh() {
      this.tool.refresh(this.history.canvas, this.pointsList);
    }
  }]);

  return Stroke;
}();



/***/ }),

/***/ "./src/toolbars/freehand.js":
/*!**********************************!*\
  !*** ./src/toolbars/freehand.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/home/juan/atrapalo/tmp/src/toolbars/freehand.js'");

/***/ }),

/***/ "./src/toolbars/sections/colors.js":
/*!*****************************************!*\
  !*** ./src/toolbars/sections/colors.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorsSection; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Class representing the colors section.
 */
var ColorsSection =
/*#__PURE__*/
function () {
  /**
   * Constructor.
   * @param {object} app - The running app.
   * @param {object} section - The section DOM Element.
   */
  function ColorsSection(app, section) {
    _classCallCheck(this, ColorsSection);

    this.app = app;
    this.section = section;
    this.activeColor = app.config.tools.freehand.defaultColor;
    this.init();
  }
  /**
   * Initializes the DOM Element events listeners and sets the current active color.
   */


  _createClass(ColorsSection, [{
    key: "init",
    value: function init() {
      this.setEventsListeners();
      this.markItemAsSelected(this.findItemByColor(this.activeColor));
    }
    /**
     * Finds element in the section with the given color.
     * @param {string} color - The color to find.
     */

  }, {
    key: "findItemByColor",
    value: function findItemByColor(color) {
      var items = Array.from(this.section.querySelectorAll('.item'));
      var result = items.find(function (element) {
        return color == window.getComputedStyle(element).backgroundColor;
      });
      if (result) return result;
      return items[0];
    }
    /**
     * Sets the event listeners for each color link.
     */

  }, {
    key: "setEventsListeners",
    value: function setEventsListeners() {
      var _this = this;

      var colors = this.section.querySelectorAll('.item');
      colors.forEach(function (colorElement) {
        colorElement.addEventListener('click', function (evt) {
          _this.markItemAsSelected(evt.currentTarget);
        });
      });
    }
    /**
     * Marks the given item as selected and 'unselect' the rest.
     * It also stores the selected color as the active color in this instance.
     * @param {object} item - The DOM Element to set as selected.
     */

  }, {
    key: "markItemAsSelected",
    value: function markItemAsSelected(item) {
      this.section.querySelectorAll('.selected').forEach(function (item) {
        return item.classList.remove('selected');
      });
      item.classList.add('selected');
      this.activeColor = window.getComputedStyle(this.section.querySelector('.selected a')).backgroundColor;
    }
  }]);

  return ColorsSection;
}();



/***/ }),

/***/ "./src/toolbars/sections/history.js":
/*!******************************************!*\
  !*** ./src/toolbars/sections/history.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HistorySection; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Class representing he history section
 */
var HistorySection =
/*#__PURE__*/
function () {
  /**
   * Constructor.
   * @param {object} app - The running app.
   * @section {object} section - The section DOM Element.
   */
  function HistorySection(app, section) {
    _classCallCheck(this, HistorySection);

    this.app = app;
    this.section = section;
    this.history = app.canvas.history;
    this.init();
  }
  /**
   * Initializes the DOM Element events listeners and sets the current active color.
   */


  _createClass(HistorySection, [{
    key: "init",
    value: function init() {
      this.history.addObserver(this);
      this.setEventsListeners();
    }
    /**
     * Sets the event listeners for the undo and redo buttons.
     * Updates the history current index and refreshes the canvas.
     */

  }, {
    key: "setEventsListeners",
    value: function setEventsListeners() {
      var _this = this;

      this.section.querySelector('.undo').addEventListener('click', function () {
        _this.history.moveDown();

        _this.app.canvas.refresh();
      });
      this.section.querySelector('.redo').addEventListener('click', function () {
        _this.history.moveUp();

        _this.app.canvas.refresh();
      });
    }
    /**
     * Receives the notification as an observer and updates the state of the buttons.
     */

  }, {
    key: "onNotify",
    value: function onNotify() {
      if (this.history.current >= 0) this.section.querySelector('.undo').classList.add('active');else this.section.querySelector('.undo').classList.remove('active');
      if (this.history.current < this.app.canvas.history.strokesList.length - 1) this.section.querySelector('.redo').classList.add('active');else this.section.querySelector('.redo').classList.remove('active');
    }
  }]);

  return HistorySection;
}();



/***/ }),

/***/ "./src/toolbars/sections/strokes.js":
/*!******************************************!*\
  !*** ./src/toolbars/sections/strokes.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StrokeSection; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StrokeSection =
/*#__PURE__*/
function () {
  /**
   * Constructor.
   * @param {object} app - The running app.
   * @param {object} section - The section DOM Element.
   */
  function StrokeSection(app, section) {
    _classCallCheck(this, StrokeSection);

    this.app = app;
    this.section = section;
    this.activeWidth = app.config.tools.freehand.defaultWidth;
    this.init();
  }
  /**
   * Initializes the DOM Element events listeners and sets the current active color.
   */


  _createClass(StrokeSection, [{
    key: "init",
    value: function init() {
      this.setEventsListeners();
      this.markItemAsSelected(this.findItemByWidth(this.activeWidth));
    }
    /**
     * Finds element in the section with the given width.
     * @param {string} width - The width to find.
     */

  }, {
    key: "findItemByWidth",
    value: function findItemByWidth(width) {
      var items = Array.from(this.section.querySelectorAll('.item.stroke a i'));
      var result = items.find(function (element) {
        return width == window.getComputedStyle(element).height;
      });
      if (result) return result.parentElement.parentElement;
      return items[0].parentElement.parentElement;
    }
    /**
     * Sets the event listeners for each width link.
     */

  }, {
    key: "setEventsListeners",
    value: function setEventsListeners() {
      var _this = this;

      var widths = this.section.querySelectorAll('.item.stroke');
      widths.forEach(function (widthElement) {
        widthElement.addEventListener('click', function (evt) {
          _this.markItemAsSelected(evt.currentTarget);
        });
      });
    }
    /**
     * Marks the given item as selected and 'unselect' the rest.
     * It also stores the selected widthas the active width in this instance.
     * @param {object} item - The DOM Element to set as selected.
     */

  }, {
    key: "markItemAsSelected",
    value: function markItemAsSelected(item) {
      this.section.querySelectorAll('.stroke.selected').forEach(function (item) {
        return item.classList.remove('selected');
      });
      item.classList.add('selected');
      this.activeWidth = window.getComputedStyle(this.section.querySelector('.stroke.selected a i')).height;
    }
  }]);

  return StrokeSection;
}();



/***/ }),

/***/ "./src/toolbars/toolbar.js":
/*!*********************************!*\
  !*** ./src/toolbars/toolbar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toolbar; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Class representing the toolbar
 */
var Toolbar =
/*#__PURE__*/
function () {
  /**
   * Constructor.
   * @param {object} app - The app that owns the toolbar.
   * @param {object} toolbar - The toolbar DOM Element.
   */
  function Toolbar(app, toolbar) {
    _classCallCheck(this, Toolbar);

    this.app = app;
    this.toolbar = toolbar;
    this.sections = [];
    this.sectionsData = {};
  }
  /**
   * Sets the tool for this toolbar.
   * Collects what sections apply to his tool, adds them to the DOM and adds event listeners.
   * @param {string} type - The name of the tool as it is stored in the config.
   */


  _createClass(Toolbar, [{
    key: "setTool",
    value: function setTool(type) {
      this.getSectionsInfo(this.app.config.tools[type].sections);
      this.removeSectionsFromDOM();
      this.insertSectionsInDOM();
      this.initSections();
    }
    /**
     * Collects the sections that apply to this tool.
     * @param {object}  sectionNames - The list of sections.
     */

  }, {
    key: "getSectionsInfo",
    value: function getSectionsInfo(sectionNames) {
      var _this = this;

      sectionNames.forEach(function (name) {
        _this.sections.push(_this.app.config.sections[name]);
      });
    }
    /**
     * Remove section elements from the DOM.
     */

  }, {
    key: "removeSectionsFromDOM",
    value: function removeSectionsFromDOM() {
      while (this.toolbar.firstChild) {
        this.toolbar.removeChild(this.toolbar.firstChild);
      }
    }
    /**
     * Inserts section elements in the DOM.
     */

  }, {
    key: "insertSectionsInDOM",
    value: function insertSectionsInDOM() {
      var _this2 = this;

      this.sections.forEach(function (item) {
        var element = _this2.createSectionDivFromTemplate(item);

        _this2.toolbar.appendChild(element);
      });
    }
    /**
     * Instantiates section objects if they don't exist already.
     */

  }, {
    key: "initSections",
    value: function initSections() {
      var _this3 = this;

      this.sections.forEach(function (item) {
        if (!_this3.sectionsData[item.id]) _this3.sectionsData[item.id] = new item['class'](_this3.app, document.getElementById(item.id));
      });
    }
    /**
     * Creates DOM element from section template.
     * @param {string} section - The id of the section.
     * @returns The DOM Element that holds the section.
     */

  }, {
    key: "createSectionDivFromTemplate",
    value: function createSectionDivFromTemplate(section) {
      var div = document.createElement('div');
      div.setAttribute('id', section.id);
      div.classList.add('section');
      div.innerHTML = document.getElementById(section.id).innerHTML;
      return div;
    }
  }]);

  return Toolbar;
}();



/***/ }),

/***/ "./src/tools/freehand.js":
/*!*******************************!*\
  !*** ./src/tools/freehand.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FreeHand; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Class representing the freehand tool.
 */
var FreeHand =
/*#__PURE__*/
function () {
  /**
   * Constructor.
   * @param {object} toolbar - The toolbar where this tool properties are stored.
   */
  function FreeHand(toolbar) {
    _classCallCheck(this, FreeHand);

    this.toolbar = toolbar;
    this.properties = {};
    this.readToolProperties();
  }
  /**
   * Reads tools properties stored in the toolbar.
   */


  _createClass(FreeHand, [{
    key: "readToolProperties",
    value: function readToolProperties() {
      this.readColor();
      this.readStrokeWidth();
    }
    /**
     * Reads color from the toolbar color section.
     */

  }, {
    key: "readColor",
    value: function readColor() {
      this.properties['strokeStyle'] = this.toolbar.sectionsData['color-section'].activeColor;
    }
    /**
     * Reads stroke width from the toolbar stroke section.
     */

  }, {
    key: "readStrokeWidth",
    value: function readStrokeWidth() {
      this.properties['lineWidth'] = this.toolbar.sectionsData['stroke-section'].activeWidth;
    }
    /**
     * Refresh the canvas.
     * This is how the refreshing action takes place for this given tool.
     * @param {object} canvas - The canvas DOM Element where these actions will take place.
     * @param {object} points - The points used for refreshing.
     */

  }, {
    key: "refresh",
    value: function refresh(canvas, points) {
      var _this = this;

      canvas.context.lineJoin = 'round';
      canvas.context.lineWidth = parseInt(this.properties.lineWidth);
      points.forEach(function (point, i, points) {
        canvas.context.beginPath();

        if (i == 0) {
          // point.x - 1 is necessary for drawing 
          // points where starting nd ending coords are the same
          canvas.context.moveTo(point.x - 1, point.y);
        } else {
          canvas.context.moveTo(points[i - 1].x, points[i - 1].y);
        }

        canvas.context.lineTo(point.x, point.y);
        canvas.context.closePath();
        canvas.context.strokeStyle = _this.properties.strokeStyle;
        canvas.context.stroke();
      });
    }
  }]);

  return FreeHand;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJva2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xiYXJzL3NlY3Rpb25zL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbGJhcnMvc2VjdGlvbnMvaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbGJhcnMvc2VjdGlvbnMvc3Ryb2tlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbGJhcnMvdG9vbGJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHMvZnJlZWhhbmQuanMiXSwibmFtZXMiOlsiQXBwIiwiY29uZmlnIiwiYm9vdHN0cmFwIiwiaW5pdCIsInNldFRvb2xzIiwidG9vbHMiLCJ1bmRlZmluZWQiLCJ0b29sIiwiY2xhc3MiLCJjdXJyZW50VG9vbCIsImlzRGVmYXVsdCIsInRvb2xiYXIiLCJUb29sYmFyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNldFRvb2wiLCJjYW52YXMiLCJDYW52YXMiLCJpbml0Q2FudmFzIiwiaW5pdFRvb2xiYXIiLCJhcHAiLCJoaXN0b3J5IiwiSGlzdG9yeSIsImhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInNldEV2ZW50TGlzdGVuZXJzIiwiY2xlYXJSZWN0IiwicmVmcmVzaCIsInNldE1vdXNlTW92ZUxpc3RlbmVyIiwic2V0TW91c2VVcExpc3RlbmVyIiwic2V0TW91c2VMZWF2ZUxpc3RlbmVyIiwic2V0TW91c2VEb3duTGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwibW91c2VQb3MiLCJnZXRNb3VzZVBvcyIsInBhaW50IiwiY3VycmVudFN0cm9rZSIsImFkZFBvaW50IiwiUG9pbnQiLCJ4IiwieSIsInBvaW50IiwiY3VycmVudFRvb2xDbGFzcyIsImFkZFN0cm9rZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudFkiLCJ0b3AiLCJDb2xvcnNUb29sYmFyIiwiSGlzdG9yeVRvb2xiYXIiLCJTdHJva2VUb29sYmFyIiwiRnJlZUhhbmQiLCJGcmVlSGFuZFRvb2xiYXIiLCJjdXJyZW50U3Ryb2tlSW5kZXgiLCJzdHJva2VzTGlzdCIsIm9ic2VydmVycyIsIm9ic2VydmVyIiwicHVzaCIsImZvckVhY2giLCJvbk5vdGlmeSIsIm5ld0N1cnJlbnQiLCJjdXJyZW50Iiwic2xpY2UiLCJTdHJva2UiLCJsZW5ndGgiLCJzdHJva2UiLCJpIiwidmFsdWUiLCJub3RpZnlPYnNlcnZlcnMiLCJwb2ludHNMaXN0IiwicG9pbnRzIiwiYXBwbHkiLCJDb2xvcnNTZWN0aW9uIiwic2VjdGlvbiIsImFjdGl2ZUNvbG9yIiwiZnJlZWhhbmQiLCJkZWZhdWx0Q29sb3IiLCJzZXRFdmVudHNMaXN0ZW5lcnMiLCJtYXJrSXRlbUFzU2VsZWN0ZWQiLCJmaW5kSXRlbUJ5Q29sb3IiLCJjb2xvciIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsInJlc3VsdCIsImZpbmQiLCJlbGVtZW50Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsImNvbG9yRWxlbWVudCIsImN1cnJlbnRUYXJnZXQiLCJpdGVtIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicXVlcnlTZWxlY3RvciIsIkhpc3RvcnlTZWN0aW9uIiwiYWRkT2JzZXJ2ZXIiLCJtb3ZlRG93biIsIm1vdmVVcCIsIlN0cm9rZVNlY3Rpb24iLCJhY3RpdmVXaWR0aCIsImRlZmF1bHRXaWR0aCIsImZpbmRJdGVtQnlXaWR0aCIsInBhcmVudEVsZW1lbnQiLCJ3aWR0aHMiLCJ3aWR0aEVsZW1lbnQiLCJzZWN0aW9ucyIsInNlY3Rpb25zRGF0YSIsInR5cGUiLCJnZXRTZWN0aW9uc0luZm8iLCJyZW1vdmVTZWN0aW9uc0Zyb21ET00iLCJpbnNlcnRTZWN0aW9uc0luRE9NIiwiaW5pdFNlY3Rpb25zIiwic2VjdGlvbk5hbWVzIiwibmFtZSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImNyZWF0ZVNlY3Rpb25EaXZGcm9tVGVtcGxhdGUiLCJhcHBlbmRDaGlsZCIsImlkIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInByb3BlcnRpZXMiLCJyZWFkVG9vbFByb3BlcnRpZXMiLCJyZWFkQ29sb3IiLCJyZWFkU3Ryb2tlV2lkdGgiLCJsaW5lSm9pbiIsImxpbmVXaWR0aCIsInBhcnNlSW50IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBC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Q0FBQ0QsQ0FBekM7QUFDQSxTQUpELE1BS0s7QUFDSjlCLGdCQUFNLENBQUNZLE9BQVAsQ0FBZW9ILE1BQWYsQ0FBc0JsRSxNQUFNLENBQUNKLENBQUMsR0FBQyxDQUFILENBQU4sQ0FBWTdCLENBQWxDLEVBQXFDaUMsTUFBTSxDQUFDSixDQUFDLEdBQUMsQ0FBSCxDQUFOLENBQVk1QixDQUFqRDtBQUNBOztBQUNEOUIsY0FBTSxDQUFDWSxPQUFQLENBQWVxSCxNQUFmLENBQXNCbEcsS0FBSyxDQUFDRixDQUE1QixFQUErQkUsS0FBSyxDQUFDRCxDQUFyQztBQUNBOUIsY0FBTSxDQUFDWSxPQUFQLENBQWVzSCxTQUFmO0FBQ0FsSSxjQUFNLENBQUNZLE9BQVAsQ0FBZXVILFdBQWYsR0FBNkIsS0FBSSxDQUFDWCxVQUFMLENBQWdCVyxXQUE3QztBQUNBbkksY0FBTSxDQUFDWSxPQUFQLENBQWU2QyxNQUFmO0FBQ0EsT0FkRDtBQWVBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsImltcG9ydCBDYW52YXMgICBmcm9tICcuL2NhbnZhcyc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICcuL3Rvb2xiYXJzL3Rvb2xiYXInO1xuaW1wb3J0IGNvbmZpZyAgIGZyb20gJy4vY29uZmlnJztcblxuY2xhc3MgQXBwIHtcblx0LyoqXG5cdCAqIENvbnN0cnVjdG9yLlxuXHQgKiBzZXRzIHRoZSBjb25maWcgZGF0YSwgYm9vdHN0cmFwcyB0b29scyBiYXNlZCBvbiBjb25maWcgYW5kIGluaXRpYWxpemVzLlxuXHQgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIC0gVGhlIGFwcCBjb25maWd1cmF0aW9uLlxuXHQgKi9cblx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cdFx0dGhpcy5ib290c3RyYXAoKTtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBCb290c3RyYXBzIGJhc2VkIG9uIGNvbmZpZyBpbmZvcm1hdGlvbiAob25seSB0b29scyBmb3Igbm93KS5cblx0ICovXG5cdGJvb3RzdHJhcCgpIHtcblx0XHR0aGlzLnNldFRvb2xzKCk7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyB0b29scyBpbmZvcm1hdGlvbiBiYXNlZCBvbiBjb25maWcgc2V0dGluZ3MuXG5cdCAqL1xuXHRzZXRUb29scygpIHtcblx0XHRpZiAodGhpcy5jb25maWcudG9vbHMgPT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0aGlzLmNvbmZpZy50b29scyAhPSAnb2JqZWN0JykgdGhyb3cgJ0V4Y2VwdGlvbiBzZXR0aW5nIHRvb2xzISc7IC8vVE9ET1xuXG5cdFx0dGhpcy50b29scyA9IHt9O1xuXHRcdGZvciAobGV0IHRvb2wgaW4gdGhpcy5jb25maWcudG9vbHMpIHtcblx0XHRcdHRoaXMudG9vbHNbdG9vbF0gPSB0aGlzLmNvbmZpZy50b29sc1t0b29sXS5jbGFzcztcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRvb2wgPSB0aGlzLmNvbmZpZy50b29sc1t0b29sXS5pc0RlZmF1bHQgPyB0b29sIDogdW5kZWZpbmVkO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBJbnN0YXRpYXRlcyB0b29sYmFyLlxuXHQgKi9cblx0aW5pdFRvb2xiYXIoKSB7XG5cdFx0dGhpcy50b29sYmFyID0gbmV3IFRvb2xiYXIodGhpcywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rvb2xiYXInKSk7XG5cdFx0aWYgKCF0aGlzLnRvb2xiYXIpIHRocm93ICdFeGNlcHRpb24gc2V0dGluZyB0aGUgdG9vbGJhciEnOyAvLyBUT0RPXG5cdFx0dGhpcy50b29sYmFyLnNldFRvb2wodGhpcy5jdXJyZW50VG9vbCk7XG5cdH1cblxuXHQvKipcblx0ICogSW5zdGF0aWF0ZXMgY2FudmFzXG5cdCAqL1xuXHRpbml0Q2FudmFzKCkge1xuXHRcdHRoaXMuY2FudmFzID0gbmV3IENhbnZhcyh0aGlzLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbmZpZy5jYW52YXMgfHwgJ2NhbnZhcycpKTtcblx0XHRpZiAoIXRoaXMuY2FudmFzKSB0aHJvdyAnRXhjZXB0aW9uIHNldHRpbmcgdGhlIGNhbnZhcyEnOyAvLyBUT0RPXG5cdH1cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZXMgYXBwIGVsZW1lbnRzLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHR0aGlzLmluaXRDYW52YXMoKTtcblx0XHR0aGlzLmluaXRUb29sYmFyKCk7XG5cdH1cbn1cblxudmFyIGFwcCA9IG5ldyBBcHAoY29uZmlnKTtcbiIsImltcG9ydCBQb2ludCBmcm9tIFwiLi9wb2ludFwiO1xuaW1wb3J0IEhpc3RvcnkgZnJvbSBcIi4vaGlzdG9yeVwiO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyB0aGUgY2FudmFzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqIFNldHMgc29tZSBiYXNpYyBwcm9wZXJ0aWVzIGFuZCBsYXVuY2hlcyBpbml0aWFsaXphdGlvbi5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXBwIC0gVGhlIGFwcCBob2xkaW5nIHRoZSBjYW52YXMuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNhbnZhcyAtIFRoZSBjYW52YXMgRE9NIEVsZW1lbnQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXBwLCBjYW52YXMpIHtcbiAgICAgICAgdGhpcy5hcHAgICAgID0gYXBwO1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgSGlzdG9yeSh0aGlzKTtcbiAgICAgICAgdGhpcy5jYW52YXMgID0gY2FudmFzO1xuICAgICAgICB0aGlzLmhlaWdodCAgPSBjYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgdGhpcy53aWR0aCAgID0gY2FudmFzLndpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBJbml0aWFsaXplcyB0aGUgY2FudmFzLlxuICAgICogQXMgZm9yIG5vdywgb25seSBzZXRzIGV2ZW50IGxpc3RlbmVycy5cbiAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogUmVmcmVzaGVzIHRoZSBjYW52YXMgY29udGVudHMgKGNsZWFycyBldmVyeXRoaW5nIGFuZCByZWRyYXdzIGhpc3RvcnkpLlxuICAgICAqL1xuICAgIHJlZnJlc2goKSB7ICAgICAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmhpc3RvcnkucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgbGlzdGVuZXJzIGZvciB1c2VyJ3MgYWN0aW9ucyBvbiB0aGUgY2FudmFzLlxuICAgICAqL1xuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLnNldE1vdXNlTW92ZUxpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuc2V0TW91c2VVcExpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuc2V0TW91c2VMZWF2ZUxpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuc2V0TW91c2VEb3duTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsaXN0ZW5lciBmb3IgdGhlIGFjdGlvbiBvZiBtb3ZpbmcgdGhlIG1vdXNlIG92ZXIgdGhlIGNhbnZhcy5cbiAgICAgKiBJZiB0aGUgcGFpbnQgZmxhZyBpcyBzZXQsIGFkZHMgYSBwb2ludCB0byB0aGUgaGlzdG9yeSdzIGN1cnJlbnQgc3Ryb2tlIGFuZCByZnJlc2hlcy5cbiAgICAgKi9cbiAgICBzZXRNb3VzZU1vdmVMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2dCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1vdXNlUG9zID0gdGhpcy5nZXRNb3VzZVBvcyhldnQpO1xuICAgICAgICAgICAgaWYgKHRoaXMucGFpbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpc3RvcnkuY3VycmVudFN0cm9rZS5hZGRQb2ludChuZXcgUG9pbnQobW91c2VQb3MueCwgbW91c2VQb3MueSkpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbGlzdGVuZXIgZm9yIHRoZSBhY3Rpb24gb2YgcmVsZWFzaW5nIHRoZSBtb3VzZSBidXR0b24gd2hpbGUgb24gdGhlIGNhbnZhcy5cbiAgICAgKiBJdCBqdXN0IHNldHMgdGhlIHBhaW50IGxhZyB0byBmYWxzZS5cbiAgICAgKi9cbiAgICBzZXRNb3VzZVVwTGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhaW50ID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxpc3RlbmVyIGZvciB0aGUgYWN0aW9uIG9mIGxlYXZpbmcgdGhlIGNhbnZhcy5cbiAgICAgKiBJdCBqdXN0IHNldHMgdGhlIHBhaW50IGxhZyB0byBmYWxzZS5cbiAgICAgKiBUT0RPOiBUaGlzIGNvdWxkIGJlIGltcHJvdmVkIGFkZGluZyBhbiAnb25Nb3VzZUVudGVyJyBldmVudCBoYW5kbGVyLlxuICAgICAqL1xuICAgIHNldE1vdXNlTGVhdmVMaXN0ZW5lcigpe1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYWludCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBsaXN0ZW5lciBmb3IgdGhlIGNsaWNrIGV2ZW50IG9uIHRoZSBjYW52YXMsXG4gICAgICogSXQgc2V0cyB0aGUgcGFpbnQgZmxhZyB0byB0cnVlIGFuZCBhZGRzIGEgbmV3IHN0cm9rZSB0byB0aGUgaGlzdG9yeS5cbiAgICAgKi9cbiAgICBzZXRNb3VzZURvd25MaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2dCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1vdXNlUG9zID0gdGhpcy5nZXRNb3VzZVBvcyhldnQpO1xuICAgICAgICAgICAgbGV0IHBvaW50ID0gbmV3IFBvaW50KG1vdXNlUG9zLngsIG1vdXNlUG9zLnkpO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRUb29sQ2xhc3MgPSB0aGlzLmFwcC50b29sc1t0aGlzLmFwcC5jdXJyZW50VG9vbF07XG4gICAgICAgICAgICB0aGlzLnBhaW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaGlzdG9yeS5hZGRTdHJva2UoY3VycmVudFRvb2xDbGFzcywgcG9pbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBtb3VzZSBjb29yZGluYXRlcyBpbnNpZGUgdGhlIGNhbnZhcy5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZ0IC0gRXZlbnQgdGhhdCBpcyB1c2VkIGZvciBtZWFzdXJpbmcgdGhlIGNvb3JkaW5hdGVzLlxuICAgICAqL1xuICAgIGdldE1vdXNlUG9zKGV2dCkge1xuICAgICAgICB2YXIgcmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IGV2dC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICAgIHk6IGV2dC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgRnJlZUhhbmQgICAgICAgIGZyb20gJy4vdG9vbHMvZnJlZWhhbmQnO1xuaW1wb3J0IEZyZWVIYW5kVG9vbGJhciBmcm9tICcuL3Rvb2xiYXJzL2ZyZWVoYW5kJztcbmltcG9ydCBDb2xvcnNUb29sYmFyICAgZnJvbSAnLi90b29sYmFycy9zZWN0aW9ucy9jb2xvcnMnO1xuaW1wb3J0IEhpc3RvcnlUb29sYmFyICBmcm9tICcuL3Rvb2xiYXJzL3NlY3Rpb25zL2hpc3RvcnknO1xuaW1wb3J0IFN0cm9rZVRvb2xiYXIgICBmcm9tICcuL3Rvb2xiYXJzL3NlY3Rpb25zL3N0cm9rZXMnO1xuXG5jb25zdCBjb25maWcgPSB7XG5cdFwiY2FudmFzXCIgIDogXCJjYW52YXNcIixcblx0XCJ0b29sYmFyXCIgOiBcInRvb2xiYXJcIixcblx0XCJzZWN0aW9uc1wiOiB7XG5cdFx0XCJjb2xvcnNcIjoge1xuXHRcdFx0XCJjbGFzc1wiOiBDb2xvcnNUb29sYmFyLFxuXHRcdFx0XCJpZFwiOiBcImNvbG9yLXNlY3Rpb25cIlxuXHRcdH0sXG5cdFx0XCJoaXN0b3J5XCI6IHtcblx0XHRcdFwiY2xhc3NcIjogSGlzdG9yeVRvb2xiYXIsXG5cdFx0XHRcImlkXCI6IFwiaGlzdG9yeS1zZWN0aW9uXCJcblx0XHR9LFxuXHRcdFwic3Ryb2tlc1wiOiB7XG5cdFx0XHRcImNsYXNzXCI6IFN0cm9rZVRvb2xiYXIsXG5cdFx0XHRcImlkXCI6IFwic3Ryb2tlLXNlY3Rpb25cIlxuXHRcdH1cblx0fSxcblx0XCJ0b29sc1wiIDoge1xuXHRcdFwiZnJlZWhhbmRcIjoge1xuXHRcdFx0XCJpc0RlZmF1bHRcIiA6IHRydWUsXG5cdFx0XHRcImRlZmF1bHRDb2xvclwiOiBcIiNmZjk5MzNcIixcblx0XHRcdFwiZGVmYXVsdFdpZHRoXCI6IFwiMnB4XCIsXG5cdFx0XHRcImNsYXNzXCI6IEZyZWVIYW5kLFxuXHRcdFx0XCJ0b29sYmFyXCI6RnJlZUhhbmRUb29sYmFyLFxuXHRcdFx0XCJzZWN0aW9uc1wiIDogWyBcImNvbG9yc1wiLCBcImhpc3RvcnlcIiwgXCJzdHJva2VzXCJdXG5cdFx0fVxuXHR9LFxuXHRcImZpbHRlcnNcIiA6IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnOyIsImltcG9ydCBTdHJva2UgZnJvbSBcIi4vc3Ryb2tlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhpc3Rvcnkge1xuXHRjb25zdHJ1Y3RvcihjYW52YXMpIHtcblx0XHR0aGlzLmNhbnZhcyA9IGNhbnZhcztcblx0XHR0aGlzLmN1cnJlbnRTdHJva2VJbmRleCA9IC0xO1xuXHRcdHRoaXMuc3Ryb2tlc0xpc3QgPSBbXTtcblx0XHR0aGlzLm9ic2VydmVycyA9IFtdO1xuXHR9XG5cblx0c2V0IGN1cnJlbnQodmFsdWUpIHtcblx0XHR0aGlzLmN1cnJlbnRTdHJva2VJbmRleCA9IHZhbHVlO1xuXHRcdHRoaXMubm90aWZ5T2JzZXJ2ZXJzKCk7XG5cdH1cblx0XG5cdGdldCBjdXJyZW50KCkge1xuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRTdHJva2VJbmRleDtcblx0fVxuXG5cdGFkZE9ic2VydmVyKG9ic2VydmVyKSB7XG5cdFx0dGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG5cdH1cblxuXHRub3RpZnlPYnNlcnZlcnMoKSB7XG5cdFx0dGhpcy5vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG5cdFx0XHRvYnNlcnZlci5vbk5vdGlmeSgpO1xuXHRcdH0pXG5cdH1cblxuXHRhZGRTdHJva2UodG9vbCwgcG9pbnQpIHtcdFx0XHRcdFxuXHRcdGxldCBuZXdDdXJyZW50ID0gdGhpcy5jdXJyZW50ICsgMTtcblx0XHRpZiAodGhpcy5zdHJva2VzTGlzdFtuZXdDdXJyZW50XSkge1xuXHRcdFx0dGhpcy5zdHJva2VzTGlzdCA9IHRoaXMuc3Ryb2tlc0xpc3Quc2xpY2UoMCwgbmV3Q3VycmVudCk7XG5cdFx0fVxuXHRcdHRoaXMuc3Ryb2tlc0xpc3QucHVzaChuZXcgU3Ryb2tlKHRoaXMsIHRvb2wgLHBvaW50KSk7XG5cdFx0dGhpcy5jdXJyZW50ID0gbmV3Q3VycmVudDtcblx0fVxuXG5cdG1vdmVVcCgpIHtcblx0XHRpZiAodGhpcy5jdXJyZW50U3Ryb2tlSW5kZXggPCB0aGlzLnN0cm9rZXNMaXN0Lmxlbmd0aCAtIDEpIHtcblx0XHRcdHRoaXMuY3VycmVudCArPSAxO1xuXHRcdH1cblx0fVxuXG5cdG1vdmVEb3duKCkge1xuXHRcdGlmICh0aGlzLmN1cnJlbnRTdHJva2VJbmRleCA+PSAwKSB7XG5cdFx0XHR0aGlzLmN1cnJlbnQgLT0gMTtcblx0XHR9XG5cdH1cblxuXHRyZWZyZXNoKCkge1xuXHRcdHRoaXMuc3Ryb2tlc0xpc3QuZm9yRWFjaCgoc3Ryb2tlLCBpKSA9PiB7XG5cdFx0XHQoaSA8PSB0aGlzLmN1cnJlbnRTdHJva2VJbmRleCkgJiYgc3Ryb2tlLnJlZnJlc2goKTtcblx0XHR9KTtcblx0fVxuXG5cdGdldCBjdXJyZW50U3Ryb2tlKCkge1xuXHRcdHJldHVybiB0aGlzLnN0cm9rZXNMaXN0W3RoaXMuY3VycmVudFN0cm9rZUluZGV4XTtcblx0fVxufVxuIiwiLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBwb2ludCBpbiAyRFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG5cdGNvbnN0cnVjdG9yKHgsIHkpIHtcblx0XHR0aGlzLnggICAgICAgPSB4O1xuXHRcdHRoaXMueSAgICAgICA9IHk7XG5cdH1cbn1cbiIsIi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgbGlzdCBvZiBwb2ludHMuXG4gKlxuICogLSBFdmVyeSBzdHJva2UgYmVsb25ncyB0byB0aGUgQ2FudmFzJyBIaXN0b3J5IG9iamVjdCBhbmQgaGFzIGEgdG9vbCBhc3NvY2lhdGVkIHRvIGl0LlxuICogLSBUaGUgbGlzdCBvZiBwb2ludHMgc3RvcmVkIGluIGEgU3Ryb2tlIHdpbGwgYmUgdXNlZCBieSBpdHMgdG9vbCB0byBwZXJmb3JtIGFuIGFjdGlvbiBvbiB0aGUgQ2FudmFzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJva2UgIHtcblx0LyoqXG5cdCAqIENvbnN0cnVjdG9yLlxuXHQgKiBAcGFyYW0ge29iamVjdH0gaGlzdG9yeSAtIFRoZSBoaXN0b3J5IG9iamVjdCB0byB3aGljaCB0aGlzIHN0cm9rZSBiZWxvbmdzLlxuXHQgKiBAcGFyYW0ge2ZufSB0b29sIC0gVGhlIHRvb2wgY2xhc3MgIHRoYXQgd2lsbCBiZSBhdHRhY2hlZCB0byB0aGlzIHN0cm9rZS5cblx0ICogQHBhcmFtIHtvYmplY3R9IHBvaW50cyAtIFRoZSBwb2ludHMgdG8gYmUgYWRkZWQgdG8gdGhlIHN0cm9rZSAodXN1YWxseSBqdXN0IG9uZSkuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihoaXN0b3J5LCB0b29sLCAuLi5wb2ludHMpIHtcblx0XHR0aGlzLmhpc3RvcnkgPSBoaXN0b3J5O1xuXHRcdHRoaXMudG9vbCA9IG5ldyB0b29sKGhpc3RvcnkuY2FudmFzLmFwcC50b29sYmFyKTtcdFx0XG5cdFx0dGhpcy5wb2ludHNMaXN0ID0gW107XG5cdFx0aWYgKHBvaW50cy5sZW5ndGgpIHtcblx0XHRcdHRoaXMucG9pbnRzTGlzdC5wdXNoLmFwcGx5KHRoaXMucG9pbnRzTGlzdCwgcG9pbnRzKTtcblx0XHR9XHRcblx0fVxuXHQvKipcblx0ICogSXQgYWRkcyBhIHBvaW50IHRvIHRoZSBwb2l0cyBsaXN0LlxuXHQgKi9cblx0YWRkUG9pbnQocG9pbnQpe1xuXHRcdHRoaXMucG9pbnRzTGlzdC5wdXNoKHBvaW50KVxuXHR9XG5cblx0LyoqIFxuXHQgKiBSZWZlc2hlcyB0aGUgY2FudmFzIHdpdGggdGhlIHRvb2wgYW5kIHRoZSBTdHJva2UgcG9pbnRzXG5cdCAqL1xuXHRyZWZyZXNoKCkge1xuXHRcdHRoaXMudG9vbC5yZWZyZXNoKHRoaXMuaGlzdG9yeS5jYW52YXMsIHRoaXMucG9pbnRzTGlzdCk7XG5cdH1cbn0iLCIvKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyB0aGUgY29sb3JzIHNlY3Rpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG9yc1NlY3Rpb24ge1xuXHQvKipcblx0ICogQ29uc3RydWN0b3IuXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBhcHAgLSBUaGUgcnVubmluZyBhcHAuXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBzZWN0aW9uIC0gVGhlIHNlY3Rpb24gRE9NIEVsZW1lbnQuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihhcHAsIHNlY3Rpb24pIHtcblx0XHR0aGlzLmFwcCA9IGFwcDtcblx0XHR0aGlzLnNlY3Rpb24gPSBzZWN0aW9uO1xuXHRcdHRoaXMuYWN0aXZlQ29sb3IgPSBhcHAuY29uZmlnLnRvb2xzLmZyZWVoYW5kLmRlZmF1bHRDb2xvcjtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplcyB0aGUgRE9NIEVsZW1lbnQgZXZlbnRzIGxpc3RlbmVycyBhbmQgc2V0cyB0aGUgY3VycmVudCBhY3RpdmUgY29sb3IuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdHRoaXMuc2V0RXZlbnRzTGlzdGVuZXJzKCk7XG5cdFx0dGhpcy5tYXJrSXRlbUFzU2VsZWN0ZWQodGhpcy5maW5kSXRlbUJ5Q29sb3IodGhpcy5hY3RpdmVDb2xvcikpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpbmRzIGVsZW1lbnQgaW4gdGhlIHNlY3Rpb24gd2l0aCB0aGUgZ2l2ZW4gY29sb3IuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIFRoZSBjb2xvciB0byBmaW5kLlxuXHQgKi9cblx0ZmluZEl0ZW1CeUNvbG9yKGNvbG9yKSB7XG5cdFx0Y29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKHRoaXMuc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbScpKTtcblx0XHRsZXQgcmVzdWx0ID0gaXRlbXMuZmluZCggKGVsZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiBjb2xvciA9PSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5iYWNrZ3JvdW5kQ29sb3I7XG5cdFx0fSk7XG5cdFx0XG5cdFx0aWYocmVzdWx0KSBcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cblx0XHRyZXR1cm4gaXRlbXNbMF07XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyB0aGUgZXZlbnQgbGlzdGVuZXJzIGZvciBlYWNoIGNvbG9yIGxpbmsuXG5cdCAqL1xuXHRzZXRFdmVudHNMaXN0ZW5lcnMoKSB7XG5cdFx0bGV0IGNvbG9ycyA9IHRoaXMuc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbScpO1xuXHRcdGNvbG9ycy5mb3JFYWNoKGNvbG9yRWxlbWVudCA9PiB7XG5cdFx0XHRjb2xvckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XG5cdFx0XHRcdHRoaXMubWFya0l0ZW1Bc1NlbGVjdGVkKGV2dC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1hcmtzIHRoZSBnaXZlbiBpdGVtIGFzIHNlbGVjdGVkIGFuZCAndW5zZWxlY3QnIHRoZSByZXN0LlxuXHQgKiBJdCBhbHNvIHN0b3JlcyB0aGUgc2VsZWN0ZWQgY29sb3IgYXMgdGhlIGFjdGl2ZSBjb2xvciBpbiB0aGlzIGluc3RhbmNlLlxuXHQgKiBAcGFyYW0ge29iamVjdH0gaXRlbSAtIFRoZSBET00gRWxlbWVudCB0byBzZXQgYXMgc2VsZWN0ZWQuXG5cdCAqL1xuXHRtYXJrSXRlbUFzU2VsZWN0ZWQoaXRlbSkge1xuXHRcdHRoaXMuc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0ZWQnKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcblx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cblx0XHR0aGlzLmFjdGl2ZUNvbG9yID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5zZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCBhJykpLmJhY2tncm91bmRDb2xvcjtcblx0fVxufSIsIi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGhlIGhpc3Rvcnkgc2VjdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaXN0b3J5U2VjdGlvbiB7XG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3Rvci5cblx0ICogQHBhcmFtIHtvYmplY3R9IGFwcCAtIFRoZSBydW5uaW5nIGFwcC5cblx0ICogQHNlY3Rpb24ge29iamVjdH0gc2VjdGlvbiAtIFRoZSBzZWN0aW9uIERPTSBFbGVtZW50LlxuXHQgKi9cblx0Y29uc3RydWN0b3IoYXBwLCBzZWN0aW9uKSB7XG5cdFx0dGhpcy5hcHAgPSBhcHA7XG5cdFx0dGhpcy5zZWN0aW9uID0gc2VjdGlvbjtcblx0XHR0aGlzLmhpc3RvcnkgPSBhcHAuY2FudmFzLmhpc3Rvcnk7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZXMgdGhlIERPTSBFbGVtZW50IGV2ZW50cyBsaXN0ZW5lcnMgYW5kIHNldHMgdGhlIGN1cnJlbnQgYWN0aXZlIGNvbG9yLlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHR0aGlzLmhpc3RvcnkuYWRkT2JzZXJ2ZXIodGhpcyk7XG5cdFx0dGhpcy5zZXRFdmVudHNMaXN0ZW5lcnMoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBldmVudCBsaXN0ZW5lcnMgZm9yIHRoZSB1bmRvIGFuZCByZWRvIGJ1dHRvbnMuXG5cdCAqIFVwZGF0ZXMgdGhlIGhpc3RvcnkgY3VycmVudCBpbmRleCBhbmQgcmVmcmVzaGVzIHRoZSBjYW52YXMuXG5cdCAqL1xuXHRzZXRFdmVudHNMaXN0ZW5lcnMoKSB7XG5cdFx0dGhpcy5zZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy51bmRvJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmhpc3RvcnkubW92ZURvd24oKTtcblx0XHRcdHRoaXMuYXBwLmNhbnZhcy5yZWZyZXNoKCk7XG5cdFx0fSk7XG5cdFx0dGhpcy5zZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5yZWRvJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmhpc3RvcnkubW92ZVVwKCk7XG5cdFx0XHR0aGlzLmFwcC5jYW52YXMucmVmcmVzaCgpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlY2VpdmVzIHRoZSBub3RpZmljYXRpb24gYXMgYW4gb2JzZXJ2ZXIgYW5kIHVwZGF0ZXMgdGhlIHN0YXRlIG9mIHRoZSBidXR0b25zLlxuXHQgKi9cblx0b25Ob3RpZnkoKXtcblx0XHRpZiAodGhpcy5oaXN0b3J5LmN1cnJlbnQgPj0gMClcblx0XHRcdHRoaXMuc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcudW5kbycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcudW5kbycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG5cdFx0aWYgKHRoaXMuaGlzdG9yeS5jdXJyZW50IDwgdGhpcy5hcHAuY2FudmFzLmhpc3Rvcnkuc3Ryb2tlc0xpc3QubGVuZ3RoLTEpXG5cdFx0XHR0aGlzLnNlY3Rpb24ucXVlcnlTZWxlY3RvcignLnJlZG8nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLnNlY3Rpb24ucXVlcnlTZWxlY3RvcignLnJlZG8nKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblx0fVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cm9rZVNlY3Rpb24ge1xuXHQvKipcblx0ICogQ29uc3RydWN0b3IuXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBhcHAgLSBUaGUgcnVubmluZyBhcHAuXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBzZWN0aW9uIC0gVGhlIHNlY3Rpb24gRE9NIEVsZW1lbnQuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihhcHAsIHNlY3Rpb24pIHtcblx0XHR0aGlzLmFwcCA9IGFwcDtcblx0XHR0aGlzLnNlY3Rpb24gPSBzZWN0aW9uO1xuXHRcdHRoaXMuYWN0aXZlV2lkdGggPSBhcHAuY29uZmlnLnRvb2xzLmZyZWVoYW5kLmRlZmF1bHRXaWR0aDtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplcyB0aGUgRE9NIEVsZW1lbnQgZXZlbnRzIGxpc3RlbmVycyBhbmQgc2V0cyB0aGUgY3VycmVudCBhY3RpdmUgY29sb3IuXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdHRoaXMuc2V0RXZlbnRzTGlzdGVuZXJzKCk7XG5cdFx0dGhpcy5tYXJrSXRlbUFzU2VsZWN0ZWQodGhpcy5maW5kSXRlbUJ5V2lkdGgodGhpcy5hY3RpdmVXaWR0aCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpbmRzIGVsZW1lbnQgaW4gdGhlIHNlY3Rpb24gd2l0aCB0aGUgZ2l2ZW4gd2lkdGguXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWR0aCAtIFRoZSB3aWR0aCB0byBmaW5kLlxuXHQgKi9cblx0ZmluZEl0ZW1CeVdpZHRoKHdpZHRoKSB7XG5cdFx0Y29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKHRoaXMuc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbS5zdHJva2UgYSBpJykpO1xuXHRcdGxldCByZXN1bHQgPSBpdGVtcy5maW5kKCAoZWxlbWVudCkgPT4ge1xuXHRcdFx0cmV0dXJuIHdpZHRoID09IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmhlaWdodDtcblx0XHR9KTtcblx0XHRcblx0XHRpZihyZXN1bHQpIFxuXHRcdFx0cmV0dXJuIHJlc3VsdC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cblx0XHRyZXR1cm4gaXRlbXNbMF0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHMgdGhlIGV2ZW50IGxpc3RlbmVycyBmb3IgZWFjaCB3aWR0aCBsaW5rLlxuXHQgKi9cblx0c2V0RXZlbnRzTGlzdGVuZXJzKCkge1xuXHRcdGxldCB3aWR0aHMgPSB0aGlzLnNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0uc3Ryb2tlJyk7XG5cdFx0d2lkdGhzLmZvckVhY2god2lkdGhFbGVtZW50ID0+IHtcblx0XHRcdHdpZHRoRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcblx0XHRcdFx0dGhpcy5tYXJrSXRlbUFzU2VsZWN0ZWQoZXZ0LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogTWFya3MgdGhlIGdpdmVuIGl0ZW0gYXMgc2VsZWN0ZWQgYW5kICd1bnNlbGVjdCcgdGhlIHJlc3QuXG5cdCAqIEl0IGFsc28gc3RvcmVzIHRoZSBzZWxlY3RlZCB3aWR0aGFzIHRoZSBhY3RpdmUgd2lkdGggaW4gdGhpcyBpbnN0YW5jZS5cblx0ICogQHBhcmFtIHtvYmplY3R9IGl0ZW0gLSBUaGUgRE9NIEVsZW1lbnQgdG8gc2V0IGFzIHNlbGVjdGVkLlxuXHQgKi9cblx0bWFya0l0ZW1Bc1NlbGVjdGVkKGl0ZW0pIHtcblx0XHR0aGlzLnNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLnN0cm9rZS5zZWxlY3RlZCcpLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpO1xuXHRcdGl0ZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblx0XHRcblx0XHR0aGlzLmFjdGl2ZVdpZHRoID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5zZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5zdHJva2Uuc2VsZWN0ZWQgYSBpJykpLmhlaWdodDtcblx0fVxufSIsIi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIHRoZSB0b29sYmFyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2xiYXIge1xuXHQvKipcblx0ICogQ29uc3RydWN0b3IuXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBhcHAgLSBUaGUgYXBwIHRoYXQgb3ducyB0aGUgdG9vbGJhci5cblx0ICogQHBhcmFtIHtvYmplY3R9IHRvb2xiYXIgLSBUaGUgdG9vbGJhciBET00gRWxlbWVudC5cblx0ICovXG5cdGNvbnN0cnVjdG9yKGFwcCwgdG9vbGJhcikge1xuXHRcdHRoaXMuYXBwICAgICAgICAgID0gYXBwO1xuXHRcdHRoaXMudG9vbGJhciAgICAgID0gdG9vbGJhcjtcblx0XHR0aGlzLnNlY3Rpb25zICAgICA9IFtdO1xuXHRcdHRoaXMuc2VjdGlvbnNEYXRhICA9IHt9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHMgdGhlIHRvb2wgZm9yIHRoaXMgdG9vbGJhci5cblx0ICogQ29sbGVjdHMgd2hhdCBzZWN0aW9ucyBhcHBseSB0byBoaXMgdG9vbCwgYWRkcyB0aGVtIHRvIHRoZSBET00gYW5kIGFkZHMgZXZlbnQgbGlzdGVuZXJzLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFRoZSBuYW1lIG9mIHRoZSB0b29sIGFzIGl0IGlzIHN0b3JlZCBpbiB0aGUgY29uZmlnLlxuXHQgKi9cblx0c2V0VG9vbCh0eXBlKSB7XG5cdFx0dGhpcy5nZXRTZWN0aW9uc0luZm8odGhpcy5hcHAuY29uZmlnLnRvb2xzW3R5cGVdLnNlY3Rpb25zKTtcblx0XHR0aGlzLnJlbW92ZVNlY3Rpb25zRnJvbURPTSgpO1xuXHRcdHRoaXMuaW5zZXJ0U2VjdGlvbnNJbkRPTSgpO1xuXHRcdHRoaXMuaW5pdFNlY3Rpb25zKCk7XG5cdH1cblxuXHQvKipcblx0ICogQ29sbGVjdHMgdGhlIHNlY3Rpb25zIHRoYXQgYXBwbHkgdG8gdGhpcyB0b29sLlxuXHQgKiBAcGFyYW0ge29iamVjdH0gIHNlY3Rpb25OYW1lcyAtIFRoZSBsaXN0IG9mIHNlY3Rpb25zLlxuXHQgKi9cblx0Z2V0U2VjdGlvbnNJbmZvKHNlY3Rpb25OYW1lcykge1xuXHRcdHNlY3Rpb25OYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG5cdFx0XHR0aGlzLnNlY3Rpb25zLnB1c2godGhpcy5hcHAuY29uZmlnLnNlY3Rpb25zW25hbWVdKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgc2VjdGlvbiBlbGVtZW50cyBmcm9tIHRoZSBET00uXG5cdCAqL1xuXHRyZW1vdmVTZWN0aW9uc0Zyb21ET00oKSB7XG5cdFx0d2hpbGUgKHRoaXMudG9vbGJhci5maXJzdENoaWxkKSB7XG5cdFx0XHR0aGlzLnRvb2xiYXIucmVtb3ZlQ2hpbGQodGhpcy50b29sYmFyLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBJbnNlcnRzIHNlY3Rpb24gZWxlbWVudHMgaW4gdGhlIERPTS5cblx0ICovXG5cdGluc2VydFNlY3Rpb25zSW5ET00oKSB7XG5cdFx0dGhpcy5zZWN0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRsZXQgZWxlbWVudCA9IHRoaXMuY3JlYXRlU2VjdGlvbkRpdkZyb21UZW1wbGF0ZShpdGVtKTtcblx0XHRcdHRoaXMudG9vbGJhci5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbnN0YW50aWF0ZXMgc2VjdGlvbiBvYmplY3RzIGlmIHRoZXkgZG9uJ3QgZXhpc3QgYWxyZWFkeS5cblx0ICovXG5cdGluaXRTZWN0aW9ucygpIHtcblx0XHR0aGlzLnNlY3Rpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdGlmKCF0aGlzLnNlY3Rpb25zRGF0YVtpdGVtLmlkXSlcblx0XHRcdFx0dGhpcy5zZWN0aW9uc0RhdGFbaXRlbS5pZF0gPSBuZXcgaXRlbVsnY2xhc3MnXSh0aGlzLmFwcCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5pZCkpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgRE9NIGVsZW1lbnQgZnJvbSBzZWN0aW9uIHRlbXBsYXRlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc2VjdGlvbiAtIFRoZSBpZCBvZiB0aGUgc2VjdGlvbi5cblx0ICogQHJldHVybnMgVGhlIERPTSBFbGVtZW50IHRoYXQgaG9sZHMgdGhlIHNlY3Rpb24uXG5cdCAqL1xuXHRjcmVhdGVTZWN0aW9uRGl2RnJvbVRlbXBsYXRlKHNlY3Rpb24pIHtcblx0XHRsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBzZWN0aW9uLmlkKTtcblx0XHRkaXYuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbicpO1xuXHRcdGRpdi5pbm5lckhUTUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uLmlkKS5pbm5lckhUTUw7XG5cdFx0cmV0dXJuIGRpdjtcblx0fVxufSIsIi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIHRoZSBmcmVlaGFuZCB0b29sLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmVlSGFuZCB7XG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3Rvci5cblx0ICogQHBhcmFtIHtvYmplY3R9IHRvb2xiYXIgLSBUaGUgdG9vbGJhciB3aGVyZSB0aGlzIHRvb2wgcHJvcGVydGllcyBhcmUgc3RvcmVkLlxuXHQgKi9cblx0Y29uc3RydWN0b3IodG9vbGJhcikge1xuXHRcdHRoaXMudG9vbGJhciA9IHRvb2xiYXI7XG5cdFx0dGhpcy5wcm9wZXJ0aWVzID0ge307XG5cdFx0dGhpcy5yZWFkVG9vbFByb3BlcnRpZXMoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWFkcyB0b29scyBwcm9wZXJ0aWVzIHN0b3JlZCBpbiB0aGUgdG9vbGJhci5cblx0ICovXG5cdHJlYWRUb29sUHJvcGVydGllcygpIHtcblx0XHR0aGlzLnJlYWRDb2xvcigpO1xuXHRcdHRoaXMucmVhZFN0cm9rZVdpZHRoKCk7XG5cdH1cblxuXHQvKipcblx0ICogUmVhZHMgY29sb3IgZnJvbSB0aGUgdG9vbGJhciBjb2xvciBzZWN0aW9uLlxuXHQgKi9cblx0cmVhZENvbG9yKCkge1xuXHRcdHRoaXMucHJvcGVydGllc1snc3Ryb2tlU3R5bGUnXSA9IHRoaXMudG9vbGJhci5zZWN0aW9uc0RhdGFbJ2NvbG9yLXNlY3Rpb24nXS5hY3RpdmVDb2xvcjtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWFkcyBzdHJva2Ugd2lkdGggZnJvbSB0aGUgdG9vbGJhciBzdHJva2Ugc2VjdGlvbi5cblx0ICovXG5cdHJlYWRTdHJva2VXaWR0aCgpIHtcblx0XHR0aGlzLnByb3BlcnRpZXNbJ2xpbmVXaWR0aCddID0gdGhpcy50b29sYmFyLnNlY3Rpb25zRGF0YVsnc3Ryb2tlLXNlY3Rpb24nXS5hY3RpdmVXaWR0aDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWZyZXNoIHRoZSBjYW52YXMuXG5cdCAqIFRoaXMgaXMgaG93IHRoZSByZWZyZXNoaW5nIGFjdGlvbiB0YWtlcyBwbGFjZSBmb3IgdGhpcyBnaXZlbiB0b29sLlxuXHQgKiBAcGFyYW0ge29iamVjdH0gY2FudmFzIC0gVGhlIGNhbnZhcyBET00gRWxlbWVudCB3aGVyZSB0aGVzZSBhY3Rpb25zIHdpbGwgdGFrZSBwbGFjZS5cblx0ICogQHBhcmFtIHtvYmplY3R9IHBvaW50cyAtIFRoZSBwb2ludHMgdXNlZCBmb3IgcmVmcmVzaGluZy5cblx0ICovXG5cdHJlZnJlc2goY2FudmFzLCBwb2ludHMpIHtcblx0XHRjYW52YXMuY29udGV4dC5saW5lSm9pbiAgICA9ICdyb3VuZCc7IFxuXHRcdGNhbnZhcy5jb250ZXh0LmxpbmVXaWR0aCAgID0gcGFyc2VJbnQodGhpcy5wcm9wZXJ0aWVzLmxpbmVXaWR0aCk7IFxuXG5cdFx0cG9pbnRzLmZvckVhY2goKHBvaW50LCBpLCBwb2ludHMpID0+IHtcblx0XHRcdGNhbnZhcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuXHRcdFx0aWYgKGkgPT0gMCkge1xuXHRcdFx0XHQvLyBwb2ludC54IC0gMSBpcyBuZWNlc3NhcnkgZm9yIGRyYXdpbmcgXG5cdFx0XHRcdC8vIHBvaW50cyB3aGVyZSBzdGFydGluZyBuZCBlbmRpbmcgY29vcmRzIGFyZSB0aGUgc2FtZVxuXHRcdFx0XHRjYW52YXMuY29udGV4dC5tb3ZlVG8ocG9pbnQueCAtIDEsIHBvaW50LnkpO1x0XHRcdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNhbnZhcy5jb250ZXh0Lm1vdmVUbyhwb2ludHNbaS0xXS54LCBwb2ludHNbaS0xXS55KTtcdFx0XHRcdFx0XHRcblx0XHRcdH1cblx0XHRcdGNhbnZhcy5jb250ZXh0LmxpbmVUbyhwb2ludC54LCBwb2ludC55KTtcblx0XHRcdGNhbnZhcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xuXHRcdFx0Y2FudmFzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnByb3BlcnRpZXMuc3Ryb2tlU3R5bGU7XG5cdFx0XHRjYW52YXMuY29udGV4dC5zdHJva2UoKTtcblx0XHR9KTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==