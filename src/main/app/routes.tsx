import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
  MakeCreatePost,
  MakeGetAllPosts,
  MakeGetByIdPost,
  MakeLogin
} from 'main/factories'

const RoutesRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MakeGetAllPosts />} />
        <Route path="/:id" element={<MakeGetByIdPost />} />
        <Route path="/create" element={<MakeCreatePost />} />
        <Route path="/login" element={<MakeLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesRoot
