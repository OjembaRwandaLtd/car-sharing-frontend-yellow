import { CarState, ChangeCarStateDto } from '../types/apiTypes'

import { apiUrl } from '../constants/apiUrl'
import { getAuthToken } from './auth'

export const setCarState = async (id: number, newState: CarState): Promise<void> => {
  const changeCarState: ChangeCarStateDto = {
    state: newState,
  }

  const response = await fetch(`${apiUrl}/cars/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getAuthToken()}`,
    },
    body: JSON.stringify(changeCarState),
  })

  if (!response.ok) {
    throw new Error()
  }
}
