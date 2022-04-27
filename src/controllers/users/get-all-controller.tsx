import { useCallback } from 'react'
import { GetAllUsersStore } from 'domain/index'
import { GetAllUserDataProtocol } from 'usecases'
import { useAppSelector, useAppDispatch } from 'data/hooks'

export class GetAllUsersController {
  constructor(private readonly store: GetAllUserDataProtocol) {}

  dispatch = useAppDispatch()

  allUsers: GetAllUsersStore = useAppSelector((state) => state.getAllUsers)

  getAllUsers = useCallback(() => {
    return this.store.getAllUsers()
  }, [])
}
