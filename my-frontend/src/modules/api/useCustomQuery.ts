import { useQuery } from '@tanstack/react-query'
import { Path, UseApiOptions, getCacheStrategy } from './axiosClient'
import { useCacheableEndpoint } from './useCacheableEndpoint'

export const useCustomQuery = <T>(path: Path, options?: UseApiOptions) => {
  const apiFn = useCacheableEndpoint<T>()

  const query = useQuery({
    queryKey: [path],
    queryFn: () => apiFn(path, options),
    enabled: options?.enabled === false ? false : true,
    meta: options?.meta,
    ...getCacheStrategy(),
  })

  return query
}
