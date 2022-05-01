import { HttpGetAllUsers } from 'domain/usecases'
import { GetAllUsersData } from 'store'
import { HttpClientAdapter, HttpRequest } from 'infra/adapters'
import { useAppDispatch, useAppSelector } from 'infra/hooks'
import { GetAllUserController } from 'application/controllers'

export const GetAllUsersFactory = () => {
  const httpRequest: HttpRequest = {
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'get'
  }
  const httpClientAdapter = new HttpClientAdapter()
  const getAllUsers = new HttpGetAllUsers(httpClientAdapter, httpRequest)

  const store = new GetAllUsersData(getAllUsers, useAppDispatch, useAppSelector)
  return GetAllUserController(store)
}

type GetAllUsers = typeof GetAllUsersFactory
export type { GetAllUsers }
