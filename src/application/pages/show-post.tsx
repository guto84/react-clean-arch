import { useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FindByIdPostData } from 'application/data'
import { FindByIdPostStore } from 'application/store'

type Props = {
  findByIdPostStore: FindByIdPostStore
  findByIdPostData: FindByIdPostData
}

export const ShowPostPage = ({
  findByIdPostStore,
  findByIdPostData
}: Props) => {
  const {
    findByIdPostSelector,
    handlePostErrorMessage,
    handlePostLoading,
    handlePost
  } = findByIdPostStore

  const handleFindByIdPost = useCallback(async () => {
    handlePostErrorMessage('')
    try {
      const response = await findByIdPostData.handle()
      handlePost(response)
      handlePostLoading(false)
    } catch (error: any) {
      handlePostErrorMessage(error)
    }
  }, [])

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
