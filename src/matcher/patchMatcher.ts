import { Key, pathToRegexp } from 'path-to-regexp'
import { RouteRecord } from '../types'

export class RouteRecordMatcher {
  name: string
  keys: Key[]
  regexp: RegExp
  record: RouteRecord
  constructor(record: RouteRecord) {
    this.record = record
    this.keys = []
    this.name = record.name || ''
    this.regexp = pathToRegexp(record.path, this.keys)
  }

  match(path: string) {
    const matched = path.match(this.regexp)
    if (matched) {
      const params: Record<string | number, any> = {}
      this.keys.forEach((key, index) => {
        params[key.name] = matched[index + 1]
      })
      return params
    }
    return null
  }
}
