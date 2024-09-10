import { APIUser, User } from '../../util/types'

export async function getUser({ username, password }: User) {
  try {
    const response = await fetch('http://3.69.78.92/auth/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })

    if (!response.ok) {
      throw new Error('Invalid credentials')
    }

    const user = (await response.json()) as APIUser

    if (!user) {
      throw new Error('Invalid credentials')
    }

    return user
  } catch (error) {
    console.error(error)
    throw new Error('An error occured')
  }
}
