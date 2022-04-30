import axios from 'axios'

export type HttpRequest = {
  url: string
  method: HttpMethod
  data?: any
  headers?: any
  params?: any
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}

export type HttpResponse<T = any> = {
  status: HttpStatusCode
  data?: T
}

export class HttpClientAdapter implements HttpClient {
  async request(data: HttpRequest): Promise<any> {
    return await axios.request({
      url: data.url,
      method: data.method,
      data: data.data,
      headers: data.headers
    })
  }
}
