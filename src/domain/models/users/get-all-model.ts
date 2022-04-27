import type { UserEntity } from 'domain/entities'

export interface GetAllUserModel {
  handle: () => Promise<GetAllUserModel.Result[]>
}

export namespace GetAllUserModel {
  export type Result = UserEntity
}
