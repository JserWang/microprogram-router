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

  function switchTab(url: string) {
    return wx.switchTab({ url })
  }

  function reLaunch(url: string) {
    return wx.reLaunch({ url })
  }

  function go(delta: number) {
    if (delta < 1) {
      delta = 1
    }
    return wx.navigateBack({ delta })
  }

  function replace(url: string) {
    return wx.redirectTo({ url })
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

  function setParams(key: string, params: any) {
    wx.setStorageSync(key, params)
  }

  function getParams(key: string) {
    return wx.getStorageSync(key)
  }

  function removeParams(key: string) {
    wx.removeStorageSync(key)
  }

  function removeParamsByPrefix(prefix: string) {
    const { keys } = wx.getStorageInfoSync()
    keys.forEach((key) => {
      if (key.startsWith(prefix)) {
        removeParams(key)
      }
    })
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
    getRoutes,
    setParams,
    getParams,
    removeParams,
    removeParamsByPrefix
  }

  return routerHistory
}
