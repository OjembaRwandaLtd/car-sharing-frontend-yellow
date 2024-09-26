import {
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
import Button, { ButtonBehavior, ButtonStyles } from '../../components/UI/Button'
import { deleteCar } from '../../util/deleteCar'
import { CarDto } from '../../types/apiTypes'
import { RefetchFunction } from 'axios-hooks'
import { carDeleted, carNotDeleted } from '../../chakra/toastMessages'

interface DeleteButtonProps {
  refetch: RefetchFunction<unknown, CarDto[]>
  carId: number
}

export default function DeleteButton({ refetch, carId }: DeleteButtonProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const controller = new AbortController()
  const signal = controller.signal

  const handleDeleteCar = async () => {
    try {
      await deleteCar(signal, carId)
      toast(carDeleted)
      refetch()
    } catch (error) {
      toast(carNotDeleted)
    } finally {
      onClose()
    }
  }

  return (
    <div>
      <Button behavior={ButtonBehavior.BUTTON} customStyles={ButtonStyles.DELETE} onClick={onOpen}>
        Delete Car
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(2px)" />
        <ModalContent maxW={{ base: '90%', md: '400px' }}>
          <ModalHeader>Confirm Car Deletion</ModalHeader>
          <ModalBody>
            <Text fontSize="lg">Are you sure you want delete this car?</Text>
          </ModalBody>
          <ModalFooter justifyContent="space-between" gap={5}>
            <Button
              behavior={ButtonBehavior.BUTTON}
              customStyles={ButtonStyles.DELETE}
              onClick={handleDeleteCar}
            >
              Confirm
            </Button>
            <Button
              behavior={ButtonBehavior.BUTTON}
              customStyles={ButtonStyles.PRIMARY}
              onClick={onClose}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
