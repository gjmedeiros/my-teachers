import { ScheduleItems } from '../types/ScheduleItems'
import api from './api'

export const teacherApi = () => ({
  index: async (subject: string, week_day: string, time: string) => {
    const response = await api.get('/teacher', {
      params: {
        subject,
        week_day,
        time
      }
    })

    return response.data
  },

  createTeacher: async (
    name: string,
    avatar: string,
    whatsapp: string,
    bio: string,
    subject: string,
    cost: string,
    scheduleItems: ScheduleItems
  ) => {
    await api.post('/teacher', {
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
