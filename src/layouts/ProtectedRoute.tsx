import { useEffect } from 'react'
import useLocalStorageMonitor from '../hooks/useLocalStorageMonitor'
import { getAuthToken } from '../util/auth'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

export default function ProtectedRoute() {
  useLocalStorageMonitor()
  const navigate = useNavigate()
  const token = getAuthToken()
  const location = useLocation()

  const isLogin = location.pathname === '/login'
  const isSplash = location.pathname === '/'

  useEffect(() => {
    if (!token && !isSplash) {
      navigate('/login', { replace: true })
    }
    if (token && (isSplash || isLogin)) {
      navigate('/home', { replace: true })
    }
  }, [token, navigate])

  return <Outlet />
}
