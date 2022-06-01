import { CreatePostPage } from 'application/pages'
import {
  MakeCreatePostStore,
  MakeFindAllUsersStore
} from 'main/factories/store'
import { MakeCreatePost, MakeFindAllUsers } from 'main/factories/usecases'

export const MakeCreatePostPage = () => {
  return (
    <CreatePostPage
      createPostStore={MakeCreatePostStore()}
      createPostData={MakeCreatePost()}
      findAllUsersStore={MakeFindAllUsersStore()}
      findAllUsersData={MakeFindAllUsers()}
    />
  )
}
