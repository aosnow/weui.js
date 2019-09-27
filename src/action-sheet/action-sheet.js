// ------------------------------------------------------------------------------
// name: action-sheet
// author: mudas( mschool.tech )
// created: 2019/9/23 20:34
// ------------------------------------------------------------------------------

import $ from '../util/util';
import SlideDialog from '@/common/SlideDialog';
import TplSheet from './action-sheet.html';

class ActionSheet extends SlideDialog {

  static DefaultOptions = {
    title: '',
    menus: [],
    actions: [],
    isAndroid: !!$.os.android, // undefined 值合并 options 将被移除
    wrapper: { selector: '.weui-actionsheet__wrapper' },
    dialog: { selector: '.weui-actionsheet' }
  };

  // --------------------------------------------------------------------------
  //
  // Class constructor
  //
  // --------------------------------------------------------------------------

  constructor(options) {
    super($.extend(true, {}, ActionSheet.DefaultOptions, options), TplSheet);
  }

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
    super.setup();

    this.$menus = this.$wrapper.find('.weui-actionsheet__menu');
    this.$actions = this.$wrapper.find('.weui-actionsheet__action');

    this.$menus.on('click tap', '.weui-actionsheet__cell', event => {
      const element = event.currentTarget;
      const index = $(element).index();
      $.assigner($.apply(element, this.options.menus[index].handler, event))
       .finally(() => this.close());
    });

    this.$actions.on('click tap', '.weui-actionsheet__cell', event => {
      const element = event.currentTarget;
      const index = $(element).index();
      $.assigner($.apply(element, this.options.actions[index].handler, event))
       .finally(() => this.close());
    });
  }

  /**
   * 卸载组件（如处理回调等）
   * @private
   */
  unsetup() {
    super.unsetup();

    this.$menus.off('click tap', '.weui-actionsheet__cell');
    this.$actions.off('click tap', '.weui-actionsheet__cell');
    this.$menus = null;
    this.$actions = null;
  }

}

export default ActionSheet;
