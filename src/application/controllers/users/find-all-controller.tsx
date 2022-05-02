import { useCallback } from 'react'
import { FindAllUsersStore } from 'domain/store'
import { FindAllUsersData } from 'store'

export const FindAllUserController = (store: FindAllUsersData) => {
  const allUsersSelector: FindAllUsersStore = store.allUsersSelector

  const handleFindAllUsers = useCallback(() => {
    store.handleListErrorMessage('')
    store.handleFindAllUsers()
  }, [store])

  return {
    allUsersSelector,
    handleFindAllUsers
  }
}
