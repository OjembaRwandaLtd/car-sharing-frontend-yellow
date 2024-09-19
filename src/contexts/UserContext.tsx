import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react'
import { CarDto, UserContextType } from '../util/api'
import useLoggedUser from '../hooks/useLoggedUser'
import { useCars } from '../hooks'
import Spinner from '../assets/Spinner'

export const UserContext = createContext<UserContextType | null>(null)

interface UserContextProviderProps extends PropsWithChildren {}

export default function UserContextProvider({ children }: UserContextProviderProps) {
  const [{ error: loggedUserError, loading: userLoading, data: loggedUser }] = useLoggedUser()
  const [{ loading: carsLoading, error: carsError, data: cars }] = useCars()
  const [userCars, setUserCars] = useState<CarDto[]>([])

  useEffect(() => {
    if (cars && loggedUser) {
      setUserCars(cars.filter(car => car.ownerId === loggedUser.id))
    }
  }, [cars])

  if (loggedUserError || carsError) {
    throw new Error('Could not fetch cars')
  }

  if (carsLoading || userLoading) return <Spinner />

  if (!loggedUser || !cars) {
    throw new Error('Could not fetch cars')
  }

  return (
    <UserContext.Provider value={{ loggedUser, userCars, setUserCars }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  const user = useContext(UserContext)
  if (!user) {
    throw new Error('useUserContext must be used within a UserContextProvider')
  }

  return user
}
