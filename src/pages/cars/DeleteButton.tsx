import {
  Button as ChakraButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Text,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import Button, { ButtonBehavior, ButtonStyles } from '../../components/UI/Button'
import { deleteCar } from '../../util/deleteCar'
import { CarDto } from '../../util/api'
import { RefetchFunction } from 'axios-hooks'

interface DeleteButtonProps {
  refetch: RefetchFunction<unknown, CarDto[]>
  carId: number
}

export default function DeleteButton({ refetch, carId }: DeleteButtonProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [message, setMessage] = useState('')
  const toast = useToast()
  const controller = new AbortController()
  const signal = controller.signal

  const deleteCarAsync = async () => {
    try {
      await deleteCar(signal, carId)
      toast({
        title: 'Car Was Deleted',
        description: 'Car Was Deleted',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
      refetch()
    } catch (error) {
      toast({
        title: 'Car Was Not Deleted',
        description: 'Car Was Not Deleted',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }
  }

  const handleOpen = (msg: string) => {
    setMessage(msg)
    onOpen()
  }
  const handleOk = () => {
    deleteCarAsync()
    onClose()
  }

  const handleCancel = () => {
    onClose()
  }

  return (
    <div>
      <Button
        behavior={ButtonBehavior.BUTTON}
        customStyles={ButtonStyles.DELETE}
        onClick={() => handleOpen('Are you sure you want delete this car?')}
      >
        Delete Car
      </Button>

      <Modal isOpen={isOpen} onClose={handleCancel}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete a Car</ModalHeader>
          <ModalBody>
            <Text>{message}</Text>
          </ModalBody>
          <ModalFooter>
            <ChakraButton colorScheme="blue" mr={3} onClick={handleOk}>
              OK
            </ChakraButton>
            <ChakraButton variant="outline" onClick={handleCancel}>
              Cancel
            </ChakraButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
