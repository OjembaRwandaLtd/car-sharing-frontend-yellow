import ProfileIcon from '../assets/ProfileIcon'
import { CarDto, CarTypeDto, UserDto } from '../util/api'
import { Link } from 'react-router-dom'
import { Links } from '../routes/router'
import CarIcon from '../assets/CarIcon'

interface CarCardProps {
  car: CarDto
  carType: CarTypeDto
  user: UserDto
}

export default function CarCard({ car, carType, user }: CarCardProps) {
  return (
    <figure className="mb-3 grid h-56 grid-cols-2 items-center rounded-xl bg-secondary-indigo py-4 pr-7 md:h-auto">
      <img src={carType?.imageUrl} alt={carType?.name} className="w-44 grow-0 md:w-80" />
      <figcaption className="flex shrink-0 grow flex-col items-start">
        <h3 className="pb-5 font-lora text-xl font-medium text-primary-white">{car.name}</h3>
        <dl className="flex items-center gap-4 pb-4">
          <dt>
            <ProfileIcon className="font-inter text-4xl text-primary-white" />
          </dt>
          <dd className="text-sm text-primary-white md:text-lg">{user?.name}</dd>
        </dl>
        <dl className="flex items-center gap-4">
          <dt>
            <CarIcon className="text-4xl text-primary-white" />
          </dt>
          <dd className="text-sm text-primary-white md:text-lg">{carType?.name}</dd>
        </dl>

        <Link
          to={`${Links.CARS}/${car.id}`}
          className="pt-8 font-inter text-sm font-semibold text-primary-mustard md:text-lg"
        >
          Show details
        </Link>
      </figcaption>
    </figure>
  )
}
