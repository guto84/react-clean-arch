import { ListPostsPage } from 'application/pages'
import { MakeFindAllPosts } from 'application/factories'

export const MakeListPostsPage = () => {
  return <ListPostsPage findAllPosts={MakeFindAllPosts} />
}
