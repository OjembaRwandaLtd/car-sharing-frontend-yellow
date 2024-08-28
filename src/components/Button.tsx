export enum ButtonStyles {
  Primary = 'bg-white text-primary-indigo',
  Secondary = 'border-2 border-white text-white',
}

interface ButtonProps {
  variantName: ButtonStyles
  children: React.ReactNode
}

export default function Button({ children, variantName }: ButtonProps) {
  return (
    <>
      <button
        className={`mx-4 h-11 w-11/12 rounded-3xl text-center font-inter text-sm font-bold 
        ${variantName} `}
      >
        {children}
      </button>
    </>
  )
}
