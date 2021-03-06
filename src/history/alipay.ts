import { promisify } from '../utils'
import { HistoryLocation, RouterHistory } from './common'

const MAX_STACK_LENGTH = 10

export function createAlipayHistory(): RouterHistory {
  function push(to: HistoryLocation) {
    return promisify(my.navigateTo)({ url: to })
  }

  function switchTab(to: string) {
    return promisify(my.switchTab)({ url: to })
  }

  function reLaunch(to: string) {
    return promisify(my.reLaunch)({ url: to })
  }

  function replace(to: string) {
    return promisify(my.redirectTo)({ url: to })
  }

  function go(delta: number) {
    if (delta < 1) {
      delta = 1
    }
    return promisify(my.navigateBack)({ delta })
  }

  function getCurrentRoute() {
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    return {
      route: currentPage.route,
      params: currentPage.query
    }
  }

  function getRoutes() {
    return getCurrentPages()
  }

  function setParams(key: string, params: any) {
    my.setStorageSync({
      key,
      data: params
    })
  }

  function getParams(key: string) {
    return my.getStorageSync({
      key
    })
  }

  function removeParams(key: string) {
    my.removeStorageSync({ key })
  }

  function removeParamsByPrefix(prefix: string) {
    const { keys } = my.getStorageInfoSync()
    keys.forEach((key) => {
      if (key.startsWith(prefix)) {
        removeParams(key)
      }
    })
  }

  const routerHistory: RouterHistory = {
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
