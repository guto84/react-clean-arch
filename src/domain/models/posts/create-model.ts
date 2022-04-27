import type { PostEntity } from 'domain/entities'

export interface CreatePostModel {
  handle: (body: CreatePostModel.Body) => Promise<CreatePostModel.Result>
}

export namespace CreatePostModel {
  export type Body = Omit<PostEntity, 'id'>
  export type Result = PostEntity
}
