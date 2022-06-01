import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PostEntity } from 'domain/entities'
import { FindByIdPostState } from 'domain/states'

const initialState: FindByIdPostState = {
  post: {
    id: null,
    userId: null,
    title: '',
    body: ''
  },
  postLoading: true,
  postErrorMessage: ''
}

export const findByIdPostSlice = createSlice({
  name: 'findByIdPost',
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
  findByIdPostSlice.actions

export default findByIdPostSlice.reducer
