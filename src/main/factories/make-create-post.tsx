import { CreatePostPage } from 'application/pages'
import { MakeCreatePost, MakeFindAllUsers } from 'application/factories'

export const MakeCreatePostPage = () => {
  return (
    <CreatePostPage
      findAllUsers={MakeFindAllUsers}
      createPosts={MakeCreatePost}
    />
  )
}
