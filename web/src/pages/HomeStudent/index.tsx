import { useState, FormEvent } from 'react'

import HeaderStudent from '../../components/HomeStudent/HeaderStudent'
import TeacherItem from '../../components/TeacherItem'
import InputForm from '../../components/UI/Input/RegisterForm/InputForm'
import Select from '../../components/UI/Select'
import { teacherApi } from '../../services/teacherApi'
import { Teacher } from '../../types/Teacher'
import { Container, Form } from './styles'

function HomeStudent() {
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
    <Container>
      <HeaderStudent title="Estes são os professores disponíveis.">
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

          <InputForm
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
      </HeaderStudent>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </Container>
  )
}

export default HomeStudent
