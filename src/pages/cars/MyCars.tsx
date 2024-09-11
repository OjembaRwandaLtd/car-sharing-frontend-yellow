import Spinner from '../../assets/Spinner'
import Button, { ButtonBehavior, ButtonStyles } from '../../components/Button'
import { Links } from '../../routes/router'
import CarCard from '../../components/CarCard'
import { useUser, useCars, useCarTypes } from '../../hooks'

export default function MyCars() {
  const userId = 1
  const [{ loading: carsLoading, error: carsError, data: cars }] = useCars()
  const [{ loading: carTypeLoading, error: carTypeError, data: carTypes }] = useCarTypes()
  const [{ loading: userLoading, error: userError, data: user }] = useUser(userId)
  const myCars = cars?.filter(car => car.ownerId === userId)

  if (carsLoading || carTypeLoading || userLoading) return <Spinner />

  if (carsError || carTypeError || userError) throw new Error('Could not fetch cars')

  if (!user) throw new Error('User not found')
  if (!myCars || myCars.length === 0)
    return (
      <main className="flex flex-col items-center justify-center gap-20 border border-white p-5 text-3xl text-primary-white">
        <h1 className="font-medium">You don&apos;t have any cars</h1>
        <Button
          path={Links.NEW_CAR}
          behavior={ButtonBehavior.Link}
          customStyles={ButtonStyles.primary}
        >
          {' '}
          Add Car
        </Button>
      </main>
    )

  function getCarType(carTypeId: number) {
    const carType = carTypes?.find(type => type.id === carTypeId)
    if (!carType) throw new Error('Car type not found')
    return carType
  }
  return (
    <main>
      <h1 className="my-8 w-full text-center font-lora text-3xl font-medium text-primary-white">
        MY CARS
      </h1>
      <div className="mx-4 grid grid-cols-1 gap-4 md:mx-0 md:w-full md:gap-8 md:px-20 lg:grid-cols-2">
        {myCars.map(car => (
          <CarCard key={car.id} car={car} user={user} carType={getCarType(car.carTypeId)}>
            <Button behavior={ButtonBehavior.Button} customStyles={ButtonStyles.delete}>
              Delete Car
            </Button>
          </CarCard>
        ))}
      </div>
    </main>
  )
}
