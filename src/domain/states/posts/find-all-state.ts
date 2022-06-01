import type { PostEntity } from 'domain/entities'

export type FindAllPostsState = {
  postList: PostEntity[]
  postListLoading: boolean
  postListErrorMessage: string
}
