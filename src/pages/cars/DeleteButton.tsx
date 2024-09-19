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
} from '@chakra-ui/react'
import { useState } from 'react'
import Button, { ButtonBehavior, ButtonStyles } from '../../components/UI/Button'

interface DeleteButtonProps {
  setDeleteId: React.Dispatch<React.SetStateAction<number | null>>
  carId: number
}

export default function DeleteButton({ setDeleteId, carId }: DeleteButtonProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [message, setMessage] = useState('')

  const handleOpen = (msg: string) => {
    setMessage(msg)
    onOpen()
  }

  const handleOk = () => {
    setDeleteId(carId)
    onClose()
  }

  const handleCancel = () => {
    setDeleteId(null)
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
