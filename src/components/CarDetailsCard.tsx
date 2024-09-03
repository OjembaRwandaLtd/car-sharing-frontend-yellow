import CarIcon from '../assets/CarIcon'
import DangerIcon from '../assets/DangerIcon'
import FuelIcon from '../assets/FuelIcon'
import HorseIcon from '../assets/HorseIcon'
import LicensePlateIcon from '../assets/LicensePlateIcon'
import ProfileIcon from '../assets/ProfileIcon'
import { useUser } from '../hooks'
import { CarDto } from '../util/api'

interface carDetailItemProps {
  carData?: CarDto
  carType?: string
}

export default function CarDetailsCard({ carType, carData }: carDetailItemProps) {
  const ownerId = carData?.ownerId || ''
  const [{ loading, error, data: userData }] = useUser(ownerId)

  if (loading) {
    return <h2 className="text-3xl text-primary-white">Loading...</h2>
  }
  if (error) {
    throw Error('Error occured')
  }

  const carDetails = [
    { title: userData?.name, icon: <ProfileIcon /> },
    { title: carType, icon: <CarIcon /> },
    { title: carData?.licensePlate, icon: <LicensePlateIcon /> },
    { title: carData?.horsepower && `${carData?.horsepower}hp`, icon: <HorseIcon /> },
    { title: carData?.fuelType, icon: <FuelIcon /> },
    { title: carData?.info, icon: <DangerIcon />, className: 'font-bold' },
  ]

  const allCarDetails = carDetails
    .filter(item => item.title)
    .map(item => (
      <div
        key={item.title}
        className="flex items-center gap-3 font-inter capitalize text-primary-white"
      >
        <span className="h-6 w-6">{item.icon}</span>
        <span className={item.className}>{item.title}</span>
      </div>
    ))

  return <div className="flex flex-col gap-2 px-11 pt-8">{allCarDetails}</div>
}
