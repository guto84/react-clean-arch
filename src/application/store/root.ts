import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import findAllPostsReducer from 'application/store/posts/find-all/find-all-slice'
import findByIdPostReducer from 'application/store/posts/find-by-id/find-by-id-slice'
import createPostReducer from 'application/store/posts/create/create-slice'

import findAllUserReducer from 'application/store/users/find-all/find-all-slice'

export const store = configureStore({
  reducer: {
    findAllPosts: findAllPostsReducer,
    findByIdPost: findByIdPostReducer,
    createPosts: createPostReducer,

    findAllUsers: findAllUserReducer
  }
})

type AppDispatch = typeof store.dispatch
type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

type UseAppDispatch = typeof useAppDispatch
type UseAppSelector = typeof useAppSelector

export type { UseAppDispatch, UseAppSelector }
