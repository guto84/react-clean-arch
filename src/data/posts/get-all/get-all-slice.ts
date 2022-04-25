import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { GetAllPostsStore } from 'domain/store'
import { GetAllPostsModel } from 'domain/models'

import { getAllPostsAction } from './get-all-action'

const initialState: GetAllPostsStore = {
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
        (state, action: PayloadAction<GetAllPostsModel.Result[]>) => {
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
