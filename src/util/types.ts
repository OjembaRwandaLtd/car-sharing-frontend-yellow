export interface APIUser {
  userId: number
  token: string
}

export interface LoginDto {
  username: string
  password: string
}

export interface AddNewCarType {
  carTypeId: number
  name: string
  fuelType: string
  horsepower: number
  licensePlate: string
  info: string
}
