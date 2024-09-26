import { apiUrl } from '../constants/apiUrl'
import { getAuthToken } from '../util/auth'
import useAxios from 'axios-hooks'
import { AddNewCarDto } from '../types/apiTypes'

export default function useAddCar() {
  return useAxios<AddNewCarDto>(
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${getAuthToken()}` },
      url: `${apiUrl}/cars`,
    },
    { manual: true },
  )
}
