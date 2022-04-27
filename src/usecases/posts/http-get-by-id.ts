import { GetByIdPostModel } from 'domain/index'
import { HttpClientAdapter } from 'shared/adapters'

export class HttpGetByIdPosts implements GetByIdPostModel {
  constructor(private readonly httpClient: HttpClientAdapter) {}

  async handle(id: number): Promise<GetByIdPostModel.Result> {
    const response = await this.httpClient.request({
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      method: 'get'
    })
    return response.data
  }
}
