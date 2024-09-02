import ProfileIcon from '../assets/ProfileIcon'
import { CarDto, CarTypeDto } from '../util/api'
import { useUser } from '../hooks'

interface CarCardProps {
  car: CarDto
  carType: CarTypeDto | undefined
}

export default function CarCard({ car, carType }: Readonly<CarCardProps>) {
  const [{ data: user }] = useUser(car.ownerId)
  return (
    <div className="rounded-lg bg-secondary-indigo">
      <img src={carType?.imageUrl} alt={carType?.name} />
      <div>
        <h3>{car.name}</h3>
        <p>{user?.name}</p>
        <div>
          <ProfileIcon /> <span>Manuela</span>
        </div>
      </div>
    </div>
  )
}
