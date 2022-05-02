import { LoginPage } from 'application/pages'
import { MakeLogin as Login } from 'application/factories'

export const MakeLoginPage = () => {
  return <LoginPage login={Login} />
}
