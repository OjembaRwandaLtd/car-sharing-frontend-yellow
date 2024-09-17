import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const TOKEN_KEY = 'token'
const LOGIN_PATH = '/login'

export default function useLocalStorageMonitor() {
  const navigate = useNavigate()

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.storageArea === localStorage && event.key === TOKEN_KEY) {
        localStorage.removeItem(TOKEN_KEY)
        navigate(LOGIN_PATH)
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [navigate])
}
