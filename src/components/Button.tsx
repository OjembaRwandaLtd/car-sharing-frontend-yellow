import classNames from 'classnames'
export const ButtonStyles = {
  primary: 'bg-white text-primary-indigo',
  secondary: 'border-2 border-white text-white',
}

interface ButtonProps {
  variant: keyof typeof ButtonStyles
  children: React.ReactNode
  handleClick: () => void
  disabled: boolean
}

export default function Button({ children, variant, handleClick, disabled }: ButtonProps) {
  const buttonClass = classNames(
    'mx-3 rounded-3xl py-3 text-center font-inter text-sm font-bold',
    ButtonStyles[variant],
  )
  return (
    <>
      <button className={buttonClass} onClick={handleClick} aria-disabled={disabled}>
        {children}
      </button>
    </>
  )
}
