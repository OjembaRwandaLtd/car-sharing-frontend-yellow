import CarCard from '../components/CarCard'
import useCars from '../hooks/useCars'
import { useCarTypes } from '../hooks'
import { Link } from 'react-router-dom'
import LessThanIcon from '../assets/LessThanIcon'

export default function NewBooking() {
  const [{ data: carTypes }] = useCarTypes()
  const [{ data }] = useCars()
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="justify-betwee flex w-full items-center">
        <Link to="/">
          <LessThanIcon />
        </Link>
        <h1 className="pb-8 font-lora text-3xl font-medium text-white">ALL CARS</h1>
      </div>
      <div className="mx-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {data?.map(car => {
          const carType = carTypes?.find(type => type.id === car.carTypeId)
          return <CarCard key={car.id} car={car} carType={carType} />
        })}
      </div>
    </div>
  )
}
