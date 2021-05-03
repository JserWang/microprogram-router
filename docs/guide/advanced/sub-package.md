# 配置分包

当需要使用到分包时，routes 的配置会稍微增加一点复杂度，如下：

```js
{
  path: '/blog',
  root: 'packageBlog',
  children: [
    {
      path: 'list',
      page: 'pages/list/index'
    }
  ]
}
```

其中，外层的`path` 与 `children` 中的 `path` 会自动拼接起来作为你未来跳转的路径，如：

```js
router.push(`/blog/list`)
```

外层的 `root` 作为文件目录中分包的文件根目录，`children`数组中每一项就如同平时设置 route 一样即可。
