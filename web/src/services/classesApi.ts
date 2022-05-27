import { ScheduleItems } from '../types/ScheduleItems'
import api from './api'

export const classesApi = () => ({
  index: async (subject: string, week_day: string, time: string) => {
    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    return response.data
  },

  create: async (
    name: string,
    avatar: string,
    whatsapp: string,
    bio: string,
    subject: string,
    cost: string,
    scheduleItems: ScheduleItems
  ) => {
    await api.post('/classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    })
  }
})
