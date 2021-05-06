function patchApp() {
  const originalApp = App
  App = function(options) {
    const { onLaunch } = options
    /**
     * 小程序初始化后，清空已经在storage中存储的参数
     * @param launchOptions
     * @returns
     */
    options.onLaunch = function(launchOptions) {
      // 使用 setTimeout 因为 getApp() is undefined
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
}
