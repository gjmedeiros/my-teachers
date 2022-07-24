import { useState, useEffect, FormEvent, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import giveClassesIcon from '../../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../../assets/images/icons/purple-heart.svg'
import studyIcon from '../../../assets/images/icons/study.svg'
import LandingImg from '../../../assets/images/landing.svg'
import logoImg from '../../../assets/images/logo.svg'
import { AuthContext } from '../../../contexts/Auth/AuthContext'
import { connectionsApi } from '../../../services/connectionsApi'
import Input from './Input'
import { LogoContainer, ButtonsContainer, TotalConnections } from './styles'

const UserLogin = () => {
  const api = connectionsApi()
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

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

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()

    if (user && password) {
      const isLogged = await auth.signin(user, password)

      if (isLogged) {
        navigate('/user/profile')
      } else {
        // eslint-disable-next-line no-alert
        alert('Falha na Autenticação')
      }
    } else {
      // eslint-disable-next-line no-alert
      alert('Insira os dados de Login')
    }
  }

  return (
    <>
      <LogoContainer>
        <img src={LandingImg} alt="Plataforma de estudos" />
        <h2>Sua plataforma de estudos online.</h2>
      </LogoContainer>

      <main>
        <form onSubmit={handleLogin}>
          <header>
            <img src={logoImg} alt="Logotipo Proffy" />
          </header>
          <fieldset>
            <Input
              name="User"
              type="text"
              value={user}
              className={user !== '' ? 'has-val input' : 'input'}
              onChange={e => {
                setUser(e.target.value)
              }}
            />

            <Input
              name="Password"
              type="password"
              value={password}
              className={password !== '' ? 'has-val input' : 'input'}
              onChange={e => {
                setPassword(e.target.value)
              }}
            />

            <div className="forgot-password">
              <Link to="/">Esqueceu sua senha ?</Link>
            </div>
          </fieldset>
          <footer>
            <ButtonsContainer>
              <button type="submit">
                <img src={studyIcon} alt="Login" />
                Login
              </button>

              <Link to="/user/create">
                <img src={giveClassesIcon} alt="Cadastrar" />
                Cadastrar
              </Link>
            </ButtonsContainer>
            <TotalConnections>
              Total de {totalConnections} conexões já realizadas{' '}
              <img src={purpleHeartIcon} alt="Coração roxo" />
            </TotalConnections>
          </footer>
        </form>
      </main>
    </>
  )
}

export default UserLogin
