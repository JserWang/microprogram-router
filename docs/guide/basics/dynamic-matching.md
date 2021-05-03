# 带参数的动态路由匹配

很多时候，我们需要将给定匹配模式的路由映射到同一个页面。例如，我们可能有一个 `ProductDetail` 页面，它应该对所有商品详情进行渲染，但商品 ID 不同。在 Microprogram Router 中，我们可以在路径中使用一个动态段来实现，我们称之为 _路径参数_ ：

```ts
const routes = [
  // 动态段以冒号开始
  { path: '/product/detail/:id', page: 'pages/product/detail/index' },
]
```

现在像 `/product/detail/123` 和 `/product/detail/456` 这样的 URL 都会映射到同一个路由。

_路径参数_ 用冒号 `:` 表示。当一个路由被匹配时，它的 _params_ 的值将在每个页面中以 `useRoute().params` 的形式暴露出来。

你可以在同一个路由中设置有多个 _路径参数_。例如：

| 匹配模式                       | 匹配路径                 | useRoute().params                           |
| ------------------------------ | ------------------------ | ---------------------------------------- |
| /product/:productId               | /product/1           | `{ productId: '1' }`                |
| /product/:categoryId/:productId | /product/c1/2 | `{ categoryId: 'c1', productId: '2' }` |
