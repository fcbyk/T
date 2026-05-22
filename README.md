# demo36

[React官方文档](https://react.dev/)

## React Web 应用最核心的两个包

- `react`：React 核心库
- `react-dom`: React 的浏览器渲染器

## React 核心库

> React 本身不负责操作浏览器 DOM，它更像 UI 抽象层

负责：

* 组件系统
* Hooks
* state
* context
* JSX runtime
* React API

## React 的浏览器渲染器

> 把 React 组件挂到浏览器页面

负责：

* 渲染 DOM
* diff
* 更新页面
* createRoot
* hydration

## 两个包关系

```text
react
  ↓ 定义 UI

react-dom
  ↓ 渲染 UI 到网页
```

## 为什么拆开

因为 React 不一定渲染网页

React 核心可以配不同 renderer：

| renderer          | 用途       |
| ----------------- | -------- |
| react-dom         | 浏览器      |
| react-native      | 手机 App   |
| react-pdf         | PDF      |
| ink               | Terminal |
| react-three-fiber | Three.js |

所以 React 架构是：

```text
React Core
+ Renderer
```

## Vue 对比

Vue 更一体化。

大概类似：

| Vue         | React     |
| ----------- | --------- |
| vue         | react     |
| runtime-dom | react-dom |

只是 Vue 通常不需要你手动区分
