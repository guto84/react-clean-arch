import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserEntity } from 'domain/entities'
import { GetAllUsersStore } from 'domain/store'

const initialState: GetAllUsersStore = {
  userList: [],
  userListLoading: true,
  userListErrorMessage: ''
}

export const getAllUsersSlice = createSlice({
  name: 'getAllposts',
  initialState,
  reducers: {
    setUserList: (state, action: PayloadAction<UserEntity[]>) => {
      state.userList = action.payload
    },
    setUserListLoading: (state, action: PayloadAction<boolean>) => {
      state.userListLoading = action.payload
    },
    setUserListErrorMessage: (state, action: PayloadAction<string>) => {
      state.userListErrorMessage = action.payload
    }
  }
})

export const { setUserList, setUserListLoading, setUserListErrorMessage } =
  getAllUsersSlice.actions

export default getAllUsersSlice.reducer
