import type { UserEntity } from 'domain/entities'

interface GetAllUsersStore {
  userList: UserEntity[]
  userListLoading: boolean
  userListErrorMessage: string
}

export type { GetAllUsersStore }
