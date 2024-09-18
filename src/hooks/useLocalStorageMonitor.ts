import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useLogout from './useLogout'

export default function useLocalStorageMonitor() {
  const navigate = useNavigate()
  const { logout } = useLogout()

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.storageArea === localStorage && event.key === 'token') {
        logout()
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [navigate])
}
