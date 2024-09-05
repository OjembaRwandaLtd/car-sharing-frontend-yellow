import ProfileIcon from '../assets/ProfileIcon'
import { CarDto, CarTypeDto } from '../util/api'
import { Link } from 'react-router-dom'
import { Links } from '../routes/router'
import CarIcon from '../assets/CarIcon'
import { useUser } from '../hooks'

interface CarCardProps {
  car: CarDto
  carType?: CarTypeDto
}

export default function CarCard({ car, carType }: CarCardProps) {
  const [{ data: user }] = useUser(car.ownerId)
  return (
    <div className="mb-3 flex h-56 items-center  rounded-xl bg-secondary-indigo py-4 pr-7 md:h-auto">
      <img src={carType?.imageUrl} alt={carType?.name} className="w-44 grow-0 md:w-80" />
      <div className="flex shrink-0 grow flex-col items-start">
        <h3 className="pb-5 font-lora text-xl font-medium text-primary-white">{car.name}</h3>
        <div className="flex items-center gap-4 pb-4">
          <ProfileIcon className="font-inter text-4xl text-primary-white" />{' '}
          <span className="text-sm text-primary-white md:text-lg">{user?.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <CarIcon className="text-4xl text-primary-white" />{' '}
          <span className="text-sm text-primary-white md:text-lg">{carType?.name}</span>
        </div>
        {/* This link points to a random route for now! */}
        <Link
          to={`${Links.CAR_DETAILS}${car.id}`}
          className="pt-8 font-inter text-sm font-semibold text-primary-mustard md:text-lg"
        >
          Show details
        </Link>
      </div>
    </div>
  )
}
