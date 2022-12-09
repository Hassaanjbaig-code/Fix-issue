/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoc)
/* harmony export */ });
/* harmony import */ var _class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class.js */ "./src/modules/class.js");
/* harmony import */ var _assets_icons8_remove_64_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons8-remove-64.png */ "./src/assets/icons8-remove-64.png");
/* harmony import */ var prelude_ls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prelude-ls */ "./node_modules/prelude-ls/lib/index.js");
/* harmony import */ var prelude_ls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prelude_ls__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var count = 0;
var todoc = /*#__PURE__*/function () {
  function todoc() {
    _classCallCheck(this, todoc);
    this.collection = [];
  }
  _createClass(todoc, [{
    key: "add",
    value: function add(title, complete) {
      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.collection.length + 1;
      var struction = new _class_js__WEBPACK_IMPORTED_MODULE_0__["default"](title, complete, id);
      this.collection.push(struction);
      console.log(this.collection);
      this.addto(struction);
    }
  }, {
    key: "addto",
    value: function addto(struction) {
      var _this = this;
      // const itemid = count;
      var Listtodo = document.getElementById('listtodo');
      var main = document.createElement('li');
      main.classList.add('projectli');
      main.id = struction.id;
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.completed = struction.complete;
      var maintext = document.createElement('input');
      maintext.value = struction.title;
      maintext.setAttribute('readOnly', 'readOnly');
      maintext.classList.add('text-area');
      var icondelete = document.createElement('img');
      icondelete.alt = 'Delete';
      icondelete.src = _assets_icons8_remove_64_png__WEBPACK_IMPORTED_MODULE_1__;
      icondelete.classList.add("delete");
      //    For edit the text area 
      maintext.addEventListener('click', function () {
        maintext.removeAttribute('readOnly');
        maintext.classList.add('border');
        maintext.focus();
      });
      maintext.addEventListener('change', function (e) {
        // console.log(e.target.value);
        maintext.setAttribute('readOnly', 'readOnly');
        maintext.classList.remove('border');
        var id = e.currentTarget.parentElement.parentElement.id;
        e.target.value = maintext.value;
        console.log(e.currentTarget.parentElement);
        _this.collection[id].title = e.currentTarget.value;
        console.log(_this.collection);
      });
      main.append(checkbox, maintext, icondelete);
      Listtodo.appendChild(main);
      //    For the remove 
      icondelete.addEventListener('click', function () {
        Listtodo.removeChild(main);
        _this.remove(struction.id);
      });
    }
  }, {
    key: "remove",
    value: function remove(id) {
      var _this2 = this;
      this.collection = this.collection.filter(function (task) {
        return task.id !== _this2.collection[id - 1].id;
      });
      this.updateid();
    }
  }, {
    key: "updateid",
    value: function updateid() {
      for (var i = 0; i < this.collection.length; i++) {
        this.collection[i].id = i + 1;
      }
    }
  }]);
  return todoc;
}();


/***/ }),

/***/ "./src/modules/class.js":
/*!******************************!*\
  !*** ./src/modules/class.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todo)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var todo = /*#__PURE__*/_createClass(function todo() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var complete = arguments.length > 1 ? arguments[1] : undefined;
  var id = arguments.length > 2 ? arguments[2] : undefined;
  _classCallCheck(this, todo);
  this.title = title;
  this.id = id;
  this.complete = complete;
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/main.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/main.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.838);\r\n}\r\n\r\n#Todo {\r\n  width: 26rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-sizing: border-box;\r\n  border: 1px solid #008cff7a;\r\n  border-radius: 12px;\r\n  filter: drop-shadow(5px 5px 10px #008cff7a);\r\n  background-color: hsl(0deg 0% 13% / 49%);\r\n}\r\n\r\n#Todo :hover {\r\n  filter: drop-shadow(0.5rem 0.5rem 1rem rgba(255, 255, 255, 0.742));\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  color: #ffffff94;\r\n}\r\n\r\nlegend {\r\n  font-size: 4vh;\r\n}\r\n\r\n.delete {\r\n  width: 2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n#gettext {\r\n  width: 94%;\r\n  box-sizing: border-box;\r\n  background: transparent;\r\n  height: 3rem;\r\n  color: rgba(0, 255, 255, 0.673);\r\n  font-size: 20px;\r\n  border-radius: 6px;\r\n}\r\n\r\n::placeholder {\r\n  color: rgba(255, 255, 255, 0.745);\r\n}\r\n\r\n.text-area {\r\n  background: transparent;\r\n  border: none;\r\n  font-size: 19px;\r\n  color: white;\r\n}\r\n\r\n.border {\r\n  background-color: rgba(5, 45, 45, 0.302);\r\n}\r\n\r\n#listtodo {\r\n  list-style: none;\r\n  width: 100%;\r\n  margin-top: 14px;\r\n}\r\n\r\n#listtodo li {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n  padding: 13px;\r\n  box-sizing: border-box;\r\n  font-size: 20px;\r\n}\r\n\r\n#listtodo li input[type=checkbox] {\r\n  margin-right: 2px;\r\n  background-color: transparent;\r\n}\r\n\r\n#Clean {\r\n  display: flex;\r\n  width: 100%;\r\n  align-self: flex-end;\r\n  justify-self: flex-end;\r\n  justify-content: center;\r\n  background-color: transparent;\r\n  border: 1px solid grey;\r\n  height: 3rem;\r\n  color: #ffffff94;\r\n  border-radius: 12px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style/main.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,sCAAsC;AACxC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,2CAA2C;EAC3C,wCAAwC;AAC1C;;AAEA;EACE,kEAAkE;AACpE;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,sBAAsB;EACtB,uBAAuB;EACvB,YAAY;EACZ,+BAA+B;EAC/B,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,YAAY;AACd;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,6BAA6B;EAC7B,aAAa;EACb,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,WAAW;EACX,oBAAoB;EACpB,sBAAsB;EACtB,uBAAuB;EACvB,6BAA6B;EAC7B,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;AACrB","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.838);\r\n}\r\n\r\n#Todo {\r\n  width: 26rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-sizing: border-box;\r\n  border: 1px solid #008cff7a;\r\n  border-radius: 12px;\r\n  filter: drop-shadow(5px 5px 10px #008cff7a);\r\n  background-color: hsl(0deg 0% 13% / 49%);\r\n}\r\n\r\n#Todo :hover {\r\n  filter: drop-shadow(0.5rem 0.5rem 1rem rgba(255, 255, 255, 0.742));\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  color: #ffffff94;\r\n}\r\n\r\nlegend {\r\n  font-size: 4vh;\r\n}\r\n\r\n.delete {\r\n  width: 2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n#gettext {\r\n  width: 94%;\r\n  box-sizing: border-box;\r\n  background: transparent;\r\n  height: 3rem;\r\n  color: rgba(0, 255, 255, 0.673);\r\n  font-size: 20px;\r\n  border-radius: 6px;\r\n}\r\n\r\n::placeholder {\r\n  color: rgba(255, 255, 255, 0.745);\r\n}\r\n\r\n.text-area {\r\n  background: transparent;\r\n  border: none;\r\n  font-size: 19px;\r\n  color: white;\r\n}\r\n\r\n.border {\r\n  background-color: rgba(5, 45, 45, 0.302);\r\n}\r\n\r\n#listtodo {\r\n  list-style: none;\r\n  width: 100%;\r\n  margin-top: 14px;\r\n}\r\n\r\n#listtodo li {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n  padding: 13px;\r\n  box-sizing: border-box;\r\n  font-size: 20px;\r\n}\r\n\r\n#listtodo li input[type=checkbox] {\r\n  margin-right: 2px;\r\n  background-color: transparent;\r\n}\r\n\r\n#Clean {\r\n  display: flex;\r\n  width: 100%;\r\n  align-self: flex-end;\r\n  justify-self: flex-end;\r\n  justify-content: center;\r\n  background-color: transparent;\r\n  border: 1px solid grey;\r\n  height: 3rem;\r\n  color: #ffffff94;\r\n  border-radius: 12px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/prelude-ls/lib/Func.js":
/*!*********************************************!*\
  !*** ./node_modules/prelude-ls/lib/Func.js ***!
  \*********************************************/
/***/ ((module) => {

// Generated by LiveScript 1.6.0
var apply, curry, flip, fix, over, memoize, toString$ = {}.toString;
apply = curry$(function(f, list){
  return f.apply(null, list);
});
curry = function(f){
  return curry$(f);
};
flip = curry$(function(f, x, y){
  return f(y, x);
});
fix = function(f){
  return function(g){
    return function(){
      return f(g(g)).apply(null, arguments);
    };
  }(function(g){
    return function(){
      return f(g(g)).apply(null, arguments);
    };
  });
};
over = curry$(function(f, g, x, y){
  return f(g(x), g(y));
});
memoize = function(f){
  var memo;
  memo = {};
  return function(){
    var args, res$, i$, to$, key, arg;
    res$ = [];
    for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
      res$.push(arguments[i$]);
    }
    args = res$;
    key = (function(){
      var i$, ref$, len$, results$ = [];
      for (i$ = 0, len$ = (ref$ = args).length; i$ < len$; ++i$) {
        arg = ref$[i$];
        results$.push(arg + toString$.call(arg).slice(8, -1));
      }
      return results$;
    }()).join('');
    return memo[key] = key in memo
      ? memo[key]
      : f.apply(null, args);
  };
};
module.exports = {
  curry: curry,
  flip: flip,
  fix: fix,
  apply: apply,
  over: over,
  memoize: memoize
};
function curry$(f, bound){
  var context,
  _curry = function(args) {
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      context = bound ? context || this : this;
      return params.push.apply(params, arguments) <
          f.length && arguments.length ?
        _curry.call(context, params) : f.apply(context, params);
    } : f;
  };
  return _curry();
}

/***/ }),

/***/ "./node_modules/prelude-ls/lib/List.js":
/*!*********************************************!*\
  !*** ./node_modules/prelude-ls/lib/List.js ***!
  \*********************************************/
