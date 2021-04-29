export interface ICallback<T> {
  add: (handler: T) => () => void
  list: () => T[]
  reset: () => void
}

/**
 * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
 */
export function useCallbacks<T>(): ICallback<T> {
  let handlers: T[] = []

  function add(handler: T): () => void {
    handlers.push(handler)
    return () => {
      const i = handlers.indexOf(handler)

      if (i > -1) { handlers.splice(i, 1) }
    }
  }

  function reset() {
    handlers = []
  }

  return {
    add,
    list: () => handlers,
    reset
  }
}
