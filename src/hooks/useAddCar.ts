import { apiUrl } from '../util/apiUrl'
import { getAuthToken } from '../util/auth'
import useAxios from 'axios-hooks'
import { AddNewCarType } from '../util/types'

export default function useAddCar() {
  const [{ data, loading, error }, execute] = useAxios(
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${getAuthToken()}` },
      url: `${apiUrl}/cars`,
    },
    { manual: true },
  )
  return {
    data,
    loading,
    error,
    executeAddCar: (carData: AddNewCarType) => execute({ data: carData }),
  }
}
