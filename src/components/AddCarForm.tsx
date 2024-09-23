/* eslint-disable max-lines-per-function */
import Input, { InputBehavior } from '../components/UI/Input'
import { useCarTypes } from '../hooks'
import Spinner from '../assets/Spinner'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { AddNewCarDto, CarTypeDto } from '../util/api'
import Button, { ButtonBehavior, ButtonStyles } from './UI/Button'
import CarSchema from '../util/carFormSchema'
import { RefetchFunction } from 'axios-hooks'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { Links } from '../routes/router'

const inputWrapperStyles = 'flex flex-col gap-2'
const labelStyles = 'pl-2 font-inter text-sm text-moni-gray-100'
const fuelTypes = ['petrol', 'diesel', 'electric']

export type CarSchemaType = z.infer<typeof CarSchema>

interface AddCarFormProps {
  execute: RefetchFunction<unknown, AddNewCarDto>
}

export default function AddCarForm({ execute }: AddCarFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CarSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(CarSchema),
  })
  const navigate = useNavigate()
  const toast = useToast()

  const [{ loading, error, data: carTypes }] = useCarTypes()

  function createCar(data: CarSchemaType, carTypes: CarTypeDto[]) {
    const [carType] = carTypes.filter(carType => carType.name === data.typeName)
    const { name, fuelType, horsepower, licensePlate, info } = data

    execute({
      data: {
        name,
        fuelType,
        horsepower: Number(horsepower),
        licensePlate,
        info,
        carTypeId: Number(carType.id),
      },
    })
      .then(() => {
        toast({
          title: 'New Car Was Added',
          description: 'New Car Was Added',
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        navigate(Links.MY_CARS)
      })
      .catch(() => {
        toast({
          title: 'Failed to add car',
          description: 'Something went wrong',
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
      })
  }

  if (loading) return <Spinner />
  if (error) throw new Error("Couldn't fetch car types")
  if (!carTypes) throw new Error('Car types not found')
  if (carTypes.length === 0) return <p>Sorry could not find car type</p>

  return (
    <form
      className="flex flex-col gap-4 md:gap-10 lg:gap-4"
      method="post"
      onSubmit={handleSubmit(formData => createCar(formData, carTypes))}
    >
      <div className={inputWrapperStyles}>
        <label className={labelStyles}>Name</label>
        <Input
          {...register('name')}
          behavior={InputBehavior.INPUT}
          placeholder="e.g. My Nice Moni Car"
        ></Input>
        {errors.name && <p className="text-red-400">{errors.name.message}</p>}
      </div>

      <div className={inputWrapperStyles}>
        <label className={labelStyles}>Type</label>
        <Input
          behavior={InputBehavior.DROPDOWN}
          options={carTypes.map(carType => carType.name)}
          {...register('typeName')}
        ></Input>
        {errors.typeName && <p className="text-red-400">{errors.typeName.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-5">
        <div className={inputWrapperStyles}>
          <label className={labelStyles}>License Plate</label>
          <Input
            {...register('licensePlate')}
            behavior={InputBehavior.INPUT}
            placeholder="e.g. AB-123-C"
          ></Input>
          {errors.licensePlate && <p className="text-red-400">{errors.licensePlate.message}</p>}
        </div>

        <div className={inputWrapperStyles}>
          <label className={labelStyles}>Horse Power</label>
          <Input
            {...register('horsepower', {
              valueAsNumber: true,
            })}
            behavior={InputBehavior.INPUT}
            placeholder="110"
          ></Input>
          {errors.horsepower && <p className="text-red-400">{errors.horsepower.message}</p>}
        </div>
      </div>

      <div className={inputWrapperStyles}>
        <label className={labelStyles}>Fuel type</label>
        <Input
          {...register('fuelType')}
          behavior={InputBehavior.DROPDOWN}
          options={['e.g electric', ...fuelTypes]}
          disableOption={true}
        ></Input>
        {errors.fuelType && <p className="text-red-400">{errors.fuelType.message}</p>}
      </div>

      <div className={inputWrapperStyles}>
        <label className={labelStyles}>Additional Information</label>
        <Input
          {...register('info')}
          behavior={InputBehavior.INPUT}
          placeholder="e.g. No smoking"
        ></Input>
        {errors.info && <p className="text-red-400">{errors.info.message}</p>}
      </div>

      <menu className="mt-24 flex gap-3 md:mt-7 md:place-items-start md:justify-between md:gap-20">
        <Button
          type="reset"
          path={Links.MY_CARS}
          behavior={ButtonBehavior.LINK}
          customStyles={ButtonStyles.SECONDARY}
        >
          Cancel
        </Button>
        <Button type="submit" behavior={ButtonBehavior.BUTTON} customStyles={ButtonStyles.PRIMARY}>
          Add Car
        </Button>
      </menu>
    </form>
  )
}
