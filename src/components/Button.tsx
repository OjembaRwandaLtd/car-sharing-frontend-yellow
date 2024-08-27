interface Props {
  buttonText: string
  background?: string
  textColor: string
  border: {
    color?: string
    radius?: string
    width?: string
  }
}

export default function Button({ buttonText, background, textColor, border }: Props) {
  return (
    <>
      <button
        className={`bg- mx-4 h-11 w-11/12 rounded-3xl text-center font-inter text-sm font-bold ${background} ${textColor} border-${border.width} border-${border.radius}
        ${border.color} `}
      >
        {buttonText}
      </button>
    </>
  )
}
