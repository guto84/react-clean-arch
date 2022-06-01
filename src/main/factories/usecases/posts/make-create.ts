import { HttpClient } from 'domain/http'
import { HttpClientAdapter, HttpRequest } from 'infra/adapters'
import { CreatePostData } from 'application/data'

export const MakeCreatePost = () => {
  const httpRequest: HttpRequest = {
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'post'
  }
  const httpClientAdapter = new HttpClientAdapter()
  const httpClient = new HttpClient(httpClientAdapter, httpRequest)

  return new CreatePostData(httpClient)
}
