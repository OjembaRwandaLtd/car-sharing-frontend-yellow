import { json, ActionFunction } from 'react-router-dom'
import { LoginErrors } from '../util/types'
import { getUser } from '../pages/login/loginUtils/getUser'

export const loginAction: ActionFunction = async ({ request }) => {
  try {
    const data = await request.formData()
    const username = data.get('usernameOrEmail') as string
    const password = data.get('password') as string

    if (!username || !password) {
      return json({ error: 'Both fields are required.' })
    }

    const errors: LoginErrors = {
      username: null,
      password: null,
    }

    if (typeof username !== 'string' || username.length < 5) {
      errors.username = 'Username must have 5 characters'
    }

    if (typeof password !== 'string' || password.length < 6) {
      errors.password = 'Password must have at least 6 characters'
    }

    if (errors.password || errors.username) {
      return json({ errors })
    }

    const user = await getUser({ username, password })
    return json({ message: 'Success', user })
  } catch (error) {
    return json({ error: 'Failed to login. Email or Password incorrect!' })
  }
}
