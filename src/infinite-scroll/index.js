// ------------------------------------------------------------------------------
// name: index
// author: mudas( mschool.tech )
// created: 2019.09.23 上午 1:11
// ------------------------------------------------------------------------------

import InfiniteScroll from './InfiniteScroll';

/**
 * 无限滚动加载容器
 * @param options
 * @param {string} options.target 需要开启无限滚动的容器的 selector
 * @param {string} options.stater 用于显示当前状态的容器（一般处于 target 的底部）
 * @param {string} options.loading 加载状态提示文本（默认：'...loading...'），支持 html 可实现插入动态图标等
 * 若 loading 被设置成 ''、false、null 等将不会更改状态提示文本
 * @param {function} options.load 条件满足时的加载方法（若需要异步加载请将加载主体包装成 Promise 返回）
 * @param {boolean} options.immediate 是否在初始化时立即触发首次加载（默认：true）
 * @param {number} options.threshold 触发加载的距离阈值（0~1）（默认：1.0）
 * @return {InfiniteScroll}
 *
 * @example
 * weui.infiniteScroll({
 *   target: '.weui-infinite-test',
 *   stater: '.weui-infinite__state', // stater 必须被包含在 target 内部
 *   load() {
 *     console.warn('load start...');
 *     return new Promise(resolve => {
 *       setTimeout(() => {
 *         console.warn('load completed...');
 *         // ... 将加载主体内容插入到 target 指定容器底部
 *         resolve();
 *       }, 3000);
 *     });
 *   }
 * });
 */
function infiniteScroll(options) {
  return new InfiniteScroll(options);
}

export default infiniteScroll;
export { InfiniteScroll };
