import { useParams } from 'react-router-dom'

export default function CarDetailsPage() {
  const { carId } = useParams()
  return <div className="text-3xl text-white">CarDetailsPage - {carId}</div>
}
