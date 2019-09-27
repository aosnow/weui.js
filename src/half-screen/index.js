// ------------------------------------------------------------------------------
// name: halfScreen
// author: 喵大斯( mschool.tech )
// created: 2019/9/10 23:11
// ------------------------------------------------------------------------------

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

/**
 * 半屏自定义内容弹出窗口
 * @param options 配置参数
 * @param {string} [options.title] 窗口标题
 * @param {string} [options.container] 指定窗口被添加到目标容器的 selector
 * @param {string} [options.className] 自定义窗口样式类名
 * @param {string|object} [options.content] 窗口主体内容的 selector，或者 html 内容
 * @param {function} [options.close] 窗口关闭时的回调方法
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
 *    content: `<div>
 *      <h2>标题</h2>
 *      <p>窗口内容</p>
 *    </div>`
 * });
 * half.show();
 */
function halfScreen(options) {

  // 配置选项
  const defaults = $.extend({
    id: '',
    title: '',
    container: 'body',
    className: '',
    content: '', // html 内容（插入到 dialog 指定位置进行调度）
    close: $.noop,
    buttons: [{
      label: '确定',
      type: 'primary',
      onClick: $.noop
    }]
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
  const $close = $half.find('.weui-icon-btn_close');
  const $body = $half.find('.weui-half__bd');
  const $mask = $half.find('.weui-mask');
  const $dialog = $half.find('.weui-half-screen-dialog');

  // 设定唯一 id
  $half.attr({ id: defaults.id });

  // 设定窗体内容
  const $content = $(defaults.content);
  $body.append($content.clone().show());

  // --------------------------------------------------------------------------
  //
  // Class methods
  //
  // --------------------------------------------------------------------------

  /**
   * 显示方法
   */
  this.show = () => {
    $(defaults.container).append($half);

    // 更改标题
    $half.find('.weui-half-screen-dialog__title').html(defaults.title);

    // 打开动画
    $mask.addClass('weui-animate-fade-in');
    $dialog.addClass('weui-animate-slide-up');
  };

  /**
   * 隐藏方法
   * @param {function} callback 在关闭动画完成后触发回调，这与 options.close 都会被触发
   */
  this.hide = (callback) => {
    // 避免重复调用
    if ($(`#${defaults.id}`).size() <= 0) return;

    $mask.removeClass('weui-animate-fade-in').addClass('weui-animate-fade-out');
    $dialog.removeClass('weui-animate-slide-up').addClass('weui-animate-slide-down')
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

  $close.on('click', this.hide);

  $half.on('click', '.weui-btn', (evt) => {
    const element = evt.currentTarget;
    const index = $(element).index();
    if (defaults.buttons[index].onClick) {
      const returnValue = defaults.buttons[index].onClick.call(this, evt);
      if (returnValue !== false) this.hide();
    }
    else {
      this.hide();
    }
  }).on('touchmove', (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
  });

  return this;
}

export default halfScreen;
