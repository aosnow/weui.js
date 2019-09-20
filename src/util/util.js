import $ from 'zepto';
import Compiler from 'template_js';
import DataModule from './data.mod';
import DetectModule from './detect.mod';
import TouchModule from './detect.mod';

// 模板编译参数
Compiler.config({
  sTag: '<%',
  eTag: '%>',
  compress: true,
  escape: false
});

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

// 模块扩展
DataModule($); // 数据模块
DetectModule($); // 系统环境检测模块
TouchModule($); // 触摸设备事件支持模块

export default $;
