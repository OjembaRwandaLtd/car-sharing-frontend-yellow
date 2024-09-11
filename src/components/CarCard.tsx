import ProfileIcon from '../assets/ProfileIcon'
import { CarDto, CarTypeDto, UserDto } from '../util/api'
import { Link } from 'react-router-dom'
import { Links } from '../routes/router'
import CarIcon from '../assets/CarIcon'

interface CarCardProps {
  car: CarDto
  carType: CarTypeDto
  user: UserDto
  children?: React.ReactNode
}

export default function CarCard({ car, carType, user, children }: CarCardProps) {
  return (
    <div className="flex  h-auto flex-col gap-4 rounded-xl bg-secondary-indigo px-7 py-4 md:h-auto">
      <figure className=" grid grid-cols-2 items-center">
        <img src={carType?.imageUrl} alt={carType?.name} className="w-36 grow-0 md:w-80" />
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

      {children}
    </div>
  )
}
