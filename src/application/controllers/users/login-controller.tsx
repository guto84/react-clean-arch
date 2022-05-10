import { LoginEntity } from 'domain/entities'
import { Body, HttpClient } from 'domain/http'

type Props = {
  httpLogin: HttpClient
}

export const LoginController = ({ httpLogin }: Props) => {
  const handleLogin = async (body: Body) =>
    await httpLogin.handle<Promise<LoginEntity>, Body>(body)

  return {
    handleLogin
  }
}
