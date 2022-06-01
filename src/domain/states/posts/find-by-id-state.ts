import type { PostEntity } from 'domain/entities'

export type FindByIdPostState = {
  post: PostEntity
  postLoading: boolean
  postErrorMessage: string
}
