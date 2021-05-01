function patchPage() {
  const originalPage = Page
  Page = function(options) {
    const { onUnload } = options

    options.onUnload = function() {
      const { router } = getApp()
      router && router.clearParams(getCurrentPages().length - 1)

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
