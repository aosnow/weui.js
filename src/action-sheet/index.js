// ------------------------------------------------------------------------------
// name: index
// author: mudas( mschool.tech )
// created: 2019/9/23 20:33
// ------------------------------------------------------------------------------

import ActionSheet from './action-sheet';

/**
 * 弹出式菜单
 * @param options 配置项
 * @param {array} options.menus 上层的菜单选项
 * @param {string} options.menus[].label 选项的文字
 * @param {function} options.menus[].handler 选项点击时的回调
 *
 * @param {array} options.actions 下层的操作选项
 * @param {string} options.actions[].label 选项的文字
 * @param {function} options.actions[].handler 选项点击时的回调
 *
 * @param {string} options.title actionSheet的title，如果isAndroid=true，则不会显示
 * @param {string} [options.container] 实例化时被添加到的目标元素的选择器描述（默认：'body'）
 * @param {string} [options.className] 自定义类名
 * @param {boolean} [options.modal] 是否模态（true-点击背景将无法关闭窗体）
 * @param {function} [options.close] actionSheet关闭后的回调
 * @return {ActionSheet}
 *
 * @example
 * ### 常规用法
 * ```javascript
 * const asheet = weui.actionSheet({
 *   title: '请选择需要的操作',
 *   menus: [
 *     {
 *       label: '确定',
 *       handler: function() {
 *         console.log('确定');
 *       }
 *     },
 *     {
 *       label: '取消',
 *       handler: function() {
 *         console.log('取消');
 *       }
 *     }
 *   ],
 *   actions: [
 *     {
 *       label: '取消',
 *       handler: function() {
 *         console.log('取消');
 *       }
 *     }
 *   ]
 * });
 * asheet.open();
 * ```
 *
 * ### 异步 Promise 用法
 * ```javascript
 * const asheet = weui.actionSheet({
 *   title: '',
 *   menus: [
 *     {
 *       label: '<i class="weui-icon-success weui-icon_msg">这是个图标</i>',
 *       handler: function() {
 *         asheet.freeze(); // 冻结操作，异步场景下可阻止重复触发动作
 *         return new Promise(resolve => {
 *           setTimeout(() => {
 *             console.log('客服电话');
 *             asheet.freeze(false);
 *             resolve();
 *           }, 2000);
 *         });
 *       }
 *     }
 *   ],
 *   actions: [
 *     {
 *       label: '取消',
 *       handler: function() {
 *         console.log('取消');
 *       }
 *     }
 *   ]
 * });
 * asheet.open();
 * ```
 */
function actionSheet(options) {
  return new ActionSheet(options);
}

export default actionSheet;
export { ActionSheet };
