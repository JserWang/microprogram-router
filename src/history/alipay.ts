import { promisify } from '../utils'
import { HistoryLocation, RouterHistory } from './common'

const MAX_STACK_LENGTH = 10

export function createAlipayHistory(base?: string): RouterHistory {
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
