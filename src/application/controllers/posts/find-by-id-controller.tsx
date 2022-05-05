import { useCallback } from 'react'
import { FindByIdPostStore } from 'domain/store'
import { FindByIdPostData } from 'store'

type Props = {
  store: FindByIdPostData
}

export const FindByIdPostController = ({ store }: Props) => {
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
