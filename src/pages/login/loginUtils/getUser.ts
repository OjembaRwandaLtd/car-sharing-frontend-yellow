import { apiUrl } from '../../../util/apiUrl'
import { APIUser, LoginDto } from '../../../util/api'
import axios from 'axios'

export async function getUser({ username, password }: LoginDto) {
  try {
    const res = await axios.post(`${apiUrl}/auth`, { username, password })
    const { data: user } = res as { data: APIUser }

    return user
  } catch (error) {
    throw new Error('Failed to get user')
  }
}
