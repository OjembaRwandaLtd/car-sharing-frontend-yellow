import { useNavigate } from 'react-router-dom'
import AddCarForm from '../../components/AddCarForm'
import Spinner from '../../assets/Spinner'
import { useToast } from '@chakra-ui/react'
import { NewCarFormDto } from '../../util/types'
import useAddCar from '../../hooks/useAddCar'
import { CarTypeDto } from '../../util/api'
import { Links } from '../../routes/router'

export default function NewCar() {
  const navigate = useNavigate()
  const toast = useToast()
  const { loading, executeAddCar } = useAddCar()

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
    data: NewCarFormDto,
    carTypes: CarTypeDto[],
  ) {
    event.preventDefault()
    const [carType] = carTypes.filter(carType => carType.name === data.typeName)
    const { name, fuelType, horsepower, licensePlate, info } = data
    executeAddCar({
      name,
      fuelType,
      horsepower: Number(horsepower),
      licensePlate,
      info,
      carTypeId: Number(carType.id),
    })
      .then(() => {
        toast({
          title: 'New Car Was Added',
          description: 'New Car Was Added',
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        navigate(Links.MY_CARS)
      })
      .catch(error => {
        toast({
          title: 'Failed to add car',
          description: error.message,
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
      })
  }

  if (loading) return <Spinner />

  return (
    <main className="w-full items-center px-4 py-5">
      <h1 className="text-center font-lora text-3xl font-medium uppercase text-moni-gray-100">
        New Car
      </h1>
      <AddCarForm handleSubmit={handleSubmit} />
    </main>
  )
}
