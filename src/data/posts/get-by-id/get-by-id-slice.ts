import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { GetByIdPostsStore } from 'domain/store'
import { GetByIdPostsModel } from 'domain/models'

import { getByIdPostsAction } from './get-by-id-action'

const initialState: GetByIdPostsStore = {
  post: {
    id: 0,
    userId: 0,
    title: '',
    body: ''
  },
  postLoading: false,
  postError: false,
  postErrorMessage: ''
}

export const getByIdPostSlice = createSlice({
  name: 'getByIdPosts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getByIdPostsAction.pending, (state) => {
        state.postLoading = true
      })
      .addCase(
        getByIdPostsAction.fulfilled,
        (state, action: PayloadAction<GetByIdPostsModel.Result>) => {
          state.post = action.payload
          state.postLoading = false
        }
      )
      .addCase(getByIdPostsAction.rejected, (state) => {
        state.postError = true
        state.postErrorMessage = 'Aqui vai a mensagem de erro!'
      })
  }
})

export default getByIdPostSlice.reducer
