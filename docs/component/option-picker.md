<a name="optionPicker"></a>

## optionPicker(options) ⇒ <code>OptionPicker</code>
选项拾取器

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options |  | 选项集合 |
| options.id | <code>string</code> | 窗体的唯一 id（若设定 id，窗体将被重复利用） |
| options.type | <code>string</code> | 窗体的类型 radio: 单选，checkbox: 多选（默认：'radio'） |
| options.className | <code>string</code> | 对窗体进行自定义样式控制的类名 |
| options.options | <code>Array</code> | 提供的可选项数组（如：<code>[{label:'a',value:'a'},{label:'b',value:'b',checked:true}]</code>） |
| options.title | <code>string</code> | 窗体标题，默认 '请选择' |
| options.container | <code>string</code> | 用于承载窗体内容的父级容器，默认追加到 'body' 末尾 |
| options.enter | <code>string</code> | 确定按钮的标签文本（默认：'确定'） |
| options.cancel | <code>string</code> | 取消按钮的标签文本（默认：'取消'） |
| options.close | <code>function</code> | 窗体关闭时的 callback |
| options.complete | <code>function</code> | 确定选项时的 callback |

**Example**  
```js
// 单选案例
weui.optionPicker({
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

// 多选案例
weui.optionPicker({
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
```
