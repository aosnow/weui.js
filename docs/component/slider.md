<a name="slider"></a>

## slider(selector, options)
滑块插件

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| selector |  |  |
| options |  |  |
| options.disabled | <code>boolean</code> | 是否禁用 |
| options.vertical | <code>boolean</code> | 滑块是否为纵向类型（默认横向滑块） |
| options.value | <code>number</code> | 默认值 |
| options.min | <code>number</code> | 最小值 |
| options.max | <code>number</code> | 最大值（至少为 min 的 2 倍） |
| options.step | <code>number</code> | 步数（至少为 2） |
| options.input | <code>function</code> | 数据改变时触发（使用鼠标拖曳时，活动过程实时触发） |
| options.change | <code>function</code> | 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发） |

