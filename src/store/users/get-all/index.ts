import { HttpGetAllUsers } from 'domain/usecases'
import type { UseAppDispatch, UseAppSelector } from 'infra/hooks'
import {
  setUserList,
  setUserListLoading,
  setUserListErrorMessage
} from './get-all-slice'

export class GetAllUsersData {
  constructor(
    private readonly getAllUsers: HttpGetAllUsers,
    private readonly useAppDispatch: UseAppDispatch,
    private readonly useAppSelector: UseAppSelector
  ) {}

  dispatch = this.useAppDispatch()

  allUsersSelector = this.useAppSelector((state) => state.getAllUsers)

  handleListErrorMessage = (message: string) =>
    this.dispatch(setUserListErrorMessage(message))

  handlePostListLoading = (status: boolean) =>
    this.dispatch(setUserListLoading(status))

  handleGetAllUsers = async () => {
    try {
      const response = await this.getAllUsers.handle()
      this.dispatch(setUserList(response))
      this.dispatch(setUserListLoading(false))
    } catch (error) {
      return this.dispatch(setUserListErrorMessage(''))
    }
  }
}
