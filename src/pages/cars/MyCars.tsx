import Spinner from '../../assets/Spinner'
import Button, { ButtonBehavior, ButtonStyles } from '../../components/UI/Button'
import { Links } from '../../routes/router'
import CarCard from '../../components/CarCard'
import { useCars, useCarTypes } from '../../hooks'
import { useEffect, useState } from 'react'
import CarsNotFound from '../../components/CarsNotFound'
import { deleteCar } from '../../util/deleteCar'
import { useUserContext } from '../../contexts/UserContext'

export default function MyCars() {
  const [deleteId, setDeleteId] = useState<number | null>(null)
  const [{ loading: carsLoading, error: carsError, data: cars }] = useCars()
  const [{ loading: carTypeLoading, error: carTypeError, data: carTypes }] = useCarTypes()
  const [myCars, setMyCars] = useState(cars || [])
  const loggedUser = useUserContext()

  useEffect(() => {
    if (cars) {
      setMyCars(cars.filter(car => car.ownerId === loggedUser.id))
    }
  }, [cars])

  function getCarType(carTypeId: number) {
    const carType = carTypes?.find(type => type.id === carTypeId)
    if (!carType) throw new Error('Car type not found')
    return carType
  }

  function handleDeleteCar(carId: number) {
    const text = 'Do you really want to delete this car?'
    if (confirm(text)) setDeleteId(carId)
  }

  useEffect(() => {
    if (deleteId === null) return

    const controller = new AbortController()
    const signal = controller.signal

    const deleteCarAsync = async () => {
      const isCarDeleted = await deleteCar(signal, deleteId)
      if (isCarDeleted) {
        setMyCars(prevCars => prevCars.filter(car => car.id !== deleteId))
      }
    }

    deleteCarAsync()

    return () => {
      controller.abort()
    }
  }, [deleteId])

  if (carsLoading || carTypeLoading) return <Spinner />

  if (carsError || carTypeError) throw new Error('Could not fetch cars')

  if (!loggedUser) throw new Error('You must login first')

  if (!myCars?.length || !carTypes?.length) return <CarsNotFound />

  return (
    <main className="px-4">
      <h1 className="my-8 w-full text-center font-lora text-3xl font-medium text-moni-gray-100">
        MY CARS
      </h1>
      <div className="grid grid-cols-1 gap-4 md:mx-0 md:w-full md:gap-8 md:px-20 lg:grid-cols-2">
        {myCars.map(car => (
          <CarCard key={car.id} car={car} user={loggedUser} carType={getCarType(car.carTypeId)}>
            <Button
              behavior={ButtonBehavior.BUTTON}
              onClick={() => handleDeleteCar(car.id)}
              customStyles={ButtonStyles.DELETE}
            >
              Delete Car
            </Button>
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
