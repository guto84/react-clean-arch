import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
  MakeCreatePostPage,
  MakeListPostsPage,
  MakeShowPostPage
} from 'main/factories/pages'

const RoutesRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MakeListPostsPage />} />
        <Route path="/:id" element={<MakeShowPostPage />} />
        <Route path="/create" element={<MakeCreatePostPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesRoot
