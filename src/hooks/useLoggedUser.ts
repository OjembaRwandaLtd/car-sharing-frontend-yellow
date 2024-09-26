import { UserDto } from '../types/apiTypes'
import { apiUrl } from '../constants/apiUrl'
import { getAuthToken } from '../util/auth'
import useAxios from 'axios-hooks'

export default function useLoggedUser() {
  return useAxios<UserDto>({
    headers: { Authorization: `Bearer ${getAuthToken()}` },
    url: `${apiUrl}/auth`,
  })
}
