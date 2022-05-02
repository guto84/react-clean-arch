import React, { useEffect } from 'react'
import { routerAdapter } from 'application/shared/adapters'
import { FindByIdPost } from 'application/factories'

type Props = {
  findByIdPost: FindByIdPost
}

export const ShowPostPage = ({ findByIdPost }: Props) => {
  const { Link, params } = routerAdapter()

  const { findByIdPostSelector, handleFindByIdPost } = findByIdPost(
    Number(params.id)
  )

  useEffect(() => {
    handleFindByIdPost()
  }, [handleFindByIdPost])

  return (
    <>
      <h1>Post</h1>
      {!findByIdPostSelector.postLoading ? (
        <ul>
          <li>{findByIdPostSelector.post.title}</li>
          <li>{findByIdPostSelector.post.body}</li>
        </ul>
      ) : (
        <p>Carregando...</p>
      )}
      <Link to="/">Voltar</Link>
    </>
  )
}
