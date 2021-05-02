# 介绍

## microprogram 的来由

由于接触小程序已经相对较晚了，所以好听、好记的 scope 基本都已经被占用了，外加原本不想局限在某一种小程序之上，所以取了抖音小程序 `micro-app` 中的 `micro`，又取了微信小程序 `miniprogram` 中的 `program`，组成了现在的 `microprogram` 。

## 为什么封装router

* 当页面之间想传大对象时，URL过长导致跳转失败。

* 在页面路由跳转时，在业务代码中我们通常需要一些标识来处理用户的下一步行为。比如，某些页面需要获得登录授权后才能访问，在访问这种类型的页面时，检测是否已登录授权，如没有则直接跳转至登录页

* 小程序的页面栈受限，无脑使用类似于 `router.push` 的方法会得到警告以至于页面跳转失败

* 当执行`back`、`switchTab`也需要传参。

* 完美路由栈的呈现，需要开发者时刻清楚什么时候用`replace`、`push`、`switchTab`。

* 本人所学皆来自于社区，遂将本人所学与所需整理，回报于社区

## 能带来什么

* 提供 `beforeEach` 与 `afterEach` 两个全局路由守卫，可在路由跳转前后进行一系列操作，如路由跳转前进行鉴权。

* 一个聪明的 `push` 策略，让开发者无需考虑什么时候需要 back，什么时候需要 replace。

* 页面之间传参时，`router` 内部通过 storage 进行存储，解决因传输大对象导致的 URL 过长问题、调用非官方支持的传参跳转方法（如：`switchTab`、`back`）的传参问题。

* 结合 `@microprogram/plugin-router` 的使用，告别每次修改 `routes` 时，还需要配置一次 `app.json` 中 `pages` 与 `subPackages` 的烦恼，它会为你自动填充 `app.json`，你只需要关心 `router` 中的 `routes` 即可。

## 鸣谢

microprogram-router 思想借鉴于 `vue-router 4.0` 以及解析 url 参数的源码也来自于 `vue-router 4.0`，感谢 `vuejs` 团队。
