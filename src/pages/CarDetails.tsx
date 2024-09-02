import { ChevronBackIcon } from '../assets/ChevronBackIcon'
import FuelIcon from '../assets/FuelIcon'
import CarDetailsItem from '../components/carDetailsItem'
import { useCarTypes } from '../hooks'
import useCar from '../hooks/useCar'

export default function CarDetails() {
  const [{ data: carTypes }] = useCarTypes()
  const [{ data: carData }] = useCar(2)

  const currentCarTypes = carTypes?.find(carType => carType.id === carData?.carTypeId)
  const carImage = carTypes?.find(item => item.id === currentCarTypes?.id)?.imageUrl
  const carTypeName = currentCarTypes?.name.split(' ').slice(-1).join(' ')

  const carDetails = [
    { title: carData?.ownerId, icon: <FuelIcon /> },
    { title: carTypeName, icon: <FuelIcon /> },
    { title: carData?.licensePlate, icon: <FuelIcon /> },
    { title: carData?.horsepower, icon: <FuelIcon /> },
    { title: carData?.fuelType, icon: <FuelIcon /> },
    { title: carData?.info, icon: <FuelIcon /> },
  ]

  const allCarDetails = carDetails
    .filter(item => item.title)
    .map((item, id) => <CarDetailsItem key={id} title={item.title} icon={item.icon} />)

  return (
    <div className="px-5 py-8 text-gray-100">
      <div className="flex items-center">
        <ChevronBackIcon />
        <h1 className="w-96 text-center font-lora text-3xl font-semibold text-white">DETAILS</h1>
      </div>
      <img src={carImage} alt="car" />
      <h2>{carData?.name}</h2>
      <div className="flex flex-col">{allCarDetails}</div>
    </div>
  )
}
