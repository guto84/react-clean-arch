import type { PostEntity } from 'domain/entities'

export interface GetAllPostModel {
  handle: () => Promise<GetAllPostModel.Result[]>
}

export namespace GetAllPostModel {
  export type Result = PostEntity
}
