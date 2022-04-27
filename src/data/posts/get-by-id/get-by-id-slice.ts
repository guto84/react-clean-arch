import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetByIdPostModel, GetByIdPostStore } from 'domain/index'
import { getByIdPostsAction } from './get-by-id-action'

const initialState: GetByIdPostStore = {
  post: {
    id: null,
    userId: null,
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
        (state, action: PayloadAction<GetByIdPostModel.Result>) => {
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
