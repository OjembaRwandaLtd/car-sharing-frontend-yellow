import CarIcon from '../assets/CarIcon'
import DangerIcon from '../assets/DangerIcon'
import FuelIcon from '../assets/FuelIcon'
import HorseIcon from '../assets/HorseIcon'
import LicensePlateIcon from '../assets/LicensePlateIcon'
import ProfileIcon from '../assets/ProfileIcon'
import { CarDto } from '../util/api'

interface carDetailItemProps {
  carData: CarDto
  carType: string
  ownerName: string
}

export default function CarDetailsCard({ carType, carData, ownerName }: carDetailItemProps) {
  const carDetails = [
    { title: ownerName, icon: <ProfileIcon /> },
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
        <dt className="h-6 w-6">{item.icon}</dt>
        <dd className={item.className}>{item.title}</dd>
      </div>
    ))

  return <dl className="flex flex-col gap-2 px-11 pt-8">{allCarDetails}</dl>
}
