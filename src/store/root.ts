import { configureStore } from '@reduxjs/toolkit'

import findAllPostsReducer from 'store/posts/find-all/find-all-slice'
import findByIdPostReducer from 'store/posts/find-by-id/find-by-id-slice'
import createPostReducer from 'store/posts/create/create-slice'

import findAllUserReducer from 'store/users/find-all/find-all-slice'

export const store = configureStore({
  reducer: {
    findAllPosts: findAllPostsReducer,
    findByIdPost: findByIdPostReducer,
    createPosts: createPostReducer,

    findAllUsers: findAllUserReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
