import { GetAllUserDataProtocol } from 'usecases'
import { useAppSelector, useAppDispatch } from 'data/hooks'
import { getAllUsersAction } from './get-all-action'

export class GetAllUsersData implements GetAllUserDataProtocol {
  dispatch = useAppDispatch()

  allUsers = useAppSelector((state) => state.getAllUsers)

  getAllUsers = () => this.dispatch(getAllUsersAction())
}
