import { GetAllPostModel } from 'domain/index'
import { HttpClientAdapter } from 'shared/adapters'

export class HttpGetAllPosts implements GetAllPostModel {
  constructor(private readonly httpClient: HttpClientAdapter) {}

  async handle(): Promise<GetAllPostModel.Result[]> {
    const response = await this.httpClient.request({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'get'
    })
    return response.data
  }
}
