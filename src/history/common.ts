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

export interface RouterHistory {
  readonly base: string
  push(to: HistoryLocation, data?: HistoryState): void
  replace(to: HistoryLocation, data?: HistoryState): void
  go(delta: number): Promise<unknown>
}
