import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { jwtDecode } from 'jwt-decode'

interface AuthContextType {
  token: string | null
  setToken: Dispatch<SetStateAction<string | null>>
  isAuthenticated: boolean
}

interface AuthContextProviderProps extends PropsWithChildren {}

const AuthContext = createContext<AuthContextType | null>(null)

export default function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'))
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token)
        const currentTime = Date.now() / 1000
        if (decodedToken.exp && decodedToken.exp < currentTime) {
          setToken(null)
          localStorage.removeItem('token')
        } else {
          setIsAuthenticated(true)
        }
      } catch (error) {
        console.error('Invalid token', error)
        setToken(null)
        localStorage.removeItem('token')
      }
    }
  }, [token])

  return (
    <AuthContext.Provider value={{ token, setToken, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === null) {
    throw new Error('useAuth must be used within an AuthContextProvider')
  }

  return context
}
