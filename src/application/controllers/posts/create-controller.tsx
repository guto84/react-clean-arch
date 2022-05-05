import { CreatePostStore } from 'domain/store'
import { HttpCreatePost } from 'domain/http'
import { PostEntity } from 'domain/entities'
import { CreatePostData } from 'store'

type Props = {
  store: CreatePostData
  httpCreatePost: HttpCreatePost
}

export const CreatePostController = ({ store, httpCreatePost }: Props) => {
  const createPostSelector: CreatePostStore = store.createPostSelector

  const setErrorMessage = (message: string) => store.setErrorMessage(message)

  const createPost = async (body: Omit<PostEntity, 'id'>) =>
    await httpCreatePost.handle(body)

  return {
    createPostSelector,
    setErrorMessage,
    createPost
  }
}
