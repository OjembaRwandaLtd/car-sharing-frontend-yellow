import { PropsWithChildren, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

type ProtectedRouteProps = PropsWithChildren
export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, setToken } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setToken(null)
      localStorage.removeItem('token')
      navigate('/login', { replace: true })
    }
  }, [isAuthenticated, navigate, setToken])

  return isAuthenticated ? children : null
}
