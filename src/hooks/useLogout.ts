import { useNavigate } from 'react-router-dom'

export default function useLogout() {
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem('token')
    navigate('/login', { replace: true })
  }

  return { logout }
}
