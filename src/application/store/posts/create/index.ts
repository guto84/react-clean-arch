import { CreatePostState } from 'domain/states'
import { UseAppDispatch, UseAppSelector } from 'application/store/root'
import { setErrorMessage as setErrorMessageSlice } from './create-slice'

export class CreatePostStore {
  constructor(
    private readonly useAppDispatch: UseAppDispatch,
    private readonly useAppSelector: UseAppSelector
  ) {}
  dispatch = this.useAppDispatch()

  createPostSelector: CreatePostState = this.useAppSelector(
    (state) => state.createPosts
  )

  setErrorMessage = (message: string) =>
    this.dispatch(setErrorMessageSlice(message))
}
