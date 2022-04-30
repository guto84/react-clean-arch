import { useCallback } from 'react'
import { GetAllUsersStore } from 'domain/store'
import { GetAllUsersData } from 'store'

export const GetAllUserController = (store: GetAllUsersData) => {
  const allUsersSelector: GetAllUsersStore = store.allUsersSelector

  const handleGetAllUsers = useCallback(() => {
    store.handleListErrorMessage('')
    store.handleGetAllUsers()
  }, [store])

  return {
    allUsersSelector,
    handleGetAllUsers
  }
}
