import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { apiUrl } from '../constants/apiUrl'
import { CarState } from '../types/apiTypes'
import { getAuthToken } from '../util/auth'
import { useState } from 'react'
import {
  carLocked,
  carLockError,
  carNotLocked,
  carUnlocked,
  carUnlockError,
} from '../chakra/toastMessages'

export default function useChangeCarState({ carState }: { carState: CarState }) {
  const toast = useToast()
  const [isCarUsed, setIsCarUsed] = useState(false)
  const [initialCarState, setInitialCarState] = useState(carState)

  async function handleLockCar(carId: number) {
    try {
      const response = await axios.patch(
        `${apiUrl}/cars/${carId}`,
        { state: CarState.LOCKED },
        {
          headers: { Authorization: `Bearer ${getAuthToken()}` },
        },
      )

      if (response.status === 200) {
        setIsCarUsed(true)
        setInitialCarState(CarState.LOCKED)
        toast(carLocked)
        return
      }
      toast(carNotLocked)
    } catch (error) {
      toast(carLockError)
    }
  }

  async function handleUnlockCar(carId: number) {
    try {
      const response = await axios.patch(
        `${apiUrl}/cars/${carId}`,
        { state: CarState.UNLOCKED },
        {
          headers: { Authorization: `Bearer ${getAuthToken()}` },
        },
      )

      if (response.status === 200) {
        setIsCarUsed(true)
        setInitialCarState(CarState.UNLOCKED)
        toast(carUnlocked)
        return
      } else {
        toast(carNotLocked)
      }
    } catch (error) {
      toast(carUnlockError)
    }
  }

  return { initialCarState, isCarUsed, setIsCarUsed, handleLockCar, handleUnlockCar }
}
