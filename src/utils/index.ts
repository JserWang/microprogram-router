import { NavigationGuard } from '../types'

export const { assign } = Object

export const noop = () => {}

export function runGuardQueue(
  queue: NavigationGuard[],
  fn: Function,
  cb: Function
) {
  const step = (index: number) => {
    if (index >= queue.length) {
      cb()
    } else if (queue[index]) {
      fn(queue[index], () => {
        step(index + 1)
      })
    } else {
      step(index + 1)
    }
  }

  step(0)
}

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
