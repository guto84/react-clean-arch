import { useCallback } from 'react'
import { GetByIdPostStore } from 'domain/store'
import { GetByIdPostData } from 'store'

export const GetByIdPostController = (store: GetByIdPostData) => {
  const getByIdPostSelector: GetByIdPostStore = store.getByIdPostSelector

  const handleGetByIdPost = useCallback(() => {
    store.handleListErrorMessage('')
    store.handleGetByIdPost()
  }, [store])

  return {
    getByIdPostSelector,
    handleGetByIdPost
  }
}
