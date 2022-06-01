import type { UserEntity } from 'domain/entities'

export type FindAllUsersState = {
  userList: UserEntity[]
  userListLoading: boolean
  userListErrorMessage: string
}
