import { GetByIdPostDataProtocol } from 'usecases'
import { useAppSelector, useAppDispatch } from 'data/hooks'
import { getByIdPostsAction } from './get-by-id-action'

export class GetByIdPostsData implements GetByIdPostDataProtocol {
  dispatch = useAppDispatch()

  showPost = useAppSelector((state) => state.getByIdPosts)

  getByIdPosts = (id: number) => this.dispatch(getByIdPostsAction(id))
}
