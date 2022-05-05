import { LoginPage } from 'application/pages'
import { MakeLogin } from 'application/factories'

export const MakeLoginPage = () => {
  return <LoginPage login={MakeLogin} />
}
