# RouterLink

在 router 中没有直接提供类似 `vue-router` 中的 `<router-link />` 的组件式使用方式。

**原因**：不同小程序中点击事件的绑定方式不同（如微信小程序为`bind:tap`、支付宝小程序为：`onTap`），要针对各小程序单独进行封装。在保证包体的大小的情况下，把各小程序的都封装可能不是一个好的做法。

自行实现可在 components 中，用 `view` 标签包裹后绑定点击事件来调用路由方法即可，以微信小程序为例：

`router-link/index.js`

```js
import { useRouter } from '@microprogram/router';

Component({
  options: {},
  externalClasses: [],
  properties: {
    to: {
      type: null,
      optionalTypes: [String, Object],
      value: ''
    },
    replace: {
      type: Boolean,
      value: false
    },
    reLaunch: {
      type: Boolean,
      value: false
    }
  },
  data: {},
  methods: {
    handleClick() {
      const { to } = this.data
      if (typeof to === "object") {
        useRouter().push({
          replace: this.data.replace,
          reLaunch: this.data.reLaunch,
          ...to
        })
      } else {
        useRouter().push(to)
      }
    }
  }
})
```

`router-link/index.wxml`

```html
<view bind:tap="handleClick">
  <slot></slot>
</view>
```
