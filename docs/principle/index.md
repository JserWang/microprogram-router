# 原理解析

从常用的方法中逐条揭开路由的神秘面纱。

1. 调用 `createRouter`，以闭包的形式存储传入的 `history`，[遍历 routes](https://github.com/JserWang/microprogram-router/blob/main/src/matcher/index.ts#L16) 将每条 `route` 生成对应的 [matcher](https://github.com/JserWang/microprogram-router/blob/main/src/matcher/index.ts#L30)，并将 name 与 matcher 的映射关系、page 与 matcher 的映射关系[存入 Map](https://github.com/JserWang/microprogram-router/blob/main/src/matcher/index.ts#L34-L41) 中。对小程序的生命周期进行 [patch](https://github.com/JserWang/microprogram-router/blob/main/src/patchMiniprogram.ts) 来操作路由跳转后 storage 的参数移除。

2. 调用 `useRouter().push`、`useRouter().replace`时，会通过 [`matcher.resolve`](https://github.com/JserWang/microprogram-router/blob/main/src/matcher/index.ts#L71-L132) 方法来解析出访问的路由记录以及参数，后根据 [push 的策略](https://github.com/JserWang/microprogram-router/blob/main/src/router.ts#L176-L238)来进行相关 `history` 的方法调用，在调用完 `history` 的方法后，将参数以路由栈索引为 key 存储至 storage 中。

3. 调用 `useRoute().params`，根据当前路由所在路由栈索引，从storage中取值。

也许你会疑问为什么会将参数存储至 storage 中，其实在早期版本中会将路由 encode 后拼接至实际path中，但倘若页面想存储大对象时，导致 url 过长从而会影响跳转失败。所以决定使用 storage 来进行参数存储，也顺便带来了另外一个好处，页面传值不再需要encode与decode便可做到参数保真。

当你掌握以上方法后，也可以再试着去读一下 `vue-router` 的[源码](https://github.com/vuejs/vue-router-next)，也许也会变的容易许多。
