/*!
 * @mudas/weui.js v0.0.1 (https://github.com/aosnow/weui.js)
 * Copyright 2019, mudas
 * MIT license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["weui"] = factory();
	else
		root["weui"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "qs7Y");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+8zi":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("MeB/");
var defined = __webpack_require__("UJuk");
var fails = __webpack_require__("TLeH");
var spaces = __webpack_require__("Tnei");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "+qir":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "0nIg":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("MeB/");
var core = __webpack_require__("qm7i");
var fails = __webpack_require__("TLeH");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "0rzm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Vxt4");

/***/ }),

/***/ "1mUO":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("UJuk");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4NbG":
/***/ (function(module, exports) {

module.exports = "<div class=\"<%= className %>\">\r\n  <div class=weui-mask_transparent></div>\r\n  <div class=weui-toast>\r\n    <i class=\"weui-icon_toast weui-icon-success-no-circle\"></i>\r\n    <p class=weui-toast__content><%=content%></p>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ "5I/h":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("MeB/");
var $parseFloat = __webpack_require__("vwP0");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "7071":
/***/ (function(module, exports) {

module.exports = "<div class=\"weui-loading_toast <%= className %>\">\r\n  <div class=weui-mask_transparent></div>\r\n  <div class=weui-toast>\r\n    <i class=\"weui-loading weui-icon_toast\"></i>\r\n    <p class=weui-toast__content><%=content%></p>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ "7jcK":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "88vH":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "8iZb":
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__("kTKA").parseInt;
var $trim = __webpack_require__("+8zi").trim;
var ws = __webpack_require__("Tnei");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "AQhx":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("bz6V");
var defined = __webpack_require__("UJuk");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "AqJF":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("TEVc");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "B4yE":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("1mUO");
var $keys = __webpack_require__("U/ao");

__webpack_require__("0nIg")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "BI2F":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "BydT":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("5I/h");
module.exports = __webpack_require__("qm7i").parseFloat;


/***/ }),

/***/ "G2wl":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("jix3");
var toIObject = __webpack_require__("AQhx");
var arrayIndexOf = __webpack_require__("nsKY")(false);
var IE_PROTO = __webpack_require__("Ksmq")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "JDBH":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("az+x") && !__webpack_require__("TLeH")(function () {
  return Object.defineProperty(__webpack_require__("KnLz")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "KnLz":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("eYJG");
var document = __webpack_require__("kTKA").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "KpBp":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("vgXK");
var createDesc = __webpack_require__("+qir");
module.exports = __webpack_require__("az+x") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "Ksmq":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("e2Wz")('keys');
var uid = __webpack_require__("c93P");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "MeB/":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("kTKA");
var core = __webpack_require__("qm7i");
var ctx = __webpack_require__("siI2");
var hide = __webpack_require__("KpBp");
var has = __webpack_require__("jix3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "PN0d":
/***/ (function(module, exports) {

module.exports = "<div class=\"<%=className%>\">\n  <div class=weui-mask></div>\n  <div class=\"weui-dialog <% if(isAndroid){ %> weui-skin_android <% } %>\">\n    <% if(title){ %>\n    <div class=weui-dialog__hd><strong class=weui-dialog__title><%=title%></strong></div>\n    <% } %>\n    <div class=weui-dialog__bd><%=content%></div>\n    <div class=weui-dialog__ft>\n      <% for(let i = 0; i < buttons.length; i++){ %>\n      <a href=javascript:; class=\"weui-dialog__btn weui-dialog__btn_<%=buttons[i]['type']%>\"><%=buttons[i]['label']%></a>\n      <% } %>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ "QqVI":
/***/ (function(module, exports) {

module.exports = "<div class=\"weui-toptips weui-toptips_warn <%= className %>\" style=display:block><%= content %></div>\r\n";

/***/ }),

/***/ "RpY/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("BydT");

/***/ }),

/***/ "TEVc":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "TLeH":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "Tnei":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "U/ao":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("G2wl");
var enumBugKeys = __webpack_require__("7jcK");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "UJuk":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "VTRa":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("eYJG");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "Vxt4":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("B4yE");
module.exports = __webpack_require__("qm7i").Object.keys;


/***/ }),

/***/ "az+x":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("TLeH")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "bz6V":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("BI2F");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "c93P":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "e2Wz":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("qm7i");
var global = __webpack_require__("kTKA");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("hpsA") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "e4pq":
/***/ (function(module, exports) {

module.exports = "<div class=weui-picker__group>\r\n  <div class=weui-picker__mask></div>\r\n  <div class=weui-picker__indicator></div>\r\n  <div class=weui-picker__content></div>\r\n</div>\r\n";

/***/ }),

/***/ "eYJG":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "hJQh":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("TEVc");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "he7t":
/***/ (function(module, exports) {

module.exports = "<div class=\"<% if(isAndroid){ %>weui-skin_android <% } %><%= className %>\">\n  <div class=weui-mask></div>\n  <div class=weui-actionsheet>\n    <% if(!isAndroid && title){ %>\n    <div class=weui-actionsheet__title>\n      <p class=weui-actionsheet__title-text><%= title %></p>\n    </div>\n    <% } %>\n    <div class=weui-actionsheet__menu>\n      <% for(let i = 0; i < menus.length; i++){ %>\n      <div class=weui-actionsheet__cell><%= menus[i].label %></div>\n      <% } %>\n    </div>\n    <div class=weui-actionsheet__action>\n      <% for(let j = 0; j < actions.length; j++){ %>\n      <div class=weui-actionsheet__cell><%= actions[j].label %></div>\n      <% } %>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ "hiV+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ndhg");

/***/ }),

/***/ "hpsA":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "i0VV":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("eYJG");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "jix3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "kTKA":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "liIb":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"<%= className %>\">\r\n    <div class=\"weui-mask\"></div>\r\n    <div class=\"weui-picker\">\r\n\r\n        <div class=\"weui-picker__hd\">\r\n            <a href=\"javascript:;\" data-action=\"cancel\" class=\"weui-picker__action\">取消</a>\r\n            <a href=\"javascript:;\" data-action=\"select\" class=\"weui-picker__action\" id=\"weui-picker-confirm\">确定</a>\r\n        </div>\r\n        <div class=\"weui-picker__bd\"></div>\r\n    </div>\r\n</div> -->\r\n\r\n<div class=\"<%= className %>\">\r\n  <div class=weui-mask></div>\r\n  <div class=\"weui-half-screen-dialog weui-picker\">\r\n    <div class=weui-half-screen-dialog__hd>\r\n      <div class=weui-half-screen-dialog__hd__side>\r\n        <button class=\"weui-icon-btn weui-icon-btn_close weui-picker__btn\">关闭</button>\r\n      </div>\r\n      <div class=weui-half-screen-dialog__hd__main>\r\n        <strong class=weui-half-screen-dialog__title>标题</strong>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=weui-half-screen-dialog__bd>\r\n      <div class=weui-picker__bd></div>\r\n    </div>\r\n\r\n    <div class=weui-half-screen-dialog__ft>\r\n      <a href=javascript:; class=\"weui-btn weui-btn_primary weui-picker__btn\" id=weui-picker-confirm data-action=select>确定</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ "ndhg":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("sYOT");
module.exports = __webpack_require__("qm7i").parseInt;


/***/ }),

/***/ "nsKY":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("AQhx");
var toLength = __webpack_require__("AqJF");
var toAbsoluteIndex = __webpack_require__("hJQh");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "pmsR":
/***/ (function(module, exports) {

// element-closest | CC0-1.0 | github.com/jonathantneal/closest

(function (ElementProto) {
	if (typeof ElementProto.matches !== 'function') {
		ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
			var element = this;
			var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
			var index = 0;

			while (elements[index] && elements[index] !== element) {
				++index;
			}

			return Boolean(elements[index]);
		};
	}

	if (typeof ElementProto.closest !== 'function') {
		ElementProto.closest = function closest(selector) {
			var element = this;

			while (element && element.nodeType === 1) {
				if (element.matches(selector)) {
					return element;
				}

				element = element.parentNode;
			}

			return null;
		};
	}
})(window.Element.prototype);


/***/ }),

/***/ "qm7i":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "qs7Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var form_namespaceObject = {};
__webpack_require__.r(form_namespaceObject);
__webpack_require__.d(form_namespaceObject, "showErrorTips", function() { return showErrorTips; });
__webpack_require__.d(form_namespaceObject, "hideErrorTips", function() { return hideErrorTips; });
__webpack_require__.d(form_namespaceObject, "validate", function() { return validate; });
__webpack_require__.d(form_namespaceObject, "checkIfBlur", function() { return checkIfBlur; });

// EXTERNAL MODULE: ../node_modules/_@babel_runtime-corejs2@7.6.0@@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("0rzm");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ../node_modules/_element-closest@2.0.2@element-closest/element-closest.js
var element_closest = __webpack_require__("pmsR");

// EXTERNAL MODULE: ../node_modules/_object-assign@4.1.1@object-assign/index.js
var _object_assign_4_1_1_object_assign = __webpack_require__("zBGz");
var _object_assign_4_1_1_object_assign_default = /*#__PURE__*/__webpack_require__.n(_object_assign_4_1_1_object_assign);

// EXTERNAL MODULE: ../node_modules/_balajs@0.1.9@balajs/umd/bala.umd.js
var bala_umd = __webpack_require__("rKfJ");
var bala_umd_default = /*#__PURE__*/__webpack_require__.n(bala_umd);

// CONCATENATED MODULE: ./util/util.js


/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/


 // 其实，$ 的原型就是一个数组，拥有数组的各种方法
// 这里只是库内部使用，所以通过文档约束，不做容错校验，达到代码最小化

/* 判断系统 */

function _detect(ua) {
  var os = this.os = {};
  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);

  if (android) {
    os.android = true;
    os.version = android[2];
  }
}

_detect.call(bala_umd_default.a, navigator.userAgent);

