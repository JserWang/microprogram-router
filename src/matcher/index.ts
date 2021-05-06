import { parseURL } from '../location'
import { RouteLocation, RouteRecord, RouteRecordName } from '../types'
import { absolutePath, assign } from '../utils'
import { createRouterError, ErrorTypes, MatcherError } from './../errors'
import { RouteRecordMatcher } from './patchMatcher'

export class RouterMatcher {
  private matchers: RouteRecordMatcher[]
  private nameMatcherMap: Map<RouteRecordName, RouteRecordMatcher>
  private pageMatcherMap: Map<string, RouteRecordMatcher>
  constructor(routes: RouteRecord[]) {
    this.matchers = []
    this.nameMatcherMap = new Map<RouteRecordName, RouteRecordMatcher>()
    this.pageMatcherMap = new Map<string, RouteRecordMatcher>()
    // add initial routes
    routes.forEach(route => this.addRoute(route))
  }

  private addRoute(record: RouteRecord) {
    const normalizedRecord = assign({}, record)
    if (record.children) {
      record.children.forEach(subRecord => this.addRoute({
        ...subRecord,
        page: `${record.root || ''}${absolutePath(subRecord.page!)}`,
        path: `${record.path}${absolutePath(subRecord.path)}`
      }))
      return
    }

    const matcher = new RouteRecordMatcher(normalizedRecord)
    this.insertMatcher(matcher)
  }

  private insertMatcher(matcher: RouteRecordMatcher) {
    this.matchers.push(matcher)
    this.pageMatcherMap.set(matcher.record.page!, matcher)
    // 仅存储带有 name 的 matcher，便于 resolve 时可以快速取值
    if (matcher.name) {
      this.nameMatcherMap.set(matcher.name, matcher)
    }
  }

  private getRouteRecordMatcherByPath(path: string) {
    const result = {
      matcher: undefined as RouteRecordMatcher | undefined,
      dynamicParams: {}
    }

    result.matcher = this.matchers.find((matcher) => {
      const matched = matcher.match(path)
      if (matched) {
        result.dynamicParams = matched
      }
      return matched
    })
    return result
  }

  getRouteRecordMatcherByName(name: string): RouteRecordMatcher | undefined {
    return this.nameMatcherMap.get(name)
  }

  getRouteRecordMatcherByPage(page: string): RouteRecordMatcher | undefined {
    return this.pageMatcherMap.get(page)
  }

  getRoutes(): RouteRecordMatcher[] {
    return this.matchers
  }

  resolve(location: RouteLocation) {
    let locationPath = ''
    let matcher: RouteRecordMatcher | undefined
    let params = {}
    // 当 location 以 string 形式传入
    // 例如： router.push('/foo')
    if (typeof location === 'string') {
      const { path, params: urlParams } = parseURL(location)
      const { matcher: matchedMatcher, dynamicParams } = this.getRouteRecordMatcherByPath(path)

      // 合并动态路由中的参数以及以search方式传入的参数
      // 默认规则：search 传入方式与动态路由传入参数 key 一样时，以 search 为准
      matcher = matchedMatcher
      params = {
        ...dynamicParams,
        ...urlParams
      }
      locationPath = location
    } else if (typeof location === 'object') {
      /**
       * 当 location 以 object的形式传入
       *
       * @example
       * router.push({
       *   name: 'foo', // 或者是 path: '/foo'
       *   params: {
       *    name: JserWang
       *   }
       * })
       */
      if ('name' in location && location.name) {
        matcher = this.nameMatcherMap.get(location.name)
        params = location.params || {}
        locationPath = location.name
      } else if ('path' in location && location.path) {
        const { path, params: urlParams } = parseURL(location.path)
        const { matcher: matchedMatcher, dynamicParams } = this.getRouteRecordMatcherByPath(path)

        matcher = matchedMatcher
        params = {
          ...location.params || {},
          ...dynamicParams,
          ...urlParams
        }
        locationPath = location.path
      }
    }

    if (!matcher) {
      throw createRouterError<MatcherError>(
        ErrorTypes.MATCHER_NOT_FOUND,
        {
          location: locationPath
        }
      )
    }

    return {
      record: matcher.record,
      params
    }
  }
}
