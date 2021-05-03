import { RouteParams } from '../types'

/* eslint-disable no-use-before-define */
export type HistoryLocation = string

type HistoryStateValue =
  | string
  | number
  | boolean
  | null
  | any
  | undefined
  | HistoryState
  | HistoryStateArray

interface HistoryStateArray extends Array<HistoryStateValue> {}

export interface HistoryState {
  [x: number]: HistoryStateValue
  [x: string]: HistoryStateValue
}

export interface CurrentRoute {
  route: string
  params: RouteParams
}

export interface RouterHistory {
  readonly MAX_STACK_LENGTH: number
  push(to: HistoryLocation, data?: HistoryState): void
  replace(to: HistoryLocation, data?: HistoryState): void
  go(delta: number): Promise<unknown>
  switchTab(to: HistoryLocation): Promise<unknown>
  reLaunch(to: HistoryLocation): Promise<unknown>
  getCurrentRoute(): CurrentRoute
  getRoutes(): any[]
  setParams(page: string, params: any): void
  getParams(page: string): any
  removeParams(key: string): void
  removeParamsByPrefix(prefix: string): void
}
