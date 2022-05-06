import { useState, FormEvent, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import warningIcon from '../../assets/images/icons/warning.svg'
import FileList from '../../components/FileList'
import PageHeader from '../../components/PageHeader'
import InputForm from '../../components/UI/Input/RegisterForm'
import Select from '../../components/UI/Select'
import Textarea from '../../components/UI/Textarea'
import Upload from '../../components/Upload'
import { classesApi } from '../../hooks/classesApi'
import { BlockFile, Container, Fieldset, Footer } from './styles'

function RegisterForm() {
  const navigate = useNavigate()
  const api = classesApi()

  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')
  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')

  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: '',
      to: ''
    }
  ])

  const addNewScheduleItem = () => {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: ''
      }
    ])
  }

  const setScheduleItemValue = (
    position: number,
    field: string,
    value: string
  ) => {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }
      return scheduleItem
    })
    setScheduleItems(updatedScheduleItems)
  }

  const handlePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/
    const str = event.target.value.replace(/[^0-9]/g, '').slice(0, 11)

    const result = str.replace(regex, '($1)$2-$3')

    setWhatsapp(result)
  }

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault()

    await api
      .create(name, avatar, whatsapp, bio, subject, cost, scheduleItems)
      .then(() => {
        alert('Cadastro realizado com sucesso!')

        navigate('/')
      })
      .catch(() => {
        alert('Erro no cadastro!')
      })
  }

  return (
    <Container>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher este formulário de inscrição."
      />

      <main>
        <form onSubmit={handleRegister}>
          <Fieldset>
            <legend>Seus dados</legend>

            <InputForm
              name="name"
              label="Nome completo"
              type="text"
              value={name}
              onChange={e => {
                setName(e.target.value)
              }}
            />

            <BlockFile>
              <Upload />
              <FileList />
            </BlockFile>

            <InputForm
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={e => handlePhoneNumber(e)}
            />

            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={e => {
                setBio(e.target.value)
              }}
            />
          </Fieldset>

          <Fieldset>
            <legend>Sobre a aula</legend>

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

            <InputForm
              name="cost"
              label="Custo da hora por aula"
              type="text"
              value={cost}
              onChange={e => {
                setCost(e.target.value)
              }}
            />
          </Fieldset>

          <Fieldset>
            <legend>
              Horários disponíveis
              <button
                className="button-new-schedule"
                type="button"
                onClick={addNewScheduleItem}
              >
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={e =>
                      setScheduleItemValue(index, 'week_day', e.target.value)
                    }
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
                    name="from"
                    label="Das"
                    type="time"
                    value={scheduleItem.from}
                    onChange={e =>
                      setScheduleItemValue(index, 'from', e.target.value)
                    }
                  />

                  <InputForm
                    name="to"
                    label="Até"
                    type="time"
                    value={scheduleItem.to}
                    onChange={e =>
                      setScheduleItemValue(index, 'to', e.target.value)
                    }
                  />
                </div>
              )
            })}
          </Fieldset>

          <Footer>
            <p>
              <img src={warningIcon} alt="aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </Footer>
        </form>
      </main>
    </Container>
  )
}

export default RegisterForm
