import { LoginPage } from 'application/pages'
import { LoginFactory } from 'application/factories'

export const MakeLogin = () => {
  return <LoginPage login={LoginFactory} />
}
