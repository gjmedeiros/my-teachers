import api from './api'

export const connectionsApi = () => ({
  index: async () => {
    const response = await api.get('/connections')

    return response.data
  },

  create: async (id: number) => {
    await api.post('/connections', {
      user_id: id
    })
  }
})
