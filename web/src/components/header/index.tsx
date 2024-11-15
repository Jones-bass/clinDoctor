import { NavLink, useNavigate } from 'react-router-dom'
import { ButtonIcon, HeaderContainer } from './styles'
import { BiUser } from 'react-icons/bi'
import { Loading } from '../loading'
import { useCallback, useState } from 'react'
import { useAuth } from '../../hook/auth'
import { Dropdown } from '../dropdown'
import logo from '../../assets/logo.png'

export function Header() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleOnSubmit = useCallback(() => {
    setLoading(true)
    navigate('/login')
  }, [navigate])

  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="inicio">
          <img className="logo" src={logo} alt="Logo ClinDoctor" />
        </NavLink>
        <div className="abas">
          <NavLink to="/servicos" title="Serviços">
            Serviços
          </NavLink>
          <NavLink to="/sobre" title="Sobre">
            Sobre
          </NavLink>
          <NavLink to="/contato" title="Contato">
            Contato
          </NavLink>
        </div>

        {user ? (
          <Dropdown />
        ) : (
          <ButtonIcon type="button" onClick={handleOnSubmit}>
            {loading ? (
              <Loading />
            ) : (
              <>
                <BiUser className="icon-user" /> <span>Login</span>
              </>
            )}
          </ButtonIcon>
        )}
      </nav>
    </HeaderContainer>
  )
}
