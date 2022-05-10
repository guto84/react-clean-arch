import { UserEntity } from 'domain/entities'
import { HttpClient } from 'domain/http'
import type { UseAppDispatch, UseAppSelector } from 'infra/hooks'
import {
  setUserList,
  setUserListLoading,
  setUserListErrorMessage
} from './find-all-slice'

export class FindAllUsersData {
  constructor(
    private readonly findAllUsers: HttpClient,
    private readonly useAppDispatch: UseAppDispatch,
    private readonly useAppSelector: UseAppSelector
  ) {}

  dispatch = this.useAppDispatch()

  allUsersSelector = this.useAppSelector((state) => state.findAllUsers)

  handleListErrorMessage = (message: string) =>
    this.dispatch(setUserListErrorMessage(message))

  handlePostListLoading = (status: boolean) =>
    this.dispatch(setUserListLoading(status))

  handleFindAllUsers = async () => {
    try {
      const response = await this.findAllUsers.handle<UserEntity[], null>()
      this.dispatch(setUserList(response))
      this.dispatch(setUserListLoading(false))
    } catch (error) {
      return this.dispatch(setUserListErrorMessage(''))
    }
  }
}
