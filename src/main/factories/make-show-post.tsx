import { ShowPostPage } from 'application/pages'
import { MakeFindByIdPost } from 'application/factories'

export const MakeShowPostPage = () => {
  return <ShowPostPage findByIdPost={MakeFindByIdPost} />
}
