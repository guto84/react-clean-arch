import { useCallback } from 'react'
import { GetAllPostStore } from 'domain/store'
import { GetAllPostsData } from 'store'

export const GetAllPostController = (store: GetAllPostsData) => {
  const allPostsSelector: GetAllPostStore = store.allPostsSelector

  const handleGetAllPosts = useCallback(() => {
    store.handleListErrorMessage('')
    store.handleGetAllPosts()
  }, [store])

  return {
    allPostsSelector,
    handleGetAllPosts
  }
}

type GetAllPost = typeof GetAllPostController
export type { GetAllPost }
