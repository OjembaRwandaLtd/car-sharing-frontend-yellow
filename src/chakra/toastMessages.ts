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
