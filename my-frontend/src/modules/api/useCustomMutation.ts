import { useMutation } from '@tanstack/react-query'
import { Path, UseApiOptions, axiosClient } from './axiosClient'
import { useCallback } from 'react'

const useEndpoint = <T, B>() => {
  return useCallback(async (path: Path, payload: B, options?: UseApiOptions) => {
    const apiFn =
      options?.method === 'DELETE'
        ? axiosClient.delete
        : options?.method === 'PUT'
          ? axiosClient.put
          : axiosClient.post
    const response = await apiFn<T>(path, payload, { headers: options?.headers })

    return response.data
  }, [])
}

export const useCustomMutation = <T, B>(path: Path, options?: UseApiOptions) => {
  const apiFn = useEndpoint<T, B>()

  const mutation = useMutation({
    mutationKey: [path],
    mutationFn: (body: B) => apiFn(path, body, options),
    meta: options?.meta,
  })

  return mutation
}
