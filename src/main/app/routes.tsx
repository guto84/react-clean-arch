import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
  MakeCreatePostPage,
  MakeListPostsPage,
  MakeShowPostPage,
  MakeLoginPage
} from 'main/factories'

const RoutesRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MakeListPostsPage />} />
        <Route path="/:id" element={<MakeShowPostPage />} />
        <Route path="/create" element={<MakeCreatePostPage />} />
        <Route path="/login" element={<MakeLoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesRoot
