import { ActionFunction } from 'react-router-dom'
import { CarTypeDto } from '../util/api'

export const addCarAction: ActionFunction = async ({ request }) => {
  try {
    const data = await request.formData()
    const name = data.get('carName') as string
    const type = data.get('type') as string
    const licensePlate = data.get('plateNumber') as string
    const horsepower = Number(data.get('horsePower')) as number
    const fuelType = data.get('fuelType') as string
    const info = data.get('info') as string
    const carTypes = data.get('carTypes') as string

    const carTypesData = JSON.parse(carTypes) as CarTypeDto[]
    const [carType] = carTypesData.filter(carType => carType.name === type)

    if (!name || !licensePlate || !carType || !horsepower || !fuelType || !info) {
      return null
    }

    return {
      carTypeId: carType.id,
      name,
      fuelType,
      horsepower,
      licensePlate,
      info,
    }
  } catch (error) {
    throw new Error("Couldn't add car")
  }
}
