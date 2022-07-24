/* eslint-disable react/require-default-props */
import { Drawer } from '@mui/material'
import React, { useState } from 'react'
import { MdMenu, MdArrowBackIosNew, MdSettings, MdHome } from 'react-icons/md'
import { Link } from 'react-router-dom'

import logoImg from '../../../../assets/images/logo.svg'
import profile from '../../../../assets/images/Profile.png'
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
  const [open, setOpen] = useState(false)
  const handleDrawer = () => setOpen(!open)

  return (
    <Header>
      <div className="top-bar-container">
        <MdMenu
          style={{ cursor: 'pointer', color: 'var(--color-primary-light)' }}
          size={28}
          onClick={handleDrawer}
        />

        <img src={logoImg} alt="Proffy logo" />
      </div>

      <Drawer
        PaperProps={{
          sx: {
            width: 250,
            backgroundColor: 'var(--color-primary-light)',
            borderRadius: 1
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div className="menu-bar">
          <div className="button-close-menu">
            <MdArrowBackIosNew
              style={{ cursor: 'pointer' }}
              size={28}
              onClick={handleDrawer}
            />
          </div>
          <div className="profile-menu">
            <img src={profile} alt="Foto de Perfil" />
            <strong>Gabriel Medeiros</strong>
          </div>

          <ul>
            <li>
              <Link to="/">
                <MdHome style={{ cursor: 'pointer' }} size={28} />
                <strong>Home</strong>
              </Link>
            </li>
            <li>
              <Link to="/">
                <MdSettings style={{ cursor: 'pointer' }} size={28} />
                <strong>Settings</strong>
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>

      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </div>
    </Header>
  )
}

export default HeaderStudent
