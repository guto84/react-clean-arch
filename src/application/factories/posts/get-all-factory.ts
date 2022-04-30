import { HttpGetAllPosts } from 'domain/usecases'
import { GetAllPostsData } from 'store'
import { HttpClientAdapter, HttpRequest } from 'infra/adapters'
import { useAppDispatch, useAppSelector } from 'infra/hooks'
import { GetAllPostController } from 'application/controllers'

export const GetAllPostFactory = () => {
  const httpRequest: HttpRequest = {
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'get'
  }
  const httpClientAdapter = new HttpClientAdapter()
  const getAllPosts = new HttpGetAllPosts(httpClientAdapter, httpRequest)

  const store = new GetAllPostsData(getAllPosts, useAppDispatch, useAppSelector)
  return GetAllPostController(store)
}
