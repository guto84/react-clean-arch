import { HttpFindAllPosts } from 'domain/http'
import type { UseAppDispatch, UseAppSelector } from 'infra/hooks'
import {
  setPostList,
  setPostListLoading,
  setPostListErrorMessage
} from './find-all-slice'

export class FindAllPostsData {
  constructor(
    private readonly findAllPosts: HttpFindAllPosts,
    private readonly useAppDispatch: UseAppDispatch,
    private readonly useAppSelector: UseAppSelector
  ) {}

  dispatch = this.useAppDispatch()

  allPostsSelector = this.useAppSelector((state) => state.findAllPosts)

  handleListErrorMessage = (message: string) =>
    this.dispatch(setPostListErrorMessage(message))

  handlePostListLoading = (status: boolean) =>
    this.dispatch(setPostListLoading(status))

  handleFindAllPosts = async () => {
    try {
      const response = await this.findAllPosts.handle()
      this.dispatch(setPostList(response))
      this.dispatch(setPostListLoading(false))
    } catch (error) {
      return this.dispatch(setPostListErrorMessage(''))
    }
  }
}
