function patchPage() {
  const originalPage = Page
  Page = function(options) {
    const { onUnload } = options

    options.onUnload = function() {
      const { router } = getApp()
      const stackLength = getCurrentPages().length
      // fix: 当执行方法为reLaunch时，会清空新传入的参数
      // 所以这里如果stackLength 为 1 时，交由 router 跳转方法清理
      if (router && stackLength > 1) {
        router.clearParams(getCurrentPages().length - 1)
      }

      return onUnload?.call(this)
    }
    return originalPage(options)
  }
}

function patchApp() {
  const originalApp = App
  App = function(options) {
    const { onLaunch } = options
    options.onLaunch = function(launchOptions) {
      setTimeout(() => {
        const { router } = getApp()
        router && router.clearParams()
      }, 0)

      return onLaunch?.call(this, launchOptions)
    }
    return originalApp(options)
  }
}

export function patchMiniprogram() {
  patchApp()
  patchPage()
}
