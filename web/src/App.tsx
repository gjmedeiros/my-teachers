import { Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import RegisterForm from './pages/RegisterForm'
import TeacherList from './pages/TeacherList'

import './assets/styles/global.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/study" element={<TeacherList />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  )
}

export default App
