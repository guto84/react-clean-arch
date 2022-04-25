import { configureStore } from '@reduxjs/toolkit'

import getAllPostReducer from 'data/posts/get-all/get-all-slice'
import getByIdPostReducer from 'data/posts/get-by-id/get-by-id-slice'

export const store = configureStore({
  reducer: {
    getAllposts: getAllPostReducer,
    getByIdposts: getByIdPostReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
