// ------------------------------------------------------------------------------
// name: index
// author: mudas( mschool.tech )
// created: 2019/9/19 0:00
// ------------------------------------------------------------------------------

import OptionPicker from './option-picker';

/**
 * 选项拾取器
 * @param options 选项集合
 * @param {string} options.id 窗体的唯一 id（若设定 id，窗体将被重复利用）
 * @param {string} options.type 窗体的类型 radio: 单选，checkbox: 多选（默认：'radio'）
 * @param {string} options.className 对窗体进行自定义样式控制的类名
 * @param {Array} options.options 提供的可选项数组（如：<code>[{label:'a',value:'a'},{label:'b',value:'b',checked:true}]</code>）
 * @param {string} options.title 窗体标题，默认 '请选择'
 * @param {string} options.container 用于承载窗体内容的父级容器，默认追加到 'body' 末尾
 * @param {string} options.enter 确定按钮的标签文本（默认：'确定'）
 * @param {string} options.cancel 取消按钮的标签文本（默认：'取消'）
 * @param {function} options.close 窗体关闭时的 callback
 * @param {function} options.complete 确定选项时的 callback
 * @return {OptionPicker}
 * @example
 * // 单选案例
 * weui.optionPicker({
    id: 'gender-picker',
    title: '选择性别',
    type: 'radio', // 可省略
    options: [
      { label: '男', value: 0 },
      { label: '女', value: 1 }
    ],
    complete: function(value){
      // value 为已选项的 value 的数组
    }
  }).show();
 *
 * // 多选案例
 * weui.optionPicker({
    id: 'muti-picker',
    title: '选择多个选项',
    type: 'checkbox',
    options: [
      { label: 'A', value: 0 },
      { label: 'B', value: 1 },
      { label: 'C', value: 2 }
    ],
    complete: function(value){
      // value 为已选项的 value 的数组
    }
  }).show();
 *
 */
function optionPicker(options) {
  return new OptionPicker(options);
}

export default optionPicker;
export { OptionPicker };
