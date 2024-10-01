import { UseToastOptions } from '@chakra-ui/react'

export const carAdded: UseToastOptions = {
  title: 'New Car Was Added',
  description: 'New Car Was Added',
  status: 'success',
  duration: 2000,
  isClosable: true,
}

export const carNotAdded: UseToastOptions = {
  title: 'Failed to add car',
  description: 'Something went wrong',
  status: 'error',
  duration: 2000,
  isClosable: true,
}

export const carDeleted: UseToastOptions = {
  title: 'Car Was Deleted',
  description: 'Car Was Deleted',
  status: 'success',
  duration: 5000,
  isClosable: true,
}

export const carNotDeleted: UseToastOptions = {
  title: 'Failed To Delete Car',
  description: 'Car Was Not Deleted',
  status: 'error',
  duration: 5000,
  isClosable: true,
}

export const requestDeclined: UseToastOptions = {
  title: 'Booking State Updated',
  description: 'Booking Status Updated',
  status: 'success',
  duration: 5000,
  isClosable: true,
}

export const requestNotDeclined: UseToastOptions = {
  title: 'State Not Updated',
  description: 'Could Not Decline The Request',
  status: 'error',
  duration: 5000,
  isClosable: true,
}

export const requestAccepted: UseToastOptions = {
  title: 'Booking State Updated',
  description: 'Booking Status Updated',
  status: 'success',
  duration: 5000,
  isClosable: true,
}

export const requestNotAccepted: UseToastOptions = {
  title: 'State Not Updated',
  description: 'Could Not Accept The Request',
  status: 'error',
  duration: 5000,
  isClosable: true,
}

export const bookingAdded: UseToastOptions = {
  title: 'Booking request sent',
  description: 'New Car Was Added',
  status: 'success',
  duration: 2000,
  isClosable: true,
}

export const bookingNotAdded: UseToastOptions = {
  title: 'Failed to book car',
  description: 'Something went wrong',
  status: 'error',
  duration: 2000,
  isClosable: true,
}

export const carPickedUp: UseToastOptions = {
  title: 'Booking State Updated',
  description: 'Car Was Picked Up',
  status: 'success',
  duration: 5000,
  isClosable: true,
}

export const carNotPickedUp: UseToastOptions = {
  title: 'State Not Updated',
  description: 'Car Was Not Picked Up',
  status: 'error',
  duration: 5000,
  isClosable: true,
}

export const carReturned: UseToastOptions = {
  title: 'State Was Updated',
  description: 'Car Was Returned',
  status: 'success',
  duration: 5000,
  isClosable: true,
}

export const carNotReturned: UseToastOptions = {
  title: 'State Not Updated',
  description: 'Car Was Not Returned',
  status: 'error',
  duration: 5000,
  isClosable: true,
}

export const carLocked: UseToastOptions = {
  title: 'Car was locked.',
  description: 'Car was locked successfully.',
  status: 'success',
  duration: 5000,
  isClosable: true,
}

export const carNotLocked: UseToastOptions = {
  title: 'Failed to lock the car.',
  description: 'Could not lock a car.',
  status: 'error',
  duration: 5000,
  isClosable: true,
}

export const carLockError: UseToastOptions = {
  title: 'Internal Server Error.',
  description: 'Could not lock a car.',
  status: 'error',
  duration: 5000,
  isClosable: true,
}

export const carUnlocked: UseToastOptions = {
  title: 'Car unlocked.',
  description: 'You can now use the car.',
  status: 'success',
  duration: 5000,
  isClosable: true,
}

export const carNotUnlocked: UseToastOptions = {
  title: 'Failed to unlock the car.',
  description: 'Could not unlock a car.',
  status: 'error',
  duration: 5000,
  isClosable: true,
}

export const carUnlockError: UseToastOptions = {
  title: 'Internal Server Error.',
  description: 'Could not unlock a car.',
  status: 'error',
  duration: 5000,
  isClosable: true,
}
