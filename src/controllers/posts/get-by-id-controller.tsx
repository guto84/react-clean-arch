import { useCallback } from 'react'

import { GetByIdPostsStore } from 'domain/store'

import { getByIdPostsAction } from 'data/posts'
import { useAppSelector, useAppDispatch } from 'data/hooks'

export const getByIdPostsController = (id: number) => {
  const dispatch = useAppDispatch()
  const showPost: GetByIdPostsStore = useAppSelector(
    (state) => state.getByIdposts
  )

  const getByIdPosts = useCallback(() => {
    return dispatch(getByIdPostsAction(id))
  }, [dispatch, id])

  return {
    showPost,
    getByIdPosts
  }
}
