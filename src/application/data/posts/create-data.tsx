import { HttpClient } from 'domain/http'
import { PostEntity } from 'domain/entities'

export class CreatePostData {
  constructor(private readonly httpClient: HttpClient) {}

  async handle(body: Omit<PostEntity, 'id'>) {
    return await this.httpClient.handle<
      Promise<PostEntity>,
      Omit<PostEntity, 'id'>
    >(body)
  }
}
