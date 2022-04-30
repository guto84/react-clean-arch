import { HttpGetAllPosts } from 'domain/usecases'
import type { UseAppDispatch, UseAppSelector } from 'infra/hooks'
import {
  setPostList,
  setPostListLoading,
  setPostListErrorMessage
} from './get-all-slice'

export class GetAllPostsData {
  constructor(
    private readonly getAllPosts: HttpGetAllPosts,
    private readonly useAppDispatch: UseAppDispatch,
    private readonly useAppSelector: UseAppSelector
  ) {}

  dispatch = this.useAppDispatch()

  allPostsSelector = this.useAppSelector((state) => state.getAllPosts)

  handleListErrorMessage = (message: string) =>
    this.dispatch(setPostListErrorMessage(message))

  handlePostListLoading = (status: boolean) =>
    this.dispatch(setPostListLoading(status))

  handleGetAllPosts = async () => {
    try {
      const response = await this.getAllPosts.handle()
      this.dispatch(setPostList(response))
      this.dispatch(setPostListLoading(false))
    } catch (error) {
      return this.dispatch(setPostListErrorMessage(''))
    }
  }
}