/***/ ((module) => {

// Generated by LiveScript 1.6.0
var each, map, compact, filter, reject, remove, partition, find, head, first, tail, last, initial, empty, reverse, unique, uniqueBy, fold, foldl, fold1, foldl1, foldr, foldr1, unfoldr, concat, concatMap, flatten, difference, intersection, union, countBy, groupBy, andList, orList, any, all, sort, sortWith, sortBy, sum, product, mean, average, maximum, minimum, maximumBy, minimumBy, scan, scanl, scan1, scanl1, scanr, scanr1, slice, take, drop, splitAt, takeWhile, dropWhile, span, breakList, zip, zipWith, zipAll, zipAllWith, at, elemIndex, elemIndices, findIndex, findIndices, toString$ = {}.toString;
each = curry$(function(f, xs){
  var i$, len$, x;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    f(x);
  }
  return xs;
});
map = curry$(function(f, xs){
  var i$, len$, x, results$ = [];
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    results$.push(f(x));
  }
  return results$;
});
compact = function(xs){
  var i$, len$, x, results$ = [];
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    if (x) {
      results$.push(x);
    }
  }
  return results$;
};
filter = curry$(function(f, xs){
  var i$, len$, x, results$ = [];
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    if (f(x)) {
      results$.push(x);
    }
  }
  return results$;
});
reject = curry$(function(f, xs){
  var i$, len$, x, results$ = [];
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    if (!f(x)) {
      results$.push(x);
    }
  }
  return results$;
});
remove = curry$(function(el, xs){
  var i, x$;
  i = elemIndex(el, xs);
  x$ = xs.slice();
  if (i != null) {
    x$.splice(i, 1);
  }
  return x$;
});
partition = curry$(function(f, xs){
  var passed, failed, i$, len$, x;
  passed = [];
  failed = [];
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    (f(x) ? passed : failed).push(x);
  }
  return [passed, failed];
});
find = curry$(function(f, xs){
  var i$, len$, x;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    if (f(x)) {
      return x;
    }
  }
});
head = first = function(xs){
  return xs[0];
};
tail = function(xs){
  if (!xs.length) {
    return;
  }
  return xs.slice(1);
};
last = function(xs){
  return xs[xs.length - 1];
};
initial = function(xs){
  if (!xs.length) {
    return;
  }
  return xs.slice(0, -1);
};
empty = function(xs){
  return !xs.length;
};
reverse = function(xs){
  return xs.concat().reverse();
};
unique = function(xs){
  var result, i$, len$, x;
  result = [];
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    if (!in$(x, result)) {
      result.push(x);
    }
  }
  return result;
};
uniqueBy = curry$(function(f, xs){
  var seen, i$, len$, x, val, results$ = [];
  seen = [];
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    val = f(x);
    if (in$(val, seen)) {
      continue;
    }
    seen.push(val);
    results$.push(x);
  }
  return results$;
});
fold = foldl = curry$(function(f, memo, xs){
  var i$, len$, x;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    memo = f(memo, x);
  }
  return memo;
});
fold1 = foldl1 = curry$(function(f, xs){
  return fold(f, xs[0], xs.slice(1));
});
foldr = curry$(function(f, memo, xs){
  var i$, x;
  for (i$ = xs.length - 1; i$ >= 0; --i$) {
    x = xs[i$];
    memo = f(x, memo);
  }
  return memo;
});
foldr1 = curry$(function(f, xs){
  return foldr(f, xs[xs.length - 1], xs.slice(0, -1));
});
unfoldr = curry$(function(f, b){
  var result, x, that;
  result = [];
  x = b;
  while ((that = f(x)) != null) {
    result.push(that[0]);
    x = that[1];
  }
  return result;
});
concat = function(xss){
  return [].concat.apply([], xss);
};
concatMap = curry$(function(f, xs){
  var x;
  return [].concat.apply([], (function(){
    var i$, ref$, len$, results$ = [];
    for (i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$) {
      x = ref$[i$];
      results$.push(f(x));
    }
    return results$;
  }()));
});
flatten = function(xs){
  var x;
  return [].concat.apply([], (function(){
    var i$, ref$, len$, results$ = [];
    for (i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$) {
      x = ref$[i$];
      if (toString$.call(x).slice(8, -1) === 'Array') {
        results$.push(flatten(x));
      } else {
        results$.push(x);
      }
    }
    return results$;
  }()));
};
difference = function(xs){
  var yss, res$, i$, to$, results, len$, x, j$, len1$, ys;
  res$ = [];
  for (i$ = 1, to$ = arguments.length; i$ < to$; ++i$) {
    res$.push(arguments[i$]);
  }
  yss = res$;
  results = [];
  outer: for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    for (j$ = 0, len1$ = yss.length; j$ < len1$; ++j$) {
      ys = yss[j$];
      if (in$(x, ys)) {
        continue outer;
      }
    }
    results.push(x);
  }
  return results;
};
intersection = function(xs){
  var yss, res$, i$, to$, results, len$, x, j$, len1$, ys;
  res$ = [];
  for (i$ = 1, to$ = arguments.length; i$ < to$; ++i$) {
    res$.push(arguments[i$]);
  }
  yss = res$;
  results = [];
  outer: for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    for (j$ = 0, len1$ = yss.length; j$ < len1$; ++j$) {
      ys = yss[j$];
      if (!in$(x, ys)) {
        continue outer;
      }
    }
    results.push(x);
  }
  return results;
};
union = function(){
  var xss, res$, i$, to$, results, len$, xs, j$, len1$, x;
  res$ = [];
  for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
    res$.push(arguments[i$]);
  }
  xss = res$;
  results = [];
  for (i$ = 0, len$ = xss.length; i$ < len$; ++i$) {
    xs = xss[i$];
    for (j$ = 0, len1$ = xs.length; j$ < len1$; ++j$) {
      x = xs[j$];
      if (!in$(x, results)) {
        results.push(x);
      }
    }
  }
  return results;
};
countBy = curry$(function(f, xs){
  var results, i$, len$, x, key;
  results = {};
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    key = f(x);
    if (key in results) {
      results[key] += 1;
    } else {
      results[key] = 1;
    }
  }
  return results;
});
groupBy = curry$(function(f, xs){
  var results, i$, len$, x, key;
  results = {};
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    key = f(x);
    if (key in results) {
      results[key].push(x);
    } else {
      results[key] = [x];
    }
  }
  return results;
});
andList = function(xs){
  var i$, len$, x;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    if (!x) {
      return false;
    }
  }
  return true;
};
orList = function(xs){
  var i$, len$, x;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    if (x) {
      return true;
    }
  }
  return false;
};
any = curry$(function(f, xs){
  var i$, len$, x;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    if (f(x)) {
      return true;
    }
  }
  return false;
});
all = curry$(function(f, xs){
  var i$, len$, x;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    if (!f(x)) {
      return false;
    }
  }
  return true;
});
sort = function(xs){
  return xs.concat().sort(function(x, y){
    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      return 0;
    }
  });
};
sortWith = curry$(function(f, xs){
  return xs.concat().sort(f);
});
sortBy = curry$(function(f, xs){
  return xs.concat().sort(function(x, y){
    if (f(x) > f(y)) {
      return 1;
    } else if (f(x) < f(y)) {
      return -1;
    } else {
      return 0;
    }
  });
});
sum = function(xs){
  var result, i$, len$, x;
  result = 0;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    result += x;
  }
  return result;
};
product = function(xs){
  var result, i$, len$, x;
  result = 1;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    result *= x;
  }
  return result;
};
mean = average = function(xs){
  var sum, i$, len$, x;
  sum = 0;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    sum += x;
  }
  return sum / xs.length;
};
maximum = function(xs){
  var max, i$, ref$, len$, x;
  max = xs[0];
  for (i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$) {
    x = ref$[i$];
    if (x > max) {
      max = x;
    }
  }
  return max;
};
minimum = function(xs){
  var min, i$, ref$, len$, x;
  min = xs[0];
  for (i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$) {
    x = ref$[i$];
    if (x < min) {
      min = x;
    }
  }
  return min;
};
maximumBy = curry$(function(f, xs){
  var max, i$, ref$, len$, x;
  max = xs[0];
  for (i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$) {
    x = ref$[i$];
    if (f(x) > f(max)) {
      max = x;
    }
  }
  return max;
});
minimumBy = curry$(function(f, xs){
  var min, i$, ref$, len$, x;
  min = xs[0];
  for (i$ = 0, len$ = (ref$ = xs.slice(1)).length; i$ < len$; ++i$) {
    x = ref$[i$];
    if (f(x) < f(min)) {
      min = x;
    }
  }
  return min;
});
scan = scanl = curry$(function(f, memo, xs){
  var last, x;
  last = memo;
  return [memo].concat((function(){
    var i$, ref$, len$, results$ = [];
    for (i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$) {
      x = ref$[i$];
      results$.push(last = f(last, x));
    }
    return results$;
  }()));
});
scan1 = scanl1 = curry$(function(f, xs){
  if (!xs.length) {
    return;
  }
  return scan(f, xs[0], xs.slice(1));
});
scanr = curry$(function(f, memo, xs){
  xs = xs.concat().reverse();
  return scan(f, memo, xs).reverse();
});
scanr1 = curry$(function(f, xs){
  if (!xs.length) {
    return;
  }
  xs = xs.concat().reverse();
  return scan(f, xs[0], xs.slice(1)).reverse();
});
slice = curry$(function(x, y, xs){
  return xs.slice(x, y);
});
take = curry$(function(n, xs){
  if (n <= 0) {
    return xs.slice(0, 0);
  } else {
    return xs.slice(0, n);
  }
});
drop = curry$(function(n, xs){
  if (n <= 0) {
    return xs;
  } else {
    return xs.slice(n);
  }
});
splitAt = curry$(function(n, xs){
  return [take(n, xs), drop(n, xs)];
});
takeWhile = curry$(function(p, xs){
  var len, i;
  len = xs.length;
  if (!len) {
    return xs;
  }
  i = 0;
  while (i < len && p(xs[i])) {
    i += 1;
  }
  return xs.slice(0, i);
});
dropWhile = curry$(function(p, xs){
  var len, i;
  len = xs.length;
  if (!len) {
    return xs;
  }
  i = 0;
  while (i < len && p(xs[i])) {
    i += 1;
  }
  return xs.slice(i);
});
span = curry$(function(p, xs){
  return [takeWhile(p, xs), dropWhile(p, xs)];
});
breakList = curry$(function(p, xs){
  return span(compose$(p, not$), xs);
});
zip = curry$(function(xs, ys){
  var result, len, i$, len$, i, x;
  result = [];
  len = ys.length;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    i = i$;
    x = xs[i$];
    if (i === len) {
      break;
    }
    result.push([x, ys[i]]);
  }
  return result;
});
zipWith = curry$(function(f, xs, ys){
  var result, len, i$, len$, i, x;
  result = [];
  len = ys.length;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    i = i$;
    x = xs[i$];
    if (i === len) {
      break;
    }
    result.push(f(x, ys[i]));
  }
  return result;
});
zipAll = function(){
  var xss, res$, i$, to$, minLength, len$, xs, ref$, i, lresult$, j$, results$ = [];
  res$ = [];
  for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
    res$.push(arguments[i$]);
  }
  xss = res$;
  minLength = undefined;
  for (i$ = 0, len$ = xss.length; i$ < len$; ++i$) {
    xs = xss[i$];
    minLength <= (ref$ = xs.length) || (minLength = ref$);
  }
  for (i$ = 0; i$ < minLength; ++i$) {
    i = i$;
    lresult$ = [];
    for (j$ = 0, len$ = xss.length; j$ < len$; ++j$) {
      xs = xss[j$];
      lresult$.push(xs[i]);
    }
    results$.push(lresult$);
  }
  return results$;
};
zipAllWith = function(f){
  var xss, res$, i$, to$, minLength, len$, xs, ref$, i, results$ = [];
  res$ = [];
  for (i$ = 1, to$ = arguments.length; i$ < to$; ++i$) {
    res$.push(arguments[i$]);
  }
  xss = res$;
  minLength = undefined;
  for (i$ = 0, len$ = xss.length; i$ < len$; ++i$) {
    xs = xss[i$];
    minLength <= (ref$ = xs.length) || (minLength = ref$);
  }
  for (i$ = 0; i$ < minLength; ++i$) {
    i = i$;
    results$.push(f.apply(null, (fn$())));
  }
  return results$;
  function fn$(){
    var i$, ref$, len$, results$ = [];
    for (i$ = 0, len$ = (ref$ = xss).length; i$ < len$; ++i$) {
      xs = ref$[i$];
      results$.push(xs[i]);
    }
    return results$;
  }
};
at = curry$(function(n, xs){
  if (n < 0) {
    return xs[xs.length + n];
  } else {
    return xs[n];
  }
});
elemIndex = curry$(function(el, xs){
  var i$, len$, i, x;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    i = i$;
    x = xs[i$];
    if (x === el) {
      return i;
    }
  }
});
elemIndices = curry$(function(el, xs){
  var i$, len$, i, x, results$ = [];
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    i = i$;
    x = xs[i$];
    if (x === el) {
      results$.push(i);
    }
  }
  return results$;
});
findIndex = curry$(function(f, xs){
  var i$, len$, i, x;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    i = i$;
    x = xs[i$];
    if (f(x)) {
      return i;
    }
  }
});
findIndices = curry$(function(f, xs){
  var i$, len$, i, x, results$ = [];
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    i = i$;
    x = xs[i$];
    if (f(x)) {
      results$.push(i);
    }
  }
  return results$;
});
module.exports = {
  each: each,
  map: map,
  filter: filter,
  compact: compact,
  reject: reject,
  remove: remove,
  partition: partition,
  find: find,
  head: head,
  first: first,
  tail: tail,
  last: last,
  initial: initial,
  empty: empty,
  reverse: reverse,
  difference: difference,
  intersection: intersection,
  union: union,
  countBy: countBy,
  groupBy: groupBy,
  fold: fold,
  fold1: fold1,
  foldl: foldl,
  foldl1: foldl1,
  foldr: foldr,
  foldr1: foldr1,
  unfoldr: unfoldr,
  andList: andList,
  orList: orList,
  any: any,
  all: all,
  unique: unique,
  uniqueBy: uniqueBy,
  sort: sort,
  sortWith: sortWith,
  sortBy: sortBy,
  sum: sum,
  product: product,
  mean: mean,
  average: average,
  concat: concat,
  concatMap: concatMap,
  flatten: flatten,
  maximum: maximum,
  minimum: minimum,
  maximumBy: maximumBy,
  minimumBy: minimumBy,
  scan: scan,
  scan1: scan1,
  scanl: scanl,
  scanl1: scanl1,
  scanr: scanr,
  scanr1: scanr1,
  slice: slice,
  take: take,
  drop: drop,
  splitAt: splitAt,
  takeWhile: takeWhile,
  dropWhile: dropWhile,
  span: span,
  breakList: breakList,
  zip: zip,
  zipWith: zipWith,
  zipAll: zipAll,
  zipAllWith: zipAllWith,
  at: at,
  elemIndex: elemIndex,
  elemIndices: elemIndices,
  findIndex: findIndex,
  findIndices: findIndices
};
function curry$(f, bound){
  var context,
  _curry = function(args) {
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      context = bound ? context || this : this;
      return params.push.apply(params, arguments) <
          f.length && arguments.length ?
        _curry.call(context, params) : f.apply(context, params);
    } : f;
  };
  return _curry();
}
function in$(x, xs){
  var i = -1, l = xs.length >>> 0;
  while (++i < l) if (x === xs[i]) return true;
  return false;
}
function compose$() {
  var functions = arguments;
  return function() {
    var i, result;
    result = functions[0].apply(this, arguments);
    for (i = 1; i < functions.length; ++i) {
      result = functions[i](result);
    }
    return result;
  };
}
function not$(x){ return !x; }

/***/ }),

/***/ "./node_modules/prelude-ls/lib/Num.js":
/*!********************************************!*\
  !*** ./node_modules/prelude-ls/lib/Num.js ***!
  \********************************************/
/***/ ((module) => {

// Generated by LiveScript 1.6.0
var max, min, negate, abs, signum, quot, rem, div, mod, recip, pi, tau, exp, sqrt, ln, pow, sin, tan, cos, asin, acos, atan, atan2, truncate, round, ceiling, floor, isItNaN, even, odd, gcd, lcm;
max = curry$(function(x$, y$){
  return x$ > y$ ? x$ : y$;
});
min = curry$(function(x$, y$){
  return x$ < y$ ? x$ : y$;
});
negate = function(x){
  return -x;
};
abs = Math.abs;
signum = function(x){
  if (x < 0) {
    return -1;
  } else if (x > 0) {
    return 1;
  } else {
    return 0;
  }
};
quot = curry$(function(x, y){
  return ~~(x / y);
});
rem = curry$(function(x$, y$){
  return x$ % y$;
});
div = curry$(function(x, y){
  return Math.floor(x / y);
});
mod = curry$(function(x$, y$){
  var ref$;
  return ((x$) % (ref$ = y$) + ref$) % ref$;
});
recip = (function(it){
  return 1 / it;
});
pi = Math.PI;
tau = pi * 2;
exp = Math.exp;
sqrt = Math.sqrt;
ln = Math.log;
pow = curry$(function(x$, y$){
  return Math.pow(x$, y$);
});
sin = Math.sin;
tan = Math.tan;
cos = Math.cos;
asin = Math.asin;
acos = Math.acos;
atan = Math.atan;
atan2 = curry$(function(x, y){
  return Math.atan2(x, y);
});
truncate = function(x){
  return ~~x;
};
round = Math.round;
ceiling = Math.ceil;
floor = Math.floor;
isItNaN = function(x){
  return x !== x;
};
even = function(x){
  return x % 2 === 0;
};
odd = function(x){
  return x % 2 !== 0;
};
gcd = curry$(function(x, y){
  var z;
  x = Math.abs(x);
  y = Math.abs(y);
  while (y !== 0) {
    z = x % y;
    x = y;
    y = z;
  }
  return x;
});
lcm = curry$(function(x, y){
  return Math.abs(Math.floor(x / gcd(x, y) * y));
});
module.exports = {
  max: max,
  min: min,
  negate: negate,
  abs: abs,
  signum: signum,
  quot: quot,
  rem: rem,
  div: div,
  mod: mod,
  recip: recip,
  pi: pi,
  tau: tau,
  exp: exp,
  sqrt: sqrt,
  ln: ln,
  pow: pow,
  sin: sin,
  tan: tan,
  cos: cos,
  acos: acos,
  asin: asin,
  atan: atan,
  atan2: atan2,
  truncate: truncate,
  round: round,
  ceiling: ceiling,
  floor: floor,
  isItNaN: isItNaN,
  even: even,
  odd: odd,
  gcd: gcd,
  lcm: lcm
};
function curry$(f, bound){
  var context,
  _curry = function(args) {
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      context = bound ? context || this : this;
      return params.push.apply(params, arguments) <
          f.length && arguments.length ?
        _curry.call(context, params) : f.apply(context, params);
    } : f;
  };
  return _curry();
}

/***/ }),

/***/ "./node_modules/prelude-ls/lib/Obj.js":
/*!********************************************!*\
  !*** ./node_modules/prelude-ls/lib/Obj.js ***!
  \********************************************/
/***/ ((module) => {

// Generated by LiveScript 1.6.0
var values, keys, pairsToObj, objToPairs, listsToObj, objToLists, empty, each, map, compact, filter, reject, partition, find;
values = function(object){
  var i$, x, results$ = [];
  for (i$ in object) {
    x = object[i$];
    results$.push(x);
  }
  return results$;
};
keys = function(object){
  var x, results$ = [];
  for (x in object) {
    results$.push(x);
  }
  return results$;
};
pairsToObj = function(object){
  var i$, len$, x, resultObj$ = {};
  for (i$ = 0, len$ = object.length; i$ < len$; ++i$) {
    x = object[i$];
    resultObj$[x[0]] = x[1];
  }
  return resultObj$;
};
objToPairs = function(object){
  var key, value, results$ = [];
  for (key in object) {
    value = object[key];
    results$.push([key, value]);
  }
  return results$;
};
listsToObj = curry$(function(keys, values){
  var i$, len$, i, key, resultObj$ = {};
  for (i$ = 0, len$ = keys.length; i$ < len$; ++i$) {
    i = i$;
    key = keys[i$];
    resultObj$[key] = values[i];
  }
  return resultObj$;
});
objToLists = function(object){
  var keys, values, key, value;
  keys = [];
  values = [];
  for (key in object) {
    value = object[key];
    keys.push(key);
    values.push(value);
  }
  return [keys, values];
};
empty = function(object){
  var x;
  for (x in object) {
    return false;
  }
  return true;
};
each = curry$(function(f, object){
  var i$, x;
  for (i$ in object) {
    x = object[i$];
    f(x);
  }
  return object;
});
map = curry$(function(f, object){
  var k, x, resultObj$ = {};
  for (k in object) {
    x = object[k];
    resultObj$[k] = f(x);
  }
  return resultObj$;
});
compact = function(object){
  var k, x, resultObj$ = {};
  for (k in object) {
    x = object[k];
    if (x) {
      resultObj$[k] = x;
    }
  }
  return resultObj$;
};
filter = curry$(function(f, object){
  var k, x, resultObj$ = {};
  for (k in object) {
    x = object[k];
    if (f(x)) {
      resultObj$[k] = x;
    }
  }
  return resultObj$;
});
reject = curry$(function(f, object){
  var k, x, resultObj$ = {};
  for (k in object) {
    x = object[k];
    if (!f(x)) {
      resultObj$[k] = x;
    }
  }
  return resultObj$;
});
partition = curry$(function(f, object){
  var passed, failed, k, x;
  passed = {};
  failed = {};
  for (k in object) {
    x = object[k];
    (f(x) ? passed : failed)[k] = x;
  }
  return [passed, failed];
});
find = curry$(function(f, object){
  var i$, x;
  for (i$ in object) {
    x = object[i$];
    if (f(x)) {
      return x;
    }
  }
});
module.exports = {
  values: values,
  keys: keys,
  pairsToObj: pairsToObj,
  objToPairs: objToPairs,
  listsToObj: listsToObj,
  objToLists: objToLists,
  empty: empty,
  each: each,
  map: map,
  filter: filter,
  compact: compact,
  reject: reject,
  partition: partition,
  find: find
};
function curry$(f, bound){
  var context,
  _curry = function(args) {
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      context = bound ? context || this : this;
      return params.push.apply(params, arguments) <
          f.length && arguments.length ?
        _curry.call(context, params) : f.apply(context, params);
    } : f;
  };
  return _curry();
}

/***/ }),

/***/ "./node_modules/prelude-ls/lib/Str.js":
/*!********************************************!*\
  !*** ./node_modules/prelude-ls/lib/Str.js ***!
  \********************************************/
/***/ ((module) => {

// Generated by LiveScript 1.6.0
var split, join, lines, unlines, words, unwords, chars, unchars, reverse, repeat, capitalize, camelize, dasherize;
split = curry$(function(sep, str){
  return str.split(sep);
});
join = curry$(function(sep, xs){
  return xs.join(sep);
});
lines = function(str){
  if (!str.length) {
    return [];
  }
  return str.split('\n');
};
unlines = function(it){
  return it.join('\n');
};
words = function(str){
  if (!str.length) {
    return [];
  }
  return str.split(/[ ]+/);
};
unwords = function(it){
  return it.join(' ');
};
chars = function(it){
  return it.split('');
};
unchars = function(it){
  return it.join('');
};
reverse = function(str){
  return str.split('').reverse().join('');
};
repeat = curry$(function(n, str){
  var result, i$;
  result = '';
  for (i$ = 0; i$ < n; ++i$) {
    result += str;
  }
  return result;
});
capitalize = function(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
};
camelize = function(it){
  return it.replace(/[-_]+(.)?/g, function(arg$, c){
    return (c != null ? c : '').toUpperCase();
  });
};
dasherize = function(str){
  return str.replace(/([^-A-Z])([A-Z]+)/g, function(arg$, lower, upper){
    return lower + "-" + (upper.length > 1
      ? upper
      : upper.toLowerCase());
  }).replace(/^([A-Z]+)/, function(arg$, upper){
    if (upper.length > 1) {
      return upper + "-";
    } else {
      return upper.toLowerCase();
    }
  });
};
module.exports = {
  split: split,
  join: join,
  lines: lines,
  unlines: unlines,
  words: words,
  unwords: unwords,
  chars: chars,
  unchars: unchars,
  reverse: reverse,
  repeat: repeat,
  capitalize: capitalize,
  camelize: camelize,
  dasherize: dasherize
};
function curry$(f, bound){
  var context,
  _curry = function(args) {
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      context = bound ? context || this : this;
      return params.push.apply(params, arguments) <
          f.length && arguments.length ?
        _curry.call(context, params) : f.apply(context, params);
    } : f;
  };
  return _curry();
}

/***/ }),

