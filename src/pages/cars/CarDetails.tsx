import { Link, useParams } from 'react-router-dom'
import { ChevronBackIcon } from '../../assets/ChevronBackIcon'
import { useCarTypes } from '../../hooks'
import useCar from '../../hooks/useCar'
import CarDetailsCard from '../../components/CarDetailsCard'
import Spinner from '../../assets/Spinner'

export default function CarDetails() {
  const carId = Number(useParams().carId)

  const [{ loading: carLoading, error: carError, data: carData }] = useCar(carId)
  const [{ loading: carTypeLoading, error: carTypeError, data: carTypes }] = useCarTypes()

  if (carLoading || carTypeLoading) {
    return <Spinner />
  }
  if (carError || carTypeError) {
    throw Error('Could not fetch car details')
  }

  const currentCarType = carTypes?.find(carType => carType.id === carData?.carTypeId)
  const carImage = currentCarType?.imageUrl
  const carTypeName = currentCarType?.name.split(' ').slice(-1).join(' ')

  return (
    <div className="px-5 py-8 text-primary-white">
      <div className="flex items-center">
        <Link to=".." relative="path">
          <ChevronBackIcon />
        </Link>
        <h1 className="w-full text-center font-lora text-3xl font-medium">DETAILS</h1>
      </div>
      <div className="md:mt-10 md:flex md:items-center md:justify-center md:gap-32">
        <img className="my-4 h-52 w-80 object-cover md:w-96" src={carImage} alt="car" />
        <div>
          <h2 className="pl-11 font-lora text-xl  font-medium">{carData?.name}</h2>
          <CarDetailsCard carType={carTypeName} carData={carData} />
        </div>
      </div>
    </div>
  )
}
