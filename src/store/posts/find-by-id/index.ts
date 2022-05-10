import { PostEntity } from 'domain/entities'
import { HttpClient } from 'domain/http'
import type { UseAppDispatch, UseAppSelector } from 'infra/hooks'
import {
  setPost,
  setPostLoading,
  setPostErrorMessage
} from './find-by-id-slice'

export class FindByIdPostData {
  constructor(
    private readonly findByIdPost: HttpClient,
    private readonly useAppDispatch: UseAppDispatch,
    private readonly useAppSelector: UseAppSelector
  ) {}

  dispatch = this.useAppDispatch()

  findByIdPostSelector = this.useAppSelector((state) => state.findByIdPost)

  handleListErrorMessage = (message: string) =>
    this.dispatch(setPostErrorMessage(message))

  handlePostListLoading = (status: boolean) =>
    this.dispatch(setPostLoading(status))

  handleFindByIdPost = async () => {
    try {
      const response = await this.findByIdPost.handle<PostEntity, null>()
      this.dispatch(setPost(response))
      this.dispatch(setPostLoading(false))
    } catch (error) {
      return this.dispatch(setPostErrorMessage(''))
    }
  }
}