_object_assign_4_1_1_object_assign_default()(bala_umd_default.a.fn, {
  /**
   * 只能是一个 HTMLElement 元素或者 HTMLElement 数组，不支持字符串
   * @param {Element|Element[]} $child
   * @returns {append}
   */
  append: function append($child) {
    if (!($child instanceof HTMLElement)) {
      $child = $child[0];
    }

    this.forEach(function ($element) {
      $element.appendChild($child);
    });
    return this;
  },

  /**
   *
   * @returns {remove}
   */
  remove: function remove() {
    this.forEach(function ($element) {
      $element.parentNode.removeChild($element);
    });
    return this;
  },

  /**
   *
   * @param selector
   * @returns {HTMLElement}
   */
  find: function find(selector) {
    return bala_umd_default()(selector, this);
  },

  /**
   *
   * @param {String} className
   * @returns {addClass}
   */
  addClass: function addClass(className) {
    this.forEach(function ($element) {
      // http://caniuse.com/#search=classList
      $element.classList.add(className);
    });
    return this;
  },

  /**
   *
   * @param {String} className
   * @returns {removeClass}
   */
  removeClass: function removeClass(className) {
    this.forEach(function ($element) {
      // http://caniuse.com/#search=classList
      $element.classList.remove(className);
    });
    return this;
  },

  /**
   *
   * @param index
   * @returns {*|Zepto|HTMLElement}
   */
  eq: function eq(index) {
    return bala_umd_default()(this[index]);
  },

  /**
   *
   * @returns {show}
   */
  show: function show() {
    this.forEach(function ($element) {
      $element.style.display = 'block';
    });
    return this;
  },

  /**
   *
   * @returns {hide}
   */
  hide: function hide() {
    this.forEach(function ($element) {
      $element.style.display = 'none';
    });
    return this;
  },

  /**
   *
   * @param html 目前只能接受字符串
   * @returns {html}
   */
  html: function html(_html) {
    this.forEach(function ($element) {
      $element.innerHTML = _html;
    });
    return this;
  },

  /**
   *
   * @param {Object} obj 目前只能接受object
   * @returns {css}
   */
  css: function css(obj) {
    var _this = this;

    keys_default()(obj).forEach(function (key) {
      _this.forEach(function ($element) {
        $element.style[key] = obj[key];
      });
    });

    return this;
  },

  /**
   *
   * @param eventType
   * @param selector
   * @param handler
   */
  on: function on(eventType, selector, handler) {
    var isDelegate = typeof selector === 'string' && typeof handler === 'function';

    if (!isDelegate) {
      handler = selector;
    }

    this.forEach(function ($element) {
      eventType.split(' ').forEach(function (event) {
        $element.addEventListener(event, function (evt) {
          if (isDelegate) {
            // http://caniuse.com/#search=closest
            if (this.contains(evt.target.closest(selector))) {
              handler.call(evt.target, evt);
            }
          } else {
            handler.call(this, evt);
          }
        });
      });
    });
    return this;
  },

  /**
   *
   * @param {String} eventType
   * @param {String|Function} selector
   * @param {Function=} handler
   * @returns {off}
   */
  off: function off(eventType, selector, handler) {
    if (typeof selector === 'function') {
      handler = selector;
      selector = null;
    }

    this.forEach(function ($element) {
      eventType.split(' ').forEach(function (event) {
        if (typeof selector === 'string') {
          $element.querySelectorAll(selector).forEach(function ($element) {
            $element.removeEventListener(event, handler);
          });
        } else {
          $element.removeEventListener(event, handler);
        }
      });
    });
    return this;
  },

  /**
   *
   * @returns {Number}
   */
  index: function index() {
    var $element = this[0];
    var $parent = $element.parentNode;
    return Array.prototype.indexOf.call($parent.children, $element);
  },

  /**
   * @desc 因为off方法目前不可以移除绑定的匿名函数，现在直接暴力移除所有listener
   * @returns {offAll}
   */
  offAll: function offAll() {
    var _this2 = this;

    this.forEach(function ($element, index) {
      var clone = $element.cloneNode(true);
      $element.parentNode.replaceChild(clone, $element);
      _this2[index] = clone;
    });
    return this;
  },

  /**
   *
   * @returns {*}
   */
  val: function val() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length) {
      this.forEach(function ($element) {
        $element.value = args[0];
      });
      return this;
    }

    return this[0].value;
  },

  /**
   *
   * @returns {*}
   */
  attr: function attr() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (typeof args[0] === 'object') {
      var attrsObj = args[0];
      var that = this;

      keys_default()(attrsObj).forEach(function (attr) {
        that.forEach(function ($element) {
          $element.setAttribute(attr, attrsObj[attr]);
        });
      });

      return this;
    }

    if (typeof args[0] === 'string' && arguments.length < 2) {
      return this[0].getAttribute(args[0]);
    }

    this.forEach(function ($element) {
      $element.setAttribute(args[0], args[1]);
    });
    return this;
  }
});
_object_assign_4_1_1_object_assign_default()(bala_umd_default.a, {
  extend: _object_assign_4_1_1_object_assign_default.a,

  /**
   * noop
   */
  noop: function noop() {},

  /**
   * render
   * 取值：<%= variable %>
   * 表达式：<% if {} %>
   * 例子：
   *  <div>
   *    <div class="weui-mask"></div>
   *    <div class="weui-dialog">
   *    <% if(typeof title === 'string'){ %>
   *           <div class="weui-dialog__hd"><strong class="weui-dialog__title"><%=title%></strong></div>
   *    <% } %>
   *    <div class="weui-dialog__bd"><%=content%></div>
   *    <div class="weui-dialog__ft">
   *    <% for(let i = 0; i < buttons.length; i++){ %>
   *        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_<%=buttons[i]['type']%>"><%=buttons[i]['label']%></a>
   *    <% } %>
   *    </div>
   *    </div>
   *  </div>
   * A very simple template engine
   * @param {String} tpl
   * @param {Object=} data
   * @returns {String}
   */
  render: function render(tpl, data) {
    var code = 'const p=[];with(this){p.push(\'' + tpl.replace(/[\r\t\n]/g, ' ').split('<%').join('\t').replace(/((^|%>)[^\t]*)'/g, '$1\r').replace(/\t=(.*?)%>/g, '\',$1,\'').split('\t').join('\');').split('%>').join('p.push(\'').split('\r').join('\\\'') + '\');}return p.join(\'\');';
    /* eslint-disable no-new-func */

    return new Function(code).apply(data);
  },

  /**
   * getStyle 获得元素计算后的样式值
   * (from http://stackoverflow.com/questions/2664045/how-to-get-an-html-elements-style-values-in-javascript)
   */
  getStyle: function getStyle(el, styleProp) {
    var value;
    var defaultView = (el.ownerDocument || document).defaultView; // W3C standard way:

    if (defaultView && defaultView.getComputedStyle) {
      // sanitize property name to css notation
      // (hypen separated words eg. font-Size)
      styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
      return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el.currentStyle) {
      // IE
      // sanitize property name to camelCase
      styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
        return letter.toUpperCase();
      });
      value = el.currentStyle[styleProp]; // convert other units to pixels on IE

      if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
        return function (value) {
          var oldLeft = el.style.left;
          var oldRsLeft = el.runtimeStyle.left;
          el.runtimeStyle.left = el.currentStyle.left;
          el.style.left = value || 0;
          value = el.style.pixelLeft + 'px';
          el.style.left = oldLeft;
          el.runtimeStyle.left = oldRsLeft;
          return value;
        }(value);
      }

      return value;
    }
  }
});
/* harmony default export */ var util = (bala_umd_default.a);
// EXTERNAL MODULE: ./dialog/dialog.html
var dialog = __webpack_require__("PN0d");
var dialog_default = /*#__PURE__*/__webpack_require__.n(dialog);

// CONCATENATED MODULE: ./dialog/dialog.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/



var _sington;
/**
 * dialog，弹窗，alert和confirm的父类
 *
 * @param {object=} options 配置项
 * @param {string=} options.title 弹窗的标题
 * @param {string=} options.content 弹窗的内容
 * @param {string=} options.className 弹窗的自定义类名
 * @param {array=} options.buttons 按钮配置项
 *
 * @param {string} [options.buttons[].label=确定] 按钮的文字
 * @param {string} [options.buttons[].type=primary] 按钮的类型 [primary, default]
 * @param {function} [options.buttons[].onClick=$.noop] 按钮的回调
 *
 * @example
 * weui.dialog({
 *     title: 'dialog标题',
 *     content: 'dialog内容',
 *     className: 'custom-classname',
 *     buttons: [{
 *         label: '取消',
 *         type: 'default',
 *         onClick: function () { alert('取消') }
 *     }, {
 *         label: '确定',
 *         type: 'primary',
 *         onClick: function () { alert('确定') }
 *     }]
 * });
 *
 * // 主动关闭
 * const $dialog = weui.dialog({...});
 * $dialog.hide(function(){
 *      console.log('`dialog` has been hidden');
 * });
 */


function dialog_dialog(options) {
  if (options === void 0) {
    options = {};
  }

  if (_sington) return _sington;
  var isAndroid = util.os.android;
  options = util.extend({
    title: null,
    content: '',
    className: '',
    buttons: [{
      label: '确定',
      type: 'primary',
      onClick: util.noop
    }],
    isAndroid: isAndroid
  }, options);
  var $dialogWrap = util(util.render(dialog_default.a, options));
  var $dialog = $dialogWrap.find('.weui-dialog');
  var $mask = $dialogWrap.find('.weui-mask');

  function _hide(callback) {
    // _hide = $.noop; // 防止二次调用导致报错
    $mask.addClass('weui-animate-fade-out');
    $dialog.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
      $dialogWrap.remove();
      _sington = false;
      callback && callback();
    });
  }

  function hide(callback) {
    _hide(callback);
  }

  util('body').append($dialogWrap); // 不能直接把.weui-animate-fade-in加到$dialog，会导致mask的z-index有问题

  $mask.addClass('weui-animate-fade-in');
  $dialog.addClass('weui-animate-fade-in');
  $dialogWrap.on('click', '.weui-dialog__btn', function (evt) {
    var index = util(this).index();

    if (options.buttons[index].onClick) {
      if (options.buttons[index].onClick.call(this, evt) !== false) hide();
    } else {
      hide();
    }
  }).on('touchmove', function (evt) {
    evt.stopPropagation();
    evt.preventDefault();
  });
  _sington = $dialogWrap[0];
  _sington.hide = hide;
  return _sington;
}

/* harmony default export */ var dialog_dialog_0 = (dialog_dialog);
// CONCATENATED MODULE: ./alert/alert.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/


/**
 * alert 警告弹框，功能类似于浏览器自带的 alert 弹框，用于提醒、警告用户简单扼要的信息，只有一个“确认”按钮，点击“确认”按钮后关闭弹框。
 * @param {string} content 弹窗内容
 * @param {function=} yes 点击确定按钮的回调
 * @param {object=} options 配置项
 * @param {string=} options.title 弹窗的标题
 * @param {string=} options.className 自定义类名
 * @param {array=} options.buttons 按钮配置项，详情参考dialog
 *
 * @example
 * weui.alert('普通的alert');
 * weui.alert('带回调的alert', function(){ console.log('ok') });
 * const alertDom = weui.alert('手动关闭的alert', function(){
 *     return false; // 不关闭弹窗，可用alertDom.hide()来手动关闭
 * });
 * weui.alert('自定义标题的alert', { title: '自定义标题' });
 * weui.alert('带回调的自定义标题的alert', function(){
 *    console.log('ok')
 * }, {
 *    title: '自定义标题'
 * });
 * weui.alert('自定义按钮的alert', {
 *     title: '自定义按钮的alert',
 *     buttons: [{
 *         label: 'OK',
 *         type: 'primary',
 *         onClick: function(){ console.log('ok') }
 *     }]
 * });
 *
 * // 多次使用
 * const alert = weui.alert('hello');
 * alert.hide(function(){
 *     weui.alert('world');
 * });
 */

function alert_alert(content, yes, options) {
  if (content === void 0) {
    content = '';
  }

  if (yes === void 0) {
    yes = util.noop;
  }

  if (typeof yes === 'object') {
    options = yes;
    yes = util.noop;
  }

  options = util.extend({
    content: content,
    buttons: [{
      label: '确定',
      type: 'primary',
      onClick: yes
    }]
  }, options);
  return dialog_dialog_0(options);
}

/* harmony default export */ var alert_alert_0 = (alert_alert);
// CONCATENATED MODULE: ./confirm/confirm.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/


/**
 * 确认弹窗
 * @param {string} content 弹窗内容
 * @param {function=} yes 点击确定按钮的回调
 * @param {function=} no  点击取消按钮的回调
 * @param {object=} options 配置项
 * @param {string=} options.title 弹窗的标题
 * @param {string=} options.className 自定义类名
 * @param {array=} options.buttons 按钮配置项，详情参考dialog
 *
 * @example
 * weui.confirm('普通的confirm');
 * weui.confirm('自定义标题的confirm', { title: '自定义标题' });
 * weui.confirm('带回调的confirm', function(){ console.log('yes') }, function(){ console.log('no') });
 * const confirmDom = weui.confirm('手动关闭的confirm', function(){
 *     return false; // 不关闭弹窗，可用confirmDom.hide()来手动关闭
 * });
 * weui.confirm('带回调的自定义标题的confirm', function(){ console.log('yes') }, function(){ console.log('no') }, {
 *     title: '自定义标题'
 * });
 * weui.confirm('自定义按钮的confirm', {
 *     title: '自定义按钮的confirm',
 *     buttons: [{
 *         label: 'NO',
 *         type: 'default',
 *         onClick: function(){ console.log('no') }
 *     }, {
 *         label: 'YES',
 *         type: 'primary',
 *         onClick: function(){ console.log('yes') }
 *     }]
 * });
 */

function confirm_confirm(content, yes, no, options) {
  if (content === void 0) {
    content = '';
  }

  if (yes === void 0) {
    yes = util.noop;
  }

  if (no === void 0) {
    no = util.noop;
  }

  if (typeof yes === 'object') {
    options = yes;
    yes = util.noop;
  } else if (typeof no === 'object') {
    options = no;
    no = util.noop;
  }

  options = util.extend({
    content: content,
    buttons: [{
      label: '取消',
      type: 'default',
      onClick: no
    }, {
      label: '确定',
      type: 'primary',
      onClick: yes
    }]
  }, options);
  return dialog_dialog_0(options);
}

/* harmony default export */ var confirm_confirm_0 = (confirm_confirm);
// EXTERNAL MODULE: ./toast/toast.html
var toast = __webpack_require__("4NbG");
var toast_default = /*#__PURE__*/__webpack_require__.n(toast);

// CONCATENATED MODULE: ./toast/toast.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
* 
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
* 
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
* 
*       http://opensource.org/licenses/MIT
* 
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/



