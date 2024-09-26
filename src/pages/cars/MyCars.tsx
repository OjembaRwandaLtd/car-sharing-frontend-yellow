import Spinner from '../../assets/Spinner'
import Button, { ButtonBehavior, ButtonStyles } from '../../components/UI/Button'
import { Links } from '../../routes/router'
import CarCard from '../../components/CarCard'
import { useCars, useCarTypes } from '../../hooks'
import { useEffect } from 'react'
import CarsNotFound from '../../components/CarsNotFound'
import { useUserContext } from '../../contexts/UserContext'
import DeleteButton from './DeleteButton'
import { getCarType } from './helpers'

export default function MyCars() {
  const [{ loading: carsLoading, error: carsError, data: cars }, refetch] = useCars()
  const [{ loading: carTypesLoading, error: carTypesError, data: carTypes }] = useCarTypes()
  const loggedUser = useUserContext()

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    refetch({ signal })
    return () => {
      controller.abort()
    }
  }, [])

  if (!loggedUser) throw new Error('You must login first')

  if (carsLoading || carTypesLoading) return <Spinner />

  if (carsError || carTypesError || !cars || !carTypes) throw new Error('Could not fetch cars')

  if (!cars.length || !carTypes.length) return <CarsNotFound />

  const myCars = cars.filter(car => car.ownerId === loggedUser.id)

  return (
    <main className="px-4">
      <h1 className="my-8 w-full text-center font-lora text-3xl font-medium text-moni-gray-100">
        MY CARS
      </h1>
      <div className="grid grid-cols-1 gap-4 md:mx-0 md:w-full md:gap-8 md:px-20 lg:grid-cols-2">
        {myCars.map(car => (
          <CarCard
            key={car.id}
            car={car}
            user={loggedUser}
            carType={getCarType(car.carTypeId, carTypes)}
          >
            <DeleteButton refetch={refetch} carId={car.id} />
          </CarCard>
        ))}
      </div>
      <div className="flex py-8 md:mx-auto md:w-1/2">
        <Button
          path={Links.NEW_CAR}
          behavior={ButtonBehavior.LINK}
          customStyles={ButtonStyles.PRIMARY}
        >
          Add Car
        </Button>
      </div>
    </main>
  )
}
