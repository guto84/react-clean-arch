import { CreatePostStore, CreatePostModel } from 'domain/index'
import { CreatePostDataProtocol } from 'usecases'
import { useAppSelector, useAppDispatch } from 'data/hooks'
import { createPostsAction } from './create-action'
import { setErrorMessage as setErrorMessageSlice } from './create-slice'

export class CreatePostsData implements CreatePostDataProtocol {
  dispatch = useAppDispatch()

  createPostStore: CreatePostStore = useAppSelector(
    (state) => state.createPosts
  )

  setErrorMessage = (message: string) =>
    this.dispatch(setErrorMessageSlice(message))

  createPost = async (body: CreatePostModel.Body) =>
    await createPostsAction(body)
}
