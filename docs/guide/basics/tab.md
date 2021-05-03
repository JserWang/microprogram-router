# 配置TAB

当路由以切换 TAB 的方式进行跳转时（例如微信小程序的：switchTab），需在 route 中配置 meta 标识，`isTab: true`

```ts

const routes = [
  {
    path: '/',
    pages: 'pages/index/index',
    meta: {
      isTab: true
    }
  }
  // ...
]

```

当以以上方式配置完成后，再次调用 `router.push` 方法就会调用小程序原生的 `switchTab` 方法

更多 meta 的使用见[路由元信息](./meta.html)
