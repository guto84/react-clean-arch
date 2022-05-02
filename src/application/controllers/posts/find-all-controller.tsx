import { useCallback } from 'react'
import { FindAllPostsStore } from 'domain/store'
import { FindAllPostsData } from 'store'

export const FindAllPostController = (store: FindAllPostsData) => {
  const allPostsSelector: FindAllPostsStore = store.allPostsSelector

  const handleFindAllPosts = useCallback(() => {
    store.handleListErrorMessage('')
    store.handleFindAllPosts()
  }, [store])

  return {
    allPostsSelector,
    handleFindAllPosts
  }
}
