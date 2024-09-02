import { Link, useParams } from 'react-router-dom'
import CarIcon from '../assets/CarIcon'
import { ChevronBackIcon } from '../assets/ChevronBackIcon'
import DangerIcon from '../assets/DangerIcon'
import FuelIcon from '../assets/FuelIcon'
import HorseIcon from '../assets/HorseIcon'
import LicensePlateIcon from '../assets/LicensePlateIcon'
import ProfileIcon from '../assets/ProfileIcon'
import CarDetailsItem from '../components/CarDetailsItem'
import { useCarTypes, useUser } from '../hooks'
import useCar from '../hooks/useCar'

export default function CarDetails() {
  const carId = Number(useParams().carId)
  const [{ data: carData }] = useCar(carId)
  const carOwnerId = carData?.ownerId || ''
  const [{ data: userData }] = useUser(carOwnerId)
  const [{ data: carTypes }] = useCarTypes()
  const currentCarTypes = carTypes?.find(carType => carType.id === carData?.carTypeId)
  const carImage = carTypes?.find(item => item.id === currentCarTypes?.id)?.imageUrl
  const carTypeName = currentCarTypes?.name.split(' ').slice(-1).join(' ')

  const carDetails = [
    { title: userData?.name, icon: <ProfileIcon /> },
    { title: carTypeName, icon: <CarIcon /> },
    { title: carData?.licensePlate, icon: <LicensePlateIcon /> },
    { title: carData?.horsepower && `${carData?.horsepower}hp`, icon: <HorseIcon /> },
    { title: carData?.fuelType, icon: <FuelIcon /> },
    { title: carData?.info, icon: <DangerIcon /> },
  ]

  const allCarDetails = carDetails
    .filter(item => item.title)
    .map(item => <CarDetailsItem key={item.title} title={item.title} icon={item.icon} />)

  return (
    <div className="px-5 py-8 text-gray-100">
      <div className="flex items-center">
        <Link to=".." relative="path">
          <ChevronBackIcon />
        </Link>
        <h1 className="w-96 text-center font-lora text-3xl font-semibold text-white">DETAILS</h1>
      </div>
      <img src={carImage} alt="car" />
      <h2>{carData?.name}</h2>
      <div className="flex flex-col">{allCarDetails}</div>
    </div>
  )
}
