import { Form } from 'react-router-dom'
import Button, { ButtonBehavior, ButtonStyles } from '../../components/Button'
import Input, { InputBehavior } from '../../components/Input'

export default function NewCar() {
  const inputWrapperStyles = 'flex flex-col gap-2'
  return (
    <main className="w-full items-center px-4 py-5">
      <h1 className="text-center font-lora text-3xl font-medium uppercase text-primary-white">
        new car
      </h1>
      <Form className="flex flex-col gap-4">
        <div className={inputWrapperStyles}>
          <label className="pl-2 font-inter text-sm text-primary-white">Name</label>
          <Input behavior={InputBehavior.INPUT} placeholder="e.g. My Nice Moni Car"></Input>
        </div>

        <div className={inputWrapperStyles}>
          <label className="pl-2 font-inter text-sm text-primary-white">Type</label>
          <Input
            behavior={InputBehavior.DROPDOWN}
            name="type"
            options={['Moni Cooper', 'Moni Cooper', 'Moni Cooper']}
          ></Input>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-5">
          <div className={inputWrapperStyles}>
            <label className="pl-2 font-inter text-sm text-primary-white">License Plate</label>
            <Input behavior={InputBehavior.INPUT} placeholder="e.g. M-XY 123"></Input>
          </div>
          <div className={inputWrapperStyles}>
            <label className="pl-2 font-inter text-sm text-primary-white">Horse Power</label>
            <Input behavior={InputBehavior.INPUT} placeholder="110"></Input>
          </div>
        </div>

        <div className={inputWrapperStyles}>
          <label className="pl-2 font-inter text-sm text-primary-white">Fuel type</label>
          <Input behavior={InputBehavior.DROPDOWN} name="type" options={['e.g 150']}></Input>
        </div>

        <div className={inputWrapperStyles}>
          <label className="pl-2 font-inter text-sm text-primary-white">
            Additional Information
          </label>
          <Input behavior={InputBehavior.INPUT} placeholder="e.g. No smoking"></Input>
        </div>
        <div className="flex gap-3 mt-28">
          <Button behavior={ButtonBehavior.Button} customStyles={ButtonStyles.secondary}>
            Cancel
          </Button>
          <Button behavior={ButtonBehavior.Button} customStyles={ButtonStyles.primary}>
            Add Car
          </Button>
        </div>
      </Form>
    </main>
  )
}
