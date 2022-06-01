import { PostEntity } from 'domain/entities'
import { UseAppDispatch, UseAppSelector } from 'application/store/root'
import {
  setPost,
  setPostLoading,
  setPostErrorMessage
} from './find-by-id-slice'

export class FindByIdPostStore {
  constructor(
    private readonly useAppDispatch: UseAppDispatch,
    private readonly useAppSelector: UseAppSelector
  ) {}

  dispatch = this.useAppDispatch()

  findByIdPostSelector = this.useAppSelector((state) => state.findByIdPost)

  handlePostErrorMessage = (message: string) =>
    this.dispatch(setPostErrorMessage(message))

  handlePostLoading = (status: boolean) => this.dispatch(setPostLoading(status))

  handlePost = async (post: PostEntity) => this.dispatch(setPost(post))
}
