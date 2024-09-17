import Input, { InputBehavior } from '../components/UI/Input'
import { useCarTypes } from '../hooks'
import Spinner from '../assets/Spinner'
import { useState } from 'react'
import { AddCarFormProps, NewCarFormDto } from '../util/types'
import AddCarButtons from './UI/AddCarButtons'

const inputWrapperStyles = 'flex flex-col gap-2'
const labelStyles = 'pl-2 font-inter text-sm text-moni-gray-100'
const fuelTypes = ['petrol', 'diesel', 'electric']

export default function AddCarForm({ handleSubmit }: AddCarFormProps) {
  const [{ loading, error, data: carTypes }] = useCarTypes()
  const [formData, setFormData] = useState<NewCarFormDto>({
    typeName: '',
    name: '',
    fuelType: '',
    horsepower: 0,
    licensePlate: '',
    info: '',
  })

  if (loading) return <Spinner />
  if (error) throw new Error("Couldn't fetch car types")
  if (!carTypes?.length) throw new Error('Car types not found')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <form
      className="flex flex-col gap-4"
      method="post"
      onSubmit={e => handleSubmit(e, formData, carTypes)}
    >
      <div className={inputWrapperStyles}>
        <label className={labelStyles}>Name</label>
        <Input
          onChange={handleChange}
          behavior={InputBehavior.INPUT}
          placeholder="e.g. My Nice Moni Car"
          name="name"
        ></Input>
      </div>

      <div className={inputWrapperStyles}>
        <label className={labelStyles}>Type</label>
        <Input
          behavior={InputBehavior.DROPDOWN}
          name="typeName"
          options={carTypes.map(carType => carType.name)}
          onChange={handleChange}
        ></Input>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-5">
        <div className={inputWrapperStyles}>
          <label className={labelStyles}>License Plate</label>
          <Input
            onChange={handleChange}
            behavior={InputBehavior.INPUT}
            placeholder="e.g. M-XY 123"
            name="licensePlate"
          ></Input>
        </div>
        <div className={inputWrapperStyles}>
          <label className={labelStyles}>Horse Power</label>
          <Input
            onChange={handleChange}
            behavior={InputBehavior.INPUT}
            placeholder="110"
            name="horsepower"
          ></Input>
        </div>
      </div>

      <div className={inputWrapperStyles}>
        <label className={labelStyles}>Fuel type</label>
        <Input
          onChange={handleChange}
          behavior={InputBehavior.DROPDOWN}
          options={['e.g electric', ...fuelTypes]}
          name="fuelType"
          disableOption={true}
        ></Input>
      </div>

      <div className={inputWrapperStyles}>
        <label className={labelStyles}>Additional Information</label>
        <Input
          onChange={handleChange}
          behavior={InputBehavior.INPUT}
          placeholder="e.g. No smoking"
          name="info"
        ></Input>
      </div>
      <AddCarButtons />
    </form>
  )
}
