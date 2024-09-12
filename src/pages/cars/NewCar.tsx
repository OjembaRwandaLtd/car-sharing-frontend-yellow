import { useNavigate, useActionData } from 'react-router-dom'
import AddCarForm from '../../components/AddCarForm'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { apiUrl } from '../../util/apiUrl'
import { getAuthToken } from '../../util/auth'
import Spinner from '../../assets/Spinner'
import { useToast } from '@chakra-ui/react'
import { AddNewCarType } from '../../util/types'

export default function NewCar() {
  const [loading, setLoading] = useState(false)
  const actionData = useActionData() as AddNewCarType
  const navigate = useNavigate()
  const toast = useToast()

  useEffect(() => {
    if (actionData) {
      addNewCar(actionData)
        .then(() => {
          toast({
            title: 'New Car Was Added',
            description: 'New Car Was Added',
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
          navigate('/cars')
        })
        .catch(error => {
          console.error('Failed to add car:', error)
        })
    }
  }, [actionData])

  async function addNewCar(data: AddNewCarType) {
    setLoading(true)
    try {
      await axios.post(`${apiUrl}/cars`, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getAuthToken()}`,
        },
      })
    } catch (error) {
      toast({
        title: 'Failed',
        description: 'Could not add new car',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      throw new Error()
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Spinner />

  return (
    <main className="w-full items-center px-4 py-5">
      <h1 className="text-center font-lora text-3xl font-medium uppercase text-primary-white">
        New Car
      </h1>
      <AddCarForm />
    </main>
  )
}
