// ------------------------------------------------------------------------------
// name: index
// author: mudas( mschool.tech )
// created: 2019/9/25 15:32
// ------------------------------------------------------------------------------

import TopTips from './top-tips';

/**
 * 顶部 tips 消息弹出层
 * @param options 配置项
 * @param {string} [options.type] 主题（可选：'success'/'warn'/'error'，默认：'error'）
 * @param {string} options.content tips 显示内容
 * @param {number} [options.duration] 自动关闭等待时间（默认：2500）
 * @param {boolean} [options.showClose] 是否显示关闭按钮（默认：false）
 *
 * @param {string} [options.container] 实例化时被添加到的目标元素的选择器描述（默认：'body'）
 * @param {string} [options.className] 自定义类名
 * @param {function} [options.close] actionSheet关闭后的回调
 * @return {TopTips}
 *
 * @example
 * ### 常规用法
 * ```javascript
 * weui.topTips('请填写正确的字段'); // 默认 2500ms 后自动关闭
 * weui.topTips('请填写正确的字段', {
 *   duration: 2500,
 *   type: 'success',
 *   close: function() {
 *     console.log('close');
 *   }
 * });
 * ```
 */
function topTips(...options) {
  return new TopTips(...options);
}

export default topTips;
export { TopTips };
