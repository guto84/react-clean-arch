import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetAllUserModel, GetAllUsersStore } from 'domain/index'
import { getAllUsersAction } from './get-all-action'

const initialState: GetAllUsersStore = {
  userList: [],
  userListLoading: false,
  userListError: false,
  userListErrorMessage: ''
}

export const getAllUserSlice = createSlice({
  name: 'getAllUsers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersAction.pending, (state) => {
        state.userListLoading = true
      })
      .addCase(
        getAllUsersAction.fulfilled,
        (state, action: PayloadAction<GetAllUserModel.Result[]>) => {
          state.userList = action.payload
          state.userListLoading = false
        }
      )
      .addCase(getAllUsersAction.rejected, (state) => {
        state.userListError = true
        state.userListErrorMessage = 'Aqui vai a mensagem de erro!'
      })
  }
})

export default getAllUserSlice.reducer
