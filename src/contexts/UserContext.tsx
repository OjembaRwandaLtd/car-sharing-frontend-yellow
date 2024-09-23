import { createContext, PropsWithChildren, useContext } from 'react'
import { UserDto } from '../types/apiTypes'
import useLoggedUser from '../hooks/useLoggedUser'
import useLogout from '../hooks/useLogout'

export const UserContext = createContext<UserDto | null>(null)

interface UserContextProviderProps extends PropsWithChildren {}

export default function UserContextProvider({ children }: UserContextProviderProps) {
  const [{ error: loggedUserError, loading, data: loggedUser }] = useLoggedUser()
  const { logout } = useLogout()

  if (loading) {
    return
  }

  if (loggedUserError || !loggedUser) {
    logout()
    return
  }

  return <UserContext.Provider value={loggedUser}>{children}</UserContext.Provider>
}

export function useUserContext() {
  const user = useContext(UserContext)
  if (!user) {
    throw new Error('useUserContext must be used within a UserContextProvider')
  }

  return user
}
