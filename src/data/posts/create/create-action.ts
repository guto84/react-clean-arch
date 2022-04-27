import { CreatePostModel } from 'domain/index'
import { HttpCreatePosts } from 'usecases'
import { HttpClient, HttpClientAdapter } from 'shared/adapters'

const httpClientAdapter: HttpClient = new HttpClientAdapter()
const createPost: CreatePostModel = new HttpCreatePosts(httpClientAdapter)

const handleCreatePosts = async (
  body: CreatePostModel.Body
): Promise<CreatePostModel.Result> => {
  return await createPost.handle(body)
}

export const createPostsAction = handleCreatePosts
