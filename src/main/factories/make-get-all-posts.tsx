import { ListPosts } from 'application/pages'
import { GetAllPostsFactory } from 'application/factories'

export const MakeGetAllPosts = () => {
  return <ListPosts getAllPosts={GetAllPostsFactory} />
}
