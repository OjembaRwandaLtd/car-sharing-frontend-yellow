import axios from 'axios'
import { apiUrl } from '../constants/apiUrl'
import { getAuthToken } from './auth'

export async function deleteCar(signal: AbortSignal, deleteId: number): Promise<boolean> {
  try {
    const response = await axios.delete(`${apiUrl}/cars/${deleteId}`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
      signal,
    })

    return response.status === 204
  } catch (error) {
    return false
  }
}
