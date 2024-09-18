/* eslint-disable max-lines-per-function */
import Input, { InputBehavior } from '../components/UI/Input'
import { useCarTypes } from '../hooks'
import Spinner from '../assets/Spinner'
import { AddCarFormProps, NewCarFormDto } from '../util/types'
import AddCarButtons from './UI/AddCarButtons'
import { useForm } from 'react-hook-form'

const inputWrapperStyles = 'flex flex-col gap-2'
const labelStyles = 'pl-2 font-inter text-sm text-moni-gray-100'
const fuelTypes = ['petrol', 'diesel', 'electric']

export default function AddCarForm({ handleSubmit }: AddCarFormProps) {
  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm<NewCarFormDto>({
    mode: 'onTouched',
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
          {...register('name', {
            required: 'name is required',
          })}
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
          {...register('typeName', {
            required: 'Car type is required',
          })}
        ></Input>
        {errors.typeName && <p className="text-red-400">typeName is required</p>}
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-5">
        <div className={inputWrapperStyles}>
          <label className={labelStyles}>License Plate</label>
          <Input
            {...register('licensePlate', {
              required: 'licensePlate is required',
            })}
            behavior={InputBehavior.INPUT}
            placeholder="e.g. M-XY 123"
          ></Input>
          {errors.licensePlate && <p className="text-red-400">{errors.licensePlate.message}</p>}
        </div>
        <div className={inputWrapperStyles}>
          <label className={labelStyles}>Horse Power</label>
          <Input
            {...register('horsepower', {
              required: 'horsepower is required',
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
          {...register('fuelType', {
            required: 'Fuel type is missing',
          })}
          behavior={InputBehavior.DROPDOWN}
          options={['e.g electric', ...fuelTypes]}
          disableOption={true}
        ></Input>
        {errors.fuelType && <p className="text-red-400">{errors.fuelType.message}</p>}
      </div>

      <div className={inputWrapperStyles}>
        <label className={labelStyles}>Additional Information</label>
        <Input
          {...register('info', {
            required: 'info is required',
          })}
          behavior={InputBehavior.INPUT}
          placeholder="e.g. No smoking"
        ></Input>
        {errors.info && <p className="text-red-400">{errors.info.message}</p>}
      </div>
      <AddCarButtons />
    </form>
  )
}
