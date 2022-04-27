import { createAsyncThunk } from '@reduxjs/toolkit'
import { GetAllUserModel } from 'domain/index'
import { HttpGetAllUsers } from 'usecases'
import { HttpClient, HttpClientAdapter } from 'shared/adapters'

const httpClientAdapter: HttpClient = new HttpClientAdapter()
const getAllUsers: GetAllUserModel = new HttpGetAllUsers(httpClientAdapter)

const handleListUsers = async (): Promise<GetAllUserModel.Result[]> => {
  return await getAllUsers.handle()
}

export const getAllUsersAction = createAsyncThunk(
  'posts/getAllUsers',
  async (): Promise<GetAllUserModel.Result[]> => await handleListUsers()
)
