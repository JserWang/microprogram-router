import { RouteLocation, RouteLocationNormalized } from './types'
import { assign } from './utils'

export const enum ErrorTypes {
  // they must be literals to be used as values so we can't write
  // 1 << 2
  MATCHER_NOT_FOUND = 1,
  NAVIGATION_GUARD_REDIRECT = 2,
  NAVIGATION_ABORTED = 4,
  NAVIGATION_CANCELLED = 8,
  NAVIGATION_DUPLICATED = 16,
}

export interface MatcherError extends Error {
  type: ErrorTypes.MATCHER_NOT_FOUND
  location: string
}

export interface NavigationFailure extends Error {
  /**
   * Type of the navigation. One of {@link NavigationFailureType}
   */
  type:
  | ErrorTypes.NAVIGATION_CANCELLED
  | ErrorTypes.NAVIGATION_ABORTED
  | ErrorTypes.NAVIGATION_DUPLICATED
  /**
   * Route location we were navigating from
   */
  from: RouteLocationNormalized
  /**
   * Route location we were navigating to
   */
  to: RouteLocationNormalized
}

export interface NavigationRedirectError
  extends Omit<NavigationFailure, 'to' | 'type'> {
  type: ErrorTypes.NAVIGATION_GUARD_REDIRECT
  to: RouteLocation
}

// Possible internal errors
type RouterError = NavigationFailure | NavigationRedirectError | MatcherError

const ErrorTypeMessages = {
  [ErrorTypes.MATCHER_NOT_FOUND]({ location }: MatcherError) {
    return `No match for\n ${JSON.stringify(location)}`
  },
  [ErrorTypes.NAVIGATION_GUARD_REDIRECT]({
    from,
    to
  }: NavigationRedirectError) {
    return `Redirected from "${from.fullPath}" to "${stringifyRoute(
      to
    )}" via a navigation guard.`
  },
  [ErrorTypes.NAVIGATION_ABORTED]({ from, to }: NavigationFailure) {
    return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`
  },
  [ErrorTypes.NAVIGATION_CANCELLED]({ from, to }: NavigationFailure) {
    return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`
  },
  [ErrorTypes.NAVIGATION_DUPLICATED]({ from }: NavigationFailure) {
    return `Avoided redundant navigation to current location: "${from.fullPath}".`
  }
}

export function createRouterError<E extends RouterError>(
  type: E['type'],
  params: Omit<E, 'type' | keyof Error>
): E {
  return assign(
    new Error(ErrorTypeMessages[type](params as any)),
    {
      type,
      nf: true
    } as { type: typeof type },
    params
  ) as E
}

/**
 * Check if an object is a {@link NavigationFailure}.
 *
 * @example
 * ```js
 * import { isNavigationFailure, NavigationFailureType } from 'vue-router'
 *
 * router.afterEach((to, from, failure) => {
 *   // Any kind of navigation failure
 *   if (isNavigationFailure(failure)) {
 *     // ...
 *   }
 *   // Only duplicated navigations
 *   if (isNavigationFailure(failure, NavigationFailureType.duplicated)) {
 *     // ...
 *   }
 *   // Aborted or canceled navigations
 *   if (isNavigationFailure(failure, NavigationFailureType.aborted | NavigationFailureType.canceled)) {
 *     // ...
 *   }
 * })
 * ```
 * @param error - possible {@link NavigationFailure}
 * @param type - optional types to check for
 */
export function isNavigationFailure(
  error: any,
  type?: ErrorTypes.NAVIGATION_GUARD_REDIRECT
): error is NavigationRedirectError
export function isNavigationFailure(
  error: any,
  type?: number
): error is NavigationFailure {
  return (
    error instanceof Error
    && (type == null || !!((error as NavigationFailure).type & type))
  )
}

function stringifyRoute(to: RouteLocation): string {
  if (typeof to === 'string') { return to }
  if ('path' in to) { return to.path }
  const location = {} as Record<string, unknown>
  return JSON.stringify(location, null, 2)
}
