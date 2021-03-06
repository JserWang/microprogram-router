import { Router } from '../router'

export type Lazy<T> = () => Promise<T>

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
export interface RouteMeta extends Record<string | number | symbol, unknown> {}

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
  from: RouteLocationNormalized
) => any

export declare type NavigationHookAfter = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) => any

export interface RouteRecord {
  /**
   * 路由别名
   */
  name?: RouteRecordName
  /**
   * 路由地址
   */
  path: string
  /**
   * 小程序的真实页面地址
   *
   * @example
   * pages/index/index
   */
  page?: string
  meta?: RouteMeta
  /**
   * 分包的根路径
   */
  root?: string
  children?: RouteRecord[]
}

export interface IAppOption {
  router: Router
}

export interface NavigationGuardNext {
  (): void
  (error: Error): void
  (location: RouteLocation): void
  (valid: boolean): void
}
