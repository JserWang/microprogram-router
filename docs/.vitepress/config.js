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
    editLinks: true,
    editLinkText: '在 GitHub 中编辑此页',
    nav: [
      { text: '指南', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: '更新记录',
        link: 'https://github.com/JserWang/microprogram-router/releases'
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
            link: '/guide/',
          },
          {
            text: '动态路由匹配',
            link: '/guide/dynamic-matching.html',
          },
          {
            text: '路由跳转方式',
            link: '/guide/navigation.html',
          },
          {
            text: '命名路由',
            link: '/guide/named-routes.html',
          },
          {
            text: '不同的历史记录模式',
            link: '/guide/history-mode.html',
          },
          {
            text: '配置TAB',
            link: '/guide/tab.html',
          },
        ],
      },
      {
        text: '进阶',
        collapsable: false,
        children: [
          {
            text: '导航守卫',
            link: '/guide/navigation-guards.html'
          },
          {
            text: '路由元信息',
            link: '/guide/meta.html'
          }
        ]
      }
    ]
  },
}