/***/ "./node_modules/prelude-ls/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/prelude-ls/lib/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Generated by LiveScript 1.6.0
var Func, List, Obj, Str, Num, id, isType, replicate, prelude, toString$ = {}.toString;
Func = __webpack_require__(/*! ./Func.js */ "./node_modules/prelude-ls/lib/Func.js");
List = __webpack_require__(/*! ./List.js */ "./node_modules/prelude-ls/lib/List.js");
Obj = __webpack_require__(/*! ./Obj.js */ "./node_modules/prelude-ls/lib/Obj.js");
Str = __webpack_require__(/*! ./Str.js */ "./node_modules/prelude-ls/lib/Str.js");
Num = __webpack_require__(/*! ./Num.js */ "./node_modules/prelude-ls/lib/Num.js");
id = function(x){
  return x;
};
isType = curry$(function(type, x){
  return toString$.call(x).slice(8, -1) === type;
});
replicate = curry$(function(n, x){
  var i$, results$ = [];
  for (i$ = 0; i$ < n; ++i$) {
    results$.push(x);
  }
  return results$;
});
Str.empty = List.empty;
Str.slice = List.slice;
Str.take = List.take;
Str.drop = List.drop;
Str.splitAt = List.splitAt;
Str.takeWhile = List.takeWhile;
Str.dropWhile = List.dropWhile;
Str.span = List.span;
Str.breakStr = List.breakList;
prelude = {
  Func: Func,
  List: List,
  Obj: Obj,
  Str: Str,
  Num: Num,
  id: id,
  isType: isType,
  replicate: replicate
};
prelude.each = List.each;
prelude.map = List.map;
prelude.filter = List.filter;
prelude.compact = List.compact;
prelude.reject = List.reject;
prelude.partition = List.partition;
prelude.find = List.find;
prelude.head = List.head;
prelude.first = List.first;
prelude.tail = List.tail;
prelude.last = List.last;
prelude.initial = List.initial;
prelude.empty = List.empty;
prelude.reverse = List.reverse;
prelude.difference = List.difference;
prelude.intersection = List.intersection;
prelude.union = List.union;
prelude.countBy = List.countBy;
prelude.groupBy = List.groupBy;
prelude.fold = List.fold;
prelude.foldl = List.foldl;
prelude.fold1 = List.fold1;
prelude.foldl1 = List.foldl1;
prelude.foldr = List.foldr;
prelude.foldr1 = List.foldr1;
prelude.unfoldr = List.unfoldr;
prelude.andList = List.andList;
prelude.orList = List.orList;
prelude.any = List.any;
prelude.all = List.all;
prelude.unique = List.unique;
prelude.uniqueBy = List.uniqueBy;
prelude.sort = List.sort;
prelude.sortWith = List.sortWith;
prelude.sortBy = List.sortBy;
prelude.sum = List.sum;
prelude.product = List.product;
prelude.mean = List.mean;
prelude.average = List.average;
prelude.concat = List.concat;
prelude.concatMap = List.concatMap;
prelude.flatten = List.flatten;
prelude.maximum = List.maximum;
prelude.minimum = List.minimum;
prelude.maximumBy = List.maximumBy;
prelude.minimumBy = List.minimumBy;
prelude.scan = List.scan;
prelude.scanl = List.scanl;
prelude.scan1 = List.scan1;
prelude.scanl1 = List.scanl1;
prelude.scanr = List.scanr;
prelude.scanr1 = List.scanr1;
prelude.slice = List.slice;
prelude.take = List.take;
prelude.drop = List.drop;
prelude.splitAt = List.splitAt;
prelude.takeWhile = List.takeWhile;
prelude.dropWhile = List.dropWhile;
prelude.span = List.span;
prelude.breakList = List.breakList;
prelude.zip = List.zip;
prelude.zipWith = List.zipWith;
prelude.zipAll = List.zipAll;
prelude.zipAllWith = List.zipAllWith;
prelude.at = List.at;
prelude.elemIndex = List.elemIndex;
prelude.elemIndices = List.elemIndices;
prelude.findIndex = List.findIndex;
prelude.findIndices = List.findIndices;
prelude.apply = Func.apply;
prelude.curry = Func.curry;
prelude.flip = Func.flip;
prelude.fix = Func.fix;
prelude.over = Func.over;
prelude.split = Str.split;
prelude.join = Str.join;
prelude.lines = Str.lines;
prelude.unlines = Str.unlines;
prelude.words = Str.words;
prelude.unwords = Str.unwords;
prelude.chars = Str.chars;
prelude.unchars = Str.unchars;
prelude.repeat = Str.repeat;
prelude.capitalize = Str.capitalize;
prelude.camelize = Str.camelize;
prelude.dasherize = Str.dasherize;
prelude.values = Obj.values;
prelude.keys = Obj.keys;
prelude.pairsToObj = Obj.pairsToObj;
prelude.objToPairs = Obj.objToPairs;
prelude.listsToObj = Obj.listsToObj;
prelude.objToLists = Obj.objToLists;
prelude.max = Num.max;
prelude.min = Num.min;
prelude.negate = Num.negate;
prelude.abs = Num.abs;
prelude.signum = Num.signum;
prelude.quot = Num.quot;
prelude.rem = Num.rem;
prelude.div = Num.div;
prelude.mod = Num.mod;
prelude.recip = Num.recip;
prelude.pi = Num.pi;
prelude.tau = Num.tau;
prelude.exp = Num.exp;
prelude.sqrt = Num.sqrt;
prelude.ln = Num.ln;
prelude.pow = Num.pow;
prelude.sin = Num.sin;
prelude.tan = Num.tan;
prelude.cos = Num.cos;
prelude.acos = Num.acos;
prelude.asin = Num.asin;
prelude.atan = Num.atan;
prelude.atan2 = Num.atan2;
prelude.truncate = Num.truncate;
prelude.round = Num.round;
prelude.ceiling = Num.ceiling;
prelude.floor = Num.floor;
prelude.isItNaN = Num.isItNaN;
prelude.even = Num.even;
prelude.odd = Num.odd;
prelude.gcd = Num.gcd;
prelude.lcm = Num.lcm;
prelude.VERSION = '1.2.1';
module.exports = prelude;
function curry$(f, bound){
  var context,
  _curry = function(args) {
    return f.length > 1 ? function(){
      var params = args ? args.concat() : [];
      context = bound ? context || this : this;
      return params.push.apply(params, arguments) <
          f.length && arguments.length ?
        _curry.call(context, params) : f.apply(context, params);
    } : f;
  };
  return _curry();
}

/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/icons8-remove-64.png":
/*!*****************************************!*\
  !*** ./src/assets/icons8-remove-64.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/icons8-remove-64.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.css */ "./src/style/main.css");
/* harmony import */ var _modules_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/app.js */ "./src/modules/app.js");


