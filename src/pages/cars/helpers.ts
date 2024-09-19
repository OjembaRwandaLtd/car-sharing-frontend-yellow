import { CarTypeDto } from '../../util/api'

export function handleDeleteCar(
  carId: number,
  setDeleteId: React.Dispatch<React.SetStateAction<number | null>>,
) {
  const text = 'Do you really want to delete this car?'
  if (confirm(text)) setDeleteId(carId)
}

export function getCarType(carTypeId: number, carTypes: CarTypeDto[]) {
  const carType = carTypes?.find(type => type.id === carTypeId)
  if (!carType) throw new Error('Car type not found')
  return carType
}
