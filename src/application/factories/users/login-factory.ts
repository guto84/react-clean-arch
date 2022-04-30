import { LoginController } from 'application/controllers'
import { HttpLogin } from 'domain/usecases'
import { HttpClientAdapter, HttpRequest } from 'infra/adapters'

export const LoginFactory = () => {
  const httpRequest: HttpRequest = {
    url: 'http://localhost:5000/v1/users/login',
    method: 'post'
  }

  const httpClientAdapter = new HttpClientAdapter()
  const httpLogin = new HttpLogin(httpClientAdapter, httpRequest)

  return new LoginController(httpLogin)
}