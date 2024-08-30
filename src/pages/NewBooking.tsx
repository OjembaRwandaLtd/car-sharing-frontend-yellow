import CarCard from '../components/CarCard'
import useCars from '../hooks/useCars'

export default function NewBooking() {
  const [{ data }] = useCars()
  return <>{data?.map(car => <CarCard key={car.id} car={car} />)}</>
}
