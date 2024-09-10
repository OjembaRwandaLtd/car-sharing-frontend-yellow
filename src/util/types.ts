export interface Errors {
  username: string | null
  password: string | null
}

export interface ActionData {
  errors?: Errors
  error?: string
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
