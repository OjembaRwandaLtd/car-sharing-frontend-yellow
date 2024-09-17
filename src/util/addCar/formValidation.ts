import { NewCarFormDto } from '../types'

export function isValidCarForm(formData: NewCarFormDto) {
  const { typeName, name, fuelType, horsepower, licensePlate, info } = formData
  const alphanumeric = /^[A-Za-z0-9_-]*$/

  if (!typeName || !name || !fuelType || !info) {
    return false
  }
  if (!horsepower || isNaN(horsepower)) {
    return false
  }
  if (!licensePlate || !alphanumeric.test(licensePlate)) {
    return false
  }

  return true
}
