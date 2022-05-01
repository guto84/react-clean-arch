import React, { useEffect } from 'react'
import { routerAdapter } from 'application/shared/adapters'
import { GetByIdPost } from 'application/factories'

type Props = {
  getByIdPost: GetByIdPost
}

export const ShowPost = ({ getByIdPost }: Props) => {
  const { Link, params } = routerAdapter()

  const { getByIdPostSelector, handleGetByIdPost } = getByIdPost(
    Number(params.id)
  )

  useEffect(() => {
    handleGetByIdPost()
  }, [handleGetByIdPost])

  return (
    <>
      <h1>Post</h1>
      {!getByIdPostSelector.postLoading ? (
        <ul>
          <li>{getByIdPostSelector.post.title}</li>
          <li>{getByIdPostSelector.post.body}</li>
        </ul>
      ) : (
        <p>Carregando...</p>
      )}
      <Link to="/">Voltar</Link>
    </>
  )
}
