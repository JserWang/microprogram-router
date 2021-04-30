import { HistoryLocation, HistoryState, RouterHistory } from './common'

const MAX_STACK_LENGTH = 10

export function createWechatHistory(base?: string): RouterHistory {
  function push(to: HistoryLocation, data?: HistoryState) {
    const params: WechatMiniprogram.NavigateToOption = {
      url: to,
      events: data?.event
    }

    return wx.navigateTo(params)
  }

  function switchTab(to: string) {
    return wx.switchTab({ url: `${to}` })
  }

  function reLaunch(to: string) {
    return wx.reLaunch({ url: `${to}` })
  }

  function go(delta: number) {
    if (delta < 1) {
      delta = 1
    }
    return wx.navigateBack({ delta })
  }

  function replace(to: string) {
    return wx.redirectTo({ url: `/${to}` })
  }

  function getRoutes() {
    return getCurrentPages()
  }

  function getCurrentRoute() {
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    return {
      route: currentPage.route,
      params: currentPage.options
    }
  }

  const routerHistory: RouterHistory = {
    base: base || '',
    MAX_STACK_LENGTH,
    push,
    go,
    replace,
    switchTab,
    reLaunch,
    getCurrentRoute,
    getRoutes
  }

  return routerHistory
}
