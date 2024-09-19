import { useEffect } from 'react'
import useLogout from './useLogout'

export default function useLocalStorageMonitor() {
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
  }, [])
}
