import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ListPosts, ShowPost, CreatePosts, Login } from 'application/pages'

const RoutesRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPosts />} />
        <Route path="/:id" element={<ShowPost />} />
        <Route path="/create" element={<CreatePosts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesRoot
