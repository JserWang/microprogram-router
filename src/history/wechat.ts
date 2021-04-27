import { HistoryLocation, HistoryState, RouterHistory } from './common'

export function createWechatHistory(base?: string): RouterHistory {
  function push(to: HistoryLocation, data: HistoryState) {
    let method: any = wx.navigateTo
    if (data.isTab) {
      method = wx.switchTab
    } else if (data.reLaunch) {
      method = wx.reLaunch
    }

    const params: WechatMiniprogram.NavigateToOption = {
      url: to,
    }

    if (data.events) {
      params.events = data.events
    }
    return method.bind(wx)(params)
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

  const routerHistory: RouterHistory = {
    base: base || '',
    push,
    go,
    replace,
  }

  return routerHistory
}
