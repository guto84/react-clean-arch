import { ShowPostPage } from 'application/pages'
import { MakeFindByIdPostStore } from 'main/factories/store'
import { MakeFindByIdPost } from 'main/factories/usecases'

export const MakeShowPostPage = () => {
  return (
    <ShowPostPage
      findByIdPostStore={MakeFindByIdPostStore()}
      findByIdPostData={MakeFindByIdPost()}
    />
  )
}
