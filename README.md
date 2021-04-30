# microprogram-router

[docs](https://jserwang.github.io/microprogram-router/)

## Usage

```bash
yarn add @microprogram/router
# npm
npm install @microprogram/router
```

Create `router` directory in the project, and create an `index.js` or `index.ts` file in the `router` directory

``` ts
import { 
  createRouter,
  createWechatHistory,
  RouteRecord
} from '@microprogram/router'

const routes: RouteRecord[] = [
  {
    path: '/',
    page: 'pages/index/index'
  },
  {
    path: '/log',
    page: 'pages/log/index'
  }
]

const router = createRouter({
  history: createWechatHistory(),
  routes
})

export default router
```

in `app.ts`

``` ts
import router from './router/index'

App({
  router
})
```

in anywhere to use

``` ts
import { useRoute, useRouter } from '@microprogram/router'

Page({
  onShow() {
    // 获取当前页面中的参数
    useRoute().params
  },
  handleClick() {
    useRouter().push('/log')
  }
})
```

## Development

``` bash
git clone https://github.com/JserWang/microprogram-router
cd microprogram-router
yarn
yarn build
```
