import { Link, useParams } from 'react-router-dom'

export const routerAdapter = () => {
  const params = useParams()
  return {
    Link,
    params
  }
}
