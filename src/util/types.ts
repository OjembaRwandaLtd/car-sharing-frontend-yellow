import { Dispatch, SetStateAction } from 'react'
import { CarDto, UserDto } from './api'

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

export interface UserContextType {
  loggedUser: UserDto
  userCars: CarDto[]
  setUserCars: Dispatch<SetStateAction<CarDto[]>>
}
