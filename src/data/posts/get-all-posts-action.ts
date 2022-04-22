import { createAsyncThunk } from '@reduxjs/toolkit'

import { GetAllPostsModel } from 'domain/models'

import { HttpClient, HttpClientAdapter } from 'shared/adapters'

import { GetAllPostsUsecase } from './get-all-posts-usecase'

const httpClientAdapter: HttpClient = new HttpClientAdapter()
const getAllPosts: GetAllPostsModel = new GetAllPostsUsecase(httpClientAdapter)

const handleListPosts = async (): Promise<GetAllPostsModel.Result[]> => {
  return await getAllPosts.handle()
}

export const getAllPostsAction = createAsyncThunk(
  'posts/getAllPosts',
  async (): Promise<GetAllPostsModel.Result[]> => await handleListPosts()
)
