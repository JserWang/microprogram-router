# 不同的历史模式

在创建路由器实例时，`history` 配置允许我们在不同的历史模式中进行选择。

## 微信小程序

`createWechatHistory()` 创建的：

```js
import { createRouter, createWechatHistory } from '@microprogram/router'

const router = createRouter({
  history: createWechatHistory(),
  routes: [
    //...
  ],
})
```

## 支付宝小程序

`createAlipayHistory()` 创建的：

```js
import { createRouter, createAlipayHistory } from '@microprogram/router'

const router = createRouter({
  history: createAlipayHistory(),
  routes: [
    //...
  ],
})
```

## 其他

如果你发现你当前使用的小程序在本库不支持时，你可以选择在[github 提 issue](https://github.com/JserWang/microprogram-router/issues)，更欢迎你了解完 history 的封装模式后，提供 [PR](https://github.com/JserWang/microprogram-router/pulls) 贡献。
