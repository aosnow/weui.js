<a name="actionSheet"></a>

## actionSheet(options) ⇒ <code>ActionSheet</code>
弹出式菜单

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options |  | 配置项 |
| options.menus | <code>array</code> | 上层的菜单选项 |
| options.menus[].label | <code>string</code> | 选项的文字 |
| options.menus[].handler | <code>function</code> | 选项点击时的回调 |
| options.actions | <code>array</code> | 下层的操作选项 |
| options.actions[].label | <code>string</code> | 选项的文字 |
| options.actions[].handler | <code>function</code> | 选项点击时的回调 |
| options.title | <code>string</code> | actionSheet的title，如果isAndroid=true，则不会显示 |
| [options.container] | <code>string</code> | 实例化时被添加到的目标元素的选择器描述（默认：'body'） |
| [options.className] | <code>string</code> | 自定义类名 |
| [options.modal] | <code>boolean</code> | 是否模态（true-点击背景将无法关闭窗体） |
| [options.close] | <code>function</code> | actionSheet关闭后的回调 |

**Example**  
### 常规用法```javascriptconst asheet = weui.actionSheet({  title: '请选择需要的操作',  menus: [    {      label: '确定',      handler: function() {        console.log('确定');      }    },    {      label: '取消',      handler: function() {        console.log('取消');      }    }  ],  actions: [    {      label: '取消',      handler: function() {        console.log('取消');      }    }  ]});asheet.open();```### 异步 Promise 用法```javascriptconst asheet = weui.actionSheet({  title: '',  menus: [    {      label: '<i class="weui-icon-success weui-icon_msg">这是个图标</i>',      handler: function() {        asheet.freeze(); // 冻结操作，异步场景下可阻止重复触发动作        return new Promise(resolve => {          setTimeout(() => {            console.log('客服电话');            asheet.freeze(false);            resolve();          }, 2000);        });      }    }  ],  actions: [    {      label: '取消',      handler: function() {        console.log('取消');      }    }  ]});asheet.open();```
