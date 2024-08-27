interface Props {
  buttonText: string
  customStyles: string
}

export default function Button({ buttonText, customStyles }: Props) {
  return (
    <>
      <button
        className={`bg- mx-4 h-11 w-11/12 rounded-3xl text-center font-inter text-sm font-bold 
        ${customStyles} `}
      >
        {buttonText}
      </button>
    </>
  )
}
