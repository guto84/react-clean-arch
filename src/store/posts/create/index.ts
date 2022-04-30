import { CreatePostStore } from 'domain/store'
import { UseAppDispatch, UseAppSelector } from 'infra/hooks'
import { setErrorMessage as setErrorMessageSlice } from './create-slice'

export class CreatePostData {
  constructor(
    private readonly useAppDispatch: UseAppDispatch,
    private readonly useAppSelector: UseAppSelector
  ) {}
  dispatch = this.useAppDispatch()

  createPostSelector: CreatePostStore = this.useAppSelector(
    (state) => state.createPosts
  )

  setErrorMessage = (message: string) =>
    this.dispatch(setErrorMessageSlice(message))
}
