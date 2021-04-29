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

## 其他

// TODO：待 history 中将其他小程序的路由写完后补全
