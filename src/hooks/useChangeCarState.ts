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

export default function useChangeCarState() {
  const toast = useToast()
  const [isCarUsed, setIsCarUsed] = useState(false)
  const [carState, setCarState] = useState(CarState.LOCKED)

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
        setCarState(CarState.LOCKED)
        toast(carLocked)
        return
      } else {
        toast(carNotLocked)
      }
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
        setCarState(CarState.UNLOCKED)
        toast(carUnlocked)
        return
      } else {
        toast(carNotLocked)
      }
    } catch (error) {
      toast(carUnlockError)
    }
  }

  return { isCarUsed, setIsCarUsed, carState, handleLockCar, handleUnlockCar }
}
