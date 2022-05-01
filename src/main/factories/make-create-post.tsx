import { CreatePosts } from 'application/pages'
import { CreatePostFactory, GetAllUsersFactory } from 'application/factories'

export const MakeCreatePost = () => {
  return (
    <CreatePosts
      getAllUsers={GetAllUsersFactory}
      createPosts={CreatePostFactory}
    />
  )
}
