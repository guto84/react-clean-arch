import { HttpGetByIdPost } from 'domain/usecases'
import { GetByIdPostData } from 'store'
import { HttpClientAdapter, HttpRequest } from 'infra/adapters'
import { useAppDispatch, useAppSelector } from 'infra/hooks'
import { GetByIdPostController } from 'application/controllers'

export const GetByIdPostFactory = (id: number) => {
  const httpRequest: HttpRequest = {
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    method: 'get'
  }
  const httpClientAdapter = new HttpClientAdapter()
  const getAllPosts = new HttpGetByIdPost(httpClientAdapter, httpRequest)

  const store = new GetByIdPostData(getAllPosts, useAppDispatch, useAppSelector)
  return GetByIdPostController(store)
}

type GetByIdPost = typeof GetByIdPostFactory
export type { GetByIdPost }
