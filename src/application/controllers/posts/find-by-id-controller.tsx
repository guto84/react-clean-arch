import { useCallback } from 'react'
import { FindByIdPostStore } from 'domain/store'
import { FindByIdPostData } from 'store'

export const FindByIdPostController = (store: FindByIdPostData) => {
  const findByIdPostSelector: FindByIdPostStore = store.findByIdPostSelector

  const handleFindByIdPost = useCallback(() => {
    store.handleListErrorMessage('')
    store.handleFindByIdPost()
  }, [store])

  return {
    findByIdPostSelector,
    handleFindByIdPost
  }
}
