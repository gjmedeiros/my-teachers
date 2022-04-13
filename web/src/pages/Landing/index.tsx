import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import LandingImg from '../../assets/images/landing.svg'
import logoImg from '../../assets/images/logo.svg'
import { connectionsApi } from '../../hooks/connectionsApi'

import './styles.css'

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0)
  const api = connectionsApi()

  useEffect(() => {
    const connections = async () => {
      const data = await api.index()

      if (data.total) {
        setTotalConnections(data.total)
      }
    }

    connections()
  }, [])

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Logotipo Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={LandingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Lecionar" />
            Lecionar
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas{' '}
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  )
}

export default Landing
