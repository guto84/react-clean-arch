import { createAsyncThunk } from '@reduxjs/toolkit'

import { GetByIdPostsModel } from 'domain/models'

import { HttpClient, HttpClientAdapter } from 'shared/adapters'

import { GetByIdPostsUsecase } from './get-by-id-usecase'

const httpClientAdapter: HttpClient = new HttpClientAdapter()
const getByIdPosts: GetByIdPostsModel = new GetByIdPostsUsecase(
  httpClientAdapter
)

const handlePost = async (id: number): Promise<GetByIdPostsModel.Result> => {
  return await getByIdPosts.handle(id)
}

export const getByIdPostsAction = createAsyncThunk(
  'posts/getPost',
  async (id: number): Promise<GetByIdPostsModel.Result> => await handlePost(id)
)
