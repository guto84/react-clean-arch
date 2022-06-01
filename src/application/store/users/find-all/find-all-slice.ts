import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserEntity } from 'domain/entities'
import { FindAllUsersState } from 'domain/states'

const initialState: FindAllUsersState = {
  userList: [],
  userListLoading: true,
  userListErrorMessage: ''
}

export const findAllUsersSlice = createSlice({
  name: 'findAllposts',
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
  findAllUsersSlice.actions

export default findAllUsersSlice.reducer
