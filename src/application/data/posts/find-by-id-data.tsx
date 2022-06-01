import { PostEntity } from 'domain/entities'
import { HttpClient } from 'domain/http'

export class FindByIdPostData {
  constructor(private readonly httpClient: HttpClient) {}
  async handle() {
    return await this.httpClient.handle<PostEntity, null>()
  }
}
