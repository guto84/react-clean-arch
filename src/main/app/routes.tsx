import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ListPosts, ShowPost, CreatePosts } from 'pages'

const RoutesRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPosts />} />
        <Route path="/:id" element={<ShowPost />} />
        <Route path="/create" element={<CreatePosts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesRoot
