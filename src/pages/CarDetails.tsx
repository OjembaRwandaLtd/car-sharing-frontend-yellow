import { ChevronBackIcon } from '../assets/ChevronBackIcon'
import useCar from '../hooks/useCar'

export default function CarDetails() {
  const [{ data }] = useCar(1)
  return (
    <div className="px-5 py-8 text-gray-100">
      <div className="flex items-center">
        <ChevronBackIcon />
        <h1 className="w-96 text-center font-lora text-3xl font-semibold text-white">DETAILS</h1>
      </div>
      <h2>{data?.name}</h2>
    </div>
  )
}
