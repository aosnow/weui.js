@mudas/weui.js
=====

[![npm version](https://img.shields.io/npm/v/@mudas/weui.js.svg)](https://www.npmjs.org/package/@mudas/weui.js/)


### 概述

[WeUI](https://github.com/aosnow/weui.git) 的轻量级 js 改版库（基于 `zepto v1.2.0`）。

该 `@mudas/weui.js` 源于 `weui.js`，并发布，进行大量修改、优化、升级、加入新组件，转换大量老旧 `JS` 语法到 `ES6`，另外对 `webpack` 等构建配置升级到 `webpack v4.39.x`，若想使用原版请查看：https://github.com/Tencent/weui.js

### 二次开发

#### 安装

```npm
git clone https://github.com/aosnow/weui.js.git
cd weui.js
npm install
npm start
```

#### 编译

```npm
npm run build
```


### 使用

#### global 

```html
<link rel="stylesheet" href="https://res.wx.qq.com/open/libs/weui/2.0.1/weui.min.css">
<script type="text/javascript" src="weui.min.js"></script>
<script type="text/javascript">
    weui.alert('alert');
</script>
```

#### import as module

```javascript
import weui from '@mudas/weui.js';

weui.alert('alert');
```

### 文档

[Documents](https://aosnow.github.io/weui.js/)

### 贡献

如果你有好的意见或建议，欢迎给我们提issue或pull request。

### License
The MIT License(http://opensource.org/licenses/MIT)

请自由地享受和参与开源
