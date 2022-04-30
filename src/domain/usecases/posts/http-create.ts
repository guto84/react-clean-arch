import { PostEntity } from 'domain/entities'
import { HttpClientAdapter, HttpRequest } from 'infra/adapters'

export class HttpCreatePost {
  constructor(
    private readonly httpClient: HttpClientAdapter,
    private readonly httpRequest: HttpRequest
  ) {}

  async handle(body: Omit<PostEntity, 'id'>): Promise<PostEntity> {
    const response = await this.httpClient.request({
      url: this.httpRequest.url,
      method: this.httpRequest.method,
      data: body,
      headers: this.httpRequest.headers
    })
    return response.data
  }
}
