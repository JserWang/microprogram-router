# 命名路由

除了 `path` 之外，你还可以为任何路由提供 `name`。这有以下优点：

- 没有硬编码的 URL
- `params` 的自动编码/解码。
- 防止你在 url 中出现打字错误。
- 绕过路径排序（如显示一个）

```js
const routes = [
  {
    path: '/user/:username',
    name: 'user',
    page: 'pages/user/index'
  }
]
```

以下三种代码方式调用 `router.push()` 是一回事：

```js
router.push({ name: 'user', params: { username: 'JserWang' } })

router.push({ path: '/user', params: { username: 'JserWang' } })

router.push(`/user/JserWang`)
```

在这三种情况下，路由将导航到路径 `/user/JserWang`。
