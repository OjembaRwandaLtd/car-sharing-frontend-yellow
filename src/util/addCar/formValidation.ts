import { NewCarFormDto } from '../types'

export function isValidCarForm(formData: NewCarFormDto) {
  const { typeName, name, fuelType, horsepower, licensePlate, info } = formData
  const alphanumeric = /^[A-Za-z0-9_-]*$/
  const lettersOnly = /^[A-Za-z_-]*$/
  const numbersOnly = /^[0-9_-]*$/

  if (!typeName || !name || !fuelType || !info) {
    return false
  }

  if (!horsepower || isNaN(horsepower)) {
    return false
  }

  if (!licensePlate || !alphanumeric.test(licensePlate)) {
    return false
  }

  if (numbersOnly.test(licensePlate)) {
    return false
  }

  if (lettersOnly.test(licensePlate)) {
    return false
  }

  return true
}
