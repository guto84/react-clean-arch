import type { PostEntity } from 'domain/entities'

interface GetAllPostsStore {
  postList: PostEntity[]
  postListLoading: boolean
  postListError: boolean
  postListErrorMessage: string
}

export type { GetAllPostsStore }
