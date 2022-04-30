import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PostEntity } from 'domain/entities'
import { GetByIdPostStore } from 'domain/store'

const initialState: GetByIdPostStore = {
  post: {
    id: null,
    userId: null,
    title: '',
    body: ''
  },
  postLoading: true,
  postErrorMessage: ''
}

export const getByIdPostSlice = createSlice({
  name: 'getByIdPosts',
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<PostEntity>) => {
      state.post = action.payload
    },
    setPostLoading: (state, action: PayloadAction<boolean>) => {
      state.postLoading = action.payload
    },
    setPostErrorMessage: (state, action: PayloadAction<string>) => {
      state.postErrorMessage = action.payload
    }
  }
})

export const { setPost, setPostLoading, setPostErrorMessage } =
  getByIdPostSlice.actions

export default getByIdPostSlice.reducer
