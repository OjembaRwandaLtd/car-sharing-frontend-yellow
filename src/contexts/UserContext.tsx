import { createContext, PropsWithChildren, useContext } from 'react'
import { UserDto } from '../util/api'
import useLoggedUser from '../hooks/useLoggedUser'

export const UserContext = createContext<UserDto | null>(null)

interface UserContextProviderProps extends PropsWithChildren {}

export default function UserContextProvider({ children }: UserContextProviderProps) {
  const [{ error: loggedUserError, data: loggedUser }] = useLoggedUser()

  if (loggedUserError) {
    return
  }

  if (!loggedUser) {
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
