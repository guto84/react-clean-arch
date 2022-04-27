import React, { useEffect } from 'react'

import { GetByIdPostController } from 'controllers/posts'

import { routerAdapter } from 'shared/adapters'

import { GetByIdPostsData } from 'data/posts'

export const ShowPost: React.FC = () => {
  const { Link, params } = routerAdapter()
  const store = new GetByIdPostsData()
  const { showPost, getByIdPosts } = new GetByIdPostController(store)

  useEffect(() => {
    getByIdPosts(Number(params.id))
  }, [getByIdPosts, params.id])

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
