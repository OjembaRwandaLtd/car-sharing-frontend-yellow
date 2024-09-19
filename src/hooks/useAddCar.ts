import { apiUrl } from '../util/apiUrl'
import { getAuthToken } from '../util/auth'
import useAxios from 'axios-hooks'
import { AddNewCarDto } from '../util/api'

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
