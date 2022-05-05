import { Body, HttpLogin } from 'domain/http'

type Props = {
  httpLogin: HttpLogin
}

export const LoginController = ({ httpLogin }: Props) => {
  const handleLogin = async (body: Body) => await httpLogin.handle(body)

  return {
    handleLogin
  }
}
