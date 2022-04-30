import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PostEntity } from 'domain/entities'
import { GetAllPostStore } from 'domain/store'

const initialState: GetAllPostStore = {
  postList: [],
  postListLoading: true,
  postListErrorMessage: ''
}

export const getAllPostSlice = createSlice({
  name: 'getAllposts',
  initialState,
  reducers: {
    setPostList: (state, action: PayloadAction<PostEntity[]>) => {
      state.postList = action.payload
    },
    setPostListLoading: (state, action: PayloadAction<boolean>) => {
      state.postListLoading = action.payload
    },
    setPostListErrorMessage: (state, action: PayloadAction<string>) => {
      state.postListErrorMessage = action.payload
    }
  }
})

export const { setPostList, setPostListLoading, setPostListErrorMessage } =
  getAllPostSlice.actions

export default getAllPostSlice.reducer
