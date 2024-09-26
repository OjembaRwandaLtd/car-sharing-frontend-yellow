import CarIcon from '../assets/CarIcon'
import DangerIcon from '../assets/DangerIcon'
import FuelIcon from '../assets/FuelIcon'
import HorseIcon from '../assets/HorseIcon'
import LicensePlateIcon from '../assets/LicensePlateIcon'
import ProfileIcon from '../assets/ProfileIcon'
import { CarDto } from '../types/apiTypes'

interface CarDetailItemProps {
  carData: CarDto
  carType: string
  ownerName: string
}

export default function CarDetailsCard({ carType, carData, ownerName }: CarDetailItemProps) {
  const carDetails = [
    { title: ownerName, icon: <ProfileIcon /> },
    { title: carType, icon: <CarIcon /> },
    { title: carData?.licensePlate, icon: <LicensePlateIcon /> },
    { title: carData?.horsepower && `${carData?.horsepower}hp`, icon: <HorseIcon /> },
    { title: carData.fuelType, icon: <FuelIcon /> },
    { title: carData?.info, icon: <DangerIcon />, className: 'font-bold' },
  ]

  const allCarDetails = carDetails
    .filter(item => item.title)
    .map(item => (
      <li
        key={item.title}
        className="flex items-center gap-3 font-inter capitalize text-moni-gray-100"
      >
        <span className="h-6 w-6">{item.icon}</span>
        <span className={item.className}>{item.title}</span>
      </li>
    ))

  return <ul className="flex flex-col gap-2 px-11 pt-8">{allCarDetails}</ul>
}
