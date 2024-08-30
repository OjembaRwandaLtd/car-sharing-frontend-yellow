import { CarDto } from '../util/api'

interface CarCardProps {
  car: CarDto
}

export default function CarCard({ car }: Readonly<CarCardProps>) {
  return <div>{car.id}</div>
}
