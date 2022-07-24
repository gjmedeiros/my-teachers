import { useState, FormEvent } from 'react'

import { teacherApi } from '../../../services/teacherApi'
import { Teacher } from '../../../types/Teacher'
import Input from '../../UI/Input'
import Select from '../../UI/Select'
import Header from './Header'
import { Form } from './styles'
import TeacherItem from './TeacherItem'

const UserProfile = () => {
  const api = teacherApi()

  const [teachers, setTeachers] = useState([])

  const [subject, setSubject] = useState('')
  const [week_day, setSWeekDay] = useState('')
  const [time, setTime] = useState('')

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault()

    const { data } = await api.index(subject, week_day, time)

    if (data) {
      setTeachers(data)
    }
  }

  return (
    <>
      <Header title="Estes são os professores disponíveis.">
        <Form onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => {
              setSubject(e.target.value)
            }}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' }
            ]}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={e => {
              setSWeekDay(e.target.value)
            }}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' }
            ]}
          />

          <Input
            name="Hora"
            label="Hora"
            type="time"
            value={time}
            onChange={e => {
              setTime(e.target.value)
            }}
          />

          <button type="submit">Buscar</button>
        </Form>
      </Header>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </>
  )
}

export default UserProfile
