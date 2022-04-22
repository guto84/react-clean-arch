import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ListPosts } from 'pages/list-posts'

const RoutesRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPosts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesRoot
