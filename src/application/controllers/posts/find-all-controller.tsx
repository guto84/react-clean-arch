import { useCallback } from 'react'
import { FindAllPostsStore } from 'domain/store'
import { FindAllPostsData } from 'store'

type Props = {
  store: FindAllPostsData
}

export const FindAllPostController = ({ store }: Props) => {
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
