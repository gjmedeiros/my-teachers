import { Route, Routes } from 'react-router-dom'

import { RequireAuth } from './contexts/Auth/RequireAuth'
import Login from './pages/Login'
import PagesUserCreate from './pages/User/Create'
import PagesUserProfile from './pages/User/Profile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/user/profile"
        element={
          // <RequireAuth>
          <PagesUserProfile />
          // </RequireAuth>
        }
      />
      <Route path="/user/create" element={<PagesUserCreate />} />
    </Routes>
  )
}

export default App
