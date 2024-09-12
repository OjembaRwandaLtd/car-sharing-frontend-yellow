import axios from 'axios'
import { apiUrl } from './apiUrl'
import { getAuthToken } from './auth'

export async function deleteCar(signal: AbortSignal, deleteId: number) {
  try {
    const response = await axios.delete(`${apiUrl}cars/${deleteId}`, {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
      },
      signal: signal,
    })
    if (response.status === 204) {
      alert('Successfully deleted car!')
      window.location.reload()
    } else alert("Couldn't delete car")
  } catch (error) {
    alert("Couldn't delete car")
  }
}
