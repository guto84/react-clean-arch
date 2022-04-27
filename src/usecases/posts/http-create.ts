import { CreatePostModel } from 'domain/index'
import { HttpClientAdapter } from 'shared/adapters'

export class HttpCreatePosts implements CreatePostModel {
  constructor(private readonly httpClient: HttpClientAdapter) {}

  async handle(body: CreatePostModel.Body): Promise<CreatePostModel.Result> {
    const response = await this.httpClient.request({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'post',
      data: body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    return response.data
  }
}
