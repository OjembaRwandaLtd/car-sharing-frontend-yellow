import Spinner from '../../assets/Spinner'
import Button, { ButtonBehavior, ButtonStyles } from '../../components/UI/Button'
import { Links } from '../../routes/router'
import CarCard from '../../components/CarCard'
import { useCars, useCarTypes } from '../../hooks'
import { apiUrl } from '../../util/apiUrl'
import { getAuthToken } from '../../util/auth'
import { useEffect, useState } from 'react'
import useLoggedUser from '../../hooks/useLoggedUser'
import CarsNotFound from '../../components/CarsNotFound'

export default function MyCars() {
  const [deleteId, setDeleteId] = useState(-1)
  const [{ loading: carsLoading, error: carsError, data: cars }] = useCars()
  const [{ loading: carTypeLoading, error: carTypeError, data: carTypes }] = useCarTypes()
  const [{ loading: loggedUserLoading, error: loggedUserError, data: loggedUser }] = useLoggedUser()

  useEffect(() => {
    if (deleteId === -1) return
    const controller = new AbortController()
    const signal = controller.signal
    fetch(`${apiUrl}cars/${deleteId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
      signal,
    })
      .then(response => {
        if (response.ok) {
          alert('Successfully deleted car!')
          window.location.reload()
        } else alert("Couldn't delete car")
      })
      .catch(err => {
        if (err) alert("Couldn't delete car")
      })

    return () => {
      controller.abort()
    }
  }, [deleteId])
  function handleDeleteCar(carId: number) {
    const text = 'Do you really want to delete this car?'
    if (confirm(text)) setDeleteId(carId)
  }

  if (carsLoading || carTypeLoading || loggedUserLoading) return <Spinner />

  if (carsError || carTypeError || loggedUserError) throw new Error('Could not fetch cars')

  if (!cars || !carTypes || !loggedUser) throw new Error('Cars not found')

  const myCars = cars.filter(car => car.ownerId === loggedUser.id)
  if (!myCars || myCars.length === 0) return <CarsNotFound />

  function getCarType(carTypeId: number) {
    const carType = carTypes?.find(type => type.id === carTypeId)
    if (!carType) throw new Error('Car type not found')
    return carType
  }

  return (
    <main className="px-4">
      <h1 className="my-8 w-full text-center font-lora text-3xl font-medium text-primary-white">
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
