import { createAsyncThunk } from '@reduxjs/toolkit'
import { GetByIdPostModel } from 'domain/index'
import { HttpGetByIdPosts } from 'usecases'
import { HttpClient, HttpClientAdapter } from 'shared/adapters'

const httpClientAdapter: HttpClient = new HttpClientAdapter()
const getByIdPosts: GetByIdPostModel = new HttpGetByIdPosts(httpClientAdapter)

const handlePost = async (id: number): Promise<GetByIdPostModel.Result> => {
  return await getByIdPosts.handle(id)
}

export const getByIdPostsAction = createAsyncThunk(
  'posts/getPost',
  async (id: number): Promise<GetByIdPostModel.Result> => await handlePost(id)
)
