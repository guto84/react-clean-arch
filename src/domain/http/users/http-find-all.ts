import type { UserEntity } from 'domain/entities'
import { HttpClientAdapter, HttpRequest } from 'infra/adapters'

export class HttpFindAllUsers {
  constructor(
    private readonly httpClient: HttpClientAdapter,
    private readonly httpRequest: HttpRequest
  ) {}

  async handle(): Promise<UserEntity[]> {
    try {
      const response = await this.httpClient.request(this.httpRequest)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.error)
    }
  }
}
