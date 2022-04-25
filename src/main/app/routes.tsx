import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ListPosts } from 'pages/list-posts'
import { ShowPost } from 'pages/show-post'

const RoutesRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPosts />} />
        <Route path="/:id" element={<ShowPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesRoot
