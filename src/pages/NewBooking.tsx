import CarCard from '../components/CarCard'
import useCars from '../hooks/useCars'
import { useCarTypes } from '../hooks'

export default function NewBooking() {
  const [{ data: carTypes }] = useCarTypes()
  const [{ data }] = useCars()
  return (
    <>
      {data?.map(car => {
        const carType = carTypes?.find(type => type.id === car.carTypeId)
        return <CarCard key={car.id} car={car} carType={carType} />
      })}
    </>
  )
}
