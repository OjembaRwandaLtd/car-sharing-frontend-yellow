import { ChevronBackIcon } from '../assets/ChevronBackIcon'
import FuelIcon from '../assets/FuelIcon'
import CarDetailsItem from '../components/carDetailsItem'
import useCar from '../hooks/useCar'

export default function CarDetails() {
  const [{ data }] = useCar(1)
  const carDetails = [
    { title: data?.ownerId, icon: <FuelIcon /> },
    { title: data?.carTypeId, icon: <FuelIcon /> },
    { title: data?.licensePlate, icon: <FuelIcon /> },
    { title: data?.horsepower, icon: <FuelIcon /> },
    { title: data?.info, icon: <FuelIcon /> },
    { title: data?.fuelType, icon: <FuelIcon /> },
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
      <h2>{data?.name}</h2>
      <div className="flex flex-col">{allCarDetails}</div>
    </div>
  )
}
