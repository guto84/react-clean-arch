import { useCallback } from 'react'

import { GetAllPostsStore } from 'domain/store'

import { getAllPostsAction } from 'data/posts'

import { useAppSelector, useAppDispatch } from 'shared/hooks'

export const getAllPostsController = () => {
  const dispatch = useAppDispatch()
  const posts: GetAllPostsStore = useAppSelector((state) => state.posts)

  const getAllPosts = useCallback(() => {
    return dispatch(getAllPostsAction())
  }, [dispatch])

  return {
    posts,
    getAllPosts
  }
}
