import { useState } from 'react'

import { userApi } from '../../hooks/userApi'
import { User } from '../../types/User'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null)
  const api = userApi()

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password)

    if (data.user && data.token) {
      setUser(data.user)
      return true
    }

    return false
  }

  const singout = async () => {
    await api.logout()

    setUser(null)
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ user, signin, singout }}>
      {children}
    </AuthContext.Provider>
  )
}
