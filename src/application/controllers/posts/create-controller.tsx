import { CreatePostStore } from 'domain/store'
import { HttpClient } from 'domain/http'
import { PostEntity } from 'domain/entities'
import { CreatePostData } from 'store'

type Props = {
  store: CreatePostData
  httpCreatePost: HttpClient
}

export const CreatePostController = ({ store, httpCreatePost }: Props) => {
  const createPostSelector: CreatePostStore = store.createPostSelector

  const setErrorMessage = (message: string) => store.setErrorMessage(message)

  const createPost = async (body: Omit<PostEntity, 'id'>) =>
    await httpCreatePost.handle<Promise<PostEntity>, Omit<PostEntity, 'id'>>(
      body
    )

  return {
    createPostSelector,
    setErrorMessage,
    createPost
  }
}

// async handle(body: Omit<PostEntity, 'id'>): Promise<PostEntity>
