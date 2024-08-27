interface Props {
  car: string
  isActive: boolean
}

const styles = {
  backgroundColor: 'white',
  color: '#265E78',
}

const transparentStyles = {
  color: 'white',
  border: '2px solid white',
}

export default function Button({ car, isActive }: Props) {
  return (
    <>
      <button
        style={isActive ? styles : transparentStyles}
        className="mx-4 h-11 w-11/12 rounded-3xl text-center font-inter text-sm font-bold"
      >
        {car}
      </button>
    </>
  )
}
