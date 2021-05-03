import { createRouter, createWechatHistory } from '@microprogram/router'

const routes = [
  {
    name: 'home',
    path: '/',
    page: 'pages/index/index',
    meta: {
      title: '首页',
      isTab: true
    },
  },
  {
    name: 'my',
    path: '/my',
    page: 'pages/my/index',
    meta: {
      isTab: true
    },
  },
  {
    name: 'back',
    path: '/back',
    page: 'pages/back/index',
    meta: {
      title: '测试'
    }
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
  history: createWechatHistory(),
  routes
})


router.afterEach((to) => {
  const { title } = to.meta
  title && wx.setNavigationBarTitle({ title })
})

export default router