import { UserEntity } from 'domain/entities'
import { UseAppDispatch, UseAppSelector } from 'application/store/root'
import {
  setUserList,
  setUserListLoading,
  setUserListErrorMessage
} from './find-all-slice'

export class FindAllUsersStore {
  constructor(
    private readonly useAppDispatch: UseAppDispatch,
    private readonly useAppSelector: UseAppSelector
  ) {}

  dispatch = this.useAppDispatch()

  allUsersSelector = this.useAppSelector((state) => state.findAllUsers)

  handleListErrorMessage = (message: string) =>
    this.dispatch(setUserListErrorMessage(message))

  handleUserListLoading = (status: boolean) =>
    this.dispatch(setUserListLoading(status))

  handleUserList = (list: UserEntity[]) => this.dispatch(setUserList(list))
}
