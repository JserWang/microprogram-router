import { Router } from './router'
import { IAppOption, RouteLocationNormalized } from './types/index'

export function useRouter(): Router {
  return getApp<IAppOption>().router
}

/**
 * TODO: 从router的currentRoute获取
 * @returns
 */
export function useRoute(): RouteLocationNormalized {
  return useRouter().getCurrentRoute()
}
