import React from 'react'

import whatsappIcon from '../../../../assets/images/icons/whatsapp.svg'
import { connectionsApi } from '../../../../services/connectionsApi'
import { Teacher } from '../../../../types/Teacher'
import { ContainerTeacherItem } from './styles'

export interface INTeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<INTeacherItemProps> = ({ teacher }) => {
  const api = connectionsApi()

  const createNewConnection = async () => {
    await api.create(teacher.id)
  }

  return (
    <ContainerTeacherItem>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora:
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
          rel="noreferrer"
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </ContainerTeacherItem>
  )
}

export default TeacherItem