var input = document.getElementById('gettext');
var todo = new _modules_app_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
input.addEventListener('change', function (e) {
  todo.add(input.value, true);
  // todo.addto(input.value,true);
  e.preventDefault();
  input.value = "";
});
window.addEventListener('beforeunload', function () {
  localStorage.setItem('listBook', JSON.stringify(todo.collection));
});
if (window.localStorage.getItem('listBook') !== 'undefined') {
  var list = JSON.parse(window.localStorage.getItem('listBook'));
  list.forEach(function (collection) {
    todo.add(collection.title);
  });
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFdBQVc7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsV0FBVztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxXQUFXO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsV0FBVztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsV0FBVztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFdBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsVUFBVTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxXQUFXO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxVQUFVO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFdBQVc7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFdBQVc7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsaUNBQWlDLFdBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGlDQUFpQyxXQUFXO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsaUNBQWlDLFdBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOzs7Ozs7Ozs7O0FDM3NCbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDaklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFdBQVc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFdBQVc7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMzRkE7QUFDQSw2RUFBNkU7QUFDN0UsT0FBTyxtQkFBTyxDQUFDLHdEQUFXO0FBQzFCLE9BQU8sbUJBQU8sQ0FBQyx3REFBVztBQUMxQixNQUFNLG1CQUFPLENBQUMsc0RBQVU7QUFDeEIsTUFBTSxtQkFBTyxDQUFDLHNEQUFVO0FBQ3hCLE1BQU0sbUJBQU8sQ0FBQyxzREFBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoTEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBcUc7QUFDckc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUkrQztBQUN2RSxPQUFPLGlFQUFlLHFGQUFPLElBQUksNEZBQWMsR0FBRyw0RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7O0FDQTBCO0FBQ1k7QUFFdEMsSUFBTXVDLEtBQUssR0FBRy9CLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBQztBQUVoRCxJQUFJNkIsSUFBSSxHQUFHLElBQUk3Qyx1REFBTyxFQUFFO0FBRXhCOEMsS0FBSyxDQUFDaEIsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUNHLENBQUMsRUFBSztFQUN0Q1ksSUFBSSxDQUFDekIsR0FBRyxDQUFDMEIsS0FBSyxDQUFDckIsS0FBSyxFQUFDLElBQUksQ0FBQztFQUMxQjtFQUNBUSxDQUFDLENBQUNjLGNBQWMsRUFBRTtFQUNsQkQsS0FBSyxDQUFDckIsS0FBSyxHQUFHLEVBQUU7QUFDbEIsQ0FBQyxDQUFDO0FBRUZ1QixNQUFNLENBQUNsQixnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsWUFBTTtFQUM1Q21CLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFVBQVUsRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNQLElBQUksQ0FBQ3hDLFVBQVUsQ0FBQyxDQUFDO0FBQ25FLENBQUMsQ0FBQztBQUVGLElBQUkyQyxNQUFNLENBQUNDLFlBQVksQ0FBQ0ksT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLFdBQVcsRUFBRTtFQUMzRCxJQUFNQyxJQUFJLEdBQUdILElBQUksQ0FBQ0ksS0FBSyxDQUFDUCxNQUFNLENBQUNDLFlBQVksQ0FBQ0ksT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0VBQ2hFQyxJQUFJLENBQUNFLE9BQU8sQ0FBQyxVQUFDbkQsVUFBVSxFQUFLO0lBQzNCd0MsSUFBSSxDQUFDekIsR0FBRyxDQUFDZixVQUFVLENBQUNDLEtBQUssQ0FBQztFQUM1QixDQUFDLENBQUM7QUFDSixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3LWZvbGRlci8uL3NyYy9tb2R1bGVzL2FwcC5qcyIsIndlYnBhY2s6Ly9uZXctZm9sZGVyLy4vc3JjL21vZHVsZXMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vbmV3LWZvbGRlci8uL3NyYy9zdHlsZS9tYWluLmNzcyIsIndlYnBhY2s6Ly9uZXctZm9sZGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9uZXctZm9sZGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbmV3LWZvbGRlci8uL25vZGVfbW9kdWxlcy9wcmVsdWRlLWxzL2xpYi9GdW5jLmpzIiwid2VicGFjazovL25ldy1mb2xkZXIvLi9ub2RlX21vZHVsZXMvcHJlbHVkZS1scy9saWIvTGlzdC5qcyIsIndlYnBhY2s6Ly9uZXctZm9sZGVyLy4vbm9kZV9tb2R1bGVzL3ByZWx1ZGUtbHMvbGliL051bS5qcyIsIndlYnBhY2s6Ly9uZXctZm9sZGVyLy4vbm9kZV9tb2R1bGVzL3ByZWx1ZGUtbHMvbGliL09iai5qcyIsIndlYnBhY2s6Ly9uZXctZm9sZGVyLy4vbm9kZV9tb2R1bGVzL3ByZWx1ZGUtbHMvbGliL1N0ci5qcyIsIndlYnBhY2s6Ly9uZXctZm9sZGVyLy4vbm9kZV9tb2R1bGVzL3ByZWx1ZGUtbHMvbGliL2luZGV4LmpzIiwid2VicGFjazovL25ldy1mb2xkZXIvLi9zcmMvc3R5bGUvbWFpbi5jc3M/ODMzMSIsIndlYnBhY2s6Ly9uZXctZm9sZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL25ldy1mb2xkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25ldy1mb2xkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbmV3LWZvbGRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9uZXctZm9sZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbmV3LWZvbGRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25ldy1mb2xkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV3LWZvbGRlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9uZXctZm9sZGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZXctZm9sZGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbmV3LWZvbGRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ldy1mb2xkZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZXctZm9sZGVyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL25ldy1mb2xkZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL25ldy1mb2xkZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvZG9jb24gZnJvbSAnLi9jbGFzcy5qcydcclxuaW1wb3J0IGljb24gZnJvbSAnLi4vYXNzZXRzL2ljb25zOC1yZW1vdmUtNjQucG5nJ1xyXG5pbXBvcnQgeyBpZCB9IGZyb20gJ3ByZWx1ZGUtbHMnO1xyXG5cclxubGV0IGNvdW50ID0gMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRvZG9jIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gW11cclxuICAgIH1cclxuICAgIGFkZCh0aXRsZSxjb21wbGV0ZSxpZCA9IHRoaXMuY29sbGVjdGlvbi5sZW5ndGgrMSkge1xyXG4gICAgICAgIGNvbnN0IHN0cnVjdGlvbiA9IG5ldyB0b2RvY29uKHRpdGxlLGNvbXBsZXRlLGlkKTtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb24ucHVzaChzdHJ1Y3Rpb24pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29sbGVjdGlvbik7XHJcbiAgICAgICAgdGhpcy5hZGR0byhzdHJ1Y3Rpb24pO1xyXG4gICAgfVxyXG4gICAgYWRkdG8oc3RydWN0aW9uKXtcclxuICAgICAgICAvLyBjb25zdCBpdGVtaWQgPSBjb3VudDtcclxuICAgICAgIGNvbnN0IExpc3R0b2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3R0b2RvJyk7XHJcbiAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgncHJvamVjdGxpJyk7XHJcbiAgICAgICBtYWluLmlkID0gc3RydWN0aW9uLmlkO1xyXG4gICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICAgICBjaGVja2JveC5jb21wbGV0ZWQgPSBzdHJ1Y3Rpb24uY29tcGxldGU7XHJcbiAgICAgICBjb25zdCBtYWludGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICBtYWludGV4dC52YWx1ZSA9IHN0cnVjdGlvbi50aXRsZTtcclxuICAgICAgIG1haW50ZXh0LnNldEF0dHJpYnV0ZSgncmVhZE9ubHknLCdyZWFkT25seScpO1xyXG4gICAgICAgbWFpbnRleHQuY2xhc3NMaXN0LmFkZCgndGV4dC1hcmVhJylcclxuICAgICAgIGNvbnN0IGljb25kZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgIGljb25kZWxldGUuYWx0ID0gJ0RlbGV0ZSc7XHJcbiAgICAgICBpY29uZGVsZXRlLnNyYyA9IGljb247XHJcbiAgICAgICBpY29uZGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XHJcbiAgICAgICAvLyAgICBGb3IgZWRpdCB0aGUgdGV4dCBhcmVhIFxyXG4gICAgICAgbWFpbnRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1haW50ZXh0LnJlbW92ZUF0dHJpYnV0ZSgncmVhZE9ubHknKTtcclxuICAgICAgICAgICAgbWFpbnRleHQuY2xhc3NMaXN0LmFkZCgnYm9yZGVyJyk7XHJcbiAgICAgICAgICAgIG1haW50ZXh0LmZvY3VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWFpbnRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgbWFpbnRleHQuc2V0QXR0cmlidXRlKCdyZWFkT25seScsJ3JlYWRPbmx5Jyk7XHJcbiAgICAgICAgICAgIG1haW50ZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2JvcmRlcicpO1xyXG4gICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSBtYWludGV4dC52YWx1ZTtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudCk7XHJcbiAgICAgICAgICAgdGhpcy5jb2xsZWN0aW9uW2lkXS50aXRsZSA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbGxlY3Rpb24pO1xyXG4gICAgIH0pO1xyXG4gICAgICAgbWFpbi5hcHBlbmQoXHJcbiAgICAgICAgIGNoZWNrYm94LFxyXG4gICAgICAgICBtYWludGV4dCxcclxuICAgICAgICAgaWNvbmRlbGV0ZSxcclxuICAgICAgICk7XHJcbiAgICAgICBMaXN0dG9kby5hcHBlbmRDaGlsZChtYWluKTtcclxuICAgIC8vICAgIEZvciB0aGUgcmVtb3ZlIFxyXG4gICAgICAgaWNvbmRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICBMaXN0dG9kby5yZW1vdmVDaGlsZChtYWluKTtcclxuICAgICAgICB0aGlzLnJlbW92ZShzdHJ1Y3Rpb24uaWQpO1xyXG4gICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbW92ZShpZCl7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gdGhpcy5jb2xsZWN0aW9uLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCAhPT0gdGhpcy5jb2xsZWN0aW9uW2lkIC0gMV0uaWQpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlaWQoKVxyXG4gICAgfVxyXG4gICAgdXBkYXRlaWQoKXtcclxuICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uW2ldLmlkID0gaSArIDFcclxuICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHRvZG8ge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUgPSBudWxsLCBjb21wbGV0ZSxpZCl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGVcclxuICAgIH1cclxufSAiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44MzgpO1xcclxcbn1cXHJcXG5cXHJcXG4jVG9kbyB7XFxyXFxuICB3aWR0aDogMjZyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDA4Y2ZmN2E7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdyg1cHggNXB4IDEwcHggIzAwOGNmZjdhKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwZGVnIDAlIDEzJSAvIDQ5JSk7XFxyXFxufVxcclxcblxcclxcbiNUb2RvIDpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuNXJlbSAwLjVyZW0gMXJlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzQyKSk7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmZmZmZmY5NDtcXHJcXG59XFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG4gIGZvbnQtc2l6ZTogNHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlIHtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2V0dGV4dCB7XFxyXFxuICB3aWR0aDogOTQlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMjU1LCAyNTUsIDAuNjczKTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc0NSk7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWFyZWEge1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE5cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5ib3JkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1LCA0NSwgNDUsIDAuMzAyKTtcXHJcXG59XFxyXFxuXFxyXFxuI2xpc3R0b2RvIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbiNsaXN0dG9kbyBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHBhZGRpbmc6IDEzcHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGlzdHRvZG8gbGkgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuI0NsZWFuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgY29sb3I6ICNmZmZmZmY5NDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtFQUFrRTtBQUNwRTs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODM4KTtcXHJcXG59XFxyXFxuXFxyXFxuI1RvZG8ge1xcclxcbiAgd2lkdGg6IDI2cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwOGNmZjdhO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coNXB4IDVweCAxMHB4ICMwMDhjZmY3YSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMGRlZyAwJSAxMyUgLyA0OSUpO1xcclxcbn1cXHJcXG5cXHJcXG4jVG9kbyA6aG92ZXIge1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjVyZW0gMC41cmVtIDFyZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc0MikpO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmOTQ7XFxyXFxufVxcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuICBmb250LXNpemU6IDR2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZSB7XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2dldHRleHQge1xcclxcbiAgd2lkdGg6IDk0JTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDI1NSwgMjU1LCAwLjY3Myk7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbjo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NDUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1hcmVhIHtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxOXB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9yZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNSwgNDUsIDQ1LCAwLjMwMik7XFxyXFxufVxcclxcblxcclxcbiNsaXN0dG9kbyB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tdG9wOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGlzdHRvZG8gbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBwYWRkaW5nOiAxM3B4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xpc3R0b2RvIGxpIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbiNDbGVhbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmOTQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEdlbmVyYXRlZCBieSBMaXZlU2NyaXB0IDEuNi4wXG52YXIgYXBwbHksIGN1cnJ5LCBmbGlwLCBmaXgsIG92ZXIsIG1lbW9pemUsIHRvU3RyaW5nJCA9IHt9LnRvU3RyaW5nO1xuYXBwbHkgPSBjdXJyeSQoZnVuY3Rpb24oZiwgbGlzdCl7XG4gIHJldHVybiBmLmFwcGx5KG51bGwsIGxpc3QpO1xufSk7XG5jdXJyeSA9IGZ1bmN0aW9uKGYpe1xuICByZXR1cm4gY3VycnkkKGYpO1xufTtcbmZsaXAgPSBjdXJyeSQoZnVuY3Rpb24oZiwgeCwgeSl7XG4gIHJldHVybiBmKHksIHgpO1xufSk7XG5maXggPSBmdW5jdGlvbihmKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKGcpe1xuICAgIHJldHVybiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIGYoZyhnKSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9KGZ1bmN0aW9uKGcpe1xuICAgIHJldHVybiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIGYoZyhnKSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9KTtcbn07XG5vdmVyID0gY3VycnkkKGZ1bmN0aW9uKGYsIGcsIHgsIHkpe1xuICByZXR1cm4gZihnKHgpLCBnKHkpKTtcbn0pO1xubWVtb2l6ZSA9IGZ1bmN0aW9uKGYpe1xuICB2YXIgbWVtbztcbiAgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICB2YXIgYXJncywgcmVzJCwgaSQsIHRvJCwga2V5LCBhcmc7XG4gICAgcmVzJCA9IFtdO1xuICAgIGZvciAoaSQgPSAwLCB0byQgPSBhcmd1bWVudHMubGVuZ3RoOyBpJCA8IHRvJDsgKytpJCkge1xuICAgICAgcmVzJC5wdXNoKGFyZ3VtZW50c1tpJF0pO1xuICAgIH1cbiAgICBhcmdzID0gcmVzJDtcbiAgICBrZXkgPSAoZnVuY3Rpb24oKXtcbiAgICAgIHZhciBpJCwgcmVmJCwgbGVuJCwgcmVzdWx0cyQgPSBbXTtcbiAgICAgIGZvciAoaSQgPSAwLCBsZW4kID0gKHJlZiQgPSBhcmdzKS5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgICAgICBhcmcgPSByZWYkW2kkXTtcbiAgICAgICAgcmVzdWx0cyQucHVzaChhcmcgKyB0b1N0cmluZyQuY2FsbChhcmcpLnNsaWNlKDgsIC0xKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cyQ7XG4gICAgfSgpKS5qb2luKCcnKTtcbiAgICByZXR1cm4gbWVtb1trZXldID0ga2V5IGluIG1lbW9cbiAgICAgID8gbWVtb1trZXldXG4gICAgICA6IGYuYXBwbHkobnVsbCwgYXJncyk7XG4gIH07XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGN1cnJ5OiBjdXJyeSxcbiAgZmxpcDogZmxpcCxcbiAgZml4OiBmaXgsXG4gIGFwcGx5OiBhcHBseSxcbiAgb3Zlcjogb3ZlcixcbiAgbWVtb2l6ZTogbWVtb2l6ZVxufTtcbmZ1bmN0aW9uIGN1cnJ5JChmLCBib3VuZCl7XG4gIHZhciBjb250ZXh0LFxuICBfY3VycnkgPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgcmV0dXJuIGYubGVuZ3RoID4gMSA/IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgcGFyYW1zID0gYXJncyA/IGFyZ3MuY29uY2F0KCkgOiBbXTtcbiAgICAgIGNvbnRleHQgPSBib3VuZCA/IGNvbnRleHQgfHwgdGhpcyA6IHRoaXM7XG4gICAgICByZXR1cm4gcGFyYW1zLnB1c2guYXBwbHkocGFyYW1zLCBhcmd1bWVudHMpIDxcbiAgICAgICAgICBmLmxlbmd0aCAmJiBhcmd1bWVudHMubGVuZ3RoID9cbiAgICAgICAgX2N1cnJ5LmNhbGwoY29udGV4dCwgcGFyYW1zKSA6IGYuYXBwbHkoY29udGV4dCwgcGFyYW1zKTtcbiAgICB9IDogZjtcbiAgfTtcbiAgcmV0dXJuIF9jdXJyeSgpO1xufSIsIi8vIEdlbmVyYXRlZCBieSBMaXZlU2NyaXB0IDEuNi4wXG52YXIgZWFjaCwgbWFwLCBjb21wYWN0LCBmaWx0ZXIsIHJlamVjdCwgcmVtb3ZlLCBwYXJ0aXRpb24sIGZpbmQsIGhlYWQsIGZpcnN0LCB0YWlsLCBsYXN0LCBpbml0aWFsLCBlbXB0eSwgcmV2ZXJzZSwgdW5pcXVlLCB1bmlxdWVCeSwgZm9sZCwgZm9sZGwsIGZvbGQxLCBmb2xkbDEsIGZvbGRyLCBmb2xkcjEsIHVuZm9sZHIsIGNvbmNhdCwgY29uY2F0TWFwLCBmbGF0dGVuLCBkaWZmZXJlbmNlLCBpbnRlcnNlY3Rpb24sIHVuaW9uLCBjb3VudEJ5LCBncm91cEJ5LCBhbmRMaXN0LCBvckxpc3QsIGFueSwgYWxsLCBzb3J0LCBzb3J0V2l0aCwgc29ydEJ5LCBzdW0sIHByb2R1Y3QsIG1lYW4sIGF2ZXJhZ2UsIG1heGltdW0sIG1pbmltdW0sIG1heGltdW1CeSwgbWluaW11bUJ5LCBzY2FuLCBzY2FubCwgc2NhbjEsIHNjYW5sMSwgc2NhbnIsIHNjYW5yMSwgc2xpY2UsIHRha2UsIGRyb3AsIHNwbGl0QXQsIHRha2VXaGlsZSwgZHJvcFdoaWxlLCBzcGFuLCBicmVha0xpc3QsIHppcCwgemlwV2l0aCwgemlwQWxsLCB6aXBBbGxXaXRoLCBhdCwgZWxlbUluZGV4LCBlbGVtSW5kaWNlcywgZmluZEluZGV4LCBmaW5kSW5kaWNlcywgdG9TdHJpbmckID0ge30udG9TdHJpbmc7XG5lYWNoID0gY3VycnkkKGZ1bmN0aW9uKGYsIHhzKXtcbiAgdmFyIGkkLCBsZW4kLCB4O1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IHhzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeCA9IHhzW2kkXTtcbiAgICBmKHgpO1xuICB9XG4gIHJldHVybiB4cztcbn0pO1xubWFwID0gY3VycnkkKGZ1bmN0aW9uKGYsIHhzKXtcbiAgdmFyIGkkLCBsZW4kLCB4LCByZXN1bHRzJCA9IFtdO1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IHhzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeCA9IHhzW2kkXTtcbiAgICByZXN1bHRzJC5wdXNoKGYoeCkpO1xuICB9XG4gIHJldHVybiByZXN1bHRzJDtcbn0pO1xuY29tcGFjdCA9IGZ1bmN0aW9uKHhzKXtcbiAgdmFyIGkkLCBsZW4kLCB4LCByZXN1bHRzJCA9IFtdO1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IHhzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeCA9IHhzW2kkXTtcbiAgICBpZiAoeCkge1xuICAgICAgcmVzdWx0cyQucHVzaCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHMkO1xufTtcbmZpbHRlciA9IGN1cnJ5JChmdW5jdGlvbihmLCB4cyl7XG4gIHZhciBpJCwgbGVuJCwgeCwgcmVzdWx0cyQgPSBbXTtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSB4cy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIHggPSB4c1tpJF07XG4gICAgaWYgKGYoeCkpIHtcbiAgICAgIHJlc3VsdHMkLnB1c2goeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRzJDtcbn0pO1xucmVqZWN0ID0gY3VycnkkKGZ1bmN0aW9uKGYsIHhzKXtcbiAgdmFyIGkkLCBsZW4kLCB4LCByZXN1bHRzJCA9IFtdO1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IHhzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeCA9IHhzW2kkXTtcbiAgICBpZiAoIWYoeCkpIHtcbiAgICAgIHJlc3VsdHMkLnB1c2goeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRzJDtcbn0pO1xucmVtb3ZlID0gY3VycnkkKGZ1bmN0aW9uKGVsLCB4cyl7XG4gIHZhciBpLCB4JDtcbiAgaSA9IGVsZW1JbmRleChlbCwgeHMpO1xuICB4JCA9IHhzLnNsaWNlKCk7XG4gIGlmIChpICE9IG51bGwpIHtcbiAgICB4JC5zcGxpY2UoaSwgMSk7XG4gIH1cbiAgcmV0dXJuIHgkO1xufSk7XG5wYXJ0aXRpb24gPSBjdXJyeSQoZnVuY3Rpb24oZiwgeHMpe1xuICB2YXIgcGFzc2VkLCBmYWlsZWQsIGkkLCBsZW4kLCB4O1xuICBwYXNzZWQgPSBbXTtcbiAgZmFpbGVkID0gW107XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4ID0geHNbaSRdO1xuICAgIChmKHgpID8gcGFzc2VkIDogZmFpbGVkKS5wdXNoKHgpO1xuICB9XG4gIHJldHVybiBbcGFzc2VkLCBmYWlsZWRdO1xufSk7XG5maW5kID0gY3VycnkkKGZ1bmN0aW9uKGYsIHhzKXtcbiAgdmFyIGkkLCBsZW4kLCB4O1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IHhzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeCA9IHhzW2kkXTtcbiAgICBpZiAoZih4KSkge1xuICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9XG59KTtcbmhlYWQgPSBmaXJzdCA9IGZ1bmN0aW9uKHhzKXtcbiAgcmV0dXJuIHhzWzBdO1xufTtcbnRhaWwgPSBmdW5jdGlvbih4cyl7XG4gIGlmICgheHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiB4cy5zbGljZSgxKTtcbn07XG5sYXN0ID0gZnVuY3Rpb24oeHMpe1xuICByZXR1cm4geHNbeHMubGVuZ3RoIC0gMV07XG59O1xuaW5pdGlhbCA9IGZ1bmN0aW9uKHhzKXtcbiAgaWYgKCF4cy5sZW5ndGgpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuIHhzLnNsaWNlKDAsIC0xKTtcbn07XG5lbXB0eSA9IGZ1bmN0aW9uKHhzKXtcbiAgcmV0dXJuICF4cy5sZW5ndGg7XG59O1xucmV2ZXJzZSA9IGZ1bmN0aW9uKHhzKXtcbiAgcmV0dXJuIHhzLmNvbmNhdCgpLnJldmVyc2UoKTtcbn07XG51bmlxdWUgPSBmdW5jdGlvbih4cyl7XG4gIHZhciByZXN1bHQsIGkkLCBsZW4kLCB4O1xuICByZXN1bHQgPSBbXTtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSB4cy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIHggPSB4c1tpJF07XG4gICAgaWYgKCFpbiQoeCwgcmVzdWx0KSkge1xuICAgICAgcmVzdWx0LnB1c2goeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudW5pcXVlQnkgPSBjdXJyeSQoZnVuY3Rpb24oZiwgeHMpe1xuICB2YXIgc2VlbiwgaSQsIGxlbiQsIHgsIHZhbCwgcmVzdWx0cyQgPSBbXTtcbiAgc2VlbiA9IFtdO1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IHhzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeCA9IHhzW2kkXTtcbiAgICB2YWwgPSBmKHgpO1xuICAgIGlmIChpbiQodmFsLCBzZWVuKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHNlZW4ucHVzaCh2YWwpO1xuICAgIHJlc3VsdHMkLnB1c2goeCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHMkO1xufSk7XG5mb2xkID0gZm9sZGwgPSBjdXJyeSQoZnVuY3Rpb24oZiwgbWVtbywgeHMpe1xuICB2YXIgaSQsIGxlbiQsIHg7XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4ID0geHNbaSRdO1xuICAgIG1lbW8gPSBmKG1lbW8sIHgpO1xuICB9XG4gIHJldHVybiBtZW1vO1xufSk7XG5mb2xkMSA9IGZvbGRsMSA9IGN1cnJ5JChmdW5jdGlvbihmLCB4cyl7XG4gIHJldHVybiBmb2xkKGYsIHhzWzBdLCB4cy5zbGljZSgxKSk7XG59KTtcbmZvbGRyID0gY3VycnkkKGZ1bmN0aW9uKGYsIG1lbW8sIHhzKXtcbiAgdmFyIGkkLCB4O1xuICBmb3IgKGkkID0geHMubGVuZ3RoIC0gMTsgaSQgPj0gMDsgLS1pJCkge1xuICAgIHggPSB4c1tpJF07XG4gICAgbWVtbyA9IGYoeCwgbWVtbyk7XG4gIH1cbiAgcmV0dXJuIG1lbW87XG59KTtcbmZvbGRyMSA9IGN1cnJ5JChmdW5jdGlvbihmLCB4cyl7XG4gIHJldHVybiBmb2xkcihmLCB4c1t4cy5sZW5ndGggLSAxXSwgeHMuc2xpY2UoMCwgLTEpKTtcbn0pO1xudW5mb2xkciA9IGN1cnJ5JChmdW5jdGlvbihmLCBiKXtcbiAgdmFyIHJlc3VsdCwgeCwgdGhhdDtcbiAgcmVzdWx0ID0gW107XG4gIHggPSBiO1xuICB3aGlsZSAoKHRoYXQgPSBmKHgpKSAhPSBudWxsKSB7XG4gICAgcmVzdWx0LnB1c2godGhhdFswXSk7XG4gICAgeCA9IHRoYXRbMV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuY29uY2F0ID0gZnVuY3Rpb24oeHNzKXtcbiAgcmV0dXJuIFtdLmNvbmNhdC5hcHBseShbXSwgeHNzKTtcbn07XG5jb25jYXRNYXAgPSBjdXJyeSQoZnVuY3Rpb24oZiwgeHMpe1xuICB2YXIgeDtcbiAgcmV0dXJuIFtdLmNvbmNhdC5hcHBseShbXSwgKGZ1bmN0aW9uKCl7XG4gICAgdmFyIGkkLCByZWYkLCBsZW4kLCByZXN1bHRzJCA9IFtdO1xuICAgIGZvciAoaSQgPSAwLCBsZW4kID0gKHJlZiQgPSB4cykubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICAgIHggPSByZWYkW2kkXTtcbiAgICAgIHJlc3VsdHMkLnB1c2goZih4KSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzJDtcbiAgfSgpKSk7XG59KTtcbmZsYXR0ZW4gPSBmdW5jdGlvbih4cyl7XG4gIHZhciB4O1xuICByZXR1cm4gW10uY29uY2F0LmFwcGx5KFtdLCAoZnVuY3Rpb24oKXtcbiAgICB2YXIgaSQsIHJlZiQsIGxlbiQsIHJlc3VsdHMkID0gW107XG4gICAgZm9yIChpJCA9IDAsIGxlbiQgPSAocmVmJCA9IHhzKS5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgICAgeCA9IHJlZiRbaSRdO1xuICAgICAgaWYgKHRvU3RyaW5nJC5jYWxsKHgpLnNsaWNlKDgsIC0xKSA9PT0gJ0FycmF5Jykge1xuICAgICAgICByZXN1bHRzJC5wdXNoKGZsYXR0ZW4oeCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cyQucHVzaCh4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHMkO1xuICB9KCkpKTtcbn07XG5kaWZmZXJlbmNlID0gZnVuY3Rpb24oeHMpe1xuICB2YXIgeXNzLCByZXMkLCBpJCwgdG8kLCByZXN1bHRzLCBsZW4kLCB4LCBqJCwgbGVuMSQsIHlzO1xuICByZXMkID0gW107XG4gIGZvciAoaSQgPSAxLCB0byQgPSBhcmd1bWVudHMubGVuZ3RoOyBpJCA8IHRvJDsgKytpJCkge1xuICAgIHJlcyQucHVzaChhcmd1bWVudHNbaSRdKTtcbiAgfVxuICB5c3MgPSByZXMkO1xuICByZXN1bHRzID0gW107XG4gIG91dGVyOiBmb3IgKGkkID0gMCwgbGVuJCA9IHhzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeCA9IHhzW2kkXTtcbiAgICBmb3IgKGokID0gMCwgbGVuMSQgPSB5c3MubGVuZ3RoOyBqJCA8IGxlbjEkOyArK2okKSB7XG4gICAgICB5cyA9IHlzc1tqJF07XG4gICAgICBpZiAoaW4kKHgsIHlzKSkge1xuICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0cy5wdXNoKHgpO1xuICB9XG4gIHJldHVybiByZXN1bHRzO1xufTtcbmludGVyc2VjdGlvbiA9IGZ1bmN0aW9uKHhzKXtcbiAgdmFyIHlzcywgcmVzJCwgaSQsIHRvJCwgcmVzdWx0cywgbGVuJCwgeCwgaiQsIGxlbjEkLCB5cztcbiAgcmVzJCA9IFtdO1xuICBmb3IgKGkkID0gMSwgdG8kID0gYXJndW1lbnRzLmxlbmd0aDsgaSQgPCB0byQ7ICsraSQpIHtcbiAgICByZXMkLnB1c2goYXJndW1lbnRzW2kkXSk7XG4gIH1cbiAgeXNzID0gcmVzJDtcbiAgcmVzdWx0cyA9IFtdO1xuICBvdXRlcjogZm9yIChpJCA9IDAsIGxlbiQgPSB4cy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIHggPSB4c1tpJF07XG4gICAgZm9yIChqJCA9IDAsIGxlbjEkID0geXNzLmxlbmd0aDsgaiQgPCBsZW4xJDsgKytqJCkge1xuICAgICAgeXMgPSB5c3NbaiRdO1xuICAgICAgaWYgKCFpbiQoeCwgeXMpKSB7XG4gICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHRzLnB1c2goeCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHM7XG59O1xudW5pb24gPSBmdW5jdGlvbigpe1xuICB2YXIgeHNzLCByZXMkLCBpJCwgdG8kLCByZXN1bHRzLCBsZW4kLCB4cywgaiQsIGxlbjEkLCB4O1xuICByZXMkID0gW107XG4gIGZvciAoaSQgPSAwLCB0byQgPSBhcmd1bWVudHMubGVuZ3RoOyBpJCA8IHRvJDsgKytpJCkge1xuICAgIHJlcyQucHVzaChhcmd1bWVudHNbaSRdKTtcbiAgfVxuICB4c3MgPSByZXMkO1xuICByZXN1bHRzID0gW107XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHNzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeHMgPSB4c3NbaSRdO1xuICAgIGZvciAoaiQgPSAwLCBsZW4xJCA9IHhzLmxlbmd0aDsgaiQgPCBsZW4xJDsgKytqJCkge1xuICAgICAgeCA9IHhzW2okXTtcbiAgICAgIGlmICghaW4kKHgsIHJlc3VsdHMpKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHM7XG59O1xuY291bnRCeSA9IGN1cnJ5JChmdW5jdGlvbihmLCB4cyl7XG4gIHZhciByZXN1bHRzLCBpJCwgbGVuJCwgeCwga2V5O1xuICByZXN1bHRzID0ge307XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4ID0geHNbaSRdO1xuICAgIGtleSA9IGYoeCk7XG4gICAgaWYgKGtleSBpbiByZXN1bHRzKSB7XG4gICAgICByZXN1bHRzW2tleV0gKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0c1trZXldID0gMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHM7XG59KTtcbmdyb3VwQnkgPSBjdXJyeSQoZnVuY3Rpb24oZiwgeHMpe1xuICB2YXIgcmVzdWx0cywgaSQsIGxlbiQsIHgsIGtleTtcbiAgcmVzdWx0cyA9IHt9O1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IHhzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeCA9IHhzW2kkXTtcbiAgICBrZXkgPSBmKHgpO1xuICAgIGlmIChrZXkgaW4gcmVzdWx0cykge1xuICAgICAgcmVzdWx0c1trZXldLnB1c2goeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdHNba2V5XSA9IFt4XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHM7XG59KTtcbmFuZExpc3QgPSBmdW5jdGlvbih4cyl7XG4gIHZhciBpJCwgbGVuJCwgeDtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSB4cy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIHggPSB4c1tpJF07XG4gICAgaWYgKCF4KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbm9yTGlzdCA9IGZ1bmN0aW9uKHhzKXtcbiAgdmFyIGkkLCBsZW4kLCB4O1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IHhzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeCA9IHhzW2kkXTtcbiAgICBpZiAoeCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5hbnkgPSBjdXJyeSQoZnVuY3Rpb24oZiwgeHMpe1xuICB2YXIgaSQsIGxlbiQsIHg7XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4ID0geHNbaSRdO1xuICAgIGlmIChmKHgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSk7XG5hbGwgPSBjdXJyeSQoZnVuY3Rpb24oZiwgeHMpe1xuICB2YXIgaSQsIGxlbiQsIHg7XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4ID0geHNbaSRdO1xuICAgIGlmICghZih4KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn0pO1xuc29ydCA9IGZ1bmN0aW9uKHhzKXtcbiAgcmV0dXJuIHhzLmNvbmNhdCgpLnNvcnQoZnVuY3Rpb24oeCwgeSl7XG4gICAgaWYgKHggPiB5KSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKHggPCB5KSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSk7XG59O1xuc29ydFdpdGggPSBjdXJyeSQoZnVuY3Rpb24oZiwgeHMpe1xuICByZXR1cm4geHMuY29uY2F0KCkuc29ydChmKTtcbn0pO1xuc29ydEJ5ID0gY3VycnkkKGZ1bmN0aW9uKGYsIHhzKXtcbiAgcmV0dXJuIHhzLmNvbmNhdCgpLnNvcnQoZnVuY3Rpb24oeCwgeSl7XG4gICAgaWYgKGYoeCkgPiBmKHkpKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGYoeCkgPCBmKHkpKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSk7XG59KTtcbnN1bSA9IGZ1bmN0aW9uKHhzKXtcbiAgdmFyIHJlc3VsdCwgaSQsIGxlbiQsIHg7XG4gIHJlc3VsdCA9IDA7XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4ID0geHNbaSRdO1xuICAgIHJlc3VsdCArPSB4O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xucHJvZHVjdCA9IGZ1bmN0aW9uKHhzKXtcbiAgdmFyIHJlc3VsdCwgaSQsIGxlbiQsIHg7XG4gIHJlc3VsdCA9IDE7XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4ID0geHNbaSRdO1xuICAgIHJlc3VsdCAqPSB4O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xubWVhbiA9IGF2ZXJhZ2UgPSBmdW5jdGlvbih4cyl7XG4gIHZhciBzdW0sIGkkLCBsZW4kLCB4O1xuICBzdW0gPSAwO1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IHhzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeCA9IHhzW2kkXTtcbiAgICBzdW0gKz0geDtcbiAgfVxuICByZXR1cm4gc3VtIC8geHMubGVuZ3RoO1xufTtcbm1heGltdW0gPSBmdW5jdGlvbih4cyl7XG4gIHZhciBtYXgsIGkkLCByZWYkLCBsZW4kLCB4O1xuICBtYXggPSB4c1swXTtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSAocmVmJCA9IHhzLnNsaWNlKDEpKS5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIHggPSByZWYkW2kkXTtcbiAgICBpZiAoeCA+IG1heCkge1xuICAgICAgbWF4ID0geDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1heDtcbn07XG5taW5pbXVtID0gZnVuY3Rpb24oeHMpe1xuICB2YXIgbWluLCBpJCwgcmVmJCwgbGVuJCwgeDtcbiAgbWluID0geHNbMF07XG4gIGZvciAoaSQgPSAwLCBsZW4kID0gKHJlZiQgPSB4cy5zbGljZSgxKSkubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4ID0gcmVmJFtpJF07XG4gICAgaWYgKHggPCBtaW4pIHtcbiAgICAgIG1pbiA9IHg7XG4gICAgfVxuICB9XG4gIHJldHVybiBtaW47XG59O1xubWF4aW11bUJ5ID0gY3VycnkkKGZ1bmN0aW9uKGYsIHhzKXtcbiAgdmFyIG1heCwgaSQsIHJlZiQsIGxlbiQsIHg7XG4gIG1heCA9IHhzWzBdO1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IChyZWYkID0geHMuc2xpY2UoMSkpLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgeCA9IHJlZiRbaSRdO1xuICAgIGlmIChmKHgpID4gZihtYXgpKSB7XG4gICAgICBtYXggPSB4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWF4O1xufSk7XG5taW5pbXVtQnkgPSBjdXJyeSQoZnVuY3Rpb24oZiwgeHMpe1xuICB2YXIgbWluLCBpJCwgcmVmJCwgbGVuJCwgeDtcbiAgbWluID0geHNbMF07XG4gIGZvciAoaSQgPSAwLCBsZW4kID0gKHJlZiQgPSB4cy5zbGljZSgxKSkubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4ID0gcmVmJFtpJF07XG4gICAgaWYgKGYoeCkgPCBmKG1pbikpIHtcbiAgICAgIG1pbiA9IHg7XG4gICAgfVxuICB9XG4gIHJldHVybiBtaW47XG59KTtcbnNjYW4gPSBzY2FubCA9IGN1cnJ5JChmdW5jdGlvbihmLCBtZW1vLCB4cyl7XG4gIHZhciBsYXN0LCB4O1xuICBsYXN0ID0gbWVtbztcbiAgcmV0dXJuIFttZW1vXS5jb25jYXQoKGZ1bmN0aW9uKCl7XG4gICAgdmFyIGkkLCByZWYkLCBsZW4kLCByZXN1bHRzJCA9IFtdO1xuICAgIGZvciAoaSQgPSAwLCBsZW4kID0gKHJlZiQgPSB4cykubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICAgIHggPSByZWYkW2kkXTtcbiAgICAgIHJlc3VsdHMkLnB1c2gobGFzdCA9IGYobGFzdCwgeCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cyQ7XG4gIH0oKSkpO1xufSk7XG5zY2FuMSA9IHNjYW5sMSA9IGN1cnJ5JChmdW5jdGlvbihmLCB4cyl7XG4gIGlmICgheHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiBzY2FuKGYsIHhzWzBdLCB4cy5zbGljZSgxKSk7XG59KTtcbnNjYW5yID0gY3VycnkkKGZ1bmN0aW9uKGYsIG1lbW8sIHhzKXtcbiAgeHMgPSB4cy5jb25jYXQoKS5yZXZlcnNlKCk7XG4gIHJldHVybiBzY2FuKGYsIG1lbW8sIHhzKS5yZXZlcnNlKCk7XG59KTtcbnNjYW5yMSA9IGN1cnJ5JChmdW5jdGlvbihmLCB4cyl7XG4gIGlmICgheHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHhzID0geHMuY29uY2F0KCkucmV2ZXJzZSgpO1xuICByZXR1cm4gc2NhbihmLCB4c1swXSwgeHMuc2xpY2UoMSkpLnJldmVyc2UoKTtcbn0pO1xuc2xpY2UgPSBjdXJyeSQoZnVuY3Rpb24oeCwgeSwgeHMpe1xuICByZXR1cm4geHMuc2xpY2UoeCwgeSk7XG59KTtcbnRha2UgPSBjdXJyeSQoZnVuY3Rpb24obiwgeHMpe1xuICBpZiAobiA8PSAwKSB7XG4gICAgcmV0dXJuIHhzLnNsaWNlKDAsIDApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4cy5zbGljZSgwLCBuKTtcbiAgfVxufSk7XG5kcm9wID0gY3VycnkkKGZ1bmN0aW9uKG4sIHhzKXtcbiAgaWYgKG4gPD0gMCkge1xuICAgIHJldHVybiB4cztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geHMuc2xpY2Uobik7XG4gIH1cbn0pO1xuc3BsaXRBdCA9IGN1cnJ5JChmdW5jdGlvbihuLCB4cyl7XG4gIHJldHVybiBbdGFrZShuLCB4cyksIGRyb3AobiwgeHMpXTtcbn0pO1xudGFrZVdoaWxlID0gY3VycnkkKGZ1bmN0aW9uKHAsIHhzKXtcbiAgdmFyIGxlbiwgaTtcbiAgbGVuID0geHMubGVuZ3RoO1xuICBpZiAoIWxlbikge1xuICAgIHJldHVybiB4cztcbiAgfVxuICBpID0gMDtcbiAgd2hpbGUgKGkgPCBsZW4gJiYgcCh4c1tpXSkpIHtcbiAgICBpICs9IDE7XG4gIH1cbiAgcmV0dXJuIHhzLnNsaWNlKDAsIGkpO1xufSk7XG5kcm9wV2hpbGUgPSBjdXJyeSQoZnVuY3Rpb24ocCwgeHMpe1xuICB2YXIgbGVuLCBpO1xuICBsZW4gPSB4cy5sZW5ndGg7XG4gIGlmICghbGVuKSB7XG4gICAgcmV0dXJuIHhzO1xuICB9XG4gIGkgPSAwO1xuICB3aGlsZSAoaSA8IGxlbiAmJiBwKHhzW2ldKSkge1xuICAgIGkgKz0gMTtcbiAgfVxuICByZXR1cm4geHMuc2xpY2UoaSk7XG59KTtcbnNwYW4gPSBjdXJyeSQoZnVuY3Rpb24ocCwgeHMpe1xuICByZXR1cm4gW3Rha2VXaGlsZShwLCB4cyksIGRyb3BXaGlsZShwLCB4cyldO1xufSk7XG5icmVha0xpc3QgPSBjdXJyeSQoZnVuY3Rpb24ocCwgeHMpe1xuICByZXR1cm4gc3Bhbihjb21wb3NlJChwLCBub3QkKSwgeHMpO1xufSk7XG56aXAgPSBjdXJyeSQoZnVuY3Rpb24oeHMsIHlzKXtcbiAgdmFyIHJlc3VsdCwgbGVuLCBpJCwgbGVuJCwgaSwgeDtcbiAgcmVzdWx0ID0gW107XG4gIGxlbiA9IHlzLmxlbmd0aDtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSB4cy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIGkgPSBpJDtcbiAgICB4ID0geHNbaSRdO1xuICAgIGlmIChpID09PSBsZW4pIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXN1bHQucHVzaChbeCwgeXNbaV1dKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG56aXBXaXRoID0gY3VycnkkKGZ1bmN0aW9uKGYsIHhzLCB5cyl7XG4gIHZhciByZXN1bHQsIGxlbiwgaSQsIGxlbiQsIGksIHg7XG4gIHJlc3VsdCA9IFtdO1xuICBsZW4gPSB5cy5sZW5ndGg7XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICBpID0gaSQ7XG4gICAgeCA9IHhzW2kkXTtcbiAgICBpZiAoaSA9PT0gbGVuKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcmVzdWx0LnB1c2goZih4LCB5c1tpXSkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbnppcEFsbCA9IGZ1bmN0aW9uKCl7XG4gIHZhciB4c3MsIHJlcyQsIGkkLCB0byQsIG1pbkxlbmd0aCwgbGVuJCwgeHMsIHJlZiQsIGksIGxyZXN1bHQkLCBqJCwgcmVzdWx0cyQgPSBbXTtcbiAgcmVzJCA9IFtdO1xuICBmb3IgKGkkID0gMCwgdG8kID0gYXJndW1lbnRzLmxlbmd0aDsgaSQgPCB0byQ7ICsraSQpIHtcbiAgICByZXMkLnB1c2goYXJndW1lbnRzW2kkXSk7XG4gIH1cbiAgeHNzID0gcmVzJDtcbiAgbWluTGVuZ3RoID0gdW5kZWZpbmVkO1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IHhzcy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIHhzID0geHNzW2kkXTtcbiAgICBtaW5MZW5ndGggPD0gKHJlZiQgPSB4cy5sZW5ndGgpIHx8IChtaW5MZW5ndGggPSByZWYkKTtcbiAgfVxuICBmb3IgKGkkID0gMDsgaSQgPCBtaW5MZW5ndGg7ICsraSQpIHtcbiAgICBpID0gaSQ7XG4gICAgbHJlc3VsdCQgPSBbXTtcbiAgICBmb3IgKGokID0gMCwgbGVuJCA9IHhzcy5sZW5ndGg7IGokIDwgbGVuJDsgKytqJCkge1xuICAgICAgeHMgPSB4c3NbaiRdO1xuICAgICAgbHJlc3VsdCQucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJlc3VsdHMkLnB1c2gobHJlc3VsdCQpO1xuICB9XG4gIHJldHVybiByZXN1bHRzJDtcbn07XG56aXBBbGxXaXRoID0gZnVuY3Rpb24oZil7XG4gIHZhciB4c3MsIHJlcyQsIGkkLCB0byQsIG1pbkxlbmd0aCwgbGVuJCwgeHMsIHJlZiQsIGksIHJlc3VsdHMkID0gW107XG4gIHJlcyQgPSBbXTtcbiAgZm9yIChpJCA9IDEsIHRvJCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkkIDwgdG8kOyArK2kkKSB7XG4gICAgcmVzJC5wdXNoKGFyZ3VtZW50c1tpJF0pO1xuICB9XG4gIHhzcyA9IHJlcyQ7XG4gIG1pbkxlbmd0aCA9IHVuZGVmaW5lZDtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSB4c3MubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICB4cyA9IHhzc1tpJF07XG4gICAgbWluTGVuZ3RoIDw9IChyZWYkID0geHMubGVuZ3RoKSB8fCAobWluTGVuZ3RoID0gcmVmJCk7XG4gIH1cbiAgZm9yIChpJCA9IDA7IGkkIDwgbWluTGVuZ3RoOyArK2kkKSB7XG4gICAgaSA9IGkkO1xuICAgIHJlc3VsdHMkLnB1c2goZi5hcHBseShudWxsLCAoZm4kKCkpKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHMkO1xuICBmdW5jdGlvbiBmbiQoKXtcbiAgICB2YXIgaSQsIHJlZiQsIGxlbiQsIHJlc3VsdHMkID0gW107XG4gICAgZm9yIChpJCA9IDAsIGxlbiQgPSAocmVmJCA9IHhzcykubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICAgIHhzID0gcmVmJFtpJF07XG4gICAgICByZXN1bHRzJC5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHMkO1xuICB9XG59O1xuYXQgPSBjdXJyeSQoZnVuY3Rpb24obiwgeHMpe1xuICBpZiAobiA8IDApIHtcbiAgICByZXR1cm4geHNbeHMubGVuZ3RoICsgbl07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHhzW25dO1xuICB9XG59KTtcbmVsZW1JbmRleCA9IGN1cnJ5JChmdW5jdGlvbihlbCwgeHMpe1xuICB2YXIgaSQsIGxlbiQsIGksIHg7XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICBpID0gaSQ7XG4gICAgeCA9IHhzW2kkXTtcbiAgICBpZiAoeCA9PT0gZWwpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxufSk7XG5lbGVtSW5kaWNlcyA9IGN1cnJ5JChmdW5jdGlvbihlbCwgeHMpe1xuICB2YXIgaSQsIGxlbiQsIGksIHgsIHJlc3VsdHMkID0gW107XG4gIGZvciAoaSQgPSAwLCBsZW4kID0geHMubGVuZ3RoOyBpJCA8IGxlbiQ7ICsraSQpIHtcbiAgICBpID0gaSQ7XG4gICAgeCA9IHhzW2kkXTtcbiAgICBpZiAoeCA9PT0gZWwpIHtcbiAgICAgIHJlc3VsdHMkLnB1c2goaSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRzJDtcbn0pO1xuZmluZEluZGV4ID0gY3VycnkkKGZ1bmN0aW9uKGYsIHhzKXtcbiAgdmFyIGkkLCBsZW4kLCBpLCB4O1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IHhzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgaSA9IGkkO1xuICAgIHggPSB4c1tpJF07XG4gICAgaWYgKGYoeCkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxufSk7XG5maW5kSW5kaWNlcyA9IGN1cnJ5JChmdW5jdGlvbihmLCB4cyl7XG4gIHZhciBpJCwgbGVuJCwgaSwgeCwgcmVzdWx0cyQgPSBbXTtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSB4cy5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIGkgPSBpJDtcbiAgICB4ID0geHNbaSRdO1xuICAgIGlmIChmKHgpKSB7XG4gICAgICByZXN1bHRzJC5wdXNoKGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0cyQ7XG59KTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBlYWNoOiBlYWNoLFxuICBtYXA6IG1hcCxcbiAgZmlsdGVyOiBmaWx0ZXIsXG4gIGNvbXBhY3Q6IGNvbXBhY3QsXG4gIHJlamVjdDogcmVqZWN0LFxuICByZW1vdmU6IHJlbW92ZSxcbiAgcGFydGl0aW9uOiBwYXJ0aXRpb24sXG4gIGZpbmQ6IGZpbmQsXG4gIGhlYWQ6IGhlYWQsXG4gIGZpcnN0OiBmaXJzdCxcbiAgdGFpbDogdGFpbCxcbiAgbGFzdDogbGFzdCxcbiAgaW5pdGlhbDogaW5pdGlhbCxcbiAgZW1wdHk6IGVtcHR5LFxuICByZXZlcnNlOiByZXZlcnNlLFxuICBkaWZmZXJlbmNlOiBkaWZmZXJlbmNlLFxuICBpbnRlcnNlY3Rpb246IGludGVyc2VjdGlvbixcbiAgdW5pb246IHVuaW9uLFxuICBjb3VudEJ5OiBjb3VudEJ5LFxuICBncm91cEJ5OiBncm91cEJ5LFxuICBmb2xkOiBmb2xkLFxuICBmb2xkMTogZm9sZDEsXG4gIGZvbGRsOiBmb2xkbCxcbiAgZm9sZGwxOiBmb2xkbDEsXG4gIGZvbGRyOiBmb2xkcixcbiAgZm9sZHIxOiBmb2xkcjEsXG4gIHVuZm9sZHI6IHVuZm9sZHIsXG4gIGFuZExpc3Q6IGFuZExpc3QsXG4gIG9yTGlzdDogb3JMaXN0LFxuICBhbnk6IGFueSxcbiAgYWxsOiBhbGwsXG4gIHVuaXF1ZTogdW5pcXVlLFxuICB1bmlxdWVCeTogdW5pcXVlQnksXG4gIHNvcnQ6IHNvcnQsXG4gIHNvcnRXaXRoOiBzb3J0V2l0aCxcbiAgc29ydEJ5OiBzb3J0QnksXG4gIHN1bTogc3VtLFxuICBwcm9kdWN0OiBwcm9kdWN0LFxuICBtZWFuOiBtZWFuLFxuICBhdmVyYWdlOiBhdmVyYWdlLFxuICBjb25jYXQ6IGNvbmNhdCxcbiAgY29uY2F0TWFwOiBjb25jYXRNYXAsXG4gIGZsYXR0ZW46IGZsYXR0ZW4sXG4gIG1heGltdW06IG1heGltdW0sXG4gIG1pbmltdW06IG1pbmltdW0sXG4gIG1heGltdW1CeTogbWF4aW11bUJ5LFxuICBtaW5pbXVtQnk6IG1pbmltdW1CeSxcbiAgc2Nhbjogc2NhbixcbiAgc2NhbjE6IHNjYW4xLFxuICBzY2FubDogc2NhbmwsXG4gIHNjYW5sMTogc2NhbmwxLFxuICBzY2Fucjogc2NhbnIsXG4gIHNjYW5yMTogc2NhbnIxLFxuICBzbGljZTogc2xpY2UsXG4gIHRha2U6IHRha2UsXG4gIGRyb3A6IGRyb3AsXG4gIHNwbGl0QXQ6IHNwbGl0QXQsXG4gIHRha2VXaGlsZTogdGFrZVdoaWxlLFxuICBkcm9wV2hpbGU6IGRyb3BXaGlsZSxcbiAgc3Bhbjogc3BhbixcbiAgYnJlYWtMaXN0OiBicmVha0xpc3QsXG4gIHppcDogemlwLFxuICB6aXBXaXRoOiB6aXBXaXRoLFxuICB6aXBBbGw6IHppcEFsbCxcbiAgemlwQWxsV2l0aDogemlwQWxsV2l0aCxcbiAgYXQ6IGF0LFxuICBlbGVtSW5kZXg6IGVsZW1JbmRleCxcbiAgZWxlbUluZGljZXM6IGVsZW1JbmRpY2VzLFxuICBmaW5kSW5kZXg6IGZpbmRJbmRleCxcbiAgZmluZEluZGljZXM6IGZpbmRJbmRpY2VzXG59O1xuZnVuY3Rpb24gY3VycnkkKGYsIGJvdW5kKXtcbiAgdmFyIGNvbnRleHQsXG4gIF9jdXJyeSA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICByZXR1cm4gZi5sZW5ndGggPiAxID8gZnVuY3Rpb24oKXtcbiAgICAgIHZhciBwYXJhbXMgPSBhcmdzID8gYXJncy5jb25jYXQoKSA6IFtdO1xuICAgICAgY29udGV4dCA9IGJvdW5kID8gY29udGV4dCB8fCB0aGlzIDogdGhpcztcbiAgICAgIHJldHVybiBwYXJhbXMucHVzaC5hcHBseShwYXJhbXMsIGFyZ3VtZW50cykgPFxuICAgICAgICAgIGYubGVuZ3RoICYmIGFyZ3VtZW50cy5sZW5ndGggP1xuICAgICAgICBfY3VycnkuY2FsbChjb250ZXh0LCBwYXJhbXMpIDogZi5hcHBseShjb250ZXh0LCBwYXJhbXMpO1xuICAgIH0gOiBmO1xuICB9O1xuICByZXR1cm4gX2N1cnJ5KCk7XG59XG5mdW5jdGlvbiBpbiQoeCwgeHMpe1xuICB2YXIgaSA9IC0xLCBsID0geHMubGVuZ3RoID4+PiAwO1xuICB3aGlsZSAoKytpIDwgbCkgaWYgKHggPT09IHhzW2ldKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gY29tcG9zZSQoKSB7XG4gIHZhciBmdW5jdGlvbnMgPSBhcmd1bWVudHM7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSwgcmVzdWx0O1xuICAgIHJlc3VsdCA9IGZ1bmN0aW9uc1swXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGZvciAoaSA9IDE7IGkgPCBmdW5jdGlvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHJlc3VsdCA9IGZ1bmN0aW9uc1tpXShyZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuZnVuY3Rpb24gbm90JCh4KXsgcmV0dXJuICF4OyB9IiwiLy8gR2VuZXJhdGVkIGJ5IExpdmVTY3JpcHQgMS42LjBcbnZhciBtYXgsIG1pbiwgbmVnYXRlLCBhYnMsIHNpZ251bSwgcXVvdCwgcmVtLCBkaXYsIG1vZCwgcmVjaXAsIHBpLCB0YXUsIGV4cCwgc3FydCwgbG4sIHBvdywgc2luLCB0YW4sIGNvcywgYXNpbiwgYWNvcywgYXRhbiwgYXRhbjIsIHRydW5jYXRlLCByb3VuZCwgY2VpbGluZywgZmxvb3IsIGlzSXROYU4sIGV2ZW4sIG9kZCwgZ2NkLCBsY207XG5tYXggPSBjdXJyeSQoZnVuY3Rpb24oeCQsIHkkKXtcbiAgcmV0dXJuIHgkID4geSQgPyB4JCA6IHkkO1xufSk7XG5taW4gPSBjdXJyeSQoZnVuY3Rpb24oeCQsIHkkKXtcbiAgcmV0dXJuIHgkIDwgeSQgPyB4JCA6IHkkO1xufSk7XG5uZWdhdGUgPSBmdW5jdGlvbih4KXtcbiAgcmV0dXJuIC14O1xufTtcbmFicyA9IE1hdGguYWJzO1xuc2lnbnVtID0gZnVuY3Rpb24oeCl7XG4gIGlmICh4IDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmICh4ID4gMCkge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59O1xucXVvdCA9IGN1cnJ5JChmdW5jdGlvbih4LCB5KXtcbiAgcmV0dXJuIH5+KHggLyB5KTtcbn0pO1xucmVtID0gY3VycnkkKGZ1bmN0aW9uKHgkLCB5JCl7XG4gIHJldHVybiB4JCAlIHkkO1xufSk7XG5kaXYgPSBjdXJyeSQoZnVuY3Rpb24oeCwgeSl7XG4gIHJldHVybiBNYXRoLmZsb29yKHggLyB5KTtcbn0pO1xubW9kID0gY3VycnkkKGZ1bmN0aW9uKHgkLCB5JCl7XG4gIHZhciByZWYkO1xuICByZXR1cm4gKCh4JCkgJSAocmVmJCA9IHkkKSArIHJlZiQpICUgcmVmJDtcbn0pO1xucmVjaXAgPSAoZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gMSAvIGl0O1xufSk7XG5waSA9IE1hdGguUEk7XG50YXUgPSBwaSAqIDI7XG5leHAgPSBNYXRoLmV4cDtcbnNxcnQgPSBNYXRoLnNxcnQ7XG5sbiA9IE1hdGgubG9nO1xucG93ID0gY3VycnkkKGZ1bmN0aW9uKHgkLCB5JCl7XG4gIHJldHVybiBNYXRoLnBvdyh4JCwgeSQpO1xufSk7XG5zaW4gPSBNYXRoLnNpbjtcbnRhbiA9IE1hdGgudGFuO1xuY29zID0gTWF0aC5jb3M7XG5hc2luID0gTWF0aC5hc2luO1xuYWNvcyA9IE1hdGguYWNvcztcbmF0YW4gPSBNYXRoLmF0YW47XG5hdGFuMiA9IGN1cnJ5JChmdW5jdGlvbih4LCB5KXtcbiAgcmV0dXJuIE1hdGguYXRhbjIoeCwgeSk7XG59KTtcbnRydW5jYXRlID0gZnVuY3Rpb24oeCl7XG4gIHJldHVybiB+fng7XG59O1xucm91bmQgPSBNYXRoLnJvdW5kO1xuY2VpbGluZyA9IE1hdGguY2VpbDtcbmZsb29yID0gTWF0aC5mbG9vcjtcbmlzSXROYU4gPSBmdW5jdGlvbih4KXtcbiAgcmV0dXJuIHggIT09IHg7XG59O1xuZXZlbiA9IGZ1bmN0aW9uKHgpe1xuICByZXR1cm4geCAlIDIgPT09IDA7XG59O1xub2RkID0gZnVuY3Rpb24oeCl7XG4gIHJldHVybiB4ICUgMiAhPT0gMDtcbn07XG5nY2QgPSBjdXJyeSQoZnVuY3Rpb24oeCwgeSl7XG4gIHZhciB6O1xuICB4ID0gTWF0aC5hYnMoeCk7XG4gIHkgPSBNYXRoLmFicyh5KTtcbiAgd2hpbGUgKHkgIT09IDApIHtcbiAgICB6ID0geCAlIHk7XG4gICAgeCA9IHk7XG4gICAgeSA9IHo7XG4gIH1cbiAgcmV0dXJuIHg7XG59KTtcbmxjbSA9IGN1cnJ5JChmdW5jdGlvbih4LCB5KXtcbiAgcmV0dXJuIE1hdGguYWJzKE1hdGguZmxvb3IoeCAvIGdjZCh4LCB5KSAqIHkpKTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1heDogbWF4LFxuICBtaW46IG1pbixcbiAgbmVnYXRlOiBuZWdhdGUsXG4gIGFiczogYWJzLFxuICBzaWdudW06IHNpZ251bSxcbiAgcXVvdDogcXVvdCxcbiAgcmVtOiByZW0sXG4gIGRpdjogZGl2LFxuICBtb2Q6IG1vZCxcbiAgcmVjaXA6IHJlY2lwLFxuICBwaTogcGksXG4gIHRhdTogdGF1LFxuICBleHA6IGV4cCxcbiAgc3FydDogc3FydCxcbiAgbG46IGxuLFxuICBwb3c6IHBvdyxcbiAgc2luOiBzaW4sXG4gIHRhbjogdGFuLFxuICBjb3M6IGNvcyxcbiAgYWNvczogYWNvcyxcbiAgYXNpbjogYXNpbixcbiAgYXRhbjogYXRhbixcbiAgYXRhbjI6IGF0YW4yLFxuICB0cnVuY2F0ZTogdHJ1bmNhdGUsXG4gIHJvdW5kOiByb3VuZCxcbiAgY2VpbGluZzogY2VpbGluZyxcbiAgZmxvb3I6IGZsb29yLFxuICBpc0l0TmFOOiBpc0l0TmFOLFxuICBldmVuOiBldmVuLFxuICBvZGQ6IG9kZCxcbiAgZ2NkOiBnY2QsXG4gIGxjbTogbGNtXG59O1xuZnVuY3Rpb24gY3VycnkkKGYsIGJvdW5kKXtcbiAgdmFyIGNvbnRleHQsXG4gIF9jdXJyeSA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICByZXR1cm4gZi5sZW5ndGggPiAxID8gZnVuY3Rpb24oKXtcbiAgICAgIHZhciBwYXJhbXMgPSBhcmdzID8gYXJncy5jb25jYXQoKSA6IFtdO1xuICAgICAgY29udGV4dCA9IGJvdW5kID8gY29udGV4dCB8fCB0aGlzIDogdGhpcztcbiAgICAgIHJldHVybiBwYXJhbXMucHVzaC5hcHBseShwYXJhbXMsIGFyZ3VtZW50cykgPFxuICAgICAgICAgIGYubGVuZ3RoICYmIGFyZ3VtZW50cy5sZW5ndGggP1xuICAgICAgICBfY3VycnkuY2FsbChjb250ZXh0LCBwYXJhbXMpIDogZi5hcHBseShjb250ZXh0LCBwYXJhbXMpO1xuICAgIH0gOiBmO1xuICB9O1xuICByZXR1cm4gX2N1cnJ5KCk7XG59IiwiLy8gR2VuZXJhdGVkIGJ5IExpdmVTY3JpcHQgMS42LjBcbnZhciB2YWx1ZXMsIGtleXMsIHBhaXJzVG9PYmosIG9ialRvUGFpcnMsIGxpc3RzVG9PYmosIG9ialRvTGlzdHMsIGVtcHR5LCBlYWNoLCBtYXAsIGNvbXBhY3QsIGZpbHRlciwgcmVqZWN0LCBwYXJ0aXRpb24sIGZpbmQ7XG52YWx1ZXMgPSBmdW5jdGlvbihvYmplY3Qpe1xuICB2YXIgaSQsIHgsIHJlc3VsdHMkID0gW107XG4gIGZvciAoaSQgaW4gb2JqZWN0KSB7XG4gICAgeCA9IG9iamVjdFtpJF07XG4gICAgcmVzdWx0cyQucHVzaCh4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cyQ7XG59O1xua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCl7XG4gIHZhciB4LCByZXN1bHRzJCA9IFtdO1xuICBmb3IgKHggaW4gb2JqZWN0KSB7XG4gICAgcmVzdWx0cyQucHVzaCh4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cyQ7XG59O1xucGFpcnNUb09iaiA9IGZ1bmN0aW9uKG9iamVjdCl7XG4gIHZhciBpJCwgbGVuJCwgeCwgcmVzdWx0T2JqJCA9IHt9O1xuICBmb3IgKGkkID0gMCwgbGVuJCA9IG9iamVjdC5sZW5ndGg7IGkkIDwgbGVuJDsgKytpJCkge1xuICAgIHggPSBvYmplY3RbaSRdO1xuICAgIHJlc3VsdE9iaiRbeFswXV0gPSB4WzFdO1xuICB9XG4gIHJldHVybiByZXN1bHRPYmokO1xufTtcbm9ialRvUGFpcnMgPSBmdW5jdGlvbihvYmplY3Qpe1xuICB2YXIga2V5LCB2YWx1ZSwgcmVzdWx0cyQgPSBbXTtcbiAgZm9yIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgdmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgICByZXN1bHRzJC5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHMkO1xufTtcbmxpc3RzVG9PYmogPSBjdXJyeSQoZnVuY3Rpb24oa2V5cywgdmFsdWVzKXtcbiAgdmFyIGkkLCBsZW4kLCBpLCBrZXksIHJlc3VsdE9iaiQgPSB7fTtcbiAgZm9yIChpJCA9IDAsIGxlbiQgPSBrZXlzLmxlbmd0aDsgaSQgPCBsZW4kOyArK2kkKSB7XG4gICAgaSA9IGkkO1xuICAgIGtleSA9IGtleXNbaSRdO1xuICAgIHJlc3VsdE9iaiRba2V5XSA9IHZhbHVlc1tpXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0T2JqJDtcbn0pO1xub2JqVG9MaXN0cyA9IGZ1bmN0aW9uKG9iamVjdCl7XG4gIHZhciBrZXlzLCB2YWx1ZXMsIGtleSwgdmFsdWU7XG4gIGtleXMgPSBbXTtcbiAgdmFsdWVzID0gW107XG4gIGZvciAoa2V5IGluIG9iamVjdCkge1xuICAgIHZhbHVlID0gb2JqZWN0W2tleV07XG4gICAga2V5cy5wdXNoKGtleSk7XG4gICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICB9XG4gIHJldHVybiBba2V5cywgdmFsdWVzXTtcbn07XG5lbXB0eSA9IGZ1bmN0aW9uKG9iamVjdCl7XG4gIHZhciB4O1xuICBmb3IgKHggaW4gb2JqZWN0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbmVhY2ggPSBjdXJyeSQoZnVuY3Rpb24oZiwgb2JqZWN0KXtcbiAgdmFyIGkkLCB4O1xuICBmb3IgKGkkIGluIG9iamVjdCkge1xuICAgIHggPSBvYmplY3RbaSRdO1xuICAgIGYoeCk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn0pO1xubWFwID0gY3VycnkkKGZ1bmN0aW9uKGYsIG9iamVjdCl7XG4gIHZhciBrLCB4LCByZXN1bHRPYmokID0ge307XG4gIGZvciAoayBpbiBvYmplY3QpIHtcbiAgICB4ID0gb2JqZWN0W2tdO1xuICAgIHJlc3VsdE9iaiRba10gPSBmKHgpO1xuICB9XG4gIHJldHVybiByZXN1bHRPYmokO1xufSk7XG5jb21wYWN0ID0gZnVuY3Rpb24ob2JqZWN0KXtcbiAgdmFyIGssIHgsIHJlc3VsdE9iaiQgPSB7fTtcbiAgZm9yIChrIGluIG9iamVjdCkge1xuICAgIHggPSBvYmplY3Rba107XG4gICAgaWYgKHgpIHtcbiAgICAgIHJlc3VsdE9iaiRba10gPSB4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0T2JqJDtcbn07XG5maWx0ZXIgPSBjdXJyeSQoZnVuY3Rpb24oZiwgb2JqZWN0KXtcbiAgdmFyIGssIHgsIHJlc3VsdE9iaiQgPSB7fTtcbiAgZm9yIChrIGluIG9iamVjdCkge1xuICAgIHggPSBvYmplY3Rba107XG4gICAgaWYgKGYoeCkpIHtcbiAgICAgIHJlc3VsdE9iaiRba10gPSB4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0T2JqJDtcbn0pO1xucmVqZWN0ID0gY3VycnkkKGZ1bmN0aW9uKGYsIG9iamVjdCl7XG4gIHZhciBrLCB4LCByZXN1bHRPYmokID0ge307XG4gIGZvciAoayBpbiBvYmplY3QpIHtcbiAgICB4ID0gb2JqZWN0W2tdO1xuICAgIGlmICghZih4KSkge1xuICAgICAgcmVzdWx0T2JqJFtrXSA9IHg7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRPYmokO1xufSk7XG5wYXJ0aXRpb24gPSBjdXJyeSQoZnVuY3Rpb24oZiwgb2JqZWN0KXtcbiAgdmFyIHBhc3NlZCwgZmFpbGVkLCBrLCB4O1xuICBwYXNzZWQgPSB7fTtcbiAgZmFpbGVkID0ge307XG4gIGZvciAoayBpbiBvYmplY3QpIHtcbiAgICB4ID0gb2JqZWN0W2tdO1xuICAgIChmKHgpID8gcGFzc2VkIDogZmFpbGVkKVtrXSA9IHg7XG4gIH1cbiAgcmV0dXJuIFtwYXNzZWQsIGZhaWxlZF07XG59KTtcbmZpbmQgPSBjdXJyeSQoZnVuY3Rpb24oZiwgb2JqZWN0KXtcbiAgdmFyIGkkLCB4O1xuICBmb3IgKGkkIGluIG9iamVjdCkge1xuICAgIHggPSBvYmplY3RbaSRdO1xuICAgIGlmIChmKHgpKSB7XG4gICAgICByZXR1cm4geDtcbiAgICB9XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHZhbHVlczogdmFsdWVzLFxuICBrZXlzOiBrZXlzLFxuICBwYWlyc1RvT2JqOiBwYWlyc1RvT2JqLFxuICBvYmpUb1BhaXJzOiBvYmpUb1BhaXJzLFxuICBsaXN0c1RvT2JqOiBsaXN0c1RvT2JqLFxuICBvYmpUb0xpc3RzOiBvYmpUb0xpc3RzLFxuICBlbXB0eTogZW1wdHksXG4gIGVhY2g6IGVhY2gsXG4gIG1hcDogbWFwLFxuICBmaWx0ZXI6IGZpbHRlcixcbiAgY29tcGFjdDogY29tcGFjdCxcbiAgcmVqZWN0OiByZWplY3QsXG4gIHBhcnRpdGlvbjogcGFydGl0aW9uLFxuICBmaW5kOiBmaW5kXG59O1xuZnVuY3Rpb24gY3VycnkkKGYsIGJvdW5kKXtcbiAgdmFyIGNvbnRleHQsXG4gIF9jdXJyeSA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICByZXR1cm4gZi5sZW5ndGggPiAxID8gZnVuY3Rpb24oKXtcbiAgICAgIHZhciBwYXJhbXMgPSBhcmdzID8gYXJncy5jb25jYXQoKSA6IFtdO1xuICAgICAgY29udGV4dCA9IGJvdW5kID8gY29udGV4dCB8fCB0aGlzIDogdGhpcztcbiAgICAgIHJldHVybiBwYXJhbXMucHVzaC5hcHBseShwYXJhbXMsIGFyZ3VtZW50cykgPFxuICAgICAgICAgIGYubGVuZ3RoICYmIGFyZ3VtZW50cy5sZW5ndGggP1xuICAgICAgICBfY3VycnkuY2FsbChjb250ZXh0LCBwYXJhbXMpIDogZi5hcHBseShjb250ZXh0LCBwYXJhbXMpO1xuICAgIH0gOiBmO1xuICB9O1xuICByZXR1cm4gX2N1cnJ5KCk7XG59IiwiLy8gR2VuZXJhdGVkIGJ5IExpdmVTY3JpcHQgMS42LjBcbnZhciBzcGxpdCwgam9pbiwgbGluZXMsIHVubGluZXMsIHdvcmRzLCB1bndvcmRzLCBjaGFycywgdW5jaGFycywgcmV2ZXJzZSwgcmVwZWF0LCBjYXBpdGFsaXplLCBjYW1lbGl6ZSwgZGFzaGVyaXplO1xuc3BsaXQgPSBjdXJyeSQoZnVuY3Rpb24oc2VwLCBzdHIpe1xuICByZXR1cm4gc3RyLnNwbGl0KHNlcCk7XG59KTtcbmpvaW4gPSBjdXJyeSQoZnVuY3Rpb24oc2VwLCB4cyl7XG4gIHJldHVybiB4cy5qb2luKHNlcCk7XG59KTtcbmxpbmVzID0gZnVuY3Rpb24oc3RyKXtcbiAgaWYgKCFzdHIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBzdHIuc3BsaXQoJ1xcbicpO1xufTtcbnVubGluZXMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdC5qb2luKCdcXG4nKTtcbn07XG53b3JkcyA9IGZ1bmN0aW9uKHN0cil7XG4gIGlmICghc3RyLmxlbmd0aCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICByZXR1cm4gc3RyLnNwbGl0KC9bIF0rLyk7XG59O1xudW53b3JkcyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0LmpvaW4oJyAnKTtcbn07XG5jaGFycyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0LnNwbGl0KCcnKTtcbn07XG51bmNoYXJzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQuam9pbignJyk7XG59O1xucmV2ZXJzZSA9IGZ1bmN0aW9uKHN0cil7XG4gIHJldHVybiBzdHIuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcbn07XG5yZXBlYXQgPSBjdXJyeSQoZnVuY3Rpb24obiwgc3RyKXtcbiAgdmFyIHJlc3VsdCwgaSQ7XG4gIHJlc3VsdCA9ICcnO1xuICBmb3IgKGkkID0gMDsgaSQgPCBuOyArK2kkKSB7XG4gICAgcmVzdWx0ICs9IHN0cjtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG5jYXBpdGFsaXplID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn07XG5jYW1lbGl6ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0LnJlcGxhY2UoL1stX10rKC4pPy9nLCBmdW5jdGlvbihhcmckLCBjKXtcbiAgICByZXR1cm4gKGMgIT0gbnVsbCA/IGMgOiAnJykudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59O1xuZGFzaGVyaXplID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW14tQS1aXSkoW0EtWl0rKS9nLCBmdW5jdGlvbihhcmckLCBsb3dlciwgdXBwZXIpe1xuICAgIHJldHVybiBsb3dlciArIFwiLVwiICsgKHVwcGVyLmxlbmd0aCA+IDFcbiAgICAgID8gdXBwZXJcbiAgICAgIDogdXBwZXIudG9Mb3dlckNhc2UoKSk7XG4gIH0pLnJlcGxhY2UoL14oW0EtWl0rKS8sIGZ1bmN0aW9uKGFyZyQsIHVwcGVyKXtcbiAgICBpZiAodXBwZXIubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIHVwcGVyICsgXCItXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cHBlci50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgfSk7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNwbGl0OiBzcGxpdCxcbiAgam9pbjogam9pbixcbiAgbGluZXM6IGxpbmVzLFxuICB1bmxpbmVzOiB1bmxpbmVzLFxuICB3b3Jkczogd29yZHMsXG4gIHVud29yZHM6IHVud29yZHMsXG4gIGNoYXJzOiBjaGFycyxcbiAgdW5jaGFyczogdW5jaGFycyxcbiAgcmV2ZXJzZTogcmV2ZXJzZSxcbiAgcmVwZWF0OiByZXBlYXQsXG4gIGNhcGl0YWxpemU6IGNhcGl0YWxpemUsXG4gIGNhbWVsaXplOiBjYW1lbGl6ZSxcbiAgZGFzaGVyaXplOiBkYXNoZXJpemVcbn07XG5mdW5jdGlvbiBjdXJyeSQoZiwgYm91bmQpe1xuICB2YXIgY29udGV4dCxcbiAgX2N1cnJ5ID0gZnVuY3Rpb24oYXJncykge1xuICAgIHJldHVybiBmLmxlbmd0aCA+IDEgPyBmdW5jdGlvbigpe1xuICAgICAgdmFyIHBhcmFtcyA9IGFyZ3MgPyBhcmdzLmNvbmNhdCgpIDogW107XG4gICAgICBjb250ZXh0ID0gYm91bmQgPyBjb250ZXh0IHx8IHRoaXMgOiB0aGlzO1xuICAgICAgcmV0dXJuIHBhcmFtcy5wdXNoLmFwcGx5KHBhcmFtcywgYXJndW1lbnRzKSA8XG4gICAgICAgICAgZi5sZW5ndGggJiYgYXJndW1lbnRzLmxlbmd0aCA/XG4gICAgICAgIF9jdXJyeS5jYWxsKGNvbnRleHQsIHBhcmFtcykgOiBmLmFwcGx5KGNvbnRleHQsIHBhcmFtcyk7XG4gICAgfSA6IGY7XG4gIH07XG4gIHJldHVybiBfY3VycnkoKTtcbn0iLCIvLyBHZW5lcmF0ZWQgYnkgTGl2ZVNjcmlwdCAxLjYuMFxudmFyIEZ1bmMsIExpc3QsIE9iaiwgU3RyLCBOdW0sIGlkLCBpc1R5cGUsIHJlcGxpY2F0ZSwgcHJlbHVkZSwgdG9TdHJpbmckID0ge30udG9TdHJpbmc7XG5GdW5jID0gcmVxdWlyZSgnLi9GdW5jLmpzJyk7XG5MaXN0ID0gcmVxdWlyZSgnLi9MaXN0LmpzJyk7XG5PYmogPSByZXF1aXJlKCcuL09iai5qcycpO1xuU3RyID0gcmVxdWlyZSgnLi9TdHIuanMnKTtcbk51bSA9IHJlcXVpcmUoJy4vTnVtLmpzJyk7XG5pZCA9IGZ1bmN0aW9uKHgpe1xuICByZXR1cm4geDtcbn07XG5pc1R5cGUgPSBjdXJyeSQoZnVuY3Rpb24odHlwZSwgeCl7XG4gIHJldHVybiB0b1N0cmluZyQuY2FsbCh4KS5zbGljZSg4LCAtMSkgPT09IHR5cGU7XG59KTtcbnJlcGxpY2F0ZSA9IGN1cnJ5JChmdW5jdGlvbihuLCB4KXtcbiAgdmFyIGkkLCByZXN1bHRzJCA9IFtdO1xuICBmb3IgKGkkID0gMDsgaSQgPCBuOyArK2kkKSB7XG4gICAgcmVzdWx0cyQucHVzaCh4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cyQ7XG59KTtcblN0ci5lbXB0eSA9IExpc3QuZW1wdHk7XG5TdHIuc2xpY2UgPSBMaXN0LnNsaWNlO1xuU3RyLnRha2UgPSBMaXN0LnRha2U7XG5TdHIuZHJvcCA9IExpc3QuZHJvcDtcblN0ci5zcGxpdEF0ID0gTGlzdC5zcGxpdEF0O1xuU3RyLnRha2VXaGlsZSA9IExpc3QudGFrZVdoaWxlO1xuU3RyLmRyb3BXaGlsZSA9IExpc3QuZHJvcFdoaWxlO1xuU3RyLnNwYW4gPSBMaXN0LnNwYW47XG5TdHIuYnJlYWtTdHIgPSBMaXN0LmJyZWFrTGlzdDtcbnByZWx1ZGUgPSB7XG4gIEZ1bmM6IEZ1bmMsXG4gIExpc3Q6IExpc3QsXG4gIE9iajogT2JqLFxuICBTdHI6IFN0cixcbiAgTnVtOiBOdW0sXG4gIGlkOiBpZCxcbiAgaXNUeXBlOiBpc1R5cGUsXG4gIHJlcGxpY2F0ZTogcmVwbGljYXRlXG59O1xucHJlbHVkZS5lYWNoID0gTGlzdC5lYWNoO1xucHJlbHVkZS5tYXAgPSBMaXN0Lm1hcDtcbnByZWx1ZGUuZmlsdGVyID0gTGlzdC5maWx0ZXI7XG5wcmVsdWRlLmNvbXBhY3QgPSBMaXN0LmNvbXBhY3Q7XG5wcmVsdWRlLnJlamVjdCA9IExpc3QucmVqZWN0O1xucHJlbHVkZS5wYXJ0aXRpb24gPSBMaXN0LnBhcnRpdGlvbjtcbnByZWx1ZGUuZmluZCA9IExpc3QuZmluZDtcbnByZWx1ZGUuaGVhZCA9IExpc3QuaGVhZDtcbnByZWx1ZGUuZmlyc3QgPSBMaXN0LmZpcnN0O1xucHJlbHVkZS50YWlsID0gTGlzdC50YWlsO1xucHJlbHVkZS5sYXN0ID0gTGlzdC5sYXN0O1xucHJlbHVkZS5pbml0aWFsID0gTGlzdC5pbml0aWFsO1xucHJlbHVkZS5lbXB0eSA9IExpc3QuZW1wdHk7XG5wcmVsdWRlLnJldmVyc2UgPSBMaXN0LnJldmVyc2U7XG5wcmVsdWRlLmRpZmZlcmVuY2UgPSBMaXN0LmRpZmZlcmVuY2U7XG5wcmVsdWRlLmludGVyc2VjdGlvbiA9IExpc3QuaW50ZXJzZWN0aW9uO1xucHJlbHVkZS51bmlvbiA9IExpc3QudW5pb247XG5wcmVsdWRlLmNvdW50QnkgPSBMaXN0LmNvdW50Qnk7XG5wcmVsdWRlLmdyb3VwQnkgPSBMaXN0Lmdyb3VwQnk7XG5wcmVsdWRlLmZvbGQgPSBMaXN0LmZvbGQ7XG5wcmVsdWRlLmZvbGRsID0gTGlzdC5mb2xkbDtcbnByZWx1ZGUuZm9sZDEgPSBMaXN0LmZvbGQxO1xucHJlbHVkZS5mb2xkbDEgPSBMaXN0LmZvbGRsMTtcbnByZWx1ZGUuZm9sZHIgPSBMaXN0LmZvbGRyO1xucHJlbHVkZS5mb2xkcjEgPSBMaXN0LmZvbGRyMTtcbnByZWx1ZGUudW5mb2xkciA9IExpc3QudW5mb2xkcjtcbnByZWx1ZGUuYW5kTGlzdCA9IExpc3QuYW5kTGlzdDtcbnByZWx1ZGUub3JMaXN0ID0gTGlzdC5vckxpc3Q7XG5wcmVsdWRlLmFueSA9IExpc3QuYW55O1xucHJlbHVkZS5hbGwgPSBMaXN0LmFsbDtcbnByZWx1ZGUudW5pcXVlID0gTGlzdC51bmlxdWU7XG5wcmVsdWRlLnVuaXF1ZUJ5ID0gTGlzdC51bmlxdWVCeTtcbnByZWx1ZGUuc29ydCA9IExpc3Quc29ydDtcbnByZWx1ZGUuc29ydFdpdGggPSBMaXN0LnNvcnRXaXRoO1xucHJlbHVkZS5zb3J0QnkgPSBMaXN0LnNvcnRCeTtcbnByZWx1ZGUuc3VtID0gTGlzdC5zdW07XG5wcmVsdWRlLnByb2R1Y3QgPSBMaXN0LnByb2R1Y3Q7XG5wcmVsdWRlLm1lYW4gPSBMaXN0Lm1lYW47XG5wcmVsdWRlLmF2ZXJhZ2UgPSBMaXN0LmF2ZXJhZ2U7XG5wcmVsdWRlLmNvbmNhdCA9IExpc3QuY29uY2F0O1xucHJlbHVkZS5jb25jYXRNYXAgPSBMaXN0LmNvbmNhdE1hcDtcbnByZWx1ZGUuZmxhdHRlbiA9IExpc3QuZmxhdHRlbjtcbnByZWx1ZGUubWF4aW11bSA9IExpc3QubWF4aW11bTtcbnByZWx1ZGUubWluaW11bSA9IExpc3QubWluaW11bTtcbnByZWx1ZGUubWF4aW11bUJ5ID0gTGlzdC5tYXhpbXVtQnk7XG5wcmVsdWRlLm1pbmltdW1CeSA9IExpc3QubWluaW11bUJ5O1xucHJlbHVkZS5zY2FuID0gTGlzdC5zY2FuO1xucHJlbHVkZS5zY2FubCA9IExpc3Quc2Nhbmw7XG5wcmVsdWRlLnNjYW4xID0gTGlzdC5zY2FuMTtcbnByZWx1ZGUuc2NhbmwxID0gTGlzdC5zY2FubDE7XG5wcmVsdWRlLnNjYW5yID0gTGlzdC5zY2FucjtcbnByZWx1ZGUuc2NhbnIxID0gTGlzdC5zY2FucjE7XG5wcmVsdWRlLnNsaWNlID0gTGlzdC5zbGljZTtcbnByZWx1ZGUudGFrZSA9IExpc3QudGFrZTtcbnByZWx1ZGUuZHJvcCA9IExpc3QuZHJvcDtcbnByZWx1ZGUuc3BsaXRBdCA9IExpc3Quc3BsaXRBdDtcbnByZWx1ZGUudGFrZVdoaWxlID0gTGlzdC50YWtlV2hpbGU7XG5wcmVsdWRlLmRyb3BXaGlsZSA9IExpc3QuZHJvcFdoaWxlO1xucHJlbHVkZS5zcGFuID0gTGlzdC5zcGFuO1xucHJlbHVkZS5icmVha0xpc3QgPSBMaXN0LmJyZWFrTGlzdDtcbnByZWx1ZGUuemlwID0gTGlzdC56aXA7XG5wcmVsdWRlLnppcFdpdGggPSBMaXN0LnppcFdpdGg7XG5wcmVsdWRlLnppcEFsbCA9IExpc3QuemlwQWxsO1xucHJlbHVkZS56aXBBbGxXaXRoID0gTGlzdC56aXBBbGxXaXRoO1xucHJlbHVkZS5hdCA9IExpc3QuYXQ7XG5wcmVsdWRlLmVsZW1JbmRleCA9IExpc3QuZWxlbUluZGV4O1xucHJlbHVkZS5lbGVtSW5kaWNlcyA9IExpc3QuZWxlbUluZGljZXM7XG5wcmVsdWRlLmZpbmRJbmRleCA9IExpc3QuZmluZEluZGV4O1xucHJlbHVkZS5maW5kSW5kaWNlcyA9IExpc3QuZmluZEluZGljZXM7XG5wcmVsdWRlLmFwcGx5ID0gRnVuYy5hcHBseTtcbnByZWx1ZGUuY3VycnkgPSBGdW5jLmN1cnJ5O1xucHJlbHVkZS5mbGlwID0gRnVuYy5mbGlwO1xucHJlbHVkZS5maXggPSBGdW5jLmZpeDtcbnByZWx1ZGUub3ZlciA9IEZ1bmMub3ZlcjtcbnByZWx1ZGUuc3BsaXQgPSBTdHIuc3BsaXQ7XG5wcmVsdWRlLmpvaW4gPSBTdHIuam9pbjtcbnByZWx1ZGUubGluZXMgPSBTdHIubGluZXM7XG5wcmVsdWRlLnVubGluZXMgPSBTdHIudW5saW5lcztcbnByZWx1ZGUud29yZHMgPSBTdHIud29yZHM7XG5wcmVsdWRlLnVud29yZHMgPSBTdHIudW53b3JkcztcbnByZWx1ZGUuY2hhcnMgPSBTdHIuY2hhcnM7XG5wcmVsdWRlLnVuY2hhcnMgPSBTdHIudW5jaGFycztcbnByZWx1ZGUucmVwZWF0ID0gU3RyLnJlcGVhdDtcbnByZWx1ZGUuY2FwaXRhbGl6ZSA9IFN0ci5jYXBpdGFsaXplO1xucHJlbHVkZS5jYW1lbGl6ZSA9IFN0ci5jYW1lbGl6ZTtcbnByZWx1ZGUuZGFzaGVyaXplID0gU3RyLmRhc2hlcml6ZTtcbnByZWx1ZGUudmFsdWVzID0gT2JqLnZhbHVlcztcbnByZWx1ZGUua2V5cyA9IE9iai5rZXlzO1xucHJlbHVkZS5wYWlyc1RvT2JqID0gT2JqLnBhaXJzVG9PYmo7XG5wcmVsdWRlLm9ialRvUGFpcnMgPSBPYmoub2JqVG9QYWlycztcbnByZWx1ZGUubGlzdHNUb09iaiA9IE9iai5saXN0c1RvT2JqO1xucHJlbHVkZS5vYmpUb0xpc3RzID0gT2JqLm9ialRvTGlzdHM7XG5wcmVsdWRlLm1heCA9IE51bS5tYXg7XG5wcmVsdWRlLm1pbiA9IE51bS5taW47XG5wcmVsdWRlLm5lZ2F0ZSA9IE51bS5uZWdhdGU7XG5wcmVsdWRlLmFicyA9IE51bS5hYnM7XG5wcmVsdWRlLnNpZ251bSA9IE51bS5zaWdudW07XG5wcmVsdWRlLnF1b3QgPSBOdW0ucXVvdDtcbnByZWx1ZGUucmVtID0gTnVtLnJlbTtcbnByZWx1ZGUuZGl2ID0gTnVtLmRpdjtcbnByZWx1ZGUubW9kID0gTnVtLm1vZDtcbnByZWx1ZGUucmVjaXAgPSBOdW0ucmVjaXA7XG5wcmVsdWRlLnBpID0gTnVtLnBpO1xucHJlbHVkZS50YXUgPSBOdW0udGF1O1xucHJlbHVkZS5leHAgPSBOdW0uZXhwO1xucHJlbHVkZS5zcXJ0ID0gTnVtLnNxcnQ7XG5wcmVsdWRlLmxuID0gTnVtLmxuO1xucHJlbHVkZS5wb3cgPSBOdW0ucG93O1xucHJlbHVkZS5zaW4gPSBOdW0uc2luO1xucHJlbHVkZS50YW4gPSBOdW0udGFuO1xucHJlbHVkZS5jb3MgPSBOdW0uY29zO1xucHJlbHVkZS5hY29zID0gTnVtLmFjb3M7XG5wcmVsdWRlLmFzaW4gPSBOdW0uYXNpbjtcbnByZWx1ZGUuYXRhbiA9IE51bS5hdGFuO1xucHJlbHVkZS5hdGFuMiA9IE51bS5hdGFuMjtcbnByZWx1ZGUudHJ1bmNhdGUgPSBOdW0udHJ1bmNhdGU7XG5wcmVsdWRlLnJvdW5kID0gTnVtLnJvdW5kO1xucHJlbHVkZS5jZWlsaW5nID0gTnVtLmNlaWxpbmc7XG5wcmVsdWRlLmZsb29yID0gTnVtLmZsb29yO1xucHJlbHVkZS5pc0l0TmFOID0gTnVtLmlzSXROYU47XG5wcmVsdWRlLmV2ZW4gPSBOdW0uZXZlbjtcbnByZWx1ZGUub2RkID0gTnVtLm9kZDtcbnByZWx1ZGUuZ2NkID0gTnVtLmdjZDtcbnByZWx1ZGUubGNtID0gTnVtLmxjbTtcbnByZWx1ZGUuVkVSU0lPTiA9ICcxLjIuMSc7XG5tb2R1bGUuZXhwb3J0cyA9IHByZWx1ZGU7XG5mdW5jdGlvbiBjdXJyeSQoZiwgYm91bmQpe1xuICB2YXIgY29udGV4dCxcbiAgX2N1cnJ5ID0gZnVuY3Rpb24oYXJncykge1xuICAgIHJldHVybiBmLmxlbmd0aCA+IDEgPyBmdW5jdGlvbigpe1xuICAgICAgdmFyIHBhcmFtcyA9IGFyZ3MgPyBhcmdzLmNvbmNhdCgpIDogW107XG4gICAgICBjb250ZXh0ID0gYm91bmQgPyBjb250ZXh0IHx8IHRoaXMgOiB0aGlzO1xuICAgICAgcmV0dXJuIHBhcmFtcy5wdXNoLmFwcGx5KHBhcmFtcywgYXJndW1lbnRzKSA8XG4gICAgICAgICAgZi5sZW5ndGggJiYgYXJndW1lbnRzLmxlbmd0aCA/XG4gICAgICAgIF9jdXJyeS5jYWxsKGNvbnRleHQsIHBhcmFtcykgOiBmLmFwcGx5KGNvbnRleHQsIHBhcmFtcyk7XG4gICAgfSA6IGY7XG4gIH07XG4gIHJldHVybiBfY3VycnkoKTtcbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUvbWFpbi5jc3MnO1xuaW1wb3J0IHRvZG9jb24gZnJvbSAnLi9tb2R1bGVzL2FwcC5qcydcblxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0dGV4dCcpO1xuXG5sZXQgdG9kbyA9IG5ldyB0b2RvY29uKClcblxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgdG9kby5hZGQoaW5wdXQudmFsdWUsdHJ1ZSk7XG4gIC8vIHRvZG8uYWRkdG8oaW5wdXQudmFsdWUsdHJ1ZSk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaW5wdXQudmFsdWUgPSBcIlwiOyBcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdEJvb2snLCBKU09OLnN0cmluZ2lmeSh0b2RvLmNvbGxlY3Rpb24pKTtcbn0pO1xuXG5pZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0Qm9vaycpICE9PSAndW5kZWZpbmVkJykge1xuICBjb25zdCBsaXN0ID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3RCb29rJykpO1xuICBsaXN0LmZvckVhY2goKGNvbGxlY3Rpb24pID0+IHtcbiAgICB0b2RvLmFkZChjb2xsZWN0aW9uLnRpdGxlKTtcbiAgfSk7XG59Il0sIm5hbWVzIjpbInRvZG9jb24iLCJpY29uIiwiaWQiLCJjb3VudCIsInRvZG9jIiwiY29sbGVjdGlvbiIsInRpdGxlIiwiY29tcGxldGUiLCJsZW5ndGgiLCJzdHJ1Y3Rpb24iLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImFkZHRvIiwiTGlzdHRvZG8iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibWFpbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjaGVja2JveCIsInR5cGUiLCJjb21wbGV0ZWQiLCJtYWludGV4dCIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwiaWNvbmRlbGV0ZSIsImFsdCIsInNyYyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJmb2N1cyIsImUiLCJyZW1vdmUiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50RWxlbWVudCIsInRhcmdldCIsImFwcGVuZCIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJmaWx0ZXIiLCJ0YXNrIiwidXBkYXRlaWQiLCJpIiwidG9kbyIsImlucHV0IiwicHJldmVudERlZmF1bHQiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldEl0ZW0iLCJsaXN0IiwicGFyc2UiLCJmb3JFYWNoIl0sInNvdXJjZVJvb3QiOiIifQ==