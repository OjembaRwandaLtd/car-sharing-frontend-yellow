export enum ButtonStyles {
  Primary = 'bg-white text-primary-indigo',
  Secondary = 'border-2 border-white text-white',
}

interface ButtonProps {
  ButtonStyles: ButtonStyles
  children: React.ReactNode
}

export default function Button({ children, ButtonStyles }: ButtonProps) {
  return (
    <>
      <button
        className={`mx-3 rounded-3xl py-3 text-center font-inter text-sm font-bold 
        ${ButtonStyles} `}
      >
        {children}
      </button>
    </>
  )
}
