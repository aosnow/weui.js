@mudas/weui.js
=====

[![npm version](https://img.shields.io/npm/v/@mudas/weui.js.svg)](https://www.npmjs.org/package/@mudas/weui.js/)


### 概述

[WeUI](https://github.com/aosnow/weui.git) 的轻量级 js 改版库（基于 `zepto v1.2.0`）。

该 `@mudas/weui.js` 源于 `weui.js`，进行大量修改、优化、升级、加入新组件，转换大量老旧 `JS` 语法到 `ES6`，并将 `weui` 样式组件项目合并至该项目。另外对 `webpack` 等构建配置升级到 `webpack v4.39.x`，若想使用原版请查看：https://github.com/Tencent/weui.js

### 计划
- [ ] 使用 scss 语法全部替换 less，增强 css 预处理能力
- [ ] 使用新 ES6 class 架构重构简化所有组件
- [ ] 所有组件回调风格去除 onClick 类似驼峰法，替换成 handler
- [x] 新组件：半屏弹框 half-screen
- [x] 新组件：无限滚动 infinite-scroll
- [x] 新组件：选项拾取器 option-picker（实现单选、多选）
- [x] 新组件：重写 action-sheet（支持自定义操作区内容，如插入客服图标）
- [x] 新组件：重写 slider 组件，支持更多自由配置参数
- [x] 使用 zepto 替代内部 balajs 库，并转换到外部依赖，由用户自行控制


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
<link rel="stylesheet" href="weui.min.css">
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
