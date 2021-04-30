import { Router } from '../router'

/**
 * Interface to type `meta` fields in route records
 *
 * @example
 *
 * ```ts
 * // typings.d.ts or router.ts
 * import '@microprogram/router';
 *
 * declare module '@microprogram/router' {
 *   interface RouteMeta {
 *     requiresAuth?: boolean
 *   }
 *  }
 * ```
 */
export interface RouteMeta extends Record<string | number | symbol, unknown> {
  isTab?: boolean
}

export type RouteRecordName = string

export type RouteParamValue = string

export type RouteParamValueRaw = RouteParamValue | number
export type RouteParams = Record<string | number, any>
export type RouteParamsRaw = Record<string, RouteParamValueRaw | RouteParamValueRaw[]>

export interface LocationAsPath {
  path: string
  params?: RouteParams
}

export interface LocationAsName {
  name: string
  params?: RouteParams
}

export interface RouteLocationOptions {
  replace?: boolean
  reLaunch?: boolean
  events?: any
}

export type RouteLocation =
  | string
  | LocationAsPath & RouteLocationOptions
  | LocationAsName & RouteLocationOptions

export interface RouteLocationNormalized {
  name: RouteRecordName | null | undefined
  path: string
  fullPath: string
  fullPagePath: string
  page: string
  params: RouteParams
  meta: RouteMeta
}

export type NavigationGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: (to?: RouteLocation | false) => void
) => any

export declare type NavigationHookAfter = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) => any

export interface RouteRecord {
  /**
   * Route name
   */
  name?: string
  /**
   * Route path
   */
  path: string
  /**
   * Miniprogram real page path
   *
   * @example
   * pages/index/index
   */
  page: string
  meta?: RouteMeta
}

export interface IAppOption {
  router: Router
}
