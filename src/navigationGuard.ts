import { createRouterError, ErrorTypes, NavigationFailure, NavigationRedirectError } from './errors'
import { NavigationGuard, NavigationGuardNext, RouteLocation, RouteLocationNormalized } from './types'
import { isRouteLocation } from './types/typeGuards'

export function guardToPromiseFn(guard: NavigationGuard, to: RouteLocationNormalized, from: RouteLocationNormalized): () => Promise<void> {
  return () => new Promise((resolve, reject) => {
    const next: NavigationGuardNext = (valid?: boolean | RouteLocation | Error) => {
      if (valid === false) {
        reject(
          createRouterError<NavigationFailure>(
            ErrorTypes.NAVIGATION_ABORTED,
            {
              from,
              to
            }
          )
        )
      } else if (valid instanceof Error) {
        reject(valid)
      } else if (isRouteLocation(valid)) {
        reject(
          createRouterError<NavigationRedirectError>(
            ErrorTypes.NAVIGATION_GUARD_REDIRECT,
            {
              from: to,
              to: valid
            }
          )
        )
      } else {
        resolve()
      }
    }

    // eslint-disable-next-line no-useless-call
    const guardReturn = guard.call(null, to, from)

    let guardCall = Promise.resolve(guardReturn)

    if (guard.length < 3) {
      guardCall = guardCall.then(next)
    }
    guardCall.catch(err => reject(err))
  })
}
