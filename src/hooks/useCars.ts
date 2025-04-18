import { CarDto } from '../types/apiTypes'
import { apiUrl } from '../constants/apiUrl'
import { getAuthToken } from '../util/auth'
import useAxios from 'axios-hooks'

export default function useCars() {
  return useAxios<CarDto[]>({
    headers: { Authorization: `Bearer ${getAuthToken()}` },
    url: `${apiUrl}/cars`,
  })
}
