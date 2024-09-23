import { useEffect } from 'react'
import useLocalStorageMonitor from '../hooks/useLocalStorageMonitor'
import { getAuthToken } from '../util/auth'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Links } from '../routes/router'

export default function ProtectedRoute() {
  useLocalStorageMonitor()
  const navigate = useNavigate()
  const token = getAuthToken()
  const location = useLocation()

  const isLogin = location.pathname === '/login'
  const isSplash = location.pathname === '/'

  useEffect(() => {
    if (!token && !isSplash) {
      navigate(Links.LOGIN, { replace: true })
    }
    if (token && (isSplash || isLogin)) {
      navigate(Links.HOME, { replace: true })
    }
  }, [token, navigate])

  return <Outlet />
}
