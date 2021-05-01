export function patchPage() {
  const originalPage = Page
  Page = function(options) {
    const { onUnload } = options

    options.onUnload = function() {
      const { router } = getApp()
      router && router.clearParams(this.route)

      return onUnload?.call(this)
    }
    return originalPage(options)
  }
}
