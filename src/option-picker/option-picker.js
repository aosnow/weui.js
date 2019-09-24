// ------------------------------------------------------------------------------
// name: option-picker
// author: mudas( mschool.tech )
// created: 2019/9/19 22:37
// ------------------------------------------------------------------------------

import $ from '../util/util';
import TplPicker from './option-picker.html';
import TplOption from './option.html';

// 单选或多选组拾取器
// 单选组支持选项后自动关闭拾取器

// weui-cells_radio

class OptionPicker {

  static DefaultOptions = {
    id: '',
    type: 'radio', // radio: 单选，checkbox: 多选
    className: '',
    options: [],
    title: '请选择',
    container: 'body',
    enter: '确定',
    cancel: '取消',
    close: $.noop,
    complete: $.noop
  };

  // --------------------------------------------------------------------------
  //
  // Class constructor
  //
  // --------------------------------------------------------------------------

  constructor(options) {
    this.options = $.extend(OptionPicker.DefaultOptions, options);
    this.init(TplPicker);
  }

  // --------------------------------------------------------------------------
  //
  // Class properties
  //
  // --------------------------------------------------------------------------

  /**
   * 当前运行的模式是否为单例
   * <p></p>
   * @return {string}
   */
  get sington() {
    return this.options.id && this.options.id.length > 0;
  }

  _destroyed = false;

  /**
   * 是否已经注销
   * @return {boolean}
   */
  get destroyed() {
    return this._destroyed;
  }

  _hidden = false;

  /**
   * 是否已经关闭
   * @return {boolean}
   */
  get hidden() {
    return this._hidden;
  }

  // --------------------------------------------------------------------------
  //
  // Class methods
  //
  // --------------------------------------------------------------------------

  init(template) {
    // 运行模式（是否单例）
    if (this.sington) {
      // 检测是否具有冲突的实例类名
      const tester = $(`#${this.options.id}`);
      if (tester.is('.half-screen-dialog.option-picker')) {
        this.$body = tester;
        this.$body.show();
      }
    }

    if (!this.$body) {
      this.$body = $($.render(template, this.options));
      this.sington && this.$body.attr({ id: this.options.id });
    }

    // 解析操作元素
    this.$mask = this.$body.find('.weui-mask');
    this.$dialog = this.$body.find('.weui-half-screen-dialog');
    this.$optionGroup = this.$body.find('.weui-cells_radio');
    this.$btnCancel = this.$body.find('.btn-cancel');
    this.$btnEnter = this.$body.find('.btn-enter');
    this._setup();
  }

  /**
   * 安装组件（如处理回调等）
   * @private
   */
  _setup() {
    // 绑定事件
    this.$btnEnter.on('click tap', () => this.enterHandler());
    this.$btnCancel.on('click tap', () => (this.sington ? this.hide() : this.cancelHandler()));
    this.$mask.on('click tap', () => (this.sington ? this.hide() : this.cancelHandler()));

    // 安装选项
    const { type, options } = this.options;
    const group = 'group-' + (Math.random() * 99999 * 100000 >> 0);
    const nomalizedType = type === 'radio' ? 'radio' : 'checkbox';

    this.$optionGroup.empty();

    options.forEach(item => {
      if (item.value === undefined) {
        throw new Error(`'${item.label}' lack of necessary parameter: 'value'`);
      }

      item.type = nomalizedType;
      item.group = group;
      item.checked = !!item.checked;

      const $option = $($.render(TplOption, item));
      $option.data('item-data', item.value);
      this.$optionGroup.append($option);
    });
  }

  /**
   * 卸载组件（如处理回调等）
   * @private
   */
  _unsetup() {
    this.$btnEnter.off('click tap');
    this.$btnCancel.off('click tap');
    this.$mask.on('click tap');
  }

  /**
   * 显示窗体
   */
  show() {
    const { container, title } = this.options;

    // 窗体添加到页面
    $(container).append(this.$body);

    // 更改标题
    this.$body.find('.weui-half-screen-dialog__title').html(title);

    // 打开动画
    this.$mask.removeClass('weui-animate-fade-out')
        .addClass('weui-animate-fade-in');
    this.$dialog.removeClass('weui-animate-slide-down')
        .addClass('weui-animate-slide-up')
        .off('animationend webkitAnimationEnd');
  }

  /**
   * 隐藏窗体
   * @param {function} [callback] 额外的回调方法
   */
  hide(callback) {
    // 避免重复调用
    if (this._hidden) return;
    this._hidden = true;

    this.$mask.removeClass('weui-animate-fade-in').addClass('weui-animate-fade-out');
    this.$dialog.removeClass('weui-animate-slide-up').addClass('weui-animate-slide-down')
        .on('animationend webkitAnimationEnd', () => {
          this.$body.hide();
          $.apply(this.$body, this.options.close);
          $.apply(this.$body, callback);
        });
  }

  // --------------------------------------------------------------------------
  //
  // Event handlers
  //
  // --------------------------------------------------------------------------

  /**
   * 注销组件
   * @private
   */
  _destroyHandler() {
    if (this._destroyed) return;
    this._destroyed = true;

    this.$body.remove();
    this._unsetup();

    this.$body = null;
    this.$mask = null;
    this.$dialog = null;
    this.$optionGroup = null;
    this.$btnCancel = null;
    this.$btnEnter = null;
    this.options = null;
  }

  enterHandler() {
    const $checked = this.$optionGroup.find('input:checked');
    const checked = [];

    $checked.each((index, el) => {
      const $parent = $(el).closest('.weui-check__label');
      checked.push($parent.data('item-data'));
    });

    // 未选择任何选项不触发 callback
    checked.length > 0 && $.apply(this.$optionGroup, this.options.complete, checked);
    this.cancelHandler();
  }

  cancelHandler() {
    this.hide(() => this._destroyHandler());
  }

}

export default OptionPicker;
