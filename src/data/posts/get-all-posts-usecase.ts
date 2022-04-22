import { GetAllPostsModel } from 'domain/models'

import { HttpClientAdapter } from 'shared/adapters'

export class GetAllPostsUsecase implements GetAllPostsModel {
  constructor(private readonly httpClient: HttpClientAdapter) {}

  async handle(): Promise<GetAllPostsModel.Result[]> {
    const response = await this.httpClient.request({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'get'
    })
    return response.data
  }
}
