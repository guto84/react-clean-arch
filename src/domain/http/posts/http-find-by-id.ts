import type { PostEntity } from 'domain/entities'
import { HttpClientAdapter, HttpRequest } from 'infra/adapters'

export class HttpFindByIdPost {
  constructor(
    private readonly httpClient: HttpClientAdapter,
    private readonly httpRequest: HttpRequest
  ) {}

  async handle(): Promise<PostEntity> {
    try {
      const response = await this.httpClient.request(this.httpRequest)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  }
}
