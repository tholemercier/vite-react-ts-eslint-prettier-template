import axios, { AxiosHeaders } from 'axios'

export const axiosClient = axios.create()

// One Minute
const globalStaleTime = 60000
export const getCacheStrategy = (staleTime?: number, cacheTime?: number) => ({
  cacheTime: (cacheTime ?? staleTime ?? globalStaleTime) * 2,
  staleTime: staleTime ?? globalStaleTime,
  refetchInterval: staleTime ?? globalStaleTime,
})

export type UseApiOptions = {
  cacheable?: boolean
  enabled?: boolean
  meta?: {
    successMessage?: string
    errorMessage?: string
  }
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: AxiosHeaders
}

export type Path = `/${string}`
