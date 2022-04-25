import type { PostEntity } from 'domain/entities'

interface GetByIdPostsStore {
  post: PostEntity
  postLoading: boolean
  postError: boolean
  postErrorMessage: string
}

export type { GetByIdPostsStore }
