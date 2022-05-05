import { HttpLogin } from 'domain/http'
import { LoginController } from 'application/controllers'
import { HttpClientAdapter, HttpRequest } from 'infra/adapters'

export const MakeLogin = () => {
  const httpRequest: HttpRequest = {
    url: 'http://localhost:5000/v1/users/login',
    method: 'post'
  }

  const httpClientAdapter = new HttpClientAdapter()
  const httpLogin = new HttpLogin(httpClientAdapter, httpRequest)

  return LoginController({ httpLogin })
}

type Login = typeof MakeLogin
export type { Login }
