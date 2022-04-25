import React, { useEffect } from 'react'

import { getByIdPostsController } from 'controllers/posts'

import { routerAdapter } from 'shared/adapters'

export const ShowPost: React.FC = () => {
  const { Link, params } = routerAdapter()
  const { showPost, getByIdPosts } = getByIdPostsController(Number(params.id))

  useEffect(() => {
    getByIdPosts()
  }, [getByIdPosts])

  return (
    <>
      <h1>Post</h1>
      {!showPost.postLoading ? (
        <ul>
          <li>{showPost.post.title}</li>
          <li>{showPost.post.body}</li>
        </ul>
      ) : (
        <p>Carregando...</p>
      )}
      <Link to="/">Voltar</Link>
    </>
  )
}
