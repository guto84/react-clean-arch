import type { PostEntity } from 'domain/entities'

interface FindAllPostsStore {
  postList: PostEntity[]
  postListLoading: boolean
  postListErrorMessage: string
}

export type { FindAllPostsStore }
