import { HttpFindByIdPost } from 'domain/http'
import { FindByIdPostData } from 'store'
import { HttpClientAdapter, HttpRequest } from 'infra/adapters'
import { useAppDispatch, useAppSelector } from 'infra/hooks'
import { FindByIdPostController } from 'application/controllers'

export const MakeFindByIdPost = (id: number) => {
  const httpRequest: HttpRequest = {
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    method: 'get'
  }
  const httpClientAdapter = new HttpClientAdapter()
  const findByIdPost = new HttpFindByIdPost(httpClientAdapter, httpRequest)

  const store = new FindByIdPostData(
    findByIdPost,
    useAppDispatch,
    useAppSelector
  )
  return FindByIdPostController({ store })
}

type FindByIdPost = typeof MakeFindByIdPost
export type { FindByIdPost }
