import { HttpClient } from 'domain/http'
import { HttpClientAdapter, HttpRequest } from 'infra/adapters'
import { FindAllPostData } from 'application/data'

export const MakeFindAllPosts = () => {
  const httpRequest: HttpRequest = {
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'get'
  }
  const httpClientAdapter = new HttpClientAdapter()
  const httpClient = new HttpClient(httpClientAdapter, httpRequest)

  return new FindAllPostData(httpClient)
}