var toast_sington;
/**
 * toast 一般用于操作成功时的提示场景
 * @param {string} content toast的文字
 * @param {Object|function=} options 配置项或回调
 * @param {number=} [options.duration=3000] 多少毫秒后关闭toast
 * @param {function=} options.callback 关闭后的回调
 * @param {string=} options.className 自定义类名
 *
 * @example
 * weui.toast('操作成功', 3000);
 * weui.toast('操作成功', {
 *     duration: 3000,
 *     className: 'custom-classname',
 *     callback: function(){ console.log('close') }
 * });
 */


function toast_toast(content, options) {
  if (content === void 0) {
    content = '';
  }

  if (options === void 0) {
    options = {};
  }

  if (toast_sington) return toast_sington;

  if (typeof options === 'number') {
    options = {
      duration: options
    };
  }

  if (typeof options === 'function') {
    options = {
      callback: options
    };
  }

  options = util.extend({
    content: content,
    duration: 3000,
    callback: util.noop,
    className: ''
  }, options);
  var $toastWrap = util(util.render(toast_default.a, options));
  var $toast = $toastWrap.find('.weui-toast');
  var $mask = $toastWrap.find('.weui-mask');
  util('body').append($toastWrap);
  $toast.addClass('weui-animate-fade-in');
  $mask.addClass('weui-animate-fade-in');
  setTimeout(function () {
    $mask.addClass('weui-animate-fade-out');
    $toast.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
      $toastWrap.remove();
      toast_sington = false;
      options.callback();
    });
  }, options.duration);
  toast_sington = $toastWrap[0];
  return $toastWrap[0];
}

/* harmony default export */ var toast_toast_0 = (toast_toast);
// EXTERNAL MODULE: ./loading/loading.html
var loading = __webpack_require__("7071");
var loading_default = /*#__PURE__*/__webpack_require__.n(loading);

// CONCATENATED MODULE: ./loading/loading.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/



var loading_sington;
/**
 * loading
 * @param {string} content loading的文字
 * @param {object=} options 配置项
 * @param {string=} options.className 自定义类名
 *
 * @example
 * const loading = weui.loading('loading', {
 *     className: 'custom-classname'
 * });
 * setTimeout(function () {
 *     loading.hide(function() {
 *          console.log('`loading` has been hidden');
 *      });
 * }, 3000);
 */


function loading_loading(content, options) {
  if (content === void 0) {
    content = '';
  }

  if (options === void 0) {
    options = {};
  }

  if (loading_sington) return loading_sington;
  options = util.extend({
    content: content,
    className: ''
  }, options);
  var $loadingWrap = util(util.render(loading_default.a, options));
  var $loading = $loadingWrap.find('.weui-toast');
  var $mask = $loadingWrap.find('.weui-mask');

  function _hide(callback) {
    // _hide = $.noop; // 防止二次调用导致报错
    $mask.addClass('weui-animate-fade-out');
    $loading.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
      $loadingWrap.remove();
      loading_sington = false;
      callback && callback();
    });
  }

  function hide(callback) {
    _hide(callback);
  }

  util('body').append($loadingWrap);
  $loading.addClass('weui-animate-fade-in');
  $mask.addClass('weui-animate-fade-in');
  loading_sington = $loadingWrap[0];
  loading_sington.hide = hide;
  return loading_sington;
}

/* harmony default export */ var loading_loading_0 = (loading_loading);
// EXTERNAL MODULE: ./actionSheet/actionSheet.html
var actionSheet = __webpack_require__("he7t");
var actionSheet_default = /*#__PURE__*/__webpack_require__.n(actionSheet);

// CONCATENATED MODULE: ./actionSheet/actionSheet.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/



var actionSheet_sington;
/**
 * actionsheet 弹出式菜单
 * @param {array} menus 上层的选项
 * @param {string} menus[].label 选项的文字
 * @param {function} menus[].onClick 选项点击时的回调
 *
 * @param {array} actions 下层的选项
 * @param {string} actions[].label 选项的文字
 * @param {function} actions[].onClick 选项点击时的回调
 *
 * @param {object=} options 配置项
 * @param {string=} options.title actionSheet的title，如果isAndroid=true，则不会显示
 * @param {string=} options.className 自定义类名
 * @param {function=} [options.onClose] actionSheet关闭后的回调
 *
 * @example
 * weui.actionSheet([
 *     {
 *         label: '拍照',
 *         onClick: function () {
 *             console.log('拍照');
 *         }
 *     }, {
 *         label: '从相册选择',
 *         onClick: function () {
 *             console.log('从相册选择');
 *         }
 *     }, {
 *         label: '其他',
 *         onClick: function () {
 *             console.log('其他');
 *         }
 *     }
 * ], [
 *     {
 *         label: '取消',
 *         onClick: function () {
 *             console.log('取消');
 *         }
 *     }
 * ], {
 *     className: 'custom-classname',
 *     onClose: function(){
 *         console.log('关闭');
 *     }
 * });
 */


function actionSheet_actionSheet(menus, actions, options) {
  var _this = this;

  if (menus === void 0) {
    menus = [];
  }

  if (actions === void 0) {
    actions = [];
  }

  if (options === void 0) {
    options = {};
  }

  if (actionSheet_sington) return actionSheet_sington;
  var isAndroid = util.os.android;
  options = util.extend({
    menus: menus,
    actions: actions,
    title: '',
    className: '',
    isAndroid: isAndroid,
    onClose: util.noop
  }, options);
  var $actionSheetWrap = util(util.render(actionSheet_default.a, options));
  var $actionSheet = $actionSheetWrap.find('.weui-actionsheet');
  var $actionSheetMask = $actionSheetWrap.find('.weui-mask');

  function _hide(callback) {
    $actionSheet.addClass(options.isAndroid ? 'weui-animate-fade-out' : 'weui-animate-slide-down');
    $actionSheetMask.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
      $actionSheetWrap.remove();
      actionSheet_sington = false;
      options.onClose();
      callback && callback();
    });
  }

  function hide(callback) {
    _hide(callback);
  }

  util('body').append($actionSheetWrap); // 这里获取一下计算后的样式，强制触发渲染. fix IOS10下闪现的问题

  util.getStyle($actionSheet[0], 'transform');
  $actionSheet.addClass(options.isAndroid ? 'weui-animate-fade-in' : 'weui-animate-slide-up');
  $actionSheetMask.addClass('weui-animate-fade-in').on('click', function () {
    hide();
  });
  $actionSheetWrap.find('.weui-actionsheet__menu').on('click', '.weui-actionsheet__cell', function (evt) {
    var index = util(_this).index();
    menus[index].onClick.call(_this, evt);
    hide();
  });
  $actionSheetWrap.find('.weui-actionsheet__action').on('click', '.weui-actionsheet__cell', function (evt) {
    var index = util(_this).index();
    actions[index].onClick.call(_this, evt);
    hide();
  });
  actionSheet_sington = $actionSheetWrap[0];
  actionSheet_sington.hide = hide;
  return actionSheet_sington;
}

/* harmony default export */ var actionSheet_actionSheet_0 = (actionSheet_actionSheet);
// EXTERNAL MODULE: ./topTips/topTips.html
var topTips = __webpack_require__("QqVI");
var topTips_default = /*#__PURE__*/__webpack_require__.n(topTips);

// CONCATENATED MODULE: ./topTips/topTips.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/


var _toptips = null;
/**
 * toptips 顶部报错提示
 * @param {string} content 报错的文字
 * @param {number|function|object=} options 多少毫秒后消失|消失后的回调|配置项
 * @param {number=} [options.duration=3000] 多少毫秒后消失
 * @param {string=} options.className 自定义类名
 * @param {function=} options.callback 消失后的回调
 *
 * @example
 * weui.topTips('请填写正确的字段');
 * weui.topTips('请填写正确的字段', 3000);
 * weui.topTips('请填写正确的字段', function(){ console.log('close') });
 * weui.topTips('请填写正确的字段', {
 *     duration: 3000,
 *     className: 'custom-classname',
 *     callback: function(){ console.log('close') }
 * });
 *
 * // 主动关闭
 * const $topTips = weui.topTips('请填写正确的字段');
 * $topTips.hide(function() {
 *      console.log('`topTips` has been hidden');
 * });
 */

function topTips_topTips(content, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === 'number') {
    options = {
      duration: options
    };
  }

  if (typeof options === 'function') {
    options = {
      callback: options
    };
  }

  options = util.extend({
    content: content,
    duration: 3000,
    callback: util.noop,
    className: ''
  }, options);
  var $topTips = util(util.render(topTips_default.a, options));

  function _hide(callback) {
    // _hide = $.noop; // 防止二次调用导致报错
    $topTips.remove();
    callback && callback();
    options.callback();
    _toptips = null;
  }

  function hide(callback) {
    _hide(callback);
  }

  util('body').append($topTips);

  if (_toptips) {
    clearTimeout(_toptips.timeout);

    _toptips.hide();
  }

  _toptips = {
    hide: hide
  };
  _toptips.timeout = setTimeout(hide, options.duration);
  $topTips[0].hide = hide;
  return $topTips[0];
}

/* harmony default export */ var topTips_topTips_0 = (topTips_topTips);
// CONCATENATED MODULE: ./searchBar/searchBar.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
* 
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
* 
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
* 
*       http://opensource.org/licenses/MIT
* 
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * searchbar 搜索框，主要实现搜索框组件一些显隐逻辑
 * @param {string} selector searchbar的selector
 *
 * @example
 * #### html
 * ```html
 * <div class="weui-search-bar" id="searchBar">
 *     <form class="weui-search-bar__form">
 *         <div class="weui-search-bar__box">
 *             <i class="weui-icon-search"></i>
 *             <input type="search" class="weui-search-bar__input" placeholder="搜索" required="">
 *             <a href="javascript:" class="weui-icon-clear"></a>
 *         </div>
 *         <label class="weui-search-bar__label">
 *             <i class="weui-icon-search"></i>
 *             <span>搜索</span>
 *         </label>
 *     </form>
 *     <a href="javascript:" class="weui-search-bar__cancel-btn">取消</a>
 * </div>
 * ```
 *
 * #### js
 * ```javascript
 * weui.searchBar('#searchBar');
 * ```
 */

function searchBar(selector) {
  var $eles = util(selector);
  $eles.forEach(function (ele) {
    var $searchBar = util(ele);
    var $searchLabel = $searchBar.find('.weui-search-bar__label');
    var $searchInput = $searchBar.find('.weui-search-bar__input');
    var $searchClear = $searchBar.find('.weui-icon-clear');
    var $searchCancel = $searchBar.find('.weui-search-bar__cancel-btn');

    function cancelSearch() {
      $searchInput.val('');
      $searchBar.removeClass('weui-search-bar_focusing');
    }

    $searchLabel.on('click', function () {
      $searchBar.addClass('weui-search-bar_focusing');
      $searchInput[0].focus();
    });
    $searchInput.on('blur', function () {
      if (!this.value.length) cancelSearch();
    });
    $searchClear.on('click', function () {
      $searchInput.val('');
      $searchInput[0].focus();
    });
    $searchCancel.on('click', function () {
      cancelSearch();
      $searchInput[0].blur();
    });
  });
  return $eles;
}

/* harmony default export */ var searchBar_searchBar = (searchBar);
// CONCATENATED MODULE: ./tab/tab.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * tab tab导航栏
 * @param {string} selector tab的selector
 * @param {object=} options 配置项
 * @param {number=} [options.defaultIndex=0] 初始展示的index
 * @param {function=} options.onChange 点击tab时，返回对应的index
 *
 * @example
 * #### html
 * ```html
 * <div class="weui-tab" id="tab">
 *     <div class="weui-navbar">
 *         <div class="weui-navbar__item">反馈</div>
 *         <div class="weui-navbar__item">表单</div>
 *         <div class="weui-navbar__item">上传</div>
 *         <div class="weui-navbar__item">其它</div>
 *     </div>
 *     <div class="weui-tab__panel">
 *         <div class="weui-tab__content">反馈页</div>
 *         <div class="weui-tab__content">表单页</div>
 *         <div class="weui-tab__content">上传页</div>
 *         <div class="weui-tab__content">其它页</div>
 *     </div>
 * </div>
 * ```
 *
 * #### js
 * ```javascript
 * weui.tab('#tab',{
 *     defaultIndex: 0,
 *     onChange: function(index){
 *         console.log(index);
 *     }
 * });
 * ```
 */

