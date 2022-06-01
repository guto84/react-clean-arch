import { HttpClient } from 'domain/http'
import { HttpClientAdapter, HttpRequest } from 'infra/adapters'
import { FindAllUsersData } from 'application/data'

export const MakeFindAllUsers = () => {
  const httpRequest: HttpRequest = {
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'get'
  }
  const httpClientAdapter = new HttpClientAdapter()
  const httpClient = new HttpClient(httpClientAdapter, httpRequest)

  return new FindAllUsersData(httpClient)
}
