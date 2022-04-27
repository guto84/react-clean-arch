import { GetAllUserModel } from 'domain/index'
import { HttpClientAdapter } from 'shared/adapters'

export class HttpGetAllUsers implements GetAllUserModel {
  constructor(private readonly httpClient: HttpClientAdapter) {}

  async handle(): Promise<GetAllUserModel.Result[]> {
    const response = await this.httpClient.request({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'get'
    })
    return response.data
  }
}
