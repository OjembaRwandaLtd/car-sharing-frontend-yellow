export interface LoginErrors {
  username: string | null
  password: string | null
}

export interface LoginActionData {
  inputErrors?: LoginErrors
  authError?: string
  user?: APIUser
}

export interface APIUser {
  userId: number
  token: string
}

export interface User {
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
