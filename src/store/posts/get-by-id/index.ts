import { HttpGetByIdPost } from 'domain/usecases'
import type { UseAppDispatch, UseAppSelector } from 'infra/hooks'
import { setPost, setPostLoading, setPostErrorMessage } from './get-by-id-slice'

export class GetByIdPostData {
  constructor(
    private readonly getByIdPost: HttpGetByIdPost,
    private readonly useAppDispatch: UseAppDispatch,
    private readonly useAppSelector: UseAppSelector
  ) {}

  dispatch = this.useAppDispatch()

  getByIdPostSelector = this.useAppSelector((state) => state.getByIdPosts)

  handleListErrorMessage = (message: string) =>
    this.dispatch(setPostErrorMessage(message))

  handlePostListLoading = (status: boolean) =>
    this.dispatch(setPostLoading(status))

  handleGetByIdPost = async () => {
    try {
      const response = await this.getByIdPost.handle()
      this.dispatch(setPost(response))
      this.dispatch(setPostLoading(false))
    } catch (error) {
      return this.dispatch(setPostErrorMessage(''))
    }
  }
}
