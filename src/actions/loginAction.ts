import { json, ActionFunction } from 'react-router-dom'
import { LoginErrors } from '../util/types'
import { getUser } from '../pages/login/loginUtils/getUser'

export const loginAction: ActionFunction = async ({ request }) => {
  try {
    const data = await request.formData()
    const username = data.get('usernameOrEmail') as string
    const password = data.get('password') as string

    if (!username || !password) {
      return json({ authError: 'Both fields are required.' })
    }

    const inputErrors: LoginErrors = {
      username: null,
      password: null,
    }

    if (inputErrors.password || inputErrors.username) {
      return json({ inputErrors })
    }

    const user = await getUser({ username, password })
    return json({ message: 'Success', user })
  } catch (error) {
    return json({ authError: 'Failed to login. Username or Password incorrect!' })
  }
}
