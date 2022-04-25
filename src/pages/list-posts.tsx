import React, { useEffect } from 'react'

import { getAllPostsController } from 'controllers/posts'

import { routerAdapter } from 'shared/adapters'

export const ListPosts: React.FC = () => {
  const { Link } = routerAdapter()
  const { allPosts, getAllPosts } = getAllPostsController()

  useEffect(() => {
    getAllPosts()
  }, [getAllPosts])

  return (
    <>
      <h1>Posts</h1>
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
