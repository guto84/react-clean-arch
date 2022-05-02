import { useEffect } from 'react'
import { routerAdapter } from 'application/shared/adapters'
import { FindAllPosts } from 'application/factories'

type Props = {
  findAllPosts: FindAllPosts
}

export const ListPostsPage = ({ findAllPosts }: Props) => {
  const { Link } = routerAdapter()

  const { allPostsSelector, handleFindAllPosts } = findAllPosts()

  useEffect(() => {
    handleFindAllPosts()
  }, [handleFindAllPosts])

  return (
    <>
      <h1>Posts</h1>
      {!allPostsSelector.postListLoading ? (
        <>
          <Link to="create">Cadastrar</Link>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Ver</th>
              </tr>
            </thead>
            <tbody>
              {allPostsSelector.postList.map((post) => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>
                    <Link to={`/${post.id}`}>Ver</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>Carregando</p>
      )}
    </>
  )
}
