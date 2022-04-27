import React, { useEffect } from 'react'

import { GetAllPostsData } from 'data/posts'
import { GetAllPostController } from 'controllers/posts'

import { routerAdapter } from 'shared/adapters'

export const ListPosts: React.FC = () => {
  const { Link } = routerAdapter()
  const store = new GetAllPostsData()
  const { allPosts, getAllPosts } = new GetAllPostController(store)

  useEffect(() => {
    getAllPosts()
  }, [getAllPosts])

  return (
    <>
      <h1>Posts</h1>
      <Link to="create">Cadastrar</Link>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Ver</th>
          </tr>
        </thead>
        <tbody>
          {allPosts.postList.map((post) => (
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
  )
}
