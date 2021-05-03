/** @typedef {import('vitepress').UserConfig} UserConfig */

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  base: '/microprogram-router',
  lang: 'zh-CN',
  title: 'Microprogram Router',
  description: '基于原生小程序的路由',
  themeConfig: {
    repo: 'JserWang/microprogram-router',
    docsRepo: 'JserWang/microprogram-router',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: false,
    nav: [
      { text: '指南', link: '/' },
      {
        text: 'API',
        link: '/api/'
      },
      {
        text: '原理解析',
        link: '/principle/'
      },
      {
        text: '示例',
        link: '/examples/'
      },
      {
        text: '更新日志',
        link: 'https://github.com/JserWang/microprogram-router/blob/master/CHANGELOG.md'
      }
    ],
    sidebar: [
      {
        text: '介绍',
        link: '/',
      },
      {
        text: '安装',
        link: '/installation',
      },
      {
        text: '基础',
        collapsable: false,
        children: [
          {
            text: '入门',
            link: '/guide/basics/',
          },
          {
            text: '路由跳转方式',
            link: '/guide/basics/navigation.html',
          },
          {
            text: '动态路由匹配',
            link: '/guide/basics/dynamic-matching.html',
          },
          {
            text: '命名路由',
            link: '/guide/basics/named-routes.html',
          },
          {
            text: '不同小程序的路由模式',
            link: '/guide/basics/history-mode.html',
          },
          {
            text: '配置TAB',
            link: '/guide/basics/tab.html',
          },
        ],
      },
      {
        text: '进阶',
        collapsable: false,
        children: [
          {
            text: '导航守卫',
            link: '/guide/advanced/navigation-guards.html'
          },
          {
            text: '路由元信息',
            link: '/guide/advanced/meta.html'
          },
          {
            text: '配置分包',
            link: '/guide/advanced/sub-package.html',
          },
        ],
      },
      {
        text: '最佳实践',
        collapsable: false,
        children: [
          {
            text: 'RouterLink',
            link: '/guide/practice/router-link.html'
          },
          {
            text: '落地中转页',
            link: '/guide/practice/page-transfer.html'
          },
          {
            text: '导航守卫',
            link: '/guide/practice/guards.html',
          }
        ],
      }
    ]
  },
}
