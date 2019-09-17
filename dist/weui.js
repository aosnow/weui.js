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

/***/ "0F14":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7y0S");

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

/***/ "2+Km":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("MeB/");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("f1xp") });


/***/ }),

/***/ "4NbG":
/***/ (function(module, exports) {

module.exports = "<div class=\"<%= className %>\">\r\n  <div class=\"weui-mask_transparent\"></div>\r\n  <div class=\"weui-toast\">\r\n    <i class=\"weui-icon_toast weui-icon-success-no-circle\"></i>\r\n    <p class=\"weui-toast__content\"><%=content%></p>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ "5I/h":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("MeB/");
var $parseFloat = __webpack_require__("vwP0");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "5P1O":
/***/ (function(module, exports) {

module.exports = "<div class=\"weui-toptips weui-toptips_warn <%= className %>\" style=\"display: block;\"><%= content %></div>\r\n";

/***/ }),

/***/ "6Re7":
/***/ (function(module, exports) {

module.exports = "<div class=\"half-screen-dialog <%= className %>\">\r\n  <div class=\"weui-mask\"></div>\r\n  <div class=\"weui-half-screen-dialog\">\r\n    <div class=\"weui-half-screen-dialog__hd\">\r\n      <div class=\"weui-half-screen-dialog__hd__side\">\r\n        <button class=\"weui-icon-btn weui-icon-btn_close weui-picker__btn\">关闭</button>\r\n      </div>\r\n      <div class=\"weui-half-screen-dialog__hd__main\">\r\n        <strong class=\"weui-half-screen-dialog__title\">标题</strong>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"weui-half-screen-dialog__bd\">\r\n      <div class=\"weui-half__bd\"></div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ "6Wtp":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("SNGo")(__webpack_require__("HWKK"))

/*** EXPORTS FROM exports-loader ***/
module.exports = window.Zepto;

/***/ }),

/***/ "7071":
/***/ (function(module, exports) {

module.exports = "<div class=\"weui-loading_toast <%= className %>\">\r\n  <div class=\"weui-mask_transparent\"></div>\r\n  <div class=\"weui-toast\">\r\n    <i class=\"weui-loading weui-icon_toast\"></i>\r\n    <p class=\"weui-toast__content\"><%=content%></p>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ "7jcK":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "7y0S":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("2+Km");
var $Object = __webpack_require__("qm7i").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


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

/***/ "BgWC":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("vgXK");
var anObject = __webpack_require__("VTRa");
var getKeys = __webpack_require__("U/ao");

module.exports = __webpack_require__("az+x") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
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

/***/ "GNLO":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * template.js v0.7.1 (https://github.com/yanhaijing/template.js)
 * API https://github.com/yanhaijing/template.js/blob/master/doc/api.md
 * Copyright 2015 yanhaijing. All Rights Reserved
 * Licensed under MIT (https://github.com/yanhaijing/template.js/blob/master/MIT-LICENSE.txt)
 */
;(function(root, factory) {
    var template = factory(root);
    if (true) {
        // AMD
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return template;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var _template; }
}(this, function(root) {
    'use strict';
    var o = {
        sTag: '<%',//开始标签
        eTag: '%>',//结束标签
        compress: false,//是否压缩html
        escape: true, //默认输出是否进行HTML转义
        error: function (e) {}//错误回调
    };
    var functionMap = {}; //内部函数对象
    //修饰器前缀
    var modifierMap = {
        '': function (param) {return nothing(param)},
        'h': function (param) {return encodeHTML(param)},
        'u': function (param) {return encodeURI(param)}
    };

    var toString = {}.toString;
    var slice = [].slice;
    function type(x) {
        if(x === null){
            return 'null';
        }

        var t= typeof x;

        if(t !== 'object'){
            return t;
        }

        var c = toString.call(x).slice(8, -1).toLowerCase();
        if(c !== 'object'){
            return c;
        }

        if(x.constructor==Object){
            return c;
        }

        return 'unknown';
    }

    function isObject(obj) {
        return type(obj) === 'object';
    }
    function isFunction(fn) {
        return type(fn) === 'function';
    }
    function isString(str) {
        return type(str) === 'string';
    }
    function extend() {
        var target = arguments[0] || {};
        var arrs = slice.call(arguments, 1);
        var len = arrs.length;
     
        for (var i = 0; i < len; i++) {
            var arr = arrs[i];
            for (var name in arr) {
                target[name] = arr[name];
            }
     
        }
        return target;
    }
    function clone() {
        var args = slice.call(arguments);
        return extend.apply(null, [{}].concat(args));
    }
    function nothing(param) {
        return param;
    }
    function encodeHTML(source) {
        return String(source)
            .replace(/&/g,'&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/\\/g,'&#92;')
            .replace(/"/g,'&quot;')
            .replace(/'/g,'&#39;');
    }
    function compress(html) {
        return html.replace(/\s+/g, ' ').replace(/<!--[\w\W]*?-->/g, '');
    }
    function consoleAdapter(cmd, msg) {
        typeof console !== 'undefined' && console[cmd] && console[cmd](msg);
    }
    function handelError(e) {
        var message = 'template.js error\n\n';

        for (var key in e) {
            message += '<' + key + '>\n' + e[key] + '\n\n';
        }
        message += '<message>\n' + e.message + '\n\n';
        consoleAdapter('error', message);

        o.error(e);
        function error() {
            return 'template.js error';
        }
        error.toString = function () {
            return '__code__ = "template.js error"';
        }
        return error;
    }
    function parse(tpl, opt) {
        var code = '';
        var sTag = opt.sTag;
        var eTag = opt.eTag;
        var escape = opt.escape;
        function parsehtml(line) {
            // 单双引号转义，换行符替换为空格
            line = line.replace(/('|")/g, '\\$1');
            var lineList = line.split('\n');
            var code = '';
            for (var i = 0; i < lineList.length; i++) {
                code += ';__code__ += ("' + lineList[i] + (i === lineList.length - 1 ? '")\n' : '\\n")\n');
            }
            return code;
        }
        function parsejs(line) {              
            //var reg = /^(:?)(.*?)=(.*)$/;
            var reg = /^(?:=|(:.*?)=)(.*)$/
            var html;
            var arr;
            var modifier;

            // = := :*=
            // :h=123 [':h=123', 'h', '123']
            if (arr = reg.exec(line)) {
                html = arr[2]; // 输出
                if (Boolean(arr[1])) {
                    // :开头
                    modifier = arr[1].slice(1);
                } else {
                    // = 开头
                    modifier = escape ? 'h' : '';
                }

                return ';__code__ += __modifierMap__["' + modifier + '"](typeof (' + html + ') !== "undefined" ? (' + html + ') : "")\n';
            }
            
            //原生js
            return ';' + line + '\n';
        }

        var tokens = tpl.split(sTag);

        for (var i = 0, len = tokens.length; i < len; i++) {
            var token = tokens[i].split(eTag);

            if (token.length === 1) {
                code += parsehtml(token[0]);
            } else {
                code += parsejs(token[0], true);
                if (token[1]) {
                    code += parsehtml(token[1]);
                }
            }
        }
        return code;
    }
    function compiler(tpl, opt) {
        var mainCode = parse(tpl, opt);

        var headerCode = '\n' + 
        '    var html = (function (__data__, __modifierMap__) {\n' + 
        '        var __str__ = "", __code__ = "";\n' + 
        '        for(var key in __data__) {\n' + 
        '            __str__+=("var " + key + "=__data__[\'" + key + "\'];");\n' + 
        '        }\n' + 
        '        eval(__str__);\n\n';

        var footerCode = '\n' + 
        '        ;return __code__;\n' + 
        '    }(__data__, __modifierMap__));\n' + 
        '    return html;\n';

        var code = headerCode + mainCode + footerCode;
        code = code.replace(/[\r]/g, ' '); // ie 7 8 会报错，不知道为什么
        try {
            var Render = new Function('__data__', '__modifierMap__', code); 
            Render.toString = function () {
                return mainCode;
            }
            return Render;
        } catch(e) {
            e.temp = 'function anonymous(__data__, __modifierMap__) {' + code + '}';
            throw e;
        }  
    }
    function compile(tpl, opt) {
        opt = clone(o, opt);

        try {
            var Render = compiler(tpl, opt);
        } catch(e) {
            e.name = 'CompileError';
            e.tpl = tpl;
            e.render = e.temp;
            delete e.temp;
            return handelError(e);
        }

        function render(data) {
            data = clone(functionMap, data);
            try {
                var html = Render(data, modifierMap);
                html = opt.compress ? compress(html) : html;
                return html;
            } catch(e) {
                e.name = 'RenderError';
                e.tpl = tpl;
                e.render = Render.toString();
                return handelError(e)();
            }            
        }

        render.toString = function () {
            return Render.toString();
        };
        return render;
    }
    function template(tpl, data) {
        if (typeof tpl !== 'string') {
            return '';
        }

        var fn = compile(tpl);
        if (!isObject(data)) {
            return fn;
        }

        return fn(data);
    }

    template.config = function (option) {
        if (isObject(option)) {
            o = extend(o, option);
        }
        return clone(o);
    };

    template.registerFunction = function(name, fn) {
        if (!isString(name)) {
            return clone(functionMap);
        }
        if (!isFunction(fn)) {
            return functionMap[name];
        }

        return functionMap[name] = fn;
    }
    template.unregisterFunction = function (name) {
        if (!isString(name)) {
            return false;
        }
        delete functionMap[name];
        return true;
    }

    template.registerModifier = function(name, fn) {
        if (!isString(name)) {
            return clone(modifierMap);
        }
        if (!isFunction(fn)) {
            return modifierMap[name];
        }

        return modifierMap[name] = fn;
    }
    template.unregisterModifier = function (name) {
        if (!isString(name)) {
            return false;
        }
        delete modifierMap[name];
        return true;
    }

    template.__encodeHTML = encodeHTML;
    template.__compress = compress;
    template.__handelError = handelError;
    template.__compile = compile;
    template.version = '0.7.1';
    return template;
}));


/***/ }),

/***/ "HWKK":
/***/ (function(module, exports) {

module.exports = "/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */\n(function(global, factory) {\n  if (typeof define === 'function' && define.amd)\n    define(function() { return factory(global) })\n  else\n    factory(global)\n}(this, function(window) {\n  var Zepto = (function() {\n  var undefined, key, $, classList, emptyArray = [], concat = emptyArray.concat, filter = emptyArray.filter, slice = emptyArray.slice,\n    document = window.document,\n    elementDisplay = {}, classCache = {},\n    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },\n    fragmentRE = /^\\s*<(\\w+|!)[^>]*>/,\n    singleTagRE = /^<(\\w+)\\s*\\/?>(?:<\\/\\1>|)$/,\n    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>/ig,\n    rootNodeRE = /^(?:body|html)$/i,\n    capitalRE = /([A-Z])/g,\n\n    // special attributes that should be get/set via method calls\n    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],\n\n    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],\n    table = document.createElement('table'),\n    tableRow = document.createElement('tr'),\n    containers = {\n      'tr': document.createElement('tbody'),\n      'tbody': table, 'thead': table, 'tfoot': table,\n      'td': tableRow, 'th': tableRow,\n      '*': document.createElement('div')\n    },\n    readyRE = /complete|loaded|interactive/,\n    simpleSelectorRE = /^[\\w-]*$/,\n    class2type = {},\n    toString = class2type.toString,\n    zepto = {},\n    camelize, uniq,\n    tempParent = document.createElement('div'),\n    propMap = {\n      'tabindex': 'tabIndex',\n      'readonly': 'readOnly',\n      'for': 'htmlFor',\n      'class': 'className',\n      'maxlength': 'maxLength',\n      'cellspacing': 'cellSpacing',\n      'cellpadding': 'cellPadding',\n      'rowspan': 'rowSpan',\n      'colspan': 'colSpan',\n      'usemap': 'useMap',\n      'frameborder': 'frameBorder',\n      'contenteditable': 'contentEditable'\n    },\n    isArray = Array.isArray ||\n      function(object){ return object instanceof Array }\n\n  zepto.matches = function(element, selector) {\n    if (!selector || !element || element.nodeType !== 1) return false\n    var matchesSelector = element.matches || element.webkitMatchesSelector ||\n                          element.mozMatchesSelector || element.oMatchesSelector ||\n                          element.matchesSelector\n    if (matchesSelector) return matchesSelector.call(element, selector)\n    // fall back to performing a selector:\n    var match, parent = element.parentNode, temp = !parent\n    if (temp) (parent = tempParent).appendChild(element)\n    match = ~zepto.qsa(parent, selector).indexOf(element)\n    temp && tempParent.removeChild(element)\n    return match\n  }\n\n  function type(obj) {\n    return obj == null ? String(obj) :\n      class2type[toString.call(obj)] || \"object\"\n  }\n\n  function isFunction(value) { return type(value) == \"function\" }\n  function isWindow(obj)     { return obj != null && obj == obj.window }\n  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }\n  function isObject(obj)     { return type(obj) == \"object\" }\n  function isPlainObject(obj) {\n    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype\n  }\n\n  function likeArray(obj) {\n    var length = !!obj && 'length' in obj && obj.length,\n      type = $.type(obj)\n\n    return 'function' != type && !isWindow(obj) && (\n      'array' == type || length === 0 ||\n        (typeof length == 'number' && length > 0 && (length - 1) in obj)\n    )\n  }\n\n  function compact(array) { return filter.call(array, function(item){ return item != null }) }\n  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }\n  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }\n  function dasherize(str) {\n    return str.replace(/::/g, '/')\n           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')\n           .replace(/([a-z\\d])([A-Z])/g, '$1_$2')\n           .replace(/_/g, '-')\n           .toLowerCase()\n  }\n  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }\n\n  function classRE(name) {\n    return name in classCache ?\n      classCache[name] : (classCache[name] = new RegExp('(^|\\\\s)' + name + '(\\\\s|$)'))\n  }\n\n  function maybeAddPx(name, value) {\n    return (typeof value == \"number\" && !cssNumber[dasherize(name)]) ? value + \"px\" : value\n  }\n\n  function defaultDisplay(nodeName) {\n    var element, display\n    if (!elementDisplay[nodeName]) {\n      element = document.createElement(nodeName)\n      document.body.appendChild(element)\n      display = getComputedStyle(element, '').getPropertyValue(\"display\")\n      element.parentNode.removeChild(element)\n      display == \"none\" && (display = \"block\")\n      elementDisplay[nodeName] = display\n    }\n    return elementDisplay[nodeName]\n  }\n\n  function children(element) {\n    return 'children' in element ?\n      slice.call(element.children) :\n      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })\n  }\n\n  function Z(dom, selector) {\n    var i, len = dom ? dom.length : 0\n    for (i = 0; i < len; i++) this[i] = dom[i]\n    this.length = len\n    this.selector = selector || ''\n  }\n\n  // `$.zepto.fragment` takes a html string and an optional tag name\n  // to generate DOM nodes from the given html string.\n  // The generated DOM nodes are returned as an array.\n  // This function can be overridden in plugins for example to make\n  // it compatible with browsers that don't support the DOM fully.\n  zepto.fragment = function(html, name, properties) {\n    var dom, nodes, container\n\n    // A special case optimization for a single tag\n    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))\n\n    if (!dom) {\n      if (html.replace) html = html.replace(tagExpanderRE, \"<$1></$2>\")\n      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1\n      if (!(name in containers)) name = '*'\n\n      container = containers[name]\n      container.innerHTML = '' + html\n      dom = $.each(slice.call(container.childNodes), function(){\n        container.removeChild(this)\n      })\n    }\n\n    if (isPlainObject(properties)) {\n      nodes = $(dom)\n      $.each(properties, function(key, value) {\n        if (methodAttributes.indexOf(key) > -1) nodes[key](value)\n        else nodes.attr(key, value)\n      })\n    }\n\n    return dom\n  }\n\n  // `$.zepto.Z` swaps out the prototype of the given `dom` array\n  // of nodes with `$.fn` and thus supplying all the Zepto functions\n  // to the array. This method can be overridden in plugins.\n  zepto.Z = function(dom, selector) {\n    return new Z(dom, selector)\n  }\n\n  // `$.zepto.isZ` should return `true` if the given object is a Zepto\n  // collection. This method can be overridden in plugins.\n  zepto.isZ = function(object) {\n    return object instanceof zepto.Z\n  }\n\n  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and\n  // takes a CSS selector and an optional context (and handles various\n  // special cases).\n  // This method can be overridden in plugins.\n  zepto.init = function(selector, context) {\n    var dom\n    // If nothing given, return an empty Zepto collection\n    if (!selector) return zepto.Z()\n    // Optimize for string selectors\n    else if (typeof selector == 'string') {\n      selector = selector.trim()\n      // If it's a html fragment, create nodes from it\n      // Note: In both Chrome 21 and Firefox 15, DOM error 12\n      // is thrown if the fragment doesn't begin with <\n      if (selector[0] == '<' && fragmentRE.test(selector))\n        dom = zepto.fragment(selector, RegExp.$1, context), selector = null\n      // If there's a context, create a collection on that context first, and select\n      // nodes from there\n      else if (context !== undefined) return $(context).find(selector)\n      // If it's a CSS selector, use it to select nodes.\n      else dom = zepto.qsa(document, selector)\n    }\n    // If a function is given, call it when the DOM is ready\n    else if (isFunction(selector)) return $(document).ready(selector)\n    // If a Zepto collection is given, just return it\n    else if (zepto.isZ(selector)) return selector\n    else {\n      // normalize array if an array of nodes is given\n      if (isArray(selector)) dom = compact(selector)\n      // Wrap DOM nodes.\n      else if (isObject(selector))\n        dom = [selector], selector = null\n      // If it's a html fragment, create nodes from it\n      else if (fragmentRE.test(selector))\n        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null\n      // If there's a context, create a collection on that context first, and select\n      // nodes from there\n      else if (context !== undefined) return $(context).find(selector)\n      // And last but no least, if it's a CSS selector, use it to select nodes.\n      else dom = zepto.qsa(document, selector)\n    }\n    // create a new Zepto collection from the nodes found\n    return zepto.Z(dom, selector)\n  }\n\n  // `$` will be the base `Zepto` object. When calling this\n  // function just call `$.zepto.init, which makes the implementation\n  // details of selecting nodes and creating Zepto collections\n  // patchable in plugins.\n  $ = function(selector, context){\n    return zepto.init(selector, context)\n  }\n\n  function extend(target, source, deep) {\n    for (key in source)\n      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {\n        if (isPlainObject(source[key]) && !isPlainObject(target[key]))\n          target[key] = {}\n        if (isArray(source[key]) && !isArray(target[key]))\n          target[key] = []\n        extend(target[key], source[key], deep)\n      }\n      else if (source[key] !== undefined) target[key] = source[key]\n  }\n\n  // Copy all but undefined properties from one or more\n  // objects to the `target` object.\n  $.extend = function(target){\n    var deep, args = slice.call(arguments, 1)\n    if (typeof target == 'boolean') {\n      deep = target\n      target = args.shift()\n    }\n    args.forEach(function(arg){ extend(target, arg, deep) })\n    return target\n  }\n\n  // `$.zepto.qsa` is Zepto's CSS selector implementation which\n  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.\n  // This method can be overridden in plugins.\n  zepto.qsa = function(element, selector){\n    var found,\n        maybeID = selector[0] == '#',\n        maybeClass = !maybeID && selector[0] == '.',\n        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked\n        isSimple = simpleSelectorRE.test(nameOnly)\n    return (element.getElementById && isSimple && maybeID) ? // Safari DocumentFragment doesn't have getElementById\n      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :\n      (element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11) ? [] :\n      slice.call(\n        isSimple && !maybeID && element.getElementsByClassName ? // DocumentFragment doesn't have getElementsByClassName/TagName\n          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class\n          element.getElementsByTagName(selector) : // Or a tag\n          element.querySelectorAll(selector) // Or it's not simple, and we need to query all\n      )\n  }\n\n  function filtered(nodes, selector) {\n    return selector == null ? $(nodes) : $(nodes).filter(selector)\n  }\n\n  $.contains = document.documentElement.contains ?\n    function(parent, node) {\n      return parent !== node && parent.contains(node)\n    } :\n    function(parent, node) {\n      while (node && (node = node.parentNode))\n        if (node === parent) return true\n      return false\n    }\n\n  function funcArg(context, arg, idx, payload) {\n    return isFunction(arg) ? arg.call(context, idx, payload) : arg\n  }\n\n  function setAttribute(node, name, value) {\n    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)\n  }\n\n  // access className property while respecting SVGAnimatedString\n  function className(node, value){\n    var klass = node.className || '',\n        svg   = klass && klass.baseVal !== undefined\n\n    if (value === undefined) return svg ? klass.baseVal : klass\n    svg ? (klass.baseVal = value) : (node.className = value)\n  }\n\n  // \"true\"  => true\n  // \"false\" => false\n  // \"null\"  => null\n  // \"42\"    => 42\n  // \"42.5\"  => 42.5\n  // \"08\"    => \"08\"\n  // JSON    => parse if valid\n  // String  => self\n  function deserializeValue(value) {\n    try {\n      return value ?\n        value == \"true\" ||\n        ( value == \"false\" ? false :\n          value == \"null\" ? null :\n          +value + \"\" == value ? +value :\n          /^[\\[\\{]/.test(value) ? $.parseJSON(value) :\n          value )\n        : value\n    } catch(e) {\n      return value\n    }\n  }\n\n  $.type = type\n  $.isFunction = isFunction\n  $.isWindow = isWindow\n  $.isArray = isArray\n  $.isPlainObject = isPlainObject\n\n  $.isEmptyObject = function(obj) {\n    var name\n    for (name in obj) return false\n    return true\n  }\n\n  $.isNumeric = function(val) {\n    var num = Number(val), type = typeof val\n    return val != null && type != 'boolean' &&\n      (type != 'string' || val.length) &&\n      !isNaN(num) && isFinite(num) || false\n  }\n\n  $.inArray = function(elem, array, i){\n    return emptyArray.indexOf.call(array, elem, i)\n  }\n\n  $.camelCase = camelize\n  $.trim = function(str) {\n    return str == null ? \"\" : String.prototype.trim.call(str)\n  }\n\n  // plugin compatibility\n  $.uuid = 0\n  $.support = { }\n  $.expr = { }\n  $.noop = function() {}\n\n  $.map = function(elements, callback){\n    var value, values = [], i, key\n    if (likeArray(elements))\n      for (i = 0; i < elements.length; i++) {\n        value = callback(elements[i], i)\n        if (value != null) values.push(value)\n      }\n    else\n      for (key in elements) {\n        value = callback(elements[key], key)\n        if (value != null) values.push(value)\n      }\n    return flatten(values)\n  }\n\n  $.each = function(elements, callback){\n    var i, key\n    if (likeArray(elements)) {\n      for (i = 0; i < elements.length; i++)\n        if (callback.call(elements[i], i, elements[i]) === false) return elements\n    } else {\n      for (key in elements)\n        if (callback.call(elements[key], key, elements[key]) === false) return elements\n    }\n\n    return elements\n  }\n\n  $.grep = function(elements, callback){\n    return filter.call(elements, callback)\n  }\n\n  if (window.JSON) $.parseJSON = JSON.parse\n\n  // Populate the class2type map\n  $.each(\"Boolean Number String Function Array Date RegExp Object Error\".split(\" \"), function(i, name) {\n    class2type[ \"[object \" + name + \"]\" ] = name.toLowerCase()\n  })\n\n  // Define methods that will be available on all\n  // Zepto collections\n  $.fn = {\n    constructor: zepto.Z,\n    length: 0,\n\n    // Because a collection acts like an array\n    // copy over these useful array functions.\n    forEach: emptyArray.forEach,\n    reduce: emptyArray.reduce,\n    push: emptyArray.push,\n    sort: emptyArray.sort,\n    splice: emptyArray.splice,\n    indexOf: emptyArray.indexOf,\n    concat: function(){\n      var i, value, args = []\n      for (i = 0; i < arguments.length; i++) {\n        value = arguments[i]\n        args[i] = zepto.isZ(value) ? value.toArray() : value\n      }\n      return concat.apply(zepto.isZ(this) ? this.toArray() : this, args)\n    },\n\n    // `map` and `slice` in the jQuery API work differently\n    // from their array counterparts\n    map: function(fn){\n      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))\n    },\n    slice: function(){\n      return $(slice.apply(this, arguments))\n    },\n\n    ready: function(callback){\n      // need to check if document.body exists for IE as that browser reports\n      // document ready when it hasn't yet created the body element\n      if (readyRE.test(document.readyState) && document.body) callback($)\n      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)\n      return this\n    },\n    get: function(idx){\n      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]\n    },\n    toArray: function(){ return this.get() },\n    size: function(){\n      return this.length\n    },\n    remove: function(){\n      return this.each(function(){\n        if (this.parentNode != null)\n          this.parentNode.removeChild(this)\n      })\n    },\n    each: function(callback){\n      emptyArray.every.call(this, function(el, idx){\n        return callback.call(el, idx, el) !== false\n      })\n      return this\n    },\n    filter: function(selector){\n      if (isFunction(selector)) return this.not(this.not(selector))\n      return $(filter.call(this, function(element){\n        return zepto.matches(element, selector)\n      }))\n    },\n    add: function(selector,context){\n      return $(uniq(this.concat($(selector,context))))\n    },\n    is: function(selector){\n      return this.length > 0 && zepto.matches(this[0], selector)\n    },\n    not: function(selector){\n      var nodes=[]\n      if (isFunction(selector) && selector.call !== undefined)\n        this.each(function(idx){\n          if (!selector.call(this,idx)) nodes.push(this)\n        })\n      else {\n        var excludes = typeof selector == 'string' ? this.filter(selector) :\n          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)\n        this.forEach(function(el){\n          if (excludes.indexOf(el) < 0) nodes.push(el)\n        })\n      }\n      return $(nodes)\n    },\n    has: function(selector){\n      return this.filter(function(){\n        return isObject(selector) ?\n          $.contains(this, selector) :\n          $(this).find(selector).size()\n      })\n    },\n    eq: function(idx){\n      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)\n    },\n    first: function(){\n      var el = this[0]\n      return el && !isObject(el) ? el : $(el)\n    },\n    last: function(){\n      var el = this[this.length - 1]\n      return el && !isObject(el) ? el : $(el)\n    },\n    find: function(selector){\n      var result, $this = this\n      if (!selector) result = $()\n      else if (typeof selector == 'object')\n        result = $(selector).filter(function(){\n          var node = this\n          return emptyArray.some.call($this, function(parent){\n            return $.contains(parent, node)\n          })\n        })\n      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))\n      else result = this.map(function(){ return zepto.qsa(this, selector) })\n      return result\n    },\n    closest: function(selector, context){\n      var nodes = [], collection = typeof selector == 'object' && $(selector)\n      this.each(function(_, node){\n        while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))\n          node = node !== context && !isDocument(node) && node.parentNode\n        if (node && nodes.indexOf(node) < 0) nodes.push(node)\n      })\n      return $(nodes)\n    },\n    parents: function(selector){\n      var ancestors = [], nodes = this\n      while (nodes.length > 0)\n        nodes = $.map(nodes, function(node){\n          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {\n            ancestors.push(node)\n            return node\n          }\n        })\n      return filtered(ancestors, selector)\n    },\n    parent: function(selector){\n      return filtered(uniq(this.pluck('parentNode')), selector)\n    },\n    children: function(selector){\n      return filtered(this.map(function(){ return children(this) }), selector)\n    },\n    contents: function() {\n      return this.map(function() { return this.contentDocument || slice.call(this.childNodes) })\n    },\n    siblings: function(selector){\n      return filtered(this.map(function(i, el){\n        return filter.call(children(el.parentNode), function(child){ return child!==el })\n      }), selector)\n    },\n    empty: function(){\n      return this.each(function(){ this.innerHTML = '' })\n    },\n    // `pluck` is borrowed from Prototype.js\n    pluck: function(property){\n      return $.map(this, function(el){ return el[property] })\n    },\n    show: function(){\n      return this.each(function(){\n        this.style.display == \"none\" && (this.style.display = '')\n        if (getComputedStyle(this, '').getPropertyValue(\"display\") == \"none\")\n          this.style.display = defaultDisplay(this.nodeName)\n      })\n    },\n    replaceWith: function(newContent){\n      return this.before(newContent).remove()\n    },\n    wrap: function(structure){\n      var func = isFunction(structure)\n      if (this[0] && !func)\n        var dom   = $(structure).get(0),\n            clone = dom.parentNode || this.length > 1\n\n      return this.each(function(index){\n        $(this).wrapAll(\n          func ? structure.call(this, index) :\n            clone ? dom.cloneNode(true) : dom\n        )\n      })\n    },\n    wrapAll: function(structure){\n      if (this[0]) {\n        $(this[0]).before(structure = $(structure))\n        var children\n        // drill down to the inmost element\n        while ((children = structure.children()).length) structure = children.first()\n        $(structure).append(this)\n      }\n      return this\n    },\n    wrapInner: function(structure){\n      var func = isFunction(structure)\n      return this.each(function(index){\n        var self = $(this), contents = self.contents(),\n            dom  = func ? structure.call(this, index) : structure\n        contents.length ? contents.wrapAll(dom) : self.append(dom)\n      })\n    },\n    unwrap: function(){\n      this.parent().each(function(){\n        $(this).replaceWith($(this).children())\n      })\n      return this\n    },\n    clone: function(){\n      return this.map(function(){ return this.cloneNode(true) })\n    },\n    hide: function(){\n      return this.css(\"display\", \"none\")\n    },\n    toggle: function(setting){\n      return this.each(function(){\n        var el = $(this)\n        ;(setting === undefined ? el.css(\"display\") == \"none\" : setting) ? el.show() : el.hide()\n      })\n    },\n    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },\n    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },\n    html: function(html){\n      return 0 in arguments ?\n        this.each(function(idx){\n          var originHtml = this.innerHTML\n          $(this).empty().append( funcArg(this, html, idx, originHtml) )\n        }) :\n        (0 in this ? this[0].innerHTML : null)\n    },\n    text: function(text){\n      return 0 in arguments ?\n        this.each(function(idx){\n          var newText = funcArg(this, text, idx, this.textContent)\n          this.textContent = newText == null ? '' : ''+newText\n        }) :\n        (0 in this ? this.pluck('textContent').join(\"\") : null)\n    },\n    attr: function(name, value){\n      var result\n      return (typeof name == 'string' && !(1 in arguments)) ?\n        (0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null ? result : undefined) :\n        this.each(function(idx){\n          if (this.nodeType !== 1) return\n          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])\n          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))\n        })\n    },\n    removeAttr: function(name){\n      return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){\n        setAttribute(this, attribute)\n      }, this)})\n    },\n    prop: function(name, value){\n      name = propMap[name] || name\n      return (1 in arguments) ?\n        this.each(function(idx){\n          this[name] = funcArg(this, value, idx, this[name])\n        }) :\n        (this[0] && this[0][name])\n    },\n    removeProp: function(name){\n      name = propMap[name] || name\n      return this.each(function(){ delete this[name] })\n    },\n    data: function(name, value){\n      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()\n\n      var data = (1 in arguments) ?\n        this.attr(attrName, value) :\n        this.attr(attrName)\n\n      return data !== null ? deserializeValue(data) : undefined\n    },\n    val: function(value){\n      if (0 in arguments) {\n        if (value == null) value = \"\"\n        return this.each(function(idx){\n          this.value = funcArg(this, value, idx, this.value)\n        })\n      } else {\n        return this[0] && (this[0].multiple ?\n           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :\n           this[0].value)\n      }\n    },\n    offset: function(coordinates){\n      if (coordinates) return this.each(function(index){\n        var $this = $(this),\n            coords = funcArg(this, coordinates, index, $this.offset()),\n            parentOffset = $this.offsetParent().offset(),\n            props = {\n              top:  coords.top  - parentOffset.top,\n              left: coords.left - parentOffset.left\n            }\n\n        if ($this.css('position') == 'static') props['position'] = 'relative'\n        $this.css(props)\n      })\n      if (!this.length) return null\n      if (document.documentElement !== this[0] && !$.contains(document.documentElement, this[0]))\n        return {top: 0, left: 0}\n      var obj = this[0].getBoundingClientRect()\n      return {\n        left: obj.left + window.pageXOffset,\n        top: obj.top + window.pageYOffset,\n        width: Math.round(obj.width),\n        height: Math.round(obj.height)\n      }\n    },\n    css: function(property, value){\n      if (arguments.length < 2) {\n        var element = this[0]\n        if (typeof property == 'string') {\n          if (!element) return\n          return element.style[camelize(property)] || getComputedStyle(element, '').getPropertyValue(property)\n        } else if (isArray(property)) {\n          if (!element) return\n          var props = {}\n          var computedStyle = getComputedStyle(element, '')\n          $.each(property, function(_, prop){\n            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))\n          })\n          return props\n        }\n      }\n\n      var css = ''\n      if (type(property) == 'string') {\n        if (!value && value !== 0)\n          this.each(function(){ this.style.removeProperty(dasherize(property)) })\n        else\n          css = dasherize(property) + \":\" + maybeAddPx(property, value)\n      } else {\n        for (key in property)\n          if (!property[key] && property[key] !== 0)\n            this.each(function(){ this.style.removeProperty(dasherize(key)) })\n          else\n            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'\n      }\n\n      return this.each(function(){ this.style.cssText += ';' + css })\n    },\n    index: function(element){\n      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])\n    },\n    hasClass: function(name){\n      if (!name) return false\n      return emptyArray.some.call(this, function(el){\n        return this.test(className(el))\n      }, classRE(name))\n    },\n    addClass: function(name){\n      if (!name) return this\n      return this.each(function(idx){\n        if (!('className' in this)) return\n        classList = []\n        var cls = className(this), newName = funcArg(this, name, idx, cls)\n        newName.split(/\\s+/g).forEach(function(klass){\n          if (!$(this).hasClass(klass)) classList.push(klass)\n        }, this)\n        classList.length && className(this, cls + (cls ? \" \" : \"\") + classList.join(\" \"))\n      })\n    },\n    removeClass: function(name){\n      return this.each(function(idx){\n        if (!('className' in this)) return\n        if (name === undefined) return className(this, '')\n        classList = className(this)\n        funcArg(this, name, idx, classList).split(/\\s+/g).forEach(function(klass){\n          classList = classList.replace(classRE(klass), \" \")\n        })\n        className(this, classList.trim())\n      })\n    },\n    toggleClass: function(name, when){\n      if (!name) return this\n      return this.each(function(idx){\n        var $this = $(this), names = funcArg(this, name, idx, className(this))\n        names.split(/\\s+/g).forEach(function(klass){\n          (when === undefined ? !$this.hasClass(klass) : when) ?\n            $this.addClass(klass) : $this.removeClass(klass)\n        })\n      })\n    },\n    scrollTop: function(value){\n      if (!this.length) return\n      var hasScrollTop = 'scrollTop' in this[0]\n      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset\n      return this.each(hasScrollTop ?\n        function(){ this.scrollTop = value } :\n        function(){ this.scrollTo(this.scrollX, value) })\n    },\n    scrollLeft: function(value){\n      if (!this.length) return\n      var hasScrollLeft = 'scrollLeft' in this[0]\n      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset\n      return this.each(hasScrollLeft ?\n        function(){ this.scrollLeft = value } :\n        function(){ this.scrollTo(value, this.scrollY) })\n    },\n    position: function() {\n      if (!this.length) return\n\n      var elem = this[0],\n        // Get *real* offsetParent\n        offsetParent = this.offsetParent(),\n        // Get correct offsets\n        offset       = this.offset(),\n        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()\n\n      // Subtract element margins\n      // note: when an element has margin: auto the offsetLeft and marginLeft\n      // are the same in Safari causing offset.left to incorrectly be 0\n      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0\n      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0\n\n      // Add offsetParent borders\n      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0\n      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0\n\n      // Subtract the two offsets\n      return {\n        top:  offset.top  - parentOffset.top,\n        left: offset.left - parentOffset.left\n      }\n    },\n    offsetParent: function() {\n      return this.map(function(){\n        var parent = this.offsetParent || document.body\n        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css(\"position\") == \"static\")\n          parent = parent.offsetParent\n        return parent\n      })\n    }\n  }\n\n  // for now\n  $.fn.detach = $.fn.remove\n\n  // Generate the `width` and `height` functions\n  ;['width', 'height'].forEach(function(dimension){\n    var dimensionProperty =\n      dimension.replace(/./, function(m){ return m[0].toUpperCase() })\n\n    $.fn[dimension] = function(value){\n      var offset, el = this[0]\n      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :\n        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :\n        (offset = this.offset()) && offset[dimension]\n      else return this.each(function(idx){\n        el = $(this)\n        el.css(dimension, funcArg(this, value, idx, el[dimension]()))\n      })\n    }\n  })\n\n  function traverseNode(node, fun) {\n    fun(node)\n    for (var i = 0, len = node.childNodes.length; i < len; i++)\n      traverseNode(node.childNodes[i], fun)\n  }\n\n  // Generate the `after`, `prepend`, `before`, `append`,\n  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.\n  adjacencyOperators.forEach(function(operator, operatorIndex) {\n    var inside = operatorIndex % 2 //=> prepend, append\n\n    $.fn[operator] = function(){\n      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings\n      var argType, nodes = $.map(arguments, function(arg) {\n            var arr = []\n            argType = type(arg)\n            if (argType == \"array\") {\n              arg.forEach(function(el) {\n                if (el.nodeType !== undefined) return arr.push(el)\n                else if ($.zepto.isZ(el)) return arr = arr.concat(el.get())\n                arr = arr.concat(zepto.fragment(el))\n              })\n              return arr\n            }\n            return argType == \"object\" || arg == null ?\n              arg : zepto.fragment(arg)\n          }),\n          parent, copyByClone = this.length > 1\n      if (nodes.length < 1) return this\n\n      return this.each(function(_, target){\n        parent = inside ? target : target.parentNode\n\n        // convert all methods to a \"before\" operation\n        target = operatorIndex == 0 ? target.nextSibling :\n                 operatorIndex == 1 ? target.firstChild :\n                 operatorIndex == 2 ? target :\n                 null\n\n        var parentInDocument = $.contains(document.documentElement, parent)\n\n        nodes.forEach(function(node){\n          if (copyByClone) node = node.cloneNode(true)\n          else if (!parent) return $(node).remove()\n\n          parent.insertBefore(node, target)\n          if (parentInDocument) traverseNode(node, function(el){\n            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&\n               (!el.type || el.type === 'text/javascript') && !el.src){\n              var target = el.ownerDocument ? el.ownerDocument.defaultView : window\n              target['eval'].call(target, el.innerHTML)\n            }\n          })\n        })\n      })\n    }\n\n    // after    => insertAfter\n    // prepend  => prependTo\n    // before   => insertBefore\n    // append   => appendTo\n    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){\n      $(html)[operator](this)\n      return this\n    }\n  })\n\n  zepto.Z.prototype = Z.prototype = $.fn\n\n  // Export internal API functions in the `$.zepto` namespace\n  zepto.uniq = uniq\n  zepto.deserializeValue = deserializeValue\n  $.zepto = zepto\n\n  return $\n})()\n\nwindow.Zepto = Zepto\nwindow.$ === undefined && (window.$ = Zepto)\n\n;(function($){\n  var _zid = 1, undefined,\n      slice = Array.prototype.slice,\n      isFunction = $.isFunction,\n      isString = function(obj){ return typeof obj == 'string' },\n      handlers = {},\n      specialEvents={},\n      focusinSupported = 'onfocusin' in window,\n      focus = { focus: 'focusin', blur: 'focusout' },\n      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }\n\n  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'\n\n  function zid(element) {\n    return element._zid || (element._zid = _zid++)\n  }\n  function findHandlers(element, event, fn, selector) {\n    event = parse(event)\n    if (event.ns) var matcher = matcherFor(event.ns)\n    return (handlers[zid(element)] || []).filter(function(handler) {\n      return handler\n        && (!event.e  || handler.e == event.e)\n        && (!event.ns || matcher.test(handler.ns))\n        && (!fn       || zid(handler.fn) === zid(fn))\n        && (!selector || handler.sel == selector)\n    })\n  }\n  function parse(event) {\n    var parts = ('' + event).split('.')\n    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}\n  }\n  function matcherFor(ns) {\n    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')\n  }\n\n  function eventCapture(handler, captureSetting) {\n    return handler.del &&\n      (!focusinSupported && (handler.e in focus)) ||\n      !!captureSetting\n  }\n\n  function realEvent(type) {\n    return hover[type] || (focusinSupported && focus[type]) || type\n  }\n\n  function add(element, events, fn, data, selector, delegator, capture){\n    var id = zid(element), set = (handlers[id] || (handlers[id] = []))\n    events.split(/\\s/).forEach(function(event){\n      if (event == 'ready') return $(document).ready(fn)\n      var handler   = parse(event)\n      handler.fn    = fn\n      handler.sel   = selector\n      // emulate mouseenter, mouseleave\n      if (handler.e in hover) fn = function(e){\n        var related = e.relatedTarget\n        if (!related || (related !== this && !$.contains(this, related)))\n          return handler.fn.apply(this, arguments)\n      }\n      handler.del   = delegator\n      var callback  = delegator || fn\n      handler.proxy = function(e){\n        e = compatible(e)\n        if (e.isImmediatePropagationStopped()) return\n        e.data = data\n        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))\n        if (result === false) e.preventDefault(), e.stopPropagation()\n        return result\n      }\n      handler.i = set.length\n      set.push(handler)\n      if ('addEventListener' in element)\n        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))\n    })\n  }\n  function remove(element, events, fn, selector, capture){\n    var id = zid(element)\n    ;(events || '').split(/\\s/).forEach(function(event){\n      findHandlers(element, event, fn, selector).forEach(function(handler){\n        delete handlers[id][handler.i]\n      if ('removeEventListener' in element)\n        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))\n      })\n    })\n  }\n\n  $.event = { add: add, remove: remove }\n\n  $.proxy = function(fn, context) {\n    var args = (2 in arguments) && slice.call(arguments, 2)\n    if (isFunction(fn)) {\n      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }\n      proxyFn._zid = zid(fn)\n      return proxyFn\n    } else if (isString(context)) {\n      if (args) {\n        args.unshift(fn[context], fn)\n        return $.proxy.apply(null, args)\n      } else {\n        return $.proxy(fn[context], fn)\n      }\n    } else {\n      throw new TypeError(\"expected function\")\n    }\n  }\n\n  $.fn.bind = function(event, data, callback){\n    return this.on(event, data, callback)\n  }\n  $.fn.unbind = function(event, callback){\n    return this.off(event, callback)\n  }\n  $.fn.one = function(event, selector, data, callback){\n    return this.on(event, selector, data, callback, 1)\n  }\n\n  var returnTrue = function(){return true},\n      returnFalse = function(){return false},\n      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,\n      eventMethods = {\n        preventDefault: 'isDefaultPrevented',\n        stopImmediatePropagation: 'isImmediatePropagationStopped',\n        stopPropagation: 'isPropagationStopped'\n      }\n\n  function compatible(event, source) {\n    if (source || !event.isDefaultPrevented) {\n      source || (source = event)\n\n      $.each(eventMethods, function(name, predicate) {\n        var sourceMethod = source[name]\n        event[name] = function(){\n          this[predicate] = returnTrue\n          return sourceMethod && sourceMethod.apply(source, arguments)\n        }\n        event[predicate] = returnFalse\n      })\n\n      event.timeStamp || (event.timeStamp = Date.now())\n\n      if (source.defaultPrevented !== undefined ? source.defaultPrevented :\n          'returnValue' in source ? source.returnValue === false :\n          source.getPreventDefault && source.getPreventDefault())\n        event.isDefaultPrevented = returnTrue\n    }\n    return event\n  }\n\n  function createProxy(event) {\n    var key, proxy = { originalEvent: event }\n    for (key in event)\n      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]\n\n    return compatible(proxy, event)\n  }\n\n  $.fn.delegate = function(selector, event, callback){\n    return this.on(event, selector, callback)\n  }\n  $.fn.undelegate = function(selector, event, callback){\n    return this.off(event, selector, callback)\n  }\n\n  $.fn.live = function(event, callback){\n    $(document.body).delegate(this.selector, event, callback)\n    return this\n  }\n  $.fn.die = function(event, callback){\n    $(document.body).undelegate(this.selector, event, callback)\n    return this\n  }\n\n  $.fn.on = function(event, selector, data, callback, one){\n    var autoRemove, delegator, $this = this\n    if (event && !isString(event)) {\n      $.each(event, function(type, fn){\n        $this.on(type, selector, data, fn, one)\n      })\n      return $this\n    }\n\n    if (!isString(selector) && !isFunction(callback) && callback !== false)\n      callback = data, data = selector, selector = undefined\n    if (callback === undefined || data === false)\n      callback = data, data = undefined\n\n    if (callback === false) callback = returnFalse\n\n    return $this.each(function(_, element){\n      if (one) autoRemove = function(e){\n        remove(element, e.type, callback)\n        return callback.apply(this, arguments)\n      }\n\n      if (selector) delegator = function(e){\n        var evt, match = $(e.target).closest(selector, element).get(0)\n        if (match && match !== element) {\n          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})\n          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))\n        }\n      }\n\n      add(element, event, callback, data, selector, delegator || autoRemove)\n    })\n  }\n  $.fn.off = function(event, selector, callback){\n    var $this = this\n    if (event && !isString(event)) {\n      $.each(event, function(type, fn){\n        $this.off(type, selector, fn)\n      })\n      return $this\n    }\n\n    if (!isString(selector) && !isFunction(callback) && callback !== false)\n      callback = selector, selector = undefined\n\n    if (callback === false) callback = returnFalse\n\n    return $this.each(function(){\n      remove(this, event, callback, selector)\n    })\n  }\n\n  $.fn.trigger = function(event, args){\n    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)\n    event._args = args\n    return this.each(function(){\n      // handle focus(), blur() by calling them directly\n      if (event.type in focus && typeof this[event.type] == \"function\") this[event.type]()\n      // items in the collection might not be DOM elements\n      else if ('dispatchEvent' in this) this.dispatchEvent(event)\n      else $(this).triggerHandler(event, args)\n    })\n  }\n\n  // triggers event handlers on current element just as if an event occurred,\n  // doesn't trigger an actual event, doesn't bubble\n  $.fn.triggerHandler = function(event, args){\n    var e, result\n    this.each(function(i, element){\n      e = createProxy(isString(event) ? $.Event(event) : event)\n      e._args = args\n      e.target = element\n      $.each(findHandlers(element, event.type || event), function(i, handler){\n        result = handler.proxy(e)\n        if (e.isImmediatePropagationStopped()) return false\n      })\n    })\n    return result\n  }\n\n  // shortcut methods for `.bind(event, fn)` for each event type\n  ;('focusin focusout focus blur load resize scroll unload click dblclick '+\n  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+\n  'change select keydown keypress keyup error').split(' ').forEach(function(event) {\n    $.fn[event] = function(callback) {\n      return (0 in arguments) ?\n        this.bind(event, callback) :\n        this.trigger(event)\n    }\n  })\n\n  $.Event = function(type, props) {\n    if (!isString(type)) props = type, type = props.type\n    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true\n    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])\n    event.initEvent(type, bubbles, true)\n    return compatible(event)\n  }\n\n})(Zepto)\n\n;(function($){\n  var jsonpID = +new Date(),\n      document = window.document,\n      key,\n      name,\n      rscript = /<script\\b[^<]*(?:(?!<\\/script>)<[^<]*)*<\\/script>/gi,\n      scriptTypeRE = /^(?:text|application)\\/javascript/i,\n      xmlTypeRE = /^(?:text|application)\\/xml/i,\n      jsonType = 'application/json',\n      htmlType = 'text/html',\n      blankRE = /^\\s*$/,\n      originAnchor = document.createElement('a')\n\n  originAnchor.href = window.location.href\n\n  // trigger a custom event and return false if it was cancelled\n  function triggerAndReturn(context, eventName, data) {\n    var event = $.Event(eventName)\n    $(context).trigger(event, data)\n    return !event.isDefaultPrevented()\n  }\n\n  // trigger an Ajax \"global\" event\n  function triggerGlobal(settings, context, eventName, data) {\n    if (settings.global) return triggerAndReturn(context || document, eventName, data)\n  }\n\n  // Number of active Ajax requests\n  $.active = 0\n\n  function ajaxStart(settings) {\n    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')\n  }\n  function ajaxStop(settings) {\n    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')\n  }\n\n  // triggers an extra global event \"ajaxBeforeSend\" that's like \"ajaxSend\" but cancelable\n  function ajaxBeforeSend(xhr, settings) {\n    var context = settings.context\n    if (settings.beforeSend.call(context, xhr, settings) === false ||\n        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)\n      return false\n\n    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])\n  }\n  function ajaxSuccess(data, xhr, settings, deferred) {\n    var context = settings.context, status = 'success'\n    settings.success.call(context, data, status, xhr)\n    if (deferred) deferred.resolveWith(context, [data, status, xhr])\n    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])\n    ajaxComplete(status, xhr, settings)\n  }\n  // type: \"timeout\", \"error\", \"abort\", \"parsererror\"\n  function ajaxError(error, type, xhr, settings, deferred) {\n    var context = settings.context\n    settings.error.call(context, xhr, type, error)\n    if (deferred) deferred.rejectWith(context, [xhr, type, error])\n    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])\n    ajaxComplete(type, xhr, settings)\n  }\n  // status: \"success\", \"notmodified\", \"error\", \"timeout\", \"abort\", \"parsererror\"\n  function ajaxComplete(status, xhr, settings) {\n    var context = settings.context\n    settings.complete.call(context, xhr, status)\n    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])\n    ajaxStop(settings)\n  }\n\n  function ajaxDataFilter(data, type, settings) {\n    if (settings.dataFilter == empty) return data\n    var context = settings.context\n    return settings.dataFilter.call(context, data, type)\n  }\n\n  // Empty function, used as default callback\n  function empty() {}\n\n  $.ajaxJSONP = function(options, deferred){\n    if (!('type' in options)) return $.ajax(options)\n\n    var _callbackName = options.jsonpCallback,\n      callbackName = ($.isFunction(_callbackName) ?\n        _callbackName() : _callbackName) || ('Zepto' + (jsonpID++)),\n      script = document.createElement('script'),\n      originalCallback = window[callbackName],\n      responseData,\n      abort = function(errorType) {\n        $(script).triggerHandler('error', errorType || 'abort')\n      },\n      xhr = { abort: abort }, abortTimeout\n\n    if (deferred) deferred.promise(xhr)\n\n    $(script).on('load error', function(e, errorType){\n      clearTimeout(abortTimeout)\n      $(script).off().remove()\n\n      if (e.type == 'error' || !responseData) {\n        ajaxError(null, errorType || 'error', xhr, options, deferred)\n      } else {\n        ajaxSuccess(responseData[0], xhr, options, deferred)\n      }\n\n      window[callbackName] = originalCallback\n      if (responseData && $.isFunction(originalCallback))\n        originalCallback(responseData[0])\n\n      originalCallback = responseData = undefined\n    })\n\n    if (ajaxBeforeSend(xhr, options) === false) {\n      abort('abort')\n      return xhr\n    }\n\n    window[callbackName] = function(){\n      responseData = arguments\n    }\n\n    script.src = options.url.replace(/\\?(.+)=\\?/, '?$1=' + callbackName)\n    document.head.appendChild(script)\n\n    if (options.timeout > 0) abortTimeout = setTimeout(function(){\n      abort('timeout')\n    }, options.timeout)\n\n    return xhr\n  }\n\n  $.ajaxSettings = {\n    // Default type of request\n    type: 'GET',\n    // Callback that is executed before request\n    beforeSend: empty,\n    // Callback that is executed if the request succeeds\n    success: empty,\n    // Callback that is executed the the server drops error\n    error: empty,\n    // Callback that is executed on request complete (both: error and success)\n    complete: empty,\n    // The context for the callbacks\n    context: null,\n    // Whether to trigger \"global\" Ajax events\n    global: true,\n    // Transport\n    xhr: function () {\n      return new window.XMLHttpRequest()\n    },\n    // MIME types mapping\n    // IIS returns Javascript as \"application/x-javascript\"\n    accepts: {\n      script: 'text/javascript, application/javascript, application/x-javascript',\n      json:   jsonType,\n      xml:    'application/xml, text/xml',\n      html:   htmlType,\n      text:   'text/plain'\n    },\n    // Whether the request is to another domain\n    crossDomain: false,\n    // Default timeout\n    timeout: 0,\n    // Whether data should be serialized to string\n    processData: true,\n    // Whether the browser should be allowed to cache GET responses\n    cache: true,\n    //Used to handle the raw response data of XMLHttpRequest.\n    //This is a pre-filtering function to sanitize the response.\n    //The sanitized response should be returned\n    dataFilter: empty\n  }\n\n  function mimeToDataType(mime) {\n    if (mime) mime = mime.split(';', 2)[0]\n    return mime && ( mime == htmlType ? 'html' :\n      mime == jsonType ? 'json' :\n      scriptTypeRE.test(mime) ? 'script' :\n      xmlTypeRE.test(mime) && 'xml' ) || 'text'\n  }\n\n  function appendQuery(url, query) {\n    if (query == '') return url\n    return (url + '&' + query).replace(/[&?]{1,2}/, '?')\n  }\n\n  // serialize payload and append it to the URL for GET requests\n  function serializeData(options) {\n    if (options.processData && options.data && $.type(options.data) != \"string\")\n      options.data = $.param(options.data, options.traditional)\n    if (options.data && (!options.type || options.type.toUpperCase() == 'GET' || 'jsonp' == options.dataType))\n      options.url = appendQuery(options.url, options.data), options.data = undefined\n  }\n\n  $.ajax = function(options){\n    var settings = $.extend({}, options || {}),\n        deferred = $.Deferred && $.Deferred(),\n        urlAnchor, hashIndex\n    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]\n\n    ajaxStart(settings)\n\n    if (!settings.crossDomain) {\n      urlAnchor = document.createElement('a')\n      urlAnchor.href = settings.url\n      // cleans up URL for .href (IE only), see https://github.com/madrobby/zepto/pull/1049\n      urlAnchor.href = urlAnchor.href\n      settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)\n    }\n\n    if (!settings.url) settings.url = window.location.toString()\n    if ((hashIndex = settings.url.indexOf('#')) > -1) settings.url = settings.url.slice(0, hashIndex)\n    serializeData(settings)\n\n    var dataType = settings.dataType, hasPlaceholder = /\\?.+=\\?/.test(settings.url)\n    if (hasPlaceholder) dataType = 'jsonp'\n\n    if (settings.cache === false || (\n         (!options || options.cache !== true) &&\n         ('script' == dataType || 'jsonp' == dataType)\n        ))\n      settings.url = appendQuery(settings.url, '_=' + Date.now())\n\n    if ('jsonp' == dataType) {\n      if (!hasPlaceholder)\n        settings.url = appendQuery(settings.url,\n          settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')\n      return $.ajaxJSONP(settings, deferred)\n    }\n\n    var mime = settings.accepts[dataType],\n        headers = { },\n        setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },\n        protocol = /^([\\w-]+:)\\/\\//.test(settings.url) ? RegExp.$1 : window.location.protocol,\n        xhr = settings.xhr(),\n        nativeSetHeader = xhr.setRequestHeader,\n        abortTimeout\n\n    if (deferred) deferred.promise(xhr)\n\n    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')\n    setHeader('Accept', mime || '*/*')\n    if (mime = settings.mimeType || mime) {\n      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]\n      xhr.overrideMimeType && xhr.overrideMimeType(mime)\n    }\n    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))\n      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')\n\n    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])\n    xhr.setRequestHeader = setHeader\n\n    xhr.onreadystatechange = function(){\n      if (xhr.readyState == 4) {\n        xhr.onreadystatechange = empty\n        clearTimeout(abortTimeout)\n        var result, error = false\n        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {\n          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))\n\n          if (xhr.responseType == 'arraybuffer' || xhr.responseType == 'blob')\n            result = xhr.response\n          else {\n            result = xhr.responseText\n\n            try {\n              // http://perfectionkills.com/global-eval-what-are-the-options/\n              // sanitize response accordingly if data filter callback provided\n              result = ajaxDataFilter(result, dataType, settings)\n              if (dataType == 'script')    (1,eval)(result)\n              else if (dataType == 'xml')  result = xhr.responseXML\n              else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)\n            } catch (e) { error = e }\n\n            if (error) return ajaxError(error, 'parsererror', xhr, settings, deferred)\n          }\n\n          ajaxSuccess(result, xhr, settings, deferred)\n        } else {\n          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)\n        }\n      }\n    }\n\n    if (ajaxBeforeSend(xhr, settings) === false) {\n      xhr.abort()\n      ajaxError(null, 'abort', xhr, settings, deferred)\n      return xhr\n    }\n\n    var async = 'async' in settings ? settings.async : true\n    xhr.open(settings.type, settings.url, async, settings.username, settings.password)\n\n    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]\n\n    for (name in headers) nativeSetHeader.apply(xhr, headers[name])\n\n    if (settings.timeout > 0) abortTimeout = setTimeout(function(){\n        xhr.onreadystatechange = empty\n        xhr.abort()\n        ajaxError(null, 'timeout', xhr, settings, deferred)\n      }, settings.timeout)\n\n    // avoid sending empty string (#319)\n    xhr.send(settings.data ? settings.data : null)\n    return xhr\n  }\n\n  // handle optional data/success arguments\n  function parseArguments(url, data, success, dataType) {\n    if ($.isFunction(data)) dataType = success, success = data, data = undefined\n    if (!$.isFunction(success)) dataType = success, success = undefined\n    return {\n      url: url\n    , data: data\n    , success: success\n    , dataType: dataType\n    }\n  }\n\n  $.get = function(/* url, data, success, dataType */){\n    return $.ajax(parseArguments.apply(null, arguments))\n  }\n\n  $.post = function(/* url, data, success, dataType */){\n    var options = parseArguments.apply(null, arguments)\n    options.type = 'POST'\n    return $.ajax(options)\n  }\n\n  $.getJSON = function(/* url, data, success */){\n    var options = parseArguments.apply(null, arguments)\n    options.dataType = 'json'\n    return $.ajax(options)\n  }\n\n  $.fn.load = function(url, data, success){\n    if (!this.length) return this\n    var self = this, parts = url.split(/\\s/), selector,\n        options = parseArguments(url, data, success),\n        callback = options.success\n    if (parts.length > 1) options.url = parts[0], selector = parts[1]\n    options.success = function(response){\n      self.html(selector ?\n        $('<div>').html(response.replace(rscript, \"\")).find(selector)\n        : response)\n      callback && callback.apply(self, arguments)\n    }\n    $.ajax(options)\n    return this\n  }\n\n  var escape = encodeURIComponent\n\n  function serialize(params, obj, traditional, scope){\n    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)\n    $.each(obj, function(key, value) {\n      type = $.type(value)\n      if (scope) key = traditional ? scope :\n        scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'\n      // handle data in serializeArray() format\n      if (!scope && array) params.add(value.name, value.value)\n      // recurse into nested objects\n      else if (type == \"array\" || (!traditional && type == \"object\"))\n        serialize(params, value, traditional, key)\n      else params.add(key, value)\n    })\n  }\n\n  $.param = function(obj, traditional){\n    var params = []\n    params.add = function(key, value) {\n      if ($.isFunction(value)) value = value()\n      if (value == null) value = \"\"\n      this.push(escape(key) + '=' + escape(value))\n    }\n    serialize(params, obj, traditional)\n    return params.join('&').replace(/%20/g, '+')\n  }\n})(Zepto)\n\n;(function($){\n  $.fn.serializeArray = function() {\n    var name, type, result = [],\n      add = function(value) {\n        if (value.forEach) return value.forEach(add)\n        result.push({ name: name, value: value })\n      }\n    if (this[0]) $.each(this[0].elements, function(_, field){\n      type = field.type, name = field.name\n      if (name && field.nodeName.toLowerCase() != 'fieldset' &&\n        !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&\n        ((type != 'radio' && type != 'checkbox') || field.checked))\n          add($(field).val())\n    })\n    return result\n  }\n\n  $.fn.serialize = function(){\n    var result = []\n    this.serializeArray().forEach(function(elm){\n      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))\n    })\n    return result.join('&')\n  }\n\n  $.fn.submit = function(callback) {\n    if (0 in arguments) this.bind('submit', callback)\n    else if (this.length) {\n      var event = $.Event('submit')\n      this.eq(0).trigger(event)\n      if (!event.isDefaultPrevented()) this.get(0).submit()\n    }\n    return this\n  }\n\n})(Zepto)\n\n;(function(){\n  // getComputedStyle shouldn't freak out when called\n  // without a valid element as argument\n  try {\n    getComputedStyle(undefined)\n  } catch(e) {\n    var nativeGetComputedStyle = getComputedStyle\n    window.getComputedStyle = function(element, pseudoElement){\n      try {\n        return nativeGetComputedStyle(element, pseudoElement)\n      } catch(e) {\n        return null\n      }\n    }\n  }\n})()\n  return Zepto\n}))\n"

/***/ }),

/***/ "IiB0":
/***/ (function(module, exports) {

module.exports = "<div class=\"<% if(isAndroid){ %>weui-skin_android <% } %><%= className %>\">\r\n  <div class=\"weui-mask\"></div>\r\n  <div class=\"weui-actionsheet\">\r\n    <% if(!isAndroid && title){ %>\r\n    <div class=\"weui-actionsheet__title\">\r\n      <p class=\"weui-actionsheet__title-text\"><%= title %></p>\r\n    </div>\r\n    <% } %>\r\n    <div class=\"weui-actionsheet__menu\">\r\n      <% for(let i = 0; i < menus.length; i++){ %>\r\n      <div class=\"weui-actionsheet__cell\"><%= menus[i].label %></div>\r\n      <% } %>\r\n    </div>\r\n    <div class=\"weui-actionsheet__action\">\r\n      <% for(let j = 0; j < actions.length; j++){ %>\r\n      <div class=\"weui-actionsheet__cell\"><%= actions[j].label %></div>\r\n      <% } %>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

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

module.exports = "<div class=\"<%=className%>\">\r\n  <div class=\"weui-mask\"></div>\r\n  <div class=\"weui-dialog <% if(isAndroid){ %> weui-skin_android <% } %>\">\r\n    <% if(title){ %>\r\n    <div class=\"weui-dialog__hd\"><strong class=\"weui-dialog__title\"><%=title%></strong></div>\r\n    <% } %>\r\n    <div class=\"weui-dialog__bd\"><%=content%></div>\r\n    <div class=\"weui-dialog__ft\">\r\n      <% for(let i = 0; i < buttons.length; i++){ %>\r\n      <a href=\"javascript:;\" class=\"weui-dialog__btn weui-dialog__btn_<%=buttons[i]['type']%>\"><%=buttons[i]['label']%></a>\r\n      <% } %>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ "RpY/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("BydT");

/***/ }),

/***/ "SNGo":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	function log(error) {
		(typeof console !== "undefined")
		&& (console.error || console.log)("[Script Loader]", error);
	}

	// Check for IE =< 8
	function isIE() {
		return typeof attachEvent !== "undefined" && typeof addEventListener === "undefined";
	}

	try {
		if (typeof execScript !== "undefined" && isIE()) {
			execScript(src);
		} else if (typeof eval !== "undefined") {
			eval.call(null, src);
		} else {
			log("EvalError: No eval function available");
		}
	} catch (error) {
		log(error);
	}
}


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

/***/ "ZzFS":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("kTKA").document;
module.exports = document && document.documentElement;


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

module.exports = "<div class=\"weui-picker__group\">\r\n  <div class=\"weui-picker__mask\"></div>\r\n  <div class=\"weui-picker__indicator\"></div>\r\n  <div class=\"weui-picker__content\"></div>\r\n</div>\r\n";

/***/ }),

/***/ "eYJG":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "f1xp":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("VTRa");
var dPs = __webpack_require__("BgWC");
var enumBugKeys = __webpack_require__("7jcK");
var IE_PROTO = __webpack_require__("Ksmq")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("KnLz")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("ZzFS").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
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

module.exports = "<!-- <div class=\"<%= className %>\">\r\n    <div class=\"weui-mask\"></div>\r\n    <div class=\"weui-picker\">\r\n\r\n        <div class=\"weui-picker__hd\">\r\n            <a href=\"javascript:;\" data-action=\"cancel\" class=\"weui-picker__action\">取消</a>\r\n            <a href=\"javascript:;\" data-action=\"select\" class=\"weui-picker__action\" id=\"weui-picker-confirm\">确定</a>\r\n        </div>\r\n        <div class=\"weui-picker__bd\"></div>\r\n    </div>\r\n</div> -->\r\n\r\n<div class=\"<%= className %>\">\r\n  <div class=\"weui-mask\"></div>\r\n  <div class=\"weui-half-screen-dialog weui-picker\">\r\n    <div class=\"weui-half-screen-dialog__hd\">\r\n      <div class=\"weui-half-screen-dialog__hd__side\">\r\n        <button class=\"weui-icon-btn weui-icon-btn_close weui-picker__btn\">关闭</button>\r\n      </div>\r\n      <div class=\"weui-half-screen-dialog__hd__main\">\r\n        <strong class=\"weui-half-screen-dialog__title\">标题</strong>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"weui-half-screen-dialog__bd\">\r\n      <div class=\"weui-picker__bd\"></div>\r\n    </div>\r\n\r\n    <div class=\"weui-half-screen-dialog__ft\">\r\n      <a href=\"javascript:;\" class=\"weui-btn weui-btn_primary weui-picker__btn\" id=\"weui-picker-confirm\" data-action=\"select\">确定</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

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

// EXTERNAL MODULE: ../node_modules/_zepto@1.2.0@zepto/dist/zepto.js
var zepto = __webpack_require__("6Wtp");
var zepto_default = /*#__PURE__*/__webpack_require__.n(zepto);

// EXTERNAL MODULE: ../node_modules/_template_js@0.8.0@template_js/template.js
var template = __webpack_require__("GNLO");
var template_default = /*#__PURE__*/__webpack_require__.n(template);

// CONCATENATED MODULE: ./util/util.js

 // 模板编译参数

template_default.a.config({
  sTag: '<%',
  eTag: '%>',
  compress: true,
  escape: false
});
/* 判断系统 */

function _detect(ua) {
  if (!this.os) {
    var os = this.os = {};
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);

    if (android) {
      os.android = true;
      os.version = android[2];
    }
  }
}

_detect.call(zepto_default.a, navigator.userAgent); // 扩展 $


zepto_default.a.extend(zepto_default.a, {
  /**
   * template engine(template.js)
   * @param {String} tpl
   * @param {Object} data
   * @returns {String}
   */
  render: function render(tpl, data) {
    return template_default()(tpl)(data);
  }
});
/**
 * 将指定选择器包装成 zepto 对象
 * @param {string|HTMLElement} selector
 */

zepto_default.a.zepto = function (selector) {
  if (typeof selector === 'string') {
    return zepto_default()(selector);
  } else if (selector instanceof HTMLElement) {
    return zepto_default()(selector);
  } else {
    return selector;
  }
};

zepto_default.a.isNumber = zepto_default.a.isNumeric;

zepto_default.a.isString = function (value) {
  return typeof value === 'string';
};

zepto_default.a.isBoolean = function (value) {
  return typeof value === 'boolean';
};

zepto_default.a.isObject = function (value) {
  return value !== null && value !== undefined && typeof value === 'object';
};

zepto_default.a.apply = function (thisArg, fn) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (zepto_default.a.isFunction(fn)) fn.apply(thisArg, args);
};

/* harmony default export */ var util = (zepto_default.a);
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
// EXTERNAL MODULE: ./action-sheet/action-sheet.html
var action_sheet = __webpack_require__("IiB0");
var action_sheet_default = /*#__PURE__*/__webpack_require__.n(action_sheet);

// CONCATENATED MODULE: ./action-sheet/action-sheet.js
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



var action_sheet_sington;
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


function actionSheet(menus, actions, options) {
  if (menus === void 0) {
    menus = [];
  }

  if (actions === void 0) {
    actions = [];
  }

  if (options === void 0) {
    options = {};
  }

  if (action_sheet_sington) return action_sheet_sington;
  var isAndroid = util.os.android;
  options = util.extend({
    menus: menus,
    actions: actions,
    title: '',
    className: '',
    isAndroid: isAndroid,
    onClose: util.noop
  }, options);
  var $actionSheetWrap = util(util.render(action_sheet_default.a, options));
  var $actionSheet = $actionSheetWrap.find('.weui-actionsheet');
  var $actionSheetMask = $actionSheetWrap.find('.weui-mask');

  function _hide(callback) {
    $actionSheet.addClass(options.isAndroid ? 'weui-animate-fade-out' : 'weui-animate-slide-down');
    $actionSheetMask.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
      $actionSheetWrap.remove();
      action_sheet_sington = false;
      options.onClose();
      callback && callback();
    });
  }

  function hide(callback) {
    _hide(callback);
  }

  util('body').append($actionSheetWrap);
  $actionSheet.addClass(options.isAndroid ? 'weui-animate-fade-in' : 'weui-animate-slide-up');
  $actionSheetMask.addClass('weui-animate-fade-in').on('click', function () {
    hide();
  });
  $actionSheetWrap.find('.weui-actionsheet__menu').on('click', '.weui-actionsheet__cell', function (evt) {
    var index = util(this).index();
    menus[index].onClick.call(this, evt);
    hide();
  });
  $actionSheetWrap.find('.weui-actionsheet__action').on('click', '.weui-actionsheet__cell', function (evt) {
    var index = util(this).index();
    actions[index].onClick.call(this, evt);
    hide();
  });
  action_sheet_sington = $actionSheetWrap[0];
  action_sheet_sington.hide = hide;
  return action_sheet_sington;
}

/* harmony default export */ var action_sheet_action_sheet = (actionSheet);
// EXTERNAL MODULE: ./top-tips/top-tips.html
var top_tips = __webpack_require__("5P1O");
var top_tips_default = /*#__PURE__*/__webpack_require__.n(top_tips);

// CONCATENATED MODULE: ./top-tips/top-tips.js
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

function topTips(content, options) {
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
  var $topTips = util(util.render(top_tips_default.a, options));

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

/* harmony default export */ var top_tips_top_tips = (topTips);
// CONCATENATED MODULE: ./search-bar/search-bar.js
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

/* harmony default export */ var search_bar = (searchBar);
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
    if (tips) top_tips_top_tips(tips);
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


// EXTERNAL MODULE: ../node_modules/_@babel_runtime-corejs2@7.6.0@@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("0rzm");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

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

    defaults.onChange.call(this, defaults.items[index], index);
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


  $scrollable = $this.off().on('touchstart', function (evt) {
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
 * @param {Array} items picker的数据，即用于生成picker的数据，picker的层级可以自己定义，但建议最多三层。数据格式参考example。
 * @param {Array|Object} options 配置项
 * @param {number=} [options.depth] picker深度(也就是picker有多少列) 取值为1-3。如果为空，则取items第一项的深度。
 * @param {string=} [options.id=default] 作为picker的唯一标识，作用是以id缓存当时的选择。（当你想每次传入的defaultValue都是不一样时，可以使用不同的id区分）
 * @param {string=} [options.className] 自定义类名
 * @param {string=} [options.container] 指定容器
 * @param {array=} [options.defaultValue] 默认选项的value数组
 * @param {function=} [options.onChange] 在picker选中的值发生变化的时候回调
 * @param {function=} [options.onConfirm] 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。
 * @param {function=} [options.onClose] picker关闭后的回调
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

  var config = (_ref = (arguments.length <= 1 ? 0 : arguments.length - 1) - 1 + 1, _ref < 1 || arguments.length <= _ref ? undefined : arguments[_ref]);
  var defaults = util.extend({
    id: 'default',
    className: '',
    container: 'body',
    title: '',
    onChange: util.noop,
    onConfirm: util.noop,
    onClose: util.noop
  }, config); // 数据处理

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
  var depth = config.depth || (isMulti ? final.length : depthOf(final[0]));
  var groups = ''; // 显示与隐藏的方法

  function show() {
    util(defaults.container).append($picker); // 更改标题

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
// EXTERNAL MODULE: ../node_modules/_@babel_runtime-corejs2@7.6.0@@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("0F14");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ../node_modules/_@babel_runtime-corejs2@7.6.0@@babel/runtime-corejs2/core-js/parse-float.js
var parse_float = __webpack_require__("RpY/");
var parse_float_default = /*#__PURE__*/__webpack_require__.n(parse_float);

// CONCATENATED MODULE: ./slider/slider-button.js

// ------------------------------------------------------------------------------
// name: slider-button
// author: mudas( mschool.tech )
// created: 2019.09.15 上午 7:23
// ------------------------------------------------------------------------------


function sliderButton(selector, options) {
  var _this = this;

  var host = this; // 该方法将被父级以 call 的方式调用，并注入作用域为父级

  var $el = util.isString(selector) ? util(selector) : selector;
  var min = options.min,
      max = options.max,
      step = options.step;
  var dragging = false;
  var isClick = false;
  var startX = 0;
  var startY = 0;
  var currentX = 0;
  var currentY = 0;
  var newPosition = 0;
  var startPosition = 0;
  this.value = options.value;
  this.oldValue = null;

  this.currentPosition = function () {
    return (_this.value - options.min) / (options.max - options.min) * 100 + "%";
  };

  this.wrapperStyle = function () {
    return _this.vertical ? {
      bottom: _this.currentPosition()
    } : {
      left: _this.currentPosition()
    };
  };

  this.applyWrapperStyle = function () {
    $el.css(_this.wrapperStyle());
  };

  this.update = function (value) {
    _this.value = value;

    _this.applyWrapperStyle();

    host.updateValue(value);
  };

  this.setDragging = function (value) {
    dragging = value;
    host.dragging = value;
  }; // 回调方法


  this.onButtonDown = function (event) {
    if (options.disabled) return;
    event.preventDefault();

    _this.onDragStart(event);

    window.addEventListener('mousemove', _this.onDragging);
    window.addEventListener('touchmove', _this.onDragging);
    window.addEventListener('mouseup', _this.onDragEnd);
    window.addEventListener('touchend', _this.onDragEnd);
    window.addEventListener('contextmenu', _this.onDragEnd);
  };

  this.onDragStart = function (event) {
    _this.setDragging(true);

    isClick = true;

    if (event.type === 'touchstart') {
      event.clientY = event.touches[0].clientY;
      event.clientX = event.touches[0].clientX;
    }

    if (options.vertical) {
      startY = event.clientY;
    } else {
      startX = event.clientX;
    }

    startPosition = parse_float_default()(_this.currentPosition());
    newPosition = startPosition;
  };

  this.onDragging = function (event) {
    if (dragging) {
      isClick = false;
      host.resetSize();
      var diff = 0;

      if (event.type === 'touchmove') {
        event.clientY = event.touches[0].clientY;
        event.clientX = event.touches[0].clientX;
      }

      if (_this.vertical) {
        currentY = event.clientY;
        diff = (startY - currentY) / host.sliderSize * 100;
      } else {
        currentX = event.clientX;
        diff = (currentX - startX) / host.sliderSize * 100;
      }

      newPosition = startPosition + diff;

      _this.setPosition(newPosition);
    }
  };

  this.onDragEnd = function () {
    if (dragging) {
      // 防止在 mouseup 后立即触发 click，导致滑块有几率产生一小段位移
      // 不使用 preventDefault 是因为 mouseup 和 click 没有注册在同一个 DOM 上
      setTimeout(function () {
        _this.setDragging(false);

        if (!isClick) {
          _this.setPosition(newPosition);

          host.emitChange();
        }
      }, 0);
      window.removeEventListener('mousemove', _this.onDragging);
      window.removeEventListener('touchmove', _this.onDragging);
      window.removeEventListener('mouseup', _this.onDragEnd);
      window.removeEventListener('touchend', _this.onDragEnd);
      window.removeEventListener('contextmenu', _this.onDragEnd);
    }
  };

  this.setPosition = function (newPosition) {
    if (!util.isNumber(newPosition)) return;
    newPosition = newPosition < 0 ? 0 : newPosition > 100 ? 100 : newPosition;
    var lengthPerStep = 100 / ((max - min) / step);
    var steps = Math.round(newPosition / lengthPerStep);
    var value = steps * lengthPerStep * (max - min) * 0.01 + min;
    var precision = host.precision();
    value = parse_float_default()(value.toFixed(precision)); // 更新值到样式表现

    _this.update(value);

    if (!dragging && _this.value !== _this.oldValue) {
      _this.oldValue = _this.value;
    }
  }; // 起始触发事件


  this.update(options.value);
  $el.on({
    mousedown: this.onButtonDown,
    touchstart: this.onButtonDown
  });
  return this;
}

/* harmony default export */ var slider_button = (sliderButton);
// CONCATENATED MODULE: ./slider/slider.js

// ------------------------------------------------------------------------------
// name: slider
// author: mudas( mschool.tech )
// created: 2019.09.15 上午 6:49
// ------------------------------------------------------------------------------



function _normalize(options) {
  var result = create_default()(null);

  result.disabled = util.isBoolean(options.disabled) ? options.disabled : false;
  result.vertical = util.isBoolean(options.vertical) ? options.vertical : false;
  result.value = util.isNumber(options.value) ? options.value : 0;
  result.min = util.isNumber(options.min) ? options.min : 0;
  result.max = util.isNumber(options.max) ? options.max : 100;
  result.step = util.isNumber(options.step) ? options.step : 1;
  result.input = util.isFunction(options.input) ? options.input : util.noop;
  result.change = util.isFunction(options.change) ? options.change : util.noop;
  result.value = result.value < result.min ? result.min : result.value;
  result.value = result.value > result.max ? result.max : result.value; // 控制 options.step 至少为 2 段

  if ((result.max - result.min) / result.step < 2) throw new Error('options.step at least 2'); // value 值必须在 min 和 max 区间内

  if (result.value < result.min || result.value > result.max) throw new RangeError('value out of range');
  return result;
}

function Slider(selector, options) {
  var _this = this;

  // 格式化参数
  options = _normalize(options); // 滑块对象

  var $slider = util.isString(selector) ? util(selector) : selector; // 内部参数

  this.value = 0;
  this.oldValue = 0;
  this.sliderSize = 0;
  this.dragging = false;
  var wrapper = null; // const $sliderInner = $slider.find('.weui-slider__inner');

  var $sliderTrack = $slider.find('.weui-slider__track');
  var $sliderHandler = $slider.find('.weui-slider__handler'); // 求 min、max、step 小数的情况下的最高精度

  this.precision = function () {
    var precisions = [options.min, options.max, options.step].map(function (item) {
      var decimal = ('' + item).split('.')[1];
      return decimal ? decimal.length : 0;
    });
    return Math.max.apply(null, precisions);
  }; // 重新设定滑块的尺寸（重置计算参考尺寸）


  this.resetSize = function () {
    _this.sliderSize = $slider.offset()[options.vertical ? 'height' : 'width'];
  }; // 值改变


  this.emitChange = function () {
    util.apply(_this, options.change, _this.value);
  };

  this.updateValue = function (val) {
    _this.setValues(_this.value);

    _this.applyStyle();
  };

  this.valueChanged = function () {
    return _this.value !== _this.oldValue;
  };

  this.setValues = function (val) {
    _this.value = val;
    util.apply(_this, options.input, _this.value);

    if (_this.valueChanged()) {
      _this.oldValue = _this.value;
    }
  }; // 更新滑块位置


  this.barSize = function () {
    return 100 * (_this.value - options.min) / (options.max - options.min) + "%";
  };

  this.barStart = function () {
    return '0%';
  };

  this.barStyle = function () {
    return _this.vertical ? {
      height: _this.barSize(),
      bottom: _this.barStart()
    } : {
      width: _this.barSize(),
      left: _this.barStart()
    };
  };

  this.applyStyle = function () {
    $sliderTrack.css(_this.barStyle());
  };

  this.setPosition = function (percent) {
    var targetValue = _this.min + percent * (_this.max - _this.min) / 100;
    wrapper.setPosition(percent);
  }; // 点击直接定位事件


  $slider.on({
    click: function click(event) {
      if (options.disabled || _this.dragging) return;

      _this.resetSize();

      if (options.vertical) {
        var sliderOffsetBottom = $slider[0].getBoundingClientRect().bottom;

        _this.setPosition((sliderOffsetBottom - event.clientY) / _this.sliderSize * 100);
      } else {
        var sliderOffsetLeft = $slider[0].getBoundingClientRect().left;

        _this.setPosition((event.clientX - sliderOffsetLeft) / _this.sliderSize * 100);
      }

      _this.emitChange();
    }
  }); // 初始化

  wrapper = slider_button.call(this, $sliderHandler, options); // 初始化值

  this.setValues(options.value);
}
/**
 * 滑块插件
 * @param selector
 * @param options
 * @param {boolean} options.disabled 是否禁用
 * @param {boolean} options.vertical 滑块是否为纵向类型（默认横向滑块）
 * @param {number} options.value 默认值
 * @param {number} options.min 最小值
 * @param {number} options.max 最大值（至少为 min 的 2 倍）
 * @param {number} options.step 步数（至少为 2）
 * @param {function} options.input 数据改变时触发（使用鼠标拖曳时，活动过程实时触发）
 * @param {function} options.change 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）
 */


var slider = function slider(selector, options) {
  return new Slider(selector, options);
};

/* harmony default export */ var slider_slider = (slider);
// EXTERNAL MODULE: ./half-screen/half-screen.html
var half_screen = __webpack_require__("6Re7");
var half_screen_default = /*#__PURE__*/__webpack_require__.n(half_screen);

// CONCATENATED MODULE: ./half-screen/index.js
// ------------------------------------------------------------------------------
// name: halfScreen
// author: 喵大斯( mschool.tech )
// created: 2019/9/10 23:11
// ------------------------------------------------------------------------------


 // 允许同时打开多个进行层叠的半屏窗口

var _uid = 0;
var PRE = 'half-screen-dialog';
/**
 * 获取目前指定 uid 的唯一识别编号
 * @param {string} [pre] 前缀
 * @param {number} [uid] 新的编号
 * @private
 */

function _guid(pre, uid) {
  pre = pre || PRE;
  uid = uid || _uid + 1;
  var id = pre + "_" + uid;

  if (util("#" + id).size() > 0) {
    id = _guid(pre, uid + 1);
  }

  return id;
}
/**
 * 半屏自定义内容弹出窗口
 * @param options 配置参数
 * @param {string} options.title 窗口标题
 * @param {string} options.container 指定窗口被添加到目标容器的 selector
 * @param {string} options.className 自定义窗口样式类名
 * @param {string|object} options.content 窗口主体内容的 selector；当类型为 object 时，可指定 {html:'',content:''}
 * @param {function} options.close 窗口关闭时的回调方法
 * @return {halfScreen}
 *
 * @example
 * <script id="gender-content" type="text/html">
 *  <div>
 *    <input type="radio" name="gender" value="male" class="weui-check" id="r1" tips="请选择性别" required>
 *    <input type="radio" name="gender" value="female" class="weui-check" id="r2">
 *  </div>
 * </script>
 *
 * @example
 * // 常规用法（预置模板）
 * const half = weui.halfScreen({
 *    title: '标题',
 *    content: '#gender-content'
 * });
 * half.show();
 *
 * // 自定义 html
 * const half = weui.halfScreen({
 *    content: {
 *      html:`<div>
 *        <h2>标题</h2>
 *        <p>窗口内容</p>
 *      </div>`
 *    }
 * });
 * half.show();
 */


function halfScreen(options) {
  // 配置选项
  var defaults = util.extend({
    id: '',
    // 元素 id
    title: false,
    // 是否设定标题（设置成 ''/false/null 等都会隐藏 title）
    container: 'body',
    className: '',
    content: '',
    // html 内容（插入到 dialog 指定位置进行调度）
    close: util.noop
  }, options); // 若未指定 id 或指定了不存在或者没加入页面的元素 id，则自动生成新的 id

  if (defaults.id.length === 0 || util("#" + defaults.id).size() <= 0) {
    defaults.id = _guid();
  } // --------------------------------------------------------------------------
  //
  // Class constructor
  //
  // --------------------------------------------------------------------------
  // 模板内容


  var $half = util(util.render(half_screen_default.a, defaults));
  var $head = $half.find('.weui-half-screen-dialog__hd');
  var $body = $half.find('.weui-half__bd');
  var $mask = $half.find('.weui-mask');
  var $dialog = $half.find('.weui-half-screen-dialog'); // 设定唯一 id

  $half.attr({
    id: defaults.id
  }); // 设定窗体内容

  var $content = util.zepto(defaults.content);
  $body.append($content.clone().show()); // --------------------------------------------------------------------------
  //
  // Class methods
  //
  // --------------------------------------------------------------------------

  /**
   * 显示方法
   */

  this.show = function () {
    util(defaults.container).append($half); // 更改标题

    if (typeof defaults.title === 'string') {
      $head.show();
      $half.find('.weui-half-screen-dialog__title').html(defaults.title);
    } else {
      $head.hide();
    }

    $mask.addClass('weui-animate-fade-in');
    $dialog.addClass('weui-animate-slide-up');
  };
  /**
   * 隐藏方法
   * @param {function} callback 在关闭动画完成后触发回调，这与 options.close 都会被触发
   */


  this.hide = function (callback) {
    // 避免重复调用
    if (util("#" + defaults.id).size() <= 0) return;
    $mask.addClass('weui-animate-fade-out');
    $dialog.addClass('weui-animate-slide-down').on('animationend webkitAnimationEnd', function () {
      $half.remove();
      util.apply($half, defaults.close);
      util.apply($half, callback);
    });
  }; // --------------------------------------------------------------------------
  //
  // Event handlers
  //
  // --------------------------------------------------------------------------


  $mask.on({
    click: this.hide,
    touchend: this.hide
  });
  return this;
}

/* harmony default export */ var half_screen_0 = (halfScreen);
// CONCATENATED MODULE: ./weui.js
/* concated harmony reexport dialog */__webpack_require__.d(__webpack_exports__, "dialog", function() { return dialog_dialog_0; });
/* concated harmony reexport alert */__webpack_require__.d(__webpack_exports__, "alert", function() { return alert_alert_0; });
/* concated harmony reexport confirm */__webpack_require__.d(__webpack_exports__, "confirm", function() { return confirm_confirm_0; });
/* concated harmony reexport toast */__webpack_require__.d(__webpack_exports__, "toast", function() { return toast_toast_0; });
/* concated harmony reexport loading */__webpack_require__.d(__webpack_exports__, "loading", function() { return loading_loading_0; });
/* concated harmony reexport actionSheet */__webpack_require__.d(__webpack_exports__, "actionSheet", function() { return action_sheet_action_sheet; });
/* concated harmony reexport topTips */__webpack_require__.d(__webpack_exports__, "topTips", function() { return top_tips_top_tips; });
/* concated harmony reexport searchBar */__webpack_require__.d(__webpack_exports__, "searchBar", function() { return search_bar; });
/* concated harmony reexport tab */__webpack_require__.d(__webpack_exports__, "tab", function() { return tab_tab; });
/* concated harmony reexport form */__webpack_require__.d(__webpack_exports__, "form", function() { return form_namespaceObject; });
/* concated harmony reexport uploader */__webpack_require__.d(__webpack_exports__, "uploader", function() { return uploader_uploader; });
/* concated harmony reexport picker */__webpack_require__.d(__webpack_exports__, "picker", function() { return picker_picker; });
/* concated harmony reexport datePicker */__webpack_require__.d(__webpack_exports__, "datePicker", function() { return datePicker; });
/* concated harmony reexport gallery */__webpack_require__.d(__webpack_exports__, "gallery", function() { return gallery_gallery_0; });
/* concated harmony reexport slider */__webpack_require__.d(__webpack_exports__, "slider", function() { return slider_slider; });
/* concated harmony reexport halfScreen */__webpack_require__.d(__webpack_exports__, "halfScreen", function() { return half_screen_0; });
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
  actionSheet: action_sheet_action_sheet,
  topTips: top_tips_top_tips,
  searchBar: search_bar,
  tab: tab_tab,
  form: form_namespaceObject,
  uploader: uploader_uploader,
  picker: picker_picker,
  datePicker: datePicker,
  gallery: gallery_gallery_0,
  slider: slider_slider,
  halfScreen: half_screen_0
};
/* harmony default export */ var weui = __webpack_exports__["default"] = (_default);


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

module.exports = "<li class=\"weui-uploader__file weui-uploader__file_status\" data-id=\"<%= id %>\">\r\n  <div class=\"weui-uploader__file-content\">\r\n    <i class=\"weui-loading\" style=\"width: 30px;height: 30px;\"></i>\r\n  </div>\r\n</li>\r\n";

/***/ }),

/***/ "yhnj":
/***/ (function(module, exports) {

module.exports = "<div class=\"weui-gallery <%= className %>\">\r\n  <span class=\"weui-gallery__img\" style=\"background-image: url(<%= url %>);\"></span>\r\n  <div class=\"weui-gallery__opr\">\r\n    <a href=\"javascript:\" class=\"weui-gallery__del\">\r\n      <i class=\"weui-icon-delete weui-icon_gallery-delete\"></i>\r\n    </a>\r\n  </div>\r\n</div>\r\n";

/***/ })

/******/ });
});