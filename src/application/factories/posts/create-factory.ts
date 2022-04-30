import { HttpCreatePost } from 'domain/usecases'
import { CreatePostData } from 'store'
import { HttpClientAdapter, HttpRequest } from 'infra/adapters'
import { useAppDispatch, useAppSelector } from 'infra/hooks'
import { CreatePostController } from 'application/controllers'

export const CreatePostFactory = () => {
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
