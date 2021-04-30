import { createRouter, createWechatHistory } from '@microprogram/router'

const routes = [{
  name: 'home',
  path: '/',
  page: 'pages/index/index',
  meta: {
    isTab: true
  },
},{
  name: 'my',
  path: '/my',
  page: 'pages/my/index',
  meta: {
    isTab: true
  },
},{
  name: 'back',
  path: '/back',
  page: 'pages/back/index',
}]

const router = createRouter({
  history: createWechatHistory(),
  routes
})

export default router