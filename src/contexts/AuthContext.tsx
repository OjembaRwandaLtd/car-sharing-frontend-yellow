import { createContext, PropsWithChildren, useContext, useState } from 'react'

interface AuthContextType {
  token: string | null
  setToken: React.Dispatch<React.SetStateAction<string | null>>
}

interface AuthContextProviderProps extends PropsWithChildren {}

const AuthContext = createContext<AuthContextType | null>(null)

export default function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [token, setToken] = useState<string | null>(() => {
    const storedContext = localStorage.getItem('token')
    return storedContext ? storedContext : null
  })

  return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === null) {
    throw new Error('useAuth must be used within an AuthContextProvider')
  }

  return context
}
