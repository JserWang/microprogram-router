# 入门

::: tip 注意
教程中的所有例子都以微信小程序（JS版本）为例。多小程序之间唯一不同的仅是 history 的不同，具体的 history 创建方式可见： [路由模式](./history-mode.html)
:::

## 初始化

在工程中新建 `router` 目录，在 `router` 目录新建中 `index.js` 或 `index.ts` 文件

``` js
import { 
  createRouter,
  createWechatHistory
} from '@microprogram/router'

const routes = [
  {
    path: '/',
    page: 'pages/index/index'
  },
  {
    path: '/log',
    page: 'pages/log/index'
  }
]

const router = createRouter({
  history: createWechatHistory(),
  routes
})

export default router
```

## 挂载

在 `app.ts` 中引入

``` js
import router from './router/index'

App({
  router
  // ...
})
```

## 调用

在页面对应的 ts 文件中使用 router

``` js
import { useRoute, useRouter } from '@microprogram/router'

Page({
  onShow() {
    // 获取当前页面中的参数
    useRoute().params
  },
  handleClick() {
    // 跳转至 log 页
    useRouter().push('/log')
  }
})
```

## Typescript

router 同时导出了 RouteRecord ，你可以通过设置 routes 类型来获得编辑器的自动提示功能。

```ts
import type { RouteRecord } from '@microprogram/router'

const routes: RouteRecord[] = [
  // ...
]

```
