import { useCallback } from 'react'
import { Path, UseApiOptions, axiosClient } from './axiosClient'

export const useCacheableEndpoint = <T>() => {
  return useCallback(async (path: Path, options?: UseApiOptions) => {
    if (options?.cacheable) {
      const cacheKey = 'xxxxx'
      const [originPath, originalQueryParams] = path.split('?')
      const queryParams = new URLSearchParams(originalQueryParams)
      queryParams.set('cache-token', cacheKey)
      path = `${originPath}?${queryParams.toString()}` as Path
    }

    const response = await axiosClient.get<T>(path, { headers: options?.headers })

    return response.data
  }, [])
}
