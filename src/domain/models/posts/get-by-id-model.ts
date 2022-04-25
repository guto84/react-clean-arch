import type { PostEntity } from 'domain/entities'

export interface GetByIdPostsModel {
  handle: (id: number) => Promise<GetByIdPostsModel.Result>
}

export namespace GetByIdPostsModel {
  export type Result = PostEntity
}
