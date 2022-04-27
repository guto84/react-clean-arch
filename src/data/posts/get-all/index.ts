import { GetAllPostDataProtocol } from 'usecases'
import { useAppSelector, useAppDispatch } from 'data/hooks'
import { getAllPostsAction } from './get-all-action'

export class GetAllPostsData implements GetAllPostDataProtocol {
  dispatch = useAppDispatch()

  allPosts = useAppSelector((state) => state.getAllPosts)

  getAllPosts = () => this.dispatch(getAllPostsAction())
}
