import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import LandingImg from '../../assets/images/landing.svg'
import logoImg from '../../assets/images/logo.svg'
import InputLogin from '../../components/Input/InputLogin'
import { connectionsApi } from '../../hooks/connectionsApi'

import './styles.css'

function Login() {
  const api = connectionsApi()

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [totalConnections, setTotalConnections] = useState(0)

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
    <div id="page-login">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={LandingImg} alt="Plataforma de estudos" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <main>
          <form>
            <header>
              <img src={logoImg} alt="Logotipo Proffy" />
            </header>
            <fieldset>
              <InputLogin
                name="User"
                type="text"
                value={user}
                className={user !== '' ? 'has-val input' : 'input'}
                onChange={e => {
                  setUser(e.target.value)
                }}
              />

              <InputLogin
                name="Password"
                type="password"
                value={password}
                className={password !== '' ? 'has-val input' : 'input'}
                onChange={e => {
                  setPassword(e.target.value)
                }}
              />
            </fieldset>
            <footer>
              <div className="buttons-container">
                <Link to="/study" className="study">
                  <img src={studyIcon} alt="Login" />
                  Login
                </Link>

                <Link to="/register" className="give-classes">
                  <img src={giveClassesIcon} alt="Cadastrar" />
                  Cadastrar
                </Link>
              </div>
              <span className="total-connections">
                Total de {totalConnections} conexões já realizadas{' '}
                <img src={purpleHeartIcon} alt="Coração roxo" />
              </span>
            </footer>
          </form>
        </main>
      </div>
    </div>
  )
}

export default Login
