import type { PostEntity } from 'domain/entities'

export interface GetAllPostsModel {
  handle: () => Promise<GetAllPostsModel.Result[]>
}

export namespace GetAllPostsModel {
  export type Result = PostEntity
}
