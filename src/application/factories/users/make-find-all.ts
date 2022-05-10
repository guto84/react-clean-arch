import { HttpClient } from 'domain/http'
import { FindAllUsersData } from 'store'
import { HttpClientAdapter, HttpRequest } from 'infra/adapters'
import { useAppDispatch, useAppSelector } from 'infra/hooks'
import { FindAllUserController } from 'application/controllers'

export const MakeFindAllUsers = () => {
  const httpRequest: HttpRequest = {
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'get'
  }
  const httpClientAdapter = new HttpClientAdapter()
  const findAllUsers = new HttpClient(httpClientAdapter, httpRequest)

  const store = new FindAllUsersData(
    findAllUsers,
    useAppDispatch,
    useAppSelector
  )
  return FindAllUserController({ store })
}

type FindAllUsers = typeof MakeFindAllUsers
export type { FindAllUsers }
