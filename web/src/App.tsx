import { Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import TeacherForm from './pages/TeacherForm'
import TeacherList from './pages/TeacherList'

import './assets/styles/global.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/study" element={<TeacherList />} />
      <Route path="/give-classes" element={<TeacherForm />} />
    </Routes>
  )
}

export default App
