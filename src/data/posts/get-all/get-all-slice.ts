import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetAllPostModel, GetAllPostStore } from 'domain/index'
import { getAllPostsAction } from './get-all-action'

const initialState: GetAllPostStore = {
  postList: [],
  postListLoading: false,
  postListError: false,
  postListErrorMessage: ''
}

export const getAllPostSlice = createSlice({
  name: 'getAllposts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPostsAction.pending, (state) => {
        state.postListLoading = true
      })
      .addCase(
        getAllPostsAction.fulfilled,
        (state, action: PayloadAction<GetAllPostModel.Result[]>) => {
          state.postList = action.payload
          state.postListLoading = false
        }
      )
      .addCase(getAllPostsAction.rejected, (state) => {
        state.postListError = true
        state.postListErrorMessage = 'Aqui vai a mensagem de erro!'
      })
  }
})

export default getAllPostSlice.reducer