function tab(selector, options) {
  if (options === void 0) {
    options = {};
  }

  var $eles = util(selector);
  options = util.extend({
    defaultIndex: 0,
    onChange: util.noop
  }, options);
  $eles.forEach(function (ele) {
    var $tab = util(ele);
    var $tabItems = $tab.find('.weui-navbar__item, .weui-tabbar__item');
    var $tabContents = $tab.find('.weui-tab__content');
    $tabItems.eq(options.defaultIndex).addClass('weui-bar__item_on');
    $tabContents.eq(options.defaultIndex).show();
    $tabItems.on('click', function () {
      var $this = util(this);
      var index = $this.index();
      $tabItems.removeClass('weui-bar__item_on');
      $this.addClass('weui-bar__item_on');
      $tabContents.hide();
      $tabContents.eq(index).show();
      options.onChange.call(this, index);
    });
  });
  return this;
}

/* harmony default export */ var tab_tab = (tab);
// EXTERNAL MODULE: ../node_modules/_@babel_runtime-corejs2@7.6.0@@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("hiV+");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// CONCATENATED MODULE: ./form/form.js


/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/



function _findCellParent(ele) {
  if (!ele || !ele.classList) return null;
  if (ele.classList.contains('weui-cell')) return ele;
  return _findCellParent(ele.parentNode);
}

function _validate($input, $form, regexp) {
  var input = $input[0];
  var val = $input.val();

  if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') {
    var reg = input.getAttribute('pattern') || '';

    if (input.type === 'radio') {
      var radioInputs = $form.find('input[type="radio"][name="' + input.name + '"]');

      for (var i = 0, len = radioInputs.length; i < len; ++i) {
        if (radioInputs[i].checked) return null;
      }

      return 'empty';
    } else if (input.type === 'checkbox') {
      if (reg) {
        var checkboxInputs = $form.find('input[type="checkbox"][name="' + input.name + '"]');
        var regs = reg.replace(/[{\s}]/g, '').split(',');
        var count = 0;

        if (regs.length !== 2) {
          throw new Error(input.outerHTML + ' regexp is wrong.');
        }

        checkboxInputs.forEach(function (checkboxInput) {
          if (checkboxInput.checked) ++count;
        });

        if (regs[1] === '') {
          // {0,}
          if (count >= parse_int_default()(regs[0], 10)) {
            return null;
          } else {
            return count === 0 ? 'empty' : 'notMatch';
          }
        } else {
          // {0,2}
          if (parse_int_default()(regs[0], 10) <= count && count <= parse_int_default()(regs[1], 10)) {
            return null;
          } else {
            return count === 0 ? 'empty' : 'notMatch';
          }
        }
      } else {
        return input.checked ? null : 'empty';
      }
    } else if (reg) {
      if (/^REG_/.test(reg)) {
        if (!regexp) throw new Error('RegExp ' + reg + ' is empty.');
        reg = reg.replace(/^REG_/, '');
        if (!regexp[reg]) throw new Error('RegExp ' + reg + ' has not found.');
        reg = regexp[reg];
      }

      return new RegExp(reg).test(val) ? null : !$input.val().length ? 'empty' : 'notMatch';
    } else if (!$input.val().length) {
      return 'empty';
    } else {
      return null;
    }
  } else if (val.length) {
    // 有输入值
    return null;
  }

  return 'empty';
}
/**
 * 表单校验
 * @param {string} selector 表单的selector
 * @param {function} callback 校验后的回调
 * @param {Object=} options 配置项
 * @param {object=} options.regexp 表单所需的正则表达式
 *
 * @example
 * ##### 普通input的HTML
 * ```html
 * <input type="tel" required pattern="[0-9]{11}" placeholder="输入你现在的手机号" emptyTips="请输入手机号" notMatchTips="请输入正确的手机号">
 * <input type="text" required pattern="REG_IDNUM" placeholder="输入你的身份证号码" emptyTips="请输入身份证号码" notMatchTips="请输入正确的身份证号码">
 * ```
 * - required 表示需要校验
 * - pattern 表示校验的正则，不填则进行为空校验。当以REG_开头时，则获取校验时传入的正则。如`pattern="REG_IDNUM"`，则需要在调用相应方法时传入`{regexp:{IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/}}`，详情请看下面`checkIfBlur`和`validate`
 * - 报错的wording会从 emptyTips | notMatchTips | tips | placeholder 里获得
 * <br>
 *
 * ##### radio
 * radio需要检验，只需把参数写在同一表单下，同name的第一个元素即可。
 * ```html
 * <input type="radio" value="male" name="sex" required tips="请选择性别" />
 * <input type="radio" value="female" name="sex" />
 * ```
 * <br>
 *
 * ##### checkbox
 * checkbox需要校验，只需把参数写在同一表单下，同name的第一个元素即可。
 * pattern 规定选择个数，用法与正则一致，例如：
 * ```html
 * <input type="checkbox" name="assistance" value="黄药师" required pattern="{1,2}" tips="请勾选1-2个敲码助手" />
 * <input type="checkbox" name="assistance" value="欧阳锋" />
 * <input type="checkbox" name="assistance" value="段智兴" />
 * <input type="checkbox" name="assistance" value="洪七公" />
 * ```
 * - {1,}   至少选择1个
 * - {1,2}  选择1-2个
 * - 这里不会出现{0,}这种情况，因为有required就表示必选。否则直接去掉required即可。
 * <br>
 *
 * ``` js
 * // weui.form.validate('#form', function(error){ console.log(error);}); // error: {dom:[Object], msg:[String]}
 * weui.form.validate('#form', function (error) {
 *     if (!error) {
 *         const loading = weui.loading('提交中...');
 *         setTimeout(function () {
 *             loading.hide();
 *             weui.toast('提交成功', 3000);
 *         }, 1500);
 *     }
 *     // return true; // 当return true时，不会显示错误
 * }, {
 *     regexp: {
 *         IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
 *         VCODE: /^.{4}$/
 *     }
 * });
 * ```
 */


function validate(selector, callback, options) {
  if (callback === void 0) {
    callback = util.noop;
  }

  if (options === void 0) {
    options = {};
  }

  var $eles = util(selector);
  $eles.forEach(function (ele) {
    var $form = util(ele);
    var $requireds = $form.find('[required]');
    if (typeof callback !== 'function') callback = showErrorTips;

    for (var i = 0, len = $requireds.length; i < len; ++i) {
      var $required = $requireds.eq(i);

      var errorMsg = _validate($required, $form, options.regexp);

      var error = {
        ele: $required[0],
        msg: errorMsg
      };

      if (errorMsg) {
        if (!callback(error)) showErrorTips(error);
        return;
      }
    }

    callback(null);
  });
  return this;
}
/**
 * checkIfBlur 当表单的input失去焦点时校验
 * @param {string} selector 表单的selector
 * @param {Object=} options 配置项
 * @param {object=} options.regexp 表单所需的正则表达式
 *
 * @example
 * weui.form.checkIfBlur('#form', {
 *     regexp: {
 *         IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
 *         VCODE: /^.{4}$/
 *     }
 * });
 */


function checkIfBlur(selector, options) {
  if (options === void 0) {
    options = {};
  }

  var $eles = util(selector);
  $eles.forEach(function (ele) {
    var $form = util(ele);
    $form.find('[required]').on('blur', function () {
      // checkbox 和 radio 不做blur检测，以免误触发
      if (this.type === 'checkbox' || this.type === 'radio') return;
      var $this = util(this);
      if ($this.val().length < 1) return; // 当空的时候不校验，以防不断弹出toptips

      var errorMsg = _validate($this, $form, options.regexp);

      if (errorMsg) {
        showErrorTips({
          ele: $this[0],
          msg: errorMsg
        });
      }
    }).on('focus', function () {
      hideErrorTips(this);
    });
  });
  return this;
}
/**
 * showErrorTips 显示错误提示
 * @param {Object} error 错误数据
 * @param {string} error.ele 出错了的dom元素
 * @param {string} error.msg 出错了的msg。会根据此`msg`找到对应的`Tips`（比如`msg`是`empty`），那么`ele`上的`emptyTips`就会以`topTips`显示
 *
 * @example
 * weui.form.showErrorTips({
 *     ele: document.getElementById("xxxInput")
 *     msg: 'empty'
 * });
 */


function showErrorTips(error) {
  if (error) {
    var $ele = util(error.ele);
    var msg = error.msg;
    var tips = $ele.attr(msg + 'Tips') || $ele.attr('tips') || $ele.attr('placeholder');
    if (tips) topTips_topTips_0(tips);
    if (error.ele.type === 'checkbox' || error.ele.type === 'radio') return;

    var cellParent = _findCellParent(error.ele);

    if (cellParent) cellParent.classList.add('weui-cell_warn');
  }
}
/**
 * hideErrorTips 隐藏错误提示
 * @param {Object} ele dom元素
 *
 * @example
 * weui.form.hideErrorTips(document.getElementById("xxxInput"));
 */


function hideErrorTips(ele) {
  var cellParent = _findCellParent(ele);

  if (cellParent) cellParent.classList.remove('weui-cell_warn');
}


// EXTERNAL MODULE: ./uploader/item.html
var uploader_item = __webpack_require__("y1Mz");
var item_default = /*#__PURE__*/__webpack_require__.n(uploader_item);

// CONCATENATED MODULE: ./uploader/image.js


/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * 检查图片是否有被压扁，如果有，返回比率
 * ref to http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
 */
function detectVerticalSquash(img) {
  // 拍照在IOS7或以下的机型会出现照片被压扁的bug
  var data;
  var ih = img.naturalHeight;
  var canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = ih;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  try {
    data = ctx.getImageData(0, 0, 1, ih).data;
  } catch (err) {
    console.log('Cannot check verticalSquash: CORS?');
    return 1;
  }

  var sy = 0;
  var ey = ih;
  var py = ih;

  while (py > sy) {
    var alpha = data[(py - 1) * 4 + 3];

    if (alpha === 0) {
      ey = py;
    } else {
      sy = py;
    }

    py = ey + sy >> 1; // py = parseInt((ey + sy) / 2)
  }

  var ratio = py / ih;
  return ratio === 0 ? 1 : ratio;
}
/**
 * dataURI to blob, ref to https://gist.github.com/fupslot/5015897
 * @param dataURI
 */


function dataURItoBuffer(dataURI) {
  var byteString = atob(dataURI.split(',')[1]);
  var buffer = new ArrayBuffer(byteString.length);
  var view = new Uint8Array(buffer);

  for (var i = 0; i < byteString.length; i++) {
    view[i] = byteString.charCodeAt(i);
  }

  return buffer;
}

function dataURItoBlob(dataURI) {
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  var buffer = dataURItoBuffer(dataURI);
  return new Blob([buffer], {
    type: mimeString
  });
}
/**
 * 获取图片的orientation
 * ref to http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
 */


function getOrientation(buffer) {
  var view = new DataView(buffer);
  if (view.getUint16(0, false) !== 0xFFD8) return -2;
  var length = view.byteLength;
  var offset = 2;

  while (offset < length) {
    var marker = view.getUint16(offset, false);
    offset += 2;

    if (marker === 0xFFE1) {
      if (view.getUint32(offset += 2, false) !== 0x45786966) return -1;
      var little = view.getUint16(offset += 6, false) === 0x4949;
      offset += view.getUint32(offset + 4, little);
      var tags = view.getUint16(offset, little);
      offset += 2;

      for (var i = 0; i < tags; i++) {
        if (view.getUint16(offset + i * 12, little) === 0x0112) {
          return view.getUint16(offset + i * 12 + 8, little);
        }
      }
    } else if ((marker & 0xFF00) !== 0xFF00) {
      break;
    } else {
      offset += view.getUint16(offset, false);
    }
  }

  return -1;
}
/**
 * 修正拍照时图片的方向
 * ref to http://stackoverflow.com/questions/19463126/how-to-draw-photo-with-correct-orientation-in-canvas-after-capture-photo-by-usin
 */


function orientationHelper(canvas, ctx, orientation) {
  var w = canvas.width;
  var h = canvas.height;

  if (orientation > 4) {
    canvas.width = h;
    canvas.height = w;
  }

  switch (orientation) {
    case 2:
      ctx.translate(w, 0);
      ctx.scale(-1, 1);
      break;

    case 3:
      ctx.translate(w, h);
      ctx.rotate(Math.PI);
      break;

    case 4:
      ctx.translate(0, h);
      ctx.scale(1, -1);
      break;

    case 5:
      ctx.rotate(0.5 * Math.PI);
      ctx.scale(1, -1);
      break;

    case 6:
      ctx.rotate(0.5 * Math.PI);
      ctx.translate(0, -h);
      break;

    case 7:
      ctx.rotate(0.5 * Math.PI);
      ctx.translate(w, -h);
      ctx.scale(-1, 1);
      break;

    case 8:
      ctx.rotate(-0.5 * Math.PI);
      ctx.translate(-w, 0);
      break;
  }
}
/**
 * 压缩图片
 */


