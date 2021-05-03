# 导航守卫

通过进阶中介绍的路由导航可以鉴权外，在 `afterEach` 中，我们还可以为小程序设置标题，如微信小程序中：

```js
const routes = [
  {
    name: 'home',
    path: '/',
    page: 'pages/index/index',
    meta: {
      title: '首页',
      isTab: true
    },
  },
    {
    name: 'my',
    path: '/my',
    page: 'pages/my/index',
    meta: {
      title: '我的',
      isTab: true
    },
  },
];

const router = createRouter({
  history: createWechatHistory(),
  routes
})

router.afterEach((to) => {
  const { title } = to.meta
  title && wx.setNavigationBarTitle({ title })
})
```
