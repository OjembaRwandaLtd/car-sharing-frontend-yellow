import axios from 'axios'
import { apiUrl } from './apiUrl'
import { getAuthToken } from './auth'

export async function deleteCar(signal: AbortSignal, deleteId: number): Promise<boolean> {
  try {
    const response = await axios.delete(`${apiUrl}/cars/${deleteId}`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
      signal: signal,
    })

    if (response.status === 204) {
      alert('Successfully deleted car!')
      return true
    } else {
      alert("Couldn't delete car")
      return false
    }
  } catch (error) {
    alert("Couldn't delete car")
    return false
  }
}
