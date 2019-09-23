// ------------------------------------------------------------------------------
// name: InfiniteScroll
// author: mudas( mschool.tech )
// created: 2019.09.23 上午 1:12
// ------------------------------------------------------------------------------

import $ from '../util/util';

class InfiniteScroll {

  static DefaultOptions = {
    target: 'body', // 需要开启无限滚动的容器
    stater: '', // 用于显示当前状态的容器（一般处于 target 的底部）
    loading: '...loading...', // 加载状态提示文本
    load: $.noop, // 条件满足时的加载方法
    immediate: true, // 是否在初始化时立即触发首次加载
    threshold: 1.0 // 触发加载的距离阈值（0~1），默认 1.0
  };

  // --------------------------------------------------------------------------
  //
  // Class constructor
  //
  // --------------------------------------------------------------------------

  constructor(options) {
    this.options = $.extend(InfiniteScroll.DefaultOptions, options);
    this.init();
  }

  // --------------------------------------------------------------------------
  //
  // Class properties
  //
  // --------------------------------------------------------------------------

  _loading = false;

  /**
   * 当前工作状态是否正在加载
   * @return {boolean}
   */
  get loading() {
    return this._loading;
  }

  _destroyed = false;

  /**
   * 是否已经注销
   * @return {boolean}
   */
  get destroyed() {
    return this._destroyed;
  }

  // --------------------------------------------------------------------------
  //
  // Class methods
  //
  // --------------------------------------------------------------------------

  init() {
    const { target, immediate, stater, threshold } = this.options;

    // 根级容器
    this.$body = $(target);

    // 解析操作元素
    this.$stater = this.$body.find(stater);

    // 初始化交叉观察器
    this.observer = new IntersectionObserver(
      entries => this._entriesHandler(entries),
      {
        root: this.$body.get(0),
        threshold: threshold
      }
    );
    this.observer.observe(this.$stater.get(0));

    // 首次加载
    immediate && this._load();
  }

  /**
   * 注销组件，释放资源
   */
  destroy() {
    if (this._destroyed) return;
    this._destroyed = true;

    this.observer.unobserve(this.$stater.get(0));// 停止观察
    this.observer.disconnect();// 关闭观察器
    this.observer = null;

    this.$body = null;
    this.$stater = null;
    this.options = null;
  }

  /**
   * 设置当前加载状态
   * @param {boolean} value
   * @private
   */
  _setState(value) {
    this._loading = value;

    // 若 loading 被设置成 ''、false、null 等将不会更改状态提示文本
    if (this.options.loading) {
      this.$stater.html(this._loading ? this.options.loading : '');
    }

    // 开启和关闭观察器（在加载过程中临时关闭观察器，避免重复派发）
    const method = this._loading ? 'unobserve' : 'observe';
    this.observer[method](this.$stater.get(0));
  }

  _load() {
    const { load } = this.options;

    this._setState(true);

    const result = load.call(this.$body);

    if ($.isPromise(result)) {
      result.finally(() => {
        this._setState(false);
      });
    }
    else if ($.isFunction(result)) {
      this._setState(false);
    }
    else {
      throw new Error('the parameter must be a function');
    }
  }

  // --------------------------------------------------------------------------
  //
  // Event handlers
  //
  // --------------------------------------------------------------------------

  _entriesHandler(entries) {
    const { threshold } = this.options;
    const { intersectionRatio } = entries[0];

    if (intersectionRatio >= threshold) {
      this._load();
    }
  }

}

export default InfiniteScroll;
