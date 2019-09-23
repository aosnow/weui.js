## Functions

<dl>
<dt><a href="#halfScreen">halfScreen(options)</a> ⇒ <code><a href="#halfScreen">halfScreen</a></code></dt>
<dd><p>半屏自定义内容弹出窗口</p>
</dd>
<dt><a href="#show">show()</a></dt>
<dd><p>显示方法</p>
</dd>
<dt><a href="#hide">hide(callback)</a></dt>
<dd><p>隐藏方法</p>
</dd>
</dl>

<a name="halfScreen"></a>

## halfScreen(options) ⇒ <code>[halfScreen](#halfScreen)</code>
半屏自定义内容弹出窗口

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options |  | 配置参数 |
| [options.title] | <code>string</code> | 窗口标题 |
| [options.container] | <code>string</code> | 指定窗口被添加到目标容器的 selector |
| [options.className] | <code>string</code> | 自定义窗口样式类名 |
| [options.content] | <code>string</code> &#124; <code>object</code> | 窗口主体内容的 selector，或者 html 内容 |
| [options.close] | <code>function</code> | 窗口关闭时的回调方法 |

**Example**  
```js
<script id="gender-content" type="text/html">
 <div>
   <input type="radio" name="gender" value="male" class="weui-check" id="r1" tips="请选择性别" required>
   <input type="radio" name="gender" value="female" class="weui-check" id="r2">
 </div>
</script>
```
**Example**  
```js
// 常规用法（预置模板）
const half = weui.halfScreen({
   title: '标题',
   content: '#gender-content'
});
half.show();

// 自定义 html
const half = weui.halfScreen({
   content: `<div>
     <h2>标题</h2>
     <p>窗口内容</p>
   </div>`
});
half.show();
```
<a name="show"></a>

## show()
显示方法

**Kind**: global function  
<a name="hide"></a>

## hide(callback)
隐藏方法

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | 在关闭动画完成后触发回调，这与 options.close 都会被触发 |

