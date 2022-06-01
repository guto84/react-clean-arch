import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CreatePostState } from 'domain/states'

const initialState: CreatePostState = {
  createErrorMessage: ''
}

export const createPostSlice = createSlice({
  name: 'createPost',
  initialState,
  reducers: {
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.createErrorMessage = action.payload
    }
  }
})

export const { setErrorMessage } = createPostSlice.actions

export default createPostSlice.reducer
