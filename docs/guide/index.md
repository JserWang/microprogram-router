# 入门

::: tip 注意
教程中的所有例子都以微信小程序（TS版本）为例
:::

## 初始化

在工程中新建 `router` 目录，在 `router` 目录新建中 `index.js` 或 `index.ts` 文件

``` ts
import { 
  createRouter,
  createWechatHistory,
  RouteRecord
} from '@microprogram/router'

const routes: RouteRecord[] = [
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

``` ts
import router from './router/index'

App({
  router
})
```

## 调用

在页面对应的 ts 文件中使用 router

``` ts
import { useRoute, useRouter } from '@microprogram/router'

Page({
  onShow() {
    // 获取当前页面中的参数
    useRoute().params
  },
  handleClick() {
    useRouter().push('/log')
  }
})
```
