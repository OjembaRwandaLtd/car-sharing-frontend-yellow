import { CarTypeDto } from './api'

export interface APIUser {
  userId: number
  token: string
}

export interface LoginDto {
  username: string
  password: string
}

export interface AddNewCarDto {
  carTypeId: number
  name: string
  fuelType: string
  horsepower: number
  licensePlate: string
  info: string
}
export interface NewCarFormDto {
  typeName: string
  name: string
  fuelType: string
  horsepower: number
  licensePlate: string
  info: string
}
export interface AddCarFormProps {
  handleSubmit: (data: NewCarFormDto, carTypes: CarTypeDto[]) => void
}
