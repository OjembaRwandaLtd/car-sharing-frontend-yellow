import { json, ActionFunction } from 'react-router-dom'
import { Errors } from '../Login'

/* eslint-disable no-console */
export const loginAction: ActionFunction = async ({ request }) => {
  try {
    const data = await request.formData()
    const username = data.get('usernameOrEmail') as string
    const password = data.get('password') as string

    if (!username || !password) {
      return json({ error: 'Both fields are required.' })
    }

    const errors: Errors = {
      username: null,
      password: null,
    }

    if (typeof username !== 'string' || username.length < 5) {
      errors.username = 'Username must have 5 characters'
    }

    if (typeof password !== 'string' || password.length < 6) {
      errors.password = 'Password must have at least 6 characters'
    }

    // Return errors if we have them
    if (errors.password || errors.username) {
      return json({ errors })
    }

    const user = {
      username,
      password,
    }

    console.log('Database operations')
    return json({ message: 'Success', user })
  } catch (error) {
    return json({ error: 'Something went wrong.' })
  }
}
