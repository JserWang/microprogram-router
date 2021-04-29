import { RouteRecord } from '../types'
import { Key, pathToRegexp } from './pathToRegexp'

export interface RouteMatched {
  record: RouteRecord
  params: Record<string | number, any>
}

export interface RouteRecordMatcher {
  keys: Key[]
  reg: RegExp
  record: RouteRecord
  match: (path: string) => RouteMatched | undefined
}

export function createRouteRecordMatcher(record: Readonly<RouteRecord>): RouteRecordMatcher {
  const keys: Key[] = []
  const regexp = pathToRegexp(record.path, keys)

  function match(path: string): RouteMatched | undefined {
    const result = path.match(regexp)
    if (!result) {
      return
    }

    const params: RouteMatched['params'] = {}
    keys.forEach((key, index) => {
      params[key.name] = result[index + 1]
    })

    return {
      record,
      params
    }
  }

  return {
    keys,
    reg: regexp,
    record,
    match
  }
}
