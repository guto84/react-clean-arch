import type { PostEntity } from 'domain/entities'

interface FindByIdPostStore {
  post: PostEntity
  postLoading: boolean
  postErrorMessage: string
}

export type { FindByIdPostStore }
