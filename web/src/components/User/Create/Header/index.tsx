/* eslint-disable react/require-default-props */
import React from 'react'
import { MdArrowBack } from 'react-icons/md'
import { Link } from 'react-router-dom'

import logoImg from '../../../../assets/images/logo.svg'
import { Header } from './styles'

interface INPageHeaderProps {
  title: string
  description?: string
  children?: React.ReactNode
}

const UserCreateHeader: React.FC<INPageHeaderProps> = ({
  title,
  description,
  children
}) => {
  return (
    <Header>
      <div className="top-bar-container">
        <Link to="/">
          <MdArrowBack
            style={{ cursor: 'pointer', color: 'var(--color-primary-light)' }}
            size={28}
          />
        </Link>
        <img src={logoImg} alt="Proffy logo" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </div>
    </Header>
  )
}

export default UserCreateHeader
