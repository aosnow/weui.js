import $ from 'zepto';
import Compiler from 'template_js';

// 模板编译参数
Compiler.config({
  sTag: '<%',
  eTag: '%>',
  compress: true,
  escape: false
});

/* 判断系统 */
// function _detect(ua) {
//   if (!this.os) {
//     const os = this.os = {};
//     const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
//     if (android) {
//       os.android = true;
//       os.version = android[2];
//     }
//   }
// }
//
// _detect.call($, navigator.userAgent);

// 扩展 $
$.extend($, {
  /**
   * template engine(template.js)
   * @param {String} tpl
   * @param {Object} data
   * @returns {String}
   */
  render(tpl, data) {
    return Compiler(tpl)(data);
  }
});

/**
 * 将指定选择器包装成 zepto 对象
 * @param {string|HTMLElement} selector
 */
$.zepto = function(selector) {
  if (typeof selector === 'string') {
    return $(selector);
  }
  else if (selector instanceof HTMLElement) {
    return $(selector);
  }
  else {
    return selector;
  }
};

$.isNumber = $.isNumeric;

$.isString = function(value) {
  return typeof value === 'string';
};

$.isBoolean = function(value) {
  return typeof value === 'boolean';
};

$.isObject = function(value) {
  return value !== null && value !== undefined && typeof value === 'object';
};

$.apply = function(thisArg, fn, ...args) {
  if ($.isFunction(fn)) fn.apply(thisArg, args);
};

export default $;
