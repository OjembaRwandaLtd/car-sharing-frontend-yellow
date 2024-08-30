import { CarDto } from '../util/api'

interface CarCardProps {
  car: CarDto
}

export default function CarCard({ car }: CarCardProps) {
  // console.log(car.id)
  console.log(car.id)
  return <div>working</div>
}
