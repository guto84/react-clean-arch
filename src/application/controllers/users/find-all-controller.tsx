import { useCallback } from 'react'
import { FindAllUsersStore } from 'domain/store'
import { FindAllUsersData } from 'store'

type Props = {
  store: FindAllUsersData
}

export const FindAllUserController = ({ store }: Props) => {
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
