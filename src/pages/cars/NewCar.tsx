import { useNavigate, useActionData } from 'react-router-dom'
import AddCarForm from '../../components/AddCarForm'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { apiUrl } from '../../util/apiUrl'
import { getAuthToken } from '../../util/auth'
import Spinner from '../../assets/Spinner'

interface AddNewCarType {
  carTypeId: number
  name: string
  fuelType: string
  horsepower: number
  licensePlate: string
  info: string
}

export default function NewCar() {
  const [loading, setLoading] = useState(false)
  const actionData = useActionData() as AddNewCarType | null
  const navigate = useNavigate()

  useEffect(() => {
    if (actionData) {
      addNewCar(actionData)
        .then(() => {
          navigate('/cars', { state: { newCar: 'New car is added' } })
        })
        .catch(error => {
          console.error('Failed to add car:', error)
        })
    }
  }, [actionData, navigate])

  async function addNewCar(data: AddNewCarType) {
    setLoading(true)
    try {
      await axios.post(`${apiUrl}/cars`, data, {
        // Fixed typo here
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getAuthToken()}`,
        },
      })
    } catch (error) {
      console.error('Error from catch:', error)
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
