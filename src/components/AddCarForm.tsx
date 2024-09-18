/* eslint-disable max-lines-per-function */
import Input, { InputBehavior } from '../components/UI/Input'
import { useCarTypes } from '../hooks'
import Spinner from '../assets/Spinner'
import AddCarButtons from './UI/AddCarButtons'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CarTypeDto } from '../util/api'
const inputWrapperStyles = 'flex flex-col gap-2'
const labelStyles = 'pl-2 font-inter text-sm text-moni-gray-100'
const fuelTypes = ['petrol', 'diesel', 'electric']

const CarSchema = z.object({
  name: z.string().min(3, { message: 'Car name must be at least 3 letters' }),
  typeName: z.string({ message: 'Car type is required' }),
  licensePlate: z
    .string()
    .min(1, { message: 'License plate is required' })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9 -]*$/, {
      message: 'License plate must be letters and numbers',
    }),
  horsepower: z
    .number({
      invalid_type_error: 'Horse power is required and must be a number',
    })
    .min(1, { message: 'Horse power must be greater than zero' }),
  fuelType: z.string({ message: 'Fuel type is required' }),
  info: z.string(),
})

export type CarSchemaType = z.infer<typeof CarSchema>

interface AddCarFormProps {
  handleSubmit: (data: CarSchemaType, carTypes: CarTypeDto[]) => void
}

export default function AddCarForm({ handleSubmit }: AddCarFormProps) {
  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm<CarSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(CarSchema),
  })

  const [{ loading, error, data: carTypes }] = useCarTypes()

  if (loading) return <Spinner />
  if (error) throw new Error("Couldn't fetch car types")
  if (!carTypes?.length) throw new Error('Car types not found')

  return (
    <form
      className="flex flex-col gap-4"
      method="post"
      onSubmit={handleFormSubmit(formData => handleSubmit(formData, carTypes))}
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
        {errors.typeName && <p className="text-red-400">typeName is required</p>}
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-5">
        <div className={inputWrapperStyles}>
          <label className={labelStyles}>License Plate</label>
          <Input
            {...register('licensePlate')}
            behavior={InputBehavior.INPUT}
            placeholder="e.g. M-XY 123"
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
      <AddCarButtons />
    </form>
  )
}
