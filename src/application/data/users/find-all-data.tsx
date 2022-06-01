import { HttpClient } from 'domain/http'
import { UserEntity } from 'domain/entities'

export class FindAllUsersData {
  constructor(private readonly httpClient: HttpClient) {}

  async handle() {
    return await this.httpClient.handle<UserEntity[], null>()
  }
}
