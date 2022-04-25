import { GetByIdPostsModel } from 'domain/models'

import { HttpClientAdapter } from 'shared/adapters'

export class GetByIdPostsUsecase implements GetByIdPostsModel {
  constructor(private readonly httpClient: HttpClientAdapter) {}

  async handle(id: number): Promise<GetByIdPostsModel.Result> {
    const response = await this.httpClient.request({
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      method: 'get'
    })
    return response.data
  }
}
