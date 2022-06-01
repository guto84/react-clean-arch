import { useParams } from 'react-router-dom'
import { HttpClient } from 'domain/http'
import { HttpClientAdapter, HttpRequest } from 'infra/adapters'
import { FindByIdPostData } from 'application/data'

export const MakeFindByIdPost = () => {
  const params = useParams()

  const httpRequest: HttpRequest = {
    url: `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    method: 'get'
  }
  const httpClientAdapter = new HttpClientAdapter()
  const httpClient = new HttpClient(httpClientAdapter, httpRequest)

  return new FindByIdPostData(httpClient)
}
