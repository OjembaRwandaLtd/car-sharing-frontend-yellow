import { useNavigate, useActionData } from 'react-router-dom'
import AddCarForm from '../../components/AddCarForm'
import { useEffect } from 'react'
import Spinner from '../../assets/Spinner'
import { useToast } from '@chakra-ui/react'
import { AddNewCarType } from '../../util/types'
import useAddCar from '../../hooks/useAddCar'

export default function NewCar() {
  const actionData = useActionData() as AddNewCarType
  const navigate = useNavigate()
  const toast = useToast()
  const { loading, error, executeAddCar } = useAddCar()

  useEffect(() => {
    if (actionData) {
      executeAddCar(actionData)
        .then(() => {
          if (error) {
            toast({
              title: 'Failed to add car',
              description: error.message,
              status: 'error',
              duration: 2000,
              isClosable: true,
            })
            return
          }
          toast({
            title: 'New Car Was Added',
            description: 'New Car Was Added',
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
          navigate('/cars')
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
  }, [actionData])

  if (loading) return <Spinner />

  return (
    <main className="w-full items-center px-4 py-5">
      <h1 className="text-center font-lora text-3xl font-medium uppercase text-moni-gray-100">
        New Car
      </h1>
      <AddCarForm />
    </main>
  )
}
