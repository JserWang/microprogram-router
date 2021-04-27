import { RouterHistory } from './history/common'
import { createWechatHistory } from './history/wechat'
import {
  NavigationGuard,
  NavigationHookAfter,
  RouteLocation,
  RouteLocationNormalized,
  RouteParams,
  RouteRecord
} from './types'
import { ICallback, useCallbacks } from './utils/callbacks'
import { runGuardQueue } from './utils/index'

export interface RouterOptions {
  history: RouterHistory
  routes: RouteRecord[]
}

export interface IRouter {
  // readonly currentRoute;
  beforeEach(guard: NavigationGuard): () => void
  afterEach(guard: NavigationHookAfter): () => void
  push(
    location: RouteLocation
  ): Promise<any>
  back(): ReturnType<IRouter['go']>
  go(delta: number): Promise<any>
  getCurrentRoute: () => RouteLocationNormalized
}

export const obj2Params = (
  obj: Record<string, string | number | boolean>,
  encode = false
) => {
  const result: string[] = []

  Object.keys(obj).forEach(key =>
    result.push(`${key}=${encode ? encodeURIComponent(obj[key]) : obj[key]}`)
  )

  return result.join('&')
}

export class Router implements IRouter {
  private routes: RouteRecord[] = []

  private stackLength: number

  private history: RouterHistory

  private beforeGuards: ICallback<NavigationGuard>

  private afterGuards: ICallback<NavigationHookAfter>

  public static MAX_STACK_LENGTH = 10

  constructor(options: RouterOptions) {
    if (options.routes) {
      this.routes = options.routes
    }
    this.beforeGuards = useCallbacks<NavigationGuard>()
    this.afterGuards = useCallbacks<NavigationHookAfter>()
    this.history = options.history || createWechatHistory()
    this.stackLength = 0
  }

  private triggerAfterEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    for (const guard of this.afterGuards.list()) {
      guard(to, from)
    }
  }

  private changeLocation(location: RouteLocation): Promise<any> {
    return new Promise((resolve, reject) => {
      const route = this.routes.find(item => item.name === location.name)

      if (!route) {
        reject(new Error(`未找到路由:${location.name}`))
        return
      }

      const currentRoute = this.getCurrentRoute()
      const toRoute = this.normalizedRoute(route, location.params || {})

      if (
        !location.replace
        && !location.reLaunch
        && route.meta
        && !route.meta.isTab
        && this.stackLength >= Router.MAX_STACK_LENGTH
      ) {
        // 超出最大路由数，改用replace
        location.replace = true
      }

      const iterator = (guard: NavigationGuard, next: Function) => {
        guard(toRoute, currentRoute, async(v) => {
          if (typeof v === 'object') {
            try {
              await this.changeLocation(v)
            } catch (error) {
              reject(error)
            }
          } else {
            next()
          }
        })
      }

      runGuardQueue(this.beforeGuards.list(), iterator, async() => {
        try {
          let result

          if (location.replace) {
            result = await this.history.replace(toRoute.fullPath)
          } else {
            result = await this.history.push(`/${toRoute.fullPath}`, {
              isTab: toRoute.meta?.isTab || false,
              reLaunch: location.reLaunch,
              events: location.events
            })
          }
          resolve(result)
          this.triggerAfterEach(toRoute, currentRoute)
        } catch (error) {
          reject(error)
        }
      })
    })
  }

  private normalizedRoute(
    routeRecord: RouteRecord,
    params: RouteParams
  ): RouteLocationNormalized {
    const queryStr = params ? `?_params=${encodeURI(JSON.stringify(params))}` : ''
    const fullPath = `${routeRecord.path}${queryStr}`

    return {
      name: routeRecord.name,
      path: routeRecord.path,
      fullPath,
      params: Object.assign({}, params),
      meta: routeRecord.meta || {}
    }
  }

  private getRouteByPath(path: string) {
    if (path.includes('?')) {
      path = path.substring(0, path.indexOf('?'))
    }
    return this.routes.find(item => item.path === path)
  }

  beforeEach(guard: NavigationGuard): () => void {
    return this.beforeGuards.add(guard)
  }

  afterEach(guard: NavigationHookAfter): () => void {
    return this.afterGuards.add(guard)
  }

  push(location: RouteLocation) {
    return this.changeLocation(location)
  }

  back() {
    return this.history.go(1)
  }

  go(delta: number) {
    delta = delta < 1 ? 1 : delta
    return this.history.go(delta)
  }

  getCurrentRoute() {
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]

    this.stackLength = pages.length
    const routeRecord = this.getRouteByPath(currentPage.route)

    if (!routeRecord) {
      throw new Error(`当前页面${currentPage.route}对应的路由未配置`)
    }
    return this.normalizedRoute(
      routeRecord,
      this.decodeParams(currentPage.options)
    )
  }

  decodeParams(options: any) {
    if (options._params) {
      return JSON.parse(decodeURI(options._params))
    }
  }
}
