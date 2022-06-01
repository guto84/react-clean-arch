import { useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PostEntity } from 'domain/entities'
import { FindAllPostsStore } from 'application/store'
import { FindAllPostData } from 'application/data'

type Props = {
  findAllPostsStore: FindAllPostsStore
  findAllPostData: FindAllPostData
}

export const ListPostsPage = ({
  findAllPostsStore,
  findAllPostData
}: Props) => {
  const {
    allPostsSelector,
    handleListErrorMessage,
    handlePostList,
    handlePostListLoading
  } = findAllPostsStore

  const handleFindAllPosts = useCallback(async () => {
    handleListErrorMessage('')
    try {
      const response = await findAllPostData.handle()
      handlePostList(response)
      handlePostListLoading(false)
    } catch (error: any) {
      handleListErrorMessage(error)
    }
  }, [])

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
              {allPostsSelector.postList.map((post: PostEntity) => (
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
