import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import AddCarForm, { CarSchemaType } from '../../components/AddCarForm'
import Spinner from '../../assets/Spinner'
import useAddCar from '../../hooks/useAddCar'
import { CarTypeDto } from '../../util/api'
import { Links } from '../../routes/router'

export default function NewCar() {
  const navigate = useNavigate()
  const toast = useToast()
  const [{ loading }, execute] = useAddCar()

  function handleSubmit(data: CarSchemaType, carTypes: CarTypeDto[]) {
    const [carType] = carTypes.filter(carType => carType.name === data.typeName)
    const { name, fuelType, horsepower, licensePlate, info } = data
    execute({
      data: {
        name,
        fuelType,
        horsepower: Number(horsepower),
        licensePlate,
        info,
        carTypeId: Number(carType.id),
      },
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
      .catch(() => {
        toast({
          title: 'Failed to add car',
          description: 'Something went wrong',
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
      })
  }

  if (loading) return <Spinner />

  return (
    <main className="w-full items-center px-4 py-5 md:px-52 lg:px-60">
      <h1 className="text-center font-lora text-3xl font-medium uppercase text-moni-gray-100">
        New Car
      </h1>
      <AddCarForm handleSubmit={handleSubmit} />
    </main>
  )
}