function compress(file, options, callback) {
  var reader = new FileReader();

  reader.onload = function (evt) {
    if (options.compress === false) {
      // 不启用压缩 & base64上传 的分支，不做任何处理，直接返回文件的base64编码
      file.base64 = evt.target.result;
      callback(file);
      return;
    } // 启用压缩的分支


    var img = new Image();

    img.onload = function () {
      var ratio = detectVerticalSquash(img);
      var orientation = getOrientation(dataURItoBuffer(img.src));
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var maxW = options.compress.width;
      var maxH = options.compress.height;
      var w = img.width;
      var h = img.height;
      var dataURL;

      if (w < h && h > maxH) {
        w = parse_int_default()(maxH * img.width / img.height, 10);
        h = maxH;
      } else if (w >= h && w > maxW) {
        h = parse_int_default()(maxW * img.height / img.width, 10);
        w = maxW;
      }

      canvas.width = w;
      canvas.height = h;

      if (orientation > 0) {
        orientationHelper(canvas, ctx, orientation);
      }

      ctx.drawImage(img, 0, 0, w, h / ratio);

      if (/image\/jpeg/.test(file.type) || /image\/jpg/.test(file.type)) {
        dataURL = canvas.toDataURL('image/jpeg', options.compress.quality);
      } else {
        dataURL = canvas.toDataURL(file.type);
      }

      if (options.type === 'file') {
        if (/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)) {
          // 压缩出错，以文件方式上传的，采用原文件上传
          console.warn('Compress fail, dataURL is ' + dataURL + '. Next will use origin file to upload.');
          callback(file);
        } else {
          var blob = dataURItoBlob(dataURL);
          blob.id = file.id;
          blob.name = file.name;
          blob.lastModified = file.lastModified;
          blob.lastModifiedDate = file.lastModifiedDate;
          callback(blob);
        }
      } else {
        if (/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)) {
          // 压缩失败，以base64上传的，直接报错不上传
          options.onError(file, new Error('Compress fail, dataURL is ' + dataURL + '.'));
          callback();
        } else {
          file.base64 = dataURL;
          callback(file);
        }
      }
    };

    img.src = evt.target.result;
  };

  reader.readAsDataURL(file);
}


// CONCATENATED MODULE: ./uploader/upload.js


/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/
function upload(options) {
  var url = options.url,
      file = options.file,
      fileVal = options.fileVal,
      onBeforeSend = options.onBeforeSend,
      onProgress = options.onProgress,
      onError = options.onError,
      onSuccess = options.onSuccess,
      xhrFields = options.xhrFields;
  var name = file.name,
      type = file.type,
      lastModifiedDate = file.lastModifiedDate;
  var data = {
    name: name,
    type: type,
    size: options.type === 'file' ? file.size : file.base64.length,
    lastModifiedDate: lastModifiedDate
  };
  var headers = {};
  if (onBeforeSend(file, data, headers) === false) return;
  file.status = 'progress';
  onProgress(file, 0);
  var formData = new FormData();
  var xhr = new XMLHttpRequest();
  file.xhr = xhr; // 设置参数

  keys_default()(data).forEach(function (key) {
    formData.append(key, data[key]);
  });

  if (options.type === 'file') {
    formData.append(fileVal, file, name);
  } else {
    formData.append(fileVal, file.base64);
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        try {
          // 只支持json
          var ret = JSON.parse(xhr.responseText);
          onSuccess(file, ret);
        } catch (err) {
          onError(file, err);
        }
      } else {
        onError(file, new Error('XMLHttpRequest response status is ' + xhr.status));
      }
    }
  };

  xhr.upload.addEventListener('progress', function (evt) {
    if (evt.total === 0) return;
    var percent = Math.ceil(evt.loaded / evt.total) * 100;
    onProgress(file, percent);
  }, false);
  xhr.open('POST', url);

  keys_default()(xhrFields).forEach(function (key) {
    xhr[key] = xhrFields[key];
  }); // 设置头部信息


  keys_default()(headers).forEach(function (key) {
    xhr.setRequestHeader(key, headers[key]);
  });

  xhr.send(formData);
}
// CONCATENATED MODULE: ./uploader/uploader.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/




var _id = 0;
/**
 * uploader 上传组件
 * @param {string} selector 上传组件的selector
 * @param {object} options 配置项
 * @param {string} [options.url] 上传的url，返回值需要使用json格式
 * @param {boolean} [options.auto=true] 设置为`true`后，不需要手动调用上传，有文件选择即开始上传。用this.upload()来上传，详情请看example
 * @param {string} [options.type=file] 上传类型, `file`为文件上传; `base64`为以base64上传
 * @param {string=} [options.fileVal=file] 文件上传域的name
 * @param {object=} [options.compress] 压缩配置, `false`则不压缩
 * @param {number=} [options.compress.width=1600] 图片的最大宽度
 * @param {number=} [options.compress.height=1600] 图片的最大高度
 * @param {number=} [options.compress.quality=.8] 压缩质量, 取值范围 0 ~ 1
 * @param {function=} [options.onBeforeQueued] 文件添加前的回调，return false则不添加
 * @param {function=} [options.onQueued] 文件添加成功的回调
 * @param {function=} [options.onBeforeSend] 文件上传前调用，具体参数看example
 * @param {function=} [options.onSuccess] 上传成功的回调
 * @param {function=} [options.onProgress] 上传进度的回调
 * @param {function=} [options.onError] 上传失败的回调
 *
 * @example
 * #### html
 * ```html
 <div class="weui-cells weui-cells_form" id="uploader">
 <div class="weui-cell">
 <div class="weui-cell__bd">
 <div class="weui-uploader">
 <div class="weui-uploader__hd">
 <p class="weui-uploader__title">图片上传</p>
 <div class="weui-uploader__info"><span id="uploadCount">0</span>/5</div>
 </div>
 <div class="weui-uploader__bd">
 <ul class="weui-uploader__files" id="uploaderFiles"></ul>
 <div class="weui-uploader__input-box">
 <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" capture="camera" multiple="" />
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 * ```
 *
 * #### js
 * ```javascript
 * let uploadCount = 0;
 * weui.uploader('#uploader', {
 *    url: 'http://localhost:8081',
 *    auto: true,
 *    type: 'file',
 *    fileVal: 'fileVal',
 *    compress: {
 *        width: 1600,
 *        height: 1600,
 *        quality: .8
 *    },
 *    onBeforeQueued: function(files) {
 *        // `this` 是轮询到的文件, `files` 是所有文件
 *
 *        if(["image/jpg", "image/jpeg", "image/png", "image/gif"].indexOf(this.type) < 0){
 *            weui.alert('请上传图片');
 *            return false; // 阻止文件添加
 *        }
 *        if(this.size > 10 * 1024 * 1024){
 *            weui.alert('请上传不超过10M的图片');
 *            return false;
 *        }
 *        if (files.length > 5) { // 防止一下子选择过多文件
 *            weui.alert('最多只能上传5张图片，请重新选择');
 *            return false;
 *        }
 *        if (uploadCount + 1 > 5) {
 *            weui.alert('最多只能上传5张图片');
 *            return false;
 *        }
 *
 *        ++uploadCount;
 *
 *        // return true; // 阻止默认行为，不插入预览图的框架
 *    },
 *    onQueued: function(){
 *        console.log(this);
 *
 *        // console.log(this.status); // 文件的状态：'ready', 'progress', 'success', 'fail'
 *        // console.log(this.base64); // 如果是base64上传，file.base64可以获得文件的base64
 *
 *        // this.upload(); // 如果是手动上传，这里可以通过调用upload来实现；也可以用它来实现重传。
 *        // this.stop(); // 中断上传
 *
 *        // return true; // 阻止默认行为，不显示预览图的图像
 *    },
 *    onBeforeSend: function(data, headers){
 *        console.log(this, data, headers);
 *        // $.extend(data, { test: 1 }); // 可以扩展此对象来控制上传参数
 *        // $.extend(headers, { Origin: 'http://127.0.0.1' }); // 可以扩展此对象来控制上传头部
 *
 *        // return false; // 阻止文件上传
 *    },
 *    onProgress: function(percent){
 *        console.log(this, percent);
 *        // return true; // 阻止默认行为，不使用默认的进度显示
 *    },
 *    onSuccess: function (ret) {
 *        console.log(this, ret);
 *        // return true; // 阻止默认行为，不使用默认的成功态
 *    },
 *    onError: function(err){
 *        console.log(this, err);
 *        // return true; // 阻止默认行为，不使用默认的失败态
 *    }
 * });
 * ```
 */

function uploader(selector, options) {
  var $uploader = util(selector);
  var URL = window.URL || window.webkitURL || window.mozURL; // 找到DOM里file-content，若无，则插入一个。

  function findFileCtn($uploader, id) {
    var $file = $uploader.find('[data-id="' + id + '"]');
    var $fileCtn = $file.find('.weui-uploader__file-content');

    if (!$fileCtn.length) {
      $fileCtn = util('<div class="weui-uploader__file-content"></div>');
      $file.append($fileCtn);
    }

    $file.addClass('weui-uploader__file_status');
    return $fileCtn;
  } // 清除DOM里的上传状态


  function clearFileStatus($uploader, id) {
    var $file = $uploader.find('[data-id="' + id + '"]').removeClass('weui-uploader__file_status');
    $file.find('.weui-uploader__file-content').remove();
  } // 设置上传


  function setUploadFile(file) {
    file.url = URL.createObjectURL(file);
    file.status = 'ready';

    file.upload = function () {
      upload(util.extend({
        $uploader: $uploader,
        file: file
      }, options));
    };

    file.stop = function () {
      this.xhr.abort();
    };

    options.onQueued(file);
    if (options.auto) file.upload();
  }

  options = util.extend({
    url: '',
    auto: true,
    type: 'file',
    fileVal: 'file',
    xhrFields: {},
    onBeforeQueued: util.noop,
    onQueued: util.noop,
    onBeforeSend: util.noop,
    onSuccess: util.noop,
    onProgress: util.noop,
    onError: util.noop
  }, options);

  if (options.compress !== false) {
    options.compress = util.extend({
      width: 1600,
      height: 1600,
      quality: 0.8
    }, options.compress);
  }

  if (options.onBeforeQueued) {
    var onBeforeQueued = options.onBeforeQueued;

    options.onBeforeQueued = function (file, files) {
      var ret = onBeforeQueued.call(file, files);

      if (ret === false) {
        return false;
      }

      if (ret === true) {
        return;
      }

      var $item = util(util.render(item_default.a, {
        id: file.id
      }));
      $uploader.find('.weui-uploader__files').append($item);
    };
  }

  if (options.onQueued) {
    var onQueued = options.onQueued;

    options.onQueued = function (file) {
      if (!onQueued.call(file)) {
        var $file = $uploader.find('[data-id="' + file.id + '"]');
        $file.css({
          backgroundImage: 'url("' + (file.base64 || file.url) + '")'
        });

        if (!options.auto) {
          clearFileStatus($uploader, file.id);
        }
      }
    };
  }

  if (options.onBeforeSend) {
    var onBeforeSend = options.onBeforeSend;

    options.onBeforeSend = function (file, data, headers) {
      var ret = onBeforeSend.call(file, data, headers);

      if (ret === false) {
        return false;
      }
    };
  }

  if (options.onSuccess) {
    var onSuccess = options.onSuccess;

    options.onSuccess = function (file, ret) {
      file.status = 'success';

      if (!onSuccess.call(file, ret)) {
        clearFileStatus($uploader, file.id);
      }
    };
  }

  if (options.onProgress) {
    var onProgress = options.onProgress;

    options.onProgress = function (file, percent) {
      if (!onProgress.call(file, percent)) {
        findFileCtn($uploader, file.id).html(percent + '%');
      }
    };
  }

  if (options.onError) {
    var onError = options.onError;

    options.onError = function (file, err) {
      file.status = 'fail';

      if (!onError.call(file, err)) {
        findFileCtn($uploader, file.id).html('<i class="weui-icon-warn"></i>');
      }
    };
  }

  $uploader.find('input[type="file"]').on('change', function (evt) {
    var files = evt.target.files;

    if (files.length === 0) {
      return;
    }

    if (options.compress === false && options.type === 'file') {
      // 以原文件方式上传
      Array.prototype.forEach.call(files, function (file) {
        file.id = ++_id;
        if (options.onBeforeQueued(file, files) === false) return;
        setUploadFile(file);
      });
    } else {
      // base64上传 和 压缩上传
      Array.prototype.forEach.call(files, function (file) {
        file.id = ++_id;
        if (options.onBeforeQueued(file, files) === false) return;
        compress(file, options, function (blob) {
          if (blob) setUploadFile(blob);
        });
      });
    }

    this.value = '';
  });
}

