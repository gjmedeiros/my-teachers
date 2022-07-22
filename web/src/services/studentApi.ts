import api from './api'

export const studentApi = () => ({
  createStudent: async (name: string, avatar: string, whatsapp: string) => {
    await api.post('/student', {
      name,
      avatar,
      whatsapp
    })
  }
})
