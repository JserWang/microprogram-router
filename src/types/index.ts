export interface RouteMeta extends Record<string | number | symbol, unknown> {}

export type RouteParamValue = string

export type RouteParamValueRaw = RouteParamValue | number
export type RouteParams = Record<string, RouteParamValue | RouteParamValue[]>
export type RouteParamsRaw = Record<string, RouteParamValueRaw | RouteParamValueRaw[]>

export interface LocationAsName {
  name: string
  params?: RouteParams
}

export interface RouteLocationOptions {
  replace?: boolean
  reLaunch?: boolean
  events?: any
}

export type RouteLocation = LocationAsName & RouteLocationOptions

export interface RouteLocationNormalized {
  name: string
  path: string
  fullPath: string
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
  path: string
  name: string
  meta?: RouteMeta
}
