import { LocationQuery, parseQuery } from './query'

interface LocationNormalized {
  path: string
  fullPath: string
  params: LocationQuery
}

export function parseURL(location: string): LocationNormalized {
  let path = location
  let params: LocationNormalized['params'] = {}
  let searchString = ''

  const searchPos = location.indexOf('?')
  if (searchPos > -1) {
    path = location.slice(0, searchPos)
    searchString = location.slice(searchPos + 1, location.length)
    params = parseQuery(searchString)
  }

  return {
    fullPath: path + (searchString && '?') + searchString,
    path,
    params
  }
}
