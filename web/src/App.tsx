import { Route, Routes } from 'react-router-dom'

import { RequireAuth } from './contexts/Auth/RequireAuth'
import HomeStudent from './pages/HomeStudent'
import Login from './pages/Login'
import RegisterForm from './pages/RegisterForm'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/study"
        element={
          // <RequireAuth>
          <HomeStudent />
          // </RequireAuth>
        }
      />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  )
}

export default App
