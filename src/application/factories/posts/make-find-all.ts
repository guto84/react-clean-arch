import { HttpFindAllPosts } from 'domain/http'
import { FindAllPostsData } from 'store'
import { HttpClientAdapter, HttpRequest } from 'infra/adapters'
import { useAppDispatch, useAppSelector } from 'infra/hooks'
import { FindAllPostController } from 'application/controllers'

export const MakeFindAllPosts = () => {
  const httpRequest: HttpRequest = {
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'get'
  }
  const httpClientAdapter = new HttpClientAdapter()
  const findAllPosts = new HttpFindAllPosts(httpClientAdapter, httpRequest)

  const store = new FindAllPostsData(
    findAllPosts,
    useAppDispatch,
    useAppSelector
  )
  return FindAllPostController(store)
}

type FindAllPosts = typeof MakeFindAllPosts
export type { FindAllPosts }