/* harmony default export */ var uploader_uploader = (uploader);
// CONCATENATED MODULE: ./picker/cron.js


/*
* Mudas(mschool.tech) is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2019 mudas. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/
var regex = /^(\d+)(?:-(\d+))?(?:\/(\d+))?$/g;
var cron_constraints = [[1, 31], [1, 12], [0, 6]];
/**
 * Schedule
 */

var Schedule =
/*#__PURE__*/
function () {
  function Schedule(fields, start, end) {
    /**
     * dayOfMonth
     * @type {Array}
     */
    this._dates = fields[0];
    /**
     * month
     * @type {Array}
     */

    this._months = fields[1];
    /**
     * dayOfWeek
     * @type {Array}
     */

    this._days = fields[2];
    /**
     * start
     * @type {Date}
     */

    this._start = start;
    /**
     * end
     * @type {Date}
     */

    this._end = end;
    /**
     * cursor
     * @type {Date}
     * @private
     */

    this._pointer = start;
  }
  /**
   * 查询下一个合法范围内的日期
   * @return {Date}
   * @private
   */


  var _proto = Schedule.prototype;

  _proto._findNext = function _findNext() {
    var next;
    var cond = true;

    while (cond) {
      if (this._end.getTime() - this._pointer.getTime() < 0) {
        throw new Error("out of range, end is " + this._end + ", current is " + this._pointer);
      }

      var month = this._pointer.getMonth();

      var date = this._pointer.getDate();

      var day = this._pointer.getDay();

      var mc = this._months.indexOf(month + 1) !== -1;
      var dc = this._dates.indexOf(date) !== -1;
      var dayc = this._days.indexOf(day) !== -1;

      if (mc && dc && dayc) {
        next = new Date(this._pointer);
        break;
      } else if (!mc) {
        this._pointer.setMonth(month + 1);

        this._pointer.setDate(1);
      } else if (!dc) {
        this._pointer.setDate(date + 1);
      } else {
        this._pointer.setDate(date + 1);
      }
    }

    return next;
  }
  /**
   * fetch next date
   */
  ;

  _proto.next = function next() {
    var value = this._findNext(); // move next date


    this._pointer.setDate(this._pointer.getDate() + 1);

    return {
      value: value,
      done: !this.hasNext()
    };
  }
  /**
   * has next
   * @returns {boolean}
   */
  ;

  _proto.hasNext = function hasNext() {
    try {
      this._findNext();

      return true;
    } catch (e) {
      return false;
    }
  };

  return Schedule;
}();

function parseField(field, constraints) {
  var low = constraints[0];
  var high = constraints[1];
  var result = [];
  var pointer; // * 号等于最低到最高

  field = field.replace(/\*/g, low + '-' + high); // 处理 1,2,5-9 这种情况

  var fields = field.split(',');

  var replacer = function replacer($0, lower, upper, step) {
    // ref to `cron-parser`
    step = parse_int_default()(step, 10) || 1; // Positive integer higher than constraints[0]

    lower = Math.min(Math.max(low, ~~Math.abs(lower)), high); // Positive integer lower than constraints[1]

    upper = upper ? Math.min(high, ~~Math.abs(upper)) : lower; // Count from the lower barrier to the upper

    pointer = lower;

    do {
      result.push(pointer);
      pointer += step;
    } while (pointer <= upper); // return result;

  };

  for (var i = 0, len = fields.length; i < len; i++) {
    var f = fields[i];

    if (f.match(regex)) {
      f.replace(regex, replacer);
    }
  }

  return result;
}
/**
 *
 * @param expr
 * @param start
 * @param end
 * @returns {*}
 */


function parse(expr, start, end) {
  var atoms = expr.replace(/^\s\s*|\s\s*$/g, '').split(/\s+/);
  var fields = [];
  atoms.forEach(function (atom, index) {
    var constraint = cron_constraints[index];
    fields.push(parseField(atom, constraint));
  });
  return new Schedule(fields, start, end);
}

/* harmony default export */ var cron = (parse);
// CONCATENATED MODULE: ./picker/scroll.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * set transition
 * @param $target
 * @param time
 */

var setTransition = function setTransition($target, time) {
  return $target.css({
    '-webkit-transition': "all " + time + "s",
    transition: "all " + time + "s"
  });
};
/**
 * set translate
 */


var setTranslate = function setTranslate($target, diff) {
  return $target.css({
    '-webkit-transform': "translate3d(0, " + diff + "px, 0)",
    transform: "translate3d(0, " + diff + "px, 0)"
  });
};
/**
 * @desc get index of middle item
 * @param items
 * @returns {number}
 */


var getDefaultIndex = function getDefaultIndex(items) {
  var current = Math.floor(items.length / 2);
  var count = 0;

  while (!!items[current] && items[current].disabled) {
    current = ++current % items.length;
    count++;

    if (count > items.length) {
      throw new Error('No selectable item.');
    }
  }

  return current;
};

var getDefaultTranslate = function getDefaultTranslate(offset, rowHeight, items) {
  var currentIndex = getDefaultIndex(items);
  return (offset - currentIndex) * rowHeight;
};
/**
 * get max translate
 * @param offset
 * @param rowHeight
 * @returns {number}
 */


var getMax = function getMax(offset, rowHeight) {
  return offset * rowHeight;
};
/**
 * get min translate
 * @param offset
 * @param rowHeight
 * @param length
 * @returns {number}
 */


var getMin = function getMin(offset, rowHeight, length) {
  return -(rowHeight * (length - offset - 1));
};

util.fn.scroll = function (options) {
  var _this = this;

  var defaults = util.extend({
    items: [],
    // 数据
    scrollable: '.weui-picker__content',
    // 滚动的元素
    offset: 2,
    // 列表初始化时的偏移量（列表初始化时，选项是聚焦在中间的，通过offset强制往上挪3项，以达到初始选项是为顶部的那项）
    rowHeight: 48,
    // 列表每一行的高度
    onChange: util.noop,
    // onChange回调
    temp: null,
    // translate的缓存
    bodyHeight: 5 * 48 // picker的高度，用于辅助点击滚动的计算

  }, options);
  var items = defaults.items.map(function (item) {
    return "<div class=\"weui-picker__item" + (item.disabled ? ' weui-picker__item_disabled' : '') + "\">" + (typeof item === 'object' ? item.label : item) + "</div>";
  }).join('');
  var $this = util(this);
  $this.find('.weui-picker__content').html(items);
  var $scrollable = $this.find(defaults.scrollable); // 可滚动的元素

  var start; // 保存开始按下的位置

  var end; // 保存结束时的位置

  var startTime; // 开始触摸的时间

  var translate; // 缓存 translate

  var points = []; // 记录移动点
  // 首次触发选中事件
  // 如果有缓存的选项，则用缓存的选项，否则使用中间值。

  if (defaults.temp !== null && defaults.temp < defaults.items.length) {
    var index = defaults.temp;
    defaults.onChange.call(this, defaults.items[index], index);
    translate = (defaults.offset - index) * defaults.rowHeight;
  } else {
    var _index = getDefaultIndex(defaults.items);

    defaults.onChange.call(this, defaults.items[_index], _index);
    translate = getDefaultTranslate(defaults.offset, defaults.rowHeight, defaults.items);
  }

  setTranslate($scrollable, translate);

  var stop = function stop(diff) {
    translate += diff; // 移动到最接近的那一行

    translate = Math.round(translate / defaults.rowHeight) * defaults.rowHeight;
    var max = getMax(defaults.offset, defaults.rowHeight);
    var min = getMin(defaults.offset, defaults.rowHeight, defaults.items.length); // 不要超过最大值或者最小值

    if (translate > max) {
      translate = max;
    }

    if (translate < min) {
      translate = min;
    } // 如果是 disabled 的就跳过


    var index = defaults.offset - translate / defaults.rowHeight;

    while (!!defaults.items[index] && defaults.items[index].disabled) {
      diff > 0 ? ++index : --index;
    }

    translate = (defaults.offset - index) * defaults.rowHeight;
    setTransition($scrollable, 0.3);
    setTranslate($scrollable, translate); // 触发选择事件

    defaults.onChange.call(_this, defaults.items[index], index);
  };

  function _start(pageY) {
    start = pageY;
    startTime = +new Date();
  }

  function _move(pageY) {
    end = pageY;
    var diff = end - start;
    setTransition($scrollable, 0);
    setTranslate($scrollable, translate + diff);
    startTime = +new Date();
    points.push({
      time: startTime,
      y: end
    });

    if (points.length > 40) {
      points.shift();
    }
  }

  function _end(pageY) {
    if (!start) return;
    /**
     * 思路:
     * 0. touchstart 记录按下的点和时间
     * 1. touchmove 移动时记录前 40个经过的点和时间
     * 2. touchend 松开手时, 记录该点和时间. 如果松开手时的时间, 距离上一次 move时的时间超过 100ms, 那么认为停止了, 不执行惯性滑动
     *    如果间隔时间在 100ms 内, 查找 100ms 内最近的那个点, 和松开手时的那个点, 计算距离和时间差, 算出速度
     *    速度乘以惯性滑动的时间, 例如 300ms, 计算出应该滑动的距离
     */

    var endTime = new Date().getTime();
    var relativeY = $this[0].getBoundingClientRect().top + defaults.bodyHeight / 2;
    end = pageY; // 如果上次时间距离松开手的时间超过 100ms, 则停止了, 没有惯性滑动

    if (endTime - startTime > 100) {
      // 如果end和start相差小于10，则视为
      if (Math.abs(end - start) > 10) {
        stop(end - start);
      } else {
        stop(relativeY - end);
      }
    } else {
      if (Math.abs(end - start) > 10) {
        var endPos = points.length - 1;
        var startPos = endPos;

        for (var i = endPos; i > 0 && startTime - points[i].time < 100; i--) {
          startPos = i;
        }

        if (startPos !== endPos) {
          var ep = points[endPos];
          var sp = points[startPos];
          var t = ep.time - sp.time;
          var s = ep.y - sp.y;
          var v = s / t; // 出手时的速度

          var diff = v * 150 + (end - start); // 滑行 150ms,这里直接影响“灵敏度”

          stop(diff);
        } else {
          stop(0);
        }
      } else {
        stop(relativeY - end);
      }
    }

    start = null;
  }
  /**
   * 因为现在没有移除匿名函数的方法，所以先暴力移除（offAll），并且改变$scrollable。
   */


  $scrollable = $this.offAll().on('touchstart', function (evt) {
    _start(evt.changedTouches[0].pageY);
  }).on('touchmove', function (evt) {
    _move(evt.changedTouches[0].pageY);

    evt.preventDefault();
  }).on('touchend', function (evt) {
    _end(evt.changedTouches[0].pageY);
  }).find(defaults.scrollable); // 判断是否支持touch事件 https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js

  var isSupportTouch = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;

  if (!isSupportTouch) {
    $this.on('mousedown', function (evt) {
      _start(evt.pageY);

      evt.stopPropagation();
      evt.preventDefault();
    }).on('mousemove', function (evt) {
      if (!start) return;

      _move(evt.pageY);

      evt.stopPropagation();
      evt.preventDefault();
    }).on('mouseup mouseleave', function (evt) {
      _end(evt.pageY);

      evt.stopPropagation();
      evt.preventDefault();
    });
  }
};
// CONCATENATED MODULE: ./picker/util.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/
var depthOf = function depthOf(object) {
  var depth = 1;

  if (object.children && object.children[0]) {
    depth = depthOf(object.children[0]) + 1;
  }

  return depth;
};
// EXTERNAL MODULE: ./picker/picker.html
var picker = __webpack_require__("liIb");
var picker_default = /*#__PURE__*/__webpack_require__.n(picker);

