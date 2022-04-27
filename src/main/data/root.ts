import { configureStore } from '@reduxjs/toolkit'

import getAllPostReducer from 'data/posts/get-all/get-all-slice'
import getByIdPostReducer from 'data/posts/get-by-id/get-by-id-slice'
import createPostReducer from 'data/posts/create/create-slice'

import getAllUserReducer from 'data/users/get-all/get-all-slice'

export const store = configureStore({
  reducer: {
    getAllPosts: getAllPostReducer,
    getByIdPosts: getByIdPostReducer,
    createPosts: createPostReducer,

    getAllUsers: getAllUserReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
