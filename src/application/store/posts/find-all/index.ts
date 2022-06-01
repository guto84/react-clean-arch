import { PostEntity } from 'domain/entities'
import { UseAppDispatch, UseAppSelector } from 'application/store/root'
import {
  setPostList,
  setPostListLoading,
  setPostListErrorMessage
} from './find-all-slice'

export class FindAllPostsStore {
  constructor(
    private readonly useAppDispatch: UseAppDispatch,
    private readonly useAppSelector: UseAppSelector
  ) {}

  dispatch = this.useAppDispatch()

  allPostsSelector = this.useAppSelector((state) => state.findAllPosts)

  handleListErrorMessage = (message: string) =>
    this.dispatch(setPostListErrorMessage(message))

  handlePostListLoading = (status: boolean) =>
    this.dispatch(setPostListLoading(status))

  handlePostList = (list: PostEntity[]) => this.dispatch(setPostList(list))
}
