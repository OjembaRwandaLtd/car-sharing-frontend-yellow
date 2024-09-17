import { PropsWithChildren, useEffect } from 'react'
import useLocalStorageMonitor from '../hooks/useLocalStorageMonitor'
import { getAuthToken } from '../util/auth'
import { useNavigate } from 'react-router-dom'

type ProtectedRouteProps = PropsWithChildren
export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  useLocalStorageMonitor()
  const navigate = useNavigate()
  const token = getAuthToken()
  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true })
    }
  }, [token, navigate])

  return children
}
