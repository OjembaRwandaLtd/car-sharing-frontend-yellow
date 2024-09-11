import { Form } from 'react-router-dom'
import Button, { ButtonBehavior, ButtonStyles } from '../components/Button'
import Input, { InputBehavior } from './Input'

export default function AddCarForm() {
  const inputWrapperStyles = 'flex flex-col gap-2'

  return (
    <Form className="flex flex-col gap-4" method="post">
      <div className={inputWrapperStyles}>
        <label className="pl-2 font-inter text-sm text-primary-white">Name</label>
        <Input
          behavior={InputBehavior.INPUT}
          placeholder="e.g. My Nice Moni Car"
          name="carName"
        ></Input>
      </div>

      <div className={inputWrapperStyles}>
        <label className="pl-2 font-inter text-sm text-primary-white">Type</label>
        <Input
          behavior={InputBehavior.DROPDOWN}
          name="type"
          options={['Cooper', 'Fortuner', 'Hyundai']}
        ></Input>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-5">
        <div className={inputWrapperStyles}>
          <label className="pl-2 font-inter text-sm text-primary-white">License Plate</label>
          <Input
            behavior={InputBehavior.INPUT}
            placeholder="e.g. M-XY 123"
            name="plateNumber"
          ></Input>
        </div>
        <div className={inputWrapperStyles}>
          <label className="pl-2 font-inter text-sm text-primary-white">Horse Power</label>
          <Input behavior={InputBehavior.INPUT} placeholder="110" name="horsePower"></Input>
        </div>
      </div>

      <div className={inputWrapperStyles}>
        <label className="pl-2 font-inter text-sm text-primary-white">Fuel type</label>
        <Input behavior={InputBehavior.DROPDOWN} options={['e.g 150']} name="fuelType"></Input>
      </div>

      <div className={inputWrapperStyles}>
        <label className="pl-2 font-inter text-sm text-primary-white">Additional Information</label>
        <Input
          behavior={InputBehavior.INPUT}
          placeholder="e.g. No smoking"
          name="information"
        ></Input>
      </div>
      <div className="mt-28 flex gap-3">
        <Button behavior={ButtonBehavior.Button} customStyles={ButtonStyles.secondary}>
          Cancel
        </Button>
        <Button behavior={ButtonBehavior.Button} customStyles={ButtonStyles.primary}>
          Add Car
        </Button>
      </div>
    </Form>
  )
}
