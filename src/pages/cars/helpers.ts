import { CarTypeDto } from '../../types/apiTypes'

export function getCarType(carTypeId: number, carTypes: CarTypeDto[]) {
  const carType = carTypes?.find(type => type.id === carTypeId)
  if (!carType) throw new Error()

  return carType
}
