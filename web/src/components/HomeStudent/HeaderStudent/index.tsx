/* eslint-disable react/require-default-props */
import React, { useState } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'

import logoImg from '../../../assets/images/logo.svg'
import { Header } from './styles'

interface INPageHeaderProps {
  title: string
  description?: string
  children?: React.ReactNode
}

const HeaderStudent: React.FC<INPageHeaderProps> = ({
  title,
  description,
  children
}) => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <Header>
      <div className="top-bar-container">
        {click ? (
          <MdClose
            style={{ cursor: 'pointer' }}
            size={28}
            onClick={handleClick}
          />
        ) : (
          <MdMenu
            style={{ cursor: 'pointer' }}
            size={28}
            onClick={handleClick}
          />
        )}

        <img src={logoImg} alt="Proffy logo" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </div>

      <div className="menu-bar">
        <div className="profile">
          <h1>Imagem</h1>
        </div>
      </div>
    </Header>
  )
}

export default HeaderStudent
