import { configureStore } from '@reduxjs/toolkit'

import postsReducer from 'data/posts/get-all-posts-slice'

export const store = configureStore({
  reducer: {
    posts: postsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch