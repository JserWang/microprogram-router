import { createRouter, createAlipayHistory } from '@microprogram/router'

const routes = [
  {
    name: 'home',
    path: '/',
    page: 'pages/index/index',
    meta: {
      isTab: true,
    },
  },
  {
    name: 'my',
    path: '/my',
    page: 'pages/my/index',
    meta: {
      isTab: true,
    },
  },
  {
    name: 'back',
    path: '/back',
    page: 'pages/back/index',
  },
  {
    path: '/blog',
    root: 'packageBlog',
    children: [
      {
        path: 'list',
        page: 'pages/list/index'
      }
    ]
  }
]

const router = createRouter({
  history: createAlipayHistory(),
  routes
})

export default router