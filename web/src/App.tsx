import { Route, Routes, Navigate } from 'react-router-dom'

import { RequireAuth } from './contexts/Auth/RequireAuth'
import PagesUserCreate from './pages/User/Create'
import Login from './pages/User/Login'
import PagesUserProfile from './pages/User/Profile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/user/login" />} />

      <Route path="/user/login" element={<Login />} />
      <Route path="/user/recover" element={<Login />} />

      <Route path="/user/create" element={<PagesUserCreate />} />
      <Route path="/user/create/sucess" element={<Login />} />

      <Route
        path="/user/profile"
        element={
          // <RequireAuth>
          <PagesUserProfile />
          // </RequireAuth>
        }
      />
    </Routes>
  )
}

export default App
