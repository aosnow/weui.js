// ------------------------------------------------------------------------------
// name: slider
// author: mudas( mschool.tech )
// created: 2019.09.15 上午 6:49
// ------------------------------------------------------------------------------

import $ from '../util/util';
import sliderButton from './slider-button';

function _normalize(options) {
  const result = Object.create(null);
  result.disabled = $.isBoolean(options.disabled) ? options.disabled : false;
  result.vertical = $.isBoolean(options.vertical) ? options.vertical : false;
  result.value = $.isNumber(options.value) ? options.value : 0;
  result.min = $.isNumber(options.min) ? options.min : 0;
  result.max = $.isNumber(options.max) ? options.max : 100;
  result.step = $.isNumber(options.step) ? options.step : 1;
  result.input = $.isFunction(options.input) ? options.input : $.noop;
  result.change = $.isFunction(options.change) ? options.change : $.noop;

  result.value = result.value < result.min ? result.min : result.value;
  result.value = result.value > result.max ? result.max : result.value;

  // 控制 options.step 至少为 2 段
  if ((result.max - result.min) / result.step < 2) throw new Error('options.step at least 2');

  // value 值必须在 min 和 max 区间内
  if (result.value < result.min || result.value > result.max) throw new RangeError('value out of range');

  return result;
}

function Slider(selector, options) {
  // 格式化参数
  options = _normalize(options);

  // 滑块对象
  const $slider = $.isString(selector) ? $(selector) : selector;

  // 内部参数
  this.value = 0;
  this.oldValue = 0;
  this.sliderSize = 0;
  this.dragging = false;
  let wrapper = null;

  // const $sliderInner = $slider.find('.weui-slider__inner');
  const $sliderTrack = $slider.find('.weui-slider__track');
  const $sliderHandler = $slider.find('.weui-slider__handler');

  // 求 min、max、step 小数的情况下的最高精度
  this.precision = () => {
    let precisions = [options.min, options.max, options.step].map(item => {
      let decimal = ('' + item).split('.')[1];
      return decimal ? decimal.length : 0;
    });
    return Math.max.apply(null, precisions);
  };

  // 重新设定滑块的尺寸（重置计算参考尺寸）
  this.resetSize = () => {
    this.sliderSize = $slider.offset()[options.vertical ? 'height' : 'width'];
  };

  // 值改变
  this.emitChange = () => {
    $.apply(this, options.change, this.value);
  };

  this.updateValue = (val) => {
    this.setValues(this.value);
    this.applyStyle();
  };

  this.valueChanged = () => {
    return this.value !== this.oldValue;
  };

  this.setValues = (val) => {
    this.value = val;
    $.apply(this, options.input, this.value);
    if (this.valueChanged()) {
      this.oldValue = this.value;
    }
  };

  // 更新滑块位置
  this.barSize = () => {
    return `${100 * (this.value - options.min) / (options.max - options.min)}%`;
  };

  this.barStart = () => {
    return '0%';
  };

  this.barStyle = () => {
    return this.vertical
      ? { height: this.barSize(), bottom: this.barStart() }
      : { width: this.barSize(), left: this.barStart() };
  };

  this.applyStyle = () => {
    $sliderTrack.css(this.barStyle());
  };

  this.setPosition = (percent) => {
    const targetValue = this.min + percent * (this.max - this.min) / 100;
    wrapper.setPosition(percent);
  };

  // 点击直接定位事件
  $slider.on({
    click: (event) => {
      if (options.disabled || this.dragging) return;
      this.resetSize();

      if (options.vertical) {
        const sliderOffsetBottom = $slider[0].getBoundingClientRect().bottom;
        this.setPosition((sliderOffsetBottom - event.clientY) / this.sliderSize * 100);
      }
      else {
        const sliderOffsetLeft = $slider[0].getBoundingClientRect().left;
        this.setPosition((event.clientX - sliderOffsetLeft) / this.sliderSize * 100);
      }
      this.emitChange();
    }
  });

  // 初始化
  wrapper = sliderButton.call(this, $sliderHandler, options);

  // 初始化值
  this.setValues(options.value);
}

/**
 * 滑块插件
 * @param selector
 * @param options
 * @param {boolean} options.disabled 是否禁用
 * @param {boolean} options.vertical 滑块是否为纵向类型（默认横向滑块）
 * @param {number} options.value 默认值
 * @param {number} options.min 最小值
 * @param {number} options.max 最大值（至少为 min 的 2 倍）
 * @param {number} options.step 步数（至少为 2）
 * @param {function} options.input 数据改变时触发（使用鼠标拖曳时，活动过程实时触发）
 * @param {function} options.change 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）
 */
const slider = function(selector, options) {
  return new Slider(selector, options);
};

export default slider;
