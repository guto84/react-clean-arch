import { HttpCreatePost } from 'domain/http'
import { CreatePostData } from 'store'
import { HttpClientAdapter, HttpRequest } from 'infra/adapters'
import { useAppDispatch, useAppSelector } from 'infra/hooks'
import { CreatePostController } from 'application/controllers'

export const MakeCreatePost = () => {
  const httpRequest: HttpRequest = {
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'post',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }
  const httpClientAdapter = new HttpClientAdapter()
  const createPost = new HttpCreatePost(httpClientAdapter, httpRequest)

  const store = new CreatePostData(useAppDispatch, useAppSelector)

  return new CreatePostController(store, createPost)
}

type CreatePost = typeof MakeCreatePost
export type { CreatePost }
