import { ListPostsPage } from 'application/pages'
import { MakeFindAllPostsStore } from 'main/factories/store'
import { MakeFindAllPosts } from 'main/factories/usecases'

export const MakeListPostsPage = () => {
  return (
    <ListPostsPage
      findAllPostsStore={MakeFindAllPostsStore()}
      findAllPostData={MakeFindAllPosts()}
    />
  )
}
