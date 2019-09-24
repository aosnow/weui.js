// ------------------------------------------------------------------------------
// name: SlideDialog
// author: mudas( mschool.tech )
// created: 2019/9/23 21:11
// ------------------------------------------------------------------------------

import $ from '@/util/util';

class SlideDialog {

  static DefaultOptions = {
    id: '',
    container: 'body',
    className: '',
    modal: false,
    close: $.noop,

    // html 结构选择器，及动画配置
    wrapper: { selector: '.wrapper' },
    dialog: { selector: '.weui-dialog', show: 'weui-animate-slide-up', hide: 'weui-animate-slide-down' },
    mask: { selector: '.weui-mask', show: 'weui-animate-fade-in', hide: 'weui-animate-fade-out' },
    freeze: { selector: '.weui-freeze' }
  };

  // --------------------------------------------------------------------------
  //
  // Class constructor
  //
  // --------------------------------------------------------------------------

  constructor(options, template = '') {
    // deep merge
    this.options = $.extend(true, SlideDialog.DefaultOptions, options);
    this.init(template);
  }

  // --------------------------------------------------------------------------
  //
  // Class properties
  //
  // --------------------------------------------------------------------------

  $wrapper; // 主体根元素
  $dialog; // 对话框主体元素（一般与 $mask 平级）
  $mask; // 遮罩层

  // ----------------------------------------
  // sington
  // ----------------------------------------

  /**
   * 当前运行的模式是否为单例
   * <p>设置了指定 id 选项，则将启动单例模式</p>
   * @return {string}
   */
  get sington() {
    return this.options.id && this.options.id.length > 0;
  }

  // ----------------------------------------
  // destroyed
  // ----------------------------------------

  _destroyed = false;

  /**
   * 是否已经注销
   * @return {boolean}
   */
  get destroyed() {
    return this._destroyed;
  }

  // ----------------------------------------
  // hidden
  // ----------------------------------------

  _hidden = false;

  /**
   * 是否已经关闭
   * @return {boolean}
   */
  get hidden() {
    return this._hidden;
  }

  // ----------------------------------------
  // freezed
  // ----------------------------------------

  _freezed = false;

  /**
   * 是否已经冻结（冻结后无法交互）
   * @return {boolean}
   */
  get freezed() {
    return this._freezed;
  }

  // --------------------------------------------------------------------------
  //
  // Class methods
  //
  // --------------------------------------------------------------------------

  init(template) {
    const { wrapper, dialog, mask, freeze } = this.options;

    // 运行模式（是否单例）
    if (this.sington) {
      // 检测是否具有冲突的实例类名
      const tester = $(`#${this.options.id}`);
      if (tester.is(wrapper.selector)) {
        this.$wrapper = tester;
        this.$wrapper.show();
      }
    }

    if (!this.$wrapper) {
      this.$wrapper = $($.render(template, this.options));
      this.sington && this.$wrapper.attr({ id: this.options.id });
    }

    // 解析操作元素
    this.$mask = this.$wrapper.find(mask.selector);
    this.$freeze = this.$wrapper.find(freeze.selector);
    this.$dialog = this.$wrapper.find(dialog.selector);
    this.$freeze.hide();
    this.setup();
  }

  /**
   * 注销组件，释放资源
   */
  destroy() {
    if (this._destroyed) return;
    this._destroyed = true;

    this.$wrapper.remove();
    this.unsetup();

    this.$wrapper = null;
    this.$dialog = null;
    this.$mask = null;
    this.$freeze = null;
    this.options = null;
  }

  /**
   * 安装组件（如处理回调等）
   * <p>子类可继承实现自定义附加业务逻辑</p>
   */
  setup() {
    !this.options.modal && this.$mask.on('click tap', () => {
      this.close();
    });
  }

  /**
   * 卸载组件（如处理回调等）
   * <p>子类可继承实现自定义附加业务逻辑</p>
   */
  unsetup() {
    !this.options.modal && this.$mask.on('click tap');
  }

  /**
   * 显示窗体
   */
  open() {
    const { container, dialog, mask } = this.options;

    // 窗体添加到页面
    $(container).append(this.$wrapper);

    // 打开动画
    this.$mask.removeClass(mask.hide).addClass(mask.show);
    this.$dialog.removeClass(dialog.hide).addClass(dialog.show).off('animationend webkitAnimationEnd');
  }

  /**
   * 隐藏窗体
   * @param {function} [callback] 额外的回调方法
   */
  close(callback) {
    // 避免重复调用
    if (this._hidden) return;
    this._hidden = true;

    const { dialog, mask } = this.options;

    this.$mask.removeClass(mask.show).addClass(mask.hide);
    this.$dialog.removeClass(dialog.show).addClass(dialog.hide)
        .on('animationend webkitAnimationEnd', () => {
          this.$wrapper.hide();
          $.apply(this.$wrapper, this.options.close);
          $.apply(this.$wrapper, callback);

          // 在所有事务完成后，进行释放检测
          !this.sington && this.destroy(); // 非单例模式则在关闭时释放销毁组件
        });
  }

  /**
   * 是否冻结窗体，禁止交互（如避免重复点击触发自定义 callback）
   * @param {boolean} value
   */
  freeze(value = true) {
    this._freezed = value;
    const method = this._freezed ? 'show' : 'hide';
    this.$freeze[method]();
  }

}

export default SlideDialog;
