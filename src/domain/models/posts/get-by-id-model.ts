import type { PostEntity } from 'domain/entities'

export interface GetByIdPostModel {
  handle: (id: number) => Promise<GetByIdPostModel.Result>
}

export namespace GetByIdPostModel {
  export type Result = PostEntity
}
