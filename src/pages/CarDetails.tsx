import { Link, useParams } from 'react-router-dom'
import { ChevronBackIcon } from '../assets/ChevronBackIcon'
import { useCarTypes } from '../hooks'
import useCar from '../hooks/useCar'
import CarDetailsCard from '../components/CarDetailsCard'

export default function CarDetails() {
  const carId = Number(useParams().carId)
  const [{ data: carData }] = useCar(carId)

  const [{ data: carTypes }] = useCarTypes()
  const currentCarTypes = carTypes?.find(carType => carType.id === carData?.carTypeId)
  const carImage = carTypes?.find(item => item.id === currentCarTypes?.id)?.imageUrl
  const carTypeName = currentCarTypes?.name.split(' ').slice(-1).join(' ')

  return (
    <div className="px-5 py-8 text-primary-white">
      <div className="flex items-center">
        <Link to=".." relative="path">
          <ChevronBackIcon />
        </Link>
        <h1 className="w-96 text-center font-lora text-3xl font-medium ">DETAILS</h1>
      </div>
      <img className="my-4 h-52 w-80 object-cover" src={carImage} alt="car" />
      <h2 className="pl-11 font-lora text-xl  font-medium">{carData?.name}</h2>
      <CarDetailsCard carType={carTypeName} carData={carData} />
    </div>
  )
}
