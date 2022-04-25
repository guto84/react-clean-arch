import { useCallback } from 'react'

import { GetAllPostsStore } from 'domain/store'

import { getAllPostsAction } from 'data/posts'
import { useAppSelector, useAppDispatch } from 'data/hooks'

export const getAllPostsController = () => {
  const dispatch = useAppDispatch()
  const allPosts: GetAllPostsStore = useAppSelector(
    (state) => state.getAllposts
  )

  const getAllPosts = useCallback(() => {
    return dispatch(getAllPostsAction())
  }, [dispatch])

  return {
    allPosts,
    getAllPosts
  }
}
