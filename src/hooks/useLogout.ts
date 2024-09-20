import { useNavigate } from 'react-router-dom'
import { Links } from '../routes/router'

export default function useLogout() {
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem('token')
    navigate(Links.HOME, { replace: true })
  }

  return { logout }
}
