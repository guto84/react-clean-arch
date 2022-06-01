import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PostEntity } from 'domain/entities'
import { FindAllPostsState } from 'domain/states'

const initialState: FindAllPostsState = {
  postList: [],
  postListLoading: true,
  postListErrorMessage: ''
}

export const findAllPostsSlice = createSlice({
  name: 'findAllPosts',
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
  findAllPostsSlice.actions

export default findAllPostsSlice.reducer
