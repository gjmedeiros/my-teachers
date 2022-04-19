import api from './api'

export const userApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post('/validate', { token })

    return response.data
  },
  signin: async (email: string, password: string) => {
    // Uso de Teste até construção do Back End
    return {
      user: { id: 1, name: 'Gabriel', email: 'gjmedeiros@outlook.com' },
      token: '12345678'
    }
    const response = await api.post('/signin', { email, password })

    return response.data
  },
  logout: async () => {
    const response = await api.post('/logout')

    return response.data
  }
})
