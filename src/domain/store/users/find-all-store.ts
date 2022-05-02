import type { UserEntity } from 'domain/entities'

interface FindAllUsersStore {
  userList: UserEntity[]
  userListLoading: boolean
  userListErrorMessage: string
}

export type { FindAllUsersStore }
