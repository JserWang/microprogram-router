---
sidebarDepth: 0
---

# 路由跳转方式

在 router 中没有直接提供类似 `vue-router` 中的 `<router-link />` 的组件式使用方式，如果想使用可见 [RouterLink](../practice/router-link.html)。

在 js 文件中可通过 `useRouter()` 获取到当前路由实例。

```js
import { useRouter } from '@microprogram/router'

const router = useRouter()
```

## 导航到不同的位置

想要导航到不同的 URL，可以使用 `router.push` 方法。

当调用 push 时的执行策略：

1. 当跳转页面不是同一页时，若目标页面存在于页面栈时，会执行 `back` 操作
2. 当前路由栈超过要求上限时（如：微信小程序路由栈上限为10），会执行 `replace` 操作
3. 否则会执行常规 `push` 操作，向小程序路由栈添加一条新的记录

该方法的参数可以是一个字符串路径，或者一个描述地址的对象。例如：

```ts
// 字符串路径
router.push('/users/JserWang')

// 带有路径的对象
router.push({ path: '/users/JserWang' })

// 命名的路由，并加上参数，让路由建立 url
router.push({ name: 'user', params: { username: 'JserWang' } })
```

::: warning 注意
与 `vue-router` 的参数不同点在于，小程序的路由永远只有 `params`，所以传参的方式只包含三种
:::

```ts
const username = 'JserWang'
// 通过 ? 直接传参
router.push(`/user?username=${username}`)
// 通过 params 传参
router.push({ name: 'user', params: { username }})
router.push({ path: '/user', params: { username }})
// 通过 动态路由传参 传参
router.push(`/user/${username}`)
```

## 替换当前位置

它的作用类似于 `router.push`，不同的是，正如它的名字所暗示的那样——它取代了当前的条目。

```ts
router.push({ path: '/home', replace: true })
// 相当于
router.replace({ path: '/home' })
```

## 横跨历史

该方法采用一个整数作为参数，表示在历史堆栈中前进或后退多少步，类似于 `window.history.go(n)`。

例子

```js

// 返回一条记录，与router.back() 相同
router.go(1)

// 返回 3 条记录
router.go(3)

// 如果没有那么多记录，会回到路由栈中第一个页面
router.go(100)
```
