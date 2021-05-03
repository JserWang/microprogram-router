# 落地中转页

在实际应用中，我们经常会遇到将某页生成二维码或者在公众号点击链接跳转至某页等方法，但这类页面由于没有通过 router 跳转，所以参数会丢失。

所以，在遇到这种情况时，我们通常会封装一个中转页（PageTransfer）：

其中`index.js`代码如下：

```js
import { useRouter } from '@microprogram/router'

Page({
  onLoad(options) {
    const { scene, ...args } = options

    useRouter().push({
      name: scene as string,
      params: {
        ...args
      },
      replace: true
    })
  }
})
```

在 router 的 routes 中添加：

```js
const routes = [
  // ...
  {
    name: 'transfer',
    path: '/transfer',
    page: 'pages/transfer/index'
  }
]
```

通过以上两部分代码，我们就实现了一个简单的落地中转页，我们只需要对外暴露链接`pages/transfer/index?scene=xxx` 即可，当页面需要其他任意参数时，只需要在 `scene` 无限拼接即可。

上述代码是一个最基本的落地中转页实践，当然中转页能做的事情还不止这些，你还可以加入小程序短链功能，所谓的短链就是将`?scene=xxx&...`中的所有内容通过短链服务生成一个唯一的 uuid 并将 uuid 于参数持久化，在调用 `router.push` 之前，调用短链服务使用uuid换回真实参数再进行跳转即可。
