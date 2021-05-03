---
sidebar: auto
---

# API 参考

## createRouter

创建一个可以被小程序程序使用的路由实例。查看 [`RouterOptions`](#routeroptions) 中的所有可以传递的属性列表。

**函数签名：**

```typescript
export declare function createRouter(options: RouterOptions): Router
```

### 参数

| 参数    | 类型                            | 描述                      |
| ------- | ------------------------------- | ------------------------- |
| options | [RouterOptions](#routeroptions) | Options 用来初始化 router |

## createWechatHistory

创建一个微信小程序路由

**函数签名：**

```typescript
export declare function createWechatHistory(): RouterHistory
```

## createAlipayHistory

创建一个支付宝小程序路由

**函数签名：**

```typescript
export declare function createAlipayHistory(): RouterHistory
```

## useRoute

获取当前路由地址

**函数签名：**

```typescript
export declare function useRoute(): RouteLocationNormalized
```

## useRouter

返回 router 实例。

**函数签名：**

```typescript
export declare function useRouter(): Router
```

## TypeScript

下面是 Microprogram Router 使用的一些接口和类型。文档引用它们是为了让你了解对象中现有的属性。

## Router 属性

### options

- **类型**：[`RouterOptions`](#routeroptions)
- **详细内容**：

  创建 Router 时传递的原始配置对象。只读的。

## Router 方法

### afterEach

添加一个导航钩子，在每次导航后执行。返回一个删除注册钩子的函数。

**函数签名：**

```typescript
afterEach(guard: NavigationHookAfter): () => void
```

_参数_

| 参数  | 类型                | 描述             |
| ----- | ------------------- | ---------------- |
| guard | NavigationHookAfter | 要添加的导航钩子 |

#### 示例

```js
router.afterEach((to, from) => {
  
})
```

### back

如果可能的话，通过调用 `history.back()` 回溯历史。相当于 `router.go(1)`。

**函数签名：**

```typescript
back(): void
```

### beforeEach

添加一个导航守卫，在任何导航前执行。返回一个删除已注册守卫的函数。

**函数签名：**

```typescript
beforeEach(guard: NavigationGuard): () => void
```

_参数_

| 参数  | 类型                                  | 描述             |
| ----- | ------------------------------------- | ---------------- |
| guard | [`NavigationGuard`](#navigationguard) | 要添加的导航守卫 |

### beforeResolve

添加一个导航守卫，在导航即将解析之前执行。在这个状态下，所有的组件都已经被获取，并且其他导航守卫也已经成功。返回一个删除已注册守卫的函数。

**函数签名：**

```typescript
beforeResolve(guard: NavigationGuard): () => void
```

_参数_

| 参数  | 类型                                  | 描述             |
| ----- | ------------------------------------- | ---------------- |
| guard | [`NavigationGuard`](#navigationguard) | 要添加的导航守卫 |

#### 示例

```js
router.beforeEach(to => {
  if (to.meta.requiresAuth && !isAuthenticated) return false
})
```

### getRoutes

获取所有 [路由记录](#routerecord)的完整列表。

**函数签名：**

```typescript
getRoutes(): RouteRecord[]
```

### go

允许你在历史中前进或后退。

**函数签名：**

```typescript
go(delta: number): void
```

_参数_

| 参数  | 类型     | 描述                                 |
| ----- | -------- | ------------------------------------ |
| delta | `number` | 相对于当前页面，你要移动到的历史位置 |

### hasRoute

确认是否存在指定名称的路由。

**函数签名：**

```typescript
hasRoute(name: string | symbol): boolean
```

_参数_

| 参数 | 类型    | 描述    |
| ---- | ------- | ------- | ---------------- |
| name | `string | symbol` | 要确认的路由名称 |

### push

通过在历史堆栈中推送一个 entry，以编程方式导航到一个新的 URL。

**函数签名：**

```typescript
push(to: RouteLocation): Promise<NavigationFailure | void | undefined>
```

_参数_

| 参数 | 类型                                    | 描述               |
| ---- | --------------------------------------- | ------------------ |
| to   | [`RouteLocation`](#routelocation) | 要导航到的路由地址 |

### replace

通过替换历史堆栈中的当前 entry，以编程方式导航到一个新的 URL。

**函数签名：**

```typescript
replace(to: RouteLocation): Promise<NavigationFailure | void | undefined>
```

_参数_

| 参数 | 类型                                    | 描述               |
| ---- | --------------------------------------- | ------------------ |
| to   | [`RouteLocation`](#routelocation) | 要导航到的路由地址 |

## RouterOptions

### history

用于路由区分不同的小程序跳转方式。

**函数签名：**

```typescript
history: RouterHistory
```

#### 示例

```js
createRouter({
  history: createWechatHistory(),
  // 其他配置...
})
```

### routes

应该添加到路由的初始路由列表。

**函数签名：**

```typescript
routes: RouteRecord[]
```

## RouteRecord

当用户通过 [`routes` option](#routeroptions) 来添加路由时，可以得到路由记录。 有三种不同的路由记录:

- 单一视图记录：有一个 `component` 配置
- 多视图记录 ([命名视图](../guide/basics/named-routes.html)) ：有一个 `components` 配置

### page

- **类型**：`string`
- **详细内容**：

  小程序实际页面地址。

### path

- **类型**：`string`
- **详细内容**：

  记录的路径。应该以 `/` 开头，除非该记录是分包中的另一条记录的子记录。可以定义参数：`/users/:id` 匹配 `/users/1` 以及 `/users/JserWang`。

- **更多的内容请看**：[动态路由匹配](../guide/basics/dynamic-matching.html)

### root

- **类型**：`string`
- **详细内容**：

  作为分包的根路径。

- **更多的内容请看**：[分包配置](../guide/advanced/sub-package.html)

### children

- **类型**：[`RouteRecord`](#routerecord) 数组 (可选)
- **详细内容**：

  用于配置当前记录的分包。

- **更多的内容请看**：[分包配置](../guide/advanced/sub-package.html)

### name

- **类型**：`string | symbol` (可选)
- **详细内容**：

  路由记录独一无二的名称。

### meta

- **类型**：[`RouteMeta`](#routemeta) (可选)
- **详细内容**：

  在记录上附加自定义数据。

- **更多的内容请看**：[Meta 字段](../guide/advanced/meta.html)

## RouteLocation

用户级的路由地址，可以传递给 `router.push()`，`replace`。

原始位置可以是一个 `字符串`，比如 `/users/JserWang`，也可以是一个对象：

```js
// 这三种形式是等价的
router.push('/users/JserWang')
router.push({ path: '/users/JserWang' })
router.push({ name: 'users', params: { username: 'JserWang' }})
```

原始路由地址还支持一个额外的配置 `replace` 来调用导航守卫中的 `router.replace()`，而不是 `router.push()`。请注意，即使在调用 `router.push()`时，它也会在内部调用 `router.replace()` ：

```js
router.push({ path: '/user/JserWang', replace: true })
// 相当于
router.replace({ path: '/user/JserWang' })
```

## RouteLocationNormalized

标准化的路由地址。在导航守卫中，`to` 和 `from` 总是属于这种类型。

### fullPath

- **类型**：`string`
- **详细内容**：

  RouteRecord 中的 path 与 stringifyQuery(params) 的拼接，与路由地址有关。

### fullPagePath

- **类型**：`string`
- **详细内容**：

  RouteRecord 中的 page 与 stringifyQuery(params) 的拼接，与路由地址有关。

### meta

- **类型**：`RouteMeta`
- **详细内容**：

  RouteRecord中配置的 meta，与路由地址有关。

- **更多的内容请看**：[Meta 字段](../guide/advanced/meta.md)

### name

- **类型**：`string | symbol | undefined | null`
- **详细内容**：

  路由记录的名称。

### page

- **类型**：`string`
- **详细内容**：

  RouteRecord 中 page，与路由地址有关。

### params

- **类型**：`Record<string, string | string[]>`
- **详细内容**：

  从 `path` 中提取的已解码参数字典。

### path

- **类型**：`string`
- **详细内容**：

  RouteRecord 中 path，与路由地址有关。

## NavigationGuard

- **Arguments**：

  - [`RouteLocationNormalized`](#routelocationnormalized) to - 我们要导航到的路由地址
  - [`RouteLocationNormalized`](#routelocationnormalized) from - 我们从哪里来的路由地址

- **详细内容**：

  可以通过函数来控制路由导航。如果你返回一个值（或一个 Promise ），则可以省略 `next` 回调，并且我们鼓励这样做。可能的返回值 (和 `next`的参数) 有：

  - `undefined | void | true`: 验证导航
  - `false`: 取消导航
  - [`RouteLocation`](#routelocation): 重定向到一个不同的位置

- **更多的内容请看**：[导航守卫](../guide/advanced/navigation-guards.md)
