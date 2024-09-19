import { PropsWithChildren, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

type ProtectedRouteProps = PropsWithChildren
export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const auth = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!auth.token) {
      navigate('/login', { replace: true })
    }
  }, [auth.token, navigate])
  return children
}
