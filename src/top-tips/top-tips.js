// ------------------------------------------------------------------------------
// name: top-tips
// author: mudas( mschool.tech )
// created: 2019/9/25 15:32
// ------------------------------------------------------------------------------

import $ from '../util/util';
import SlideDialog from '@/common/SlideDialog';
import TplTips from './top-tips.html';

class TopTips extends SlideDialog {

  static Types = {
    success: 'success',
    warn: 'warn',
    error: 'error'
  };

  static DefaultOptions = {
    type: 'error', // success/warn/error
    content: '',
    duration: 2500,
    showClose: false,

    wrapper: { selector: '.weui-toptips__wrapper' },
    dialog: { selector: '.weui-toptips__wrapper', show: 'weui-animate-drop-down', hide: 'weui-animate-drop-up' }
  };

  // --------------------------------------------------------------------------
  //
  // Class constructor
  //
  // --------------------------------------------------------------------------

  constructor(...options) {
    const args = options;
    let finalOptions = args.pop();

    if (typeof finalOptions !== 'object') {
      args.push(finalOptions);
      finalOptions = Object.create(null);
    }

    for (let i = 0; i < args.length; i++) {
      let name = null;
      if (typeof args[i] === 'number') {
        name = 'duration';
      }
      else if (typeof args[i] === 'string') {
        name = 'content';
      }
      else if (typeof args[i] === 'function') {
        name = 'close';
      }
      else {
        name = null;
      }

      name && (finalOptions[name] = args[i]);
    }

    super($.extend(true, {}, TopTips.DefaultOptions, finalOptions), TplTips);
    super.open();

    // 处理计时器
    const { duration } = this.options;
    if (typeof duration === 'number' && duration > 0) {
      this._timeid = setTimeout(() => this.close(), duration);
    }
  }

  // --------------------------------------------------------------------------
  //
  // Class properties
  //
  // --------------------------------------------------------------------------

  _timeid = null;

  // --------------------------------------------------------------------------
  //
  // Class methods
  //
  // --------------------------------------------------------------------------

  /**
   * 安装组件（如处理回调等）
   * @private
   */
  setup() {
    const { type, showClose } = this.options;
    this.$wrapper.removeClass(Object.values(TopTips.Types).join(' '));
    this.$wrapper.addClass(type);

    this.$iconWrapper = this.$wrapper.find('.icon-wrapper');

    // 是否需要关闭按钮
    if (!showClose) {
      this.$iconWrapper.remove();
    }
    else {
      this.$iconWrapper.on('click tap', () => this.close());
    }
  }

  /**
   * 卸载组件（如处理回调等）
   * @private
   */
  unsetup() {
    const { showClose } = this.options;

    if (showClose) {
      this.$iconWrapper.off('click tap');
    }

    this.$iconWrapper = null;
  }

}

export default TopTips;
