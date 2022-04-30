import React, { useEffect } from 'react'
import { routerAdapter } from 'application/shared/adapters'
import { GetByIdPostFactory } from 'application/factories'

export const ShowPost: React.FC = () => {
  const { Link, params } = routerAdapter()

  const { getByIdPostSelector, handleGetByIdPost } = GetByIdPostFactory(
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
