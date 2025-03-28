import { apiUrl } from '../constants/apiUrl'
import { getAuthToken } from '../util/auth'
import { CarDto } from '../types/apiTypes'
import useAxios from 'axios-hooks'

export default function useCar(id: number) {
  return useAxios<CarDto>({
    headers: { Authorization: `Bearer ${getAuthToken()}` },
    url: `${apiUrl}/cars/${id}`,
  })
}
