import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { api } from './api'
import { MD5 } from 'crypto-js'

interface IHttpClient {
  request<T>(
    url: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>>
}

export const httpClient: IHttpClient = {
  request<T>(url: string, options?: AxiosRequestConfig) {
    const publicKey: string = process.env.NEXT_PUBLIC_PUBLIC_KEY ?? ''
    const privateKey: string = process.env.NEXT_PUBLIC_PRIVATE_KEY ?? ''
    const hash: string = MD5(`1${privateKey}${publicKey}`).toString()

    return api.request<T>({
      url,
      method: 'GET',
      params: {
        ts: 1,
        apikey: publicKey,
        hash
      },
      ...options
    })
  }
}
