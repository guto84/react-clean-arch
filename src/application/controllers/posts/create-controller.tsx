import { CreatePostStore } from 'domain/store'
import { HttpCreatePost } from 'domain/usecases'
import { PostEntity } from 'domain/entities'
import { CreatePostData } from 'store'

export class CreatePostController {
  constructor(
    private readonly store: CreatePostData,
    private readonly cretePost: HttpCreatePost
  ) {}

  createPostSelector: CreatePostStore = this.store.createPostSelector

  setErrorMessage = (message: string) => this.store.setErrorMessage(message)

  createPost = async (body: Omit<PostEntity, 'id'>) =>
    await this.cretePost.handle(body)
}
