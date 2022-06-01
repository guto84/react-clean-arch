import { HttpClient } from 'domain/http'
import { PostEntity } from 'domain/entities'

export class FindAllPostData {
  constructor(private readonly httpClient: HttpClient) {}

  async handle() {
    return await this.httpClient.handle<PostEntity[], null>()
  }
}
