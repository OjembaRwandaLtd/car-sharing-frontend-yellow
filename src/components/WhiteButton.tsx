interface Props {
  car: string
}

export default function WhiteButton({ car }: Props) {
  return (
    <>
      <button className="mx-4 h-11 w-11/12 rounded-3xl bg-white text-center font-inter text-sm font-bold text-primary-indigo">
        {car}
      </button>
    </>
  )
}
