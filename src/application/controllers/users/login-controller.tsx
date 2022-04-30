import { Body, HttpLogin } from 'domain/usecases'

export class LoginController {
  constructor(private readonly httpLogin: HttpLogin) {}

  handleLogin = async (body: Body) => await this.httpLogin.handle(body)
}
