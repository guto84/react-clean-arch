import { CreatePostStore } from 'domain/index'

export type CreatePostDataProtocol = {
  createPostStore: CreatePostStore
  setErrorMessage: any
  createPost: any
}
