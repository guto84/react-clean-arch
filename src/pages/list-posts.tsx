import React from 'react'
import { useEffect } from 'react'

import { getAllPostsController } from 'controllers/posts/get-all-posts-controller'

export const ListPosts: React.FC = () => {
  const { posts, getAllPosts } = getAllPostsController()

  useEffect(() => {
    getAllPosts()
  }, [getAllPosts])

  return (
    <>
      <h1>Posts</h1>
      {posts.postListLoading && <p>Carregando...</p>}
      <ul>
        {posts.postList.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}
