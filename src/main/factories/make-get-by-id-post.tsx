import { ShowPost } from 'application/pages'
import { GetByIdPostFactory } from 'application/factories'

export const MakeGetByIdPost = () => {
  return <ShowPost getByIdPost={GetByIdPostFactory} />
}
