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
