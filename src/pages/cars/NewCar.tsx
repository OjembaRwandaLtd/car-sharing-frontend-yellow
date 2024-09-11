import Button, { ButtonBehavior, ButtonStyles } from '../../components/Button'
import Input, { InputBehavior } from '../../components/Input'

export default function NewCar() {
  return (
    <main className="w-full items-center px-4 py-5">
      <h1 className="text-center font-lora text-3xl font-medium uppercase text-primary-white">
        new car
      </h1>
      <form>
        <div className="flex flex-col gap-2">
          <label className="pl-2 font-inter text-sm text-primary-white">Name</label>
          <Input behavior={InputBehavior.INPUT} placeholder="e.g. My Nice Moni Car"></Input>
        </div>

        <div className="mt-3 flex flex-col gap-2">
          <label className="pl-2 font-inter text-sm text-primary-white">Type</label>
          <Input
            behavior={InputBehavior.DROPDOWN}
            name="type"
            options={['Moni Cooper', 'Moni Cooper', 'Moni Cooper']}
          ></Input>
        </div>

        <div className="my-4 mt-3 flex gap-x-2">
          <div className="flex flex-col gap-2">
            <label className="pl-2 font-inter text-sm text-primary-white">License Plate</label>
            <Input behavior={InputBehavior.INPUT} placeholder="e.g. M-XY 123"></Input>
          </div>
          <div className="flex flex-col gap-2">
            <label className="pl-2 font-inter text-sm text-primary-white">Horse Power</label>
            <Input behavior={InputBehavior.INPUT} placeholder="110"></Input>
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-2">
          <label className="pl-2 font-inter text-sm text-primary-white">Fuel type</label>
          <Input behavior={InputBehavior.DROPDOWN} name="type" options={['e.g 150']}></Input>
        </div>

        <div className="mt-3 flex flex-col gap-2">
          <label className="pl-2 font-inter text-sm text-primary-white">
            Additional Information
          </label>
          <Input behavior={InputBehavior.INPUT} placeholder="e.g. No smoking"></Input>
        </div>
        <div className="mt-3 flex gap-3">
          <Button behavior={ButtonBehavior.Button} customStyles={ButtonStyles.secondary}>
            cancel
          </Button>
          <Button behavior={ButtonBehavior.Button} customStyles={ButtonStyles.primary}>
            Add Car
          </Button>
        </div>
      </form>
    </main>
  )
}
