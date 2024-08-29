import classNames from 'classnames'
import { ButtonHTMLAttributes } from 'react'
export const ButtonStyles = {
  primary: 'bg-white text-primary-indigo',
  secondary: 'border-2 border-white text-white',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof ButtonStyles
  children: React.ReactNode
  handleClick: () => void
  disabled: boolean
}

export default function Button({ children, variant, handleClick, disabled, ...rest }: ButtonProps) {
  const buttonClass = classNames(
    'rounded-3xl py-3 text-center font-inter text-sm font-bold w-full',
    ButtonStyles[variant],
  )
  return (
    <>
      <button className={buttonClass} {...rest} onClick={handleClick} aria-disabled={disabled}>
        {children}
      </button>
    </>
  )
}
