import { useCallback, useState, useEffect, useRef } from 'react'
import { DropdownContainer, DropdownMenu } from './styled'
import { useAuth } from '../../hook/auth'
import { useNavigate } from 'react-router-dom'

export function Dropdown() {
  const navigate = useNavigate()
  const { user, signOut } = useAuth()
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleProfile = useCallback(() => {
    navigate('/profile')
    setOpen(false)
  }, [navigate])

  const handleDashboard = useCallback(() => {
    navigate('/dashboard')
    setOpen(false)
  }, [navigate])

  const handleMedic = useCallback(() => {
    navigate('/medicos')
    setOpen(false)
  }, [navigate])

  const handleSignOut = () => {
    signOut()
    setOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <DropdownContainer ref={dropdownRef}>
      <div className="user-info" onClick={handleOpen}>
        <img
          src={user.avatar_url}
          alt={user.name}
          title={user.name}
          className="avatar"
        />
      </div>
      {open ? (
        <DropdownMenu>
          <ul className="menu">
            <li className="menu-item" onClick={handleProfile}>
              Profile
            </li>
            <li className="menu-item" onClick={handleDashboard}>
              Dashboard
            </li>
            <li className="menu-item" onClick={handleMedic}>
              Médicos
            </li>
            <li className="menu-item" onClick={handleSignOut}>
              Sair
            </li>
          </ul>
        </DropdownMenu>
      ) : null}
    </DropdownContainer>
  )
}
