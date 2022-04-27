import type { PostEntity } from 'domain/entities'

interface GetByIdPostStore {
  post: PostEntity
  postLoading: boolean
  postError: boolean
  postErrorMessage: string
}

export type { GetByIdPostStore }