// EXTERNAL MODULE: ./picker/group.html
var group = __webpack_require__("e4pq");
var group_default = /*#__PURE__*/__webpack_require__.n(group);

// CONCATENATED MODULE: ./picker/picker.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/







function Result(item) {
  if (typeof item !== 'object') {
    item = {
      label: item,
      value: item
    };
  }

  util.extend(this, item);
}

Result.prototype.toString = function () {
  return this.value;
};

Result.prototype.valueOf = function () {
  return this.value;
};

var picker_sington;

var temp = {}; // temp 存在上一次滑动的位置

/**
 * picker 多列选择器。
 * @param {array} items picker的数据，即用于生成picker的数据，picker的层级可以自己定义，但建议最多三层。数据格式参考example。
 * @param {Object} args 配置项
 * @param {number=} [args.depth] picker深度(也就是picker有多少列) 取值为1-3。如果为空，则取items第一项的深度。
 * @param {string=} [args.id=default] 作为picker的唯一标识，作用是以id缓存当时的选择。（当你想每次传入的defaultValue都是不一样时，可以使用不同的id区分）
 * @param {string=} [args.className] 自定义类名
 * @param {string=} [args.container] 指定容器
 * @param {array=} [args.defaultValue] 默认选项的value数组
 * @param {function=} [args.onChange] 在picker选中的值发生变化的时候回调
 * @param {function=} [args.onConfirm] 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。
 * @param {function=} [args.onClose] picker关闭后的回调
 *
 * @example
 * // 单列picker
 * weui.picker([
 * {
 *     label: '飞机票',
 *     value: 0,
 *     disabled: true // 不可用
 * },
 * {
 *     label: '火车票',
 *     value: 1
 * },
 * {
 *     label: '汽车票',
 *     value: 3
 * },
 * {
 *     label: '公车票',
 *     value: 4,
 * }
 * ], {
 *    className: 'custom-classname',
 *    container: 'body',
 *    defaultValue: [3],
 *    onChange: function (result) {
 *        console.log(result)
 *    },
 *    onConfirm: function (result) {
 *        console.log(result)
 *    },
 *    id: 'singleLinePicker'
 * });
 *
 * @example
 * // 多列picker
 * weui.picker([
 *     {
 *         label: '1',
 *         value: '1'
 *     }, {
 *         label: '2',
 *         value: '2'
 *     }, {
 *         label: '3',
 *         value: '3'
 *     }
 * ], [
 *     {
 *         label: 'A',
 *         value: 'A'
 *     }, {
 *         label: 'B',
 *         value: 'B'
 *     }, {
 *         label: 'C',
 *         value: 'C'
 *     }
 * ], {
 *     defaultValue: ['3', 'A'],
 *     onChange: function (result) {
 *         console.log(result);
 *     },
 *     onConfirm: function (result) {
 *         console.log(result);
 *     },
 *     id: 'multiPickerBtn'
 * });
 *
 * @example
 * // 级联picker
 * weui.picker([
 * {
 *     label: '飞机票',
 *     value: 0,
 *     children: [
 *         {
 *             label: '经济舱',
 *             value: 1
 *         },
 *         {
 *             label: '商务舱',
 *             value: 2
 *         }
 *     ]
 * },
 * {
 *     label: '火车票',
 *     value: 1,
 *     children: [
 *         {
 *             label: '卧铺',
 *             value: 1,
 *             disabled: true // 不可用
 *         },
 *         {
 *             label: '坐票',
 *             value: 2
 *         },
 *         {
 *             label: '站票',
 *             value: 3
 *         }
 *     ]
 * },
 * {
 *     label: '汽车票',
 *     value: 3,
 *     children: [
 *         {
 *             label: '快班',
 *             value: 1
 *         },
 *         {
 *             label: '普通',
 *             value: 2
 *         }
 *     ]
 * }
 * ], {
 *    className: 'custom-classname',
 *    container: 'body',
 *    defaultValue: [1, 3],
 *    onChange: function (result) {
 *        console.log(result)
 *    },
 *    onConfirm: function (result) {
 *        console.log(result)
 *    },
 *    id: 'doubleLinePicker'
 * });
 */

function picker_picker(items) {
  var _ref;

  if (picker_sington) return picker_sington; // 配置项

  var options = (_ref = (arguments.length <= 1 ? 0 : arguments.length - 1) - 1 + 1, _ref < 1 || arguments.length <= _ref ? undefined : arguments[_ref]);
  var defaults = util.extend({
    id: 'default',
    className: '',
    container: 'body',
    title: '',
    onChange: util.noop,
    onConfirm: util.noop,
    onClose: util.noop
  }, options); // 数据处理

  var final = items;
  var isMulti = false; // 是否多列的类型

  if ((arguments.length <= 1 ? 0 : arguments.length - 1) >= 2) {
    var i = 0;
    final = [items];

    while (i < (arguments.length <= 1 ? 0 : arguments.length - 1) - 1) {
      var _ref2;

      final.push((_ref2 = i++ + 1, _ref2 < 1 || arguments.length <= _ref2 ? undefined : arguments[_ref2]));
    }

    isMulti = true;
  } // 获取缓存


  temp[defaults.id] = temp[defaults.id] || [];
  var result = [];
  var lineTemp = temp[defaults.id];
  var $picker = util(util.render(picker_default.a, defaults));
  var depth = options.depth || (isMulti ? final.length : depthOf(final[0]));
  var groups = ''; // 显示与隐藏的方法

  function show() {
    util(defaults.container).append($picker); // 这里获取一下计算后的样式，强制触发渲染. fix IOS10下闪现的问题

    util.getStyle($picker[0], 'transform'); // 更改标题

    $picker.find('.weui-half-screen-dialog__title').html(defaults.title);
    $picker.find('.weui-mask').addClass('weui-animate-fade-in');
    $picker.find('.weui-picker').addClass('weui-animate-slide-up');
  }

  function _hide(callback) {
    // _hide = $.noop; // 防止二次调用导致报错
    $picker.find('.weui-mask').addClass('weui-animate-fade-out');
    $picker.find('.weui-picker').addClass('weui-animate-slide-down').on('animationend webkitAnimationEnd', function () {
      $picker.remove();
      picker_sington = false;
      defaults.onClose();
      callback && callback();
    });
  }

  function hide(callback) {
    _hide(callback);
  } // 初始化滚动的方法


  function scroll(items, level) {
    if (lineTemp[level] === undefined && defaults.defaultValue && defaults.defaultValue[level] !== undefined) {
      // 没有缓存选项，而且存在defaultValue
      var defaultVal = defaults.defaultValue[level];
      var index = 0;
      var len = items.length;

      if (typeof items[index] === 'object') {
        for (; index < len; ++index) {
          if (defaultVal === items[index].value) break;
        }
      } else {
        for (; index < len; ++index) {
          if (defaultVal === items[index]) break;
        }
      }

      if (index < len) {
        lineTemp[level] = index;
      } else {
        console.warn('Picker has not match defaultValue: ' + defaultVal);
      }
    }

    $picker.find('.weui-picker__group').eq(level).scroll({
      items: items,
      temp: lineTemp[level],
      onChange: function onChange(item, index) {
        // 为当前的result赋值。
        if (item) {
          result[level] = new Result(item);
        } else {
          result[level] = null;
        }

        lineTemp[level] = index;

        if (isMulti) {
          if (result.length === depth) {
            defaults.onChange(result);
          }
        } else {
          /**
           * @子列表处理
           * 1. 在没有子列表，或者值列表的数组长度为0时，隐藏掉子列表。
           * 2. 滑动之后发现重新有子列表时，再次显示子列表。
           *
           * @回调处理
           * 1. 因为滑动实际上是一层一层传递的：父列表滚动完成之后，会call子列表的onChange，从而带动子列表的滑动。
           * 2. 所以，使用者的传进来onChange回调应该在最后一个子列表滑动时再call
           */
          if (item.children && item.children.length > 0) {
            $picker.find('.weui-picker__group').eq(level + 1).show();
            !isMulti && scroll(item.children, level + 1); // 不是多列的情况下才继续处理children
          } else {
            // 如果子列表test不通过，子孙列表都隐藏。
            var $items = $picker.find('.weui-picker__group');
            $items.forEach(function (ele, index) {
              if (index > level) {
                util(ele).hide();
              }
            });
            result.splice(level + 1);
            defaults.onChange(result);
          }
        }
      },
      onConfirm: defaults.onConfirm
    });
  }

  var _depth = depth;

  while (_depth--) {
    groups += group_default.a;
  }

  $picker.find('.weui-picker__bd').html(groups);
  show();

  if (isMulti) {
    final.forEach(function (item, index) {
      scroll(item, index);
    });
  } else {
    scroll(final, 0);
  }

  $picker.on('click', '.weui-mask', function () {
    hide();
  }).on('click', '.weui-picker__btn', function () {
    hide();
  }).on('click', '#weui-picker-confirm', function () {
    defaults.onConfirm(result);
  });
  picker_sington = $picker[0];
  picker_sington.hide = hide;
  return picker_sington;
}
/**
 * datePicker 时间选择器，由picker拓展而来，提供年、月、日的选择。
 * @param options 配置项
 * @param {string=} [options.id=datePicker] 作为picker的唯一标识
 * @param {number=|string|Date} [options.start=2000] 起始年份，如果是 `Number` 类型，表示起始年份；如果是 `String` 类型，格式为 'YYYY-MM-DD'；如果是 `Date` 类型，就传一个 Date
 * @param {number=|string|Date} [options.end=2030] 结束年份，同上
 * @param {string=} [options.cron=* * *] cron 表达式，三位，分别是 dayOfMonth[1-31]，month[1-12] 和 dayOfWeek[0-6]（周日-周六）
 * @param {string=} [options.className] 自定义类名
 * @param {array=} [options.defaultValue] 默认选项的value数组, 如 [1991, 6, 9]
 * @param {function=} [options.onChange] 在picker选中的值发生变化的时候回调
 * @param {function=} [options.onConfirm] 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。
 *
 *@example
 * // 示例1：
 * weui.datePicker({
 *     start: 1990,
 *     end: 2000,
 *     defaultValue: [1991, 6, 9],
 *     onChange: function(result){
 *         console.log(result);
 *     },
 *     onConfirm: function(result){
 *         console.log(result);
 *     },
 *     id: 'datePicker'
 * });
 *
 * // 示例2：
 * weui.datePicker({
 *      start: new Date(), // 从今天开始
 *      end: 2030,
 *      defaultValue: [2020, 6, 9],
 *      onChange: function(result){
 *          console.log(result);
 *      },
 *      onConfirm: function(result){
 *          console.log(result);
 *      },
 *      id: 'datePicker'
 *  });
 *
 *  // 示例3：
 * weui.datePicker({
 *      start: new Date(), // 从今天开始
 *      end: 2030,
 *      cron: '* * 0,6',  // 每逢周日、周六
 *      onChange: function(result){
 *          console.log(result);
 *      },
 *      onConfirm: function(result){
 *          console.log(result);
 *      },
 *      id: 'datePicker'
 *  });
 *
 *  // 示例4：
 * weui.datePicker({
 *      start: new Date(), // 从今天开始
 *      end: 2030,
 *      cron: '1-10 * *',  // 每月1日-10日
 *      onChange: function(result){
 *          console.log(result);
 *      },
 *      onConfirm: function(result){
 *          console.log(result);
 *      },
 *      id: 'datePicker'
 *  });
 */


function datePicker(options) {
  var nowDate = new Date();
  var defaults = util.extend({
    id: 'datePicker',
    onChange: util.noop,
    onConfirm: util.noop,
    start: nowDate.getFullYear() - 20,
    end: nowDate.getFullYear() + 20,
    defaultValue: [nowDate.getFullYear(), nowDate.getMonth() + 1, nowDate.getDate()],
    cron: '* * *'
  }, options); // 兼容原来的 start、end 传 Number 的用法

  if (typeof defaults.start === 'number') {
    defaults.start = new Date(defaults.start + "/01/01");
  } else if (typeof defaults.start === 'string') {
    defaults.start = new Date(defaults.start.replace(/-/g, '/'));
  }

  if (typeof defaults.end === 'number') {
    defaults.end = new Date(defaults.end + "/12/31");
  } else if (typeof defaults.end === 'string') {
    defaults.end = new Date(defaults.end.replace(/-/g, '/'));
  }

  var findBy = function findBy(array, key, value) {
    for (var i = 0, len = array.length; i < len; i++) {
      var _obj = array[i];

      if (_obj[key] === value) {
        return _obj;
      }
    }
  };

  var date = [];
  var interval = cron(defaults.cron, defaults.start, defaults.end);
  var obj;

  do {
    obj = interval.next();
    var year = obj.value.getFullYear();
    var month = obj.value.getMonth() + 1;
    var day = obj.value.getDate();
    var Y = findBy(date, 'value', year);

    if (!Y) {
      Y = {
        label: year + '年',
        value: year,
        children: []
      };
      date.push(Y);
    }

    var M = findBy(Y.children, 'value', month);

    if (!M) {
      M = {
        label: month + '月',
        value: month,
        children: []
      };
      Y.children.push(M);
    }

    M.children.push({
      label: day + '日',
      value: day
    });
  } while (!obj.done);

  return picker_picker(date, defaults);
}


