import { HttpClientAdapter, HttpRequest } from 'infra/adapters'

export class HttpClient {
  constructor(
    private readonly httpClient: HttpClientAdapter,
    private readonly httpRequest: HttpRequest
  ) {}

  async handle<T, B>(body?: B): Promise<T> {
    try {
      const response = await this.httpClient.request({
        url: this.httpRequest.url,
        method: this.httpRequest.method,
        headers: this.httpRequest.headers,
        data: body
      })
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  }
}
