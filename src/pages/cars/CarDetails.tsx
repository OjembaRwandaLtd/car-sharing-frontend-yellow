import { Link, useParams } from 'react-router-dom'
import { ChevronBackIcon } from '../../assets/ChevronBackIcon'
import { useCarTypes, useUser } from '../../hooks'
import useCar from '../../hooks/useCar'
import CarDetailsCard from '../../components/CarDetailsCard'
import Spinner from '../../assets/Spinner'

export default function CarDetails() {
  const carId = Number(useParams().carId)

  const [{ loading: carLoading, error: carError, data: car }] = useCar(carId)
  const [{ loading: carTypeLoading, error: carTypeError, data: carTypes }] = useCarTypes()

  const ownerId = car?.ownerId ?? ''
  const [{ loading: userLoading, error: userError, data: user }] = useUser(ownerId)

  if (carLoading || carTypeLoading || userLoading) {
    return <Spinner />
  }
  if (carError || carTypeError || userError) {
    throw Error('Could not fetch car details')
  }
  if (!car || !carTypes || !user) {
    return <div className="p-5 text-3xl text-moni-gray-100">The car was found</div>
  }
  const currentCarType = carTypes.find(carType => carType.id === car.carTypeId)
  if (!currentCarType) {
    throw Error('Could not fetch car details')
  }
  const carImage = currentCarType.imageUrl
  const carTypeName = currentCarType.name.split(' ').slice(-1).join(' ')

  return (
    <main className="px-5 py-8 text-moni-gray-100">
      <div className="flex items-center">
        <Link to=".." relative="path">
          <ChevronBackIcon />
        </Link>
        <h1 className="w-full text-center font-lora text-3xl font-medium">DETAILS</h1>
      </div>
      <figure className="md:mt-10 md:flex md:items-center md:justify-center md:gap-32">
        <img
          className="my-4 h-52 w-80 object-cover md:w-96 lg:animate-moveCar lg:drop-shadow-blue"
          src={carImage}
          alt="car"
        />
        <figcaption>
          <h2 className="pl-11 font-lora text-xl  font-medium">{car.name}</h2>
          <CarDetailsCard carType={carTypeName} carData={car} ownerName={user.name} />
        </figcaption>
      </figure>
    </main>
  )
}
