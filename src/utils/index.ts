import { NavigationGuard } from '../types'

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
