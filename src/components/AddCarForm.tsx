import { Form } from 'react-router-dom'
import Button, { ButtonBehavior, ButtonStyles } from '../components/UI/Button'
import Input, { InputBehavior } from '../components/UI/Input'
import { useCarTypes } from '../hooks'
import Spinner from '../assets/Spinner'

export default function AddCarForm() {
  const inputWrapperStyles = 'flex flex-col gap-2'
  const [{ loading, error, data: carTypes }] = useCarTypes()

  if (loading) return <Spinner />

  if (error) throw new Error("Couldn't fetch car types")

  if (!carTypes) throw new Error('Car types not found')

  const fuelTypes = ['petrol', 'diesel', 'electric']

  return (
    <Form className="flex flex-col gap-4" method="post">
      <div className={inputWrapperStyles}>
        <label className="pl-2 font-inter text-sm text-moni-gray-100">Name</label>
        <Input
          behavior={InputBehavior.INPUT}
          placeholder="e.g. My Nice Moni Car"
          name="carName"
        ></Input>
      </div>

      <div className={inputWrapperStyles}>
        <label className="pl-2 font-inter text-sm text-moni-gray-100">Type</label>
        <Input
          behavior={InputBehavior.DROPDOWN}
          name="type"
          options={carTypes.map(carType => carType.name)}
        ></Input>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-5">
        <div className={inputWrapperStyles}>
          <label className="pl-2 font-inter text-sm text-moni-gray-100">License Plate</label>
          <Input
            behavior={InputBehavior.INPUT}
            placeholder="e.g. M-XY 123"
            name="plateNumber"
          ></Input>
        </div>
        <div className={inputWrapperStyles}>
          <label className="pl-2 font-inter text-sm text-moni-gray-100">Horse Power</label>
          <Input behavior={InputBehavior.INPUT} placeholder="110" name="horsePower"></Input>
        </div>
      </div>

      <div className={inputWrapperStyles}>
        <label className="pl-2 font-inter text-sm text-moni-gray-100">Fuel type</label>
        <Input
          behavior={InputBehavior.DROPDOWN}
          options={['e.g electric', ...fuelTypes]}
          name="fuelType"
          disableOption={true}
        ></Input>
      </div>

      <input type="hidden" name="carTypes" value={JSON.stringify(carTypes)} />

      <div className={inputWrapperStyles}>
        <label className="pl-2 font-inter text-sm text-moni-gray-100">Additional Information</label>
        <Input behavior={InputBehavior.INPUT} placeholder="e.g. No smoking" name="info"></Input>
      </div>
      <div className="mt-28 flex gap-3">
        <Button type="reset" behavior={ButtonBehavior.BUTTON} customStyles={ButtonStyles.SECONDARY}>
          Cancel
        </Button>
        <Button type="submit" behavior={ButtonBehavior.BUTTON} customStyles={ButtonStyles.PRIMARY}>
          Add Car
        </Button>
      </div>
    </Form>
  )
}
