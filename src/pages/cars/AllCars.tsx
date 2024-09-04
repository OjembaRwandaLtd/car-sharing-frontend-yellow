import CarCard from '../../components/CarCard'
import useCars from '../../hooks/useCars'
import { useCarTypes } from '../../hooks'
import { Link } from 'react-router-dom'
import { ChevronBackIcon } from '../../assets/ChevronBackIcon'

export default function AllCars() {
  const [{ data: carTypes }] = useCarTypes() // CarTypes
  const [{ data, loading, error }] = useCars() // Cars

  if (loading) {
    return <div className="p-5 text-3xl text-primary-white">Loading...</div>
  }

  if (error) {
    return <div className="p-5 text-3xl text-primary-white">Error Occured!!!</div>
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
        {data?.map(car => {
          const carType = carTypes?.find(type => type.id === car.carTypeId)
          return <CarCard key={car.id} car={car} carType={carType} />
        })}
      </div>
    </div>
  )
}
