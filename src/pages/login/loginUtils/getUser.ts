import { apiUrl } from '../../../util/apiUrl'
import { APIUser, User } from '../../../util/types'
import axios from 'axios'

export async function getUser({ username, password }: User) {
  try {
    const res = await axios.post(`${apiUrl}/auth`, { username, password })
    const { data: user } = res as { data: APIUser }

    return user
  } catch (error) {
    throw new Error('Failed to get user')
  }
}
