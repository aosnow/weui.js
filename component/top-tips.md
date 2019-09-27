<a name="topTips"></a>

## topTips(...options) ⇒ <code>TopTips</code>
顶部 tips 消息弹出层

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ...options |  | 配置项 |
| [options.type] | <code>string</code> | 主题（可选：'success'/'warn'/'error'，默认：'error'） |
| options.content | <code>string</code> | tips 显示内容 |
| [options.duration] | <code>number</code> | 自动关闭等待时间（默认：2500） |
| [options.showClose] | <code>boolean</code> | 是否显示关闭按钮（默认：false） |
| [options.container] | <code>string</code> | 实例化时被添加到的目标元素的选择器描述（默认：'body'） |
| [options.className] | <code>string</code> | 自定义类名 |
| [options.close] | <code>function</code> | actionSheet关闭后的回调 |

**Example**  
### 常规用法
```javascript
weui.topTips('请填写正确的字段'); // 默认 2500ms 后自动关闭
weui.topTips('请填写正确的字段', {
  duration: 2500,
  type: 'success',
  close: function() {
    console.log('close');
  }
});
```
