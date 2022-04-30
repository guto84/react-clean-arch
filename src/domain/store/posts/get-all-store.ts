import type { PostEntity } from 'domain/entities'

interface GetAllPostStore {
  postList: PostEntity[]
  postListLoading: boolean
  postListErrorMessage: string
}

export type { GetAllPostStore }
