import { HttpFindByIdPost } from 'domain/http'
import type { UseAppDispatch, UseAppSelector } from 'infra/hooks'
import {
  setPost,
  setPostLoading,
  setPostErrorMessage
} from './find-by-id-slice'

export class FindByIdPostData {
  constructor(
    private readonly findByIdPost: HttpFindByIdPost,
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
      const response = await this.findByIdPost.handle()
      this.dispatch(setPost(response))
      this.dispatch(setPostLoading(false))
    } catch (error) {
      return this.dispatch(setPostErrorMessage(''))
    }
  }
}