// EXTERNAL MODULE: ./gallery/gallery.html
var gallery = __webpack_require__("yhnj");
var gallery_default = /*#__PURE__*/__webpack_require__.n(gallery);

// CONCATENATED MODULE: ./gallery/gallery.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/



var gallery_sington;
/**
 * gallery 带删除按钮的图片预览，主要是配合图片上传使用
 * @param {string} url gallery显示的图片的url
 * @param {object=} options 配置项
 * @param {string=} options.className 自定义类名
 * @param {function=} options.onDelete 点击删除图片时的回调
 *
 * @example
 * const gallery = weui.gallery(url, {
 *     className: 'custom-classname',
 *     onDelete: function(){
 *         if(confirm('确定删除该图片？')){ console.log('删除'); }
 *         gallery.hide(function() {
 *              console.log('`gallery` has been hidden');
 *          });
 *     }
 * });
 */


function gallery_gallery(url, options) {
  if (options === void 0) {
    options = {};
  }

  if (gallery_sington) return gallery_sington;
  options = util.extend({
    className: '',
    onDelete: util.noop
  }, options);
  var $gallery = util(util.render(gallery_default.a, util.extend({
    url: url
  }, options)));

  function _hide(callback) {
    // _hide = $.noop; // 防止二次调用导致报错
    $gallery.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
      $gallery.remove();
      gallery_sington = false;
      callback && callback();
    });
  }

  function hide(callback) {
    _hide(callback);
  }

  util('body').append($gallery);
  $gallery.find('.weui-gallery__img').on('click', function () {
    hide();
  });
  $gallery.find('.weui-gallery__del').on('click', function () {
    options.onDelete.call(this, url);
  });
  $gallery.show().addClass('weui-animate-fade-in');
  gallery_sington = $gallery[0];
  gallery_sington.hide = hide;
  return gallery_sington;
}

/* harmony default export */ var gallery_gallery_0 = (gallery_gallery);
// EXTERNAL MODULE: ../node_modules/_@babel_runtime-corejs2@7.6.0@@babel/runtime-corejs2/core-js/parse-float.js
var parse_float = __webpack_require__("RpY/");
var parse_float_default = /*#__PURE__*/__webpack_require__.n(parse_float);

// CONCATENATED MODULE: ./slider/slider.js



/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * slider slider滑块，单位是百分比。注意，因为需要获取slider的长度，所以必须要在slider可见的情况下来调用。
 * @param {string} selector slider的selector
 * @param {object=} options 配置项
 * @param {number=} options.step slider的step，每次移动的百分比，取值范围 [0-100]
 * @param {number=} [options.defaultValue=0] slider的默认百分比值，取值范围 [0-100]
 * @param {function=} options.onChange slider发生改变时返回对应的百分比，取值范围 [0-100]
 *
 * @example
 * #### html
 * ```html
 * <div class="weui-slider-box">
 *     <div id="slider" class="weui-slider">
 *         <div class="weui-slider__inner">
 *             <div class="weui-slider__track"></div>
 *             <div class="weui-slider__handler"></div>
 *         </div>
 *     </div>
 *     <div id="sliderValue" class="weui-slider-box__value"></div>
 * </div>
 * ```
 *
 * #### js
 * ```javascript
 * weui.slider('#slider', {
 *     step: 10,
 *     defaultValue: 40,
 *     onChange: function(percent){
 *         console.log(percent);
 *     }
 * });
 * ```
 */

function slider(selector, options) {
  if (options === void 0) {
    options = {};
  }

  var $eles = util(selector);
  options = util.extend({
    step: undefined,
    defaultValue: 0,
    onChange: util.noop
  }, options);

  if (options.step !== undefined) {
    options.step = parse_float_default()(options.step);

    if (!options.step || options.step < 0) {
      throw new Error('Slider step must be a positive number.');
    }
  }

  if (options.defaultValue !== undefined && options.defaultValue < 0 || options.defaultValue > 100) {
    throw new Error('Slider defaultValue must be >= 0 and <= 100.');
  }

  $eles.forEach(function (ele) {
    var $slider = util(ele);
    var $sliderInner = $slider.find('.weui-slider__inner');
    var $sliderTrack = $slider.find('.weui-slider__track');
    var $sliderHandler = $slider.find('.weui-slider__handler');

    var sliderLength = parse_int_default()(util.getStyle($sliderInner[0], 'width'), 10); // slider的长度


    var sliderLeft = $sliderInner[0].offsetLeft; // slider相对于页面的offset

    var handlerStartPos = 0; // handler起始位置

    var handlerStartX = 0; // handler touchstart的X

    var stepWidth; // 每个step的宽度

    function getHandlerPos() {
      var pos = util.getStyle($sliderHandler[0], 'left');

      if (/%/.test(pos)) {
        pos = sliderLength * parse_float_default()(pos) / 100;
      } else {
        pos = parse_float_default()(pos);
      }

      return pos;
    }

    function setHandler(distance) {
      var dist; // handler的目标位置

      var percent; // 所在位置的百分比

      if (options.step) {
        distance = Math.round(distance / stepWidth) * stepWidth;
      }

      dist = handlerStartPos + distance;
      dist = dist < 0 ? 0 : dist > sliderLength ? sliderLength : dist;
      percent = 100 * dist / sliderLength;
      $sliderTrack.css({
        width: percent + '%'
      });
      $sliderHandler.css({
        left: percent + '%'
      });
      options.onChange.call(ele, percent);
    }

    if (options.step) {
      stepWidth = sliderLength * options.step / 100;
    }

    if (options.defaultValue) {
      setHandler(sliderLength * options.defaultValue / 100);
    }

    $slider.on('click', function (evt) {
      evt.preventDefault();
      handlerStartPos = getHandlerPos();
      setHandler(evt.pageX - sliderLeft - handlerStartPos);
    });
    $sliderHandler.on('touchstart', function (evt) {
      handlerStartPos = getHandlerPos();
      handlerStartX = evt.changedTouches[0].clientX;
    }).on('touchmove', function (evt) {
      evt.preventDefault();
      setHandler(evt.changedTouches[0].clientX - handlerStartX);
    });
  });
  return this;
}

/* harmony default export */ var slider_slider = (slider);
// CONCATENATED MODULE: ./weui.js
/* concated harmony reexport dialog */__webpack_require__.d(__webpack_exports__, "dialog", function() { return dialog_dialog_0; });
/* concated harmony reexport alert */__webpack_require__.d(__webpack_exports__, "alert", function() { return alert_alert_0; });
/* concated harmony reexport confirm */__webpack_require__.d(__webpack_exports__, "confirm", function() { return confirm_confirm_0; });
/* concated harmony reexport toast */__webpack_require__.d(__webpack_exports__, "toast", function() { return toast_toast_0; });
/* concated harmony reexport loading */__webpack_require__.d(__webpack_exports__, "loading", function() { return loading_loading_0; });
/* concated harmony reexport actionSheet */__webpack_require__.d(__webpack_exports__, "actionSheet", function() { return actionSheet_actionSheet_0; });
/* concated harmony reexport topTips */__webpack_require__.d(__webpack_exports__, "topTips", function() { return topTips_topTips_0; });
/* concated harmony reexport searchBar */__webpack_require__.d(__webpack_exports__, "searchBar", function() { return searchBar_searchBar; });
/* concated harmony reexport tab */__webpack_require__.d(__webpack_exports__, "tab", function() { return tab_tab; });
/* concated harmony reexport form */__webpack_require__.d(__webpack_exports__, "form", function() { return form_namespaceObject; });
/* concated harmony reexport uploader */__webpack_require__.d(__webpack_exports__, "uploader", function() { return uploader_uploader; });
/* concated harmony reexport picker */__webpack_require__.d(__webpack_exports__, "picker", function() { return picker_picker; });
/* concated harmony reexport datePicker */__webpack_require__.d(__webpack_exports__, "datePicker", function() { return datePicker; });
/* concated harmony reexport gallery */__webpack_require__.d(__webpack_exports__, "gallery", function() { return gallery_gallery_0; });
/* concated harmony reexport slider */__webpack_require__.d(__webpack_exports__, "slider", function() { return slider_slider; });
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/














var _default = {
  dialog: dialog_dialog_0,
  alert: alert_alert_0,
  confirm: confirm_confirm_0,
  toast: toast_toast_0,
  loading: loading_loading_0,
  actionSheet: actionSheet_actionSheet_0,
  topTips: topTips_topTips_0,
  searchBar: searchBar_searchBar,
  tab: tab_tab,
  form: form_namespaceObject,
  uploader: uploader_uploader,
  picker: picker_picker,
  datePicker: datePicker,
  gallery: gallery_gallery_0,
  slider: slider_slider
};
/* harmony default export */ var weui = __webpack_exports__["default"] = (_default);


/***/ }),

/***/ "rKfJ":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, $) {
	$ = (function(document, s_addEventListener, s_querySelectorAll) {
		function $(s, context, bala) {
			bala = Object.create($.fn);

			s && bala.push.apply(bala, // if s is truly then push the following
				s[s_addEventListener] // if arg is node or window,
					? [s] // then pass [s]
					: "" + s === s // else if arg is a string
						? /</.test(s) // if the string contains "<" (if HTML code is passed)
							// then parse it and return node.children
							// use 'addEventListener' (HTMLUnknownElement) if content is not presented
							? ((context = document.createElement(context || s_addEventListener)).innerHTML = s
								, context.children)
							: context // else if context is truly
								? ((context = $(context)[0]) // if context element is found
									? context[s_querySelectorAll](s) // then select element from context
									: bala) // else pass [] (context isn't found)
								: document[s_querySelectorAll](s) // else select elements globally
						: typeof s == 'function' // else if function is passed
							// if DOM is ready
							// readyState[7] means readyState value is "interactive" or "complete" (not "loading")
							? document.readyState[7]
								? s() // then run given function
								: document[s_addEventListener]('DOMContentLoaded', s) // else wait for DOM ready
							: s); // else guessing that s variable is array-like Object

			return bala;
		}

		$.fn = [];

		$.one = function(s, context) {
			return $(s, context)[0] || null;
		};

		return $;
	})(document, 'addEventListener', 'querySelectorAll');


	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return $;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
})(this);


/***/ }),

/***/ "sYOT":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("MeB/");
var $parseInt = __webpack_require__("8iZb");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "siI2":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("88vH");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "vgXK":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("VTRa");
var IE8_DOM_DEFINE = __webpack_require__("JDBH");
var toPrimitive = __webpack_require__("i0VV");
var dP = Object.defineProperty;

exports.f = __webpack_require__("az+x") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "vwP0":
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__("kTKA").parseFloat;
var $trim = __webpack_require__("+8zi").trim;

module.exports = 1 / $parseFloat(__webpack_require__("Tnei") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "y1Mz":
/***/ (function(module, exports) {

module.exports = "<li class=\"weui-uploader__file weui-uploader__file_status\" data-id=\"<%= id %>\">\r\n  <div class=weui-uploader__file-content>\r\n    <i class=weui-loading style=width:30px;height:30px></i>\r\n  </div>\r\n</li>\r\n";

/***/ }),

/***/ "yhnj":
/***/ (function(module, exports) {

module.exports = "<div class=\"weui-gallery <%= className %>\">\r\n  <span class=weui-gallery__img style=\"background-image:url(<%= url %>)\"></span>\r\n  <div class=weui-gallery__opr>\r\n    <a href=javascript: class=weui-gallery__del>\r\n      <i class=\"weui-icon-delete weui-icon_gallery-delete\"></i>\r\n    </a>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ "zBGz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ })

/******/ });
});