import CarCard from '../../components/CarCard'
import useCars from '../../hooks/useCars'
import { useCarTypes, useUsers } from '../../hooks'
import { Link } from 'react-router-dom'
import { ChevronBackIcon } from '../../assets/ChevronBackIcon'
import Spinner from '../../assets/Spinner'
import { CarDto } from '../../util/api'

export default function AllCars() {
  const [{ data: carTypes, loading: carTypesLoading, error: carTypesError }] = useCarTypes() // CarTypes
  const [{ data: allCarsData, loading: allCarsLoading, error: allCarsError }] = useCars() // Cars
  const [{ data: users, loading: usersLoading, error: usersError }] = useUsers() // Users

  if (allCarsError || carTypesError || usersError) {
    throw Error('Could not fetch cars')
  }

  if (allCarsLoading || carTypesLoading || usersLoading) {
    return <Spinner />
  }

  if (!allCarsData || !carTypes || !users) {
    return <div className="p-5 text-3xl text-primary-white">Could not fetch</div>
  }

  if (allCarsData.length === 0 || carTypes.length === 0 || users.length === 0) {
    return <div className="p-5 text-3xl text-primary-white">No cars found</div>
  }

  function getCarDetails(car: CarDto) {
    const user = users?.find(user => user.id === car.ownerId)
    const carType = carTypes?.find(type => type.id === car.carTypeId)
    if (!carType || !user) throw new Error('Car type or user not found')
    return { user, carType }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-8 flex w-full items-center justify-start px-6">
        <Link to=".." relative="path">
          <ChevronBackIcon className="text-primary-mustard" />
        </Link>
        <h1 className="w-full text-center font-lora text-3xl font-medium text-primary-white">
          ALL CARS
        </h1>
      </div>
      <div className="mx-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {allCarsData.map(car => {
          const { carType, user } = getCarDetails(car)
          return <CarCard key={car.id} car={car} carType={carType} user={user} />
        })}
      </div>
    </div>
  )
}
