
import { RouterHistory } from './history/common'
import { parseURL } from './location'
import { RouterMatcher } from './matcher'
import { patchMiniprogram } from './patchMiniprogram'
import { stringifyQuery } from './query'
import {
  NavigationGuard,
  NavigationHookAfter,
  RouteLocation,
  RouteLocationNormalized,
  RouteRecord,
  RouteRecordName
} from './types'
import { assign, runGuardQueue } from './utils'
import { useCallbacks } from './utils/callbacks'

export interface RouterOptions {
  history: RouterHistory
  routes: RouteRecord[]
}

const STORAGE_KEY_PREFIX = 'MP_ROUTE_PARAMS_'

export interface Router {
  /**
   * Original options object passed to create the Router
   */
  readonly options: RouterOptions
  /**
   * Checks if a route with a given name exists
   *
   * @param name - Name of the route to check
   */
  hasRoute(name: RouteRecordName): boolean
  /**
   * Get a full list of all the {@link RouteRecord | route records}.
   */
  getRoutes(): RouteRecord[]
  /**
   * Programmatically navigate to a new URL by pushing an entry in the history
   * stack.
   *
   * @param to - Route location to navigate to
   */
  push(to: RouteLocation): Promise<unknown>
  /**
   * Programmatically navigate to a new URL by replacing the current entry in
   * the history stack.
   *
   * @param to - Route location to navigate to
   */
  replace(to: RouteLocation): Promise<unknown>
  /**
    * Go back in history if possible by calling `history.back()`. Equivalent to
    * `router.go(-1)`.
    */
  back(): ReturnType<Router['go']>
  /**
   * Allows you to move forward or backward through the history. Calls
   * `history.go()`.
   *
   * @param delta - The position in the history to which you want to move,
   * relative to the current page
   */
  go(delta: number): void
  /**
   * Add a navigation guard that executes before any navigation. Returns a
   * function that removes the registered guard.
   *
   * @param guard - navigation guard to add
   */
  beforeEach(guard: NavigationGuard): () => void

  /**
   * Add a navigation hook that is executed after every navigation. Returns a
   * function that removes the registered hook.
   *
   * @example
   * ```js
   * router.afterEach((to, from, failure) => {
   *   if (isNavigationFailure(failure)) {
   *     console.log('failed navigation', failure)
   *   }
   * })
   * ```
   *
   * @param guard - navigation hook to add
   */
  afterEach(guard: NavigationHookAfter): () => void

  getCurrentRoute(): RouteLocationNormalized

  clearParams(index?: number): void
}

