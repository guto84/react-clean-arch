import { LoginEntity } from 'domain/entities'
import { HttpClientAdapter, HttpRequest } from 'infra/adapters'

export type Body = {
  email: string
  password: string
}

export class HttpLogin {
  constructor(
    private readonly httpClient: HttpClientAdapter,
    private readonly httpRequest: HttpRequest
  ) {}

  async handle(body: Body): Promise<LoginEntity> {
    try {
      const response = await this.httpClient.request({
        url: this.httpRequest.url,
        method: this.httpRequest.method,
        data: body
      })
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  }
}
