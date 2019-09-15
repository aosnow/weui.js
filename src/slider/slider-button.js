// ------------------------------------------------------------------------------
// name: slider-button
// author: mudas( mschool.tech )
// created: 2019.09.15 上午 7:23
// ------------------------------------------------------------------------------

import $ from '../util/util';

function sliderButton(selector, options) {

  const host = this; // 该方法将被父级以 call 的方式调用，并注入作用域为父级
  const $el = $.isString(selector) ? $(selector) : selector;

  const { min, max, step } = options;

  let dragging = false;
  let isClick = false;
  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let currentY = 0;
  let newPosition = 0;
  let startPosition = 0;

  this.value = options.value;
  this.oldValue = null;

  this.currentPosition = () => {
    return `${(this.value - options.min) / (options.max - options.min) * 100}%`;
  };

  this.wrapperStyle = () => {
    return this.vertical ? { bottom: this.currentPosition() } : { left: this.currentPosition() };
  };

  this.applyWrapperStyle = () => {
    $el.css(this.wrapperStyle());
  };

  this.update = (value) => {
    this.value = value;
    this.applyWrapperStyle();
    host.updateValue(value);
  };

  this.setDragging = (value) => {
    dragging = value;
    host.dragging = value;
  };

  // 回调方法
  this.onButtonDown = (event) => {
    if (options.disabled) return;
    event.preventDefault();
    this.onDragStart(event);
    window.addEventListener('mousemove', this.onDragging);
    window.addEventListener('touchmove', this.onDragging);
    window.addEventListener('mouseup', this.onDragEnd);
    window.addEventListener('touchend', this.onDragEnd);
    window.addEventListener('contextmenu', this.onDragEnd);
  };

  this.onDragStart = (event) => {
    this.setDragging(true);
    isClick = true;

    if (event.type === 'touchstart') {
      event.clientY = event.touches[0].clientY;
      event.clientX = event.touches[0].clientX;
    }
    if (options.vertical) {
      startY = event.clientY;
    }
    else {
      startX = event.clientX;
    }
    startPosition = parseFloat(this.currentPosition());
    newPosition = startPosition;
  };

  this.onDragging = (event) => {
    if (dragging) {
      isClick = false;
      host.resetSize();
      let diff = 0;

      if (event.type === 'touchmove') {
        event.clientY = event.touches[0].clientY;
        event.clientX = event.touches[0].clientX;
      }
      if (this.vertical) {
        currentY = event.clientY;
        diff = (startY - currentY) / host.sliderSize * 100;
      }
      else {
        currentX = event.clientX;
        diff = (currentX - startX) / host.sliderSize * 100;
      }
      newPosition = startPosition + diff;
      this.setPosition(newPosition);
    }
  };

  this.onDragEnd = () => {
    if (dragging) {
      // 防止在 mouseup 后立即触发 click，导致滑块有几率产生一小段位移
      // 不使用 preventDefault 是因为 mouseup 和 click 没有注册在同一个 DOM 上
      setTimeout(() => {
        this.setDragging(false);
        if (!isClick) {
          this.setPosition(newPosition);
          host.emitChange();
        }
      }, 0);
      window.removeEventListener('mousemove', this.onDragging);
      window.removeEventListener('touchmove', this.onDragging);
      window.removeEventListener('mouseup', this.onDragEnd);
      window.removeEventListener('touchend', this.onDragEnd);
      window.removeEventListener('contextmenu', this.onDragEnd);
    }
  };

  this.setPosition = (newPosition) => {
    if (!$.isNumber(newPosition)) return;

    newPosition = newPosition < 0 ? 0 : (newPosition > 100 ? 100 : newPosition);

    const lengthPerStep = 100 / ((max - min) / step);
    const steps = Math.round(newPosition / lengthPerStep);
    let value = steps * lengthPerStep * (max - min) * 0.01 + min;

    const precision = host.precision();
    value = parseFloat(value.toFixed(precision));

    // 更新值到样式表现
    this.update(value);

    if (!dragging && this.value !== this.oldValue) {
      this.oldValue = this.value;
    }
  };

  // 起始触发事件
  this.update(options.value);
  $el.on({ mousedown: this.onButtonDown, touchstart: this.onButtonDown });

  return this;
}

export default sliderButton;
