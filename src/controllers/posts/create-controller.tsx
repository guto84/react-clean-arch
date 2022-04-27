import { CreatePostModel } from 'domain/index'
import { CreatePostDataProtocol } from 'usecases'

export class CreatePostController {
  constructor(private readonly store: CreatePostDataProtocol) {}

  createPostStore = this.store.createPostStore

  setErrorMessage = (message: string) => this.store.setErrorMessage(message)

  createPost = async (body: CreatePostModel.Body) =>
    await this.store.createPost(body)
}
