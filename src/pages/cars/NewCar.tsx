import { ActionFunction, useActionData } from 'react-router-dom'
import AddCarForm from '../../components/AddCarForm'
import { useEffect } from 'react'
import axios from 'axios'
import { apiUrl } from '../../util/apiUrl'
import { getAuthToken } from '../../util/auth'

interface AddNewCarType {
  carTypeId: number
  name: string
  fuelType: string
  horsepower: number
  licensePlate: string
  info: string
}

export default function NewCar() {
  const actionData = useActionData() as AddNewCarType

  useEffect(() => {
    if (actionData) {
      addNewCar(actionData)
    }
  }, [actionData])

  async function addNewCar(data: AddNewCarType) {
    console.log(data)
    try {
      const newCar = await axios.post(`${apiUrl}/cars`, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getAuthToken()}`,
        },
      })
      console.log(newCar)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className="w-full items-center px-4 py-5">
      <h1 className="text-center font-lora text-3xl font-medium uppercase text-primary-white">
        new car
      </h1>
      <AddCarForm />
    </main>
  )
}

export const addCarAction: ActionFunction = async ({ request }) => {
  try {
    const data = await request.formData()
    const name = data.get('carName')
    const licensePlate = data.get('plateNumber')
    const horsepower = Number(data.get('horsePower'))
    // const fuelType = data.get('fuelType')
    const info = data.get('information')

    return {
      carTypeId: 2,
      name,
      licensePlate,
      horsepower,
      fuelType: 'electric',
      info,
    }
  } catch (error) {
    console.error(error)
  }
}
