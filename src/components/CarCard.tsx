import ProfileIcon from '../assets/ProfileIcon'
import { CarDto, CarTypeDto } from '../util/api'
import { useUser } from '../hooks'
import { Link } from 'react-router-dom'
import { links } from '../routes/router'
import CarIcon from '../assets/CarIcon'

interface CarCardProps {
  car: CarDto
  carType: CarTypeDto | undefined
}

export default function CarCard({ car, carType }: Readonly<CarCardProps>) {
  const [{ data: user }] = useUser(car.ownerId)
  return (
    <div className="mb-3 flex h-56 items-center justify-start gap-4 rounded-xl bg-secondary-indigo px-8 py-4">
      <img src={carType?.imageUrl} alt={carType?.name} width={200} />
      <div className="flex flex-col items-start">
        <h3 className="pb-5 font-lora text-xl font-medium text-white">{car.name}</h3>
        <div className="flex items-center gap-4 pb-4">
          <ProfileIcon className="font-inter text-4xl text-white" />{' '}
          <span className="text-sm text-white">{user?.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <CarIcon className="text-4xl text-white" />{' '}
          <span className="text-sm text-white">{carType?.name}</span>
        </div>
        <Link
          to={links.myBookings}
          className="pt-8 font-inter text-sm font-semibold text-primary-mustard"
        >
          Show details
        </Link>
      </div>
    </div>
  )
}
