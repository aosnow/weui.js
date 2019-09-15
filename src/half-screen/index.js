// ------------------------------------------------------------------------------
// name: halfScreen
// author: 喵大斯( mschool.tech )
// created: 2019/9/10 23:11
// ------------------------------------------------------------------------------

import pickerTpl from '@/picker/picker.html';
import $ from '../util/util';
import halfTpl from './half-screen.html';

// 允许同时打开多个进行层叠的半屏窗口
let _uid = 0;
const PRE = 'half-screen-dialog';

/**
 * 获取目前指定 uid 的唯一识别编号
 * @param {string} [pre] 前缀
 * @param {number} [uid] 新的编号
 * @private
 */
function _guid(pre, uid) {
  pre = pre || PRE;
  uid = uid || (_uid + 1);

  let id = `${pre}_${uid}`;

  if ($(`#${id}`).size() > 0) {
    id = _guid(pre, uid + 1);
  }

  return id;
}

// TODO: 完善半屏对话框组件
function halfScreen(options) {

  // 配置选项
  const defaults = $.extend({
    id: '', // 元素 id
    title: false, // 是否设定标题（设置成 ''/false/null 等都会隐藏 title）
    container: 'body',
    className: '',
    content: '', // html 内容（插入到 dialog 指定位置进行调度）
    close: $.noop
  }, options);

  // 若未指定 id 或指定了不存在或者没加入页面的元素 id，则自动生成新的 id
  if (defaults.id.length === 0 || $(`#${defaults.id}`).size() <= 0) {
    defaults.id = _guid();
  }

  // --------------------------------------------------------------------------
  //
  // Class constructor
  //
  // --------------------------------------------------------------------------

  // 模板内容
  const $half = $($.render(halfTpl, defaults));
  const $head = $half.find('.weui-half-screen-dialog__hd');
  const $body = $half.find('.weui-half__bd');
  const $mask = $half.find('.weui-mask');
  const $dialog = $half.find('.weui-half-screen-dialog');

  // 设定唯一 id
  $half.attr({ id: defaults.id });

  // 设定窗体内容
  const $content = $.zepto(defaults.content);
  $body.append($content.clone().show());

  // --------------------------------------------------------------------------
  //
  // Class methods
  //
  // --------------------------------------------------------------------------

  // 显示与隐藏的方法
  this.show = () => {
    $(defaults.container).append($half);

    // 更改标题
    if (typeof defaults.title === 'string') {
      $head.show();
      $half.find('.weui-half-screen-dialog__title').html(defaults.title);
    }
    else {
      $head.hide();
    }

    $mask.addClass('weui-animate-fade-in');
    $dialog.addClass('weui-animate-slide-up');
  };

  this.hide = (callback) => {
    // 避免重复调用
    if ($(`#${defaults.id}`).size() <= 0) return;

    $mask.addClass('weui-animate-fade-out');
    $dialog.addClass('weui-animate-slide-down')
           .on('animationend webkitAnimationEnd', function() {
             $half.remove();
             $.apply($half, defaults.close);
             $.apply($half, callback);
           });
  };

  // --------------------------------------------------------------------------
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

export default halfScreen;
