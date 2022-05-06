/* eslint-disable react/require-default-props */
import React from 'react'
import { Link } from 'react-router-dom'

import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'
import { Header } from './styles'

interface INPageHeaderProps {
  title: string
  description?: string
  children?: React.ReactNode
}

const PageHeader: React.FC<INPageHeaderProps> = ({
  title,
  description,
  children
}) => {
  return (
    <Header>
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
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

export default PageHeader
