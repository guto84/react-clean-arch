import type { PostEntity } from 'domain/entities'

interface GetByIdPostStore {
  post: PostEntity
  postLoading: boolean
  postErrorMessage: string
}

export type { GetByIdPostStore }
