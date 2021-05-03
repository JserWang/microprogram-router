export const { assign } = Object

export const noop = () => {}

export function absolutePath(path: string) {
  return path.startsWith('/') ? path : `/${path}`
}

export function promisify(func: any) {
  if (typeof func !== 'function') {
    return func
  }
  return (args = {}) =>
    new Promise((resolve, reject) => {
      func(
        Object.assign(args, {
          success: resolve,
          fail: reject
        })
      )
    })
}
