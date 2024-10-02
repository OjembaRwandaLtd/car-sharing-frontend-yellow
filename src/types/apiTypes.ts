import { Dispatch, SetStateAction } from 'react'

interface UserDto {
  id: number
  name: string
}

interface CarTypeDto {
  id: number
  name: string
  imageUrl: string
}

enum CarState {
  LOCKED = 'LOCKED',
  UNLOCKED = 'UNLOCKED',
}

export enum FuelType {
  PETROL = 'petrol',
  DIESEL = 'diesel',
  ELECTRIC = 'electric',
}

interface CarDto {
  id: number
  name: string
  carTypeId: number
  ownerId: number
  horsepower?: number
  info?: string
  licensePlate?: string | null
  fuelType: FuelType
  state: CarState
}

interface NewCarDto {
  name: string
  userId: number
  carTypeId: number
  horsepower: number | null
  info: string | null
  plate: string | null
  fuelType: FuelType
}
interface ChangeCarStateDto {
  state: CarState
}

enum BookingState {
  ACCEPTED = 'ACCEPTED',
  PICKED_UP = 'PICKED_UP',
  RETURNED = 'RETURNED',
  DECLINED = 'DECLINED',
  PENDING = 'PENDING',
}

interface BookingDto {
  id: number
  startDate: Date
  endDate: Date
  carId: number
  state: BookingState
  renterId: number
}

export type BookingWithReferences = BookingDto & {
  car: CarDto & { owner: UserDto }
  renter: UserDto
}

interface NewBookingDto {
  startDate: Date
  endDate: Date
  carId: number
  renterId: number
}
type AddBookingDto = Omit<NewBookingDto, 'renterId'>
interface ChangeBookingStateDto {
  state: BookingState
}

interface APIUser {
  userId: number
  token: string
}

interface LoginDto {
  username: string
  password: string
}

interface AddNewCarDto {
  carTypeId: number
  name: string
  fuelType: string
  horsepower: number
  licensePlate: string
  info: string
}

interface UserContextType {
  loggedUser: UserDto
  userCars: CarDto[]
  setUserCars: Dispatch<SetStateAction<CarDto[]>>
}

interface BookingStatusDetailsProps {
  state: BookingState
  startTime: string
  startDate: string
  bookingId: number | string
  refetch: () => void
  carId: number
  carState: CarState
}

export type {
  CarDto,
  NewCarDto,
  CarTypeDto,
  UserDto,
  BookingDto,
  NewBookingDto,
  ChangeBookingStateDto,
  ChangeCarStateDto,
  APIUser,
  LoginDto,
  AddNewCarDto,
  UserContextType,
  AddBookingDto,
  BookingStatusDetailsProps,
}
export { BookingState, CarState }
