import { createAsyncThunk } from '@reduxjs/toolkit'
import { GetAllPostModel } from 'domain/index'
import { HttpGetAllPosts } from 'usecases'
import { HttpClient, HttpClientAdapter } from 'shared/adapters'

const httpClientAdapter: HttpClient = new HttpClientAdapter()
const getAllPosts: GetAllPostModel = new HttpGetAllPosts(httpClientAdapter)

const handleListPosts = async (): Promise<GetAllPostModel.Result[]> => {
  return await getAllPosts.handle()
}

export const getAllPostsAction = createAsyncThunk(
  'posts/getAllPosts',
  async (): Promise<GetAllPostModel.Result[]> => await handleListPosts()
)