export function createRouter(this: any, options: RouterOptions): Router {
  const matcher = new RouterMatcher(options.routes)
  const routerHistory = options.history
  const beforeGuards = useCallbacks<NavigationGuard>()
  const afterGuards = useCallbacks<NavigationHookAfter>()

  function getRoutes() {
    return matcher.getRoutes().map(routeMatcher => routeMatcher.record)
  }

  function hasRoute(name: RouteRecordName): boolean {
    return !!matcher.getRouteRecordMatcherByName(name)
  }

  function triggerAfterEach(to: RouteLocationNormalized, from: RouteLocationNormalized): void {
    for (const guard of afterGuards.list()) {
      guard(to, from)
    }
  }

  function normalizeRoute(route: {record: RouteRecord; params: any}): RouteLocationNormalized {
    const searchString = `${Object.keys(route.params).length > 0 ? `?${stringifyQuery(route.params)}` : ''}`
    return {
      name: route.record?.name || '',
      path: route.record?.path || '',
      page: route.record?.page || '',
      fullPath: `${route.record?.path}${searchString}`,
      fullPagePath: `${route.record?.page}${searchString}`,
      params: route.params,
      meta: route.record?.meta || {}
    }
  }

  function findPageInStack(page: string) {
    const currentRoutes = routerHistory.getRoutes()
    const routes = currentRoutes.map(page => page.route) as string[]
    const targetIndex = routes.indexOf(page)
    // eslint-disable-next-line unicorn/prefer-includes
    if (targetIndex > -1) {
      return {
        page: currentRoutes[targetIndex],
        index: targetIndex,
        delta: currentRoutes.length - targetIndex + 1
      }
    }
    return null
  }

  function push(to: RouteLocation): Promise<unknown> {
    return new Promise((resolve, reject) => {
      const route = matcher.resolve(to)
      if (!route) {
        return reject(new Error(`Cannot found route: ${to}`))
      }

      const currentStackLength = routerHistory.getRoutes().length
      const currentRoute = getCurrentRoute()
      const currentIndex = currentStackLength - 1
      const toRoute = normalizeRoute(route)
      const toIndex = currentStackLength
      // switchTab 跳转时，不会触发path onUnload
      if (currentRoute.meta?.isTab) {
        routerHistory.removeParams(`${STORAGE_KEY_PREFIX}${currentIndex}`)
      }

      if (route.params && Object.keys(route.params).length > 0) {
        routerHistory.setParams(`${STORAGE_KEY_PREFIX}${toIndex}`, route.params || {})
      }

      // 当跳转目标页与当前页相同时，不去路由栈中查找
      if (toRoute.page !== currentRoute.page) {
        const found = findPageInStack(toRoute.page)
        // When target page in the page stack，run back
        if (found && found.index > -1) {
          found.page.options = toRoute.params
          return routerHistory.go(found.delta)
        }
      }

      // Use replace when current page stack length >= max
      if (routerHistory.getRoutes().length >= routerHistory.MAX_STACK_LENGTH) {
        to.replace = true
      }

      const iterator = (guard: NavigationGuard, next: Function) => {
        guard(toRoute, currentRoute, async(v) => {
          if (typeof v === 'object') {
            try {
              await push(v)
            } catch (error) {
              reject(error)
            }
          } else {
            next()
          }
        })
      }

      runGuardQueue(beforeGuards.list(), iterator, async() => {
        try {
          let result
          if (typeof to !== 'string' && to.replace) {
            result = await routerHistory.replace(`/${toRoute.fullPagePath}`)
          } else if (typeof to !== 'string' && to.reLaunch) {
            result = routerHistory.reLaunch(`/${toRoute.fullPagePath}`)
          } else if (toRoute.meta?.isTab) {
            result = routerHistory.switchTab(`/${toRoute.fullPagePath}`)
          } else {
            result = await routerHistory.push(`/${toRoute.page}`, {
              events: (to as any).events
            })
          }
          resolve(result)
          triggerAfterEach(toRoute, currentRoute)
        } catch (error) {
          reject(error)
        }
      })
    })
  }

  function replace(to: RouteLocation | RouteLocationNormalized) {
    return push(assign(locationAsObject(to), { replace: true }))
  }

  function locationAsObject(
    to: RouteLocation | RouteLocationNormalized
  ): Exclude<RouteLocation, string> | RouteLocationNormalized {
    return typeof to === 'string'
      ? parseURL(to)
      : assign({}, to)
  }

  const go = (delta: number) => routerHistory.go(delta)

  function getCurrentRoute(): RouteLocationNormalized {
    const page = routerHistory.getCurrentRoute()
    const recordMatcher = matcher.getRouteRecordMatcherByPage(page.route)
    if (recordMatcher) {
      return normalizeRoute({
        record: recordMatcher.record,
        params: routerHistory.getParams(`${STORAGE_KEY_PREFIX}${routerHistory.getRoutes().length - 1}`) || {}
      })
    }

    return {
      name: '',
      path: '',
      fullPath: '',
      fullPagePath: '',
      page: '',
      params: {},
      meta: {}
    }
  }

  function clearParams(index?: number) {
    if (index) {
      routerHistory.removeParams(`${STORAGE_KEY_PREFIX}${index}`)
    } else {
      routerHistory.removeParamsByPrefix(`${STORAGE_KEY_PREFIX}`)
    }
  }

  patchMiniprogram()

  return {
    options,
    hasRoute,
    getRoutes,
    push,
    replace,
    back: () => go(1),
    go,
    beforeEach: beforeGuards.add,
    afterEach: afterGuards.add,
    getCurrentRoute,
    clearParams
  }
}
