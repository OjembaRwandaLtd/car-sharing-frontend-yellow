import Button, { ButtonBehavior, ButtonStyles } from './Button'

export default function AddCarButtons() {
  return (
    <menu className="mt-28 flex gap-3">
      <Button type="reset" behavior={ButtonBehavior.BUTTON} customStyles={ButtonStyles.SECONDARY}>
        Cancel
      </Button>
      <Button type="submit" behavior={ButtonBehavior.BUTTON} customStyles={ButtonStyles.PRIMARY}>
        Add Car
      </Button>
    </menu>
  )
}
