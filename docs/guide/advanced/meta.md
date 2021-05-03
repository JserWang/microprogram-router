# 路由元信息

有时，你可能希望将任意信息附加到路由上，如标题名称、谁可以访问路由等。这些事情可以通过接收属性对象的`meta`属性来实现，并且它可以在路由地址和导航守卫上都被访问到。定义路由的时候你可以这样配置 `meta` 字段：

```js
const routes = [
  {
    path: '/posts/new',
    page: 'pages/post/new/index',
    meta: { requiresAuth: true }
  }
]
```

那么如何访问这个 `meta` 字段呢？

一个路由匹配到的所有路由记录会暴露为 `route` 对象(还有在导航守卫中的路由对象)。

```js
router.beforeEach((to, from, next) => {
  // 而不是去检查每条路由记录
  if (to.meta.requiresAuth && !auth.isLoggedIn()) {
    // 此路由需要授权，请检查是否已登录
    // 如果没有，则重定向到登录页面
    next({
      path: '/login',
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath },
    }) 
  }
})
```

::: tip 提示
meta 能做的不仅仅是校验登录这么一件简单的事，希望你能学会举一反三领会到 meta 与导航守卫结合的好处
:::

## TypeScript

可以通过扩展 `RouteMeta` 接口来输入 meta 字段：

```ts
// typings.d.ts or router.ts
import '@microprogram-router'

declare module 'microprogram-router' {
  interface RouteMeta {
    // 是可选的
    requiresAuth?: boolean
    // 每个路由都必须声明
    title: boolean
  }
}
```
