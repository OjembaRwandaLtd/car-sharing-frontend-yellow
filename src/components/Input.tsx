interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
}

export default function Input({ icon, ...otherProps }: InputProps) {
  return (
    <div className="flex w-full gap-4 rounded-full bg-light-indigo px-6 py-4 text-primary-white">
      {icon}
      <input
        className=" w-full bg-transparent placeholder:text-primary-white focus:outline-none"
        {...otherProps}
      />
    </div>
  )
}
