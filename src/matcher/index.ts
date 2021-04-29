import { parseURL } from '../location'
import { RouteLocation, RouteRecord, RouteRecordName } from '../types'
import { assign } from '../utils'
import { createRouteRecordMatcher, RouteMatched, RouteRecordMatcher } from './patchMatcher'

export interface RouterMatcher {
  resolve: (location: RouteLocation) => RouteMatched | undefined
  getRoutes: () => RouteRecordMatcher[]
  getRecordMatcher: (name: RouteRecordName) => RouteRecordMatcher | undefined
}

export function createRouterMatcher(routes: RouteRecord[]): RouterMatcher {
  const matchers: RouteRecordMatcher[] = []
  const matcherMap = new Map<RouteRecordName, RouteRecordMatcher>()

  function addRoute(record: RouteRecord) {
    const normalizedRecord = assign({}, record)
    const matcher = createRouteRecordMatcher(normalizedRecord)

    insertMatcher(matcher)
  }

  function getRecordMatcher(name: RouteRecordName) {
    return matcherMap.get(name)
  }

  function getRoutes() {
    return matchers
  }

  function insertMatcher(matcher: RouteRecordMatcher) {
    matchers.push(matcher)
    // only add the original record to the name map
    if (matcher.record.name) {
      matcherMap.set(matcher.record.name, matcher)
    }
  }

  function getRouteByPath(location: string): RouteMatched | undefined {
    let result
    matchers.some((matcher) => {
      const matched = matcher.match(location)
      if (matched) {
        result = matched
        return true
      }
      return false
    })

    return result
  }

  function resolve(location: RouteLocation): RouteMatched | undefined {
    let result: RouteMatched | undefined
    let errorMsg = ''
    if (typeof location === 'string') {
      const { path, params } = parseURL(location)
      result = getRouteByPath(path)
      if (result) {
        result.params = {
          ...result?.params,
          ...params
        }
      }
      errorMsg = location
    } else if (typeof location === 'object') {
      if ('name' in location && location.name) {
        const matcher = matcherMap.get(location.name)
        if (matcher) {
          result = {
            record: matcher.record,
            params: location.params || {}
          }
        }
        errorMsg = location.name
      } else if ('path' in location && location.path) {
        const { path, params } = parseURL(location.path)
        const route = getRouteByPath(path)
        if (route) {
          result = {
            record: route.record,
            params: {
              ...location.params,
              ...route.params,
              ...params
            }
          }
        }
        errorMsg = location.path
      }
    }

    if (!result) {
      throw new Error(`Cannot found route: ${errorMsg}`)
    }
    return result
  }

  // add initial routes
  routes.forEach(route => addRoute(route))

  return {
    resolve,
    getRoutes,
    getRecordMatcher
  }
}
