import { CarTypeDto } from '../types/apiTypes'
import { apiUrl } from '../constants/apiUrl'
import { getAuthToken } from '../util/auth'
import useAxios from 'axios-hooks'

export default function useCarType(id: number | string) {
  return useAxios<CarTypeDto>({
    headers: { Authorization: `Bearer ${getAuthToken()}` },
    url: `${apiUrl}/car-types/${id}`,
  })
}
