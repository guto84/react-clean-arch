import type { UserEntity } from 'domain/entities'

interface GetAllUsersStore {
  userList: UserEntity[]
  userListLoading: boolean
  userListError: boolean
  userListErrorMessage: string
}

export type { GetAllUsersStore }
